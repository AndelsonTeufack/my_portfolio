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

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState<'en' | 'fr'>('en')
  const [mounted, setMounted] = useState(false)

  // Handle theme persistence and initialization
  useEffect(() => {
    setMounted(true)
    
    // Check if dark mode preference is stored
    const storedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const isDarkMode = storedTheme === 'dark' || (!storedTheme && prefersDark)
    setIsDark(isDarkMode)
    
    // Check if language preference is stored
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

  // Update theme
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

  // Update language
  const handleLanguageToggle = () => {
    const newLang = language === 'en' ? 'fr' : 'en'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <main className="bg-background text-foreground transition-colors duration-300">
      <Header
        isDark={isDark}
        onThemeToggle={handleThemeToggle}
        language={language}
        onLanguageToggle={handleLanguageToggle}
      />

      <Hero language={language} />
      <About language={language} />
      <Skills language={language} />
      <Experience language={language} />
      <Projects language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </main>
  )
}
