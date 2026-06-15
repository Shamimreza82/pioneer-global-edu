import api from './api'
import type { Student } from '@/types'
import type { StudentFormData } from '@/schemas'

export const studentService = {
  getAll: async (params?: { page?: number; limit?: number; search?: string; status?: string }) => {
    const { data } = await api.get('/students', { params })
    return data
  },

  getById: async (id: string) => {
    const { data } = await api.get(`/students/${id}`)
    return data as Student
  },

  create: async (formData: StudentFormData) => {
    const { data } = await api.post('/students', formData)
    return data as Student
  },

  update: async (id: string, formData: Partial<StudentFormData>) => {
    const { data } = await api.patch(`/students/${id}`, formData)
    return data as Student
  },

  delete: async (id: string) => {
    await api.delete(`/students/${id}`)
  },
}
