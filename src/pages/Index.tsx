import { useSeoMeta } from '@unhead/react';
import { useState, useEffect } from 'react';
import { 
  Music2, 
  Zap, 
  DollarSign, 
  ExternalLink,
  Check,
  Sparkles,
  X,
  Minus,
  Square,
  ChevronRight,
  ChevronLeft,
  Volume2,
  Play,
  Heart,
  MessageCircle,
  Repeat2,
  MoreHorizontal,
  Palette,
  Users,
  Star,
  Headphones,
  MapPin
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { UpcomingEventsSection } from '@/components/UpcomingEventsSection';
import { LiveStreamsSection } from '@/components/LiveStreamsSection';

// Theme definitions
const themes = [
  { 
    name: 'Neon', 
    bg: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%)', 
    accent: '#a855f7',
    text: '#fff',
    font: 'Space Grotesk Variable'
  },
  { 
    name: 'Grunge', 
    bg: 'linear-gradient(135deg, #1a1612 0%, #2d2420 100%)', 
    accent: '#c4a574',
    text: '#e8dcc8',
    font: 'Space Grotesk Variable'
  },
  { 
    name: 'Vapor', 
    bg: 'linear-gradient(135deg, #1a0a2e 0%, #0f1a2e 100%)', 
    accent: '#ff6ec7',
    text: '#7fdbff',
    font: 'Space Grotesk Variable'
  },
  { 
    name: 'Punk', 
    bg: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 100%)', 
    accent: '#ff3366',
    text: '#fff',
    font: 'Space Grotesk Variable'
  },
];

// Fake music posts for the mockup
const fakePosts = [
  {
    artist: 'Luna',
    handle: '@lunabeats',
    avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=luna-music',
    content: 'Just dropped my new single "Midnight Protocol" - no labels, no gatekeepers, just pure sound. Listen now on Ditto.',
    hasAudio: true,
    stats: { replies: 47, reposts: 128, likes: 892, zaps: '12.4k' }
  },
  {
    artist: 'BASS_DROP',
    handle: '@bassdrop',
    avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=bass-drop',
    content: 'YouTube took down my remix for the 3rd time. Meanwhile on Ditto? 50k plays and counting. This is the future.',
    stats: { replies: 156, reposts: 342, likes: 2147, zaps: '45.2k' }
  },
  {
    artist: 'Aria',
    handle: '@ariamusic',
    avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=aria-singer',
    content: 'Live streaming my studio session in 10 mins. Tips go directly to me - no 30% platform cut. See you there!',
    isLive: true,
    stats: { replies: 89, reposts: 67, likes: 541, zaps: '8.9k' }
  },
];

const caseStudyNames = [
  'Ainsley Costello',
  'Sara Jade',
  'OpenMike',
  'Abel James',
  'Kathryn',
  'Ivy Lumi',
  'Chris Wenske',
  'Sam Sethi',
  'Man Like Kweks',
  'Annonymal',
  'Longy & Aaron',
  'Contra'
];

