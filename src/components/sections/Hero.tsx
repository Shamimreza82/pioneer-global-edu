'use client'

import Link from 'next/link'
import Image from 'next/image'
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
    img: '/assat/slider/slider-img-1.jpeg',
    icon: GraduationCap,
    value: '10K+',
    label: 'Students Placed',
  },
  {
    img: '/assat/slider/slider-img-2.jpeg',
    icon: Globe,
    value: '500+',
    label: 'Partner Universities',
  },
  {
    img: '/assat/slider/slider-img-3.jpeg',
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
                <Image
                  src={slide.img}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
                <div className="container mx-auto px-4 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
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
