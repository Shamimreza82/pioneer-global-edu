'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import {
  GraduationCap, Globe, BookOpen, FileCheck, Plane, Home,
  HeartHandshake, ArrowRight, type LucideIcon,
} from 'lucide-react'
import { SectionHeader, AnimatedSection } from '@/components/common/SectionWrapper'
import { Button } from '@/components/ui/button'
import { SERVICES, IMAGES } from '@/constants'

const iconMap: Record<string, LucideIcon> = {
  GraduationCap, Globe, BookOpen, FileCheck, Plane, Home, HeartHandshake,
}

export function ServicesOverview() {
  const t = useTranslations('services')

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || GraduationCap
            const key = `items.${service.id}.title`
            return (
              <AnimatedSection key={service.id} delay={i * 0.08}>
                <Link href={`/services/${service.id}`} className="group block h-full">
                  <div className="h-full rounded-xl border bg-card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <Image
                        src={IMAGES.blogs.default}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 rounded-full bg-white/20 backdrop-blur p-2.5">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold mb-1.5 group-hover:text-primary transition-colors">
                        {t.has(key) ? t(key) : service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {t.has(`items.${service.id}.description`) ? t(`items.${service.id}.description`) : service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            )
          })}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/services">
              {t('viewAll')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
