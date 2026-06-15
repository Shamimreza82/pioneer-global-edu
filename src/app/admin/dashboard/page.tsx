'use client'

import { Users, MessageSquare, Building2, FileText, TrendingUp, Activity } from 'lucide-react'
import { AnimatedSection } from '@/components/common/SectionWrapper'
import { CardSkeleton } from '@/components/common/LoadingSkeleton'
import { useDashboardStats } from '@/hooks/use-dashboard'

const statCards = [
  { label: 'Total Students', icon: Users, color: 'text-blue-600 bg-blue-100 dark:bg-blue-900/20', key: 'totalStudents' as const },
  { label: 'Applications', icon: TrendingUp, color: 'text-green-600 bg-green-100 dark:bg-green-900/20', key: 'totalApplications' as const },
  { label: 'Consultations', icon: MessageSquare, color: 'text-purple-600 bg-purple-100 dark:bg-purple-900/20', key: 'totalConsultations' as const },
  { label: 'Universities', icon: Building2, color: 'text-orange-600 bg-orange-100 dark:bg-orange-900/20', key: 'totalUniversities' as const },
  { label: 'Blog Posts', icon: FileText, color: 'text-pink-600 bg-pink-100 dark:bg-pink-900/20', key: 'totalBlogs' as const },
]

export default function DashboardPage() {
  const { data: stats, isLoading } = useDashboardStats()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome to your admin dashboard</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {statCards.map((card, i) => {
          const Icon = card.icon
          return (
            <AnimatedSection key={card.key} delay={i * 0.08}>
              <div className="rounded-xl border bg-card p-5">
                {isLoading ? (
                  <CardSkeleton />
                ) : (
                  <>
                    <div className={`rounded-full p-2 w-fit mb-3 ${card.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-2xl font-bold">{stats?.[card.key] ?? 0}</div>
                    <div className="text-sm text-muted-foreground">{card.label}</div>
                  </>
                )}
              </div>
            </AnimatedSection>
          )
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="h-5 w-5 text-primary" />
            <h2 className="font-semibold">Recent Activity</h2>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <div className="h-2 w-2 rounded-full bg-primary/60" />
                <span className="text-muted-foreground">Activity item {i}</span>
                <span className="text-xs text-muted-foreground ml-auto">2 hours ago</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="h-5 w-5 text-primary" />
            <h2 className="font-semibold">Pending Consultations</h2>
          </div>
          <div className="text-4xl font-bold text-primary mb-1">12</div>
          <p className="text-sm text-muted-foreground">Awaiting your response</p>
        </div>
      </div>
    </div>
  )
}
