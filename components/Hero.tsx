'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowDown, Download, Sparkles, Code2, Terminal, Cpu } from 'lucide-react'
import SpotlightCard from '@/components/ui/SpotlightCard'

interface HeroProps {
  language: 'en' | 'fr'
}

const content = {
  en: {
    badge: 'Available for innovative projects & consulting',
    name: 'Andelson Teufack',
    title: 'Full-Stack Developer & IT Solutions Analyst',
    description:
      'Designing and engineering high-impact web and mobile solutions. Specialized in Java, Spring Boot, Python, React, Next.js, and Flutter with an obsession for performance and clean code.',
    ctaProjects: 'Explore My Work',
    ctaContact: 'Get In Touch',
    downloadCV: 'Download CV',
    experienceBadge: '2+ Years Experience',
    locationBadge: 'Based in Douala, CM',
    stackTitle: 'Core Stack',
  },
  fr: {
    badge: 'Disponible pour projets innovants & consulting',
    name: 'Andelson Teufack',
    title: 'Développeur Full-Stack & Analyste IT',
    description:
      'Conception et ingénierie de solutions web et mobiles à fort impact. Spécialisé en Java, Spring Boot, Python, React, Next.js et Flutter avec une obsession pour la performance et le code propre.',
    ctaProjects: 'Découvrir mes projets',
    ctaContact: 'Me contacter',
    downloadCV: 'Télécharger CV',
    experienceBadge: '2+ Ans d\'Expérience',
    locationBadge: 'Basé à Douala, CM',
    stackTitle: 'Technologies Clés',
  },
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 14,
    },
  },
}

export default function Hero({ language }: HeroProps) {
  const text = language === 'en' ? content.en : content.fr
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const opacityY = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const translateY = useTransform(scrollYProgress, [0, 0.8], [0, 80])

  const handleDownloadCV = () => {
    const cvUrl = '/CV - Andelson TEUFACK .pdf'
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'CV - Andelson TEUFACK .pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden"
    >
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <motion.div style={{ opacity: opacityY, y: translateY }} className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Text Section (7 cols) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Live Status Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border-emerald-500/30 text-xs font-mono font-medium text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                {text.badge}
              </div>
            </motion.div>

            {/* Name Title */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display">
                <span className="text-foreground">{text.name.split(' ')[0]} </span>
                <span className="text-gradient-cyan">{text.name.split(' ')[1]}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gradient-purple font-display">
                {text.title}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              {text.description}
            </motion.p>

            {/* Core Tech Stack Badges */}
            <motion.div variants={itemVariants} className="pt-2">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground/80 block mb-3">
                {text.stackTitle}
              </span>
              <div className="flex flex-wrap gap-2">
                {['Spring Boot', 'React / Next.js', 'Flutter', 'Python', 'Odoo ERP', 'PostgreSQL'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan-300 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold px-7 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                {text.ctaProjects}
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadCV}
                className="rounded-full border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-cyan-400/50 text-foreground font-semibold px-6 transition-all hover:scale-105"
              >
                <Download className="w-4 h-4 mr-2 text-cyan-400" />
                {text.downloadCV}
              </Button>

              <Button
                variant="ghost"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full text-muted-foreground hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
              >
                {text.ctaContact}
                <ArrowDown className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Card Section 3D (5 cols) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center"
          >
            <SpotlightCard className="w-full max-w-md p-4 spotlight-bg border-cyan-500/30">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden group">
                <Image
                  src="/hero.jpg"
                  alt="TEUFACK SONTSA Andelson (Andelson Teufack) — Développeur Full-Stack & Analyste IT à Douala, Cameroun"
                  fill
                  className="object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                />

                {/* Cyber Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-card border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">{text.experienceBadge}</p>
                      <p className="text-[10px] font-mono text-muted-foreground">{text.locationBadge}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20">
                    Full-Stack
                  </span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}