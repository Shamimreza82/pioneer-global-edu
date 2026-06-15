'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Play, GraduationCap, Globe, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

const floatingStats = [
  { icon: GraduationCap, value: '10K+', label: 'Students' },
  { icon: Globe, value: '500+', label: 'Universities' },
  { icon: Award, value: '98%', label: 'Visa Success' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border bg-background/50 text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Trusted by 10,000+ students worldwide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Your Gateway to{' '}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Global Education
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Expert guidance to help you gain admission to top universities worldwide. 
              From counseling to visa support, we handle it all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" asChild>
                <Link href="/consultation">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link href="/services">
                  <Play className="mr-2 h-5 w-5" />
                  Our Services
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-primary/10 to-background flex items-center justify-center">
                <div className="text-center p-8">
                  <GraduationCap className="h-24 w-24 text-primary/40 mx-auto mb-4" />
                  <p className="text-2xl font-bold">Study Abroad</p>
                  <p className="text-muted-foreground">Make Your Dream a Reality</p>
                </div>
              </div>
            </div>
            {floatingStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.15 }}
                className="absolute -bottom-4 -left-4 bg-card border rounded-xl p-4 shadow-lg flex items-center gap-3"
                style={{ left: `${10 + i * 30}%`, bottom: i === 2 ? '-1rem' : '-0.5rem' }}
              >
                <div className="rounded-full bg-primary/10 p-2">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
