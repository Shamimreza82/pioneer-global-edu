'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ConsultationForm } from '@/components/forms/ConsultationForm'
import { formatDate } from '@/lib/utils'
import { notFound } from 'next/navigation'

const BLOGS = [
  { id: '1', title: 'Complete Guide to Studying in the USA in 2025', slug: 'guide-studying-usa-2025', content: '<p>Studying in the USA offers world-class education and diverse opportunities. This comprehensive guide covers everything from choosing the right university to securing your student visa.</p><h2>Why Study in the USA?</h2><p>The United States is home to many of the world\'s top universities, offering cutting-edge research facilities and a flexible education system.</p><h2>Application Process</h2><p>The application process typically involves standardized tests (SAT/ACT/GRE/GMAT), transcripts, letters of recommendation, and a statement of purpose.</p><h2>Visa Requirements</h2><p>The F-1 student visa requires proof of acceptance, financial capability, and intent to return home after studies.</p>', category: 'Study Abroad', publishedAt: '2025-05-15', readTime: '8 min read', author: 'Dr. Sarah Mitchell', tags: ['USA', 'Study Abroad', 'Guide'], image: '' },
  { id: '2', title: 'Top 10 Scholarships for International Students', slug: 'top-scholarships-international-students', content: '<p>Scholarships can significantly reduce the financial burden of studying abroad. Here are the top 10 scholarships every international student should know about.</p>', category: 'Scholarships', publishedAt: '2025-05-10', readTime: '6 min read', author: 'James Wilson', tags: ['Scholarships', 'Funding', 'International Students'], image: '' },
  { id: '3', title: 'UK Student Visa Requirements 2025', slug: 'uk-student-visa-guide-2025', content: '<p>The UK Student Visa (formerly Tier 4) requires careful preparation. This guide walks you through each step of the application process.</p>', category: 'Visa Guide', publishedAt: '2025-05-05', readTime: '10 min read', author: 'Emily Chen', tags: ['UK', 'Visa', 'Guide'], image: '' },
]

export default function BlogDetailPage() {
  const params = useParams()
  const blog = BLOGS.find((b) => b.slug === params.slug)
  if (!blog) notFound()

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/blogs"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog</Link>
          </Button>
          <Badge variant="secondary" className="mb-4">{blog.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">{blog.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><User className="h-4 w-4" /> {blog.author}</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {formatDate(blog.publishedAt)}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {blog.readTime}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {blog.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-full">
                <Tag className="h-3 w-3" /> {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
            <div>
              <div className="sticky top-24">
                <ConsultationForm
                  title="Need Guidance?"
                  subtitle="Our experts can help you with your study abroad plans."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
