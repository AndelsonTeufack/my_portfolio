import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { fontSans, fontDisplay, fontMono } from '@/lib/fonts'
import './globals.css'

const SITE_URL = 'https://andelson-teufack.dev'
const FULL_NAME = 'Andelson Teufack Sontsa'
const JOB_TITLE = 'Full-Stack Developer & IT Solutions Analyst'
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${FULL_NAME} | ${JOB_TITLE}`,
    template: `%s | ${FULL_NAME}`,
  },
  description:
    'Andelson Teufack — Développeur Full-Stack & Analyste IT basé à Douala, Cameroun. '
    + 'Expert Spring Boot, React, Flutter, Next.js, Python et intégration Odoo. '
    + 'Je conçois des applications web et mobiles robustes pour entreprises et startups.',
  keywords: [
    'Andelson Teufack',
    'Teufack Sontsa Andelson',
    'Full-Stack Developer Cameroon',
    'Développeur Full-Stack Douala',
    'Spring Boot React Flutter Next.js',
    'Software Engineer Douala Cameroun',
    'IT Solutions Analyst Africa',
    'Java Backend Developer',
    'Mobile App Developer Cameroon',
    'Odoo ERP Integration',
    'Portfolio développeur Cameroun',
  ],
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  alternates: {
    canonical: SITE_URL,
    languages: {
      'fr-CM': SITE_URL,
      'en-US': SITE_URL,
    },
  },
  openGraph: {
    title: `${FULL_NAME} | ${JOB_TITLE}`,
    description:
      'Développeur Full-Stack basé à Douala, Cameroun. '
      + 'Spring Boot · React · Flutter · Next.js · Python · Odoo. '
      + 'Applications web & mobile scalables pour entreprises.',
    url: SITE_URL,
    siteName: `${FULL_NAME} Portfolio`,
    locale: 'fr_CM',
    alternateLocale: 'en_US',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        secureUrl: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} — Full-Stack Developer Portfolio`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${FULL_NAME} | Full-Stack Developer`,
    description:
      'Développeur Full-Stack, Douala · Spring Boot · React · Flutter · Next.js',
    images: [{ url: OG_IMAGE, alt: `${FULL_NAME} Portfolio` }],
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
    icon: '/favicon.ico',
    shortcut: '/apple-icon.png',
    apple: '/apple-icon.png',
  },
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#030305' },
    { media: '(prefers-color-scheme: dark)', color: '#030305' },
  ],
  width: 'device-width',
  initialScale: 1,
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: FULL_NAME,
  alternateName: ['Teufack Sontsa Andelson', 'Andelson Sontsa Teufack', 'Andelson Teufack'],
  url: SITE_URL,
  image: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/hero.jpg`,
    width: 400,
    height: 400,
  },
  jobTitle: JOB_TITLE,
  description:
    'Développeur Full-Stack et Analyste IT basé à Douala, Cameroun. Spécialisé en Spring Boot, React, Flutter et intégration Odoo ERP.',
  worksFor: {
    '@type': 'Organization',
    name: 'KES Inspection & Project',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Douala',
    addressRegion: 'Littoral',
    addressCountry: 'CM',
  },
  knowsAbout: [
    'Java', 'Spring Boot', 'React', 'Next.js',
    'Flutter', 'Python', 'JavaScript', 'TypeScript',
    'Odoo', 'ERP Integration', 'Mobile Development',
    'REST API', 'PDF Generation', 'System Architecture',
  ],
  sameAs: [
    'https://www.linkedin.com/in/andelson-teufack-97a59b279/',
    'https://github.com/AndelsonTeufack',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: `${FULL_NAME} Portfolio`,
  description: 'Portfolio professionnel de Andelson Teufack, Développeur Full-Stack à Douala.',
  author: { '@id': `${SITE_URL}/#person` },
  inLanguage: ['fr', 'en'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable} font-sans antialiased bg-slate-950 text-slate-100`}
      >
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}