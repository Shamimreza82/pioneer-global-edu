'use client'

import Link from 'next/link'
import { GraduationCap, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG, NAV_LINKS, SERVICES, COUNTRIES } from '@/constants'

const footerLinks = [
  {
    title: 'Quick Links',
    links: NAV_LINKS.filter((l) => !l.children).map((l) => ({ label: l.label, href: l.href })),
  },
  {
    title: 'Services',
    links: SERVICES.slice(0, 5).map((s) => ({ label: s.title, href: `/services/${s.id}` })),
  },
  {
    title: 'Destinations',
    links: COUNTRIES.slice(0, 6).map((c) => ({ label: c.name, href: `/destinations/${c.id}` })),
  },
]

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-sm">
              {SITE_CONFIG.tagline}. We help students achieve their dreams of studying at top universities worldwide.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-primary transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-primary transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold mb-3">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href={SITE_CONFIG.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Facebook
            </a>
            <a href={SITE_CONFIG.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Twitter
            </a>
            <a href={SITE_CONFIG.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href={SITE_CONFIG.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
