import api from './api'
import type { University } from '@/types'
import type { UniversityFormData } from '@/schemas'

export const universityService = {
  getAll: async (params?: { page?: number; limit?: number; search?: string; country?: string }) => {
    const { data } = await api.get('/universities', { params })
    return data
  },

  getById: async (id: string) => {
    const { data } = await api.get(`/universities/${id}`)
    return data as University
  },

  create: async (formData: UniversityFormData) => {
    const { data } = await api.post('/universities', formData)
    return data as University
  },

  update: async (id: string, formData: Partial<UniversityFormData>) => {
    const { data } = await api.patch(`/universities/${id}`, formData)
    return data as University
  },

  delete: async (id: string) => {
    await api.delete(`/universities/${id}`)
  },
}
