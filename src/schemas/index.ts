import { z } from 'zod'

export const consultationSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').max(20),
  preferredCountry: z.string().min(1, 'Please select a preferred country'),
  desiredCourse: z.string().min(2, 'Course must be at least 2 characters').max(200),
  academicQualification: z.string().min(1, 'Please select your qualification'),
  intake: z.string().min(1, 'Please select an intake'),
  message: z.string().max(1000, 'Message must be less than 1000 characters').optional(),
})

export type ConsultationFormData = z.infer<typeof consultationSchema>

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').max(20),
  subject: z.string().min(2, 'Subject must be at least 2 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
})

export type ContactFormData = z.infer<typeof contactSchema>

export const studentSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  country: z.string().min(1, 'Please select a country'),
  university: z.string().min(1, 'Please select a university'),
  course: z.string().min(2, 'Course must be at least 2 characters'),
  intake: z.string().min(1, 'Please select an intake'),
  status: z.string().default('active'),
})

export type StudentFormData = z.infer<typeof studentSchema>

export const universitySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  country: z.string().min(1, 'Please select a country'),
  ranking: z.number().min(1, 'Ranking must be at least 1'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  website: z.string().url('Invalid URL'),
  logo: z.string().min(1, 'Logo URL is required'),
  location: z.string().min(2, 'Location must be at least 2 characters'),
  tuitionFeeRange: z.string().min(1, 'Tuition fee range is required'),
  applicationDeadline: z.string().min(1, 'Application deadline is required'),
})

export type UniversityFormData = z.infer<typeof universitySchema>

export const blogSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  slug: z.string().min(2, 'Slug must be at least 2 characters'),
  excerpt: z.string().min(10, 'Excerpt must be at least 10 characters'),
  content: z.string().min(50, 'Content must be at least 50 characters'),
  category: z.string().min(1, 'Please select a category'),
  author: z.string().min(2, 'Author must be at least 2 characters'),
  image: z.string().min(1, 'Image URL is required'),
  tags: z.string().min(1, 'At least one tag is required'),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  seoKeywords: z.string().optional(),
})

export type BlogFormData = z.infer<typeof blogSchema>
