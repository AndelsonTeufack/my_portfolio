import type { Metadata, Viewport } from 'next'
import {  Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://andelson-teufack-portfolio.vercel.app'),

  title: {
    default: 'Andelson Teufack | Full-Stack Developer & IT Solutions Analyst',
    template: '%s | Andelson Teufack',
  },

  description:
    'Professional portfolio of Andelson Teufack, Full-Stack Developer and IT Solutions Analyst from Cameroon. Specialized in Spring Boot, React, Flutter, Java, and scalable enterprise applications.',

  keywords: [
    'Andelson Teufack',
    'Full-Stack Developer Cameroon',
    'Spring Boot Developer',
    'React Developer',
    'Flutter Developer',
    'Java Backend Developer',
    'Software Engineer Cameroon',
    'IT Solutions Analyst',
  ],

  authors: [
    {
      name: 'Andelson Teufack',
      url: 'https://andelson-teufack-portfolio.vercel.app',
    },
  ],

  creator: 'Andelson Teufack',
  publisher: 'Andelson Teufack',

  openGraph: {
    title: 'Andelson Teufack | Full-Stack Developer',
    description:
      'Building scalable and elegant software solutions using Spring Boot, React, and modern technologies.',
    url: 'https://andelson-teufack-portfolio.vercel.app',
    siteName: 'Andelson Teufack Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Andelson Teufack Portfolio Preview',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Andelson Teufack | Full-Stack Developer',
    description:
      'Full-Stack Developer specializing in modern web and enterprise applications.',
    images: ['/og-image.png'],
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
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${_inter.variable} font-sans antialiased`}>
        {children}

        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Andelson Teufack',
              url: 'https://andelson-teufack-portfolio.vercel.app',
              jobTitle: 'Full-Stack Developer',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'CM',
              },
              sameAs: [
                'https://www.linkedin.com/in/andelson-teufack-97a59b279/',
                'https://github.com/AndelsonTeufack',
              ],
            }),
          }}
        />

        <Analytics />
      </body>
    </html>
  )
}