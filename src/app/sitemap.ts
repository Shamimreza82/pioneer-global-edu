import type { MetadataRoute } from 'next'
import { SITE_CONFIG, COUNTRIES, SERVICES } from '@/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: SITE_CONFIG.url, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${SITE_CONFIG.url}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_CONFIG.url}/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${SITE_CONFIG.url}/destinations`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${SITE_CONFIG.url}/universities`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${SITE_CONFIG.url}/scholarships`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${SITE_CONFIG.url}/blogs`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${SITE_CONFIG.url}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${SITE_CONFIG.url}/consultation`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
  ]

  const servicePages = SERVICES.map((service) => ({
    url: `${SITE_CONFIG.url}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const destinationPages = COUNTRIES.map((country) => ({
    url: `${SITE_CONFIG.url}/destinations/${country.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...servicePages, ...destinationPages]
}
