'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Target, Eye, Heart, Shield, Lightbulb, Handshake, GraduationCap } from 'lucide-react'
import { AnimatedSection } from '@/components/common/SectionWrapper'
import { IMAGES } from '@/constants'

const values = [
  { icon: Heart, key: 'passion' },
  { icon: Shield, key: 'integrity' },
  { icon: Lightbulb, key: 'innovation' },
  { icon: Handshake, key: 'commitment' },
]

const team = [
  { name: 'Founder 1', role: 'CEO & Founder', bio: 'Leading the vision of Pioneer Global Edu with years of experience in international education.' },
  { name: 'Founder 2', role: 'Head of Counseling', bio: 'Expert counselor dedicated to guiding students toward their dream universities.' },
  { name: 'Founder 3', role: 'Visa Specialist', bio: 'Specialist in visa processing with a proven track record of high success rates.' },
  { name: 'Founder 4', role: 'Director of Partnerships', bio: 'Building strong relationships with universities across the globe.' },
]

const advisor = {
  name: 'Dr. Md. Kamruzzaman',
  role: 'Professor, DUET',
  education: 'B.Sc Engg (DUET), PGDTE (IUT), M. Engg. (BUET), Ph.D. (BUET)',
  email: 'kamruzzaman@duet.ac.bd',
  img: '/assat/advisor/advisor.png',
}

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
              <div className="relative aspect-square rounded-xl overflow-hidden bg-muted">
                <img
                  src="/assat/gallary/photo-gallary-1.jpeg"
                  alt="Pioneer Global Edu"
                  className="w-full h-full object-cover absolute inset-0"
                />
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

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Academic Advisor</h3>
            <AnimatedSection className="max-w-md mx-auto text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted border-4 border-primary/20">
                <Image
                  src={advisor.img}
                  alt={advisor.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <h4 className="text-xl font-semibold">{advisor.name}</h4>
              <p className="text-primary font-medium">{advisor.role}</p>
              <p className="text-sm text-muted-foreground mt-2">{advisor.education}</p>
              <a
                href={`mailto:${advisor.email}`}
                className="text-sm text-primary hover:underline mt-1 inline-block"
              >
                {advisor.email}
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
