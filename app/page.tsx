'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider'
import AIAssistantTrigger from '@/components/AIAssistantTrigger'
import AIChatModal from '@/components/AIChatModal'
import { Toaster } from 'sonner'
import type { Language } from '@/lib/portfolio-data'

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [language, setLanguage] = useState<Language>('fr')
  const [isChatOpen, setIsChatOpen] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const isDarkMode = storedTheme ? storedTheme === 'dark' : true
    setIsDark(isDarkMode)

    const storedLanguage = localStorage.getItem('language') as Language | null
    if (storedLanguage === 'en' || storedLanguage === 'fr') {
      setLanguage(storedLanguage)
    }

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  useEffect(() => {
    const handleToggleChat = () => setIsChatOpen((prev) => !prev)
    window.addEventListener('toggle-ai-chat', handleToggleChat)
    return () => window.removeEventListener('toggle-ai-chat', handleToggleChat)
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
    const newLang: Language = language === 'en' ? 'fr' : 'en'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  return (
    <SmoothScrollProvider>
      <div className="relative bg-background text-foreground transition-colors duration-300 min-h-screen">
        {/* Static subtle architectural grid backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 bg-architectural-grid opacity-70 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_75%)] z-0"
        />

        <Toaster position="bottom-right" theme={isDark ? 'dark' : 'light'} richColors />

        <Header
          isDark={isDark}
          onThemeToggle={handleThemeToggle}
          language={language}
          onLanguageToggle={handleLanguageToggle}
        />

        <main className="relative z-10">
          <Hero language={language} />
          <About language={language} />
          <Experience language={language} />
          <Projects language={language} />
          <Skills language={language} />
          <Contact language={language} />
        </main>

        <Footer language={language} />

        <AIAssistantTrigger
          onOpen={() => setIsChatOpen(true)}
          language={language}
        />

        <AIChatModal
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          language={language}
        />
      </div>
    </SmoothScrollProvider>
  )
}
