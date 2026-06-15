'use client'

import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface WhatsAppButtonProps {
  phone?: string
  message?: string
  className?: string
}

export function WhatsAppButton({
  phone = '+15551234567',
  message = 'Hi! I would like to know more about studying abroad.',
  className,
}: WhatsAppButtonProps) {
  const url = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl',
        className
      )}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
