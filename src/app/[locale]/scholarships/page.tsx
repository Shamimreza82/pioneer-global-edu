'use client'

import { useState } from 'react'
import { Award, Calendar, DollarSign, Check, Search } from 'lucide-react'
import { SectionHeader, AnimatedSection } from '@/components/common/SectionWrapper'
import { Input } from '@/components/ui/input'
import type React from 'react'
import { Select } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { COUNTRIES } from '@/constants'

const SCHOLARSHIPS = [
  { id: '1', name: 'Fulbright Scholarship', country: 'USA', university: 'Multiple Universities', amount: 'Full Tuition + Living', deadline: '2025-10-01', eligibility: ['Outstanding academic record', 'Leadership experience', 'English proficiency'], description: 'Prestigious international exchange program offering full funding for graduate study.' },
  { id: '2', name: 'Chevening Scholarship', country: 'UK', university: 'UK Universities', amount: 'Full Tuition + Living', deadline: '2025-11-05', eligibility: ['Minimum 2 years work experience', 'Strong academic background', 'Leadership potential'], description: 'UK government scholarship for outstanding professionals to study in the UK.' },
  { id: '3', name: 'DAAD Scholarship', country: 'Germany', university: 'German Universities', amount: '€992/month + Benefits', deadline: '2025-08-15', eligibility: ['Bachelor\'s degree', 'Work experience', 'German language (preferred)'], description: 'German Academic Exchange Service funding for international students.' },
  { id: '4', name: 'Vanier Canada Graduate Scholarship', country: 'Canada', university: 'Canadian Universities', amount: 'CAD 50,000/year', deadline: '2025-09-15', eligibility: ['PhD applicants', 'Research excellence', 'Leadership skills'], description: 'Prestigious scholarship for doctoral students in Canada.' },
  { id: '5', name: 'Australia Awards Scholarship', country: 'Australia', university: 'Australian Universities', amount: 'Full Tuition + Living', deadline: '2025-04-30', eligibility: ['Academic excellence', 'Development impact', 'English proficiency'], description: 'Australian government scholarship for study and research in Australia.' },
  { id: '6', name: 'Erasmus Mundus', country: 'Europe', university: 'European Universities', amount: 'Full Tuition + Living', deadline: '2025-02-15', eligibility: ['Bachelor\'s degree', 'Academic excellence', 'Motivation'], description: 'EU-funded scholarship for joint master\'s programs across Europe.' },
]

export default function ScholarshipsPage() {
  const [search, setSearch] = useState('')
  const [country, setCountry] = useState('')

  const filtered = SCHOLARSHIPS.filter((s) => {
    if (search && !s.name.toLowerCase().includes(search.toLowerCase()) && !s.description.toLowerCase().includes(search.toLowerCase())) return false
    if (country && s.country !== country) return false
    return true
  })

  return (
    <>
      <section className="py-16 md:py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Scholarships"
            subtitle="Discover funding opportunities to make your education abroad more affordable"
          />
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search scholarships..."
                className="pl-9"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Select
              placeholder="All Countries"
              options={COUNTRIES.map((c) => ({ value: c.name, label: c.name }))}
              value={country}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCountry(e.target.value)}
              className="w-full sm:w-48"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((s, i) => (
              <AnimatedSection key={s.id} delay={i * 0.08}>
                <div className="rounded-xl border bg-card p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{s.name}</h3>
                      <p className="text-sm text-muted-foreground">{s.university}</p>
                    </div>
                    <Badge variant="secondary">{s.country}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{s.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <span>{s.amount}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>Deadline: {s.deadline}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Eligibility:</p>
                    <div className="space-y-1">
                      {s.eligibility.map((e) => (
                        <div key={e} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                          <span>{e}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
