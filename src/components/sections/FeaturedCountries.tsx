'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { SectionHeader, AnimatedSection } from '@/components/common/SectionWrapper'
import { Button } from '@/components/ui/button'
import { COUNTRIES, IMAGES } from '@/constants'

export function FeaturedCountries() {
  const t = useTranslations('destinations')
  const displayed = COUNTRIES.slice(0, 6)

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((country, i) => (
            <AnimatedSection key={country.id} delay={i * 0.1}>
              <Link href={`/destinations/${country.id}`} className="group block">
                <div className="relative rounded-xl overflow-hidden border bg-card hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={IMAGES.countries[country.id as keyof typeof IMAGES.countries]}
                      alt={country.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <span className="absolute top-3 left-3 text-3xl drop-shadow-lg">{country.flag}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{country.name}</h3>
                      <ArrowRight className="h-4 w-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{country.description}</p>
                    <div className="flex gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {country.universities}+ {t('universities')}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {country.students}+ {t('students')}
                      </span>
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
              {t('viewAll')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
