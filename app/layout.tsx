import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { fontSans, fontDisplay, fontMono } from '@/lib/fonts'
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
      'en-US': CANONICAL_URL,
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
      birthDate: '2003-12-14',
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
        'TypeScript', 'Node.js', 'NestJS', 'Odoo ERP', 'n8n',
        'PostgreSQL', 'PostGIS', 'MySQL', 'Redis', 'Hive', 'Firebase',
        'JWT', 'OAuth2', 'Spring Security', 'RBAC',
        'Cloudflare R2', 'Docker', 'GitHub Actions', 'KoboCollect', 'SIG / GeoJSON',
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
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${CANONICAL_URL}/?s={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qui est Andelson TEUFACK SONTSA ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Andelson TEUFACK SONTSA est Développeur Full-Stack & Mobile basé à Douala, Cameroun. Actuellement chez Kamer Engineering Solution, il est diplômé d’une Licence en génie logiciel à l’IAI-Cameroun (2024), poursuit un Master professionnel en génie logiciel à l’ENSPD et détient la certification Google IT Support.',
          },
        },
        {
          '@type': 'Question',
          name: 'Andelson TEUFACK SONTSA a-t-il une expérience d’enseignement ou de mentorat ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, Andelson TEUFACK SONTSA a été Formateur & Mentor en développement web et mobile à l’IAI (Centre de Douala) de janvier à mai 2025, où il a encadré et mentoré plus de 15 étudiants sur React/JS et Flutter.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quelles sont les compétences techniques d’Andelson Teufack ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Andelson Teufack maîtrise Flutter (Clean Architecture, Offline-First, BluetoothSockets), Java / Spring Boot, Python (FastAPI, Django, Flask), React.js / Next.js, NestJS, PostgreSQL / PostGIS, Redis, Firebase, Hive, la sécurité JWT/OAuth2/RBAC, l’intégration Odoo ERP et Cloudflare R2.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quels projets marquants ont été réalisés par TEUFACK SONTSA Andelson ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Parmi ses réalisations figurent la suite digitale d’inspections industrielles (mobile offline-first + IA Gemini + BluetoothSockets + web collaboratif) et l’ERP interne connecté à Odoo chez Kamer Engineering Solution, les applications MULEMA et Shikaku publiées sur Google Play Store, la plateforme SIG KoboCollect/ESRI et le module de réconciliation financière MomoKash.',
          },
        },
        {
          '@type': 'Question',
          name: 'Comment contacter TEUFACK SONTSA Andelson ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vous pouvez contacter Andelson Teufack par email à teufackandelson123@gmail.com, par téléphone / WhatsApp au +237 690 819 035, ou via son profil LinkedIn.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL_URL}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: CANONICAL_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Profil',
          item: `${CANONICAL_URL}/#about`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Expériences',
          item: `${CANONICAL_URL}/#experience`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Projets',
          item: `${CANONICAL_URL}/#projects`,
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Compétences',
          item: `${CANONICAL_URL}/#skills`,
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Contact',
          item: `${CANONICAL_URL}/#contact`,
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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