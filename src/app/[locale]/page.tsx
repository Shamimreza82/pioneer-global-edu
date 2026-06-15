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

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturedCountries />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
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
