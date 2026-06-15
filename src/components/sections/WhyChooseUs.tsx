'use client'

import { useTranslations } from 'next-intl'
import { Users, Target, HeartHandshake, FileCheck, Globe, Award, type LucideIcon } from 'lucide-react'
import { SectionHeader, AnimatedSection } from '@/components/common/SectionWrapper'
import { WHY_CHOOSE_US } from '@/constants'

const iconMap: Record<string, LucideIcon> = {
  Users, Target, HeartHandshake, FileCheck, Globe, Award,
}
const itemKeys = ['expertCounselors', 'personalizedApproach', 'endToEndSupport', 'visaSuccess', 'globalNetwork', 'scholarshipAccess']

export function WhyChooseUs() {
  const t = useTranslations('whyChooseUs')

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = iconMap[item.icon] || Award
            const key = itemKeys[i]
            return (
              <AnimatedSection key={item.title} delay={i * 0.1} className="text-center">
                <div className="rounded-full bg-primary/10 p-4 w-fit mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-muted-foreground">
                  {t(`${key}.description`)}
                </p>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
