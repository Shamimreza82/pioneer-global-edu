import api from './api'
import type { Consultation, ConsultationStatus } from '@/types'
import type { ConsultationFormData } from '@/schemas'

export const consultationService = {
  getAll: async (params?: { status?: ConsultationStatus; page?: number; limit?: number }) => {
    const { data } = await api.get('/consultations', { params })
    return data
  },

  getById: async (id: string) => {
    const { data } = await api.get(`/consultations/${id}`)
    return data as Consultation
  },

  create: async (formData: ConsultationFormData) => {
    const { data } = await api.post('/consultations', formData)
    return data as Consultation
  },

  updateStatus: async (id: string, status: ConsultationStatus) => {
    const { data } = await api.patch(`/consultations/${id}`, { status })
    return data as Consultation
  },

  delete: async (id: string) => {
    await api.delete(`/consultations/${id}`)
  },
}
