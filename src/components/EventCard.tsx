import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';
import type { CalendarEvent } from '@/hooks/useUpcomingEvents';

interface EventCardProps {
  event: CalendarEvent;
  accentColor: string;
  textColor: string;
}

/**
 * Formats a timestamp into a readable date string
 */
function formatEventDate(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Formats a timestamp into a readable time string
 */
function formatEventTime(timestamp: number, tzid?: string): string {
  const date = new Date(timestamp);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: tzid || undefined,
  });
}

/**
 * Gets a relative time description (e.g., "Tomorrow", "In 3 days")
 */
function getRelativeTime(timestamp: number): string {
  const now = Date.now();
  const diff = timestamp - now;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  
  if (days < 0) return 'Happening now';
  if (days === 0) return 'Today';
  if (days === 1) return 'Tomorrow';
  if (days < 7) return `In ${days} days`;
  if (days < 14) return 'Next week';
  if (days < 30) return `In ${Math.ceil(days / 7)} weeks`;
  return formatEventDate(timestamp);
}

export function EventCard({ event, accentColor, textColor }: EventCardProps) {
  const plektosUrl = `https://plektos.app/event/${event.originalEvent.pubkey}/${event.originalEvent.tags.find(([n]) => n === 'd')?.[1] || event.id}`;
  
  return (
    <a
      href={plektosUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div
        className="rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] h-full"
        style={{
          background: `${accentColor}08`,
          border: `1px solid ${accentColor}15`,
        }}
      >
        {/* Event Image */}
        {event.image && (
          <div className="relative h-40 overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, ${accentColor}20, transparent)`,
              }}
            />
            {/* Date badge */}
            <div
              className="absolute top-3 left-3 px-3 py-1.5 rounded-lg text-xs font-bold"
              style={{
                background: accentColor,
                color: '#fff',
              }}
            >
              {getRelativeTime(event.startTimestamp)}
            </div>
          </div>
        )}

        {/* Event Details */}
        <div className="p-5">
          {/* Date badge for events without image */}
          {!event.image && (
            <div
              className="inline-block px-3 py-1.5 rounded-lg text-xs font-bold mb-3"
              style={{
                background: `${accentColor}20`,
                color: accentColor,
              }}
            >
              {getRelativeTime(event.startTimestamp)}
            </div>
          )}

          {/* Title */}
          <h3 
            className="font-bold text-lg mb-2 line-clamp-2 group-hover:opacity-80 transition-opacity"
            style={{ color: textColor }}
          >
            {event.title}
          </h3>

          {/* Date & Time */}
          <div className="flex items-center gap-2 text-sm mb-2 opacity-70">
            <Calendar className="w-4 h-4 flex-shrink-0" style={{ color: accentColor }} />
            <span>{formatEventDate(event.startTimestamp)}</span>
            <span className="opacity-50">|</span>
            <Clock className="w-4 h-4 flex-shrink-0" style={{ color: accentColor }} />
            <span>{formatEventTime(event.startTimestamp, event.startTzid)}</span>
          </div>

          {/* Location */}
          {event.location && (
            <div className="flex items-start gap-2 text-sm mb-3 opacity-70">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: accentColor }} />
              <span className="line-clamp-1">{event.location}</span>
            </div>
          )}

          {/* Description */}
          {event.description && (
            <p className="text-sm opacity-60 line-clamp-2 mb-4">
              {event.description}
            </p>
          )}

          {/* Tags */}
          {event.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {event.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-full text-xs"
                  style={{
                    background: `${accentColor}15`,
                    color: accentColor,
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* View on Plektos link */}
          <div 
            className="flex items-center gap-1 text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity"
            style={{ color: accentColor }}
          >
            <span>View on Plektos</span>
            <ExternalLink className="w-3 h-3" />
          </div>
        </div>
      </div>
    </a>
  );
}
