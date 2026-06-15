'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Loader2, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { consultationSchema, type ConsultationFormData } from '@/schemas'
import { useCreateConsultation } from '@/hooks/use-consultation'
import { COUNTRIES, INTAKE_OPTIONS, QUALIFICATION_OPTIONS } from '@/constants'
import { cn } from '@/lib/utils'

interface ConsultationFormProps {
  className?: string
  title?: string
  subtitle?: string
}

export function ConsultationForm({
  className,
  title = 'Book Your Free Consultation',
  subtitle = 'Fill out the form and our expert counselors will get back to you within 24 hours.',
}: ConsultationFormProps) {
  const mutation = useCreateConsultation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  })

  const onSubmit = (data: ConsultationFormData) => {
    mutation.mutate(data, {
      onSuccess: () => reset(),
    })
  }

  if (mutation.isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn('rounded-xl border bg-card p-8 text-center', className)}
      >
        <div className="rounded-full bg-primary/10 p-4 w-fit mx-auto mb-4">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-2">Application Submitted!</h3>
        <p className="text-muted-foreground mb-4">
          Thank you for reaching out! Our team will contact you within 24 hours to discuss your study abroad options.
        </p>
        <Button variant="outline" onClick={() => mutation.reset()}>
          Submit Another Request
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn('rounded-xl border bg-card p-6 md:p-8', className)}
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input id="fullName" placeholder="John Doe" {...register('fullName')} />
            {errors.fullName && (
              <p className="text-sm text-destructive">{errors.fullName.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" placeholder="john@example.com" {...register('email')} />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" type="tel" placeholder="+1234567890" {...register('phone')} />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="preferredCountry">Preferred Country *</Label>
            <Select
              id="preferredCountry"
              placeholder="Select a country"
              options={COUNTRIES.map((c) => ({ value: c.name, label: `${c.flag} ${c.name}` }))}
              {...register('preferredCountry')}
            />
            {errors.preferredCountry && (
              <p className="text-sm text-destructive">{errors.preferredCountry.message}</p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="desiredCourse">Desired Course *</Label>
            <Input id="desiredCourse" placeholder="e.g., Computer Science" {...register('desiredCourse')} />
            {errors.desiredCourse && (
              <p className="text-sm text-destructive">{errors.desiredCourse.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="academicQualification">Academic Qualification *</Label>
            <Select
              id="academicQualification"
              placeholder="Select qualification"
              options={QUALIFICATION_OPTIONS}
              {...register('academicQualification')}
            />
            {errors.academicQualification && (
              <p className="text-sm text-destructive">{errors.academicQualification.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="intake">Preferred Intake *</Label>
          <Select
            id="intake"
            placeholder="Select intake"
            options={INTAKE_OPTIONS}
            {...register('intake')}
          />
          {errors.intake && (
            <p className="text-sm text-destructive">{errors.intake.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message (Optional)</Label>
          <Textarea
            id="message"
            placeholder="Tell us more about your goals and requirements..."
            rows={3}
            {...register('message')}
          />
          {errors.message && (
            <p className="text-sm text-destructive">{errors.message.message}</p>
          )}
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={mutation.isPending}>
          {mutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Submit Application
            </>
          )}
        </Button>
      </form>
    </motion.div>
  )
}
