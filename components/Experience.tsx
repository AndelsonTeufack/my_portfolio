'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SpotlightCard from '@/components/ui/SpotlightCard'
import ExperienceDrawer from '@/components/ExperienceDrawer'
import {
  EXPERIENCES,
  type ExperienceItem,
  type Language,
} from '@/lib/portfolio-data'

interface ExperienceProps {
  language: Language
}

export default function Experience({ language }: ExperienceProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceItem | null>(null)

  const copy = {
    fr: {
      eyebrow: '02 — Expériences',
      title: 'Expériences',
      currentBadge: 'Poste actuel',
      detailsCta: 'Détails',
    },
    en: {
      eyebrow: '02 — Experience',
      title: 'Experience',
      currentBadge: 'Current role',
      detailsCta: 'Details',
    },
  }

  const t = copy[language]

  const formatMeta = (exp: ExperienceItem) => {
    const parts = [exp.company]
    if (exp.location[language]) {
      parts.push(exp.location[language])
    }
    parts.push(exp.period[language])
    return parts.join(' · ')
  }

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
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

      {/* Single-Column Employer List */}
      <div className="space-y-5">
        {EXPERIENCES.map((exp, index) => {
          const isFeatured = Boolean(exp.isFeatured)
          const hasDetails = Boolean(exp.caseStudy)
          const hasFooter = exp.technologies.length > 0 || hasDetails

          return (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: Math.min(index * 0.06, 0.24) }}
            >
              <SpotlightCard
                interactive={hasDetails}
                onClick={hasDetails ? () => setSelectedExperience(exp) : undefined}
                className={`rounded-2xl transition-colors ${
                  isFeatured
                    ? 'p-6 sm:p-8 border-sky-500/35 dark:border-sky-400/30'
                    : 'p-5 sm:p-6'
                } ${hasDetails ? 'cursor-pointer group' : ''}`}
              >
                <div className="space-y-4">
                  {/* Card Header: Title + Optional Current Badge + Single Meta Line */}
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3
                        className={`font-bold font-display text-slate-900 dark:text-white leading-snug ${
                          isFeatured
                            ? 'text-xl sm:text-2xl group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors'
                            : 'text-lg sm:text-xl'
                        }`}
                      >
                        {exp.role[language]}
                      </h3>

                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-[11px] font-mono font-semibold shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {t.currentBadge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-300">
                      {formatMeta(exp)}
                    </p>
                  </div>

                  {/* Impact / Action Bullets */}
                  <ul className="space-y-2 text-sm sm:text-[15px] text-slate-700 dark:text-slate-200 leading-relaxed">
                    {exp.keyAchievements[language].map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-sky-600 dark:bg-sky-400 mt-2 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer: Only when technologies or details drawer exist */}
                  {hasFooter && (
                    <div className="pt-3 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/12 text-xs font-mono font-medium text-slate-800 dark:text-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {hasDetails && (
                        <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-sky-700 dark:text-sky-400 group-hover:translate-x-0.5 transition-transform ml-auto">
                          <span>{t.detailsCta}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </SpotlightCard>
            </motion.article>
          )
        })}
      </div>

      {/* Details Slide-Over Drawer (only for entries with caseStudy) */}
      <ExperienceDrawer
        experience={selectedExperience}
        experiences={EXPERIENCES.filter((exp) => Boolean(exp.caseStudy))}
        onSelectExperience={setSelectedExperience}
        onClose={() => setSelectedExperience(null)}
        language={language}
      />
    </section>
  )
}
