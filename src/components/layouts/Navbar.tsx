'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X, ChevronDown, GraduationCap, Moon, Sun,
  Compass, BookOpen, FileText, Plane, Home,
  HeartHandshake, Award, type LucideIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NAV_LINKS, SITE_CONFIG } from '@/constants'
import { useTheme } from '@/providers/theme-provider'
import { LanguageSwitcher } from '@/i18n/LanguageSwitcher'
import { cn } from '@/lib/utils'

const dropdownIcons: Record<string, LucideIcon> = {
  'Student Counseling': Compass,
  'University Selection': BookOpen,
  'Admission Processing': FileText,
  'Visa Guidance': Plane,
  'Scholarship Assistance': Award,
  'Accommodation Support': Home,
  'Pre-Departure Guidance': HeartHandshake,
  'USA': GraduationCap,
  'UK': GraduationCap,
  'Canada': GraduationCap,
  'Australia': GraduationCap,
  'Germany': GraduationCap,
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { setTheme, resolvedTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => setMounted(true), [])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const t = useTranslations('nav')
  const navLabel = (label: string) => {
    const key = label.toLowerCase().replace(/[\s-]+/g, '')
    return t.has(key) ? t(key) : label
  }

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' || pathname === '/en' || pathname === '/bn'
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-xl shadow-sm transition-all duration-300',
          scrolled ? 'h-16' : 'h-20'
        )}
      >
        <div className={cn(
          'container mx-auto flex items-center justify-between px-4 transition-all duration-300 h-full',
        )}>
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:blur-lg transition-all" />
              <GraduationCap className="h-7 w-7 text-primary relative" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              <span className="text-foreground">
                {SITE_CONFIG.name.split(' ')[0]}
              </span>{' '}
              <span className="text-muted-foreground">
                {SITE_CONFIG.name.split(' ').slice(1).join(' ')}
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href)
              const textColor = 'text-foreground hover:text-primary'
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all',
                      textColor,
                      active && (scrolled ? 'text-primary bg-primary/5' : 'text-white bg-white/10'),
                      openDropdown === link.label && (scrolled ? 'bg-accent' : 'bg-white/10')
                    )}
                  >
                    {navLabel(link.label)}
                    {link.children && (
                      <ChevronDown className={cn(
                        'h-3.5 w-3.5 transition-transform',
                        openDropdown === link.label && 'rotate-180'
                      )} />
                    )}
                  </Link>
                  {link.children && openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-56 rounded-xl border bg-popover/95 backdrop-blur-xl p-1.5 shadow-xl">
                      {link.children.map((child) => {
                        const Icon = dropdownIcons[child.label] || GraduationCap
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            <div className="rounded-md bg-primary/10 p-1.5">
                              <Icon className="h-3.5 w-3.5 text-primary" />
                            </div>
                            {navLabel(child.label)}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="flex items-center gap-1">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {mounted && (resolvedTheme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
            </Button>
            <Button size="sm" className="hidden sm:inline-flex rounded-lg" asChild>
              <Link href="/consultation">{t('freeConsultation')}</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 z-[70] h-full w-80 border-l bg-background shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b px-5 h-16">
                <Link href="/" className="flex items-center gap-2 font-bold" onClick={() => setMobileOpen(false)}>
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span>{SITE_CONFIG.name}</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="overflow-y-auto h-[calc(100%-4rem)] p-4 space-y-1">
                {NAV_LINKS.map((link) => {
                  const isOpen = openDropdown === link.label
                  return (
                    <div key={link.href}>
                      <button
                        onClick={() => {
                          if (link.children) {
                            setOpenDropdown(isOpen ? null : link.label)
                          } else {
                            setMobileOpen(false)
                          }
                        }}
                        className={cn(
                          'flex w-full items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-accent transition-colors',
                          isOpen && 'bg-accent'
                        )}
                      >
                        {navLabel(link.label)}
                        {link.children && (
                          <ChevronDown className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')} />
                        )}
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && link.children && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-3 space-y-0.5 overflow-hidden"
                          >
                            {link.children.map((child) => {
                              const Icon = dropdownIcons[child.label] || GraduationCap
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-accent"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  <div className="rounded-md bg-primary/10 p-1.5">
                                    <Icon className="h-3.5 w-3.5 text-primary" />
                                  </div>
                                  {navLabel(child.label)}
                                </Link>
                              )
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
                <div className="pt-4 border-t mt-4">
                  <Button asChild className="w-full rounded-lg">
                    <Link href="/consultation" onClick={() => setMobileOpen(false)}>
                      {t('freeConsultation')}
                    </Link>
                  </Button>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
