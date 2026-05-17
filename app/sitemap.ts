import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.andelson-teufack.dev',
      lastModified: new Date(),
    },
  ]
}