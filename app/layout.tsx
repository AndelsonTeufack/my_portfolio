import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

// ─── Constante centrale (un seul endroit à changer) ───────────────────────
const SITE_URL = 'https://andelson-teufack.dev'
const FULL_NAME = 'Andelson Teufack Sontsa'
const JOB_TITLE = 'Full-Stack Developer & IT Solutions Analyst'
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {

  // ── Base URL (DOIT matcher le vrai domaine déployé) ──────────────────────
  metadataBase: new URL(SITE_URL),

  // ── Titres ────────────────────────────────────────────────────────────────
  title: {
    default: `${FULL_NAME} | ${JOB_TITLE}`,
    template: `%s | ${FULL_NAME}`,
  },

  // ── Description : 150-160 chars, mots-clés naturels, géolocalisé ─────────
  description:
    'Andelson Teufack — Développeur Full-Stack & Analyste IT basé à Douala, Cameroun. '
    + 'Expert Spring Boot, React, Flutter, Next.js. '
    + 'Je conçois des applications web et mobiles robustes pour entreprises et startups africaines.',

  // ── Keywords : réduits, ciblés, pertinents (qualité > quantité) ──────────
  keywords: [
    'Andelson Teufack',
    'Teufack Sontsa Andelson',
    'Full-Stack Developer Cameroon',
    'Développeur Full-Stack Douala',
    'Spring Boot React Flutter',
    'Software Engineer Douala Cameroun',
    'IT Solutions Analyst',
    'Next.js Developer Africa',
    'Java Backend Developer',
    'Mobile App Developer Cameroon',
    'Odoo ERP Integration',
    'Portfolio développeur Cameroun',
  ],

  // ── Auteur ────────────────────────────────────────────────────────────────
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  alternates: {
    canonical: SITE_URL,
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    title: `${FULL_NAME} | ${JOB_TITLE}`,
    description:
      'Développeur Full-Stack basé à Douala, Cameroun. '
      + 'Spring Boot · React · Flutter · Next.js · Odoo. '
      + 'Applications web/mobile scalables pour entreprises africaines.',
    url: SITE_URL,
    siteName: `${FULL_NAME} Portfolio`,
    locale: 'fr_CM',        // locale principale
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

  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: `${FULL_NAME} | Full-Stack Developer`,
    description:
      'Développeur Full-Stack, Douala · Spring Boot · React · Flutter · Next.js',
    images: [{ url: OG_IMAGE, alt: `${FULL_NAME} Portfolio` }],
    // creator: '@tonHandleTwitter', // ajoute si tu en as un
  },

  // ── Robots ────────────────────────────────────────────────────────────────
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

  // ── Vérifications propriété site  ──────────────────
  // verification: {
  //   google: 'TON_CODE_GOOGLE_SEARCH_CONSOLE',
  //   yandex: 'TON_CODE_YANDEX',
  // },

  // ── App icons (à adapter ) ───────────────────────────
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },

  // ── Category (aide Google à classifier ton site) ─────────────────────────
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

// ─── Structured Data JSON-LD ─────────────────────────────────────────────────

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: FULL_NAME,
  alternateName: ['Teufack Sontsa Andelson', 'Andelson Sontsa Teufack','Andelson Teufack', 'Andelson Teufack Sontsa'],
  url: SITE_URL,
  image: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/hero.jpg`,
    width: 400,
    height: 400,
  },
  jobTitle: JOB_TITLE,
  description:
    'Développeur Full-Stack et Analyste IT basé à Douala, Cameroun. '
    + 'Spécialisé en Spring Boot, React, Flutter et intégration Odoo ERP.',
  worksFor: {
    '@type': 'Organization',
    name: 'Kes ip',
    url: 'https://www.kes-africa.com/',
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
    'REST API', 'PDF Generation', 'Email Marketing Automation',
  ],
  knowsLanguage: [
    { '@type': 'Language', name: 'French' },
    { '@type': 'Language', name: 'English' },
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Full-Stack Software Developer',
    occupationLocation: {
      '@type': 'City',
      name: 'Douala',
    },
    skills: 'Spring Boot, React, Flutter, Next.js, Java, Python, Odoo',
  },
  sameAs: [
    'https://www.linkedin.com/in/andelson-teufack-97a59b279/',
    'https://github.com/AndelsonTeufack',
  ],
}

// WebSite schema → active la Search Box Google & le Knowledge Panel
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: `${FULL_NAME} Portfolio`,
  description: 'Portfolio professionnel de Andelson Teufack, Développeur Full-Stack à Douala.',
  author: { '@id': `${SITE_URL}/#person` },
  inLanguage: ['fr', 'en'],
  // SearchAction : permet à Google d'afficher une barre de recherche dans les résultats
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/?s={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

// BreadcrumbList → rich results (fil d'Ariane dans Google)
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        {/* Preconnect pour perf + SEO Core Web Vitals */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch pour les ressources externes */}
        <link rel="dns-prefetch" href="//vercel.com" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}

        {/* ── Person Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        {/* ── WebSite Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* ── BreadcrumbList Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}