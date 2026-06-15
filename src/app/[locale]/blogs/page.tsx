'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, Search } from 'lucide-react'
import { SectionHeader, AnimatedSection } from '@/components/common/SectionWrapper'
import { Input } from '@/components/ui/input'
import { IMAGES } from '@/constants'
import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/lib/utils'
import { BLOG_CATEGORIES } from '@/constants'

const BLOGS = [
  { id: '1', title: 'Complete Guide to Studying in the USA in 2025', slug: 'guide-studying-usa-2025', excerpt: 'Everything you need to know about applying to US universities.', category: 'Study Abroad', publishedAt: '2025-05-15', readTime: '8 min read', author: 'Dr. Sarah Mitchell', image: '' },
  { id: '2', title: 'Top 10 Scholarships for International Students', slug: 'top-scholarships-international-students', excerpt: 'Discover the most generous scholarships available.', category: 'Scholarships', publishedAt: '2025-05-10', readTime: '6 min read', author: 'James Wilson', image: '' },
  { id: '3', title: 'UK Student Visa Requirements 2025', slug: 'uk-student-visa-guide-2025', excerpt: 'A comprehensive guide to the UK student visa application.', category: 'Visa Guide', publishedAt: '2025-05-05', readTime: '10 min read', author: 'Emily Chen', image: '' },
  { id: '4', title: 'Top 10 Universities for Computer Science', slug: 'top-computer-science-universities', excerpt: 'Explore the best universities for computer science worldwide.', category: 'University Rankings', publishedAt: '2025-04-28', readTime: '7 min read', author: 'Michael Torres', image: '' },
  { id: '5', title: 'Student Life in Canada: A Complete Guide', slug: 'student-life-canada-guide', excerpt: 'What to expect as an international student in Canada.', category: 'Student Life', publishedAt: '2025-04-20', readTime: '9 min read', author: 'Dr. Sarah Mitchell', image: '' },
  { id: '6', title: 'How to Write a Winning Statement of Purpose', slug: 'winning-statement-purpose', excerpt: 'Tips and strategies for crafting an outstanding SOP.', category: 'Career Tips', publishedAt: '2025-04-15', readTime: '5 min read', author: 'James Wilson', image: '' },
]

export default function BlogsPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')

  const filtered = BLOGS.filter((b) => {
    if (search && !b.title.toLowerCase().includes(search.toLowerCase()) && !b.excerpt.toLowerCase().includes(search.toLowerCase())) return false
    if (category && b.category !== category) return false
    return true
  })

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Blog"
            subtitle="Stay informed with the latest study abroad tips, guides, and industry insights"
          />
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <select
              className="flex h-9 w-full sm:w-48 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {BLOG_CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {BLOG_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(category === c ? '' : c)}
                className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                  category === c ? 'bg-primary text-primary-foreground border-primary' : 'hover:bg-accent'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((blog, i) => (
              <AnimatedSection key={blog.id} delay={i * 0.08}>
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
                      <Badge variant="secondary" className="mb-3">{blog.category}</Badge>
                      <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">{blog.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{blog.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{formatDate(blog.publishedAt)}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{blog.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
