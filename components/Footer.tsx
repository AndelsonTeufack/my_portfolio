'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

interface FooterProps {
  language: 'en' | 'fr'
}

const content = {
  en: {
    copyright: '© 2026 Andelson Teufack. All rights reserved.',
    tagline: 'Building elegant solutions to complex problems.',
    navigation: 'Navigation',
    connect: 'Connect',
    designed: 'Designed & Developed by Andelson Teufack',
    backToTop: 'Back to top',
  },
  fr: {
    copyright: '© 2026 Andelson Teufack. Tous droits réservés.',
    tagline: 'Construire des solutions élégantes à des problèmes complexes.',
    navigation: 'Navigation',
    connect: 'Réseaux',
    designed: 'Conçu & développé par Andelson Teufack',
    backToTop: 'Retour en haut',
  },
}

// Variants pour les animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
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

export default function Footer({ language }: FooterProps) {
  const text = language === 'en' ? content.en : content.fr
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const links = [
    { href: '#about', label: language === 'en' ? 'About' : 'À propos' },
    { href: '#skills', label: language === 'en' ? 'Skills' : 'Compétences' },
    { href: '#experience', label: language === 'en' ? 'Experience' : 'Expériences' },
    { href: '#projects', label: language === 'en' ? 'Projects' : 'Projets' },
    { href: '#contact', label: language === 'en' ? 'Contact' : 'Contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-border bg-background overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Vague animée en bas (optionnel) */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Top Section */}
          <div className="grid gap-12 md:grid-cols-3">
            {/* Brand */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl tracking-tight"
                >
                  AT
                </motion.div>
                <span className="font-semibold text-lg tracking-tight text-foreground">
                  Andelson Teufack
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {text.tagline}
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-5">
                {text.navigation}
              </h4>

              <ul className="space-y-3">
                {links.map((item) => (
                  <motion.li
                    key={item.href}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative inline-block group"
                    >
                      {item.label}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-5">
                {text.connect}
              </h4>

              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/andelson-teufack-97a59b279/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group h-12 w-12 rounded-2xl border border-border flex items-center justify-center transition-all duration-300 hover:border-primary hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>

                <motion.a
                  href="https://github.com/AndelsonTeufack"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group h-12 w-12 rounded-2xl border border-border flex items-center justify-center transition-all duration-300 hover:border-primary hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>

                <motion.a
                  href="mailto:teufackandelson123@gmail.com"
                  aria-label="Email"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group h-12 w-12 rounded-2xl border border-border flex items-center justify-center transition-all duration-300 hover:border-primary hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Divider avec animation */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="px-4 bg-background text-xs text-muted-foreground"
              >
                ✦
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground"
          >
            <motion.p whileHover={{ scale: 1.05 }} className="transition-transform">
              {text.copyright}
            </motion.p>
            <motion.p whileHover={{ scale: 1.05 }} className="transition-transform">
              {text.designed}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Bouton retour en haut (flottant) */}
        <motion.button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 md:bottom-12 md:right-12 p-3 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary backdrop-blur-sm transition-colors z-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: 'spring' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={text.backToTop}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  )
}