import { useSeoMeta } from '@unhead/react';
import { useState } from 'react';
import { 
  Music2, 
  Shield, 
  Zap, 
  Users, 
  DollarSign, 
  MessageSquare,
  ChevronDown,
  ExternalLink,
  Check,
  Sparkles,
  Radio,
  Mic2,
  Heart
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { CreatorApplicationForm } from '@/components/CreatorApplicationForm';

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  useSeoMeta({
    title: 'Ditto Creators Program | For Musicians',
    description: 'Join the Ditto Creators Program. Get early access, shape the future of decentralized music, and earn from the Ditto Creators Fund. No gatekeepers. No algorithms. Just your music.',
  });

  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(() => {
      document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background grid */}
      <div className="fixed inset-0 bg-grid opacity-50 pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center isolate">
        {/* Hero background image */}
        <div 
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        
        <div className="container relative z-10 px-4 py-24 md:py-32">
          {/* Logo / Brand */}
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Music2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Ditto Creators Program</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="gradient-text">Your Music.</span>
              <br />
              <span className="text-foreground">Your Rules.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Tired of algorithms burying your content? Tired of platforms that don't pay? 
              Join the leading edge of decentralized music on Ditto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 glow-purple hover:glow-purple-strong transition-all duration-300"
                onClick={scrollToForm}
              >
                Apply to Join
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-muted-foreground/30 hover:border-primary/50 transition-all duration-300"
                asChild
              >
                <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
                  Explore Ditto
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>100% Free to Join</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Shape the Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Earn from Creators Fund</span>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-muted-foreground/50" />
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="relative py-24 md:py-32">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
              Aren't You <span className="gradient-text">Tired</span> of This?
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              The platforms that were supposed to help artists have become the biggest obstacles.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Jumping through hoops for monetization",
                  description: "1,000 subscribers? 4,000 watch hours? 10,000 followers? Why should your art have arbitrary gatekeeping?"
                },
                {
                  title: "Content taken down without warning",
                  description: "One copyright claim, one \"community guidelines\" violation, and years of work can vanish overnight."
                },
                {
                  title: "De-platformed with no recourse",
                  description: "Banned for speaking your mind? Good luck appealing to a faceless algorithm. Your audience? Gone."
                },
                {
                  title: "Building on someone else's backyard",
                  description: "You're a tenant on Big Tech's property. They change the rules, raise the rent, or kick you out whenever they want."
                }
              ].map((pain, i) => (
                <Card 
                  key={i} 
                  className="bg-destructive/5 border-destructive/20 hover:border-destructive/40 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-destructive/90">{pain.title}</h3>
                    <p className="text-muted-foreground">{pain.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Freedom Section */}
      <section className="relative py-24 md:py-32 overflow-hidden isolate">
        <div 
          className="absolute inset-0 -z-10 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/freedom.jpg)' }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/95 to-background" />
        
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                What if You Could <span className="gradient-text">Own</span> Your Audience?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ditto is built on Nostr, a decentralized protocol that puts <strong className="text-foreground">you</strong> in control. 
                Your followers? They're yours forever. Your content? Uncensorable. Your identity? 
                Portable across any app that supports the protocol.
              </p>
              
              <div className="space-y-4">
                {[
                  "No algorithm deciding who sees your music",
                  "No platform can ban you or delete your content",
                  "Take your audience with you, anywhere",
                  "Get paid directly via Bitcoin Lightning",
                  "Connect with fans on your terms"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="gradient-border rounded-2xl p-1">
                <Card className="bg-card/80 backdrop-blur border-0">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">True Ownership</h3>
                        <p className="text-sm text-muted-foreground">Your keys, your content</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      On Nostr, you hold cryptographic keys that prove your identity. 
                      No company can impersonate you, no platform can silence you. 
                      This is what digital freedom looks like.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* What is Ditto Section */}
      <section className="relative py-24 md:py-32">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What is <span className="gradient-text">Ditto</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A social platform for people who want to have fun, not feed the Big Tech machine. 
              Open source, decentralized, and entirely yours to customize.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Music2,
                title: "Music Tracks & Playlists",
                description: "Upload your music and create playlists. Get discovered through a feed that respects your art, not an algorithm's agenda."
              },
              {
                icon: Radio,
                title: "Live Streaming",
                description: "Go live with your performances. Connect directly with fans. Get tipped in Bitcoin Lightning in real-time."
              },
              {
                icon: Mic2,
                title: "Podcasts & Voice",
                description: "Share your podcast episodes, voice messages, and audio content. Build your audio empire without gatekeepers."
              },
              {
                icon: Zap,
                title: "Instant Payments",
                description: "Receive Bitcoin tips (zaps) directly from fans. No middleman taking 30%. No waiting weeks for payouts."
              },
              {
                icon: Users,
                title: "Community Building",
                description: "Comments, reactions, and discussions. Build a real community around your music, not just passive followers."
              },
              {
                icon: Heart,
                title: "Custom Themes",
                description: "Express yourself with fully customizable profiles. Colors, backgrounds, fonts. Make your page truly yours."
              }
            ].map((feature, i) => (
              <Card 
                key={i} 
                className="bg-card/50 border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Creators Program Benefits */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Limited Beta Access</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The <span className="gradient-text">Ditto Creators</span> Program
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be among the first musicians to shape the future of decentralized music. 
              Your feedback directly influences how Ditto evolves.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="gradient-border bg-card/80 backdrop-blur">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-6">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Creators Fund</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The best music on Ditto gets rewarded from our Creators Fund. 
                  Quality content deserves compensation, not just clout.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-border bg-card/80 backdrop-blur">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Direct Feedback</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your voice matters. Work directly with the Ditto team to shape features 
                  that actually help musicians succeed.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-border bg-card/80 backdrop-blur">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Pioneer Status</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Be recognized as a founding creator. Early adopters who help build 
                  the community will be remembered.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional benefits list */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "100% free to participate",
                "No follower requirements",
                "Early access to new features",
                "Priority support from the team",
                "Community of like-minded artists",
                "Uncensorable platform"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card/30">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 md:py-32">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "What is Nostr and why does it matter?",
                  answer: "Nostr is a decentralized protocol for social networking. Unlike Twitter or Instagram, no single company controls Nostr. Your identity is yours forever, your content can't be deleted by a platform, and you can move between apps seamlessly. Think of it like email, your Gmail address works with any email client."
                },
                {
                  question: "Do I need to know anything about crypto or Bitcoin?",
                  answer: "Not at all! You can use Ditto just like any other social platform. Bitcoin Lightning payments are optional, they're just an amazing way for fans to support you directly without fees. If you're curious, we'll help you get set up."
                },
                {
                  question: "What kind of music content can I post?",
                  answer: "Everything! Full tracks, clips, demos, live performances, podcasts, voice messages, and more. Ditto supports multiple content types including music tracks, playlists, videos, short-form content (like Reels/TikTok), live streams, and long-form articles."
                },
                {
                  question: "How does the Creators Fund work?",
                  answer: "The Ditto Creators Fund rewards outstanding music content on the platform. Selection is based on quality, engagement, and contribution to the community. There are no subscriber thresholds or watch-time requirements, just great music."
                },
                {
                  question: "Can I still use other platforms?",
                  answer: "Absolutely! Many creators use Ditto alongside traditional platforms. In fact, Ditto can bridge to Bluesky and Mastodon, expanding your reach. Think of Ditto as your uncensorable home base."
                },
                {
                  question: "Is this really free?",
                  answer: "Yes. The Ditto Creators Program is completely free. We're building the future of social media and we want passionate creators to help shape it. No hidden costs, no premium tiers for basic features."
                },
                {
                  question: "When does the program start?",
                  answer: "We're accepting applications now for our beta program. Selected creators will get early access to new music-focused features and direct communication with the development team."
                }
              ].map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`}
                  className="border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-lg font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="relative py-24 md:py-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to <span className="gradient-text">Join</span>?
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below to apply for the Ditto Creators Program. 
                We'll be in touch soon!
              </p>
            </div>

            {showForm ? (
              <CreatorApplicationForm />
            ) : (
              <div className="text-center">
                <Card className="gradient-border bg-card/80 backdrop-blur p-12">
                  <CardContent className="p-0">
                    <Music2 className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Musicians Only (For Now)</h3>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                      We're starting with musicians and expanding to more creator types soon. 
                      Ready to be a pioneer?
                    </p>
                    <Button 
                      size="lg" 
                      className="text-lg px-8 py-6 glow-purple hover:glow-purple-strong transition-all duration-300"
                      onClick={() => setShowForm(true)}
                    >
                      Start Application
                      <Sparkles className="ml-2 w-5 h-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-border/30">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Music2 className="w-6 h-6 text-primary" />
              <span className="font-semibold">Ditto Creators Program</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a 
                href="https://ditto.pub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Ditto.pub
              </a>
              <a 
                href="https://soapbox.pub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Soapbox
              </a>
              <a 
                href="https://about.ditto.pub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                About Ditto
              </a>
            </div>

            <div className="text-sm text-muted-foreground">
              Vibed with{' '}
              <a 
                href="https://shakespeare.diy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Shakespeare
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
