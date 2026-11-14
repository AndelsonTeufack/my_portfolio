import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TEUFACK SONTSA Andelson — Ingénieur des Travaux Informatiques & Développeur Full-Stack',
    short_name: 'Andelson Teufack',
    description:
      'Portfolio professionnel de TEUFACK SONTSA Andelson, Ingénieur des Travaux Informatiques et Développeur Full-Stack & Mobile à Douala, Cameroun. Spécialiste Flutter Offline-First, Spring Boot, Python (FastAPI/Django), React/Next.js et Odoo ERP.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090a0f',
    theme_color: '#090a0f',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
