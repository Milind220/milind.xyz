import { Github, Twitter, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

export function SocialLinks() {
  return (
    <div className={cn(
      "fixed bottom-8 right-8",
      "flex flex-col gap-4",
      "text-foreground hover:text-accent"
    )}>
      <a href="https://github.com/username" className="hover:text-accent">
        <Github className="h-5 w-5" />
      </a>
      <a href="https://twitter.com/username" className="hover:text-accent">
        <Twitter className="h-5 w-5" />
      </a>
      <a href="https://linkedin.com/in/username" className="hover:text-accent">
        <Linkedin className="h-5 w-5" />
      </a>
    </div>
  );
}
