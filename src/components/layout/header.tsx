import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className={cn(
      "sticky top-0 z-50 bg-background/95 backdrop-blur",
      "border-b border-border",
      "w-full"
    )}>
      <div className={cn(
        "container max-w-5xl mx-auto",
        "h-16 flex items-center justify-between",
        "px-4 md:px-6"
      )}>
        <Link href="/" className="font-medium text-foreground hover:text-accent transition-colors">
          Milind Sharma
        </Link>
        <nav className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/about"
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
