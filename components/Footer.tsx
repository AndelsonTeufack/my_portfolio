'use client'

import { useState, useEffect } from 'react'
import { ArrowUp, Clock, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { PORTFOLIO_PROFILE, type Language } from '@/lib/portfolio-data'
import { getCurrentYear } from '@/lib/utils'

interface FooterProps {
  language: Language
}

export default function Footer({ language }: FooterProps) {
  const [doualaTime, setDoualaTime] = useState<string>('--:--:--')
  const currentYear = getCurrentYear()

  useEffect(() => {
    const formatTime = () => {
      try {
        return new Intl.DateTimeFormat('fr-FR', {
          timeZone: 'Africa/Douala',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date())
      } catch {
        return '--:--:--'
      }
    }

    setDoualaTime(formatTime())
    const interval = setInterval(() => {
      setDoualaTime(formatTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const copy = {
    fr: {
      tagline:
        'Développeur Full-Stack & Mobile · Applications terrain, Web & ERP · Douala, Cameroun',
      backToTop: 'Haut de page',
      rights: 'Tous droits réservés.',
      localTimeLabel: 'Douala (GMT+1)',
      nav: [
        { href: '#about', label: 'À propos' },
        { href: '#experience', label: 'Expériences' },
        { href: '#projects', label: 'Projets' },
        { href: '#skills', label: 'Compétences' },
        { href: '#contact', label: 'Contact' },
      ],
    },
    en: {
      tagline:
        'Full-Stack & Mobile Developer · Field Apps, Web Platforms & ERP · Douala, Cameroon',
      backToTop: 'Back to top',
      rights: 'All rights reserved.',
      localTimeLabel: 'Douala (GMT+1)',
      nav: [
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contact' },
      ],
    },
  }

  const t = copy[language]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border bg-card/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Top Editorial Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-md">
            <span className="inline-block font-display font-bold text-base text-foreground">
              {PORTFOLIO_PROFILE.fullName}
            </span>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {t.tagline}
            </p>
          </div>

          {/* Section Links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label={t.backToTop}
            className="self-start md:self-auto inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border bg-secondary hover:bg-muted text-xs font-mono font-medium text-foreground transition-colors"
          >
            <span>{t.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Metadata Row */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {currentYear} {PORTFOLIO_PROFILE.fullName}. {t.rights}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-mono">
              <Clock className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span>{t.localTimeLabel}:</span>
              <span className="text-foreground font-semibold tabular-nums">
                {doualaTime}
              </span>
            </span>

            <div className="flex items-center gap-2">
              <a
                href={`mailto:${PORTFOLIO_PROFILE.contact.email}`}
                aria-label="Email"
                className="p-2 rounded-lg border border-border bg-secondary hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
              <a
                href={PORTFOLIO_PROFILE.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg border border-border bg-secondary hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaGithub className="w-3.5 h-3.5" />
              </a>
              <a
                href={PORTFOLIO_PROFILE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg border border-border bg-secondary hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaLinkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
