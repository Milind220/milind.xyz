'use client';    // This is a client-side file.
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../common/theme-toggle';

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
        <Link 
          href="/" 
          className={cn(
            "font-medium text-foreground hover:text-accent transition-colors",
            "relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full",
            "after:bg-accent after:scale-x-0 after:transition-transform",
            "hover:after:scale-x-100",
            usePathname() === "/" && "after:scale-x-100"
          )}
        >
          Milind Sharma
        </Link>
        <nav className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/about"
            className={cn(
              "text-sm font-medium text-foreground hover:text-accent transition-colors",
              "relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full",
              "after:bg-accent after:scale-x-0 after:transition-transform",
              "hover:after:scale-x-100",
              usePathname() === "/about" && "after:scale-x-100"
            )}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={cn(
              "text-sm font-medium text-foreground hover:text-accent transition-colors",
              "relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full",
              "after:bg-accent after:scale-x-0 after:transition-transform",
              "hover:after:scale-x-100",
              usePathname() === "/projects" && "after:scale-x-100"
            )}
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className={cn(
              "text-sm font-medium text-foreground hover:text-accent transition-colors",
              "relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full",
              "after:bg-accent after:scale-x-0 after:transition-transform",
              "hover:after:scale-x-100",
              usePathname() === "/blog" && "after:scale-x-100"
            )}
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
