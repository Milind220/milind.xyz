import { cn } from '@/lib/utils'
import { Header } from '@/components/layout/header'
import { SocialLinks } from '@/components/common/social-links'
import { Footer } from '@/components/layout/footer'

/**
 * Base layout containing header, main content, and social links
 */
export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="container max-w-5xl mx-auto px-4 md:px-6 py-8">
        {children}
      </main>
      <SocialLinks />
      <Footer />
    </>
  )
}
