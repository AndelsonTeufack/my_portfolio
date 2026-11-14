import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Andelson TEUFACK SONTSA - Développeur Full-Stack & Mobile',
    short_name: 'Andelson TEUFACK SONTSA',
    description:
      'Portfolio professionnel de Andelson TEUFACK SONTSA, Développeur Full-Stack & Mobile à Douala, Cameroun. Applications mobiles offline-first, plateformes web, données géospatiales et ERP.',
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
