import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { fontSans, fontDisplay, fontMono } from '@/lib/fonts'
import './globals.css'

const SITE_URL = 'https://andelson-teufack.dev'
const CANONICAL_URL = 'https://andelson-teufack.dev'
const FULL_NAME = 'TEUFACK SONTSA Andelson'
const JOB_TITLE = 'Développeur Full-Stack & Analyste IT'
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_URL),
  title: {
    default: `${FULL_NAME} | ${JOB_TITLE} — Douala, Cameroun`,
    template: `%s | ${FULL_NAME}`,
  },
  description:
    'TEUFACK SONTSA Andelson (Andelson Teufack) — Développeur Full-Stack & Analyste IT basé à Douala, Cameroun. '
    + 'Expert Spring Boot, Java, Python, React.js, Next.js, Flutter & Odoo ERP. '
    + 'Création d’applications web, mobiles & APIs sécurisées haute performance.',
  keywords: [
    'TEUFACK SONTSA Andelson',
    'Teufack Sontsa Andelson',
    'Andelson Teufack',
    'Teufack Andelson',
    'Anderson Teufack',
    'Full-Stack Developer Cameroon',
    'Développeur Full-Stack Douala',
    'Ingénieur Logiciel Cameroun',
    'Spring Boot React Flutter',
    'Next.js Developer Africa',
    'Développeur Python Django FastAPI',
    'Odoo ERP Integration Cameroon',
    'Java Backend Engineer Douala',
    'Mobile App Developer Flutter',
    'Analyste IT Douala',
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
    title: `${FULL_NAME} | ${JOB_TITLE} — Douala`,
    description:
      'TEUFACK SONTSA Andelson — Développeur Full-Stack & Analyste IT à Douala. '
      + 'Spring Boot · React · Flutter · Next.js · Python · Odoo ERP. '
      + 'Ingénierie d’applications web & mobiles scalables.',
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
        alt: `${FULL_NAME} — Full-Stack Developer & IT Analyst Portfolio`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${FULL_NAME} | Full-Stack Developer`,
    description:
      'TEUFACK SONTSA Andelson — Développeur Full-Stack, Douala · Spring Boot · React · Flutter · Next.js',
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
    { media: '(prefers-color-scheme: light)', color: '#030305' },
    { media: '(prefers-color-scheme: dark)', color: '#030305' },
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
        caption: `${FULL_NAME} — Développeur Full-Stack & Analyste IT à Douala`,
      },
      jobTitle: JOB_TITLE,
      description:
        'TEUFACK SONTSA Andelson est un Développeur Full-Stack et Analyste IT basé à Douala, Cameroun. Spécialiste Spring Boot, React, Flutter, Next.js, Python et Odoo ERP.',
      email: 'mailto:teufackandelson123@gmail.com',
      telephone: ['+237690819035', '+237651489468'],
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
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Institut Africain d\'Informatique (IAI)',
        url: 'https://www.iai-cameroon.org/',
      },
      worksFor: {
        '@type': 'Organization',
        name: 'KES IP',
        url: 'https://www.kes-africa.com/',
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
          name: 'Licence en Génie Logiciel',
          credentialCategory: 'Degree',
          recognizedBy: {
            '@type': 'EducationalOrganization',
            name: 'Institut Africain d\'Informatique (IAI)',
          },
        },
      ],
      knowsAbout: [
        'Java', 'Spring Boot', 'React.js', 'Next.js',
        'Flutter', 'Python', 'Django', 'FastAPI', 'Flask',
        'Node.js', 'NestJS', 'TypeScript', 'JavaScript',
        'Dart', 'C/C++', 'Odoo ERP', 'PostgreSQL', 'MySQL',
        'MongoDB', 'Redis', 'Firebase', 'APIs REST',
        'Microservices', 'System Design', 'KoboCollect',
        'SIG / GeoJSON', 'Docker', 'Git', 'Agile / Scrum',
        'Technical Instruction', 'Pedagogy & Mentorship', 'Software Engineering Education',
      ],
      knowsLanguage: [
        { '@type': 'Language', name: 'French' },
        { '@type': 'Language', name: 'English' },
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
      name: `${FULL_NAME} — Official Professional Portfolio Page`,
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
      description: `Site web et portfolio officiel de ${FULL_NAME}, Développeur Full-Stack à Douala.`,
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
          name: 'Qui est TEUFACK SONTSA Andelson ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TEUFACK SONTSA Andelson (aussi connu sous le nom d\'Andelson Teufack) est un Développeur Full-Stack et Analyste IT basé à Douala, Cameroun. Diplômé d\'une Licence en Génie Logiciel à l\'IAI et certifié Google IT Support, il conçoit des applications web, mobiles et architectures backend robustes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Andelson Teufack a-t-il une expérience d\'enseignement ou de formation ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, TEUFACK SONTSA Andelson a été Formateur & Mentor en Développement Web (React.js, JS) et Mobile (Flutter, Dart) à l\'Institut Africain d\'Informatique (IAI) de janvier à mai 2025, où il a encadré et formé plus de 100 étudiants en génie logiciel.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quelles sont les compétences techniques d\'Andelson Teufack ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Andelson Teufack maîtrise Spring Boot, Java, Python (Django, FastAPI, Flask), React.js, Next.js, Flutter, Node.js, NestJS, PostgreSQL, MySQL, MongoDB, Redis, Firebase ainsi que l\'intégration de systèmes Odoo ERP.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quels projets ont été réalisés par TEUFACK SONTSA Andelson ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Parmi ses projets figurent MomoKash (application mobile Flutter), un Système de Gestion RH Spring Boot/MongoDB, TaillorPro (application mobile Flutter/Firebase), un Système de Suivi de Maintenance Python, l\'application MULEMA, et la plateforme Laoshi Consulting.',
          },
        },
        {
          '@type': 'Question',
          name: 'Comment contacter TEUFACK SONTSA Andelson ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vous pouvez contacter Andelson Teufack par email à teufackandelson123@gmail.com, par téléphone / WhatsApp au +237 690 819 035 ou +237 651 489 468, ou via son profil LinkedIn.',
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
          name: 'À Propos',
          item: `${CANONICAL_URL}/#about`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Compétences',
          item: `${CANONICAL_URL}/#skills`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Expériences',
          item: `${CANONICAL_URL}/#experience`,
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Projets',
          item: `${CANONICAL_URL}/#projects`,
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
        className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable} font-sans antialiased bg-slate-950 text-slate-100`}
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