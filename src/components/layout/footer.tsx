import { cn } from '@/lib/utils'

/**
 * Site footer component
 */
export function Footer() {
  return (
    <footer className={cn(
      "border-t border-border",
      "mt-16 py-8"
    )}>
      <div className={cn(
        "container max-w-5xl mx-auto",
        "px-4 md:px-6",
        "text-sm text-muted-foreground"
      )}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} milinds.xyz</span>
          <nav className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="/contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
