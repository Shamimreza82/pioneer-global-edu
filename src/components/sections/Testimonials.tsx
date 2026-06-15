'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { SectionHeader } from '@/components/common/SectionWrapper'
import { Button } from '@/components/ui/button'
import { TESTIMONIALS } from '@/constants'
import { cn } from '@/lib/utils'

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const testimonial = TESTIMONIALS[current]

  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length)
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="What Our Students Say"
          subtitle="Hear from students who achieved their study abroad dreams with us"
        />
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="relative bg-card border rounded-2xl p-8 md:p-12"
            >
              <Quote className="h-10 w-10 text-primary/20 absolute top-6 left-6" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn('h-5 w-5', i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-muted')}
                    />
                  ))}
                </div>
                <p className="text-lg md:text-xl leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} &middot; {testimonial.university}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    'h-2 w-2 rounded-full transition-all',
                    i === current ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
