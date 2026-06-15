import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { blogService } from '@/services/blog'
import type { BlogFormData } from '@/schemas'
import { toast } from 'sonner'

export function useBlogs(page = 1, category?: string, search?: string) {
  return useQuery({
    queryKey: ['blogs', page, category, search],
    queryFn: () => blogService.getAll({ page, category, search }),
  })
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ['blogs', slug],
    queryFn: () => blogService.getBySlug(slug),
    enabled: !!slug,
  })
}

export function useCreateBlog() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: BlogFormData) => blogService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] })
      toast.success('Blog post created successfully')
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to create blog')
    },
  })
}

export function useUpdateBlog() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<BlogFormData> }) =>
      blogService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] })
      toast.success('Blog post updated successfully')
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to update blog')
    },
  })
}

export function useDeleteBlog() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: blogService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] })
      toast.success('Blog post deleted successfully')
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to delete blog')
    },
  })
}
