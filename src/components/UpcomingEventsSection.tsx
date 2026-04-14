import { Calendar, ExternalLink, Sparkles } from 'lucide-react';
import { useUpcomingEvents } from '@/hooks/useUpcomingEvents';
import { EventCard } from '@/components/EventCard';
import { Skeleton } from '@/components/ui/skeleton';

interface UpcomingEventsSectionProps {
  accentColor: string;
  textColor: string;
}

function EventCardSkeleton({ accentColor }: { accentColor: string }) {
  return (
    <div
      className="rounded-xl overflow-hidden h-full"
      style={{
        background: `${accentColor}08`,
        border: `1px solid ${accentColor}15`,
      }}
    >
      <Skeleton className="h-40 w-full rounded-none" />
      <div className="p-5 space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}

export function UpcomingEventsSection({ accentColor, textColor }: UpcomingEventsSectionProps) {
  const { data: events, isLoading, error } = useUpcomingEvents(6);

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: `${accentColor}20`,
              border: `1px solid ${accentColor}30`,
            }}
          >
            <Calendar className="w-4 h-4" style={{ color: accentColor }} />
            <span className="text-sm font-medium" style={{ color: accentColor }}>
              Powered by Plektos
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Upcoming{' '}
            <span style={{ color: accentColor }}>Events</span>
          </h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">
            Discover music events, meetups, and gatherings happening in the Nostr community. 
            All events are decentralized and published using NIP-52 calendar events.
          </p>
        </div>

        {/* Events Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <EventCardSkeleton key={i} accentColor={accentColor} />
            ))}
          </div>
        ) : error ? (
          <div
            className="rounded-2xl p-12 text-center"
            style={{
              background: `${accentColor}08`,
              border: `1px solid ${accentColor}15`,
            }}
          >
            <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-50" style={{ color: accentColor }} />
            <h3 className="text-xl font-bold mb-2">Unable to Load Events</h3>
            <p className="opacity-60 mb-6">
              We couldn't fetch events right now. Check out Plektos directly to see what's happening.
            </p>
            <a
              href="https://plektos.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
              style={{
                background: accentColor,
                color: '#fff',
              }}
            >
              Browse Plektos
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ) : events && events.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  accentColor={accentColor}
                  textColor={textColor}
                />
              ))}
            </div>

            {/* View All Link */}
            <div className="flex justify-center mt-10">
              <a
                href="https://plektos.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
                style={{
                  background: `${accentColor}20`,
                  border: `1px solid ${accentColor}30`,
                  color: accentColor,
                }}
              >
                View All Events on Plektos
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </>
        ) : (
          <div
            className="rounded-2xl p-12 text-center"
            style={{
              background: `${accentColor}08`,
              border: `1px solid ${accentColor}15`,
            }}
          >
            <Calendar className="w-16 h-16 mx-auto mb-6 opacity-50" style={{ color: accentColor }} />
            <h3 className="text-2xl font-bold mb-4">No Upcoming Events</h3>
            <p className="opacity-60 mb-8 max-w-md mx-auto">
              There aren't any upcoming events posted right now. Be the first to create one on Plektos, 
              the decentralized events platform built on Nostr!
            </p>
            <a
              href="https://plektos.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
              style={{
                background: accentColor,
                color: '#fff',
                boxShadow: `0 0 30px ${accentColor}40`,
              }}
            >
              Create an Event
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* Plektos Attribution */}
        <div className="mt-12 text-center">
          <p className="text-sm opacity-50">
            Events powered by{' '}
            <a
              href="https://plektos.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity underline"
              style={{ color: accentColor }}
            >
              Plektos
            </a>
            {' '}- The decentralized meetup platform built on Nostr
          </p>
        </div>
      </div>
    </section>
  );
}
