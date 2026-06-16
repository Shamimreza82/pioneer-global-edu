# Pioneer Global Edu

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + `tw-animate-css`
- **UI:** shadcn/ui (Base UI), lucide-react icons
- **Forms:** react-hook-form + zod
- **Internationalization:** next-intl (en, bn)
- **Animation:** framer-motion, swiper
- **Data Fetching:** @tanstack/react-query + axios

## Project Structure
```
src/
  app/[locale]/      - Route pages (about, admin, blogs, contact, etc.)
  components/
    common/          - Shared UI (WhatsAppButton, ScrollToTop, SectionWrapper)
    forms/           - Form components (ConsultationForm)
    layouts/         - Navbar, Footer
    sections/        - Page sections (Hero, StatsSection, PhotoGallery, etc.)
    ui/              - shadcn/ui primitives
  constants/         - SITE_CONFIG, IMAGES, NAV_LINKS, SERVICES, etc.
  hooks/             - Custom React hooks
  i18n/              - next-intl routing & request config
  lib/               - Utility functions
  providers/         - React context providers
  schemas/           - Zod validation schemas
  services/          - API service layer
  types/             - TypeScript interfaces
messages/
  en.json            - English translations
  bn.json            - Bengali translations
public/
  assat/
    slider/          - Hero carousel images
    founder/         - Team/founder images
    advisor/         - Academic advisor image
    gallary/         - Photo gallery images
```

## Conventions
- `@/` path alias maps to `src/`
- Use `next-intl` `useTranslations()` for all user-facing strings
- Keep components in the most specific directory (sections, forms, common)
- Use `<img>` tag for local `.jpeg` files in `public/assat/` (not `next/image`)
- Local images live in `public/assat/` (note: "gallary" is a typo, not "gallery")
- Locale messages in `messages/` mirror the component structure

## Image Usage Map
| Folder | Used In | Purpose |
|--------|---------|---------|
| `slider/` | `Hero.tsx` (3 slides) | Hero carousel backgrounds |
| `founder/` | `AboutContent.tsx` team section | 4 team member photos |
| `advisor/` | `AboutContent.tsx` advisor section | Academic advisor (Dr. Md. Kamruzzaman) |
| `gallary/` | `PhotoGallery.tsx` on homepage, story section | Photo gallery grid |

Key image constant: `src/constants/index.ts` → `IMAGES` object maps all image paths.
WhatsApp default: `+8801571-402416` (set in `WhatsAppButton.tsx` and `layout.tsx`).

## Page Pattern
```tsx
// Every page uses Suspense + dynamic imports for sections
const Section = dynamic(() => import('@/components/sections/Section').then(m => ({ default: m.Section })))
// Then: <Suspense fallback={<SectionFallback />}><Section /></Suspense>
```

## Component Pattern
```tsx
'use client'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '@/components/common/SectionWrapper'

export function MyComponent() {
  const t = useTranslations('mySection')
  return <AnimatedSection>...</AnimatedSection>
}
```

## Key Commands
- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run lint` - Run ESLint

## Contact Info (Gazipur Branch)
- Office: Pioneer Global Edu, Mist mor, Duet Gate, Gazipur Mohanagar, Gazipur
- Email: pge.edu1@gmail.com
- Phone: 01571-402416 / 01511-677134
- WhatsApp: +8801571-402416
