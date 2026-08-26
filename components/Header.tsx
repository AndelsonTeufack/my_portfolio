'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Sparkles } from 'lucide-react'

interface HeaderProps {
  isDark: boolean
  onThemeToggle: () => void
  language: 'en' | 'fr'
  onLanguageToggle: () => void
}

const navItems = {
  en: [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],
  fr: [
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Expériences', href: '#experience' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],
}

export default function Header({ isDark, onThemeToggle, language, onLanguageToggle }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#about')
  const [scrolled, setScrolled] = useState(false)

  const currentNav = language === 'en' ? navItems.en : navItems.fr

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    const sections = currentNav.map((item) => document.querySelector(item.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-100px 0px -100px 0px' }
    )

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    window.addEventListener('scroll', handleScroll)
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
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
        className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-500 border ${
          scrolled
            ? 'bg-white/85 dark:bg-background/70 backdrop-blur-2xl border-slate-300/80 dark:border-cyan-500/20 shadow-xl shadow-slate-900/5 dark:shadow-cyan-500/5 py-2.5 px-4 sm:px-6'
            : 'bg-white/60 dark:bg-background/40 backdrop-blur-md border-slate-200/80 dark:border-white/10 py-3.5 px-4 sm:px-8'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-sky-500 to-purple-600 dark:from-cyan-500 dark:to-purple-600 p-[1px] shadow-sm">
              <div className="w-full h-full bg-slate-900 dark:bg-background rounded-full flex items-center justify-center font-extrabold text-sm text-cyan-400 group-hover:bg-transparent group-hover:text-white transition-all">
                AT
              </div>
            </div>
            <span className="hidden sm:inline-block font-bold text-sm tracking-tight text-slate-900 dark:text-foreground group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors">
              Andelson<span className="text-sky-600 dark:text-cyan-400">.dev</span>
            </span>
          </motion.a>

          {/* Desktop Glass Bento Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-black/30 p-1.5 rounded-full border border-slate-200/80 dark:border-white/5 shadow-inner">
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
                  className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                    isActive
                      ? 'text-sky-700 dark:text-cyan-300 font-bold'
                      : 'text-slate-600 dark:text-muted-foreground hover:text-slate-900 dark:hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeDockNav"
                      className="absolute inset-0 bg-sky-500/15 dark:bg-cyan-500/15 border border-sky-400/40 dark:border-cyan-400/40 rounded-full glow-cyan"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              )
            })}
          </nav>

          {/* Controls (Language & Theme) */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={onLanguageToggle}
              className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 hover:border-sky-400 dark:hover:border-cyan-500/40 text-xs font-mono font-bold text-sky-700 dark:text-cyan-400 flex items-center gap-1.5 transition-all shadow-xs"
              title={language === 'en' ? 'Changer en Français' : 'Switch to English'}
            >
              <span className="text-sm leading-none">🇨🇲</span>
              <span>{language.toUpperCase()}</span>
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={onThemeToggle}
              className="p-2 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 hover:border-sky-400 dark:hover:border-cyan-500/40 text-slate-800 dark:text-foreground transition-all shadow-xs"
              aria-label={isDark ? 'Mode clair' : 'Mode sombre'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDark ? 'dark' : 'light'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-sky-600" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-foreground"
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isOpen ? <X className="w-5 h-5 text-sky-600 dark:text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden pt-4 pb-2 flex flex-col gap-2 border-t border-slate-200 dark:border-white/10 mt-3"
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
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-sky-500/15 dark:bg-cyan-500/10 text-sky-700 dark:text-cyan-300 border border-sky-400/40 dark:border-cyan-500/30'
                        : 'text-slate-600 dark:text-muted-foreground hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-foreground'
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