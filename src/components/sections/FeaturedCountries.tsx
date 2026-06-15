'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeader, AnimatedSection } from '@/components/common/SectionWrapper'
import { Button } from '@/components/ui/button'
import { COUNTRIES } from '@/constants'

export function FeaturedCountries() {
  const displayed = COUNTRIES.slice(0, 6)

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Study Destinations"
          subtitle="Choose from top study destinations across the globe"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((country, i) => (
            <AnimatedSection key={country.id} delay={i * 0.1}>
              <Link href={`/destinations/${country.id}`} className="group block">
                <div className="relative rounded-xl overflow-hidden border bg-card hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-6xl">{country.flag}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg">{country.name}</h3>
                      <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{country.description}</p>
                    <div className="flex gap-3 text-xs text-muted-foreground">
                      <span>{country.universities}+ Universities</span>
                      <span>{country.students}+ Students</span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/destinations">
              View All Destinations <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
