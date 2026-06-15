'use client'

import Link from 'next/link'
import {
  GraduationCap, Globe, BookOpen, FileCheck, Plane, Home,
  HeartHandshake, ArrowRight, type LucideIcon, Check,
} from 'lucide-react'
import { AnimatedSection } from '@/components/common/SectionWrapper'
import { Button } from '@/components/ui/button'
import { SERVICES } from '@/constants'

const iconMap: Record<string, LucideIcon> = {
  GraduationCap, Globe, BookOpen, FileCheck, Plane, Home, HeartHandshake,
}

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="space-y-24">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || GraduationCap
            const isReversed = i % 2 === 1
            return (
              <AnimatedSection key={service.id}>
                <div className={`grid md:grid-cols-2 gap-12 items-center ${isReversed ? 'md:grid-flow-dense' : ''}`}>
                  <div className={isReversed ? 'md:col-start-2' : ''}>
                    <div className="rounded-full bg-primary/10 p-4 w-fit mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="space-y-3 mb-6">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild>
                      <Link href={`/services/${service.id}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className={`rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 aspect-square flex items-center justify-center ${isReversed ? 'md:col-start-1' : ''}`}>
                    <Icon className="h-32 w-32 text-primary/30" />
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
