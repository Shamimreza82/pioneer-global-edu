'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, GraduationCap, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NAV_LINKS, SITE_CONFIG } from '@/constants'
import { useTheme } from '@/providers/theme-provider'
import { LanguageSwitcher } from '@/i18n/LanguageSwitcher'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { setTheme, resolvedTheme } = useTheme()
  const t = useTranslations('nav')

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {SITE_CONFIG.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className={cn(
                  'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground',
                  openDropdown === link.label && 'bg-accent'
                )}
              >
                {t(link.label.toLowerCase().replace(/\s+/g, '')) || link.label}
                {link.children && (
                  <ChevronDown className={cn('h-4 w-4 transition-transform', openDropdown === link.label && 'rotate-180')} />
                )}
              </Link>
              {link.children && openDropdown === link.label && (
                <div className="absolute top-full left-0 mt-1 w-56 rounded-lg border bg-popover p-1 shadow-lg">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="flex px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground"
                    >
                      {t(child.label.toLowerCase().replace(/[\s-]+/g, '')) || child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {resolvedTheme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button asChild className="hidden sm:inline-flex">
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

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t lg:hidden overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md hover:bg-accent"
                    onClick={() => !link.children && setMobileOpen(false)}
                  >
                    {t(link.label.toLowerCase().replace(/\s+/g, '')) || link.label}
                    {link.children && (
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform',
                          openDropdown === link.label && 'rotate-180'
                        )}
                      />
                    )}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex px-3 py-2 text-sm rounded-md hover:bg-accent"
                          onClick={() => setMobileOpen(false)}
                        >
                          {t(child.label.toLowerCase().replace(/[\s-]+/g, '')) || child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Button asChild className="w-full">
                  <Link href="/consultation" onClick={() => setMobileOpen(false)}>
                    {t('freeConsultation')}
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
