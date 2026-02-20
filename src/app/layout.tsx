import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartSidebar from '@/components/layout/CartSidebar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter-var',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-var',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#E32402',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://topflightboost.com'),
  title: {
    default: 'Top Flight Boost | Feel Great All Day',
    template: '%s | Top Flight Boost',
  },
  description:
    'Premium kava-based liquid shots for focus, calm energy, and mental clarity. 1,800mg per bottle. Up to 8 hours of effects. No jitters. No crash.',
  keywords: [
    'kava shot',
    'kava drink',
    'focus supplement',
    'kava boost',
    'mental clarity supplement',
    'nootropic shot',
    'energy shot kava',
    'kava for focus',
    'natural energy drink',
    'top flight boost',
    'top flight gold',
    'premium kava shot',
  ],
  authors: [{ name: 'Top Flight Boost', url: 'https://topflightboost.com' }],
  creator: 'Top Flight Boost',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://topflightboost.com',
    siteName: 'Top Flight Boost',
    title: 'Top Flight Boost | Feel Great All Day',
    description:
      'Premium kava-based liquid shots for focus, calm energy, and mental clarity. 1,800mg per bottle. Up to 8 hours of effects.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Top Flight Boost — Feel Great All Day',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Flight Boost | Feel Great All Day',
    description: 'Premium kava shots for focus, mood, and calm energy. Up to 8 hours. No crash.',
    images: ['/images/og-image.jpg'],
    creator: '@topflightboost',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo/favicon.ico',
    shortcut: '/logo/favicon-16x16.png',
    apple: '/logo/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Top Flight Boost',
  url: 'https://topflightboost.com',
  logo: 'https://topflightboost.com/logo/logo.png',
  sameAs: [
    'https://instagram.com/topflightboost',
    'https://facebook.com/topflightboost',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@topflightboost.com',
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Top Flight Boost',
  url: 'https://topflightboost.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-inter antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-white focus:font-semibold"
        >
          Skip to content
        </a>
        <Header />
        <CartSidebar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
