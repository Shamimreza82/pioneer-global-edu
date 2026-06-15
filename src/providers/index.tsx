'use client'

import { type ReactNode } from 'react'
import { ThemeProvider } from './theme-provider'
import { QueryProvider } from './query-provider'
import { Toaster } from 'sonner'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider defaultTheme="system">
        {children}
        <Toaster richColors closeButton position="top-right" />
      </ThemeProvider>
    </QueryProvider>
  )
}
