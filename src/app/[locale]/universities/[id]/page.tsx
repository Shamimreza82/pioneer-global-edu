'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ArrowLeft, Globe, MapPin, GraduationCap, DollarSign, Calendar, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ConsultationForm } from '@/components/forms/ConsultationForm'
import { AnimatedSection } from '@/components/common/SectionWrapper'

const UNIVERSITIES = [
  { id: '1', name: 'Stanford University', country: 'USA', ranking: 3, description: 'Stanford University is a private research university in Stanford, California. Founded in 1885, it is known for its academic strength, wealth, and proximity to Silicon Valley.', location: 'Stanford, California', website: 'https://stanford.edu', programs: ['Computer Science', 'Engineering', 'Business', 'Law', 'Medicine'], tuitionFeeRange: '$55,000 - $60,000', applicationDeadline: 'January 2, 2025', intake: ['Fall', 'Winter'] },
  { id: '2', name: 'University of Oxford', country: 'UK', ranking: 1, description: 'The University of Oxford is a collegiate research university in Oxford, England. It is the oldest university in the English-speaking world.', location: 'Oxford, England', website: 'https://ox.ac.uk', programs: ['Law', 'Medicine', 'Economics', 'Engineering', 'Philosophy'], tuitionFeeRange: '£28,000 - £45,000', applicationDeadline: 'October 15, 2024', intake: ['Fall'] },
]

export default function UniversityDetailPage() {
  const params = useParams()
  const t = useTranslations('universities')
  const uni = UNIVERSITIES.find((u) => u.id === params.id)

  if (!uni) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold mb-2">{t('notFound')}</h2>
        <p className="text-muted-foreground mb-4">{t('notFoundMessage')}</p>
        <Button asChild><Link href="/universities"><ArrowLeft className="mr-2 h-4 w-4" /> {t('backToUniversities')}</Link></Button>
      </div>
    )
  }

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/universities">
              <ArrowLeft className="mr-2 h-4 w-4" /> {t('backToUniversities')}
            </Link>
          </Button>
          <div className="flex items-start gap-6 mb-6">
            <div className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-6">
              <GraduationCap className="h-16 w-16 text-primary/40" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl md:text-5xl font-bold">{uni.name}</h1>
                <Badge>#{uni.ranking} Global</Badge>
              </div>
              <div className="flex flex-wrap gap-4 text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {uni.location}</span>
                <span className="flex items-center gap-1"><Globe className="h-4 w-4" /> {uni.country}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <AnimatedSection className="rounded-xl border bg-card p-5 text-center">
              <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">{t('tuitionCosts')}</div>
              <div className="font-semibold">{uni.tuitionFeeRange}</div>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="rounded-xl border bg-card p-5 text-center">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Deadline</div>
              <div className="font-semibold">{uni.applicationDeadline}</div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="rounded-xl border bg-card p-5 text-center">
              <GraduationCap className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Intake</div>
              <div className="font-semibold">{uni.intake.join(', ')}</div>
            </AnimatedSection>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <AnimatedSection>
                <h2 className="text-2xl font-bold mb-4">About {uni.name}</h2>
                <p className="text-muted-foreground leading-relaxed">{uni.description}</p>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-2xl font-bold mb-4">{t('programsOffered')}</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {uni.programs.map((p) => (
                    <div key={p} className="flex items-center gap-2 p-3 rounded-lg border bg-card">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <Button variant="outline" asChild>
                  <a href={uni.website} target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" /> {t('visitWebsite')}
                  </a>
                </Button>
              </AnimatedSection>
            </div>
            <div>
              <ConsultationForm
                title={`Apply to ${uni.name}`}
                subtitle="Our experts will guide you through the application process."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
