'use client'

import { Bot } from 'lucide-react'
import type { Language } from '@/lib/portfolio-data'

interface AIAssistantTriggerProps {
  onOpen: () => void
  language: Language
}

export default function AIAssistantTrigger({
  onOpen,
  language,
}: AIAssistantTriggerProps) {
  const label = language === 'en' ? 'AI Assistant' : 'Assistant IA'
  const ariaLabel =
    language === 'en'
      ? 'Open Andelson AI Assistant (Command+K)'
      : 'Ouvrir l’assistant IA d’Andelson (Commande+K)'

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        type="button"
        onClick={onOpen}
        aria-label={ariaLabel}
        className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-card/95 backdrop-blur-md border border-border shadow-lg hover:border-sky-500/45 hover:shadow-xl text-foreground transition-all cursor-pointer"
      >
        <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-700 dark:text-sky-400">
          <Bot className="w-4 h-4" />
          <span
            className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-card"
            aria-hidden="true"
          />
        </span>

        <span className="text-xs sm:text-sm font-medium font-display">
          {label}
        </span>

        <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded bg-muted border border-border text-[10px] font-mono text-muted-foreground group-hover:text-foreground transition-colors">
          ⌘K
        </kbd>
      </button>
    </div>
  )
}
