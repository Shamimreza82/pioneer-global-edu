'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeader, AnimatedSection } from '@/components/common/SectionWrapper'
import { COUNTRIES } from '@/constants'

export default function DestinationsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Study Destinations"
            subtitle="Explore top study destinations and find the perfect fit for your academic journey"
          />
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNTRIES.map((country, i) => (
              <AnimatedSection key={country.id} delay={i * 0.08}>
                <Link href={`/destinations/${country.id}`} className="group block h-full">
                  <div className="h-full rounded-xl border bg-card overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <span className="text-6xl">{country.flag}</span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{country.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{country.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {country.benefits.slice(0, 3).map((b) => (
                          <span key={b} className="text-xs bg-muted px-2 py-1 rounded-full">{b}</span>
                        ))}
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground border-t pt-3">
                        <span>{country.universities}+ Universities</span>
                        <span className="flex items-center gap-1">
                          View Details <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
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
