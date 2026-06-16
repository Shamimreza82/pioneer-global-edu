import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Hero } from '@/components/sections/Hero'

const StatsSection = dynamic(() => import('@/components/sections/StatsSection').then(m => ({ default: m.StatsSection })))
const FeaturedCountries = dynamic(() => import('@/components/sections/FeaturedCountries').then(m => ({ default: m.FeaturedCountries })))
const ServicesOverview = dynamic(() => import('@/components/sections/ServicesOverview').then(m => ({ default: m.ServicesOverview })))
const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs').then(m => ({ default: m.WhyChooseUs })))
const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then(m => ({ default: m.Testimonials })))
const PhotoGallery = dynamic(() => import('@/components/sections/PhotoGallery').then(m => ({ default: m.PhotoGallery })))
const LatestBlogs = dynamic(() => import('@/components/sections/LatestBlogs').then(m => ({ default: m.LatestBlogs })))
const FAQSection = dynamic(() => import('@/components/sections/FAQSection').then(m => ({ default: m.FAQSection })))
const CTASection = dynamic(() => import('@/components/sections/CTASection').then(m => ({ default: m.CTASection })))
const ConsultationForm = dynamic(() => import('@/components/forms/ConsultationForm').then(m => ({ default: m.ConsultationForm })))
const BlobDivider = dynamic(() => import('@/components/common/SectionDivider').then(m => ({ default: m.BlobDivider })))

function SectionFallback() {
  return <div className="py-16 md:py-24" />
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={null}>
        <BlobDivider />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FeaturedCountries />
      </Suspense>
      <Suspense fallback={null}>
        <BlobDivider />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ServicesOverview />
      </Suspense>
      <Suspense fallback={null}>
        <BlobDivider />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <WhyChooseUs />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <PhotoGallery />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>

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
            <Suspense fallback={<SectionFallback />}>
              <ConsultationForm />
            </Suspense>
          </div>
        </div>
      </section>

      <Suspense fallback={<SectionFallback />}>
        <LatestBlogs />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CTASection />
      </Suspense>
    </>
  )
}
