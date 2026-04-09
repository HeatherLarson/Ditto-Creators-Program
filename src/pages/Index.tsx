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

import { CreatorApplicationForm } from '@/components/CreatorApplicationForm';

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

const Index = () => {
  const [activeTheme, setActiveTheme] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [isThemePickerOpen, setIsThemePickerOpen] = useState(false);

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
                  onClick={() => {
                    setShowForm(true);
                    setTimeout(() => {
                      document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Apply to Join
                  <Sparkles className="ml-2 w-5 h-5" />
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

      {/* Case Study - Ainsley Costello */}
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

      {/* Case Study - Sara Jade */}
      <section className="py-24 px-4">
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

      {/* Case Study - OpenMike */}
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

      {/* Case Study - Abel James */}
      <section className="py-24 px-4">
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

      {/* Case Study - Kathryn */}
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

      {/* Case Study - Ivy Lumi */}
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
                    src="https://blossom.primal.net/8b13dcf306ca695eaa3e0b1f144bd90fd0c6b5263e0b147ddb6baf5fdaf3d35f.png"
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

      {/* Case Study - Chris Wenske */}
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
                Limited Beta Access
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span style={{ color: currentTheme.accent }}>Ditto Music</span>
            </h2>
            <p className="text-lg opacity-60 max-w-xl mx-auto">
              Be among the first musicians to shape decentralized music. Your feedback directly influences Ditto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Headphones,
                title: 'Personalized Onboarding',
                desc: 'Get 1-on-1 guidance to set up your profile, upload music, and connect your wallet. We\'ll make sure you hit the ground running.',
                gradient: `linear-gradient(135deg, ${currentTheme.accent}30, transparent)`
              },
              {
                icon: Users,
                title: 'Regular Community Calls',
                desc: 'Join fellow creators for regular calls where you can share feedback, learn tips, and connect with the Ditto team directly.',
                gradient: `linear-gradient(135deg, #3b82f630, transparent)`
              },
              {
                icon: Star,
                title: 'Featured on Ditto.pub',
                desc: 'Stand-out creators get featured placement on the platform. Your music in front of the entire Ditto community.',
                gradient: `linear-gradient(135deg, #f59e0b30, transparent)`
              },
              {
                icon: DollarSign,
                title: 'Creators Fund',
                desc: 'The best music gets rewarded from our fund. Quality over follower counts.',
                gradient: `linear-gradient(135deg, #22c55e30, transparent)`
              },
              {
                icon: MessageCircle,
                title: 'Direct Feedback Loop',
                desc: 'Your input shapes the product. Tell us what musicians need and watch it get built.',
                gradient: `linear-gradient(135deg, #ec489930, transparent)`
              },
              {
                icon: Sparkles,
                title: 'Pioneer Status',
                desc: 'Be recognized as a founding creator. Early adopters are remembered.',
                gradient: `linear-gradient(135deg, #8b5cf630, transparent)`
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl transition-all hover:scale-[1.02]"
                style={{ 
                  background: benefit.gradient,
                  border: `1px solid ${currentTheme.accent}20`
                }}
              >
                <benefit.icon 
                  className="w-12 h-12 mb-4" 
                  style={{ color: currentTheme.accent }} 
                />
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="opacity-70">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Bonus perks */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              '100% free to participate',
              'No follower requirements',
              'Early access to new features',
              'Priority support from the team',
              'Community of like-minded artists',
              'Uncensorable platform'
            ].map((perk, i) => (
              <div 
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: `${currentTheme.accent}10` }}
              >
                <Check className="w-5 h-5 flex-shrink-0" style={{ color: currentTheme.accent }} />
                <span>{perk}</span>
              </div>
            ))}
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
            {[
              {
                q: "What is Nostr and why should I care?",
                a: "Nostr is a decentralized protocol, think of it like email but for social media. No single company controls it. Your identity is yours forever, your content can't be deleted by a platform, and you can move between apps seamlessly."
              },
              {
                q: "Do I need to understand Bitcoin or crypto?",
                a: "Nope! You can use Ditto just like any other platform. Bitcoin Lightning payments are optional - they're just an amazing way for fans to tip you directly without fees. We'll help you set it up if you're interested."
              },
              {
                q: "What content can I post?",
                a: "Everything! Full tracks, clips, demos, live performances, podcasts, voice messages. Ditto supports music tracks, playlists, videos, short-form content, live streams, and articles."
              },
              {
                q: "How does the Creators Fund work?",
                a: "We reward outstanding music on the platform. Selection is based on quality, engagement, and community contribution. No subscriber thresholds or watch-time requirements."
              },
              {
                q: "Can I still use YouTube/Spotify/etc?",
                a: "Absolutely! Many creators use Ditto alongside traditional platforms. Think of Ditto as your uncensorable home base where you truly own your audience."
              },
              {
                q: "Is this actually free?",
                a: "Yes. Ditto Music is completely free. We're building the future of social media and want passionate creators to help shape it."
              },
            ].map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="rounded-xl px-6 transition-colors"
                style={{ 
                  background: `${currentTheme.accent}08`,
                  border: `1px solid ${currentTheme.accent}15`
                }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-medium">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 opacity-70 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to{' '}
              <span style={{ color: currentTheme.accent }}>Join</span>?
            </h2>
            <p className="text-lg opacity-60">
              Fill out the form below. We'll be in touch soon.
            </p>
          </div>

          {showForm ? (
            <CreatorApplicationForm accentColor={currentTheme.accent} />
          ) : (
            <div 
              className="rounded-2xl p-12 text-center"
              style={{ 
                background: `${currentTheme.accent}10`,
                border: `1px solid ${currentTheme.accent}20`
              }}
            >
              <Music2 className="w-16 h-16 mx-auto mb-6" style={{ color: currentTheme.accent }} />
              <h3 className="text-2xl font-bold mb-4">Musicians Only (For Now)</h3>
              <p className="opacity-60 mb-8 max-w-md mx-auto">
                We're starting with musicians and expanding to more creator types soon. 
                We're accepting applications and contacting those accepted on a rolling basis. Ready to be a pioneer?
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 transition-all hover:scale-105"
                style={{ 
                  background: currentTheme.accent,
                  color: '#fff',
                  boxShadow: `0 0 30px ${currentTheme.accent}50`
                }}
                onClick={() => setShowForm(true)}
              >
                Start Application
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}
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
