import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { SocialLinks } from '@/components/common/social-links';
import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'milinds.xyz',
  description: 'Personal website and blog',
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        "text-foreground"
      )}>
        <BaseLayout>
          {children}
        </BaseLayout>
      </body>
    </html>
  );
}
