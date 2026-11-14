'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Server,
  Smartphone,
  Globe,
  Database,
  ShieldCheck,
  Cpu,
  Code2,
  Users,
  Languages,
  Compass,
  Check,
  type LucideIcon,
} from 'lucide-react'
import SpotlightCard from '@/components/ui/SpotlightCard'
import {
  SKILL_CATEGORIES,
  SKILL_NOTIONS,
  SOFT_SKILLS,
  LANGUAGES,
  INTERESTS,
  type Language,
} from '@/lib/portfolio-data'

interface SkillsProps {
  language: Language
}

const categoryIconMap: Record<string, LucideIcon> = {
  mobile: Smartphone,
  web: Globe,
  'backend-api': Server,
  'data-gis': Database,
  'security-arch': ShieldCheck,
  'devops-ai-tools': Cpu,
}

export default function Skills({ language }: SkillsProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const copy = {
    fr: {
      eyebrow: '04 — Compétences',
      title: 'Compétences',
      legendMastery: 'Maîtrise (production)',
      legendPractice: 'Pratique',
      notionsLabel: 'Notions :',
      supervisionTitle: 'Encadrement & responsabilités',
      languagesTitle: 'Langues pratiquées',
      interestsTitle: 'Centres d’intérêt',
    },
    en: {
      eyebrow: '04 — Skills',
      title: 'Skills',
      legendMastery: 'Core (production)',
      legendPractice: 'Working knowledge',
      notionsLabel: 'Familiar with:',
      supervisionTitle: 'Supervision & mentoring',
      languagesTitle: 'Languages',
      interestsTitle: 'Interests',
    },
  }

  const t = copy[language]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Header + Single Legend */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10 sm:mb-12"
      >
        <div className="space-y-2.5">
          <p className="text-xs font-mono font-semibold tracking-wider text-sky-700 dark:text-sky-300">
            {t.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-sky-500/15 border border-sky-500/35 text-sky-900 dark:text-sky-200 font-semibold">
            {t.legendMastery}
          </span>
          <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/15 text-slate-800 dark:text-slate-200">
            {t.legendPractice}
          </span>
        </div>
      </motion.div>

      {/* 6 Focused Technical Categories (No intro sentences, no repeated internal labels) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        {SKILL_CATEGORIES.map((category, index) => {
          const IconComponent = categoryIconMap[category.id] || Code2

          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.35,
                delay: Math.min(index * 0.04, 0.2),
              }}
              className="flex"
            >
              <SpotlightCard className="w-full p-5 sm:p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-700 dark:text-sky-300 flex items-center justify-center shrink-0">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white">
                    {category.title[language]}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.primary.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-sky-500/15 border border-sky-500/35 text-xs font-mono font-semibold text-sky-900 dark:text-sky-200"
                    >
                      {skill}
                    </span>
                  ))}
                  {category.secondary.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/15 text-xs font-mono text-slate-800 dark:text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          )
        })}
      </div>

      {/* Discreet Notions Line */}
      <div className="mb-10 px-4 py-3 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.02] flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
        <span className="font-mono font-semibold text-slate-900 dark:text-white">
          {t.notionsLabel}
        </span>
        <span className="font-mono">
          {SKILL_NOTIONS.join(' · ')}
        </span>
      </div>

      {/* Bottom Row: Proven Supervision (3 lines), Languages, Compact Interests */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Supervision & Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="lg:col-span-5 flex"
        >
          <SpotlightCard className="w-full p-5 sm:p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-2.5 text-sky-700 dark:text-sky-400">
              <Users className="w-4 h-4 shrink-0" />
              <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white">
                {t.supervisionTitle}
              </h3>
            </div>

            <ul className="space-y-3">
              {SOFT_SKILLS[language].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200 leading-relaxed"
                >
                  <Check className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="lg:col-span-4 flex"
        >
          <SpotlightCard className="w-full p-5 sm:p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-2.5 text-sky-700 dark:text-sky-400">
              <Languages className="w-4 h-4 shrink-0" />
              <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white">
                {t.languagesTitle}
              </h3>
            </div>

            <div className="divide-y divide-slate-200/80 dark:divide-white/10">
              {LANGUAGES.map((langItem) => (
                <div
                  key={langItem.name.fr}
                  className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold font-display text-slate-900 dark:text-white">
                      {langItem.name[language]}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      {langItem.detail[language]}
                    </p>
                  </div>
                  <span className="shrink-0 px-2.5 py-0.5 rounded-md bg-sky-500/15 border border-sky-500/30 text-xs font-mono font-semibold text-sky-900 dark:text-sky-200">
                    {langItem.level[language]}
                  </span>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Compact Interests */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="lg:col-span-3 flex"
        >
          <SpotlightCard className="w-full p-5 sm:p-6 rounded-2xl space-y-3.5">
            <div className="flex items-center gap-2.5 text-sky-700 dark:text-sky-400">
              <Compass className="w-4 h-4 shrink-0" />
              <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white">
                {t.interestsTitle}
              </h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {INTERESTS[language].map((interest) => (
                <span
                  key={interest}
                  className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/15 text-xs font-medium text-slate-800 dark:text-slate-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  )
}
