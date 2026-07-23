'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Clock } from 'lucide-react'

interface FooterProps {
  language: 'en' | 'fr'
}

export default function Footer({ language }: FooterProps) {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Douala',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }
      setTime(new Intl.DateTimeFormat('fr-FR', options).format(now))
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-slate-200/90 dark:border-white/10 bg-slate-100/90 dark:bg-slate-950/80 backdrop-blur-2xl py-12 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-500">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-sky-500/10 dark:bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/10">
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-500 to-purple-600 dark:from-cyan-400 dark:to-purple-600 p-[1px] shadow-sm">
              <div className="w-full h-full bg-slate-900 dark:bg-slate-950 rounded-full flex items-center justify-center font-extrabold text-cyan-400 text-sm">
                AT
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-foreground">TEUFACK SONTSA Andelson</p>
              <p className="text-xs font-mono font-semibold text-slate-600 dark:text-muted-foreground">Développeur Full-Stack & Analyste IT (Douala, CM)</p>
            </div>
          </div>

          {/* Real Time Clock Douala */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 font-mono text-xs text-sky-700 dark:text-cyan-400 font-bold shadow-xs">
            <Clock className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 animate-pulse" />
            <span>Douala, CM (GMT+1):</span>
            <span className="font-extrabold text-slate-900 dark:text-foreground">{time || '18:30:00'}</span>
          </div>

          {/* Back to top magnetic button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3 rounded-full bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-400/40 dark:border-cyan-500/30 text-sky-700 dark:text-cyan-400 hover:bg-sky-600 dark:hover:bg-cyan-500 hover:text-white dark:hover:text-slate-950 transition-all shadow-lg glow-cyan"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-muted-foreground font-mono font-medium">
          <p>© {new Date().getFullYear()} TEUFACK SONTSA Andelson. All rights reserved.</p>
          <p className="text-slate-600 dark:text-slate-400">
            {language === 'en'
              ? 'Built with Next.js 16, React 19, Tailwind CSS v4 & Lenis Motion.'
              : 'Conçu avec Next.js 16, React 19, Tailwind CSS v4 & Lenis Motion.'}
          </p>
        </div>
      </div>
    </footer>
  )
}