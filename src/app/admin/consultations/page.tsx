'use client'

import { useState } from 'react'
import { Search, Eye, Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Select } from '@/components/ui/select'
import { AnimatedSection } from '@/components/common/SectionWrapper'
import type React from 'react'
import type { ConsultationStatus } from '@/types'

const statusConfig: Record<ConsultationStatus, { label: string; variant: 'default' | 'secondary' | 'warning' | 'success' | 'destructive' }> = {
  pending: { label: 'Pending', variant: 'secondary' },
  contacted: { label: 'Contacted', variant: 'warning' },
  processing: { label: 'Processing', variant: 'default' },
  approved: { label: 'Approved', variant: 'success' },
  rejected: { label: 'Rejected', variant: 'destructive' },
}

const SAMPLE_CONSULTATIONS = [
  { id: '1', fullName: 'Alice Johnson', email: 'alice@example.com', phone: '+1234567890', preferredCountry: 'USA', desiredCourse: 'Computer Science', academicQualification: "Bachelor's", intake: 'Fall 2025', message: 'Looking for MS in CS', status: 'pending' as ConsultationStatus, createdAt: '2025-06-10' },
  { id: '2', fullName: 'Bob Williams', email: 'bob@example.com', phone: '+1234567891', preferredCountry: 'UK', desiredCourse: 'Law', academicQualification: "Bachelor's", intake: 'Fall 2025', message: '', status: 'contacted' as ConsultationStatus, createdAt: '2025-06-09' },
  { id: '3', fullName: 'Carol Davis', email: 'carol@example.com', phone: '+1234567892', preferredCountry: 'Canada', desiredCourse: 'Engineering', academicQualification: "Master's", intake: 'Spring 2026', message: 'Need guidance', status: 'processing' as ConsultationStatus, createdAt: '2025-06-08' },
]

export default function ConsultationsPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [selected, setSelected] = useState<string | null>(null)

  const filtered = SAMPLE_CONSULTATIONS.filter((c) => {
    if (search && !c.fullName.toLowerCase().includes(search.toLowerCase()) && !c.email.toLowerCase().includes(search.toLowerCase())) return false
    if (statusFilter && c.status !== statusFilter) return false
    return true
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Consultations</h1>
        <p className="text-muted-foreground">Manage student consultation requests</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search consultations..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <Select
          placeholder="All Status"
          options={[
            { value: 'pending', label: 'Pending' },
            { value: 'contacted', label: 'Contacted' },
            { value: 'processing', label: 'Processing' },
            { value: 'approved', label: 'Approved' },
            { value: 'rejected', label: 'Rejected' },
          ]}
          value={statusFilter}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatusFilter(e.target.value)}
          className="w-full sm:w-40"
        />
      </div>

      <div className="grid gap-4">
        {filtered.map((c, i) => {
          const statusInfo = statusConfig[c.status]
          return (
            <AnimatedSection key={c.id} delay={i * 0.05}>
              <div className="rounded-xl border bg-card p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold">{c.fullName}</h3>
                    <p className="text-sm text-muted-foreground">{c.email} | {c.phone}</p>
                  </div>
                  <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm mb-4">
                  <div><span className="text-muted-foreground">Country:</span> {c.preferredCountry}</div>
                  <div><span className="text-muted-foreground">Course:</span> {c.desiredCourse}</div>
                  <div><span className="text-muted-foreground">Qualification:</span> {c.academicQualification}</div>
                  <div><span className="text-muted-foreground">Intake:</span> {c.intake}</div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Created: {c.createdAt}</span>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => setSelected(selected === c.id ? null : c.id)}>
                      <Eye className="mr-1 h-3 w-3" /> View
                    </Button>
                    <Button variant="ghost" size="sm"><Check className="h-4 w-4 text-green-500" /></Button>
                    <Button variant="ghost" size="sm"><X className="h-4 w-4 text-destructive" /></Button>
                  </div>
                </div>
                {selected === c.id && c.message && (
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-muted-foreground">{c.message}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          )
        })}
      </div>
    </div>
  )
}
