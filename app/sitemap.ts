import { MetadataRoute } from 'next'
import { PROJECTS } from '@/lib/portfolio-data'

const SITE_URL = 'https://andelson-teufack.dev'
const LAST_UPDATED = new Date('2026-11-15T00:00:00Z')

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${SITE_URL}/projets/${project.id}`,
    lastModified: LAST_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  return [
    {
      url: SITE_URL,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: {
        languages: {
          fr: SITE_URL,
          en: `${SITE_URL}/en`,
        },
      },
    },
    {
      url: `${SITE_URL}/en`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          fr: SITE_URL,
          en: `${SITE_URL}/en`,
        },
      },
    },
    ...projectEntries,
    {
      url: `${SITE_URL}/llms.txt`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}