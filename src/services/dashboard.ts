import api from './api'
import type { DashboardStats } from '@/types'

export const dashboardService = {
  getStats: async () => {
    const { data } = await api.get('/dashboard/stats')
    return data as DashboardStats
  },
}
