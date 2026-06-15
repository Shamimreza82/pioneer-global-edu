import api from './api'
import type { BlogPost } from '@/types'
import type { BlogFormData } from '@/schemas'

export const blogService = {
  getAll: async (params?: { page?: number; limit?: number; category?: string; search?: string }) => {
    const { data } = await api.get('/blogs', { params })
    return data
  },

  getBySlug: async (slug: string) => {
    const { data } = await api.get(`/blogs/${slug}`)
    return data as BlogPost
  },

  create: async (formData: BlogFormData) => {
    const { data } = await api.post('/blogs', formData)
    return data as BlogPost
  },

  update: async (id: string, formData: Partial<BlogFormData>) => {
    const { data } = await api.patch(`/blogs/${id}`, formData)
    return data as BlogPost
  },

  delete: async (id: string) => {
    await api.delete(`/blogs/${id}`)
  },
}
