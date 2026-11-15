'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { PORTFOLIO_PROFILE, type Language } from '@/lib/portfolio-data'

interface HeroProps {
  language: Language
}

const content = {
  en: {
    currentContext: 'Currently at Kamer Engineering Solution.',
    ctaProjects: 'View my projects',
    ctaContact: 'Contact me',
    downloadCV: 'Download CV',
    availabilityBadge: 'Available for missions',
    imageAlt: 'Andelson TEUFACK SONTSA - Full-Stack & Mobile Developer',
  },
  fr: {
    currentContext: 'Actuellement chez Kamer Engineering Solution.',
    ctaProjects: 'Voir mes projets',
    ctaContact: 'Me contacter',
    downloadCV: 'Télécharger le CV',
    availabilityBadge: 'Disponible pour des missions',
    imageAlt: 'Andelson TEUFACK SONTSA - Développeur Full-Stack & Mobile',
  },
}

const HERO_STACK = ['Flutter', 'Next.js', 'FastAPI', 'PostgreSQL/PostGIS']

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 0, opacity: 1 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero({ language }: HeroProps) {
  const t = content[language]

  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Editorial Main Column (7 cols) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Name & Positioning */}
            <motion.div variants={itemVariants} className="space-y-2.5">
              <h1 className="text-[clamp(1.65rem,1.05rem+2.8vw,3.75rem)] font-extrabold tracking-tight font-display text-slate-900 dark:text-white leading-[1.08] text-balance">
                <span className="block">Andelson</span>
                <span className="block">TEUFACK SONTSA</span>
              </h1>
              <div className="space-y-1.5">
                <h2 className="text-lg sm:text-xl font-semibold text-sky-700 dark:text-sky-400 leading-snug text-balance">
                  {PORTFOLIO_PROFILE.title[language]}
                </h2>
                <p className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400">
                  <MapPin
                    className="w-4 h-4 text-slate-900 dark:text-white shrink-0"
                    aria-hidden="true"
                  />
                  <span>{PORTFOLIO_PROFILE.availabilityBadge[language]}</span>
                </p>
              </div>
            </motion.div>

            {/* Concise Context */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl"
            >
              {t.currentContext}
            </motion.p>

            {/* Focused Stack (4 chips) */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-1">
              {HERO_STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/14 text-xs font-mono font-medium text-slate-800 dark:text-slate-100"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTAs: Projects -> Contact -> CV */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-sky-400 dark:hover:bg-sky-300 text-white dark:text-slate-950 font-semibold px-6 cursor-pointer"
              >
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {t.ctaProjects}
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl border-slate-300 dark:border-white/20 bg-white dark:bg-[#11131a] hover:bg-slate-50 dark:hover:bg-white/[0.08] text-slate-900 dark:text-white font-semibold px-5 cursor-pointer"
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <Mail className="w-4 h-4 mr-2 text-sky-700 dark:text-sky-400" />
                  {t.ctaContact}
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="lg"
                className="rounded-xl text-slate-700 dark:text-slate-200 hover:text-sky-700 dark:hover:text-sky-300 hover:bg-slate-100 dark:hover:bg-white/[0.06] font-semibold px-4 cursor-pointer"
              >
                <a
                  href="/CV - Andelson TEUFACK.pdf"
                  download="CV - Andelson TEUFACK.pdf"
                >
                  <Download className="w-4 h-4 mr-2 text-sky-700 dark:text-sky-400" />
                  {t.downloadCV}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Portrait Column (5 cols) */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md rounded-2xl editorial-surface p-3">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-900">
                <Image
                  src="/hero.jpg"
                  alt={t.imageAlt}
                  fill
                  className="object-cover object-[center_20%]"
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="absolute bottom-3.5 left-3.5 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-950/85 hover:bg-slate-900/95 backdrop-blur-md border border-emerald-400/30 hover:border-emerald-400/60 text-xs font-mono font-medium text-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
                    <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                  </span>
                  <span>{t.availabilityBadge}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
