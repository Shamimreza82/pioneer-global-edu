import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { universityService } from '@/services/university'
import type { UniversityFormData } from '@/schemas'
import { toast } from 'sonner'

export function useUniversities(page = 1, country?: string, search?: string) {
  return useQuery({
    queryKey: ['universities', page, country, search],
    queryFn: () => universityService.getAll({ page, country, search }),
  })
}

export function useUniversity(id: string) {
  return useQuery({
    queryKey: ['universities', id],
    queryFn: () => universityService.getById(id),
    enabled: !!id,
  })
}

export function useCreateUniversity() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: UniversityFormData) => universityService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['universities'] })
      toast.success('University added successfully')
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to add university')
    },
  })
}

export function useUpdateUniversity() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<UniversityFormData> }) =>
      universityService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['universities'] })
      toast.success('University updated successfully')
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to update university')
    },
  })
}

export function useDeleteUniversity() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: universityService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['universities'] })
      toast.success('University deleted successfully')
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to delete university')
    },
  })
}
