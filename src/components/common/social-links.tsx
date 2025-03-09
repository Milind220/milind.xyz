import { Github, Twitter, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * SocialLinks component
 * Displays social media links in a fixed position
 */
export function SocialLinks() {
  return (
    <div className={cn(
      "fixed bottom-8 right-8",
      "flex flex-col gap-4",
      "z-10"
    )}>
      <a 
        href="https://github.com/Milind220" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-foreground hover:text-accent transition-colors"
      >
        <Github className="h-5 w-5" />
      </a>
      <a 
        href="https://twitter.com/MilindS_" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="text-foreground hover:text-accent transition-colors"
      >
        <Twitter className="h-5 w-5" />
      </a>
      <a 
        href="https://www.linkedin.com/in/milindsharma8/" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-foreground hover:text-accent transition-colors"
      >
        <Linkedin className="h-5 w-5" />
      </a>
    </div>
  );
}
