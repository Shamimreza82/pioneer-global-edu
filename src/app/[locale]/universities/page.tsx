'use client'

import { useState } from 'react'
import type React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, MapPin, ArrowRight } from 'lucide-react'
import { SectionHeader, AnimatedSection } from '@/components/common/SectionWrapper'
import { Input } from '@/components/ui/input'
import { IMAGES } from '@/constants'
import { Select } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { CardSkeleton } from '@/components/common/LoadingSkeleton'
import { EmptyState } from '@/components/common/EmptyState'
import { COUNTRIES } from '@/constants'

const SAMPLE_UNIVERSITIES = [
  { id: '1', name: 'Stanford University', country: 'USA', ranking: 3, location: 'Stanford, California', programs: ['Computer Science', 'Engineering', 'Business'], tuitionFeeRange: '$55,000 - $60,000', image: '', logo: '' },
  { id: '2', name: 'University of Oxford', country: 'UK', ranking: 1, location: 'Oxford, England', programs: ['Law', 'Medicine', 'Economics'], tuitionFeeRange: '£28,000 - £45,000', image: '', logo: '' },
  { id: '3', name: 'University of Toronto', country: 'Canada', ranking: 18, location: 'Toronto, Ontario', programs: ['Engineering', 'Business', 'Arts'], tuitionFeeRange: 'CAD 40,000 - 55,000', image: '', logo: '' },
  { id: '4', name: 'University of Melbourne', country: 'Australia', ranking: 27, location: 'Melbourne, Victoria', programs: ['Medicine', 'Law', 'Engineering'], tuitionFeeRange: 'AUD 35,000 - 50,000', image: '', logo: '' },
  { id: '5', name: 'Technical University of Munich', country: 'Germany', ranking: 49, location: 'Munich, Bavaria', programs: ['Engineering', 'Computer Science', 'Physics'], tuitionFeeRange: '€0 - €3,000', image: '', logo: '' },
]

export default function UniversitiesPage() {
  const [search, setSearch] = useState('')
  const [country, setCountry] = useState('')
  const [loading] = useState(false)

  const filtered = SAMPLE_UNIVERSITIES.filter((u) => {
    if (search && !u.name.toLowerCase().includes(search.toLowerCase())) return false
    if (country && u.country !== country) return false
    return true
  })

  return (
    <>
      <section className="py-16 md:py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Universities"
            subtitle="Explore our partner universities and find the perfect fit for your education"
          />
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search universities..."
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
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <EmptyState
              title="No universities found"
              description="Try adjusting your search or filter criteria."
            />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((uni, i) => (
                <AnimatedSection key={uni.id} delay={i * 0.08}>
                  <Link href={`/universities/${uni.id}`} className="group block h-full">
                    <div className="h-full rounded-xl border bg-card overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="aspect-[16/9] relative overflow-hidden">
                        <Image
                          src={IMAGES.universities.default}
                          alt={uni.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{uni.name}</h3>
                          <Badge variant="secondary">#{uni.ranking}</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <MapPin className="h-3 w-3" />
                          <span>{uni.location}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {uni.programs.slice(0, 3).map((p) => (
                            <span key={p} className="text-xs bg-muted px-2 py-1 rounded-full">{p}</span>
                          ))}
                        </div>
                        <div className="flex justify-between items-center border-t pt-3 text-sm">
                          <span className="text-muted-foreground">{uni.tuitionFeeRange}</span>
                          <span className="flex items-center gap-1 text-primary font-medium">
                            Details <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
