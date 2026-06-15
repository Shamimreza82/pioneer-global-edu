import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { consultationService } from '@/services/consultation'
import type { ConsultationStatus } from '@/types'
import { toast } from 'sonner'

export function useConsultations(page = 1, status?: ConsultationStatus) {
  return useQuery({
    queryKey: ['consultations', page, status],
    queryFn: () => consultationService.getAll({ page, status }),
  })
}

export function useConsultation(id: string) {
  return useQuery({
    queryKey: ['consultations', id],
    queryFn: () => consultationService.getById(id),
    enabled: !!id,
  })
}

export function useCreateConsultation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: consultationService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['consultations'] })
      toast.success('Consultation request submitted successfully!')
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to submit consultation')
    },
  })
}

export function useUpdateConsultationStatus() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: ConsultationStatus }) =>
      consultationService.updateStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['consultations'] })
      toast.success('Status updated successfully')
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to update status')
    },
  })
}

export function useDeleteConsultation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: consultationService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['consultations'] })
      toast.success('Consultation deleted successfully')
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to delete consultation')
    },
  })
}
