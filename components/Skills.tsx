'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Server,
  Smartphone,
  Database,
  ShieldCheck,
  Cloud,
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
  SOFT_SKILLS,
  LANGUAGES,
  INTERESTS,
  type Language,
} from '@/lib/portfolio-data'

interface SkillsProps {
  language: Language
}

const categoryIconMap: Record<string, LucideIcon> = {
  'languages-backend': Server,
  'frontend-mobile': Smartphone,
  'databases-gis': Database,
  'architecture-security': ShieldCheck,
  'cloud-devops-qa': Cloud,
  'ai-it-tools': Cpu,
}

export default function Skills({ language }: SkillsProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const copy = {
    fr: {
      eyebrow: '04 — COMPÉTENCES & LANGUES',
      title: 'Matrice Technique, Méthodes & Langues',
      subtitle:
        'Un socle d’ingénierie structuré autour du développement applicatif critique, de l’architecture sécurisée, des données et des outils terrain.',
      legendPrimary: 'Maîtrise principale',
      legendSecondary: 'Écosystème & outils complémentaires',
      primaryLabel: 'Socle principal',
      secondaryLabel: 'Écosystème',
      softSkillsTitle: 'Compétences Comportementales & Leadership',
      softSkillsSubtitle:
        'Mobilisées au quotidien en pilotage technique, enseignement et coordination d’équipes terrain.',
      languagesTitle: 'Langues Pratiquées',
      interestsTitle: 'Centres d’Intérêt',
    },
    en: {
      eyebrow: '04 — SKILLS & LANGUAGES',
      title: 'Engineering Matrix, Soft Skills & Languages',
      subtitle:
        'A structured engineering toolkit spanning mission-critical applications, secure APIs, relational/spatial data, DevOps, and AI-assisted systems.',
      legendPrimary: 'Primary Stack',
      legendSecondary: 'Ecosystem & Supporting Tools',
      primaryLabel: 'Core Stack',
      secondaryLabel: 'Ecosystem',
      softSkillsTitle: 'Behavioral Skills & Technical Leadership',
      softSkillsSubtitle:
        'Applied daily across technical leadership, developer mentoring, and field engineering.',
      languagesTitle: 'Languages',
      interestsTitle: 'Interests',
    },
  }

  const t = copy[language]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Header + Legend */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45 }}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14"
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

        {/* Visual Hierarchy Legend */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground shrink-0">
          <span className="inline-flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-sky-500/20 border border-sky-600/50 dark:border-sky-400/50" />
            <span>{t.legendPrimary}</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-secondary border border-border" />
            <span>{t.legendSecondary}</span>
          </span>
        </div>
      </motion.div>

      {/* 6 Technical Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {SKILL_CATEGORIES.map((category, index) => {
          const IconComponent = categoryIconMap[category.id] || Code2

          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.05, 0.25),
              }}
              className="flex"
            >
              <SpotlightCard className="w-full p-6 rounded-2xl flex flex-col justify-between gap-5">
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-700 dark:text-sky-400 flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold font-display text-foreground leading-snug">
                        {category.title[language]}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {category.description[language]}
                      </p>
                    </div>
                  </div>

                  {/* Primary Skills */}
                  <div className="space-y-2 pt-1">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-400 font-semibold">
                      {t.primaryLabel}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {category.primary.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-600/25 dark:border-sky-400/25 text-xs font-mono font-medium text-sky-900 dark:text-sky-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Secondary Ecosystem */}
                <div className="space-y-2 pt-3 border-t border-border">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    {t.secondaryLabel}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {category.secondary.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md bg-secondary border border-border text-[11px] font-mono text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom Editorial Row: Soft Skills + Languages & Interests */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Soft Skills Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="lg:col-span-7 flex"
        >
          <SpotlightCard className="w-full p-6 sm:p-7 rounded-2xl flex flex-col justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-sky-700 dark:text-sky-400">
                <Users className="w-4 h-4" />
                <h3 className="text-lg font-bold font-display text-foreground">
                  {t.softSkillsTitle}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {t.softSkillsSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SOFT_SKILLS[language].map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-secondary/70 border border-border text-sm text-foreground/90"
                >
                  <Check className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Languages & Interests Column */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Languages (Clean typographic cards, NO percentage bars) */}
          <SpotlightCard className="p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-2.5 text-sky-700 dark:text-sky-400">
              <Languages className="w-4 h-4" />
              <h3 className="text-lg font-bold font-display text-foreground">
                {t.languagesTitle}
              </h3>
            </div>

            <div className="divide-y divide-border">
              {LANGUAGES.map((langItem) => (
                <div
                  key={langItem.name.fr}
                  className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="text-sm font-semibold font-display text-foreground">
                      {langItem.name[language]}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {langItem.detail[language]}
                    </p>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-xs font-mono font-semibold text-sky-700 dark:text-sky-300">
                    {langItem.level[language]}
                  </span>
                </div>
              ))}
            </div>
          </SpotlightCard>

          {/* Interests */}
          <SpotlightCard className="p-6 rounded-2xl space-y-3.5">
            <div className="flex items-center gap-2.5 text-sky-700 dark:text-sky-400">
              <Compass className="w-4 h-4" />
              <h3 className="text-lg font-bold font-display text-foreground">
                {t.interestsTitle}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {INTERESTS[language].map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-xs font-medium text-secondary-foreground"
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
