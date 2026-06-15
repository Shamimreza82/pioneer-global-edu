'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { SectionHeader, AnimatedSection } from '@/components/common/SectionWrapper'
import { contactSchema, type ContactFormData } from '@/schemas'
import { SITE_CONFIG } from '@/constants'
import { toast } from 'sonner'

const contactInfo = [
  { icon: MapPin, label: 'Address', value: SITE_CONFIG.address },
  { icon: Phone, label: 'Phone', value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
  { icon: Mail, label: 'Email', value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
  { icon: Clock, label: 'Working Hours', value: SITE_CONFIG.workingHours },
]

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1500))
    toast.success('Message sent successfully! We will get back to you soon.')
    reset()
  }

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Contact Us"
            subtitle="Have questions? We'd love to hear from you. Send us a message and we'll respond promptly."
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {contactInfo.map((info, i) => (
                <AnimatedSection key={info.label} delay={i * 0.1} className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{info.label}</h3>
                    {info.href ? (
                      <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </AnimatedSection>
              ))}

              <AnimatedSection delay={0.4}>
                <div className="rounded-xl border bg-card h-64 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <MapPin className="h-10 w-10 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">{SITE_CONFIG.address}</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl border bg-card p-6 md:p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" placeholder="Your name" {...register('name')} />
                      {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" {...register('email')} />
                      {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" type="tel" placeholder="+1234567890" {...register('phone')} />
                      {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="How can we help?" {...register('subject')} />
                      {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" rows={5} placeholder="Tell us more about your inquiry..." {...register('message')} />
                    {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="mr-2 h-4 w-4" /> Send Message</>
                    )}
                  </Button>
                </form>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
