import { useNostr } from '@nostrify/react';
import { useQuery } from '@tanstack/react-query';
import type { NostrEvent } from '@nostrify/nostrify';

export interface CalendarEvent {
  id: string;
  pubkey: string;
  title: string;
  description: string;
  location?: string;
  image?: string;
  startTimestamp: number;
  endTimestamp?: number;
  startTzid?: string;
  geohash?: string;
  tags: string[];
  originalEvent: NostrEvent;
}

/**
 * Validates a NIP-52 calendar event has required fields
 */
function validateCalendarEvent(event: NostrEvent): boolean {
  // Must be a time-based or date-based calendar event
  if (![31922, 31923].includes(event.kind)) return false;

  // Required tags: d, title, start
  const d = event.tags.find(([name]) => name === 'd')?.[1];
  const title = event.tags.find(([name]) => name === 'title')?.[1];
  const start = event.tags.find(([name]) => name === 'start')?.[1];

  if (!d || !title || !start) return false;

  // For time-based events (31923), start should be a unix timestamp
  if (event.kind === 31923) {
    const timestamp = parseInt(start);
    if (isNaN(timestamp) || timestamp <= 0) return false;
  }

  // For date-based events (31922), start should be YYYY-MM-DD format
  if (event.kind === 31922) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(start)) return false;
  }

  return true;
}

/**
 * Parses a NostrEvent into a CalendarEvent
 */
function parseCalendarEvent(event: NostrEvent): CalendarEvent {
  const getTag = (name: string) => event.tags.find(([n]) => n === name)?.[1];
  const getTags = (name: string) => event.tags.filter(([n]) => n === name).map(([_, v]) => v);

  const title = getTag('title') || getTag('name') || 'Untitled Event';
  const startRaw = getTag('start') || '';
  const endRaw = getTag('end');

  let startTimestamp: number;
  let endTimestamp: number | undefined;

  if (event.kind === 31923) {
    // Time-based event - timestamps are Unix seconds
    startTimestamp = parseInt(startRaw) * 1000;
    endTimestamp = endRaw ? parseInt(endRaw) * 1000 : undefined;
  } else {
    // Date-based event - dates are YYYY-MM-DD
    startTimestamp = new Date(startRaw).getTime();
    endTimestamp = endRaw ? new Date(endRaw).getTime() : undefined;
  }

  return {
    id: event.id,
    pubkey: event.pubkey,
    title,
    description: event.content || getTag('summary') || '',
    location: getTag('location'),
    image: getTag('image'),
    startTimestamp,
    endTimestamp,
    startTzid: getTag('start_tzid'),
    geohash: getTag('g'),
    tags: getTags('t'),
    originalEvent: event,
  };
}

/**
 * Hook to fetch upcoming music calendar events from Nostr (NIP-52)
 * Queries events from Plektos and other NIP-52 compatible sources
 * Filters to only show events tagged with "music" category
 */
export function useUpcomingEvents(limit: number = 6) {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['upcoming-events', 'music', limit],
    queryFn: async () => {
      // Query both time-based (31923) and date-based (31922) calendar events
      // Filter at relay level for events with "music" tag
      const events = await nostr.query([
        {
          kinds: [31922, 31923],
          '#t': ['music'],
          limit: limit * 3, // Fetch more to filter down after date filtering
        },
      ]);

      // Validate and parse events
      const validEvents = events
        .filter(validateCalendarEvent)
        .map(parseCalendarEvent)
        // Filter to only upcoming events
        .filter((event) => {
          const eventTime = event.startTimestamp;
          const nowMs = Date.now();
          // Show events that haven't ended yet (or haven't started)
          if (event.endTimestamp) {
            return event.endTimestamp > nowMs;
          }
          return eventTime > nowMs - 24 * 60 * 60 * 1000; // Include events from past 24h if no end time
        })
        // Sort by start time
        .sort((a, b) => a.startTimestamp - b.startTimestamp)
        // Limit results
        .slice(0, limit);

      return validEvents;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
