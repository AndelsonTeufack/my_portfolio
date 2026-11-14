'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import BrandLogo from '@/components/ui/BrandLogo'
import { PORTFOLIO_PROFILE, type Language } from '@/lib/portfolio-data'

interface HeaderProps {
  isDark: boolean
  onThemeToggle: () => void
  language: Language
  onLanguageToggle: () => void
}

const navItems = {
  en: [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ],
  fr: [
    { name: 'À propos', href: '#about' },
    { name: 'Expériences', href: '#experience' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ],
}

export default function Header({
  isDark,
  onThemeToggle,
  language,
  onLanguageToggle,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#about')
  const [scrolled, setScrolled] = useState(false)

  const currentNav = useMemo(
    () => (language === 'en' ? navItems.en : navItems.fr),
    [language]
  )

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36)
    }

    const sections = currentNav
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { threshold: 0.2, rootMargin: '-96px 0px -45% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [currentNav])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-4 px-4 pointer-events-none">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 border ${
          isOpen ? 'rounded-2xl' : 'rounded-2xl md:rounded-full'
        } ${
          scrolled
            ? 'bg-white/95 dark:bg-[#11131a]/95 backdrop-blur-md border-slate-200 dark:border-white/14 shadow-sm dark:shadow-lg dark:shadow-black/40 py-2.5 px-4 sm:px-6'
            : 'bg-white/85 dark:bg-[#11131a]/80 backdrop-blur-md border-slate-200/90 dark:border-white/12 py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          {/* Unified Identity Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 shrink-0 font-display font-bold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white hover:text-sky-700 dark:hover:text-sky-400 transition-colors"
            aria-label={`${PORTFOLIO_PROFILE.fullName} — ${
              language === 'en' ? 'Back to top' : 'Retour en haut'
            }`}
          >
            <BrandLogo className="w-8 h-8 shrink-0" />
            <span>{PORTFOLIO_PROFILE.fullName}</span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label={language === 'en' ? 'Primary navigation' : 'Navigation principale'}
            className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-white/[0.04] p-1 rounded-full border border-slate-200 dark:border-white/12"
          >
            {currentNav.map((item) => {
              const isActive = activeSection === item.href
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    isActive
                      ? 'text-sky-700 dark:text-sky-300 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeDockNav"
                      className="absolute inset-0 bg-white dark:bg-sky-500/18 border border-slate-200 dark:border-sky-400/35 rounded-full shadow-2xs"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              )
            })}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onLanguageToggle}
              className="px-2.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/14 hover:border-sky-500/50 dark:hover:border-sky-400/50 text-xs font-mono font-semibold text-slate-800 dark:text-slate-100 transition-colors cursor-pointer"
              title={language === 'en' ? 'Passer en Français' : 'Switch to English'}
              aria-label={language === 'en' ? 'Switch language to French' : 'Passer en anglais'}
            >
              <span className={language === 'fr' ? 'text-sky-700 dark:text-sky-300 font-bold' : 'text-slate-500 dark:text-slate-400'}>
                FR
              </span>
              <span className="mx-1 text-slate-400 dark:text-slate-500">/</span>
              <span className={language === 'en' ? 'text-sky-700 dark:text-sky-300 font-bold' : 'text-slate-500 dark:text-slate-400'}>
                EN
              </span>
            </button>

            <button
              type="button"
              onClick={onThemeToggle}
              className="p-2 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/14 hover:border-sky-500/50 dark:hover:border-sky-400/50 text-slate-700 dark:text-slate-100 transition-colors cursor-pointer"
              aria-label={isDark ? (language === 'en' ? 'Switch to light mode' : 'Passer au thème clair') : (language === 'en' ? 'Switch to dark mode' : 'Passer au thème sombre')}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-sky-600" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/14 text-slate-800 dark:text-slate-100 cursor-pointer"
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              aria-label="Navigation mobile"
              className="md:hidden overflow-hidden pt-3 pb-1 flex flex-col gap-1 border-t border-slate-200 dark:border-white/12 mt-3"
            >
              {currentNav.map((item) => {
                const isActive = activeSection === item.href
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-sky-50 dark:bg-sky-500/15 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-400/30 font-semibold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/6'
                    }`}
                  >
                    {item.name}
                  </a>
                )
              })}
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  )
}
