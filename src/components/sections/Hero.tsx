'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ArrowRight, Play, GraduationCap, Globe, Award } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import { Button } from '@/components/ui/button'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1200&q=80',
    icon: GraduationCap,
    value: '10K+',
    label: 'Students Placed',
  },
  {
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80',
    icon: Globe,
    value: '500+',
    label: 'Partner Universities',
  },
  {
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
    icon: Award,
    value: '98%',
    label: 'Visa Success Rate',
  },
]

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="w-full"
      >
        {slides.map((slide, i) => {
          const StatIcon = slide.icon
          return (
            <SwiperSlide key={i}>
              <div className="relative min-h-[85vh] flex items-center">
                <img
                  src={slide.img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
                <div className="container mx-auto px-4 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-white text-sm mb-6">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                        </span>
                        {t('trustedBy')}
                      </div>
                      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
                        {t('title')}{' '}
                        <span className="text-primary">{t('titleHighlight')}</span>
                      </h1>
                      <p className="text-lg md:text-xl text-white/70 mb-8 max-w-lg">
                        {t('subtitle')}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="xl" className="bg-primary hover:bg-primary/90" asChild>
                          <Link href="/consultation">
                            {t('cta')}
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                        <Button size="xl" variant="secondary" className="bg-white text-black hover:bg-white/90" asChild>
                          <Link href="/services">
                            <Play className="mr-2 h-5 w-5" />
                            {t('services')}
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div className="hidden lg:flex justify-center">
                      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 text-center text-white">
                        <StatIcon className="h-10 w-10 mx-auto mb-3 text-primary" />
                        <div className="text-4xl font-bold">{slide.value}</div>
                        <div className="text-white/60">{slide.label}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
