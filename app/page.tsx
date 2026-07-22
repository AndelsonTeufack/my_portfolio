'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider'
import CustomCursor from '@/components/ui/CustomCursor'
import ParticleBackground from '@/components/ui/ParticleBackground'
import { Toaster } from 'sonner'

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [language, setLanguage] = useState<'en' | 'fr'>('fr')

  // Theme & Language Initialization
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDarkMode = storedTheme === 'dark' || (!storedTheme && prefersDark) || true // Default to obsidian dark

    setIsDark(isDarkMode)

    const storedLanguage = localStorage.getItem('language') as 'en' | 'fr'
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const handleThemeToggle = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')

    if (newTheme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const handleLanguageToggle = () => {
    const newLang = language === 'en' ? 'fr' : 'en'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  return (
    <SmoothScrollProvider>
      <div className="relative bg-background text-foreground transition-colors duration-500 min-h-screen">
        {/* Custom Cursor & Particle Field */}
        <CustomCursor />
        <ParticleBackground />
        <Toaster position="bottom-right" theme={isDark ? 'dark' : 'light'} richColors />

        {/* Navigation Dock Header */}
        <Header
          isDark={isDark}
          onThemeToggle={handleThemeToggle}
          language={language}
          onLanguageToggle={handleLanguageToggle}
        />

        {/* Page Main Content */}
        <main className="relative z-10">
          <Hero language={language} />
          <About language={language} />
          <Skills language={language} />
          <Experience language={language} />
          <Projects language={language} />
          <Contact language={language} />
        </main>

        {/* Footer */}
        <Footer language={language} />
      </div>
    </SmoothScrollProvider>
  )
}
