'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { SectionHeader, AnimatedSection } from '@/components/common/SectionWrapper'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { IMAGES } from '@/constants'
import { formatDate } from '@/lib/utils'

const SAMPLE_BLOGS = [
  { id: '1', title: 'Complete Guide to Studying in the USA in 2025', slug: 'guide-studying-usa-2025', excerpt: 'Everything you need to know about applying to US universities, from standardized tests to visa applications.', category: 'Study Abroad', image: '', publishedAt: '2025-05-15', readTime: '8 min read', author: 'Dr. Sarah Mitchell' },
  { id: '2', title: 'Top 10 Scholarships for International Students', slug: 'top-scholarships-international-students', excerpt: 'Discover the most generous scholarships available for international students across various countries.', category: 'Scholarships', image: '', publishedAt: '2025-05-10', readTime: '6 min read', author: 'James Wilson' },
  { id: '3', title: 'UK Student Visa Requirements 2025: Step-by-Step Guide', slug: 'uk-student-visa-guide-2025', excerpt: 'A comprehensive guide to the UK student visa application process with tips for a successful application.', category: 'Visa Guide', image: '', publishedAt: '2025-05-05', readTime: '10 min read', author: 'Emily Chen' },
]

export function LatestBlogs() {
  const t = useTranslations('blog')

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />
        <div className="grid md:grid-cols-3 gap-6">
          {SAMPLE_BLOGS.map((blog, i) => (
            <AnimatedSection key={blog.id} delay={i * 0.1}>
              <Link href={`/blogs/${blog.slug}`} className="group block h-full">
                <div className="h-full rounded-xl border bg-card overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={IMAGES.blogs.default}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <Badge variant="secondary" className="mb-3">
                      {blog.category}
                    </Badge>
                    <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{blog.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(blog.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {blog.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/blogs">
              {t('viewAll')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
