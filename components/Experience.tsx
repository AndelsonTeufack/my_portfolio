'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Building2,
  Calendar,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  Layers,
} from 'lucide-react'
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
      eyebrow: '02 — EXPÉRIENCES PROFESSIONNELLES',
      title: 'Parcours en Entreprise & Enseignement',
      subtitle:
        'Sept missions concrètes couvrant l’architecture logicielle, le leadership technique terrain, le développement full-stack/mobile et la transmission de compétences.',
      currentBadge: 'Poste actuel',
      workstreamsCount: (count: number) =>
        `${count} chantier${count > 1 ? 's' : ''} détaillé${count > 1 ? 's' : ''}`,
      cta: 'Voir le détail des missions & l’architecture',
    },
    en: {
      eyebrow: '02 — PROFESSIONAL EXPERIENCE',
      title: 'Industry & Teaching Track Record',
      subtitle:
        'Seven hands-on engineering and teaching roles spanning software architecture, field digitalization leadership, full-stack/mobile delivery, and academic mentoring.',
      currentBadge: 'Current Role',
      workstreamsCount: (count: number) =>
        `${count} detailed workstream${count > 1 ? 's' : ''}`,
      cta: 'Explore role & architecture',
    },
  }

  const t = copy[language]

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45 }}
        className="max-w-3xl mb-12 sm:mb-16 space-y-3"
      >
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-400">
          {t.eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground tracking-tight">
          {t.title}
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          {t.subtitle}
        </p>
      </motion.div>

      {/* Editorial Timeline */}
      <div className="relative pl-0 md:pl-8">
        {/* Timeline Vertical Axis (Desktop) */}
        <div
          className="hidden md:block absolute left-3 top-3 bottom-6 w-px bg-border"
          aria-hidden="true"
        />

        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => {
            const visibleTech = exp.technologies.slice(0, 6)
            const hiddenTechCount = Math.max(
              0,
              exp.technologies.length - visibleTech.length
            )

            return (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.36) }}
                className="relative"
              >
                {/* Timeline Marker (Desktop) */}
                <div
                  className={`hidden md:flex absolute -left-8 top-7 w-6 h-6 rounded-full border items-center justify-center z-10 ${
                    exp.isCurrent
                      ? 'bg-emerald-500/15 border-emerald-500 text-emerald-600 dark:text-emerald-400'
                      : 'bg-card border-border text-muted-foreground'
                  }`}
                  aria-hidden="true"
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      exp.isCurrent
                        ? 'bg-emerald-500'
                        : 'bg-sky-600/70 dark:bg-sky-400/70'
                    }`}
                  />
                </div>

                <SpotlightCard
                  interactive
                  onClick={() => setSelectedExperience(exp)}
                  className="p-5 sm:p-7 rounded-2xl cursor-pointer group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8">
                    {/* Left Metadata Column */}
                    <div className="lg:col-span-4 space-y-2.5 lg:border-r lg:border-border lg:pr-6">
                      <div className="flex flex-wrap items-center gap-2">
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-300 text-[11px] font-mono font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            {t.currentBadge}
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary border border-border text-[11px] font-mono text-secondary-foreground">
                          {exp.type[language]}
                        </span>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                          <Building2 className="w-3.5 h-3.5 shrink-0" />
                          <span>{exp.company}</span>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5 shrink-0" />
                          <span>{exp.period[language]}</span>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          <span>{exp.location[language]}</span>
                        </div>
                      </div>

                      <p className="text-xs text-muted-foreground pt-1">
                        {exp.domain[language]}
                      </p>
                    </div>

                    {/* Right Content Column */}
                    <div className="lg:col-span-8 flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors leading-snug">
                            {exp.role[language]}
                          </h3>
                          <span className="hidden sm:inline-flex items-center gap-1 shrink-0 px-2.5 py-1 rounded-md bg-muted text-[11px] font-mono text-muted-foreground">
                            <Layers className="w-3 h-3 text-sky-600 dark:text-sky-400" />
                            {t.workstreamsCount(exp.caseStudy.workstreams.length)}
                          </span>
                        </div>

                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-2">
                          {exp.summary[language]}
                        </p>

                        {/* 3 Key Achievements */}
                        <ul className="space-y-1.5 pt-1">
                          {exp.keyAchievements[language]
                            .slice(0, 3)
                            .map((achievement) => (
                              <li
                                key={achievement}
                                className="flex items-start gap-2 text-sm text-foreground/90"
                              >
                                <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                        </ul>
                      </div>

                      {/* Footer Row: Tech Tags + Drawer CTA */}
                      <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {visibleTech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md bg-secondary border border-border text-xs font-mono text-secondary-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                          {hiddenTechCount > 0 && (
                            <span className="px-2 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-xs font-mono font-medium text-sky-700 dark:text-sky-300">
                              +{hiddenTechCount}
                            </span>
                          )}
                        </div>

                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-sky-700 dark:text-sky-400 group-hover:translate-x-0.5 transition-transform shrink-0">
                          <span>{t.cta}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.article>
            )
          })}
        </div>
      </div>

      {/* Case Study Slide-Over Drawer */}
      <ExperienceDrawer
        experience={selectedExperience}
        experiences={EXPERIENCES}
        onSelectExperience={setSelectedExperience}
        onClose={() => setSelectedExperience(null)}
        language={language}
      />
    </section>
  )
}
