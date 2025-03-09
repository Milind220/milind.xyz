import { Github, Twitter, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

export function SocialLinks() {
  return (
    <div className={cn(
      "fixed bottom-8 right-8",
      "flex flex-col gap-4",
      "text-foreground hover:text-accent"
    )}>
      <a href="https://github.com/Milind220" className="hover:text-accent">
        <Github className="h-5 w-5" />
      </a>
      <a href="https://twitter.com/MilindS_" className="hover:text-accent">
        <Twitter className="h-5 w-5" />
      </a>
      <a href="https://www.linkedin.com/in/milindsharma8/" className="hover:text-accent">
        <Linkedin className="h-5 w-5" />
      </a>
    </div>
  );
}
