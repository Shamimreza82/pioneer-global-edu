import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { Providers } from '@/providers'
import { Navbar } from '@/components/layouts/Navbar'
import { Footer } from '@/components/layouts/Footer'
import { ScrollToTop } from '@/components/common/ScrollToTop'
import { WhatsAppButton } from '@/components/common/WhatsAppButton'
import { SmoothScroll } from '@/components/common/SmoothScroll'
import { notFound } from 'next/navigation'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'site' })
  return {
    title: `${t('name')} - ${t('tagline')}`,
    description: t('description'),
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!routing.locales.includes(locale as 'en' | 'bn')) notFound()

  const messages = await getMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Providers>
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
          <ScrollToTop />
          <WhatsAppButton phone={process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '+15551234567'} />
        </SmoothScroll>
      </Providers>
    </NextIntlClientProvider>
  )
}
