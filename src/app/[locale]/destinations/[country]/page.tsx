'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ArrowLeft, Check, GraduationCap, DollarSign, Home, FileCheck, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ConsultationForm } from '@/components/forms/ConsultationForm'
import { AnimatedSection } from '@/components/common/SectionWrapper'
import { COUNTRIES, IMAGES } from '@/constants'
import { notFound } from 'next/navigation'

export default function CountryDetailPage() {
  const params = useParams()
  const t = useTranslations('destinations')
  const country = COUNTRIES.find((c) => c.id === params.country)
  if (!country) notFound()

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/destinations">
              <ArrowLeft className="mr-2 h-4 w-4" /> {t('viewAll')}
            </Link>
          </Button>
          <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[21/9]">
            <Image
              src={IMAGES.countries[country.id as keyof typeof IMAGES.countries]}
              alt={country.name}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-4">
              <span className="text-5xl drop-shadow-lg">{country.flag}</span>
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold">{t('benefits')} {country.name}</h1>
                <p className="text-xl text-white/80">{country.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <AnimatedSection className="rounded-xl border bg-card p-6 text-center">
              <GraduationCap className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold">{country.universities}+</div>
              <div className="text-muted-foreground">{t('universities')}</div>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="rounded-xl border bg-card p-6 text-center">
              <Building2 className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold">{country.students}+</div>
              <div className="text-muted-foreground">{t('students')}</div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="rounded-xl border bg-card p-6 text-center">
              <FileCheck className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold">98%</div>
              <div className="text-muted-foreground">Visa Success Rate</div>
            </AnimatedSection>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <AnimatedSection>
                <h2 className="text-2xl font-bold mb-4">{t('benefits')} {country.name}</h2>
                <div className="space-y-3">
                  {country.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h2 className="text-2xl font-bold mb-4">{t('visaRequirements')}</h2>
                <div className="space-y-3">
                  {country.visaRequirements.map((req) => (
                    <div key={req} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h2 className="text-2xl font-bold mb-4">{t('admissionProcess')}</h2>
                <div className="space-y-4">
                  {country.admissionProcess.map((step, i) => (
                    <div key={step} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </div>
                      <p className="pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h2 className="text-2xl font-bold mb-4">{t('tuitionCosts')}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border bg-card p-5">
                    <DollarSign className="h-6 w-6 text-primary mb-2" />
                    <div className="text-sm text-muted-foreground">{t('tuitionFees')}</div>
                    <div className="font-semibold">{country.tuitionFees}</div>
                  </div>
                  <div className="rounded-xl border bg-card p-5">
                    <Home className="h-6 w-6 text-primary mb-2" />
                    <div className="text-sm text-muted-foreground">{t('livingCosts')}</div>
                    <div className="font-semibold">{country.livingCosts}</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div>
              <ConsultationForm
                title={`Apply to Study in ${country.name}`}
                subtitle="Our experts will guide you through the entire process."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
