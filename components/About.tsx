'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  GraduationCap,
  Award,
  Smartphone,
  ShieldCheck,
  Layers,
  Globe2,
} from 'lucide-react'
import {
  PORTFOLIO_PROFILE,
  ENGINEERING_PILLARS,
  EDUCATION,
  CERTIFICATIONS,
  type Language,
} from '@/lib/portfolio-data'
import { calculateAge } from '@/lib/utils'

interface AboutProps {
  language: Language
}

const pillarIcons = [Smartphone, ShieldCheck, Layers, Globe2]

export default function About({ language }: AboutProps) {
  const age = calculateAge(PORTFOLIO_PROFILE.birthDate)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const copy = {
    fr: {
      eyebrow: '01 - À propos',
      title: 'De l’inspection terrain à la plateforme web',
      bio: `Développeur Full-Stack (${age} ans) chez Kamer Engineering Solution, je pilote la digitalisation des inspections électriques et techniques : applications mobiles utilisables sans réseau, génération automatique de rapports, plateformes web collaboratives. Avant cela : fintech (Credix.cam), maintenance (Green Power) et enseignement du développement à l’IAI.`,
      metrics: [
        { value: '3 ans', label: 'de pratique en entreprise' },
        { value: '+15', label: 'étudiants mentorés' },
        { value: '2 apps', label: 'contribuées sur le Play Store' },
        { value: 'Anglais C1', label: 'usage professionnel' },
      ],
      pillarsTitle: 'Domaines d’intervention',
      educationTitle: 'Formation académique',
      certTitle: 'Certification professionnelle',
    },
    en: {
      eyebrow: '01 - About',
      title: 'From field inspection to web platform',
      bio: `Full-Stack Developer (${age} years old) at Kamer Engineering Solution, I lead the digitalization of electrical and technical inspections: offline-capable mobile apps, automated report generation, and collaborative web platforms. Previously: fintech (Credix.cam), maintenance systems (Green Power), and software development teaching at IAI.`,
      metrics: [
        { value: '3 years', label: 'of industry practice' },
        { value: '+15', label: 'students mentored' },
        { value: '2 apps', label: 'contributed on Play Store' },
        { value: 'C1 English', label: 'professional proficiency' },
      ],
      pillarsTitle: 'Core focus areas',
      educationTitle: 'Academic background',
      certTitle: 'Professional certification',
    },
  }

  const t = copy[language]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="space-y-2.5 max-w-3xl"
        >
          <p className="text-xs font-mono font-semibold tracking-wider text-sky-700 dark:text-sky-300">
            {t.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
            {t.title}
          </h2>
        </motion.div>

        {/* Top Row: Narrative + 4 Concrete Figures (Balanced height) */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-2xl editorial-surface flex items-center">
            <p className="text-base sm:text-lg text-slate-800 dark:text-slate-100 leading-relaxed">
              {t.bio}
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
            {t.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-5 rounded-2xl editorial-surface flex flex-col justify-center"
              >
                <p className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white">
                  {metric.value}
                </p>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1 leading-snug">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row: 4 Focused Domains + Education & Certification */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* 4 Domains (7 cols, concise title + 1 line, zero redundant tags) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300">
              {t.pillarsTitle}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {ENGINEERING_PILLARS.map((pillar, index) => {
                const Icon = pillarIcons[index] || Smartphone
                return (
                  <div
                    key={pillar.id}
                    className="p-5 rounded-xl editorial-surface space-y-2.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-500/15 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-400/25 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                        {pillar.title[language]}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {pillar.description[language]}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Education & Certification (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-sky-700 dark:text-sky-400" />
                <span>{t.educationTitle}</span>
              </h3>
              <div className="space-y-3">
                {EDUCATION.map((edu) => {
                  const isInProgress = edu.id === 'enspd-master'
                  return (
                    <div
                      key={edu.id}
                      className="p-4 rounded-xl editorial-surface flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {edu.degree[language]}
                        </h4>
                        <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-md border text-[11px] font-mono font-semibold ${isInProgress
                              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300'
                              : 'bg-sky-50 dark:bg-sky-500/15 border-sky-200 dark:border-sky-400/25 text-sky-700 dark:text-sky-300'
                            }`}
                        >
                          {edu.period[language]}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-700 dark:text-sky-400" />
                <span>{t.certTitle}</span>
              </h3>
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="p-4 rounded-xl editorial-surface space-y-2.5">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-mono text-sky-700 dark:text-sky-300 mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.domains[language].map((domain) => (
                      <span
                        key={domain}
                        className="px-2 py-0.5 rounded text-[11px] bg-slate-100 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-slate-200"
                      >
                        {domain}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
