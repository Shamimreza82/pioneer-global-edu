'use client'

import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()

  const toggleLocale = () => {
    const next = locale === 'en' ? 'bn' : 'en'
    const segments = pathname.split('/')
    if (segments[1] === 'en' || segments[1] === 'bn') {
      segments[1] = next
    } else {
      segments.splice(1, 0, next)
    }
    window.location.href = segments.join('/')
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      className="gap-1.5 px-2"
      aria-label={`Switch to ${locale === 'en' ? 'Bangla' : 'English'}`}
    >
      <Globe className="h-4 w-4" />
      <span className="text-xs font-medium">{locale === 'en' ? 'BN' : 'EN'}</span>
    </Button>
  )
}
