import { Radio, ExternalLink } from 'lucide-react';
import { useLiveStreams } from '@/hooks/useLiveStreams';
import { LiveStreamCard } from '@/components/LiveStreamCard';
import { Skeleton } from '@/components/ui/skeleton';

interface LiveStreamsSectionProps {
  accentColor: string;
  textColor: string;
}

function LiveStreamSkeleton({ accentColor }: { accentColor: string }) {
  return (
    <div
      className="rounded-xl overflow-hidden h-full"
      style={{
        background: `${accentColor}08`,
        border: `1px solid ${accentColor}15`,
      }}
    >
      <Skeleton className="h-40 w-full rounded-none" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}

export function LiveStreamsSection({ accentColor, textColor }: LiveStreamsSectionProps) {
  const { data: streams, isLoading, error } = useLiveStreams(6);

  // Count how many are currently live
  const liveCount = streams?.filter(s => s.status === 'live').length || 0;

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: liveCount > 0 ? 'rgba(239, 68, 68, 0.2)' : `${accentColor}20`,
              border: `1px solid ${liveCount > 0 ? 'rgba(239, 68, 68, 0.3)' : `${accentColor}30`}`,
            }}
          >
            <Radio 
              className={`w-4 h-4 ${liveCount > 0 ? 'animate-pulse' : ''}`} 
              style={{ color: liveCount > 0 ? '#ef4444' : accentColor }} 
            />
            <span 
              className="text-sm font-medium" 
              style={{ color: liveCount > 0 ? '#ef4444' : accentColor }}
            >
              {liveCount > 0 ? `${liveCount} Live Now` : 'Live Streams'}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {liveCount > 0 ? (
              <>
                Happening{' '}
                <span style={{ color: '#ef4444' }}>Right Now</span>
              </>
            ) : (
              <>
                Live{' '}
                <span style={{ color: accentColor }}>Streams</span>
              </>
            )}
          </h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">
            Catch live performances, studio sessions, and broadcasts from artists across the Nostr network. 
            All streams are decentralized and powered by NIP-53.
          </p>
        </div>

        {/* Streams Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <LiveStreamSkeleton key={i} accentColor={accentColor} />
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
            <Radio className="w-12 h-12 mx-auto mb-4 opacity-50" style={{ color: accentColor }} />
            <h3 className="text-xl font-bold mb-2">Unable to Load Streams</h3>
            <p className="opacity-60 mb-6">
              We couldn't fetch live streams right now. Check out Zap.Stream directly.
            </p>
            <a
              href="https://zap.stream"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
              style={{
                background: accentColor,
                color: '#fff',
              }}
            >
              Browse Zap.Stream
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ) : streams && streams.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {streams.map((stream) => (
                <LiveStreamCard
                  key={stream.id}
                  stream={stream}
                  accentColor={accentColor}
                  textColor={textColor}
                />
              ))}
            </div>

            {/* View All Link */}
            <div className="flex justify-center mt-10">
              <a
                href="https://zap.stream"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
                style={{
                  background: `${accentColor}20`,
                  border: `1px solid ${accentColor}30`,
                  color: accentColor,
                }}
              >
                View All Streams on Zap.Stream
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
            <Radio className="w-16 h-16 mx-auto mb-6 opacity-50" style={{ color: accentColor }} />
            <h3 className="text-2xl font-bold mb-4">No Live Streams Right Now</h3>
            <p className="opacity-60 mb-8 max-w-md mx-auto">
              There aren't any live streams happening at the moment. 
              Check back later or explore Zap.Stream to see upcoming broadcasts!
            </p>
            <a
              href="https://zap.stream"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
              style={{
                background: accentColor,
                color: '#fff',
                boxShadow: `0 0 30px ${accentColor}40`,
              }}
            >
              Explore Zap.Stream
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* Attribution */}
        <div className="mt-12 text-center">
          <p className="text-sm opacity-50">
            Live streams powered by{' '}
            <a
              href="https://zap.stream"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity underline"
              style={{ color: accentColor }}
            >
              Zap.Stream
            </a>
            {' '}- Decentralized live streaming on Nostr
          </p>
        </div>
      </div>
    </section>
  );
}
