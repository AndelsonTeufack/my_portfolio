'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import { Target, Lightbulb, Sparkles, Code, Cloud, Search, Quote, Terminal, CheckCircle2 } from 'lucide-react'
import { calculateAge } from '@/lib/utils'
import SpotlightCard from '@/components/ui/SpotlightCard'
import MacbookAnimation from './MacbookAnimation'

interface AboutProps {
  language: 'en' | 'fr'
}

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = value
    const duration = 1500
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-extrabold text-gradient-cyan font-mono">
      {count}
      {suffix}
    </span>
  )
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 14 },
  },
}

export default function About({ language }: AboutProps) {
  const age = calculateAge('2003-12-14')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const content = {
    en: {
      title: 'About & Vision',
      subtitle: 'Combining engineering precision, clean architecture, and creative problem solving.',
      intro:
        `I am Andelson TEUFACK, a ${age}-year-old Full-Stack Developer and IT Analyst based in Douala, Cameroon. I bridge complex backend systems with intuitive frontend experiences.`,
      story:
        'With over 2+ years of professional engineering experience, I specialize in architecting scalable applications, automating business processes, and optimizing IT infrastructures for enterprises and growing startups.',
      visionTitle: 'Engineering Philosophy',
      visionDesc:
        'I believe in building software that scales gracefully. Every line of code should be intentional, secure, maintainable, and aligned with core business objectives.',
      methodologyTitle: 'Methodology',
      methodologyDesc:
        'Agile iteration, continuous integration, domain-driven design, and strict code quality standards.',
      quote:
        'Excellence in software development is not an accident; it is the result of continuous learning, architecture discipline, and attention to detail.',
      stats: [
        { value: 2, label: 'Years Experience', suffix: '+' },
        { value: 10, label: 'Major Projects', suffix: '+' },
        { value: 20, label: 'Technologies', suffix: '+' },
      ],
    },
    fr: {
      title: 'À Propos & Vision',
      subtitle: 'Allier précision d\'ingénierie, architecture propre et résolution créative de problèmes.',
      intro:
        `Je suis Andelson TEUFACK, Développeur Full-Stack et Analyste IT de ${age} ans basé à Douala, Cameroun. Je fais le pont entre les architectures backend complexes et les interfaces frontends intuitives.`,
      story:
        'Avec plus de 2 ans d\'expérience professionnelle, je me spécialise dans la conception d\'applications scalables, l\'automatisation de processus métier et l\'optimisation d\'infrastructures IT.',
      visionTitle: 'Philosophie d\'Ingénierie',
      visionDesc:
        'Je crois en la création de logiciels évolutifs. Chaque ligne de code doit être intentionnelle, sécurisée, maintenable et alignée sur les objectifs métier.',
      methodologyTitle: 'Méthodologie',
      methodologyDesc:
        'Itération Agile, intégration continue, architecture orientée domaine et normes strictes de qualité.',
      quote:
        'L\'excellence en développement logiciel n\'est pas un hasard ; c\'est le résultat d\'un apprentissage continu, de la discipline architecturale et du soin apporté aux détails.',
      stats: [
        { value: 2, label: "Années d'Expérience", suffix: '+' },
        { value: 10, label: 'Projets Majeurs', suffix: '+' },
        { value: 20, label: 'Technologies', suffix: '+' },
      ],
    },
  }

  const text = language === 'en' ? content.en : content.fr

  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-4 text-center md:text-left"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-sky-600 dark:text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold">
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>// 01. Profile & Mindset</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl font-bold font-display text-slate-900 dark:text-foreground">
            {text.title}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-slate-600 dark:text-muted-foreground text-base sm:text-lg max-w-2xl font-medium">
            {text.subtitle}
          </motion.p>
        </motion.div>

        {/* Bento Grid Layout (4 Cards) */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Card 1: Main Story (8 cols) */}
          <motion.div variants={itemVariants} className="md:col-span-8">
            <SpotlightCard className="p-8 h-full flex flex-col justify-between spotlight-bg border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-none">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 dark:bg-cyan-500/10 text-sky-600 dark:text-cyan-400 border border-sky-400/30 dark:border-cyan-500/20">
                    <Code className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-foreground">Full-Stack Engineer</h3>
                </div>

                <p className="text-lg text-slate-900 dark:text-foreground font-semibold leading-relaxed">
                  {text.intro}
                </p>

                <p className="text-sm text-slate-600 dark:text-muted-foreground leading-relaxed font-medium">
                  {text.story}
                </p>

                {/* Key Pillars */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-cyan-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-foreground">{text.visionTitle}</h4>
                      <p className="text-xs text-slate-600 dark:text-muted-foreground mt-1 font-medium">{text.visionDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-foreground">{text.methodologyTitle}</h4>
                      <p className="text-xs text-slate-600 dark:text-muted-foreground mt-1 font-medium">{text.methodologyDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2: Metrics & Impact (4 cols) */}
          <motion.div variants={itemVariants} className="md:col-span-4">
            <SpotlightCard className="p-8 h-full flex flex-col justify-between border-sky-400/30 dark:border-cyan-500/20 bg-gradient-to-br from-sky-500/10 via-transparent to-purple-500/10 dark:from-cyan-500/5 dark:to-purple-500/5 shadow-sm dark:shadow-none">
              <div className="space-y-8">
                <span className="text-xs font-mono uppercase tracking-widest text-sky-700 dark:text-cyan-400 font-bold">Impact Metrics</span>

                <div className="space-y-6">
                  {text.stats.map((stat, idx) => (
                    <div key={idx} className="border-b border-slate-200 dark:border-white/10 pb-4 last:border-0 last:pb-0">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                      <p className="text-xs font-mono text-slate-600 dark:text-muted-foreground mt-1 font-semibold">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 3: Quote (5 cols) */}
          <motion.div variants={itemVariants} className="md:col-span-5">
            <SpotlightCard className="p-8 h-full relative flex flex-col justify-center border-purple-400/30 dark:border-purple-500/20 shadow-sm dark:shadow-none">
              <Quote className="w-10 h-10 text-purple-600/30 dark:text-purple-400/30 mb-4" />
              <p className="text-base sm:text-lg italic font-medium leading-relaxed text-slate-900 dark:text-foreground">
                "{text.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-purple-600 dark:from-cyan-400 dark:to-purple-500 flex items-center justify-center font-bold text-xs text-white dark:text-slate-950 shadow-sm">
                  AT
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-foreground">Andelson Teufack</p>
                  <p className="text-[10px] font-mono text-slate-500 dark:text-muted-foreground">Software Engineer</p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 4: Macbook 3D Terminal Preview (7 cols) */}
          <motion.div variants={itemVariants} className="md:col-span-7">
            <SpotlightCard className="p-6 h-full flex flex-col justify-center items-center border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-none">
              <MacbookAnimation />
            </SpotlightCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}