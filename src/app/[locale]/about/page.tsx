import type { Metadata } from 'next'
import { SectionHeader } from '@/components/common/SectionWrapper'
import { StatsSection } from '@/components/sections/StatsSection'
import { CTASection } from '@/components/sections/CTASection'
import { AboutContent } from './AboutContent'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Pioneer Global Edu - our mission, vision, team, and commitment to helping students study abroad.',
}

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="About Pioneer Global Edu"
            subtitle="We are passionate about transforming lives through international education"
          />
        </div>
      </section>
      <AboutContent />
      <StatsSection />
      <CTASection />
    </>
  )
}
