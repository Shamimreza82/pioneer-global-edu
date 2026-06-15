'use client'

import { usePathname, useRouter } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import { useTransition } from 'react'
import { Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const toggleLocale = () => {
    const next = locale === 'en' ? 'bn' : 'en'
    startTransition(() => {
      router.replace(pathname, { locale: next })
    })
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      disabled={isPending}
      className="gap-1.5 px-2"
      aria-label={`Switch to ${locale === 'en' ? 'Bangla' : 'English'}`}
    >
      <Globe className="h-4 w-4" />
      <span className="text-xs font-medium">{locale === 'en' ? 'BN' : 'EN'}</span>
    </Button>
  )
}
