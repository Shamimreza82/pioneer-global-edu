'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Target, Eye, Heart, Shield, Lightbulb, Handshake } from 'lucide-react'
import { AnimatedSection } from '@/components/common/SectionWrapper'
import { IMAGES } from '@/constants'

const values = [
  { icon: Heart, key: 'passion' },
  { icon: Shield, key: 'integrity' },
  { icon: Lightbulb, key: 'innovation' },
  { icon: Handshake, key: 'commitment' },
]

const team = [
  { name: 'Dr. Sarah Mitchell', role: 'CEO & Founder', bio: '15+ years in international education, PhD in Higher Education Administration.' },
  { name: 'James Wilson', role: 'Head of Counseling', bio: 'Certified education counselor with expertise in US and UK admissions.' },
  { name: 'Emily Chen', role: 'Visa Specialist', bio: '98% visa success rate, expert in complex visa applications worldwide.' },
  { name: 'Michael Torres', role: 'Director of Partnerships', bio: 'Built relationships with 500+ universities across 50+ countries.' },
]

export function AboutContent() {
  const t = useTranslations('about')

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection>
              <h3 className="text-2xl font-bold mb-4">{t('story')}</h3>
              <p className="text-muted-foreground mb-4">{t('story1')}</p>
              <p className="text-muted-foreground">{t('story2')}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">15+</div>
                  <div className="text-lg text-muted-foreground">{t('years')}</div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <AnimatedSection className="rounded-xl border bg-card p-8">
              <Target className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('mission')}</h3>
              <p className="text-muted-foreground">{t('missionText')}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="rounded-xl border bg-card p-8">
              <Eye className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('vision')}</h3>
              <p className="text-muted-foreground">{t('visionText')}</p>
            </AnimatedSection>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">{t('valuesTitle')}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <AnimatedSection key={v.key} delay={i * 0.1} className="text-center">
                  <div className="rounded-full bg-primary/10 p-4 w-fit mx-auto mb-4">
                    <v.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{t(`values.${v.key}.title`)}</h4>
                  <p className="text-sm text-muted-foreground">{t(`values.${v.key}.description`)}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center mb-8">{t('team')}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <AnimatedSection key={member.name} delay={i * 0.1} className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={Object.values(IMAGES.team)[i]}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <h4 className="font-semibold">{member.name}</h4>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
