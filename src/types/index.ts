export interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}

export interface Stat {
  value: string
  label: string
  icon?: string
}

export interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
}

export interface Country {
  id: string
  name: string
  slug: string
  flag: string
  image: string
  description: string
  benefits: string[]
  topUniversities: University[]
  tuitionFees: string
  livingCosts: string
  scholarshipInfo: string
  visaRequirements: string[]
  admissionProcess: string[]
  faqs: FAQ[]
}

export interface University {
  id: string
  name: string
  country: string
  ranking: number
  description: string
  website: string
  logo: string
  image: string
  location: string
  programs: string[]
  tuitionFeeRange: string
  applicationDeadline: string
  intake: string[]
}

export interface Scholarship {
  id: string
  name: string
  country: string
  university: string
  amount: string
  deadline: string
  eligibility: string[]
  description: string
  applicationLink: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  author: string
  image: string
  publishedAt: string
  readTime: string
  tags: string[]
  featured: boolean
  seo: SEOMetadata
}

export interface Testimonial {
  id: string
  name: string
  role: string
  country: string
  university: string
  image: string
  content: string
  rating: number
  featured: boolean
}

export interface Service {
  id: string
  title: string
  slug: string
  description: string
  icon: string
  content: string
  benefits: string[]
  process: string[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface Consultation {
  id: string
  fullName: string
  email: string
  phone: string
  preferredCountry: string
  desiredCourse: string
  academicQualification: string
  intake: string
  message: string
  status: ConsultationStatus
  createdAt: string
  updatedAt: string
}

export type ConsultationStatus = 'pending' | 'contacted' | 'processing' | 'approved' | 'rejected'

export interface Student {
  id: string
  name: string
  email: string
  phone: string
  country: string
  university: string
  course: string
  intake: string
  status: string
  createdAt: string
}

export interface DashboardStats {
  totalStudents: number
  totalApplications: number
  totalConsultations: number
  totalUniversities: number
  totalBlogs: number
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface SEOMetadata {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
}
