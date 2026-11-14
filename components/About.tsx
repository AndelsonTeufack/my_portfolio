'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award, Cpu, Layers, ShieldCheck, Globe2 } from 'lucide-react'
import {
  ENGINEERING_PILLARS,
  EDUCATION,
  CERTIFICATIONS,
  type Language,
} from '@/lib/portfolio-data'
import { calculateAge } from '@/lib/utils'

interface AboutProps {
  language: Language
}

const pillarIcons = [Cpu, Layers, ShieldCheck, Globe2]

export default function About({ language }: AboutProps) {
  const age = calculateAge('2003-12-14')
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const copy = {
    fr: {
      eyebrow: '01 — PROFIL & ARCHITECTURE',
      title: 'Positionnement d’Ingénierie & Formation',
      subtitle:
        'Transformer des contraintes métier et terrain complexes en systèmes logiciels fiables, maintenables et déployés en production.',
      bioTitle: 'Parcours & approche',
      bioLead: `Ingénieur des Travaux Informatiques de ${age} ans basé à Douala, je pilote aujourd’hui la digitalisation des inspections chez Kamer Engineering Solution tout en préparant un Master Professionnel en Génie Logiciel à l’ENSPD.`,
      bioBody:
        'Mon parcours couvre l’ensemble du cycle de vie logiciel : recueil des besoins et cahiers des charges, modélisation de bases de données, architecture d’APIs sécurisées, applications mobiles offline-first assistées par IA, télémétrie matérielle Bluetooth, intégration ERP Odoo et systèmes d’information géographique (SIG).',
      metricsTitle: 'Repères vérifiables',
      metrics: [
        { value: '7', label: 'Missions & postes en entreprise / enseignement' },
        { value: '2', label: 'Applications mobiles sur Google Play Store' },
        { value: 'C1', label: 'Maîtrise professionnelle de l’anglais' },
        { value: 'Offline + IA', label: 'Spécialité systèmes terrain résilients' },
      ],
      pillarsTitle: 'Domaines d’architecture maîtrisés',
      educationTitle: 'Formation Académique',
      certTitle: 'Certification Professionnelle',
    },
    en: {
      eyebrow: '01 — PROFILE & ARCHITECTURE',
      title: 'Engineering Positioning & Academic Track',
      subtitle:
        'Turning complex industrial and field constraints into resilient, maintainable software systems shipped to production.',
      bioTitle: 'Background & approach',
      bioLead: `I am a ${age}-year-old Software & IT Engineer based in Douala, currently serving as Head of Inspection Digitalization at Kamer Engineering Solution while completing a Professional Master’s Degree in Software Engineering at ENSPD.`,
      bioBody:
        'My engineering scope spans the full software lifecycle: technical specification drafting, relational and spatial database modeling, secure backend APIs, AI-assisted offline-first mobile apps, Bluetooth hardware telemetry, Odoo ERP integration, and GIS pipelines.',
      metricsTitle: 'Verified benchmarks',
      metrics: [
        { value: '7', label: 'Industry engineering & teaching roles' },
        { value: '2', label: 'Mobile apps shipped on Google Play Store' },
        { value: 'C1', label: 'Professional English proficiency' },
        { value: 'Offline + AI', label: 'Core specialty in resilient field systems' },
      ],
      pillarsTitle: 'Core Engineering Pillars',
      educationTitle: 'Academic Background',
      certTitle: 'Professional Certification',
    },
  }

  const t = copy[language]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/6"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="space-y-3 max-w-3xl"
        >
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-sky-700 dark:text-sky-400">
            {t.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
            {t.title}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Top Row: Narrative + Verified Benchmarks */}
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-2xl editorial-surface space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider font-semibold text-sky-700 dark:text-sky-400">
              {t.bioTitle}
            </h3>
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
              {t.bioLead}
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.bioBody}
            </p>
          </div>

          <div className="lg:col-span-5 p-7 sm:p-8 rounded-2xl editorial-surface flex flex-col justify-between space-y-6">
            <h3 className="text-sm font-mono uppercase tracking-wider font-semibold text-sky-700 dark:text-sky-400">
              {t.metricsTitle}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {t.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/8"
                >
                  <p className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white">
                    {metric.value}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-snug">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Row: 4 Architecture Pillars + Education & Certification */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* 4 Engineering Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
              {t.pillarsTitle}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {ENGINEERING_PILLARS.map((pillar, index) => {
                const Icon = pillarIcons[index] || Cpu
                return (
                  <div
                    key={pillar.id}
                    className="p-5 rounded-xl editorial-surface flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-200/80 dark:border-sky-400/20">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">
                          {pillar.title[language]}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {pillar.description[language]}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-white/6">
                      {pillar.stack.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Education & Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>{t.educationTitle}</span>
              </h3>
              <div className="space-y-3">
                {EDUCATION.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-4 rounded-xl editorial-surface flex items-start justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {edu.degree[language]}
                      </h4>
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-400/20 text-[11px] font-mono font-semibold text-sky-700 dark:text-sky-300">
                        {edu.period[language]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>{t.certTitle}</span>
              </h3>
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="p-4 rounded-xl editorial-surface space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-mono text-sky-700 dark:text-sky-400 mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.domains[language].map((domain) => (
                      <span
                        key={domain}
                        className="px-2 py-0.5 rounded text-[11px] bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300"
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
