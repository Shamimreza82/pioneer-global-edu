'use client'

import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface WhatsAppButtonProps {
  phone?: string
  message?: string
  className?: string
}

export function WhatsAppButton({
  phone = '+8801571-402416',
  message = 'Hi! I would like to know more about studying abroad.',
  className,
}: WhatsAppButtonProps) {
  const waUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`

  const handleClick = () => {
    window.open(waUrl, '_blank')
  }

  return (
    <div className={cn('fixed bottom-20 right-6 z-50 flex flex-col items-center gap-2', className)}>
      <span className="text-xs font-medium text-muted-foreground bg-background/80 backdrop-blur px-2 py-1 rounded-full shadow-sm animate-pulse">
        Chat with us
      </span>
      <button
        onClick={handleClick}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-bounce cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle className="h-7 w-7 relative z-10" />
      </button>
    </div>
  )
}
