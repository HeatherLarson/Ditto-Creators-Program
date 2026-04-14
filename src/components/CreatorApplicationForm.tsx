import { Music2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CreatorApplicationFormProps {
  accentColor?: string;
}

const GOOGLE_FORM_URL = 'https://forms.gle/SbpRBqmATHxGVnGo6';

export function CreatorApplicationForm({ accentColor = '#a855f7' }: CreatorApplicationFormProps) {
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
        style={{ background: `${accentColor}20` }}
      >
        <Music2 className="w-10 h-10" style={{ color: accentColor }} />
      </div>
      
      <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
      
      <p className="opacity-60 mb-8 max-w-md mx-auto">
        Fill out our quick application form and we'll be in touch soon. 
        Join the future of decentralized music!
      </p>
      
      <Button 
        asChild
        size="lg"
        className="text-lg px-8 py-6 transition-all hover:scale-105"
        style={{ 
          background: accentColor,
          color: '#fff',
          boxShadow: `0 0 30px ${accentColor}50`
        }}
      >
        <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
          <Music2 className="mr-2 h-5 w-5" />
          Open Application Form
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
      
      <p className="text-xs mt-6 opacity-50">
        Opens in a new tab. Your information will only be used for Ditto Music.
      </p>
    </div>
  );
}
