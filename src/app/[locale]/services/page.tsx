import type { Metadata } from 'next'
import { SectionHeader } from '@/components/common/SectionWrapper'
import { CTASection } from '@/components/sections/CTASection'
import { ServicesGrid } from './ServicesGrid'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive study abroad services including counseling, university selection, visa guidance, and more.',
}

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Services"
            subtitle="End-to-end support for your study abroad journey"
          />
        </div>
      </section>
      <ServicesGrid />
      <CTASection />
    </>
  )
}
