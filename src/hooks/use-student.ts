import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { studentService } from '@/services/student'
import type { StudentFormData } from '@/schemas'
import { toast } from 'sonner'

export function useStudents(page = 1, search?: string) {
  return useQuery({
    queryKey: ['students', page, search],
    queryFn: () => studentService.getAll({ page, search }),
  })
}

export function useStudent(id: string) {
  return useQuery({
    queryKey: ['students', id],
    queryFn: () => studentService.getById(id),
    enabled: !!id,
  })
}

export function useCreateStudent() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: StudentFormData) => studentService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] })
      toast.success('Student added successfully')
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to add student')
    },
  })
}

export function useUpdateStudent() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<StudentFormData> }) =>
      studentService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] })
      toast.success('Student updated successfully')
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to update student')
    },
  })
}

export function useDeleteStudent() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: studentService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] })
      toast.success('Student deleted successfully')
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to delete student')
    },
  })
}
