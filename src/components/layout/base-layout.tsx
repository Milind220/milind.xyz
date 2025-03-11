import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { SocialLinks } from '@/components/common/social-links';
import { ThemeProvider } from '@/lib/context/theme-provider';

/**
 * Base layout containing header, main content, and social links
 */
export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Header />
      <main className={cn(
        "container max-w-5xl mx-auto",
        "py-8 px-4 md:px-6 md:py-12"
      )}>
        {children}
      </main>
      <SocialLinks />
    </ThemeProvider>
  )
}
