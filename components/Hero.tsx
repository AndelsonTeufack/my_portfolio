'use client'

import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowDown, Sparkles, Download } from 'lucide-react'

interface HeroProps {
  language: 'en' | 'fr'
}

const content = {
  en: {
    greeting: 'Welcome to my portfolio',
    name: 'Andelson Teufack',
    title: 'Full-Stack Developer & IT Solutions Analyst',
    description: 'Crafting impactful applications with expertise in Java, Python, JavaScript, React, and Spring Boot. Transforming ideas into elegant, scalable solutions.',
    cta: 'Explore My Work',
    learnMore: 'Learn More',
    downloadCV: 'Download CV',
    scrollHint: 'Scroll to explore',
    experience: '2+ years experience',
  },
  fr: {
    greeting: 'Bienvenue sur mon portfolio',
    name: 'Andelson Teufack',
    title: 'Développeur Full-Stack & Analyste IT',
    description: 'Créer des applications impactantes avec expertise en Java, Python, JavaScript, React et Spring Boot. Transformer les idées en solutions élégantes et scalables.',
    cta: 'Découvrez mes projets',
    learnMore: 'En savoir plus',
    downloadCV: 'Télécharger CV',
    scrollHint: 'Scrollez pour explorer',
    experience: '2+ ans d\'expérience',
  },
}

// Variants pour les animations de texte
const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const textItemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 12,
    },
  },
}

// Variant pour l'image (sans sur-cadrage)
const imageVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0, rotate: -5 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 15,
      delay: 0.3,
    },
  },
}

export default function Hero({ language }: HeroProps) {
  const text = language === 'en' ? content.en : content.fr
  const targetRef = useRef<HTMLElement>(null)

  // Parallax effect on background elements
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  // Fonction pour télécharger le CV
  const handleDownloadCV = () => {
    // Assurez-vous d'avoir le fichier PDF dans le dossier public
    const cvUrl = '/CV - Andelson TEUFACK.pdf'
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'CV - Andelson TEUFACK.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      ref={targetRef}
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Éléments de fond animés */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-40 dark:opacity-20 animate-pulse" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-30 dark:opacity-10 animate-pulse animation-delay-2000" />
      </motion.div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 -z-5 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * 100 - 50 + '%',
              y: Math.random() * 100 + '%',
              opacity: 0.2,
            }}
            animate={{
              y: [null, '-30%', '30%', '-30%'],
              x: [null, '20%', '-20%', '20%'],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte avec animations */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textContainerVariants}
            className="space-y-6"
          >
            <motion.p
              variants={textItemVariants}
              className="text-primary font-semibold text-sm tracking-widest uppercase inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              {text.greeting}
            </motion.p>

            {/* Nom clairement affiché */}
            <motion.h1
              variants={textItemVariants}
              className="text-5xl md:text-7xl font-extrabold leading-tight text-foreground"
            >
              {text.name}
            </motion.h1>

            {/* Titre (rôle) */}
            <motion.h2
              variants={textItemVariants}
              className="text-3xl md:text-4xl font-bold text-primary/90"
            >
              {text.title}
            </motion.h2>

            <motion.p
              variants={textItemVariants}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              {text.description}
            </motion.p>

            <motion.div
              variants={textItemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4 flex-wrap"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold group relative overflow-hidden"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span className="relative z-10">{text.cta}</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full group"
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {text.learnMore}
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>

              {/* bouton de téléchargement CV */}
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full group"
                onClick={handleDownloadCV}
              >
                <Download className="mr-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                {text.downloadCV}
              </Button>
            </motion.div>
          </motion.div>

          {/* Image avec cadrage corrigé (pas de découpage, ni superposition colorée) */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-border/50 shadow-2xl group bg-muted/30">
            <motion.div
              className="relative w-full aspect-[20/20]"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <Image
                src="/hero.jpg"
                alt="Andelson Teufack - Full Stack Developer"
                fill
                className="object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Badge flottant (expérience) - conservez-le */}
            <motion.div
              className="absolute bottom-4 left-4 z-20 bg-background/80 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-primary/30 text-xs md:text-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, type: 'spring' }}
            >
              ✨ {text.experience}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}