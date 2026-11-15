'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Smartphone,
  Play,
  Code2,
  CheckCircle2,
  Target,
  Cpu,
  Lock,
} from 'lucide-react'
import type { ProjectItem, Language } from '@/lib/portfolio-data'

interface ProjectModalProps {
  project: ProjectItem | null
  projects: ProjectItem[]
  onSelectProject: (project: ProjectItem) => void
  onClose: () => void
  language: Language
}

export default function ProjectModal({
  project,
  projects,
  onSelectProject,
  onClose,
  language,
}: ProjectModalProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const currentIndex = project
    ? projects.findIndex((item) => item.id === project.id)
    : -1
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject =
    currentIndex >= 0 && currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null

  useEffect(() => {
    if (!project) return

    const previousBodyOverflow = document.body.style.overflow
    const previousHtmlOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft' && prevProject) {
        onSelectProject(prevProject)
      } else if (e.key === 'ArrowRight' && nextProject) {
        onSelectProject(nextProject)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousHtmlOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, prevProject, nextProject, onClose, onSelectProject])

  useEffect(() => {
    if (project?.id && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [project?.id])

  const copy = {
    fr: {
      back: 'Retour',
      previous: 'Précédent',
      next: 'Suivant',
      closeLabel: 'Fermer l’étude de cas',
      problemTitle: 'Problématique & contexte',
      architectureTitle: 'Architecture & choix techniques',
      highlightsTitle: 'Réalisations & résultats',
      stackTitle: 'Technologies utilisées',
      linksTitle: 'Accès & livrables',
      standalonePage: 'Ouvrir la page dédiée',
      playStore: 'Google Play Store',
      liveDemo: 'Voir le site',
      videoDemo: 'Voir la démo vidéo',
      sourceCode: 'Code GitHub',
      confidentialNote:
        'Application d’entreprise ou soumise à confidentialité client : les noms de sites et données sensibles sont masqués ; l’architecture et le périmètre technique restent détaillés ci-dessous.',
    },
    en: {
      back: 'Back',
      previous: 'Previous',
      next: 'Next',
      closeLabel: 'Close case study',
      problemTitle: 'Problem statement & context',
      architectureTitle: 'Architecture & technical choices',
      highlightsTitle: 'Deliverables & outcomes',
      stackTitle: 'Technologies used',
      linksTitle: 'Links & deliverables',
      standalonePage: 'Open dedicated page',
      playStore: 'Google Play Store',
      liveDemo: 'Visit site',
      videoDemo: 'Watch video demo',
      sourceCode: 'GitHub code',
      confidentialNote:
        'Enterprise or client-confidential system: site identifiers and sensitive client details are redacted while architectural decisions and workflows are documented below.',
    },
  }

  const t = copy[language]

  const hasAnyLink = Boolean(
    project?.playStoreUrl ||
    project?.liveUrl ||
    project?.videoUrl ||
    project?.codeUrl
  )

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-drawer-title"
          data-lenis-prevent
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

          {/* Slide-over Case Study Panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            className="relative z-10 w-full max-w-2xl h-dvh bg-background border-l border-border shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Sticky Header Bar */}
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
                  {String(projects.length).padStart(2, '0')}
                </span>

                <button
                  type="button"
                  onClick={() => prevProject && onSelectProject(prevProject)}
                  disabled={!prevProject}
                  aria-label={t.previous}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-border text-xs font-medium text-foreground hover:bg-muted disabled:opacity-35 disabled:pointer-events-none transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{t.previous}</span>
                </button>

                <button
                  type="button"
                  onClick={() => nextProject && onSelectProject(nextProject)}
                  disabled={!nextProject}
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
              data-lenis-prevent
              className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 sm:px-8 py-6 sm:py-8 space-y-8"
            >
              {/* Title Context */}
              <div className="space-y-4 pb-6 border-b border-border">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/15 text-xs font-mono font-medium text-foreground">
                    {project.roleBadge[language]}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-700 dark:text-sky-300 text-xs font-mono font-semibold">
                    {project.statusBadge[language]}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {project.roleContext[language]}
                  </span>
                </div>

                <h2
                  id="project-drawer-title"
                  className="text-2xl sm:text-3xl font-bold font-display text-foreground leading-tight"
                >
                  {project.title[language]}
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {project.summary[language]}
                </p>
              </div>

              {/* Action Links or Confidentiality Note */}
              <section className="space-y-3">
                <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground">
                  {t.linksTitle}
                </h3>

                {hasAnyLink ? (
                  <div className="flex flex-wrap gap-3">
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-semibold text-xs sm:text-sm transition-colors"
                      >
                        <Smartphone className="w-4 h-4" />
                        <span>{t.playStore}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 dark:bg-sky-400 dark:hover:bg-sky-300 text-white dark:text-slate-950 font-semibold text-xs sm:text-sm transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{t.liveDemo}</span>
                      </a>
                    )}

                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary hover:bg-muted border border-border text-foreground font-semibold text-xs sm:text-sm transition-colors"
                      >
                        <Play className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                        <span>{t.videoDemo}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                      </a>
                    )}

                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary hover:bg-muted border border-border text-foreground font-semibold text-xs sm:text-sm transition-colors"
                      >
                        <Code2 className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                        <span>{t.sourceCode}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                      </a>
                    )}

                    <Link
                      href={`/projets/${project.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary hover:bg-muted border border-border text-foreground font-semibold text-xs sm:text-sm transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                      <span>{t.standalonePage}</span>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-muted/60 border border-border text-xs sm:text-sm text-muted-foreground">
                      <Lock className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                      <span>{t.confidentialNote}</span>
                    </div>
                    <div>
                      <Link
                        href={`/projets/${project.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary hover:bg-muted border border-border text-foreground font-semibold text-xs sm:text-sm transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                        <span>{t.standalonePage}</span>
                      </Link>
                    </div>
                  </div>
                )}
              </section>

              {/* Problem Statement */}
              <section className="editorial-surface rounded-xl p-5 space-y-2.5">
                <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400">
                  <Target className="w-4 h-4" />
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-widest">
                    {t.problemTitle}
                  </h3>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                  {project.problemStatement[language]}
                </p>
              </section>

              {/* Architecture Notes */}
              <section className="editorial-surface rounded-xl p-5 space-y-2.5">
                <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400">
                  <Cpu className="w-4 h-4" />
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-widest">
                    {t.architectureTitle}
                  </h3>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                  {project.architectureNotes[language]}
                </p>
              </section>

              {/* Highlights */}
              <section className="space-y-3">
                <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground">
                  {t.highlightsTitle}
                </h3>
                <ul className="space-y-2.5">
                  {project.highlights[language].map((item) => (
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

              {/* Tech Stack */}
              <section className="space-y-3 pb-4">
                <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground">
                  {t.stackTitle}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-secondary border border-border text-xs font-mono text-secondary-foreground"
                    >
                      {tag}
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
