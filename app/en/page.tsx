import type { Metadata } from 'next'
import PortfolioHome from '@/components/PortfolioHome'

const SITE_URL = 'https://andelson-teufack.dev'
const FULL_NAME = 'Andelson TEUFACK SONTSA'
const EN_TITLE = `${FULL_NAME} | Full-Stack & Mobile Developer — Douala, Cameroon`
const EN_DESCRIPTION =
  'Full-Stack & Mobile Developer in Douala, Cameroon. Offline-first mobile apps and web platforms for field engineering: inspections, GIS geospatial workflows, and ERP integrations (Flutter, Next.js, FastAPI, Spring Boot, PostgreSQL/PostGIS).'

export const metadata: Metadata = {
  title: {
    absolute: EN_TITLE,
  },
  description: EN_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: {
      'fr-CM': SITE_URL,
      'fr-FR': SITE_URL,
      fr: SITE_URL,
      'en-US': `${SITE_URL}/en`,
      en: `${SITE_URL}/en`,
      'x-default': SITE_URL,
    },
  },
  openGraph: {
    title: EN_TITLE,
    description: EN_DESCRIPTION,
    url: `${SITE_URL}/en`,
    siteName: `${FULL_NAME} Portfolio`,
    locale: 'en_US',
    alternateLocale: ['fr_CM', 'fr_FR'],
    type: 'profile',
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        secureUrl: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} — Full-Stack & Mobile Developer`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: EN_TITLE,
    description: EN_DESCRIPTION,
    images: [{ url: `${SITE_URL}/opengraph-image`, alt: `${FULL_NAME} Portfolio` }],
  },
}

export default function EnglishHomePage() {
  return <PortfolioHome initialLanguage="en" />
}
