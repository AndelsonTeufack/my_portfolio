import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { fontSans, fontDisplay, fontMono } from '@/lib/fonts'
import { PROJECTS } from '@/lib/portfolio-data'
import './globals.css'

const SITE_URL = 'https://andelson-teufack.dev'
const CANONICAL_URL = 'https://andelson-teufack.dev'
const FULL_NAME = 'Andelson TEUFACK SONTSA'
const JOB_TITLE = 'Développeur Full-Stack & Mobile'
const OG_IMAGE = `${SITE_URL}/opengraph-image`

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_URL),
  title: {
    default: `${FULL_NAME} | ${JOB_TITLE} - Douala, Cameroun`,
    template: `%s | ${FULL_NAME}`,
  },
  description:
    'Andelson TEUFACK SONTSA - Développeur Full-Stack & Mobile à Douala, Cameroun. '
    + 'Applications mobiles offline-first et plateformes web pour le terrain : inspections, données géospatiales et ERP (Flutter, Next.js, FastAPI, PostgreSQL/PostGIS).',
  keywords: [
    'TEUFACK SONTSA Andelson',
    'Teufack Sontsa Andelson',
    'Andelson Teufack',
    'Teufack Andelson',
    'Ingénieur des Travaux Informatiques Douala',
    'Full-Stack Developer Cameroon',
    'Développeur Full-Stack Douala',
    'Développeur Flutter Offline-First',
    'Spring Boot React Flutter',
    'Next.js Developer Africa',
    'Développeur Python Django FastAPI',
    'Odoo ERP Integration Cameroon',
    'Kamer Engineering Solution',
    'ENSPD Douala Génie Logiciel',
    'PostGIS KoboCollect Cameroun',
    'Portfolio développeur Cameroun',
  ],
  authors: [{ name: FULL_NAME, url: CANONICAL_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      'fr-CM': CANONICAL_URL,
      'fr-FR': CANONICAL_URL,
      fr: CANONICAL_URL,
      'en-US': `${CANONICAL_URL}/en`,
      en: `${CANONICAL_URL}/en`,
      'x-default': CANONICAL_URL,
    },
  },
  openGraph: {
    title: `${FULL_NAME} | ${JOB_TITLE} - Douala`,
    description:
      'Andelson TEUFACK SONTSA - Développeur Full-Stack & Mobile à Douala. '
      + 'Flutter · Next.js · FastAPI · PostgreSQL/PostGIS · Odoo ERP · SIG.',
    url: CANONICAL_URL,
    siteName: `${FULL_NAME} Portfolio`,
    locale: 'fr_CM',
    alternateLocale: ['fr_FR', 'en_US'],
    type: 'profile',
    images: [
      {
        url: OG_IMAGE,
        secureUrl: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} - ${JOB_TITLE}`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${FULL_NAME} | ${JOB_TITLE}`,
    description:
      'Andelson TEUFACK SONTSA - Douala · Flutter · Next.js · FastAPI · PostgreSQL/PostGIS · Odoo ERP',
    images: [{ url: OG_IMAGE, alt: `${FULL_NAME} Portfolio` }],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
  other: {
    'geo.region': 'CM-LT',
    'geo.placename': 'Douala',
    'geo.position': '4.0511;9.7679',
    'ICBM': '4.0511, 9.7679',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#090a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
}

// Master Schema.org Graph for Google Knowledge Panel, Bing Entity & AI Search Engines
const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${CANONICAL_URL}/#person`,
      name: FULL_NAME,
      givenName: 'Andelson',
      familyName: 'TEUFACK SONTSA',
      alternateName: [
        'Teufack Sontsa Andelson',
        'Andelson Sontsa Teufack',
        'Andelson Teufack',
        'Teufack Andelson',
        'Anderson Teufack',
        'Teufac Andelson',
      ],
      url: CANONICAL_URL,
      image: {
        '@type': 'ImageObject',
        url: `${CANONICAL_URL}/hero.jpg`,
        caption: `${FULL_NAME} - ${JOB_TITLE}`,
      },
      jobTitle: JOB_TITLE,
      description:
        'Andelson TEUFACK SONTSA est Développeur Full-Stack & Mobile basé à Douala, Cameroun. Il conçoit des applications mobiles offline-first et des plateformes web pour le terrain (inspections, données géospatiales, ERP) avec Flutter, Next.js, FastAPI, Spring Boot et PostgreSQL/PostGIS.',
      email: 'mailto:teufackandelson123@gmail.com',
      telephone: '+237690819035',
      birthDate: '2002-12-14',
      gender: 'Male',
      nationality: {
        '@type': 'Country',
        name: 'Cameroon',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Douala',
        addressRegion: 'Littoral',
        addressCountry: 'CM',
      },
      alumniOf: [
        {
          '@type': 'EducationalOrganization',
          name: 'ENSPD (École Nationale Supérieure Polytechnique de Douala)',
        },
        {
          '@type': 'EducationalOrganization',
          name: 'Institut Africain d’Informatique (IAI-Cameroun)',
          url: 'https://www.iai-cameroon.org/',
        },
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Kamer Engineering Solution',
      },
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Google IT Support Professional Certificate',
          credentialCategory: 'Professional Certificate',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Google',
          },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Licence en Génie Logiciel (2024)',
          credentialCategory: 'Degree',
          recognizedBy: {
            '@type': 'EducationalOrganization',
            name: 'Institut Africain d’Informatique (IAI-Cameroun)',
          },
        },
      ],
      knowsAbout: [
        'Java', 'Spring Boot', 'Python', 'FastAPI', 'Django', 'Flask',
        'Flutter', 'Offline-First Mobile Architecture', 'Android (Java, Kotlin)',
        'BluetoothSockets', 'Gemini LLM API', 'React.js', 'Next.js',
        'TypeScript', 'Node.js', 'Express', 'Odoo ERP', 'n8n',
        'PostgreSQL', 'PostGIS', 'Systèmes d’Information Géographique (SIG)',
        'MySQL', 'Redis', 'Hive', 'Firebase',
        'JWT', 'OAuth2', 'Spring Security', 'RBAC',
        'Cloudflare R2', 'Docker', 'GitHub Actions', 'KoboCollect', 'GeoJSON',
      ],
      knowsLanguage: [
        { '@type': 'Language', name: 'French' },
        { '@type': 'Language', name: 'English' },
        { '@type': 'Language', name: 'Yemba' },
      ],
      sameAs: [
        'https://www.linkedin.com/in/andelson-teufack-97a59b279/',
        'https://github.com/AndelsonTeufack',
      ],
    },
    {
      '@type': 'ProfilePage',
      '@id': `${CANONICAL_URL}/#profilepage`,
      url: CANONICAL_URL,
      name: `${FULL_NAME} - Official Professional Portfolio Page`,
      isPartOf: { '@id': `${CANONICAL_URL}/#website` },
      primaryImageOfPage: { '@type': 'ImageObject', url: `${CANONICAL_URL}/hero.jpg` },
      mainEntity: { '@id': `${CANONICAL_URL}/#person` },
      inLanguage: ['fr', 'en'],
    },
    {
      '@type': 'WebSite',
      '@id': `${CANONICAL_URL}/#website`,
      url: CANONICAL_URL,
      name: `${FULL_NAME} Portfolio`,
      description: `Site web et portfolio officiel de ${FULL_NAME}, Ingénieur des Travaux Informatiques et Développeur Full-Stack & Mobile à Douala.`,
      publisher: { '@id': `${CANONICAL_URL}/#person` },
      inLanguage: ['fr', 'en'],
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL_URL}/#projects`,
      name: `Projets et études de cas — ${FULL_NAME}`,
      numberOfItems: PROJECTS.length,
      itemListElement: PROJECTS.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${CANONICAL_URL}/projets/${project.id}`,
        item: {
          '@type': 'CreativeWork',
          '@id': `${CANONICAL_URL}/projets/${project.id}/#project`,
          url: `${CANONICAL_URL}/projets/${project.id}`,
          name: project.title.fr,
          description: project.summary.fr,
          creator: { '@id': `${CANONICAL_URL}/#person` },
          keywords: project.tags.join(', '),
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL_URL}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil (FR)',
          item: CANONICAL_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'English Portfolio (EN)',
          item: `${CANONICAL_URL}/en`,
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <head>
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="Profil & Projets pour systèmes IA (LLMs)"
        />
        <link rel="dns-prefetch" href="//vercel.com" />
      </head>
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}

        {/* Master JSON-LD Schema Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}