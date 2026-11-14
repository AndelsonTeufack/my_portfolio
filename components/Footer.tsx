'use client'

import { ArrowUp, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import BrandLogo from '@/components/ui/BrandLogo'
import { PORTFOLIO_PROFILE, type Language } from '@/lib/portfolio-data'
import { getCurrentYear } from '@/lib/utils'

interface FooterProps {
  language: Language
}

export default function Footer({ language }: FooterProps) {
  const currentYear = getCurrentYear()

  const copy = {
    fr: {
      tagline:
        'Développeur Full-Stack & Mobile · Applications terrain, Web & ERP · Douala, Cameroun',
      backToTop: 'Haut de page',
      emailAriaLabel: `Envoyer un email à ${PORTFOLIO_PROFILE.fullName}`,
      githubAriaLabel: `GitHub — ${PORTFOLIO_PROFILE.fullName}`,
      linkedinAriaLabel: `LinkedIn — ${PORTFOLIO_PROFILE.fullName}`,
    },
    en: {
      tagline:
        'Full-Stack & Mobile Developer · Field Apps, Web Platforms & ERP · Douala, Cameroon',
      backToTop: 'Back to top',
      emailAriaLabel: `Send an email to ${PORTFOLIO_PROFILE.fullName}`,
      githubAriaLabel: `GitHub — ${PORTFOLIO_PROFILE.fullName}`,
      linkedinAriaLabel: `LinkedIn — ${PORTFOLIO_PROFILE.fullName}`,
    },
  }

  const t = copy[language]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border bg-card/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Top Row: Identity + Back to Top */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-lg">
            <div className="flex items-center gap-2.5">
              <BrandLogo className="w-8 h-8 shrink-0" />
              <span className="font-display font-bold text-base text-foreground">
                {PORTFOLIO_PROFILE.fullName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.tagline}
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label={t.backToTop}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-secondary hover:bg-muted text-xs font-mono font-medium text-foreground transition-colors cursor-pointer"
          >
            <span>{t.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Metadata Row */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-300">
          <p>
            © {currentYear} {PORTFOLIO_PROFILE.fullName}
          </p>

          <div className="flex items-center gap-2.5">
            <a
              href={`mailto:${PORTFOLIO_PROFILE.contact.email}`}
              aria-label={t.emailAriaLabel}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-border bg-secondary hover:bg-muted text-slate-700 dark:text-slate-200 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_PROFILE.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.githubAriaLabel}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-border bg-secondary hover:bg-muted text-slate-700 dark:text-slate-200 hover:text-foreground transition-colors"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_PROFILE.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.linkedinAriaLabel}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-border bg-secondary hover:bg-muted text-slate-700 dark:text-slate-200 hover:text-foreground transition-colors"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
