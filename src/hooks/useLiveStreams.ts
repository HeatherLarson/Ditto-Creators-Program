import { useNostr } from '@nostrify/react';
import { useQuery } from '@tanstack/react-query';
import type { NostrEvent } from '@nostrify/nostrify';

export interface LiveStream {
  id: string;
  pubkey: string;
  dTag: string;
  title: string;
  summary?: string;
  image?: string;
  streamingUrl?: string;
  status: 'planned' | 'live' | 'ended';
  starts?: number;
  ends?: number;
  currentParticipants?: number;
  totalParticipants?: number;
  hosts: Array<{ pubkey: string; relay?: string; role?: string }>;
  tags: string[];
  originalEvent: NostrEvent;
}

/**
 * Validates a NIP-53 live activity event has required fields
 */
function validateLiveStream(event: NostrEvent): boolean {
  if (event.kind !== 30311) return false;

  const d = event.tags.find(([name]) => name === 'd')?.[1];
  const status = event.tags.find(([name]) => name === 'status')?.[1];

  // Must have d tag and status
  if (!d || !status) return false;

  // Only show live or planned streams
  if (!['live', 'planned'].includes(status)) return false;

  return true;
}

/**
 * Parses a NostrEvent into a LiveStream
 */
function parseLiveStream(event: NostrEvent): LiveStream {
  const getTag = (name: string) => event.tags.find(([n]) => n === name)?.[1];
  const getTags = (name: string) => event.tags.filter(([n]) => n === name).map(([_, v]) => v);

  const status = getTag('status') as 'planned' | 'live' | 'ended';
  const startsRaw = getTag('starts');
  const endsRaw = getTag('ends');
  const currentParticipantsRaw = getTag('current_participants');
  const totalParticipantsRaw = getTag('total_participants');

  // Extract hosts/participants from p tags
  const hosts = event.tags
    .filter(([name]) => name === 'p')
    .map(([_, pubkey, relay, role]) => ({
      pubkey,
      relay: relay || undefined,
      role: role || undefined,
    }));

  return {
    id: event.id,
    pubkey: event.pubkey,
    dTag: getTag('d') || '',
    title: getTag('title') || 'Untitled Stream',
    summary: getTag('summary'),
    image: getTag('image'),
    streamingUrl: getTag('streaming'),
    status,
    starts: startsRaw ? parseInt(startsRaw) * 1000 : undefined,
    ends: endsRaw ? parseInt(endsRaw) * 1000 : undefined,
    currentParticipants: currentParticipantsRaw ? parseInt(currentParticipantsRaw) : undefined,
    totalParticipants: totalParticipantsRaw ? parseInt(totalParticipantsRaw) : undefined,
    hosts,
    tags: getTags('t'),
    originalEvent: event,
  };
}

/**
 * Hook to fetch live streams from Nostr (NIP-53)
 * Returns currently live and planned streams
 */
export function useLiveStreams(limit: number = 6) {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['live-streams', limit],
    queryFn: async () => {
      // Query for live activity events (kind 30311)
      const events = await nostr.query([
        {
          kinds: [30311],
          limit: limit * 3, // Fetch more to filter down
        },
      ]);

      // Validate and parse streams
      const streams = events
        .filter(validateLiveStream)
        .map(parseLiveStream)
        // Sort: live streams first, then by start time
        .sort((a, b) => {
          // Live streams come first
          if (a.status === 'live' && b.status !== 'live') return -1;
          if (a.status !== 'live' && b.status === 'live') return 1;
          // Then sort by start time (most recent first for live, soonest first for planned)
          const aTime = a.starts || 0;
          const bTime = b.starts || 0;
          if (a.status === 'live') {
            return bTime - aTime; // Most recently started first
          }
          return aTime - bTime; // Soonest upcoming first
        })
        // Limit results
        .slice(0, limit);

      return streams;
    },
    staleTime: 30 * 1000, // 30 seconds - refresh more frequently for live content
    refetchInterval: 60 * 1000, // Auto-refresh every minute
  });
}

/**
 * Hook to fetch only currently live streams
 */
export function useCurrentlyLive(limit: number = 6) {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['currently-live', limit],
    queryFn: async () => {
      const events = await nostr.query([
        {
          kinds: [30311],
          limit: limit * 3,
        },
      ]);

      const streams = events
        .filter(validateLiveStream)
        .map(parseLiveStream)
        .filter((stream) => stream.status === 'live')
        .sort((a, b) => {
          // Sort by current participants (most popular first), then by start time
          const aParticipants = a.currentParticipants || 0;
          const bParticipants = b.currentParticipants || 0;
          if (aParticipants !== bParticipants) {
            return bParticipants - aParticipants;
          }
          return (b.starts || 0) - (a.starts || 0);
        })
        .slice(0, limit);

      return streams;
    },
    staleTime: 30 * 1000,
    refetchInterval: 60 * 1000,
  });
}
