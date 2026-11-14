'use client'

import { useState, useRef, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowUpRight,
  ExternalLink,
  Smartphone,
  Play,
  Code2,
} from 'lucide-react'
import SpotlightCard from '@/components/ui/SpotlightCard'
import ProjectModal from '@/components/ProjectModal'
import {
  PROJECTS,
  type ProjectItem,
  type Language,
} from '@/lib/portfolio-data'

interface ProjectsProps {
  language: Language
}

type FilterCategory = 'all' | ProjectItem['category']

export default function Projects({ language }: ProjectsProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [selectedCategory, setSelectedCategory] =
    useState<FilterCategory>('all')
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  )

  const copy = {
    fr: {
      eyebrow: '03 - PROJETS & ÉTUDES DE CAS',
      title: 'Systèmes Conçus & Applications Déployées',
      subtitle:
        'Sélection de réalisations terrain, applications mobiles publiées sur Google Play, APIs backend et plateformes collaboratives web.',
      caseStudyCta: 'Étude de cas',
      playStoreBadge: 'Play Store',
      playStoreTitle: 'Voir sur Google Play Store',
      liveTitle: 'Ouvrir la plateforme',
      videoTitle: 'Voir la démo vidéo',
      codeTitle: 'Voir le code source sur GitHub',
      categories: {
        all: 'Tous',
        mobile: 'Mobile & Terrain',
        web: 'Web & ERP',
        backend: 'Backend & APIs',
        automation: 'Automatisation & IA',
      },
    },
    en: {
      eyebrow: '03 - PROJECTS & CASE STUDIES',
      title: 'Engineered Systems & Shipped Applications',
      subtitle:
        'Selected production deliveries across industrial inspection platforms, Google Play mobile apps, secure backend APIs, and full-stack tools.',
      caseStudyCta: 'Case study',
      playStoreBadge: 'Play Store',
      playStoreTitle: 'View on Google Play Store',
      liveTitle: 'Open live platform',
      videoTitle: 'Watch video demo',
      codeTitle: 'View source on GitHub',
      categories: {
        all: 'All',
        mobile: 'Mobile & Field',
        web: 'Web & ERP',
        backend: 'Backend & APIs',
        automation: 'Automation & AI',
      },
    },
  }

  const t = copy[language]

  const categoryTabs = useMemo(() => {
    const keys: FilterCategory[] = [
      'all',
      'mobile',
      'web',
      'backend',
      'automation',
    ]
    return keys
      .map((key) => ({
        key,
        label: t.categories[key],
        count:
          key === 'all'
            ? PROJECTS.length
            : PROJECTS.filter((p) => p.category === key).length,
      }))
      .filter((tab) => tab.count > 0)
  }, [t.categories])

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return PROJECTS
    return PROJECTS.filter((project) => project.category === selectedCategory)
  }, [selectedCategory])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Header + Filter Row */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45 }}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12"
      >
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-400">
            {t.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="flex flex-wrap items-center gap-2"
          role="tablist"
          aria-label={t.title}
        >
          {categoryTabs.map((tab) => {
            const isActive = selectedCategory === tab.key
            return (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(tab.key)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-colors border ${isActive
                    ? 'bg-sky-600 dark:bg-sky-400 text-white dark:text-slate-950 border-transparent'
                    : 'bg-card text-muted-foreground border-border hover:text-foreground hover:bg-muted'
                  }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[10px] ${isActive
                      ? 'bg-white/20 dark:bg-slate-950/15 text-current'
                      : 'bg-muted text-muted-foreground'
                    }`}
                >
                  {tab.count}
                </span>
              </button>
            )
          })}
        </div>
      </motion.div>

      {/* Editorial Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => {
          const visibleTags = project.tags.slice(0, 4)
          const hiddenTagCount = Math.max(
            0,
            project.tags.length - visibleTags.length
          )

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.38,
                delay: Math.min(index * 0.05, 0.3),
              }}
              className="flex"
            >
              <SpotlightCard
                interactive
                onClick={() => setSelectedProject(project)}
                className="w-full p-6 rounded-2xl flex flex-col justify-between gap-5 cursor-pointer group"
              >
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-700 dark:text-sky-300 text-[11px] font-mono font-medium">
                      {project.categoryLabel[language]}
                    </span>

                    {project.playStoreUrl && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-300 text-[11px] font-mono font-medium">
                        <Smartphone className="w-3 h-3" />
                        {t.playStoreBadge}
                      </span>
                    )}
                  </div>

                  {/* Role Context + Title */}
                  <div className="space-y-1.5">
                    <p className="text-xs font-mono text-muted-foreground">
                      {project.roleContext[language]}
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-foreground group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors leading-snug">
                      {project.title[language]}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.summary[language]}
                  </p>
                </div>

                {/* Bottom Tags + Direct Verified Links + Case Study CTA */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {visibleTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-secondary border border-border text-[11px] font-mono text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {hiddenTagCount > 0 && (
                      <span className="px-2 py-1 rounded-md bg-muted text-[11px] font-mono text-muted-foreground">
                        +{hiddenTagCount}
                      </span>
                    )}
                  </div>

                  <div className="pt-3.5 border-t border-border flex items-center justify-between gap-3">
                    {/* Verified External Links (stopPropagation so card drawer doesn't trigger) */}
                    <div className="flex items-center gap-2">
                      {project.playStoreUrl && (
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title={t.playStoreTitle}
                          aria-label={`${project.title[language]} - ${t.playStoreTitle}`}
                          className="p-2 rounded-lg bg-secondary hover:bg-muted border border-border text-emerald-700 dark:text-emerald-400 transition-colors"
                        >
                          <Smartphone className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title={t.liveTitle}
                          aria-label={`${project.title[language]} - ${t.liveTitle}`}
                          className="p-2 rounded-lg bg-secondary hover:bg-muted border border-border text-sky-700 dark:text-sky-400 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.videoUrl && (
                        <a
                          href={project.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title={t.videoTitle}
                          aria-label={`${project.title[language]} - ${t.videoTitle}`}
                          className="p-2 rounded-lg bg-secondary hover:bg-muted border border-border text-foreground transition-colors"
                        >
                          <Play className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title={t.codeTitle}
                          aria-label={`${project.title[language]} - ${t.codeTitle}`}
                          className="p-2 rounded-lg bg-secondary hover:bg-muted border border-border text-foreground transition-colors"
                        >
                          <Code2 className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-sky-700 dark:text-sky-400 group-hover:translate-x-0.5 transition-transform ml-auto">
                      <span>{t.caseStudyCta}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.article>
          )
        })}
      </div>

      {/* Case Study Slide-Over Drawer */}
      <ProjectModal
        project={selectedProject}
        projects={filteredProjects}
        onSelectProject={setSelectedProject}
        onClose={() => setSelectedProject(null)}
        language={language}
      />
    </section>
  )
}
