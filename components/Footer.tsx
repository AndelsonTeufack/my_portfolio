'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Mail, Clock, Globe } from 'lucide-react'

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
    <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-2xl py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-600 p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center font-bold text-cyan-400 text-sm">
                AT
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Andelson Teufack</p>
              <p className="text-xs font-mono text-muted-foreground">Full-Stack Developer & IT Analyst</p>
            </div>
          </div>

          {/* Real Time Clock Douala */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 font-mono text-xs text-cyan-400">
            <Clock className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>Douala, CM (GMT+1):</span>
            <span className="font-bold text-foreground">{time || '18:30:00'}</span>
          </div>

          {/* Back to top magnetic button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-lg glow-cyan"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <p>© 2026 Andelson Teufack. All rights reserved.</p>
          <p className="text-slate-400">
            {language === 'en'
              ? 'Built with Next.js 16, React 19, Tailwind CSS v4 & Lenis Motion.'
              : 'Conçu avec Next.js 16, React 19, Tailwind CSS v4 & Lenis Motion.'}
          </p>
        </div>
      </div>
    </footer>
  )
}