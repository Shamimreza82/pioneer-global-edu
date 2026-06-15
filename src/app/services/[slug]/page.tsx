'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import {
  GraduationCap, Globe, BookOpen, FileCheck, Plane, Home,
  HeartHandshake, Award, ArrowLeft, Check, type LucideIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ConsultationForm } from '@/components/forms/ConsultationForm'
import { SERVICES } from '@/constants'
import { notFound } from 'next/navigation'

const iconMap: Record<string, LucideIcon> = {
  GraduationCap, Globe, BookOpen, FileCheck, Plane, Home, HeartHandshake, Award,
}

export default function ServiceDetailPage() {
  const params = useParams()
  const service = SERVICES.find((s) => s.id === params.slug)
  if (!service) notFound()

  const Icon = iconMap[service.icon] || GraduationCap

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Link>
          </Button>
          <div className="max-w-3xl">
            <div className="rounded-full bg-primary/10 p-4 w-fit mb-4">
              <Icon className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl text-muted-foreground">{service.description}</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Benefits</h2>
              <div className="space-y-4 mb-12">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <h2 className="text-2xl font-bold mb-6">Our Process</h2>
              <div className="space-y-4">
                {service.process.map((step, i) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-medium">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ConsultationForm
                title="Get Started Today"
                subtitle="Fill out the form and we'll contact you within 24 hours."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
