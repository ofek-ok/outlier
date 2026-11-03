import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#F3F0E9',
};

export const metadata: Metadata = {
  title: siteConfig.meta.titleEn,
  description: siteConfig.meta.descriptionEn,
  keywords: [
    'OUTLIER',
    'Strategic Market Development',
    'Creative Advisory',
    'Market Entry Strategy',
    'Business Process Development',
    'Customer Acquisition',
    'Commercial Strategy',
  ],
  authors: [{ name: siteConfig.brandName }],
  openGraph: {
    title: siteConfig.meta.titleEn,
    description: siteConfig.meta.descriptionEn,
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'he_IL',
    siteName: siteConfig.brandName,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.meta.titleEn,
    description: siteConfig.meta.descriptionEn,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth bg-[#F3F0E9]" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Frank+Ruhl+Libre:wght@400;500;700&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased bg-[#F3F0E9] text-[#252724] min-h-screen">
        {children}
      </body>
    </html>
  );
}
