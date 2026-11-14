'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download, MapPin, Briefcase, GraduationCap } from 'lucide-react'
import { PORTFOLIO_PROFILE, type Language } from '@/lib/portfolio-data'

interface HeroProps {
  language: Language
}

const content = {
  en: {
    eyebrow: 'SOFTWARE & IT ENGINEER',
    ctaProjects: 'Explore Case Studies',
    ctaExperiences: 'Experience Track',
    downloadCV: 'Download CV',
    stackLabel: 'Production Stack',
    proofCompany: 'Kamer Engineering Solution',
    proofCompanyRole: 'Head of Inspection Digitalization',
    proofEducation: 'Master in Software Engineering (ENSPD)',
    locationShort: 'Douala, Cameroon',
    roleTag: 'Full-Stack & Mobile',
  },
  fr: {
    eyebrow: 'INGÉNIEUR DES TRAVAUX INFORMATIQUES',
    ctaProjects: 'Découvrir mes réalisations',
    ctaExperiences: 'Parcours professionnel',
    downloadCV: 'Télécharger le CV',
    stackLabel: 'Technologies de production',
    proofCompany: 'Kamer Engineering Solution',
    proofCompanyRole: 'Responsable de la digitalisation des inspections',
    proofEducation: 'Master Pro Génie Logiciel (ENSPD)',
    locationShort: 'Douala, Cameroun',
    roleTag: 'Full-Stack & Mobile',
  },
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero({ language }: HeroProps) {
  const t = content[language]

  const handleDownloadCV = () => {
    const cvUrl = '/CV - Andelson TEUFACK.pdf'
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'CV - Andelson TEUFACK.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-white/6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Editorial Main Column (7 cols) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Availability Status */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {PORTFOLIO_PROFILE.availabilityBadge[language]}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {t.eyebrow}
              </span>
            </motion.div>

            {/* Name & Title */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white leading-[1.08]">
                {PORTFOLIO_PROFILE.fullName}
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-sky-700 dark:text-sky-400 leading-snug">
                {PORTFOLIO_PROFILE.currentRoleHeadline[language]}
              </h2>
            </motion.div>

            {/* Value Proposition */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
            >
              {PORTFOLIO_PROFILE.heroDescription[language]}
            </motion.p>

            {/* Proof Bar */}
            <motion.div
              variants={itemVariants}
              className="grid sm:grid-cols-2 gap-3 pt-1 max-w-2xl"
            >
              <div className="flex items-start gap-3 p-3.5 rounded-xl editorial-surface">
                <Briefcase className="w-4 h-4 text-sky-600 dark:text-sky-400 mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 truncate">
                    {t.proofCompany}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    {t.proofCompanyRole}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl editorial-surface">
                <GraduationCap className="w-4 h-4 text-sky-600 dark:text-sky-400 mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 truncate">
                    {t.proofEducation}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span>{t.locationShort}</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Core Stack */}
            <motion.div variants={itemVariants} className="pt-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-2.5">
                {t.stackLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Spring Boot',
                  'Flutter Offline-First',
                  'React / Next.js',
                  'Python / FastAPI',
                  'Odoo ERP',
                  'PostgreSQL / PostGIS',
                  'BluetoothSockets',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-xs font-mono font-medium text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                size="lg"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-sky-500 dark:hover:bg-sky-400 text-white dark:text-slate-950 font-semibold px-6 cursor-pointer"
              >
                {t.ctaExperiences}
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadCV}
                className="rounded-xl border-slate-300 dark:border-white/15 bg-white dark:bg-[#11131a] hover:bg-slate-50 dark:hover:bg-white/[0.06] text-slate-900 dark:text-slate-100 font-semibold px-5 cursor-pointer"
              >
                <Download className="w-4 h-4 mr-2 text-sky-600 dark:text-sky-400" />
                {t.downloadCV}
              </Button>

              <Button
                variant="ghost"
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-xl text-slate-600 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-300 font-semibold cursor-pointer"
              >
                {t.ctaProjects}
              </Button>
            </motion.div>
          </motion.div>

          {/* Portrait Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md rounded-2xl editorial-surface p-3">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-900">
                <Image
                  src="/hero.jpg"
                  alt="TEUFACK SONTSA Andelson — Ingénieur des Travaux Informatiques à Douala, Cameroun"
                  fill
                  className="object-cover object-[center_20%]"
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                />

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent" />

                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/12 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-white truncate">
                      {t.proofCompany}
                    </p>
                    <p className="text-[11px] font-mono text-slate-300 truncate">
                      {t.locationShort}
                    </p>
                  </div>
                  <span className="shrink-0 text-[11px] font-mono font-semibold text-sky-300 bg-sky-500/15 px-2.5 py-1 rounded-md border border-sky-400/25">
                    {t.roleTag}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