const Index = () => {
  const [activeTheme, setActiveTheme] = useState(0);
  const [isThemePickerOpen, setIsThemePickerOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  useSeoMeta({
    title: 'Ditto Music | For Musicians',
    description: 'Join Ditto Music. Get early access, shape the future of decentralized music, and earn from the Ditto Creators Fund. No gatekeepers. No algorithms. Just your music.',
  });

  // Auto-rotate themes
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isThemePickerOpen) {
        setActiveTheme((prev) => (prev + 1) % themes.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isThemePickerOpen]);

  const currentTheme = themes[activeTheme];

  return (
    <div 
      className="min-h-screen transition-all duration-700"
      style={{ 
        background: currentTheme.bg,
        fontFamily: currentTheme.font,
        color: currentTheme.text 
      }}
    >
      {/* Theme Picker */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsThemePickerOpen(!isThemePickerOpen)}
          className="p-3 rounded-full backdrop-blur-md transition-all hover:scale-110"
          style={{ 
            background: `${currentTheme.accent}20`,
            border: `1px solid ${currentTheme.accent}40`
          }}
          aria-label="Open theme picker"
        >
          <Palette className="w-5 h-5" style={{ color: currentTheme.accent }} />
        </button>
        
        {isThemePickerOpen && (
          <div 
            className="absolute top-14 right-0 p-2 rounded-xl backdrop-blur-md"
            style={{ 
              background: `${currentTheme.accent}10`,
              border: `1px solid ${currentTheme.accent}30`
            }}
          >
            {themes.map((theme, i) => (
              <button
                key={theme.name}
                onClick={() => {
                  setActiveTheme(i);
                  setIsThemePickerOpen(false);
                }}
                className={`block w-full px-4 py-2 text-left rounded-lg transition-all ${
                  i === activeTheme ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                }`}
                style={{ 
                  background: i === activeTheme ? `${theme.accent}30` : 'transparent'
                }}
              >
                <span className="flex items-center gap-2">
                  <span 
                    className="w-3 h-3 rounded-full"
                    style={{ background: theme.accent }}
                  />
                  {theme.name}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Hero Section with Retro Window Frame */}
      <section className="min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-6xl">
          {/* Retro Window Frame */}
          <div 
            className="rounded-xl overflow-hidden shadow-2xl"
            style={{ 
              background: `${currentTheme.accent}10`,
              border: `1px solid ${currentTheme.accent}30`,
              boxShadow: `0 0 60px ${currentTheme.accent}20`
            }}
          >
            {/* Window Title Bar */}
            <div 
              className="flex items-center justify-between px-4 py-2"
              style={{ 
                background: `${currentTheme.accent}15`,
                borderBottom: `1px solid ${currentTheme.accent}20`
              }}
            >
              <div className="flex items-center gap-3">
                <Music2 className="w-4 h-4" style={{ color: currentTheme.accent }} />
                <span className="text-sm opacity-70">Ditto Music</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1 rounded hover:bg-white/10 transition-colors">
                  <Minus className="w-3 h-3 opacity-50" />
                </button>
                <button className="p-1 rounded hover:bg-white/10 transition-colors">
                  <Square className="w-3 h-3 opacity-50" />
                </button>
                <button className="p-1 rounded hover:bg-white/10 transition-colors">
                  <X className="w-3 h-3 opacity-50" />
                </button>
              </div>
            </div>

            {/* Window Content */}
            <div className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
              {/* Animated Equalizer Background */}
              <div className="absolute inset-0 flex items-end justify-center gap-1 opacity-10 pointer-events-none pb-20">
                {[...Array(40)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 rounded-t"
                    style={{
                      background: currentTheme.accent,
                      height: `${20 + Math.sin(i * 0.5) * 15 + Math.random() * 30}%`,
                      animation: `equalizer ${0.5 + Math.random() * 0.5}s ease-in-out infinite alternate`,
                      animationDelay: `${i * 0.05}s`
                    }}
                  />
                ))}
              </div>

              {/* Logo */}
              <div className="flex justify-center mb-8 relative z-10">
                <div 
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full"
                  style={{ 
                    background: `${currentTheme.accent}20`,
                    border: `1px solid ${currentTheme.accent}40`
                  }}
                >
                  {/* Mini equalizer in badge */}
                  <div className="flex items-end gap-0.5 h-4">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 rounded-sm"
                        style={{
                          background: currentTheme.accent,
                          height: `${40 + i * 15}%`,
                          animation: `equalizer ${0.3 + i * 0.1}s ease-in-out infinite alternate`
                        }}
                      />
                    ))}
                  </div>
                  <span className="font-semibold" style={{ color: currentTheme.accent }}>
                    For Musicians
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-6 tracking-tight relative z-10">
                <span 
                  className="block"
                  style={{ color: currentTheme.accent }}
                >
                  Your Music.
                </span>
                <span className="block">Your Platform.</span>
              </h1>

              <p className="text-xl md:text-2xl text-center max-w-2xl mx-auto mb-10 opacity-70 leading-relaxed relative z-10">
                Tired of algorithms burying your sound? Tired of platforms that don't pay? 
                Join the leading edge of decentralized music.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 relative z-10">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 transition-all hover:scale-105"
                  style={{ 
                    background: currentTheme.accent,
                    color: '#fff',
                    boxShadow: `0 0 30px ${currentTheme.accent}50`
                  }}
                  asChild
                >
                  <a href="https://cal.com/heather-larson-3dswg4" target="_blank" rel="noopener noreferrer">
                    Book a Call
                    <Sparkles className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 transition-all hover:scale-105"
                  style={{ 
                    borderColor: `${currentTheme.accent}50`,
                    color: currentTheme.text
                  }}
                  asChild
                >
                  <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
                    Explore Ditto
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>

              {/* Social proof */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm opacity-60 relative z-10">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: currentTheme.accent }} />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: currentTheme.accent }} />
                  <span>Shape the Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: currentTheme.accent }} />
                  <span>Creators Fund</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="flex justify-center mt-8">
            <div 
              className="animate-bounce p-2 rounded-full"
              style={{ background: `${currentTheme.accent}20` }}
            >
              <ChevronRight className="w-6 h-6 rotate-90" style={{ color: currentTheme.accent }} />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works & Info Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* How It Works */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              How It{' '}
              <span style={{ color: currentTheme.accent }}>Works</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div 
                className="p-6 rounded-xl"
                style={{ 
                  background: `${currentTheme.accent}08`,
                  border: `1px solid ${currentTheme.accent}15`
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                  style={{ background: currentTheme.accent, color: '#fff' }}
                >
                  1
                </div>
                <p className="opacity-80">Create your Nostr profile (takes 5 minutes, no email required)</p>
              </div>
              <div 
                className="p-6 rounded-xl"
                style={{ 
                  background: `${currentTheme.accent}08`,
                  border: `1px solid ${currentTheme.accent}15`
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                  style={{ background: currentTheme.accent, color: '#fff' }}
                >
                  2
                </div>
                <p className="opacity-80">Upload your music or stream live</p>
              </div>
              <div 
                className="p-6 rounded-xl"
                style={{ 
                  background: `${currentTheme.accent}08`,
                  border: `1px solid ${currentTheme.accent}15`
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                  style={{ background: currentTheme.accent, color: '#fff' }}
                >
                  3
                </div>
                <p className="opacity-80">Fans send payments directly to you, instantly, with no platform taking a cut</p>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* What is a zap? */}
            <div 
              className="p-6 rounded-xl"
              style={{ 
                background: `${currentTheme.accent}08`,
                border: `1px solid ${currentTheme.accent}15`
              }}
            >
              <h3 className="text-xl font-bold mb-3" style={{ color: currentTheme.accent }}>What is a zap?</h3>
              <p className="opacity-80 leading-relaxed">
                A zap is a tip sent directly from a fan to you over the Bitcoin Lightning Network. It hits your wallet instantly. No minimums. No waiting. No middleman.
              </p>
            </div>

            {/* Do I have to leave Spotify? */}
            <div 
              className="p-6 rounded-xl"
              style={{ 
                background: `${currentTheme.accent}08`,
                border: `1px solid ${currentTheme.accent}15`
              }}
            >
              <h3 className="text-xl font-bold mb-3" style={{ color: currentTheme.accent }}>Do I have to leave Spotify?</h3>
              <p className="opacity-80 leading-relaxed">
                No. Keep everything you already have. This is additive. You can distribute on every platform you use today and also build here.
              </p>
            </div>

            {/* No algorithms */}
            <div 
              className="p-6 rounded-xl"
              style={{ 
                background: `${currentTheme.accent}08`,
                border: `1px solid ${currentTheme.accent}15`
              }}
            >
              <h3 className="text-xl font-bold mb-3" style={{ color: currentTheme.accent }}>No algorithms. No gatekeeping.</h3>
              <p className="opacity-80 leading-relaxed">
                Your music is not ranked, filtered, or buried based on engagement metrics. You are not competing for platform attention. Fans find you because other fans share you.
              </p>
            </div>

            {/* We'll be honest */}
            <div 
              className="p-6 rounded-xl"
              style={{ 
                background: 'rgba(255,200,50,0.08)',
                border: '1px solid rgba(255,200,50,0.15)'
              }}
            >
              <h3 className="text-xl font-bold mb-3 text-yellow-400">We'll be honest with you.</h3>
              <p className="opacity-80 leading-relaxed">
                This is new. There are no guaranteed earnings, no proven playbook, and no algorithm working in your favor. What there is: direct payments from fans, full control of your content, and a community building something different from the ground up. If you are looking for a sure thing, this is not it. If you are looking for a real alternative, you found it.
              </p>
            </div>

            {/* Why join now? */}
            <div 
              className="p-6 rounded-xl"
              style={{ 
                background: `${currentTheme.accent}08`,
                border: `1px solid ${currentTheme.accent}15`
              }}
            >
              <h3 className="text-xl font-bold mb-3" style={{ color: currentTheme.accent }}>Why join now?</h3>
              <p className="opacity-80 leading-relaxed">
                The artists who show up early are the ones who shape what this becomes. There are no legacy acts with a head start. No established algorithm favorites. Everyone here is starting from the same place.
              </p>
            </div>

            {/* How you get paid */}
            <div 
              className="p-6 rounded-xl"
              style={{ 
                background: `${currentTheme.accent}08`,
                border: `1px solid ${currentTheme.accent}15`
              }}
            >
              <h3 className="text-xl font-bold mb-3" style={{ color: currentTheme.accent }}>How you get paid.</h3>
              <p className="opacity-80 leading-relaxed">
                Fans send sats (small units of Bitcoin) directly to your wallet during streams, on your profile, or attached to a post. You receive them instantly. No payment processor. No 90-day delay. No minimum payout threshold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points - Scattered Cards */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Aren't You{' '}
            <span style={{ color: currentTheme.accent }}>Tired</span>{' '}
            of This?
          </h2>
          <p className="text-center opacity-60 text-lg mb-16 max-w-xl mx-auto">
            The platforms that were supposed to help artists have become the biggest obstacles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                title: "Jumping through hoops", 
                desc: "1,000 subscribers? 4,000 watch hours? Why should your art have arbitrary gatekeeping?",
                rotate: '-1deg'
              },
              { 
                title: "Content taken down", 
                desc: "One copyright claim and years of work vanish overnight. No warning. No appeal.",
                rotate: '1.5deg'
              },
              { 
                title: "De-platformed", 
                desc: "Banned for speaking your mind? Good luck appealing to a faceless algorithm.",
                rotate: '-0.5deg'
              },
              { 
                title: "Building on rented land", 
                desc: "You're a tenant on Big Tech's property. They can evict you whenever they want.",
                rotate: '1deg'
              },
            ].map((pain, i) => (
              <div
                key={i}
                className="p-6 rounded-xl transition-all hover:scale-[1.02]"
                style={{ 
                  background: 'rgba(255,50,50,0.1)',
                  border: '1px solid rgba(255,50,50,0.2)',
                  transform: `rotate(${pain.rotate})`
                }}
              >
                <h3 className="text-xl font-bold mb-2 text-red-400">{pain.title}</h3>
                <p className="opacity-70">{pain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fake Ditto UI Mockup */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
            What if There Was a{' '}
            <span style={{ color: currentTheme.accent }}>Better Way</span>?
          </h2>
          <p className="text-center opacity-60 text-lg mb-16 max-w-xl mx-auto">
            Ditto is a social platform where musicians actually thrive. No gatekeepers. Direct payments. Your audience, forever.
          </p>

          {/* Fake Ditto Window */}
          <div 
            className="rounded-xl overflow-hidden shadow-2xl"
            style={{ 
              background: `${currentTheme.accent}08`,
              border: `1px solid ${currentTheme.accent}20`,
              boxShadow: `0 0 80px ${currentTheme.accent}15`
            }}
          >
            {/* Window Chrome */}
            <div 
              className="flex items-center justify-between px-4 py-3"
              style={{ 
                background: `${currentTheme.accent}10`,
                borderBottom: `1px solid ${currentTheme.accent}15`
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-sm opacity-50">ditto.pub/music</span>
              <div className="w-16" />
            </div>

            <div className="flex">
              {/* Sidebar */}
              <div 
                className="hidden md:block w-64 p-4 border-r"
                style={{ borderColor: `${currentTheme.accent}15` }}
              >
                <div className="flex items-center gap-3 mb-6 p-2">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                    style={{ background: `${currentTheme.accent}30` }}
                  >
                    <Music2 className="w-5 h-5" style={{ color: currentTheme.accent }} />
                  </div>
                  <div>
                    <div className="font-semibold">You</div>
                    <div className="text-xs opacity-50">@you@ditto.pub</div>
                  </div>
                </div>

                <nav className="space-y-1">
                  {[
                    { icon: '🎵', label: 'Music', active: true },
                    { icon: '🔥', label: 'Feed' },
                    { icon: '📡', label: 'Streams' },
                    { icon: '🎙️', label: 'Podcasts' },
                    { icon: '💰', label: 'Earnings' },
                    { icon: '👤', label: 'Profile' },
                  ].map((item) => (
                    <div 
                      key={item.label}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors"
                      style={{ 
                        background: item.active ? `${currentTheme.accent}20` : 'transparent'
                      }}
                    >
                      <span>{item.icon}</span>
                      <span className={item.active ? 'font-semibold' : 'opacity-70'}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </nav>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-4 md:p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Music Feed</h3>
                  <div className="flex gap-2">
                    <span 
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ background: `${currentTheme.accent}30` }}
                    >
                      Following
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm opacity-50">Discover</span>
                  </div>
                </div>

                {/* Fake Posts */}
                <div className="space-y-4">
                  {fakePosts.map((post, i) => (
                    <div 
                      key={i}
                      className="p-4 rounded-xl transition-all hover:scale-[1.01]"
                      style={{ 
                        background: `${currentTheme.accent}08`,
                        border: `1px solid ${currentTheme.accent}10`
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <img 
                          src={post.avatar} 
                          alt={post.artist}
                          className="w-12 h-12 rounded-full"
                          style={{ background: `${currentTheme.accent}20` }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">{post.artist}</span>
                            <span className="text-sm opacity-50">{post.handle}</span>
                            {post.isLive && (
                              <span 
                                className="px-2 py-0.5 rounded text-xs font-bold animate-pulse"
                                style={{ background: '#f00', color: '#fff' }}
                              >
                                LIVE
                              </span>
                            )}
                          </div>
                          <p className="mb-3 opacity-90">{post.content}</p>
                          
                          {post.hasAudio && (
                            <div 
                              className="flex items-center gap-3 p-3 rounded-lg mb-3"
                              style={{ background: `${currentTheme.accent}15` }}
                            >
                              <button 
                                className="w-10 h-10 rounded-full flex items-center justify-center"
                                style={{ background: currentTheme.accent }}
                              >
                                <Play className="w-5 h-5 text-white ml-0.5" />
                              </button>
                              <div className="flex-1">
                                <div 
                                  className="h-1 rounded-full"
                                  style={{ background: `${currentTheme.accent}30` }}
                                >
                                  <div 
                                    className="h-full rounded-full w-1/3"
                                    style={{ background: currentTheme.accent }}
                                  />
                                </div>
                              </div>
                              <Volume2 className="w-4 h-4 opacity-50" />
                            </div>
                          )}

                          <div className="flex items-center gap-6 text-sm opacity-60">
                            <span className="flex items-center gap-1 hover:opacity-100 cursor-pointer">
                              <MessageCircle className="w-4 h-4" />
                              {post.stats.replies}
                            </span>
                            <span className="flex items-center gap-1 hover:opacity-100 cursor-pointer">
                              <Repeat2 className="w-4 h-4" />
                              {post.stats.reposts}
                            </span>
                            <span className="flex items-center gap-1 hover:opacity-100 cursor-pointer">
                              <Heart className="w-4 h-4" />
                              {post.stats.likes}
                            </span>
                            <span 
                              className="flex items-center gap-1 hover:opacity-100 cursor-pointer"
                              style={{ color: currentTheme.accent }}
                            >
                              <Zap className="w-4 h-4" />
                              {post.stats.zaps}
                            </span>
                            <span className="flex items-center gap-1 hover:opacity-100 cursor-pointer ml-auto">
                              <MoreHorizontal className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <a 
              href="https://ditto.pub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
              style={{ 
                background: currentTheme.accent,
                color: '#fff',
                boxShadow: `0 0 30px ${currentTheme.accent}40`
              }}
            >
              Try Ditto Now
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Live Streams from Nostr (NIP-53) */}
      <LiveStreamsSection accentColor={currentTheme.accent} textColor={currentTheme.text} />

      {/* Live Events Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ 
                background: `${currentTheme.accent}20`,
                border: `1px solid ${currentTheme.accent}30`
              }}
            >
              <Music2 className="w-4 h-4" style={{ color: currentTheme.accent }} />
              <span className="text-sm font-medium" style={{ color: currentTheme.accent }}>
                Real Events, Real Artists
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              We're Not Just{' '}
              <span style={{ color: currentTheme.accent }}>Talking</span>
              <br />
              About It
            </h2>
            <p className="text-lg opacity-60 max-w-2xl mx-auto">
              Our team has been on the ground at music venues across the country, 
              connecting artists with the value-for-value ecosystem.
            </p>
          </div>

          {/* Image */}
          <div className="max-w-3xl mx-auto">
            <div 
              className="rounded-2xl overflow-hidden"
              style={{ 
                background: `${currentTheme.accent}10`,
                border: `1px solid ${currentTheme.accent}20`
              }}
            >
              <img 
                src="https://blossom.dreamith.to/20e1a31d51e72c1abb579638035cf96990f3f0d6601423500a2beb81dfa58c8f.jpeg"
                alt="Live performance at Antone's"
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Antone's, Austin TX</h3>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div 
            className="mt-8 p-6 rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            style={{ 
              background: `${currentTheme.accent}08`,
              border: `1px solid ${currentTheme.accent}15`
            }}
          >
            <div>
              <div className="text-3xl font-bold" style={{ color: currentTheme.accent }}>Nashville</div>
              <div className="text-sm opacity-60">Music Row & Vinyl Lounge</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: currentTheme.accent }}>Austin</div>
              <div className="text-sm opacity-60">The Legendary Antone's Nightclub</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: currentTheme.accent }}>Phoenix</div>
              <div className="text-sm opacity-60">Culture Shock at Hello, Lincoln</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: currentTheme.accent }}>Minneapolis</div>
              <div className="text-sm opacity-60">Indie Venues</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section with Pagination */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Case Study Navigation Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setActiveCaseStudy(prev => Math.max(0, prev - 1))}
              disabled={activeCaseStudy === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105"
              style={{ 
                background: `${currentTheme.accent}20`,
                border: `1px solid ${currentTheme.accent}30`
              }}
            >
              <ChevronLeft className="w-5 h-5" style={{ color: currentTheme.accent }} />
              <span className="hidden sm:inline" style={{ color: currentTheme.accent }}>Previous</span>
            </button>
            
            <div className="text-center">
              <div className="text-sm opacity-60 mb-1">Case Study {activeCaseStudy + 1} of {caseStudyNames.length}</div>
              <div className="font-bold text-lg" style={{ color: currentTheme.accent }}>{caseStudyNames[activeCaseStudy]}</div>
            </div>
            
            <button
              onClick={() => setActiveCaseStudy(prev => Math.min(caseStudyNames.length - 1, prev + 1))}
              disabled={activeCaseStudy === caseStudyNames.length - 1}
              className="flex items-center gap-2 px-4 py-2 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105"
              style={{ 
                background: `${currentTheme.accent}20`,
                border: `1px solid ${currentTheme.accent}30`
              }}
            >
              <span className="hidden sm:inline" style={{ color: currentTheme.accent }}>Next</span>
              <ChevronRight className="w-5 h-5" style={{ color: currentTheme.accent }} />
            </button>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-2 mb-12">
            {caseStudyNames.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCaseStudy(index)}
                className="w-3 h-3 rounded-full transition-all hover:scale-125"
                style={{ 
                  background: index === activeCaseStudy ? currentTheme.accent : `${currentTheme.accent}30`,
                }}
                aria-label={`Go to case study ${index + 1}: ${caseStudyNames[index]}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case Study - Ainsley Costello */}
      {activeCaseStudy === 0 && (
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ 
                background: `${currentTheme.accent}20`,
                border: `1px solid ${currentTheme.accent}30`
              }}
            >
              <Zap className="w-4 h-4" style={{ color: currentTheme.accent }} />
              <span className="text-sm font-medium" style={{ color: currentTheme.accent }}>
                Real Results
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              From{' '}
              <span className="text-red-400">$700 in Five Years</span>
              <br />
              to{' '}
              <span style={{ color: currentTheme.accent }}>$10,000 in One</span>
            </h2>
          </div>

          {/* Case Study Card */}
          <div 
            className="rounded-2xl overflow-hidden"
            style={{ 
              background: `${currentTheme.accent}08`,
              border: `1px solid ${currentTheme.accent}20`,
              boxShadow: `0 0 60px ${currentTheme.accent}10`
            }}
          >
            {/* Header with artist info */}
            <div 
              className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
              style={{ 
                background: `${currentTheme.accent}12`,
                borderBottom: `1px solid ${currentTheme.accent}15`
              }}
            >
              <img 
                src="https://blossom.primal.net/509972f9fdd371b7348f8dcf23876f49ef4fb5b71e0e8c270fecf508abc7b684.png"
                alt="Ainsley Costello"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                style={{ border: `3px solid ${currentTheme.accent}` }}
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Ainsley Costello</h3>
                <p className="opacity-70 mb-3">Nashville-based indie singer-songwriter, Berklee College of Music graduate</p>
                <a 
                  href="https://ditto.pub/npub13qrrw2h4z52m7jh0spefrwtysl4psfkfv6j4j672se5hkhvtyw7qu0almy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                  style={{ 
                    background: currentTheme.accent,
                    color: '#fff'
                  }}
                >
                  Follow on Ditto
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Stats comparison */}
            <div className="grid md:grid-cols-2">
              <div 
                className="p-8 text-center"
                style={{ borderRight: `1px solid ${currentTheme.accent}15` }}
              >
                <div className="text-red-400 text-sm font-medium mb-2 uppercase tracking-wider">Traditional Platforms</div>
                <div className="text-5xl md:text-6xl font-bold text-red-400 mb-2">$700</div>
                <div className="opacity-60">across 5 years</div>
                <div className="text-sm opacity-50 mt-2">25 songs on Spotify, Apple Music, Amazon</div>
              </div>
              <div className="p-8 text-center">
                <div className="text-sm font-medium mb-2 uppercase tracking-wider" style={{ color: currentTheme.accent }}>Bitcoin + Lightning</div>
                <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: currentTheme.accent }}>$10,000+</div>
                <div className="opacity-60">in just 1 year</div>
                <div className="text-sm opacity-50 mt-2">Via Wavlake, Fountain, and value-for-value</div>
              </div>
            </div>

            {/* Story content */}
            <div className="p-6 md:p-8 space-y-6">
              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Breaking Point</h4>
                <p className="opacity-80 leading-relaxed">
                  Ainsley did everything the traditional industry told her to do. Posted on TikTok three times a day. 
                  Released new songs every six weeks. Had 25 songs in distribution and written over 300. 
                  The result? Approximately $700-800 in <em>total</em> streaming royalties across five years. 
                  Sometimes as little as 20 cents at a time.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Turning Point</h4>
                <p className="opacity-80 leading-relaxed">
                  In July 2023, Ainsley attended a Wavlake demo at Bitcoin Park in Nashville. 
                  She uploaded "Cherry on Top" - a song that had been out for months on traditional platforms with no traction. 
                  Within days, it spread through the Bitcoin community. Adam Curry featured it on his podcast. 
                  It became the <strong>first song on Wavlake to reach one million sats (~$300 at the time)</strong> in listener payments.
                </p>
              </div>

              <blockquote 
                className="p-6 rounded-xl text-xl md:text-2xl font-medium italic text-center"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.accent}15, transparent)`,
                  borderLeft: `4px solid ${currentTheme.accent}`
                }}
              >
                "Every zap is a direct signal from a listener who chose to send value because they felt they received value."
              </blockquote>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>What Changed</h4>
                <ul className="space-y-3 opacity-80">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                    <span><strong>Direct payments</strong> - No label taking a cut, no playlist gatekeepers with undisclosed relationships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                    <span><strong>Real community</strong> - Fans who actually care, not algorithm-driven passive listeners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                    <span><strong>Complete artistic control</strong> - No label telling her what to look like or how to be marketed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                    <span><strong>Portable relationships</strong> - If a platform disappears, the zaps are in her wallet, the connections remain</span>
                  </li>
                </ul>
              </div>

              <div className="text-center pt-4">
                <p className="text-lg opacity-70 mb-6">
                  The traditional industry told Ainsley she was the problem. The Bitcoin community told her the <em>system</em> was broken.
                  <br />One year later, she's a full-time musician with more conviction than ever before.
                </p>
                <div className="text-2xl font-bold">
                  Five years, $700. One year,{' '}
                  <span style={{ color: currentTheme.accent }}>$10,000</span>.
                  <br />
                  <span className="text-lg opacity-70 font-normal">That's what value for value looks like.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Case Study - Sara Jade */}
      {activeCaseStudy === 1 && (
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              "I made more money{' '}
              <span className="text-red-400">complaining about Spotify</span>
              <br />
              than I ever made{' '}
              <span style={{ color: currentTheme.accent }}>on Spotify</span>"
            </h2>
          </div>

          {/* Case Study Card */}
          <div 
            className="rounded-2xl overflow-hidden"
            style={{ 
              background: `${currentTheme.accent}08`,
              border: `1px solid ${currentTheme.accent}20`,
              boxShadow: `0 0 60px ${currentTheme.accent}10`
            }}
          >
            {/* Header with artist info */}
            <div 
              className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
              style={{ 
                background: `${currentTheme.accent}12`,
                borderBottom: `1px solid ${currentTheme.accent}15`
              }}
            >
              <img 
                src="https://blossom.primal.net/7cba8d3f7c74855b83800b36e107997dbfaca14501ad494ac49eb33e7864fe41.jpg"
                alt="Sara Jade"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                style={{ border: `3px solid ${currentTheme.accent}` }}
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Sara Jade</h3>
                <p className="opacity-70 mb-3">Independent singer-songwriter, San Diego</p>
                <a 
                  href="https://ditto.pub/npub17yemy3hswcelmcdgjsfn4sns4wr4q5ptvj5h08qt4s7fy2qe3hdqsczs99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                  style={{ 
                    background: currentTheme.accent,
                    color: '#fff'
                  }}
                >
                  Follow on Ditto
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid md:grid-cols-3">
              <div 
                className="p-6 text-center"
                style={{ borderRight: `1px solid ${currentTheme.accent}15` }}
              >
                <div className="text-red-400 text-sm font-medium mb-2 uppercase tracking-wider">PRO Royalty Check</div>
                <div className="text-4xl md:text-5xl font-bold text-red-400 mb-1">$1.27</div>
                <div className="text-sm opacity-50">Her only check ever</div>
              </div>
              <div 
                className="p-6 text-center"
                style={{ borderRight: `1px solid ${currentTheme.accent}15` }}
              >
                <div className="text-sm font-medium mb-2 uppercase tracking-wider" style={{ color: currentTheme.accent }}>30-Min Live Stream</div>
                <div className="text-4xl md:text-5xl font-bold mb-1" style={{ color: currentTheme.accent }}>$700</div>
                <div className="text-sm opacity-50">Nostr Phoenix show on Toonstr</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-sm font-medium mb-2 uppercase tracking-wider" style={{ color: currentTheme.accent }}>Post-Nashville Growth</div>
                <div className="text-4xl md:text-5xl font-bold mb-1" style={{ color: currentTheme.accent }}>+600%</div>
                <div className="text-sm opacity-50">Apple Music plays</div>
              </div>
            </div>

            {/* Story content */}
            <div className="p-6 md:p-8 space-y-6">
              <div 
                className="p-6 rounded-xl"
                style={{ background: 'rgba(255,50,50,0.08)' }}
              >
                <h4 className="font-bold text-lg mb-3 text-red-400">The De-Platforming</h4>
                <p className="opacity-80 leading-relaxed">
                  In June 2024, Spotify removed Sara's single "Never Knew" for alleged artificial streams. 
                  She had never bought fake plays. The only promotion she used was SubmitHub and Groover — services Spotify considers legitimate. 
                  <strong className="text-red-400"> Spotify gave no evidence, no specifics, and no way to appeal.</strong> The song was just gone.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Response</h4>
                <p className="opacity-80 leading-relaxed">
                  She posted about it on Nostr. The zaps came flooding in. By the end of the day she told her husband: 
                  "I think I just made more money complaining about Spotify than I ever made on Spotify." 
                  She repeated that line on a panel at the Bands of Bitcoin showcase in Nashville, and the quote spread through the value-for-value community immediately.
                </p>
              </div>

              <blockquote 
                className="p-6 rounded-xl text-xl md:text-2xl font-medium italic text-center"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.accent}15, transparent)`,
                  borderLeft: `4px solid ${currentTheme.accent}`
                }}
              >
                "$700 for a 30-minute set — more than most independent artists make for a full three-hour bar gig. 
                My father, a working musician for decades, told me bar pay hasn't gone up in 30 years."
              </blockquote>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Ripple Effect</h4>
                <ul className="space-y-3 opacity-80">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                    <span>After the Phoenix stream, a stranger in Palm Springs recognized her name at a hotel bar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                    <span>After Nashville, Apple Music plays jumped <strong>600%</strong> with listeners spread across the country</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                    <span>Measurable audience growth in cities and states where she has never performed</span>
                  </li>
                </ul>
              </div>

              <div className="text-center pt-4">
                <p className="text-lg opacity-70 mb-4">
                  Sara still uses DistroKid. She still plays local gigs. But she describes the value-for-value ecosystem as:
                </p>
                <div className="text-2xl font-bold">
                  "The first part of my business plan that has{' '}
                  <span style={{ color: currentTheme.accent }}>actually changed the math</span>."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Case Study - OpenMike */}
      {activeCaseStudy === 2 && (
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ 
                background: `${currentTheme.accent}20`,
                border: `1px solid ${currentTheme.accent}30`
              }}
            >
              <Zap className="w-4 h-4" style={{ color: currentTheme.accent }} />
              <span className="text-sm font-medium" style={{ color: currentTheme.accent }}>
                Industry Insider
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What Happens When a Venue CFO{' '}
              <br />
              <span style={{ color: currentTheme.accent }}>Goes All-In on Value-for-Value</span>
            </h2>
          </div>

          {/* Case Study Card */}
          <div 
            className="rounded-2xl overflow-hidden"
            style={{ 
              background: `${currentTheme.accent}08`,
              border: `1px solid ${currentTheme.accent}20`,
              boxShadow: `0 0 60px ${currentTheme.accent}10`
            }}
          >
            {/* Header with profile info */}
            <div 
              className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
              style={{ 
                background: `${currentTheme.accent}12`,
                borderBottom: `1px solid ${currentTheme.accent}15`
              }}
            >
              <img 
                src="https://image.nostr.build/eba711a14a30726d5dd454b802d343bb17d8b0db7e477eed9eef7d4b8d65ef7a.jpg"
                alt="OpenMike"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                style={{ border: `3px solid ${currentTheme.accent}` }}
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">OpenMike</h3>
                <p className="opacity-70 mb-3">CFO of independent music company (6 stages, 5 venues) in Minneapolis. Founder of Tunestr.</p>
                <a 
                  href="https://ditto.pub/npub1a6c3jcdj23ptzcuflek8a04f4hc2cdkat95pd6n3r8jjrwyzrw0q43lfrr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                  style={{ 
                    background: currentTheme.accent,
                    color: '#fff'
                  }}
                >
                  Follow on Ditto
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid md:grid-cols-3">
              <div 
                className="p-6 text-center"
                style={{ borderRight: `1px solid ${currentTheme.accent}15` }}
              >
                <div className="text-sm font-medium mb-2 uppercase tracking-wider" style={{ color: currentTheme.accent }}>Debut Tunestr Show</div>
                <div className="text-4xl md:text-5xl font-bold mb-1" style={{ color: currentTheme.accent }}>20M*</div>
                <div className="text-sm opacity-50">sats over two nights (~$8,400)</div>
                <div className="text-xs opacity-40 mt-1">*BTC price ~$42K at time</div>
              </div>
              <div 
                className="p-6 text-center"
                style={{ borderRight: `1px solid ${currentTheme.accent}15` }}
              >
                <div className="text-sm font-medium mb-2 uppercase tracking-wider" style={{ color: currentTheme.accent }}>Nashville Week</div>
                <div className="text-4xl md:text-5xl font-bold mb-1" style={{ color: currentTheme.accent }}>4M</div>
                <div className="text-sm opacity-50">sats across the event (~$1,680)</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-sm font-medium mb-2 uppercase tracking-wider" style={{ color: currentTheme.accent }}>Monday Night Average</div>
                <div className="text-4xl md:text-5xl font-bold mb-1" style={{ color: currentTheme.accent }}>450-780K</div>
                <div className="text-sm opacity-50">sats at Vinyl Lounge (~$189-$328)</div>
              </div>
            </div>

            {/* Story content */}
            <div className="p-6 md:p-8 space-y-6">
              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Insight</h4>
                <p className="opacity-80 leading-relaxed">
                  OpenMike spent more than a decade watching the economics of independent music from the inside. 
                  He became convinced that the problems in music and the problems in money were the same problem: 
                  <strong> centralization, gatekeepers, and systems designed to extract value from creators rather than deliver it to them.</strong>
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>What He Built</h4>
                <p className="opacity-80 leading-relaxed">
                  Tunestr is a live streaming platform forked from ZapStream, built specifically for musicians and artists. 
                  Every show streams live to a Nostr audience that can send Bitcoin micropayments directly to the artists performing in real time. 
                  <strong style={{ color: currentTheme.accent }}> OpenMike takes none of it.</strong> He has not accepted a single sat from any zap that has come through Tunestr. 
                  Every penny goes to the artists.
                </p>
              </div>

              <blockquote 
                className="p-6 rounded-xl text-xl md:text-2xl font-medium italic text-center"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.accent}15, transparent)`,
                  borderLeft: `4px solid ${currentTheme.accent}`
                }}
              >
                "When artists at the Vinyl Lounge watched zaps come in on a big screen during the Bands of Bitcoin residency, 
                every single one of them asked what was happening and how to sign up."
              </blockquote>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Strategy</h4>
                <p className="opacity-80 leading-relaxed mb-4">
                  His approach for getting musicians to care is simple: <strong>don't lead with Bitcoin. Bury it.</strong> Show artists a streaming setup, 
                  a live audience, and money appearing in real time while they play. Then show them how to get a wallet.
                </p>
                <p className="opacity-80 leading-relaxed">
                  His competitive advantage is that Tunestr doesn't need to make money — his day job funds it. 
                  That lets him make a promise to artists that no platform with investors or payroll can make: 
                  <strong style={{ color: currentTheme.accent }}> every penny of what the audience sends goes to whoever was on stage when it arrived.</strong>
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Pitch to Venues</h4>
                <ul className="space-y-3 opacity-80">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                    <span>If value-for-value streaming makes an independent venue more attractive to artists, the venue wins</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                    <span>If artists earn more at an independent venue than a corporate one, the decision makes itself</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                    <span>Live Nation will never offer this. They have no reason to. Independent venues do.</span>
                  </li>
                </ul>
              </div>

              <div className="text-center pt-4">
                <p className="text-lg opacity-70 mb-4">
                  To make Nashville look professional enough to take the traditional music world seriously, 
                  OpenMike bought a soundboard, video board, and three additional 4K cameras out of pocket, 
                  then drove from Minneapolis to Nashville to install them a month early.
                </p>
                <div className="text-2xl font-bold">
                  This is what{' '}
                  <span style={{ color: currentTheme.accent }}>infrastructure for independent music</span>{' '}
                  looks like.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Case Study - Abel James */}
      {activeCaseStudy === 3 && (
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span style={{ color: currentTheme.accent }}>60 Real Fans</span>
              {' '}Beat{' '}
              <span className="text-red-400">28,000 Followers</span>
            </h2>
          </div>

          {/* Case Study Card */}
          <div 
            className="rounded-2xl overflow-hidden"
            style={{ 
              background: `${currentTheme.accent}08`,
              border: `1px solid ${currentTheme.accent}20`,
              boxShadow: `0 0 60px ${currentTheme.accent}10`
            }}
          >
            {/* Header with profile info */}
            <div 
              className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
              style={{ 
                background: `${currentTheme.accent}12`,
                borderBottom: `1px solid ${currentTheme.accent}15`
              }}
            >
              <img 
                src="https://ik.imagekit.io/pnbizia3c/nostr/profiles/npub1ucgf8qyuxpqrkap_26jRmH0H5t"
                alt="Abel James"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                style={{ border: `3px solid ${currentTheme.accent}` }}
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Abel James</h3>
                <p className="opacity-70 mb-3">NY Times bestselling author, podcaster & blues musician in Austin, TX</p>
                <a 
                  href="https://ditto.pub/npub1ucgf8qyuxpqrkape9mqc20qmcs9nxe8axy069edfr8hkcl5tlhssueflfw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                  style={{ 
                    background: currentTheme.accent,
                    color: '#fff'
                  }}
                >
                  Follow on Ditto
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Stats comparison */}
            <div className="grid md:grid-cols-2">
              <div 
                className="p-8 text-center"
                style={{ borderRight: `1px solid ${currentTheme.accent}15` }}
              >
                <div className="text-red-400 text-sm font-medium mb-2 uppercase tracking-wider">Twitter Post</div>
                <div className="text-5xl md:text-6xl font-bold text-red-400 mb-2">12</div>
                <div className="opacity-60">likes from 28,000 followers</div>
              </div>
              <div className="p-8 text-center">
                <div className="text-sm font-medium mb-2 uppercase tracking-wider" style={{ color: currentTheme.accent }}>Nostr Post</div>
                <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: currentTheme.accent }}>20+</div>
                <div className="opacity-60">reposts, zaps & real conversation from 60 followers</div>
              </div>
            </div>

            {/* Story content */}
            <div className="p-6 md:p-8 space-y-6">
              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Background</h4>
                <p className="opacity-80 leading-relaxed">
                  Abel played 100 to 150 shows a year for years before burning out. He eventually realized that 
                  putting his music on the internet through his podcast reached more people with less grind than 
                  holding down residencies he could never leave. When value-for-value came up in his orbit, he was skeptical. 
                  Then he uploaded a song on a whim and everything changed.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Moment</h4>
                <p className="opacity-80 leading-relaxed">
                  "Swamp Thing" — a New Orleans-style blues track he co-wrote with Denny Hemmingson, lead musician for the Tim McGraw band — 
                  was uploaded to Wavlake with no promotion, no newsletter blast, no social push. A few days later, 
                  friends sent screenshots: <strong style={{ color: currentTheme.accent }}>Swamp Thing was sitting at #2 on the Wavlake top 40.</strong> 
                  He had no idea there was a top 40.
                </p>
              </div>

              <blockquote 
                className="p-6 rounded-xl text-xl md:text-2xl font-medium italic text-center"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.accent}15, transparent)`,
                  borderLeft: `4px solid ${currentTheme.accent}`
                }}
              >
                "60 real people who actually see your posts beat 28,000 followers on a platform that buries your content."
              </blockquote>

              <div 
                className="p-6 rounded-xl"
                style={{ background: 'rgba(255,50,50,0.08)' }}
              >
                <h4 className="font-bold text-lg mb-3 text-red-400">The Wall</h4>
                <p className="opacity-80 leading-relaxed">
                  Abel ran into the wall that every value-for-value artist eventually hits with legacy platforms. 
                  When he shared a Fountain link on Facebook, <strong className="text-red-400">the post was removed as spam.</strong> 
                  A Universal Music Group licensing deal with Meta is almost certainly why. 
                  Wavlake links went untouched, but that window won't stay open forever.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Ripple Effect</h4>
                <p className="opacity-80 leading-relaxed mb-4">
                  Abel's most useful contribution may be onboarding other artists. He got Stacey from SOB and the Dangs 
                  to upload her music to Wavlake while she was still uncertain about the Bitcoin angle.
                </p>
                <ul className="space-y-3 opacity-80">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                    <span>Two of her songs hit the top 40 quickly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                    <span>She learned to use her wallet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                    <span>She immediately started boosting other artists</span>
                  </li>
                </ul>
                <p className="opacity-80 leading-relaxed mt-4">
                  Abel describes that moment as the thing working exactly as it should: a new artist finds the platform, 
                  gets paid directly, discovers new music, and spreads it around — <strong>without anyone in the middle taking a cut or controlling what she sees.</strong>
                </p>
              </div>

              <div className="text-center pt-4">
                <p className="text-lg opacity-70 mb-4">
                  Abel has made more from Wavlake and Fountain in a few months than Spotify and Apple Music paid him in years.
                </p>
                <div className="text-2xl font-bold">
                  "The math already works. It just needs{' '}
                  <span style={{ color: currentTheme.accent }}>more people</span>."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Case Study - Kathryn */}
      {activeCaseStudy === 4 && (
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ 
                background: `${currentTheme.accent}20`,
                border: `1px solid ${currentTheme.accent}30`
              }}
            >
              <Zap className="w-4 h-4" style={{ color: currentTheme.accent }} />
              <span className="text-sm font-medium" style={{ color: currentTheme.accent }}>
                Gen Z Artist
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span style={{ color: currentTheme.accent }}>$40 in Four Days</span>
              <br />
              And Her Producer Got Half
            </h2>
          </div>

          {/* Case Study Card */}
          <div 
            className="rounded-2xl overflow-hidden"
            style={{ 
              background: `${currentTheme.accent}08`,
              border: `1px solid ${currentTheme.accent}20`,
              boxShadow: `0 0 60px ${currentTheme.accent}10`
            }}
          >
            {/* Header with profile info */}
            <div 
              className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
              style={{ 
                background: `${currentTheme.accent}12`,
                borderBottom: `1px solid ${currentTheme.accent}15`
              }}
            >
              <img 
                src="https://image.nostr.build/31e231245a511101817e4e861e6280e90d2994ae23d6c69fe4d45e46231af24c.jpg"
                alt="Kathryn"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                style={{ border: `3px solid ${currentTheme.accent}` }}
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Kathryn</h3>
                <p className="opacity-70 mb-3">Nashville R&B Artist, Belmont grad, 23 years old</p>
                <a 
                  href="https://ditto.pub/npub13j8h4ce4d07tp0lh4vg6c6wjdtdc02caj98kg70sv3th2za437gspmvtxl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                  style={{ 
                    background: currentTheme.accent,
                    color: '#fff'
                  }}
                >
                  Follow on Ditto
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3">
              <div 
                className="p-6 text-center"
                style={{ borderRight: `1px solid ${currentTheme.accent}15` }}
              >
                <div className="text-red-400 text-sm font-medium mb-2 uppercase tracking-wider">Traditional Streaming</div>
                <div className="text-4xl md:text-5xl font-bold text-red-400 mb-1">$0</div>
                <div className="text-sm opacity-50">Nothing close to value-for-value</div>
              </div>
              <div 
                className="p-6 text-center"
                style={{ borderRight: `1px solid ${currentTheme.accent}15` }}
              >
                <div className="text-sm font-medium mb-2 uppercase tracking-wider" style={{ color: currentTheme.accent }}>Fountain FM</div>
                <div className="text-4xl md:text-5xl font-bold mb-1" style={{ color: currentTheme.accent }}>~$40</div>
                <div className="text-sm opacity-50">In just 4 days</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-sm font-medium mb-2 uppercase tracking-wider" style={{ color: currentTheme.accent }}>Producer Split</div>
                <div className="text-4xl md:text-5xl font-bold mb-1" style={{ color: currentTheme.accent }}>50%</div>
                <div className="text-sm opacity-50">Automatic, real-time</div>
              </div>
            </div>

            {/* Story content */}
            <div className="p-6 md:p-8 space-y-6">
              <div 
                className="p-6 rounded-xl"
                style={{ background: 'rgba(255,50,50,0.08)' }}
              >
                <h4 className="font-bold text-lg mb-3 text-red-400">The Wall</h4>
                <p className="opacity-80 leading-relaxed">
                  Kathryn graduated from Belmont University with a music business degree, spent four years networking in Nashville's 
                  most competitive pipeline, released music on Spotify and Apple Music, played writers rounds, attended every event — 
                  and hit a wall. Not because she did anything wrong. 
                  <strong className="text-red-400"> Because that's what the traditional music industry does to independent artists who do everything right.</strong>
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Discovery</h4>
                <p className="opacity-80 leading-relaxed">
                  She came to value-for-value through someone she trusted. She had been doing social media content for Ainsley Costello, 
                  volunteering her time to get a foot in the door, when she overheard Ainsley and her mother talking about Bitcoin and sats and zaps. 
                  The language was alien enough to make her curious. She got walked through how it worked without being made to feel like an idiot 
                  for not already knowing, and decided to try it.
                </p>
              </div>

              <blockquote 
                className="p-6 rounded-xl text-xl md:text-2xl font-medium italic text-center"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.accent}15, transparent)`,
                  borderLeft: `4px solid ${currentTheme.accent}`
                }}
              >
                "Everybody eats." — She set the wallet split to 50/50 when she uploaded the song. 
                Every payment goes directly to both her and her producer in real time.
              </blockquote>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>Why It's Different</h4>
                <ul className="space-y-3 opacity-80">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                    <span>No label, no distributor, no ASCAP filing, no check in the mail six months later</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                    <span>Her first song hit the Fountain trending charts within days — with zero promotion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                    <span>On Spotify, 150 songs get released every minute and the algorithm decides who exists. On Fountain, people are actively looking for something new.</span>
                  </li>
                </ul>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Gen Z Perspective</h4>
                <p className="opacity-80 leading-relaxed">
                  Her read on why more Gen Z artists haven't made the jump: <strong>it's a marketing problem, not an ideology problem.</strong> 
                  Gen Z is already punk, already skeptical of centralized institutions, already inclined toward owning their own tools and money. 
                  The values align. The onboarding doesn't. The path from curious musician to active participant is still too long, 
                  and the events where it all clicks happen in person, quietly, with no on-ramp for people who weren't already in the room.
                </p>
              </div>

              <div className="text-center pt-4">
                <p className="text-lg opacity-70 mb-4">
                  She is 23. She still waitresses to support her music career. But she now has 7 songs on Fountain, 
                  records weekly in Nashville, and is treating the value-for-value ecosystem as the model that eventually replaces the waitressing shift.
                </p>
                <div className="text-2xl font-bold">
                  She is{' '}
                  <span style={{ color: currentTheme.accent }}>building anyway</span>.
                  <br />
                  <span className="text-lg opacity-70 font-normal">That's the whole point.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Case Study - Ivy Lumi */}
      {activeCaseStudy === 5 && (
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ 
                background: `${currentTheme.accent}20`,
                border: `1px solid ${currentTheme.accent}30`
              }}
            >
              <Sparkles className="w-4 h-4" style={{ color: currentTheme.accent }} />
              <span className="text-sm font-medium" style={{ color: currentTheme.accent }}>
                Bitcoin-Native Artist
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How Bitcoin{' '}
              <span style={{ color: currentTheme.accent }}>Unlocked a Musician</span>
              <br />
              Who Didn't Know She Was One
            </h2>
          </div>

          {/* Case Study Card */}
          <div 
            className="rounded-2xl overflow-hidden"
            style={{ 
              background: `${currentTheme.accent}08`,
              border: `1px solid ${currentTheme.accent}20`,
              boxShadow: `0 0 60px ${currentTheme.accent}10`
            }}
          >
            {/* Header with profile info */}
            <div 
              className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
              style={{ 
                background: `${currentTheme.accent}12`,
                borderBottom: `1px solid ${currentTheme.accent}15`
              }}
            >
              <img 
                src="https://blossom.primal.net/cfb660cca6a624c03a59aa7e03fb5896095263d5e583f898023694dcc8d11f69.jpg"
                alt="Ivy Lumi"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                style={{ border: `3px solid ${currentTheme.accent}` }}
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Ivy Lumi</h3>
                <p className="opacity-70 mb-3">Singer-songwriter, podcast host, event producer. "Love is the cure."</p>
                <a 
                  href="https://ditto.pub/npub1syazeldyn2yqrcsma57z8q88smayett48hg4kxh3ngm6s92hj4usvagmnw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                  style={{ 
                    background: currentTheme.accent,
                    color: '#fff'
                  }}
                >
                  Follow on Ditto
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Story content */}
            <div className="p-6 md:p-8 space-y-6">
              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Origin</h4>
                <p className="opacity-80 leading-relaxed">
                  Ivy didn't come to Bitcoin as a musician. She came as an employee, landing a job in the industry without prior knowledge 
                  and getting orange-pilled within three to six months. For years she worked in Bitcoin as a podcaster, interviewing guests, 
                  building community, traveling to conferences. Music was not part of the plan.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: 'rgba(255,50,50,0.08)' }}
              >
                <h4 className="font-bold text-lg mb-3 text-red-400">The Collapse</h4>
                <p className="opacity-80 leading-relaxed">
                  Then, within the span of two months, her long-term relationship ended, her mother got seriously ill, and she lost her job. 
                  Out of that collapse, she started writing songs. She describes the period of unemployment as the best she had looked in years — 
                  she cooked every day, went to the gym, took walks, and rested. The songs came from that process of rebuilding.
                </p>
              </div>

              <blockquote 
                className="p-6 rounded-xl text-xl md:text-2xl font-medium italic text-center"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.accent}15, transparent)`,
                  borderLeft: `4px solid ${currentTheme.accent}`
                }}
              >
                "She had melodies in her head she would rush to write down before forgetting them. 
                She had never thought of herself as someone who would release music. She did anyway."
              </blockquote>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The EP: Cure</h4>
                <p className="opacity-80 leading-relaxed mb-4">
                  Each song on her EP draws from a different period of travel for work: <strong>Berlin, Amsterdam, Madeira, Prague</strong>. 
                  She describes them as time capsules. If you've been to those cities for Bitcoin conferences, she says, 
                  she hopes you can hear something of each place in the songs.
                </p>
                <p className="opacity-80 leading-relaxed">
                  The pin collection she released alongside the EP takes this further — six collectible pins, each designed to capture 
                  the essence of a specific song. The pin with a clock where every number is replaced by the word "now" comes from 
                  "Follow the Wise Rabbit," written after Prague, with the clock face modeled on the city's historical astronomical clock. 
                  <strong style={{ color: currentTheme.accent }}> These aren't merchandise. They're artifacts of a creative process.</strong>
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The <a href="https://geyser.fund/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">Geyser Fund</a> Campaign</h4>
                <ul className="space-y-3 opacity-80">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                    <span>Asked for 500,000 sats (~$357 at the time) — intentionally small and transparent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                    <span>Met and exceeded her goal through her fan base and her appearance on the <a href="https://fountain.fm/show/IgdKDWtHpDc67T0wqqoO" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">Radio Detox "V4V" podcast</a></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                    <span>Contributors received pins, the CD, and a Nostr badge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: currentTheme.accent }} />
                    <span>Kept music on traditional platforms too — "not interested in purity tests"</span>
                  </li>
                </ul>
                <a 
                  href="https://x.com/ivylumi/status/2037019096706138598?s=20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-6 rounded-xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg"
                >
                  <img 
                    src="https://image.nostr.build/b23b9dffbd5295088e576f0920818f7b847c2af801b738bf3d80eea3999268d5.png"
                    alt="Ivy Lumi's tweet celebrating exceeding her Geyser Fund goal"
                    className="w-full max-w-lg mx-auto"
                  />
                </a>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>Built by the Community</h4>
                <p className="opacity-80 leading-relaxed">
                  Her creative director is AvZero, a Bitcoiner. Her collaborators are people from the Bitcoin community. 
                  The music video for "Wawawa," her first ever, was shot in Hong Kong after Bitcoin Asia and built around a storyboard 
                  she developed with AvZero and another Bitcoiner named Zazawawa. 
                  <strong> Everything she has made came from the community she was already in.</strong>
                </p>
              </div>

              <div className="text-center pt-4">
                <p className="text-lg opacity-70 mb-4">
                  What she describes as most valuable about Nostr and Fountain isn't the technology — it's the directness. 
                  She knows who is listening. She can interact with supporters. The signal is clear in a way that follower counts never were.
                </p>
                <div className="text-2xl font-bold">
                  She didn't bring a music career into Bitcoin.
                  <br />
                  <span style={{ color: currentTheme.accent }}>Bitcoin gave her the conditions to become a musician.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Case Study - Chris Wenske */}
      {activeCaseStudy === 6 && (
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ 
                background: `${currentTheme.accent}20`,
                border: `1px solid ${currentTheme.accent}30`
              }}
            >
              <MapPin className="w-4 h-4" style={{ color: currentTheme.accent }} />
              <span className="text-sm font-medium" style={{ color: currentTheme.accent }}>
                Community Builder
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The Bitcoin Party{' '}
              <span style={{ color: currentTheme.accent }}>That Crossed</span>
              <br />
              State Lines
            </h2>
          </div>

          {/* Case Study Card */}
          <div 
            className="rounded-2xl overflow-hidden"
            style={{ 
              background: `${currentTheme.accent}08`,
              border: `1px solid ${currentTheme.accent}20`,
              boxShadow: `0 0 60px ${currentTheme.accent}10`
            }}
          >
            {/* Header with profile info */}
            <div 
              className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
              style={{ 
                background: `${currentTheme.accent}12`,
                borderBottom: `1px solid ${currentTheme.accent}15`
              }}
            >
              <img 
                src="https://blossom.primal.net/7e35f562debf108194b91cec389e4a52138f6ea6e6e4224b3cf3e5d19826e007.jpg"
                alt="Chris Wenske"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                style={{ border: `3px solid ${currentTheme.accent}` }}
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Chris Wenske</h3>
                <p className="opacity-70 mb-3">Working musician, Bitcoin Party KC founder, Kansas City Bitcoin Summit organizer.</p>
                <a 
                  href="https://ditto.pub/npub1ctrsduxssdgthmmx7lz7erhqt2hjgj99tzkt22g2uyvayhxd9asq3xsd73"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                  style={{ 
                    background: currentTheme.accent,
                    color: '#fff'
                  }}
                >
                  Follow on Ditto
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Story content */}
            <div className="p-6 md:p-8 space-y-6">
              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Breaking Point</h4>
                <p className="opacity-80 leading-relaxed">
                  Chris Wenske did not start Bitcoin Party KC because he was a Bitcoin ideologue. He started it because Spotify owes him money 
                  he will never see, DistroKid trapped him in a $5.99 monthly fee he cannot cancel without pulling all his music from every platform, 
                  and the traditional royalty system handed his earnings to ASCAP, BMI, and a dark fund of unclaimed royalties that platforms 
                  quietly absorb after a few years of inactivity.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Music</h4>
                <p className="opacity-80 leading-relaxed">
                  He is a working musician from Kansas City, Missouri, ten blocks from the Kansas state line. His songs include 
                  <strong> Burning Down the Cornfield</strong>, which is exactly as Kansas as it sounds, a double entendre about burning fields 
                  to return nutrients to the soil and about something harder to name. <strong>You Belong</strong> came out of a conversation 
                  with a pastor during a rough stretch. <strong>Cheaters Never Win</strong> was co-written with folk songwriter Tom Tipton 
                  through a Heartland Song Network program and started as a card game metaphor before becoming something about what happens 
                  when the people you counted on let you down.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Technical Problem</h4>
                <p className="opacity-80 leading-relaxed">
                  What pulled him into Bitcoin was a specific technical problem: <strong>he wanted to split royalty payments automatically 
                  between co-writers</strong>. He found Ibex Pay before it was forced out of the United States by regulatory pressure, started 
                  using it to run betting splits at Bitcoin bowling nights, and helped onboard merchants to their platform. When Ibex left, 
                  he found someone in the KC Bitcoiners group and inspired him to build a JavaScript splitter from scratch. That person 
                  eventually abandoned the project. Chris moved on to BTC Pay Server, which he now runs through a hosted node service, and 
                  considers it the most functional solution he has found for self-hosting music files and splitting payments.
                </p>
              </div>

              <blockquote 
                className="p-6 rounded-xl text-xl md:text-2xl font-medium italic text-center"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.accent}15, transparent)`,
                  borderLeft: `4px solid ${currentTheme.accent}`
                }}
              >
                "Someone in Africa can send him whatever a song is worth to them, directly, with no mechanical royalty rate governing the 
                transaction, no platform deciding whether the number is too small to process, no six-month wait for a check."
              </blockquote>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>Bitcoin Party KC</h4>
                <p className="opacity-80 leading-relaxed mb-4">
                  Bitcoin Party KC grew out of that same frustration channeled into community. He has organized four Bitcoin block parties 
                  in Kansas City, the first of which was <strong>Bitcoin only, no other currency accepted</strong>. They used Phoenix, Blue Wallet, 
                  and Moon Wallet. It worked. The fifth block party is planned for April. A Kansas City Bitcoin conference is planned for September, 
                  and he is looking for an OG sponsor to make it happen.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>South by Southwest Export</h4>
                <p className="opacity-80 leading-relaxed">
                  The South by Southwest export party was the next logical move. He played a show Friday night at Austin Body Works on 6th Street, 
                  then the following afternoon ran a Bitcoin education event at Licha's Cantina at 1306 East 6th Street. The lineup included 
                  <strong> Supertestnet flying in from Guatemala</strong> to present on coin pools, Austin Kelsey from Pleb Labs, and Jonathan Barrios 
                  from Unchained Capital doing a Bitcoin 101 session. He drove a 55-inch TV screen to Austin in the back of his car, set it up on 
                  a stand with a wireless microphone, and made it work. He paid for lodging in Bitcoin through AirBTC. He found a steakhouse in 
                  Austin that accepts Bitcoin by posting a question on Twitter and following up on the answer.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Real Point</h4>
                <p className="opacity-80 leading-relaxed">
                  The thing he keeps coming back to is not ideology. It is the practical reality of peer-to-peer value. He is not against 
                  DistroKid or Spotify as companies. He is tired of features that cannot be undone, dark funds that accrue from inactivity, 
                  and a system designed so that <strong>the further downstream you are as an artist, the less you see</strong>.
                </p>
              </div>

              <div className="text-center pt-4">
                <p className="text-lg opacity-70 mb-4">
                  His music is on Wavlake. His events are documented in a physical newsletter that doubles as a QR code to the Bitcoin Party KC membership page.
                </p>
                <div className="text-2xl font-bold">
                  He didn't wait for the music industry to change.
                  <br />
                  <span style={{ color: currentTheme.accent }}>He threw a party and built his own.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Case Study - Sam Sethi */}
      {activeCaseStudy === 7 && (
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ 
                background: `${currentTheme.accent}20`,
                border: `1px solid ${currentTheme.accent}30`
              }}
            >
              <Zap className="w-4 h-4" style={{ color: currentTheme.accent }} />
              <span className="text-sm font-medium" style={{ color: currentTheme.accent }}>
                Podcasting 2.0 Pioneer
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The Man Who Watched{' '}
              <span style={{ color: currentTheme.accent }}>Microsoft Win</span>
              <br />
              Is Not Making the Same Mistake Twice
            </h2>
          </div>

          {/* Case Study Card */}
          <div 
            className="rounded-2xl overflow-hidden"
            style={{ 
              background: `${currentTheme.accent}08`,
              border: `1px solid ${currentTheme.accent}20`,
              boxShadow: `0 0 60px ${currentTheme.accent}10`
            }}
          >
            {/* Header with profile info */}
            <div 
              className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
              style={{ 
                background: `${currentTheme.accent}12`,
                borderBottom: `1px solid ${currentTheme.accent}15`
              }}
            >
              <img 
                src="https://cdn.masto.host/podcastindexsocial/accounts/avatars/000/003/709/original/081f4d3c40f34d24.jpeg"
                alt="Sam Sethi"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                style={{ border: `3px solid ${currentTheme.accent}` }}
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Sam Sethi</h3>
                <p className="opacity-70 mb-3">CEO of TrueFans.fm, co-host of Pod News Weekly, former Netscape product manager.</p>
                <a 
                  href="https://ditto.pub/npub1axp4n6rvpytle39f3vcvsz34u0a5pe35ez6sl2uvyxxh4snchyhs86vrf0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                  style={{ 
                    background: currentTheme.accent,
                    color: '#fff'
                  }}
                >
                  Follow on Ditto
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Story content */}
            <div className="p-6 md:p-8 space-y-6">
              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Browser Wars Survivor</h4>
                <p className="opacity-80 leading-relaxed">
                  Sam Sethi was the product manager at Netscape. He was there when the browser wars happened, when the floppy disks from AOL 
                  and CompuServe arrived in the mail, when getting online meant loading TCP/IP manually and hunting for pages because search 
                  engines did not exist yet. He watched Netscape, the innovative company, lose to Microsoft, the company that bundled Internet 
                  Explorer into the operating system and built MSN as a curated front page. <strong>Innovation did not win. Simplicity won. 
                  One click won.</strong>
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>TrueFans.fm</h4>
                <p className="opacity-80 leading-relaxed">
                  He is the CEO of <a href="https://truefans.fm" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">TrueFans.fm</a>, 
                  a podcasting 2.0 RSS marketplace for podcasts, music, audiobooks, courses, films, and live events, where fans support creators 
                  with micropayments in sats. And the most important decision he made was to <strong>hide the thing he is building on</strong>.
                </p>
              </div>

              <blockquote 
                className="p-6 rounded-xl text-xl md:text-2xl font-medium italic text-center"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.accent}15, transparent)`,
                  borderLeft: `4px solid ${currentTheme.accent}`
                }}
              >
                "When you sign up for TrueFans, it asks you to top up your wallet in dollars. There is no mention of Bitcoin. 
                There is no Lightning address setup. You put money in. You give it to people you like."
              </blockquote>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Strategic Simplicity</h4>
                <p className="opacity-80 leading-relaxed">
                  There is no KYC onboarding quiz, which Sam attempted on Strike and failed despite knowing more about Bitcoin than almost anyone. 
                  There is no explanation of what a sat is. Sam nearly went further and called them TrueFans tokens to strip out the word Bitcoin 
                  entirely, because for a significant portion of the population, <strong>Bitcoin reads as scam and stops the conversation before 
                  it starts</strong>. He held the line at wallet, but just barely.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>Desktop-First Was Not a Mistake</h4>
                <p className="opacity-80 leading-relaxed">
                  TrueFans was built desktop-first, which sounds like a mistake and was not. Building on a small screen while simultaneously 
                  figuring out wallet switching, live item tags, boost architecture, and remote payment splits would have slowed everything down 
                  and required App Store approval for every iteration. On desktop, the team could move fast, test unfamiliar technology at actual 
                  size, and ship. The industry noticed. When wallet switching worked on TrueFans, others paid attention.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Platform Play</h4>
                <p className="opacity-80 leading-relaxed">
                  Now TrueFans is in the middle of a mobile-first UI rebuild. After that, the plan is to follow Spotify's distribution model: 
                  web, mobile, iOS, Android, CarPlay, Android Auto, Apple Watch, TV. Because TrueFans is a progressive web app, it already works 
                  across all screen sizes without a code change. Sam demonstrated this on a triple-fold Huawei phone. Closed, it was a mobile app. 
                  One fold, an iPad. Fully open, a desktop. <strong>No reload.</strong>
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>Wallet Switching</h4>
                <p className="opacity-80 leading-relaxed">
                  The technology underneath TrueFans does something that did not exist before podcasting 2.0. When a listener streams to a show 
                  like Radio Detox, their sats flow to the host. The moment a song plays, <strong>the wallet switches and the sats flow to the 
                  artist</strong>. This is called wallet switching, and its implications are still unfolding. A show can carry a remote audio clip 
                  from another podcast and automatically split the payment back to the originating creator. An artist's trailer can be replaced 
                  by the full track when it drops, and subscribers to the feed do not need to resubscribe.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Ainsley Costello Model</h4>
                <p className="opacity-80 leading-relaxed">
                  The Ainsley Costello X-List album release worked this way. Fans subscribed to a feed of trailers and received the album one 
                  track at a time as each one dropped, with sats flowing to Ainsley at every play.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: 'rgba(255,200,50,0.08)' }}
              >
                <h4 className="font-bold text-lg mb-3 text-yellow-400">Reversing the Flow: Advertisers Pay Listeners</h4>
                <p className="opacity-80 leading-relaxed">
                  The newest model Sam is building reverses the flow entirely. Instead of listeners paying creators, <strong>advertisers pay 
                  listeners to hear ads</strong>. The moment an ad plays, the advertiser's wallet starts streaming sats to the listener. If 
                  the listener skips, the payment stops. The advertiser now has precise, first-party data: exactly how long each person listened, 
                  and which listeners stayed through the entire ad. No more trust-based download metrics. No more 90 percent skip rates treated 
                  as full listens. No more paying for impressions that never happened. The listener gets compensated for their time. The podcaster 
                  gets a split. The advertiser gets the only thing they actually wanted: <strong>proof that someone heard the message</strong>.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The First Sat</h4>
                <p className="opacity-80 leading-relaxed">
                  Sam co-hosts <a href="https://weekly.podnews.net" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">Pod News Weekly</a> with 
                  James Cridland. He remembers the first sat they received. Someone sent one sat and typed: <em>"did you get it"</em>. 
                  That was the message. The disbelief was the point. It worked, and then the numbers got bigger. He has watched Ainsley Costello's 
                  mother Julie go from asking what a wallet is to speaking fluent podcasting 2.0 terminology for thirty minutes straight without noticing.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Mainstream Moment</h4>
                <p className="opacity-80 leading-relaxed">
                  He has watched the Forbes article land on October 1, 2024 naming Ainsley, Joe Martin, RSS Blue, Manlike Quex, Domus, and Primal. 
                  He knows what early adoption looks like from the inside, and he knows what it takes to cross the line into mainstream. His read 
                  is that it will take a Joe Rogan, or an Apple. Not another innovative company doing it right. <strong>Someone with distribution, 
                  bundling it, making it one click.</strong>
                </p>
              </div>

              <blockquote 
                className="p-6 rounded-xl text-xl md:text-2xl font-medium italic text-center"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.accent}15, transparent)`,
                  borderLeft: `4px solid ${currentTheme.accent}`
                }}
              >
                "Jack Dorsey built micropayments into Twitter and Elon Musk deprecated them. Apple Pay proved the infrastructure for 
                device-native micropayments already exists and Apple chooses not to use it. Sam is not waiting for permission."
              </blockquote>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>London: The Center of Gravity</h4>
                <p className="opacity-80 leading-relaxed">
                  TrueFans.fm is based in London. So is Fountain. So is Oscar Merry, who built the other major podcasting 2.0 app independently, 
                  without coordinating with Sam. <strong>London is, as of this recording, the center of gravity for podcasting 2.0 infrastructure.</strong>
                </p>
              </div>

              <div className="text-center pt-4">
                <p className="text-lg opacity-70 mb-4">
                  He is building the thing that will be ready when whoever goes first brings the audience with them.
                </p>
                <div className="text-2xl font-bold">
                  He has been this early before.
                  <br />
                  <span style={{ color: currentTheme.accent }}>He knows how it ends.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Case Study - Man Like Kweks */}
      {activeCaseStudy === 8 && (
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ 
                background: `${currentTheme.accent}20`,
                border: `1px solid ${currentTheme.accent}30`
              }}
            >
              <Music2 className="w-4 h-4" style={{ color: currentTheme.accent }} />
              <span className="text-sm font-medium" style={{ color: currentTheme.accent }}>
                Bitcoin Music from Tanzania
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span style={{ color: currentTheme.accent }}>Zapped</span> to the Top
              <br />
              of Kilimanjaro
            </h2>
          </div>

          {/* Case Study Card */}
          <div 
            className="rounded-2xl overflow-hidden"
            style={{ 
              background: `${currentTheme.accent}08`,
              border: `1px solid ${currentTheme.accent}20`,
              boxShadow: `0 0 60px ${currentTheme.accent}10`
            }}
          >
            {/* Header with profile info */}
            <div 
              className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
              style={{ 
                background: `${currentTheme.accent}12`,
                borderBottom: `1px solid ${currentTheme.accent}15`
              }}
            >
              <img 
                src="https://cdn.nostrcheck.me/4ce6abbd68dab6e9fdf6e8e9912a8e12f9b539e078c634c55a9bff2994a514dd/611e8b1949f67548d63c77fe65d889a2da14b02d9fa9eeff1db26a65c25fa030.webp"
                alt="Man Like Kweks"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                style={{ border: `3px solid ${currentTheme.accent}` }}
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Man Like Kweks</h3>
                <p className="opacity-70 mb-3">Bitcoin musician from Arusha, Tanzania. Founder of Proof of Work Academy. 60+ tracks and counting.</p>
                <a 
                  href="https://ditto.pub/npub1fnn2h0tgm2mwnl0kar5ez25wztum2w0q0rrrf326n0ljn999znwsqf4xnx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                  style={{ 
                    background: currentTheme.accent,
                    color: '#fff'
                  }}
                >
                  Follow on Ditto
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Story content */}
            <div className="p-6 md:p-8 space-y-6">
              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Origin</h4>
                <p className="opacity-80 leading-relaxed">
                  Man Like Kweks did not set out to be a musician. He set out to help Tanzania. When he moved back to Arusha in September 2013 
                  after growing up in the UK, he was trying to figure out how Bitcoin could benefit his community in practical terms: wallets, 
                  on-ramps, off-ramps, the infrastructure that gets Bitcoin into people's hands. He assumed the people who could make that 
                  difference were developers. <strong>He was not a developer. So he made a song instead.</strong>
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>DCA to BTC</h4>
                <p className="opacity-80 leading-relaxed">
                  That first song was <strong>DCA to BTC</strong>. He shared it with the Bitcoin community on Twitter, where it bounced its way 
                  to a weekly show called Bitcoin Beats run by Phil at Neat Creations. Phil played it live, asked questions, and encouraged him 
                  to make another one. He did. By now, he has 60+ tracks across Fountain and Wavlake, all of them made in a four-hour window 
                  between when his children fall asleep and midnight. He learned to record on his iPhone from his nephew Rene.
                </p>
              </div>

              <blockquote 
                className="p-6 rounded-xl text-xl md:text-2xl font-medium italic text-center"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.accent}15, transparent)`,
                  borderLeft: `4px solid ${currentTheme.accent}`
                }}
              >
                "He used sats to pay his electricity bill. His monthly electric bill in Arusha runs about 100,000 Tanzanian shillings, 
                just under $30. A single song zap event covered it."
              </blockquote>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Tanzanian Shilling Context</h4>
                <p className="opacity-80 leading-relaxed">
                  When Kweks moved back in 2013, one US dollar bought 1,500 shillings. By 2024 it bought 2,700. His mother bought a piece of land 
                  in the 1980s for 30,000 shillings, which was roughly $10 at the time. That same land is now worth approximately 200 million shillings, 
                  over $100,000, because the city grew around it. That is how he explains Bitcoin to Tanzanians: <strong>divisible property, mobile 
                  property, the thing that does what land did for your parents but fits in your phone and can travel instantly to someone in Arizona 
                  or Manchester.</strong>
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>Mobile Money Infrastructure</h4>
                <p className="opacity-80 leading-relaxed">
                  Tanzania already has mobile money infrastructure that makes this intuitive. Through services like M-Pesa, a phone number is a wallet. 
                  You can send money to someone's number and they can walk to a corner shop called a Wakala and cash it out. Kweks does not need to 
                  teach the concept of a mobile payment wallet. He needs someone to build a <strong>Lightning-to-mobile-money off-ramp</strong> so that 
                  when a listener sends him sats, he can convert them to shillings at a Wakala without a bank account or KYC.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>Songs for Specific Communities</h4>
                <p className="opacity-80 leading-relaxed">
                  His songs are not about Bitcoin in the abstract. They are about specific people and specific communities. <strong>Bitcoin Dada</strong> 
                  (which means Bitcoin Sister in Swahili) was written for Marcel Guantai's women's Bitcoin education project in Nairobi. 
                  <strong> Gorilla Sats</strong> was written for Brendan's Bitcoin community in Kampala, Uganda, built on a beat that Sam Mains of 
                  Wavlake sent him cold via Nostr DM. Brendan zaps the song every single week without fail. <strong>Nostr City</strong> was built around 
                  a beat from Believe, a producer based somewhere in Arizona, after Kweks found Believe's track on Wavlake, zapped it, and sent a DM.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: 'rgba(255,200,50,0.08)' }}
              >
                <h4 className="font-bold text-lg mb-3 text-yellow-400">Tokyo Citadel: The Quintessential Bitcoin Nostr Song</h4>
                <p className="opacity-80 leading-relaxed">
                  <strong>Tokyo Citadel</strong> started as a song for a Bitcoin podcast community in Tokyo, was posted to Stemster, and Real Richard 
                  took the vocal stems and built the version that became what most people mean when they say <em>the quintessential Bitcoin Nostr song</em>.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>Relay Rider</h4>
                <p className="opacity-80 leading-relaxed">
                  <strong>Relay Rider</strong> came out of a four-hour window at night, recorded on an iPhone using an app his nephew told him about. 
                  Joe Martin heard the hook idea, went into a studio two days before a tour, and sent back harmonies and multiple versions in the morning. 
                  Kweks woke up to it.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Dance Battle Festival</h4>
                <p className="opacity-80 leading-relaxed">
                  The Dance Battle Festival in Arusha came from the same logic as everything else: he saw what OpenMike built with Tunestr, asked 
                  whether he could apply it to his community, and found a colleague named Amani who had been running a local dance competition where 
                  performers were sometimes paid nothing and sometimes split $30 six ways. They filmed the auditions and published them on Tunestr so 
                  that <strong>the global Nostr community could stream and zap the dancers in real time while watching them perform</strong>. Kweks's plan 
                  is to walk the dancers through what just happened: you received Bitcoin, here is what that means, here is the story of what you now hold.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: 'rgba(50,200,50,0.08)' }}
              >
                <h4 className="font-bold text-lg mb-3 text-green-400">Proof of Work Academy</h4>
                <p className="opacity-80 leading-relaxed">
                  <strong>Proof of Work Academy</strong> is the physical space in Arusha where this education happens. He raised the funds to complete it 
                  by climbing Kilimanjaro and posting the campaign on Geyser Fund. <strong>People zapped him to the top.</strong> The space is now up and 
                  running and hosts both Bitcoin education events and the dancers from the competition.
                </p>
              </div>

              <blockquote 
                className="p-6 rounded-xl text-xl md:text-2xl font-medium italic text-center"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.accent}15, transparent)`,
                  borderLeft: `4px solid ${currentTheme.accent}`
                }}
              >
                "He works full-time at an international school in Arusha. He stopped drinking in December 2022. He has a wife and young children. 
                The music happens between 8pm and midnight, which is the window he has."
              </blockquote>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Network</h4>
                <p className="opacity-80 leading-relaxed">
                  In under two years of that window, he built a catalog of more than 60 tracks, a Bitcoin education space, a dance competition on a 
                  Bitcoin payment rail, and a network that runs from <strong>Tanzania to Uganda to Kenya to Manchester to Arizona</strong>, all of it 
                  connected through Nostr and all of it funded by people who heard the music and decided it was worth something.
                </p>
              </div>

              <div className="text-center pt-4">
                <p className="text-lg opacity-70 mb-4">
                  He still thinks about how to get Bitcoin into the hands of Tanzanians in practical ways.
                </p>
                <div className="text-2xl font-bold">
                  He just found out he didn't need to be a developer to do it.
                  <br />
                  <span style={{ color: currentTheme.accent }}>He made a song instead.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Case Study - Annonymal */}
      {activeCaseStudy === 9 && (
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ 
                background: `${currentTheme.accent}20`,
                border: `1px solid ${currentTheme.accent}30`
              }}
            >
              <Volume2 className="w-4 h-4" style={{ color: currentTheme.accent }} />
              <span className="text-sm font-medium" style={{ color: currentTheme.accent }}>
                Anonymous Heavy Metal
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How Can I Be{' '}
              <span style={{ color: currentTheme.accent }}>Scarce?</span>
            </h2>
          </div>

          {/* Case Study Card */}
          <div 
            className="rounded-2xl overflow-hidden"
            style={{ 
              background: `${currentTheme.accent}08`,
              border: `1px solid ${currentTheme.accent}20`,
              boxShadow: `0 0 60px ${currentTheme.accent}10`
            }}
          >
            {/* Header with profile info */}
            <div 
              className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
              style={{ 
                background: `${currentTheme.accent}12`,
                borderBottom: `1px solid ${currentTheme.accent}15`
              }}
            >
              <img 
                src="https://pbs.twimg.com/profile_images/1540754363337039872/d5qySxbT_400x400.jpg"
                alt="Annonymal"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                style={{ border: `3px solid ${currentTheme.accent}` }}
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Annonymal</h3>
                <p className="opacity-70 mb-3">Six-piece anonymous heavy metal band. Journalists by day. Bitcoin's soundtrack by night. #HornsUpForSatoshi</p>
                <a 
                  href="https://ditto.pub/npub1t3mef4r3zksmzvapjeea2u6xefy56dnn09zcmr5chuj2fx9tc34ss2hc9n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                  style={{ 
                    background: currentTheme.accent,
                    color: '#fff'
                  }}
                >
                  Follow on Ditto
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Story content */}
            <div className="p-6 md:p-8 space-y-6">
              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Question</h4>
                <p className="opacity-80 leading-relaxed">
                  Annonymal is a six-piece heavy metal band whose members are anonymous. No names, no faces, no location disclosed. They are 
                  journalists by trade, covering Bitcoin and blockchain as a day job. When they looked around at the Bitcoin space and saw people 
                  who were better journalists than them, they asked a different question: <strong>how can I be scarce? How can I be unique?</strong> 
                  The answer was that Bitcoin did not have a soundtrack yet, and heavy metal was the right one.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>Why Metal</h4>
                <p className="opacity-80 leading-relaxed">
                  Their reasoning is not aesthetic. Metal is the genre of anti-establishment aggression. Bitcoin is anti-establishment by design. 
                  The aggression of punk gave way to metal, which gave way to a music industry that was deliberately defanged when it became 
                  commercially inconvenient for the people controlling the media. <strong>MTV dropped rock and metal and turned to reality shows. 
                  Not by accident. Because aggressive music makes people critical.</strong> Annonymal saw the same trajectory in Bitcoin that they 
                  saw in that cultural shift, and decided to document it in the only genre built for it.
                </p>
              </div>

              <blockquote 
                className="p-6 rounded-xl text-xl md:text-2xl font-medium italic text-center"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.accent}15, transparent)`,
                  borderLeft: `4px solid ${currentTheme.accent}`
                }}
              >
                "They describe their first encounter as being possessed by the idea that Bitcoin is organizing a political riot."
              </blockquote>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Discovery</h4>
                <p className="opacity-80 leading-relaxed">
                  They came to Bitcoin not through number go up or investment thesis but through a 10-minute YouTube video from a girl running an 
                  Austrian economics channel who called it the money of the future. They consumed everything Andreas Antonopoulos ever said.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: 'rgba(255,50,50,0.08)' }}
              >
                <h4 className="font-bold text-lg mb-3 text-red-400">As Government Dies</h4>
                <p className="opacity-80 leading-relaxed">
                  Their first song was <strong>As Government Dies</strong>. It opens with the Genesis block timestamp and Satoshi's inscription: 
                  <em> Chancellor on brink of second bailout for banks</em>. That is how they introduced themselves to the world.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Catalog</h4>
                <p className="opacity-80 leading-relaxed">
                  <strong>War Strategy</strong> was written when Russia invaded Ukraine. It preaches against war and argues that Bitcoin is the solution, 
                  that governments only seek power and control, that fixing the money makes war unaffordable. They have a song called 
                  <strong> The Arrow of Time</strong> built around that exact phrase. They have a song called <strong>The Soul Behind the Mask</strong> 
                  written in first person as Satoshi, asking what Satoshi would say if he picked up a guitar. The lead member is the primary composer 
                  of every Annonymal song. The other members contribute lyrics, melodies, solos, and drum arrangements, but the compositional core 
                  belongs to one person.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: 'rgba(255,200,50,0.08)' }}
              >
                <h4 className="font-bold text-lg mb-3 text-yellow-400">Wavlake Only</h4>
                <p className="opacity-80 leading-relaxed">
                  Their first full album is available only on Wavlake. Not Spotify. Not Apple Music. The choice was intentional and it is a hard one 
                  to explain to people who believe that if you are not on Spotify you do not exist. The album was made before ChatGPT existed, recorded 
                  with guitars and basses and drums and keyboards, the old way. <strong>No AI.</strong> They have made a small number of covers, including 
                  a version of Megadeth's <em>In My Darkest Hour</em> they are proud of, but the catalog is overwhelmingly original compositions.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>First Week on Nostr</h4>
                <p className="opacity-80 leading-relaxed">
                  Annonymal was on Nostr in the first week. They launched a hashtag called <strong>#HornsUpForSatoshi</strong> and it was one of the 
                  most used tags on the platform, which at the time had almost no one on it. They now have nearly 5,000 notes and almost 100 pieces 
                  of media published. Their wallets run through GetAlbi as the primary, with Primal as a secondary interface.
                </p>
              </div>

              <blockquote 
                className="p-6 rounded-xl text-xl md:text-2xl font-medium italic text-center"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.accent}15, transparent)`,
                  borderLeft: `4px solid ${currentTheme.accent}`
                }}
              >
                "They prefer being shared to being zapped. A share means the music reached someone new. A zap means someone who already found 
                them gave them money. Both matter, but the share is the vote that means more."
              </blockquote>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>killswitch.gov.exe</h4>
                <p className="opacity-80 leading-relaxed">
                  They ran a Geyser Fund campaign asking for $7,000 to fund the recording of their second album. It did not reach the goal. 
                  OpenMike donated. The album is being recorded anyway. It is called <strong>killswitch.gov.exe</strong>. An executable file. 
                  To kill the government. The second album will not be entirely about Bitcoin. The first album was all Bitcoin, all the time, 
                  and that felt right for an introduction. The second album reflects a more mature band that has things to say beyond one subject.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: 'rgba(50,200,50,0.08)' }}
              >
                <h4 className="font-bold text-lg mb-3 text-green-400">No Longer Afraid</h4>
                <p className="opacity-80 leading-relaxed">
                  Before Bitcoin, they were afraid of losing their job, their income, of being poor. They describe themselves as still poor but 
                  no longer afraid. The knowledge changed the relationship to the fear. They reference the scene in <em>V for Vendetta</em> where 
                  V tortures Evey until she has nothing left to lose and walks out into the rain without fear. <strong>That is approximately where 
                  they are now. Not because Bitcoin made them rich, but because understanding what money actually is and how it actually works 
                  removed the power that the fear of losing it had over them.</strong>
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Live Show</h4>
                <p className="opacity-80 leading-relaxed">
                  Their band has six members traveling together, which is expensive and logistically complicated. Their goal is to play Bitcoin 
                  conferences. They have a live show recording in the can, approximately 40 minutes, about to be released. When they get to a 
                  conference, they plan to show up exactly as their persona suggests, and you will recognize them.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>Given Bitcoin, I Have a Metal Voice</h4>
                <p className="opacity-80 leading-relaxed">
                  They wrote an article about the band called <em>Given Bitcoin, I Have a Metal Voice</em>, which traces the lineage from the Beatles 
                  through punk through metal and argues that the same anti-establishment impulse runs through all of it. Bitcoin, in their view, is 
                  the current expression of that impulse and <strong>metal is its correct soundtrack</strong>.
                </p>
              </div>

              <blockquote 
                className="p-6 rounded-xl text-xl md:text-2xl font-medium italic text-center"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.accent}15, transparent)`,
                  borderLeft: `4px solid ${currentTheme.accent}`
                }}
              >
                "In an era when AI is uploading music by the thousands every day, only what is genuinely human and genuinely meaningful will 
                hold attention. Make what you cannot help but make."
              </blockquote>

              <div className="text-center pt-4">
                <p className="text-lg opacity-70 mb-4">
                  Annonymal would be making music regardless of whether anyone listened or any money arrived. That is the standard they hold 
                  themselves to and the one they recommend to everyone else.
                </p>
                <div className="text-2xl font-bold">
                  Be true to yourself.
                  <br />
                  <span style={{ color: currentTheme.accent }}>The internal motivation is the only thing that survives.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Case Study - Longy & Aaron */}
      {activeCaseStudy === 10 && (
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ 
                background: `${currentTheme.accent}20`,
                border: `1px solid ${currentTheme.accent}30`
              }}
            >
              <Users className="w-4 h-4" style={{ color: currentTheme.accent }} />
              <span className="text-sm font-medium" style={{ color: currentTheme.accent }}>
                Radio Detox Case Study
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How One Friendship{' '}
              <span style={{ color: currentTheme.accent }}>Brought a British Musician</span>
              <br />
              into Value-for-Value
            </h2>
          </div>

          {/* Case Study Card */}
          <div 
            className="rounded-2xl overflow-hidden"
            style={{ 
              background: `${currentTheme.accent}08`,
              border: `1px solid ${currentTheme.accent}20`,
              boxShadow: `0 0 60px ${currentTheme.accent}10`
            }}
          >
            {/* Header with profile info - Two profiles */}
            <div 
              className="p-6 md:p-8"
              style={{ 
                background: `${currentTheme.accent}12`,
                borderBottom: `1px solid ${currentTheme.accent}15`
              }}
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex flex-col items-center text-center">
                  <img 
                    src="https://image.nostr.build/a424d08de684200b7f6bbb270e0c3849219dd4afc926b2ae149d5038e0d7cb3f.jpg"
                    alt="Longy"
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-3"
                    style={{ border: `3px solid ${currentTheme.accent}` }}
                  />
                  <h3 className="text-xl font-bold">Longy</h3>
                  <p className="opacity-70 text-sm mb-2">International musical streetbrawler</p>
                  <a 
                    href="https://ditto.pub/npub19ppwxjrqckwl4n2a7j960fjsvhn8vrggcd0h092nmq7zcgcskjfsywp04j"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all hover:scale-105"
                    style={{ 
                      background: currentTheme.accent,
                      color: '#fff'
                    }}
                  >
                    Follow
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                
                <div className="text-3xl opacity-50">+</div>
                
                <div className="flex flex-col items-center text-center">
                  <img 
                    src="https://image.nostr.build/8b5334beac3710b9433371ffd95cc4a7b6829868b218861c8ec48631cb9bece6.jpg"
                    alt="Aaron of Essex"
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-3"
                    style={{ border: `3px solid ${currentTheme.accent}` }}
                  />
                  <h3 className="text-xl font-bold">Aaron of Essex</h3>
                  <p className="opacity-70 text-sm mb-2">Bitcoin advocate, Salonomics podcast</p>
                  <a 
                    href="https://ditto.pub/npub1ztzpz9xepmxsry7jqdhjc32dh5wtktpnn9kjq5eupdwdq06gdn6s0d7zxv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all hover:scale-105"
                    style={{ 
                      background: currentTheme.accent,
                      color: '#fff'
                    }}
                  >
                    Follow
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <p className="text-center opacity-70 mt-6 max-w-2xl mx-auto">
                Longy is an independent musician from Southend, Essex. Aaron is a longtime friend, Bitcoin advocate, and creator of Salonomics. 
                Together, their story illustrates what it actually takes to bring artists into the value-for-value music ecosystem.
              </p>
            </div>

            {/* Story content */}
            <div className="p-6 md:p-8 space-y-6">
              <div 
                className="p-6 rounded-xl"
                style={{ background: 'rgba(255,50,50,0.08)' }}
              >
                <h4 className="font-bold text-lg mb-3 text-red-400">The Problem</h4>
                <p className="opacity-80 leading-relaxed">
                  Independent artists like Longy have spent years generating music that ends up on Spotify, Apple Music, and similar platforms 
                  where earnings are negligible. The traditional distribution model routes money through publishers, labels, and royalty agencies 
                  before anything reaches the artist, if it reaches them at all. Discovery depends on the permission of major labels and centralized 
                  radio programmers. <strong>A musician can have genuine talent and a real following and still earn almost nothing from streaming.</strong> 
                  The value-for-value model exists to fix this, but getting artists to take it seriously has been the persistent challenge.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>How It Happened</h4>
                <p className="opacity-80 leading-relaxed">
                  Aaron did not walk up to Longy with a Bitcoin pitch. He asked one question: <em>what do you know about Bitcoin?</em> When Longy 
                  mentioned NFTs and Ethereum, Aaron redirected him away from that immediately and focused the conversation on Bitcoin specifically. 
                  The approach worked because the foundation was already there. Longy is by nature skeptical of mainstream systems, resistant to 
                  gatekeepers, and already thinking like a sovereign artist. Aaron recognized that. He said Longy was primed because his music 
                  and his worldview both point in the same direction. <strong>The trust between them, built over years of friendship, meant Longy 
                  was willing to listen without needing to be sold.</strong>
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: 'rgba(255,200,50,0.08)' }}
              >
                <h4 className="font-bold text-lg mb-3 text-yellow-400">The Turning Point</h4>
                <p className="opacity-80 leading-relaxed">
                  Within a short time of getting his music on Wavlake, <strong>Adam Curry played one of Longy's songs on his podcast</strong>. 
                  Longy woke up the next morning to hundreds of thousands of sats in his wallet. That moment changed things. It was not just the money. 
                  It was the evidence. Real people had heard his music, decided it was worth something, and sent that value directly to him without 
                  any middleman taking a cut. For an artist who had watched his work generate fractions of a cent on legacy platforms, that was a 
                  different kind of proof.
                </p>
              </div>

              <blockquote 
                className="p-6 rounded-xl text-xl md:text-2xl font-medium italic text-center"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.accent}15, transparent)`,
                  borderLeft: `4px solid ${currentTheme.accent}`
                }}
              >
                "Fans sent boosts and zaps with messages attached, something that simply does not happen on Spotify. 
                The engagement felt organic and real in a way that streaming numbers do not."
              </blockquote>

              <div 
                className="p-6 rounded-xl"
                style={{ background: 'rgba(50,200,50,0.08)' }}
              >
                <h4 className="font-bold text-lg mb-3 text-green-400">What Changed</h4>
                <p className="opacity-80 leading-relaxed">
                  Longy gained an American audience he would never have found otherwise. Podcasters in the value-for-value space began playing 
                  his music. He also found himself part of a community of artists, developers, and fans who share a common goal: 
                  <strong> get artists paid fairly and build something better than what exists now</strong>.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Ongoing Challenge</h4>
                <p className="opacity-80 leading-relaxed">
                  Longy is still operating in two worlds. He still needs traditional distribution to reach the audience he already has in the fiat 
                  music system. Other artists around him remain skeptical or afraid, some worried that mentioning Bitcoin publicly will trigger 
                  algorithm penalties on Instagram or Spotify. The apps on Nostr are still rough. Wallet splits with collaborators and producers 
                  require everyone to have a Bitcoin wallet, and not everyone is willing. Getting consistent on Wavlake and building presence there 
                  takes time that most working musicians do not have after managing their day jobs, their families, and the actual work of writing 
                  and recording.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>What the Case Study Demonstrates</h4>
                <p className="opacity-80 leading-relaxed">
                  <strong>Artists do not discover value-for-value through cold outreach or conference panels. They come in through people they trust.</strong> 
                  Aaron reaching Longy directly, one conversation at a time, is how this ecosystem actually grows. The technology works. The community 
                  is real. But the path to adoption runs through personal relationships and demonstrated results, not marketing campaigns. Every artist 
                  who joins brings their own network and their own potential to pull someone else in. Longy is now looking at how to do for other 
                  local artists what Aaron did for him.
                </p>
              </div>

              <blockquote 
                className="p-6 rounded-xl text-xl md:text-2xl font-medium italic text-center"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.accent}15, transparent)`,
                  borderLeft: `4px solid ${currentTheme.accent}`
                }}
              >
                "The value-for-value model is not a niche experiment anymore. It is a functioning alternative to a broken system, 
                built by people who believe that artists deserve direct compensation for their work."
              </blockquote>

              <div className="text-center pt-4">
                <p className="text-lg opacity-70 mb-4">
                  Longy's story is one data point. The pattern it represents is the whole argument.
                </p>
                <div className="text-2xl font-bold">
                  The path to adoption runs through personal relationships.
                  <br />
                  <span style={{ color: currentTheme.accent }}>One conversation at a time.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Case Study - Contra */}
      {activeCaseStudy === 11 && (
      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Case Study Card */}
          <div 
            className="rounded-2xl overflow-hidden"
            style={{ 
              background: `${currentTheme.accent}08`,
              border: `1px solid ${currentTheme.accent}20`,
              boxShadow: `0 0 60px ${currentTheme.accent}10`
            }}
          >
            {/* Header with artist info */}
            <div 
              className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
              style={{ 
                background: `${currentTheme.accent}12`,
                borderBottom: `1px solid ${currentTheme.accent}15`
              }}
            >
              <img 
                src="https://profilepics.nostur.com/profilepic_v1/0baa70eaac98a57a620a69d30abc0f30121c7ff06f9e60f4256840818ba63b37/profilepic.jpg?1773336418"
                alt="Contra"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                style={{ border: `3px solid ${currentTheme.accent}` }}
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Contra</h3>
                <p className="opacity-70 mb-3">Father, Veteran, and Value-for-Value Music Producer on Nostr</p>
                <a 
                  href="https://ditto.pub/npub14hq5lgadtyy9dhvtszq46dnl0s0xwdddqr7e32rdqqhma8a4xhsspxjjzu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                  style={{ 
                    background: currentTheme.accent,
                    color: '#fff'
                  }}
                >
                  Follow on Ditto
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Story content */}
            <div className="p-6 md:p-8 space-y-6">
              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>Who He Is</h4>
                <p className="opacity-80 leading-relaxed">
                  Contra is a military veteran and longtime Bitcoiner who found his way to Nostr around late 2022. He is known in the community 
                  for philosophical, long-form posts rooted in sovereignty, family, and the Bitcoin ethos. He is not a professional musician. 
                  He is a music fan who decided to make music anyway, and the reason why is the most interesting part of the story.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Project</h4>
                <p className="opacity-80 leading-relaxed">
                  About two and a half to three years ago, Contra and his son started making music together. His son is nearly 19, has played 
                  drums since childhood, plays multiple instruments, and has been learning Logic Pro for years. They built out a music room in 
                  the house. The son starts with guitar or drums, records and clips pieces in Logic Pro, and they piece it together from there. 
                  They produce mainly metalcore with some hip hop. They find a consistent voice to use across an album so the sound stays cohesive.
                </p>
                <p className="opacity-80 leading-relaxed mt-4">
                  Contra uses some AI tools in the production process. His son, who is the actual musician, is not a fan of fully AI-generated 
                  music and draws a clear line between using AI as a production aid and using it to replace the creative work. 
                  <strong> The instruments are real. The compositions are theirs.</strong>
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>How Value for Value Fits In</h4>
                <p className="opacity-80 leading-relaxed">
                  All sats and zaps earned from Wavlake streams and Nostr go directly to his son. <strong>Contra keeps none of it.</strong> When 
                  his son asked what he was getting out of the time they were spending together, Contra set up a Geyser Fund under his name with 
                  a modest goal: recoup the cost of Logic Pro. The fund has not been heavily promoted. The point was to show his son how value 
                  for value works in practice.
                </p>
                <p className="opacity-80 leading-relaxed mt-4">
                  His son also dollar cost averages Bitcoin on his own through Strike. Contra stacks Bitcoin for him separately every month. 
                  The lesson being passed down is not just how to make music. It is how money works, why the dollar loses value, and what it 
                  means to receive payment directly from the people who choose to support your work with no intermediary taking a cut.
                </p>
              </div>

              <blockquote 
                className="p-6 rounded-xl text-xl md:text-2xl font-medium italic text-center"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.accent}15, transparent)`,
                  borderLeft: `4px solid ${currentTheme.accent}`
                }}
              >
                "His son is watching all of this in real time. He understands inflation. He understands why the system is designed the way it is. 
                And he is learning that there is another way to put something into the world and be compensated for it honestly."
              </blockquote>

              <div 
                className="p-6 rounded-xl"
                style={{ background: 'rgba(255,200,50,0.08)' }}
              >
                <h4 className="font-bold text-lg mb-3 text-yellow-400">Why It Matters</h4>
                <p className="opacity-80 leading-relaxed">
                  Contra is not a case study about going viral or earning a living from music on Nostr. He is a case study about what value for 
                  value looks like at the family level. A father and son spend time together making something. People who like it send Bitcoin 
                  directly. No label. No Spotify royalty statement arriving months later with a fraction of a cent per stream. No platform 
                  deciding whether the music gets seen.
                </p>
              </div>

              <div className="text-center pt-4">
                <p className="text-lg opacity-70 mb-4">
                  That is what this ecosystem is being built for.
                </p>
                <div className="text-xl font-bold mb-6">
                  Find Contra on Nostr. Support his music on{' '}
                  <a href="https://wavlake.com" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: currentTheme.accent }}>Wavlake</a>
                  {' '}and{' '}
                  <a href="https://fountain.fm" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: currentTheme.accent }}>Fountain.fm</a>.
                </div>
                <div className="text-2xl font-bold">
                  A father teaching his son how to create,
                  <br />
                  <span style={{ color: currentTheme.accent }}>and how to be paid for it honestly.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Upcoming Events from Plektos */}
      <UpcomingEventsSection accentColor={currentTheme.accent} textColor={currentTheme.text} />

      {/* Benefits Grid */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ 
                background: `${currentTheme.accent}20`,
                border: `1px solid ${currentTheme.accent}30`
              }}
            >
              <Sparkles className="w-4 h-4" style={{ color: currentTheme.accent }} />
              <span className="text-sm font-medium" style={{ color: currentTheme.accent }}>
                Join the Community
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Benefits of Joining{' '}
              <span style={{ color: currentTheme.accent }}>Ditto Music</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: DollarSign,
                title: 'Earn More Than Spotify',
                desc: "You'll earn more than you will on Spotify & reach a new audience without the drawbacks of algorithms or waiting to be monetized.",
              },
              {
                icon: Zap,
                title: 'Day One Monetization',
                desc: 'Monetization of your music is available on day one. No milestones to hit. No gatekeepers. No middlemen like Stripe.',
              },
              {
                icon: Star,
                title: 'Get Featured',
                desc: "Participants will be featured in our newsletter; the most successful from our first cohort will be prominently featured on our blog and Soapbox Sessions Podcast.",
              },
              {
                icon: MessageCircle,
                title: 'Signal Chat Support',
                desc: "Signal chat for feedback and tech help; we're with you every step of the way to support you.",
              },
              {
                icon: Users,
                title: 'Regular Community Calls',
                desc: 'Regular community calls (2-3 a month in different time zones on weekdays, a midday, an evening, and a morning call).',
              },
              {
                icon: MapPin,
                title: 'International Program',
                desc: 'Not limited to US musicians; the program is international.',
              },
              {
                icon: Heart,
                title: 'Monetary Rewards',
                desc: 'Monetary reward for posting your music and interacting on Ditto!',
              },
              {
                icon: Sparkles,
                title: 'Pioneer Status',
                desc: "You'll be one of the first to embrace this new and emerging tech and help create a revolution for music artists worldwide.",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-xl transition-all hover:scale-[1.01]"
                style={{ 
                  background: `${currentTheme.accent}08`,
                  border: `1px solid ${currentTheme.accent}15`
                }}
              >
                <benefit.icon 
                  className="w-8 h-8 flex-shrink-0 mt-1" 
                  style={{ color: currentTheme.accent }} 
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="opacity-70">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why{' '}
              <span style={{ color: currentTheme.accent }}>Join Us?</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div 
              className="p-6 rounded-xl"
              style={{ background: `${currentTheme.accent}08` }}
            >
              <p className="opacity-80 leading-relaxed text-lg">
                You'll be onboarded to Ditto for the purpose of music discovery; we want to populate this new form of Internet with 
                <strong> GREAT content</strong> that is new to people. Indie music is perfect for that. We also believe good music will earn 
                attention on its own without algorithms, ads, or making silly dances on video that have nothing to do with your music. 
                <strong> This is something we want to reward.</strong>
              </p>
            </div>

            <div 
              className="p-6 rounded-xl"
              style={{ background: `${currentTheme.accent}08` }}
            >
              <p className="opacity-80 leading-relaxed text-lg">
                We're not going to tell you what to do to succeed; that is up to you! We are here for feedback so we can create the features 
                you want in Ditto. We're also here to teach you as much as you want to learn about the tech under the hood if you wish. 
                If you don't, that's fine, too. <strong>You can dive as deeply as you have bandwidth for.</strong>
              </p>
            </div>

            <div 
              className="p-6 rounded-xl"
              style={{ background: `${currentTheme.accent}08` }}
            >
              <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>Our Partners & Community</h4>
              <p className="opacity-80 leading-relaxed">
                If you want to learn more about putting your music onto indie platforms that harness Bitcoin & Nostr, we will refer you to our 
                partners at <strong>Wavlake, Fountain, Tunestr, & Epoch Music (Phantom Power Music)</strong>, where we've been building trust 
                in our community for more than two years. Our staff has been known to lead in-person events in markets like Phoenix, DC, Austin, 
                Nashville, and Las Vegas as well as international markets like Riga, Latvia and Belgrade, Serbia. These events were also 
                live-streamed across the Nostr ecosystem. Livestreams play across all Nostr apps including Ditto, Tunestr, Epoch Music, Nostur, 
                Primal, and Zap.Stream, allowing your streams to reach a larger audience.
              </p>
            </div>

            <div 
              className="p-6 rounded-xl"
              style={{ background: `${currentTheme.accent}08` }}
            >
              <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>What You Can Do on Ditto</h4>
              <p className="opacity-80 leading-relaxed">
                The Ditto platform is where you'll be able to promote your music, tour, events, lives, and more. If a way to promote it the way 
                you want to doesn't exist, we want to know so we can explore building it for you. We want to help you with posting video, podcasts, 
                music tracks, events, ticketing, live streams, and more on Ditto. For example, we have an events platform called Plektos, and there 
                is also one in the ecosystem called Satlantis. While these will get the word out to the Nostr community, they don't have the network 
                effect of Big Tech platforms like Meetup, EventBrite, or Luma.
              </p>
            </div>

            <div 
              className="p-6 rounded-xl"
              style={{ background: 'rgba(255,200,50,0.08)' }}
            >
              <h4 className="font-bold text-lg mb-3 text-yellow-400">A Note on Expectations</h4>
              <p className="opacity-80 leading-relaxed">
                Please know it's not time to quit traditional legacy platforms just yet. Ditto is a growing platform that <em>can</em> replace 
                the legacy platforms you probably dislike, but it's not there yet. What we're doing here on Ditto can augment what you've got 
                going with Bandcamp, Spotify, Apple Music, SoundCloud, and others. But it's not going to replace all that yet. You may earn more 
                money from your music than you will through Spotify, that much is true. But it's easy to replace $1.27 checks from them. 
                <strong> What's tougher is using this to pay rent and replace a day job and we want to be transparent about that.</strong>
              </p>
            </div>

            <blockquote 
              className="p-6 rounded-xl text-xl md:text-2xl font-medium italic text-center"
              style={{ 
                background: `linear-gradient(135deg, ${currentTheme.accent}15, transparent)`,
                borderLeft: `4px solid ${currentTheme.accent}`
              }}
            >
              The Ditto audience LOVES music and staying off Big Tech, closed source, controlled platforms. 
              If your music is good and you show up consistently, they will love you.
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Questions?{' '}
            <span style={{ color: currentTheme.accent }}>Answers.</span>
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem 
              value="item-0"
              className="rounded-xl px-6 transition-colors"
              style={{ 
                background: `${currentTheme.accent}08`,
                border: `1px solid ${currentTheme.accent}15`
              }}
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-medium">What is Nostr and why should I care?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 opacity-70 leading-relaxed">
                Nostr is a decentralized protocol, think of it like email but for social media. No single company controls it. Your identity is yours forever, your content can't be deleted by a platform, and you can move between apps seamlessly.
                <br /><br />
                <a 
                  href="https://nostr-resources.surge.sh/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
                  style={{ color: currentTheme.accent }}
                >
                  Learn more about Nostr
                  <ExternalLink className="w-3 h-3" />
                </a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem 
              value="item-1"
              className="rounded-xl px-6 transition-colors"
              style={{ 
                background: `${currentTheme.accent}08`,
                border: `1px solid ${currentTheme.accent}15`
              }}
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-medium">Do I need to understand Bitcoin or crypto?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 opacity-70 leading-relaxed">
                Nope! You can use Ditto just like any other platform. Bitcoin Lightning payments are optional - they're just an amazing way for fans to tip you directly without fees. We'll help you set it up if you're interested.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-2"
              className="rounded-xl px-6 transition-colors"
              style={{ 
                background: `${currentTheme.accent}08`,
                border: `1px solid ${currentTheme.accent}15`
              }}
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-medium">What content can I post?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 opacity-70 leading-relaxed">
                Everything! Full tracks, clips, demos, live performances, podcasts, voice messages. Ditto supports music tracks, playlists, videos, short-form content, live streams, and articles.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-3"
              className="rounded-xl px-6 transition-colors"
              style={{ 
                background: `${currentTheme.accent}08`,
                border: `1px solid ${currentTheme.accent}15`
              }}
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-medium">Isn't Ditto just another social app?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 leading-relaxed">
                <p className="mb-4 opacity-70">
                  No. Ditto is more than just another social app because it brings together all the content forms that make Nostr great into one simple place. Nostr is a protocol rather than a platform or a company. So there's no incentive to do anything but free you to unleash your creativity across an ecosystem of apps.
                </p>
                
                <p className="mb-2 font-semibold" style={{ color: currentTheme.accent }}>Our Soapbox Ecosystem Includes:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 opacity-70">
                  <li><a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80" style={{ color: currentTheme.accent }}>Shakespeare.diy</a> for GenAI</li>
                  <li><a href="https://agora.space" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80" style={{ color: currentTheme.accent }}>Agora.space</a> to allow activists to organize in countries with limited access to Internet and big name platforms like X (Twitter)</li>
                  <li><a href="https://divine.video" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80" style={{ color: currentTheme.accent }}>diVine video</a> (reboot of Vine)</li>
                  <li><a href="https://plektos.app" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80" style={{ color: currentTheme.accent }}>Plektos</a> for events</li>
                  <li><a href="https://zaplytics.ditto.pub" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80" style={{ color: currentTheme.accent }}>Zaplytics</a> to see metrics on your Ditto earnings</li>
                  <li><a href="https://linkbio.at" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80" style={{ color: currentTheme.accent }}>LinkBio</a> for a "link in bio" that's interoperable with Ditto</li>
                  <li><a href="https://inkwell.social" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80" style={{ color: currentTheme.accent }}>Inkwell</a> for long-form articles</li>
                  <li><a href="https://letters.ditto.pub" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80" style={{ color: currentTheme.accent }}>Letters</a> for fan DMs</li>
                  <li><a href="https://blobbi.com" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80" style={{ color: currentTheme.accent }}>Blobbi</a> for virtual pets online</li>
                  <li><a href="https://bitchat.mesh" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80" style={{ color: currentTheme.accent }}>Bitchat mesh</a> for off-grid communication</li>
                  <li><a href="https://whitenoise.chat" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80" style={{ color: currentTheme.accent }}>WhiteNoise</a> for secure messaging</li>
                </ul>

                <p className="mb-2 font-semibold" style={{ color: currentTheme.accent }}>And other interesting apps like:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 opacity-70">
                  <li><a href="https://espy.app" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80" style={{ color: currentTheme.accent }}>Espy</a> for color moments</li>
                  <li><a href="https://mi.soapbox.pub" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80" style={{ color: currentTheme.accent }}>Mi</a> - backup your profile</li>
                  <li><a href="https://treasures.app" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80" style={{ color: currentTheme.accent }}>Treasures</a> for geocaching</li>
                </ul>

                <p className="opacity-70">
                  There are dozens more apps outside of our ecosystem. This is an open source community above all else.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-4"
              className="rounded-xl px-6 transition-colors"
              style={{ 
                background: `${currentTheme.accent}08`,
                border: `1px solid ${currentTheme.accent}15`
              }}
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-medium">How does the Creators Fund work?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 opacity-70 leading-relaxed">
                We reward outstanding music on the platform. Selection is based on quality, engagement, and community contribution. No subscriber thresholds or watch-time requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-5"
              className="rounded-xl px-6 transition-colors"
              style={{ 
                background: `${currentTheme.accent}08`,
                border: `1px solid ${currentTheme.accent}15`
              }}
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-medium">Can I still use YouTube/Spotify/etc?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 opacity-70 leading-relaxed">
                Absolutely! Many creators use Ditto alongside traditional platforms. Think of Ditto as your uncensorable home base where you truly own your audience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-6"
              className="rounded-xl px-6 transition-colors"
              style={{ 
                background: `${currentTheme.accent}08`,
                border: `1px solid ${currentTheme.accent}15`
              }}
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-medium">Is this actually free?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 opacity-70 leading-relaxed">
                Yes. Ditto Music is completely free. We're building the future of social media and want passionate creators to help shape it.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* HBIC Section - Heather Larson */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Who's in charge around here?{' '}
              <span style={{ color: currentTheme.accent }}>YOU ARE.</span>
            </h2>
            <p className="text-lg opacity-70">
              But we also have someone running the program. Learn more about Ditto Music's HBIC.
            </p>
          </div>

          <div 
            className="rounded-2xl overflow-hidden"
            style={{ 
              background: `${currentTheme.accent}08`,
              border: `1px solid ${currentTheme.accent}20`,
              boxShadow: `0 0 60px ${currentTheme.accent}10`
            }}
          >
            {/* Header with profile info */}
            <div 
              className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
              style={{ 
                background: `${currentTheme.accent}12`,
                borderBottom: `1px solid ${currentTheme.accent}15`
              }}
            >
              <img 
                src="https://blossom.dreamith.to/158492b76b461a445ce7a2b58805fc10f94d90fedaca52443464775d1e4d606d.jpeg"
                alt="Heather Larson"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                style={{ border: `3px solid ${currentTheme.accent}` }}
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Heather Larson</h3>
                <p className="opacity-70 mb-3">HBIC of Ditto Music. Radio veteran. Host of Radio Detox & Soapbox Sessions. Yoga teacher who taught the first class on Nostr.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <a 
                    href="https://cal.com/heather-larson-3dswg4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                    style={{ 
                      background: currentTheme.accent,
                      color: '#fff'
                    }}
                  >
                    Book a Call
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://ditto.pub/npub1nl8r463jkdtr0qu0k3dht03jt9t59cttk0j8gtxg9wea2russlnq2zf9d0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                    style={{ 
                      background: `${currentTheme.accent}20`,
                      color: currentTheme.accent,
                      border: `1px solid ${currentTheme.accent}40`
                    }}
                  >
                    Follow on Ditto
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bio content */}
            <div className="p-6 md:p-8 space-y-6">
              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>The Radio Years</h4>
                <p className="opacity-80 leading-relaxed">
                  Heather Larson is the HBIC of Ditto Music, the independent musicians' program at Ditto, Soapbox's Nostr-native everything app. 
                  She started in radio in the late 1990s and spent decades doing what the industry always claimed to care about: 
                  <strong> bringing music directly to the fans</strong>. In that time she called Greg Kihn and Alice Cooper her coworkers, 
                  interviewed Jennifer Lopez and Nelly Furtado, covered American Idol Seasons 1 and 2 as a reporter, and produced concerts at 
                  racetracks, intimate rooms, and live on-air studio sessions. She sat front row to review Mana and watched Brother Ali sweat 
                  it out in 115-degree Phoenix heat. She was there, always on the side of the music and the people who needed to hear it.
                </p>
              </div>

              <blockquote 
                className="p-6 rounded-xl text-xl md:text-2xl font-medium italic text-center"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.accent}15, transparent)`,
                  borderLeft: `4px solid ${currentTheme.accent}`
                }}
              >
                "She left traditional broadcasting after watching it fail artists, audiences, and itself in sequence. 
                She now does what radio always claimed to do without actually doing it."
              </blockquote>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>Radio Detox & Soapbox Sessions</h4>
                <p className="opacity-80 leading-relaxed">
                  Since 2024, Heather has hosted <a href="https://fountain.fm/show/IgdKDWtHpDc67T0wqqoO" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">Radio Detox</a>, 
                  a podcast that highlights independent artists & builders in the "value-for-value" music ecosystem, an innovative, open source 
                  answer to corporate podcasts, radio, and tech. She also hosts <a href="https://sessions.soapbox.pub/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">Soapbox Sessions</a>, 
                  covering the culture and economics of the value-for-value world. She has interviewed artists, developers, and platform builders 
                  across the space and documented what is actually working for independent musicians who earn directly from their audience with 
                  no algorithm in between.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>In the Space</h4>
                <p className="opacity-80 leading-relaxed">
                  She has been active in the Bitcoin and Nostr space for more than two years, a Bitcoiner since 2020, and has established 
                  relationships at Wavlake, Fountain, Tunestr, Epoch Music, and more. She has spoken at Nostr Valley on Nostr for Content Creators, 
                  spoken at Sats by SW in Austin, and participated in Culture Shock Phoenix, NosVegas 1 in 2025, and NosVegas 2 in 2026. 
                  She has been a part of in-person events in <strong>Phoenix, Washington DC, Austin, Nashville, and Las Vegas</strong>.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: 'rgba(255,200,50,0.08)' }}
              >
                <h4 className="font-bold text-lg mb-3 text-yellow-400">Why Ditto Music</h4>
                <p className="opacity-80 leading-relaxed">
                  She started Ditto Music to bring independent musicians to Nostr through Ditto, with a direct path to music discovery, 
                  day-one monetization, and an audience that chooses to harness emerging tech innovations to empower artists and fans.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{ background: `${currentTheme.accent}08` }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: currentTheme.accent }}>First Yoga Class on Nostr</h4>
                <p className="opacity-80 leading-relaxed">
                  She is also, somewhat improbably, the person who taught the first yoga class on Nostr. This allowed her to experience "V4V" 
                  in action despite the fact that she can hardly carry a tune as a singer.
                </p>
              </div>

              <div className="text-center pt-4">
                <p className="text-lg opacity-70 mb-4">
                  She's here to help by harnessing the power of the Soapbox dev team, the coolest group of nerds you'll ever meet.
                </p>
                <div className="text-xl font-bold">
                  She'll even roadie for you, work a nightclub door,
                  <br />
                  <span style={{ color: currentTheme.accent }}>and tell you what year she played that old ass song on the radio.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call CTA */}
      <section className="py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <div 
            className="rounded-2xl p-12 text-center"
            style={{ 
              background: `${currentTheme.accent}10`,
              border: `1px solid ${currentTheme.accent}20`
            }}
          >
            <Music2 className="w-16 h-16 mx-auto mb-6" style={{ color: currentTheme.accent }} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to{' '}
              <span style={{ color: currentTheme.accent }}>Get Started</span>?
            </h2>
            <p className="opacity-60 mb-8 max-w-md mx-auto">
              Book a call with Heather to learn more about Ditto Music and how you can be part of the decentralized music revolution.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 transition-all hover:scale-105"
              style={{ 
                background: currentTheme.accent,
                color: '#fff',
                boxShadow: `0 0 30px ${currentTheme.accent}50`
              }}
              asChild
            >
              <a href="https://cal.com/heather-larson-3dswg4" target="_blank" rel="noopener noreferrer">
                Book a Call
                <Sparkles className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="py-12 px-4"
        style={{ borderTop: `1px solid ${currentTheme.accent}15` }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Music2 className="w-6 h-6" style={{ color: currentTheme.accent }} />
            <span className="font-semibold">Ditto Music</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm opacity-60">
            <a 
              href="https://ditto.pub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              Ditto.pub
            </a>
            <a 
              href="https://soapbox.pub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              Soapbox
            </a>
            <a 
              href="https://about.ditto.pub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              About
            </a>
          </div>

          <div className="text-sm opacity-60">
            Vibed with{' '}
            <a 
              href="https://shakespeare.diy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
              style={{ color: currentTheme.accent }}
            >
              Shakespeare
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
