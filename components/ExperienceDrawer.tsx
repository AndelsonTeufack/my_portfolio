'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Building2,
  Calendar,
  MapPin,
  Briefcase,
  CheckCircle2,
  Layers,
  TrendingUp,
} from 'lucide-react'
import type { ExperienceItem, Language } from '@/lib/portfolio-data'

interface ExperienceDrawerProps {
  experience: ExperienceItem | null
  experiences: ExperienceItem[]
  onSelectExperience: (experience: ExperienceItem) => void
  onClose: () => void
  language: Language
}

export default function ExperienceDrawer({
  experience,
  experiences,
  onSelectExperience,
  onClose,
  language,
}: ExperienceDrawerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const currentIndex = experience
    ? experiences.findIndex((item) => item.id === experience.id)
    : -1
  const prevExperience =
    currentIndex > 0 ? experiences[currentIndex - 1] : null
  const nextExperience =
    currentIndex >= 0 && currentIndex < experiences.length - 1
      ? experiences[currentIndex + 1]
      : null

  useEffect(() => {
    if (!experience) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft' && prevExperience) {
        onSelectExperience(prevExperience)
      } else if (e.key === 'ArrowRight' && nextExperience) {
        onSelectExperience(nextExperience)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [experience, prevExperience, nextExperience, onClose, onSelectExperience])

  useEffect(() => {
    if (experience && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [experience?.id])

  const copy = {
    fr: {
      back: 'Retour',
      previous: 'Précédente',
      next: 'Suivante',
      closeLabel: 'Fermer le détail de l’expérience',
      currentBadge: 'Poste actuel',
      contextTitle: 'Contexte & Enjeux Organisationnels',
      workstreamsTitle: 'Chantiers Techniques & Livrables',
      deliverablesLabel: 'Livrables clés',
      impactTitle: 'Impact & Résultats Démontrés',
      stackTitle: 'Environnement Technique Complet',
    },
    en: {
      back: 'Back',
      previous: 'Previous',
      next: 'Next',
      closeLabel: 'Close experience details',
      currentBadge: 'Current Role',
      contextTitle: 'Context & Organizational Challenges',
      workstreamsTitle: 'Engineering Workstreams & Deliverables',
      deliverablesLabel: 'Key Deliverables',
      impactTitle: 'Demonstrated Impact & Outcomes',
      stackTitle: 'Full Technical Stack',
    },
  }

  const t = copy[language]

  return (
    <AnimatePresence>
      {experience && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-labelledby="experience-drawer-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 dark:bg-black/75 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Slide-over Panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            className="relative z-10 w-full max-w-2xl h-dvh bg-background border-l border-border shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Sticky Top Bar */}
            <header className="shrink-0 h-16 px-4 sm:px-6 border-b border-border bg-card/95 backdrop-blur-md flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{t.back}</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline font-mono text-xs text-muted-foreground mr-1">
                  {String(currentIndex + 1).padStart(2, '0')} /{' '}
                  {String(experiences.length).padStart(2, '0')}
                </span>

                <button
                  type="button"
                  onClick={() => prevExperience && onSelectExperience(prevExperience)}
                  disabled={!prevExperience}
                  aria-label={t.previous}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-border text-xs font-medium text-foreground hover:bg-muted disabled:opacity-35 disabled:pointer-events-none transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{t.previous}</span>
                </button>

                <button
                  type="button"
                  onClick={() => nextExperience && onSelectExperience(nextExperience)}
                  disabled={!nextExperience}
                  aria-label={t.next}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-border text-xs font-medium text-foreground hover:bg-muted disabled:opacity-35 disabled:pointer-events-none transition-colors"
                >
                  <span className="hidden sm:inline">{t.next}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label={t.closeLabel}
                  className="ml-1 p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </header>

            {/* Scrollable Body */}
            <div
              ref={scrollContainerRef}
              className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 sm:py-8 space-y-8"
            >
              {/* Organization & Role Header */}
              <div className="space-y-4 pb-6 border-b border-border">
                <div className="flex flex-wrap items-center gap-2">
                  {experience.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-300 text-[11px] font-mono font-semibold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {t.currentBadge}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-700 dark:text-sky-300 text-[11px] font-mono font-medium">
                    <Briefcase className="w-3 h-3" />
                    {experience.type[language]}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {experience.domain[language]}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{experience.company}</span>
                  </div>
                  <h2
                    id="experience-drawer-title"
                    className="text-2xl sm:text-3xl font-bold font-display text-foreground leading-tight"
                  >
                    {experience.role[language]}
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    {experience.period[language]}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    {experience.location[language]}
                  </span>
                </div>
              </div>

              {/* Context */}
              <section className="space-y-2.5">
                <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground">
                  {t.contextTitle}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                  {experience.caseStudy.context[language]}
                </p>
              </section>

              {/* Workstreams */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground">
                    {t.workstreamsTitle}
                  </h3>
                </div>

                <div className="space-y-4">
                  {experience.caseStudy.workstreams.map((stream, index) => (
                    <div
                      key={stream.title.fr}
                      className="editorial-surface rounded-xl p-4 sm:p-5 space-y-3"
                    >
                      <div className="flex items-start gap-3">
                        <span className="shrink-0 w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-700 dark:text-sky-300 font-mono text-xs font-bold flex items-center justify-center mt-0.5">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="space-y-1.5">
                          <h4 className="text-base font-semibold font-display text-foreground">
                            {stream.title[language]}
                          </h4>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {stream.description[language]}
                          </p>
                        </div>
                      </div>

                      {stream.deliverables[language].length > 0 && (
                        <div className="pt-2 pl-10">
                          <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
                            {t.deliverablesLabel}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {stream.deliverables[language].map((deliverable) => (
                              <span
                                key={deliverable}
                                className="px-2.5 py-1 rounded-md bg-muted border border-border text-xs text-foreground/90"
                              >
                                {deliverable}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Impact Box */}
              <section className="rounded-xl p-5 bg-emerald-500/5 border border-emerald-500/25 space-y-3">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                  <TrendingUp className="w-4 h-4" />
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-widest">
                    {t.impactTitle}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {experience.caseStudy.impact[language].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Full Technical Stack */}
              <section className="space-y-3 pb-4">
                <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground">
                  {t.stackTitle}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-secondary border border-border text-xs font-mono text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  )
}
