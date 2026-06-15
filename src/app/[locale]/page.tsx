import { Hero } from '@/components/sections/Hero'
import { StatsSection } from '@/components/sections/StatsSection'
import { FeaturedCountries } from '@/components/sections/FeaturedCountries'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Testimonials } from '@/components/sections/Testimonials'
import { LatestBlogs } from '@/components/sections/LatestBlogs'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { ConsultationForm } from '@/components/forms/ConsultationForm'
import { BlobDivider } from '@/components/common/SectionDivider'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <BlobDivider />
      <FeaturedCountries />
      <BlobDivider />
      <ServicesOverview />
      <BlobDivider />
      <WhyChooseUs />
      <Testimonials />

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                Start Your Journey Today
              </h2>
              <p className="text-muted-foreground">
                Fill out the form and our expert counselors will reach out within 24 hours.
              </p>
            </div>
            <ConsultationForm />
          </div>
        </div>
      </section>

      <LatestBlogs />
      <FAQSection />
      <CTASection />
    </>
  )
}
