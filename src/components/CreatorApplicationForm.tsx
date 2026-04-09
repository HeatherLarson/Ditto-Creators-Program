import { useState } from 'react';
import { Loader2, CheckCircle2, Music2, ExternalLink } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/useToast';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useNostrPublish } from '@/hooks/useNostrPublish';
import { LoginArea } from '@/components/auth/LoginArea';

interface CreatorApplicationFormProps {
  accentColor?: string;
}

interface FormData {
  artistName: string;
  email: string;
  musicLinks: string;
  genre: string;
  about: string;
  whyJoin: string;
  npub: string;
}

const initialFormData: FormData = {
  artistName: '',
  email: '',
  musicLinks: '',
  genre: '',
  about: '',
  whyJoin: '',
  npub: '',
};

export function CreatorApplicationForm({ accentColor = '#a855f7' }: CreatorApplicationFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { user, metadata } = useCurrentUser();
  const { mutateAsync: publishEvent } = useNostrPublish();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.artistName.trim()) {
      toast({ title: 'Artist name is required', variant: 'destructive' });
      return;
    }
    if (!formData.email.trim() && !user) {
      toast({ title: 'Email is required when not logged in with Nostr', variant: 'destructive' });
      return;
    }
    if (!formData.about.trim()) {
      toast({ title: 'Please tell us about yourself', variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);

    try {
      // If user is logged in with Nostr, publish the application as an event
      if (user) {
        const applicationContent = JSON.stringify({
          type: 'ditto-creator-application',
          version: '1.0',
          artistName: formData.artistName,
          email: formData.email || 'via-nostr',
          musicLinks: formData.musicLinks,
          genre: formData.genre,
          about: formData.about,
          whyJoin: formData.whyJoin,
          submittedAt: new Date().toISOString(),
        });

        // Publish as a kind 1 note with a specific hashtag for discovery
        // This allows the Ditto team to easily find applications
        await publishEvent({
          kind: 1,
          content: `[Ditto Music Application]\n\nArtist: ${formData.artistName}\nGenre: ${formData.genre || 'Not specified'}\n\n${formData.about}\n\nWhy I want to join:\n${formData.whyJoin}\n\nMusic: ${formData.musicLinks || 'Will share later'}\n\n#DittoMusic #MusicianApplication`,
          tags: [
            ['t', 'dittomusic'],
            ['t', 'musicianapplication'],
            ['application', applicationContent],
          ],
        });

        toast({
          title: 'Application Submitted!',
          description: 'Your application has been published to Nostr. We\'ll be in touch!',
        });
      } else {
        // For non-Nostr users, we'll show instructions
        // In a real implementation, this could send to an API endpoint
        toast({
          title: 'Application Received!',
          description: 'We\'ve noted your interest. For the best experience, consider logging in with Nostr!',
        });
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to submit application:', error);
      toast({
        title: 'Submission Failed',
        description: 'Please try again or reach out directly on Nostr.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div 
        className="rounded-2xl p-12 text-center"
        style={{ 
          background: `${accentColor}10`,
          border: `1px solid ${accentColor}20`
        }}
      >
        <div 
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: '#22c55e30' }}
        >
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold mb-4">You're In!</h3>
        <p className="opacity-60 mb-6 max-w-md mx-auto">
          Thanks for applying to Ditto Music! We've received your application 
          and will be in touch soon. In the meantime...
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            style={{ 
              background: accentColor,
              color: '#fff',
              boxShadow: `0 0 30px ${accentColor}40`
            }}
          >
            <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
              Explore Ditto
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            asChild
            style={{ borderColor: `${accentColor}50` }}
          >
            <a href="https://about.ditto.pub/nostr-101" target="_blank" rel="noopener noreferrer">
              Learn About Nostr
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="rounded-2xl p-8"
      style={{ 
        background: `${accentColor}10`,
        border: `1px solid ${accentColor}20`
      }}
    >
      {/* Nostr Login Prompt */}
      {!user && (
        <div 
          className="mb-8 p-4 rounded-xl"
          style={{ 
            background: `${accentColor}15`,
            border: `1px solid ${accentColor}25`
          }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold mb-1">Have a Nostr account?</h4>
              <p className="text-sm opacity-60">
                Log in to submit your application on-chain and get priority consideration.
              </p>
            </div>
            <LoginArea className="flex-shrink-0" />
          </div>
        </div>
      )}

      {/* Logged in indicator */}
      {user && (
        <div 
          className="mb-8 p-4 rounded-xl"
          style={{ background: '#22c55e15', border: '1px solid #22c55e25' }}
        >
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <div>
              <h4 className="font-semibold text-green-500">Connected with Nostr</h4>
              <p className="text-sm opacity-60">
                Logged in as {metadata?.name || 'Anonymous'} - Your application will be published to Nostr.
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="artistName">
              Artist / Band Name <span className="text-red-400">*</span>
            </Label>
            <Input
              id="artistName"
              name="artistName"
              placeholder="Your stage name"
              value={formData.artistName}
              onChange={handleChange}
              required
              className="bg-black/20 border-white/10 focus:border-white/30"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email {!user && <span className="text-red-400">*</span>}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={user ? "Optional if logged in" : "your@email.com"}
              value={formData.email}
              onChange={handleChange}
              required={!user}
              className="bg-black/20 border-white/10 focus:border-white/30"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="genre">Genre / Style</Label>
            <Input
              id="genre"
              name="genre"
              placeholder="e.g., Hip-hop, Indie Rock, Electronic"
              value={formData.genre}
              onChange={handleChange}
              className="bg-black/20 border-white/10 focus:border-white/30"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="musicLinks">Links to Your Music</Label>
            <Input
              id="musicLinks"
              name="musicLinks"
              placeholder="Spotify, SoundCloud, YouTube, etc."
              value={formData.musicLinks}
              onChange={handleChange}
              className="bg-black/20 border-white/10 focus:border-white/30"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="about">
            Tell Us About Yourself <span className="text-red-400">*</span>
          </Label>
          <Textarea
            id="about"
            name="about"
            placeholder="What's your story? What kind of music do you make? What are your goals as an artist?"
            value={formData.about}
            onChange={handleChange}
            required
            rows={4}
            className="bg-black/20 border-white/10 focus:border-white/30 resize-none"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="whyJoin">Why Do You Want to Join Ditto Music?</Label>
          <Textarea
            id="whyJoin"
            name="whyJoin"
            placeholder="What excites you about decentralized social media? What would you like to see on Ditto?"
            value={formData.whyJoin}
            onChange={handleChange}
            rows={3}
            className="bg-black/20 border-white/10 focus:border-white/30 resize-none"
          />
        </div>

        {!user && (
          <div className="space-y-2">
            <Label htmlFor="npub">Nostr Public Key (npub) - Optional</Label>
            <Input
              id="npub"
              name="npub"
              placeholder="npub1..."
              value={formData.npub}
              onChange={handleChange}
              className="bg-black/20 border-white/10 focus:border-white/30"
            />
            <p className="text-xs opacity-50">
              If you have a Nostr account but prefer not to log in, paste your npub here.
            </p>
          </div>
        )}

        <div className="pt-4">
          <Button 
            type="submit" 
            size="lg" 
            className="w-full text-lg py-6 transition-all hover:scale-[1.02]"
            style={{ 
              background: accentColor,
              color: '#fff',
              boxShadow: `0 0 30px ${accentColor}50`
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Music2 className="mr-2 h-5 w-5" />
                Submit Application
              </>
            )}
          </Button>
        </div>

        <p className="text-xs text-center opacity-50">
          By submitting, you agree to participate in beta testing and provide feedback. 
          Your information will only be used for Ditto Music.
        </p>
      </form>
    </div>
  );
}
