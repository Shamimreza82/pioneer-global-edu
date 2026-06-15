'use client'

import Link from 'next/link'
import {
  GraduationCap, Globe, BookOpen, FileCheck, Plane, Home,
  HeartHandshake, ArrowRight, type LucideIcon,
} from 'lucide-react'
import { SectionHeader, AnimatedSection } from '@/components/common/SectionWrapper'
import { Button } from '@/components/ui/button'
import { SERVICES } from '@/constants'

const iconMap: Record<string, LucideIcon> = {
  GraduationCap, Globe, BookOpen, FileCheck, Plane, Home, HeartHandshake,
}

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive support throughout your study abroad journey"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || GraduationCap
            return (
              <AnimatedSection key={service.id} delay={i * 0.08}>
                <Link href={`/services/${service.id}`} className="group block h-full">
                  <div className="h-full rounded-xl border bg-card p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                    <div className="rounded-full bg-primary/10 p-3 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                  </div>
                </Link>
              </AnimatedSection>
            )
          })}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
