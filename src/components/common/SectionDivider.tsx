export function WaveDivider({ flip }: { flip?: boolean }) {
  return (
    <div className={`relative -mt-1 ${flip ? 'rotate-180' : ''}`}>
      <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
        <path d="M0 30 Q360 60 720 30 Q1080 0 1440 30 V60 H0 V30Z" className="fill-muted/30" />
      </svg>
    </div>
  )
}

export function BlobDivider() {
  return (
    <div className="relative -mt-1 overflow-hidden h-16">
      <svg viewBox="0 0 1440 64" fill="none" className="w-full h-auto absolute bottom-0">
        <path d="M0 40 C360 80 1080 0 1440 40 V64 H0 V40Z" className="fill-muted/20" />
      </svg>
    </div>
  )
}
