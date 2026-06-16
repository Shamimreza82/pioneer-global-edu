'use client'

import Image from 'next/image'
import { AnimatedSection } from '@/components/common/SectionWrapper'

const gallery = [
  { src: '/assat/gallary/photo-gallary.jpeg', alt: 'Gallery image 1' },
  { src: '/assat/gallary/photo-gallary-1.jpeg', alt: 'Gallery image 2' },
  { src: '/assat/gallary/photo-gallary-2.jpeg', alt: 'Gallery image 3' },
]

export function PhotoGallery() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Photo Gallery
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Glimpses of our journey, events, and moments captured.
          </p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted group">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
