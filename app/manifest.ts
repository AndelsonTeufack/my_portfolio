import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TEUFACK SONTSA Andelson - Full-Stack Developer Portfolio',
    short_name: 'Andelson Teufack',
    description:
      'Portfolio professionnel de TEUFACK SONTSA Andelson, Développeur Full-Stack et Analyste IT à Douala, Cameroun. Spécialiste Spring Boot, React, Flutter, Next.js, Python et Odoo.',
    start_url: '/',
    display: 'standalone',
    background_color: '#030305',
    theme_color: '#030305',
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
