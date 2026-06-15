'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { STATS } from '@/constants'
import { AnimatedSection } from '@/components/common/SectionWrapper'

export function StatsSection() {
  const t = useTranslations('stats')
  const statKeys = ['studentsPlaced', 'partnerUniversities', 'countries', 'successRate', 'yearsExperience', 'satisfaction']

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {STATS.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: i * 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-1"
              >
                {stat.value}
              </motion.div>
              <div className="text-primary-foreground/80 text-sm">
                {t(statKeys[i]) || stat.label}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
