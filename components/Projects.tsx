'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
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

function getStatusBadgeClasses(tone: ProjectItem['statusTone']): string {
  switch (tone) {
    case 'live':
    case 'playstore':
      return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300'
    case 'production':
      return 'bg-sky-500/10 border-sky-500/30 text-sky-700 dark:text-sky-300'
    case 'prototype':
    default:
      return 'bg-slate-100 dark:bg-white/[0.06] border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-300'
  }
}

export default function Projects({ language }: ProjectsProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  )

  const featuredProjects = PROJECTS.filter((p) => p.tier === 'featured')
  const leadProject = featuredProjects[0]
  const secondaryFeatured = featuredProjects.slice(1)
  const compactProjects = PROJECTS.filter((p) => p.tier === 'compact')
  const publishedProjects = PROJECTS.filter((p) => p.tier === 'published')
  const otherProjects = PROJECTS.filter((p) => p.tier === 'other')
  const caseStudyProjects = PROJECTS.filter((p) => p.hasCaseStudy)

  const copy = {
    fr: {
      eyebrow: '03 — Projets',
      title: 'Projets',
      problemSolutionLabel: 'Problème → Solution :',
      resultLabel: 'Résultat :',
      visitSite: 'Voir le site',
      caseStudy: 'Étude de cas',
      fullPage: 'Page dédiée',
      videoDemo: 'Démo vidéo',
      githubCode: 'Code GitHub',
      playStore: 'Play Store',
      publishedTitle: 'Applications publiées sur Google Play',
      contributorSharedBadge: 'Contributeur',
      otherTitle: 'Autres projets',
    },
    en: {
      eyebrow: '03 — Projects',
      title: 'Projects',
      problemSolutionLabel: 'Problem → Solution:',
      resultLabel: 'Result:',
      visitSite: 'Visit site',
      caseStudy: 'Case study',
      fullPage: 'Full page',
      videoDemo: 'Video demo',
      githubCode: 'GitHub code',
      playStore: 'Play Store',
      publishedTitle: 'Published on Google Play',
      contributorSharedBadge: 'Contributor',
      otherTitle: 'Other projects',
    },
  }

  const t = copy[language]

  const renderActionButtons = (project: ProjectItem) => (
    <div className="flex flex-wrap items-center gap-2.5 pt-1">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 dark:bg-sky-400 dark:hover:bg-sky-300 text-white dark:text-slate-950 text-xs font-semibold transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>{t.visitSite}</span>
        </a>
      )}

      {project.playStoreUrl && (
        <a
          href={project.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-slate-950 text-xs font-semibold transition-colors"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>{t.playStore}</span>
        </a>
      )}

      {project.videoUrl && (
        <a
          href={project.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary hover:bg-muted border border-border text-xs font-medium text-foreground transition-colors"
        >
          <Play className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
          <span>{t.videoDemo}</span>
        </a>
      )}

      {project.codeUrl && (
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary hover:bg-muted border border-border text-xs font-medium text-foreground transition-colors"
        >
          <Code2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
          <span>{t.githubCode}</span>
        </a>
      )}

      {project.hasCaseStudy && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            setSelectedProject(project)
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-border bg-card hover:bg-muted text-xs font-mono font-semibold text-sky-700 dark:text-sky-300 transition-colors cursor-pointer"
        >
          <span>{t.caseStudy}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      )}

      <Link
        href={`/projets/${project.id}`}
        onClick={(e) => e.stopPropagation()}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-secondary/70 hover:bg-muted text-xs font-mono font-medium text-foreground transition-colors"
      >
        <span>{t.fullPage}</span>
        <ExternalLink className="w-3 h-3 text-sky-600 dark:text-sky-400" />
      </Link>
    </div>
  )

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="mb-10 sm:mb-12 space-y-2.5"
      >
        <p className="text-xs font-mono font-semibold tracking-wider text-sky-700 dark:text-sky-300">
          {t.eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
          {t.title}
        </h2>
      </motion.div>

      <div className="space-y-8">
        {/* #1 Featured Lead Project: Full-width editorial split */}
        {leadProject && (
          <motion.article
            initial={{ opacity: 1, y: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <SpotlightCard
              interactive={Boolean(leadProject.hasCaseStudy)}
              onClick={
                leadProject.hasCaseStudy
                  ? () => setSelectedProject(leadProject)
                  : undefined
              }
              className="p-6 sm:p-8 rounded-2xl border-sky-500/35 dark:border-sky-400/30 cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/15 text-[11px] font-mono font-medium text-slate-800 dark:text-slate-200">
                    {leadProject.roleBadge[language]}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-semibold ${getStatusBadgeClasses(
                      leadProject.statusTone
                    )}`}
                  >
                    {leadProject.statusBadge[language]}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors">
                    <Link
                      href={`/projets/${leadProject.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="hover:underline underline-offset-4"
                    >
                      {leadProject.title[language]}
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed max-w-4xl">
                    {leadProject.summary[language]}
                  </p>
                </div>

                {(leadProject.problemSolution || leadProject.resultSummary) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm leading-relaxed pt-1">
                    {leadProject.problemSolution && (
                      <p className="text-slate-700 dark:text-slate-200 border-l-2 border-sky-500/40 pl-3.5 py-0.5">
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {t.problemSolutionLabel}{' '}
                        </span>
                        {leadProject.problemSolution[language]}
                      </p>
                    )}
                    {leadProject.resultSummary && (
                      <p className="text-slate-700 dark:text-slate-300 border-l-2 border-emerald-500/40 pl-3.5 py-0.5">
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {t.resultLabel}{' '}
                        </span>
                        {leadProject.resultSummary[language]}
                      </p>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-200/80 dark:border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {leadProject.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/12 text-xs font-mono font-medium text-slate-800 dark:text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {renderActionButtons(leadProject)}
                </div>
              </div>
            </SpotlightCard>
          </motion.article>
        )}

        {/* #2 & #3 Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {secondaryFeatured.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 1, y: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 + index * 0.06 }}
              className="flex"
            >
              <SpotlightCard
                interactive={Boolean(project.hasCaseStudy)}
                onClick={
                  project.hasCaseStudy
                    ? () => setSelectedProject(project)
                    : undefined
                }
                className="w-full p-6 rounded-2xl flex flex-col justify-between gap-5 cursor-pointer group"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/15 text-[11px] font-mono font-medium text-slate-800 dark:text-slate-200">
                      {project.roleBadge[language]}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-semibold ${getStatusBadgeClasses(
                        project.statusTone
                      )}`}
                    >
                      {project.statusBadge[language]}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors">
                      <Link
                        href={`/projets/${project.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="hover:underline underline-offset-4"
                      >
                        {project.title[language]}
                      </Link>
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                      {project.summary[language]}
                    </p>
                  </div>

                  {(project.problemSolution || project.resultSummary) && (
                    <div className="space-y-1.5 text-sm leading-relaxed border-l-2 border-sky-500/40 pl-3 py-0.5">
                      {project.problemSolution && (
                        <p className="text-slate-700 dark:text-slate-200">
                          <span className="font-semibold text-slate-900 dark:text-white">
                            {t.problemSolutionLabel}{' '}
                          </span>
                          {project.problemSolution[language]}
                        </p>
                      )}
                      {project.resultSummary && (
                        <p className="text-slate-600 dark:text-slate-300">
                          <span className="font-semibold text-slate-900 dark:text-white">
                            {t.resultLabel}{' '}
                          </span>
                          {project.resultSummary[language]}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-200/80 dark:border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/12 text-xs font-mono font-medium text-slate-800 dark:text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {renderActionButtons(project)}
                </div>
              </SpotlightCard>
            </motion.article>
          ))}
        </div>

        {/* #4 & #5 Compact Row: MomoKash & TaillorPro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {compactProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 1, y: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.38, delay: 0.14 + index * 0.05 }}
              className="flex"
            >
              <SpotlightCard
                interactive={Boolean(project.hasCaseStudy)}
                onClick={
                  project.hasCaseStudy
                    ? () => setSelectedProject(project)
                    : undefined
                }
                className={`w-full p-5 sm:p-6 rounded-2xl flex flex-col justify-between gap-4 ${
                  project.hasCaseStudy ? 'cursor-pointer group' : ''
                }`}
              >
                <div className="space-y-3.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/15 text-[11px] font-mono font-medium text-slate-800 dark:text-slate-200">
                      {project.roleBadge[language]}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-semibold ${getStatusBadgeClasses(
                        project.statusTone
                      )}`}
                    >
                      {project.statusBadge[language]}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors">
                      <Link
                        href={`/projets/${project.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="hover:underline underline-offset-4"
                      >
                        {project.title[language]}
                      </Link>
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                      {project.summary[language]}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-200/80 dark:border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/12 text-xs font-mono font-medium text-slate-800 dark:text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {renderActionButtons(project)}
                </div>
              </SpotlightCard>
            </motion.article>
          ))}
        </div>

        {/* #6 Published Google Play Group (MULEMA + Shikaku) */}
        {publishedProjects.length > 0 && (
          <div className="space-y-4 pt-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white">
                {t.publishedTitle}
              </h3>
              <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/15 text-xs font-mono font-medium text-slate-800 dark:text-slate-200">
                {t.contributorSharedBadge}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {publishedProjects.map((project) => (
                <article key={project.id} className="flex">
                  <SpotlightCard className="w-full p-5 sm:p-6 rounded-2xl flex flex-col justify-between gap-4">
                    <div className="space-y-3.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/15 text-[11px] font-mono font-medium text-slate-800 dark:text-slate-200">
                          {project.roleBadge[language]}
                        </span>
                        <span
                          className={`px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-semibold ${getStatusBadgeClasses(
                            project.statusTone
                          )}`}
                        >
                          {project.statusBadge[language]}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <h4 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white">
                          <Link
                            href={`/projets/${project.id}`}
                            className="hover:text-sky-700 dark:hover:text-sky-400 hover:underline underline-offset-4 transition-colors"
                          >
                            {project.title[language]}
                          </Link>
                        </h4>
                        <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                          {project.summary[language]}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2 border-t border-slate-200/80 dark:border-white/10">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/12 text-xs font-mono font-medium text-slate-800 dark:text-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {renderActionButtons(project)}
                    </div>
                  </SpotlightCard>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Discreet Other Projects Row (Vote IAI, Gestion locative) */}
        {otherProjects.length > 0 && (
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
              {t.otherTitle}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="editorial-surface rounded-xl p-4 sm:p-5 flex flex-col justify-between gap-3"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-bold font-display text-slate-900 dark:text-white">
                        <Link
                          href={`/projets/${project.id}`}
                          className="hover:text-sky-700 dark:hover:text-sky-400 hover:underline underline-offset-4 transition-colors"
                        >
                          {project.title[language]}
                        </Link>
                      </h4>
                      <div className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/15 text-[11px] font-mono text-slate-700 dark:text-slate-300">
                          {project.roleBadge[language]}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full border text-[11px] font-mono ${getStatusBadgeClasses(
                            project.statusTone
                          )}`}
                        >
                          {project.statusBadge[language]}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {project.summary[language]}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200/80 dark:border-white/10">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/12 text-xs font-mono text-slate-800 dark:text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-sky-700 dark:text-sky-300 hover:underline"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>{t.githubCode}</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Case Study Slide-Over Drawer */}
      <ProjectModal
        project={selectedProject}
        projects={caseStudyProjects}
        onSelectProject={setSelectedProject}
        onClose={() => setSelectedProject(null)}
        language={language}
      />
    </section>
  )
}
