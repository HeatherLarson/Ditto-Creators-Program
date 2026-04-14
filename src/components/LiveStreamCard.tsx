import { Radio, Users, ExternalLink, Clock } from 'lucide-react';
import { nip19 } from 'nostr-tools';
import type { LiveStream } from '@/hooks/useLiveStreams';

interface LiveStreamCardProps {
  stream: LiveStream;
  accentColor: string;
  textColor: string;
}

/**
 * Formats a timestamp into a readable time string
 */
function formatStreamTime(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

/**
 * Gets how long a stream has been live
 */
function getLiveDuration(startTimestamp: number): string {
  const now = Date.now();
  const diff = now - startTimestamp;
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  
  if (hours > 0) {
    return `${hours}h ${minutes % 60}m`;
  }
  return `${minutes}m`;
}

/**
 * Gets time until stream starts
 */
function getTimeUntilStart(startTimestamp: number): string {
  const now = Date.now();
  const diff = startTimestamp - now;
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) {
    return `in ${days}d`;
  }
  if (hours > 0) {
    return `in ${hours}h`;
  }
  if (minutes > 0) {
    return `in ${minutes}m`;
  }
  return 'Starting soon';
}

export function LiveStreamCard({ stream, accentColor, textColor }: LiveStreamCardProps) {
  // Create naddr for the stream
  const naddr = nip19.naddrEncode({
    kind: 30311,
    pubkey: stream.pubkey,
    identifier: stream.dTag,
  });
  
  // Link to zap.stream or other live stream viewer
  const streamUrl = `https://zap.stream/${naddr}`;
  
  const isLive = stream.status === 'live';
  
  return (
    <a
      href={streamUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div
        className="rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] h-full relative"
        style={{
          background: `${accentColor}08`,
          border: `1px solid ${accentColor}15`,
        }}
      >
        {/* Stream Image/Thumbnail */}
        <div className="relative h-40 overflow-hidden bg-black/30">
          {stream.image ? (
            <img
              src={stream.image}
              alt={stream.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div 
              className="w-full h-full flex items-center justify-center"
              style={{ background: `${accentColor}15` }}
            >
              <Radio className="w-12 h-12 opacity-30" style={{ color: accentColor }} />
            </div>
          )}
          
          {/* Overlay gradient */}
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, rgba(0,0,0,0.7), transparent)`,
            }}
          />
          
          {/* Live/Planned badge */}
          <div className="absolute top-3 left-3">
            {isLive ? (
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold animate-pulse"
                style={{
                  background: '#ef4444',
                  color: '#fff',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                LIVE
              </div>
            ) : (
              <div
                className="px-3 py-1.5 rounded-lg text-xs font-bold"
                style={{
                  background: `${accentColor}90`,
                  color: '#fff',
                }}
              >
                {stream.starts ? getTimeUntilStart(stream.starts) : 'Planned'}
              </div>
            )}
          </div>
          
          {/* Viewer count */}
          {stream.currentParticipants !== undefined && stream.currentParticipants > 0 && (
            <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded bg-black/60 text-white text-xs">
              <Users className="w-3 h-3" />
              {stream.currentParticipants.toLocaleString()}
            </div>
          )}
          
          {/* Duration for live streams */}
          {isLive && stream.starts && (
            <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded bg-black/60 text-white text-xs">
              <Clock className="w-3 h-3" />
              {getLiveDuration(stream.starts)}
            </div>
          )}
        </div>

        {/* Stream Details */}
        <div className="p-4">
          {/* Title */}
          <h3 
            className="font-bold text-lg mb-2 line-clamp-2 group-hover:opacity-80 transition-opacity"
            style={{ color: textColor }}
          >
            {stream.title}
          </h3>

          {/* Summary */}
          {stream.summary && (
            <p className="text-sm opacity-60 line-clamp-2 mb-3">
              {stream.summary}
            </p>
          )}

          {/* Tags */}
          {stream.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {stream.tags.slice(0, 3).map((tag, i) => (
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

          {/* Watch link */}
          <div 
            className="flex items-center gap-1 text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity"
            style={{ color: accentColor }}
          >
            <span>{isLive ? 'Watch Now' : 'View Stream'}</span>
            <ExternalLink className="w-3 h-3" />
          </div>
        </div>
      </div>
    </a>
  );
}
