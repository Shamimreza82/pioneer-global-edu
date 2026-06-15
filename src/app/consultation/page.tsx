import type { Metadata } from 'next'
import { SectionHeader } from '@/components/common/SectionWrapper'
import { ConsultationForm } from '@/components/forms/ConsultationForm'
import { CTASection } from '@/components/sections/CTASection'
import { FAQSection } from '@/components/sections/FAQSection'

export const metadata: Metadata = {
  title: 'Free Consultation',
  description: 'Book a free consultation with our expert education counselors. Get personalized guidance for your study abroad journey.',
}

export default function ConsultationPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Free Consultation"
            subtitle="Take the first step towards your global education. Fill out the form and our experts will guide you."
          />
          <div className="max-w-2xl mx-auto">
            <ConsultationForm />
          </div>
        </div>
      </section>
      <FAQSection />
      <CTASection />
    </>
  )
}
