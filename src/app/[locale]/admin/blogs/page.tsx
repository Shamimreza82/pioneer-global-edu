'use client'

import { useState } from 'react'
import { Plus, Search, Edit, Trash2, Calendar, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Select } from '@/components/ui/select'
import { formatDate } from '@/lib/utils'
import { BLOG_CATEGORIES } from '@/constants'
import type React from 'react'

const SAMPLE_BLOGS = [
  { id: '1', title: 'Complete Guide to Studying in the USA in 2025', slug: 'guide-studying-usa-2025', category: 'Study Abroad', author: 'Dr. Sarah Mitchell', publishedAt: '2025-05-15', status: 'published' },
  { id: '2', title: 'Top 10 Scholarships for International Students', slug: 'top-scholarships-international-students', category: 'Scholarships', author: 'James Wilson', publishedAt: '2025-05-10', status: 'published' },
  { id: '3', title: 'UK Student Visa Requirements 2025', slug: 'uk-student-visa-guide-2025', category: 'Visa Guide', author: 'Emily Chen', publishedAt: '2025-05-05', status: 'draft' },
]

export default function AdminBlogsPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')

  const filtered = SAMPLE_BLOGS.filter((b) => {
    if (search && !b.title.toLowerCase().includes(search.toLowerCase())) return false
    if (category && b.category !== category) return false
    return true
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Blog Posts</h1>
          <p className="text-muted-foreground">Manage blog content and SEO</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Post
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search posts..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <Select
          placeholder="All Categories"
          options={BLOG_CATEGORIES.map((c) => ({ value: c, label: c }))}
          value={category}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
          className="w-full sm:w-40"
        />
      </div>

      <div className="rounded-xl border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left p-4 font-medium">Title</th>
                <th className="text-left p-4 font-medium">Category</th>
                <th className="text-left p-4 font-medium">Author</th>
                <th className="text-left p-4 font-medium">Date</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((blog) => (
                <tr key={blog.id} className="border-b hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium max-w-xs truncate">{blog.title}</td>
                  <td className="p-4"><Badge variant="secondary">{blog.category}</Badge></td>
                  <td className="p-4 text-muted-foreground">{blog.author}</td>
                  <td className="p-4 text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {formatDate(blog.publishedAt)}
                    </span>
                  </td>
                  <td className="p-4">
                    <Badge variant={blog.status === 'published' ? 'success' : 'secondary'}>
                      {blog.status}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4 text-destructive" /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
