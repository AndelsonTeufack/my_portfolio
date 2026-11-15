'use client'

import { useState, useEffect, useRef, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Send,
  Loader2,
  Trash2,
  Copy,
  Check,
  Bot,
  User,
  CornerDownLeft,
  ArrowUpRight,
  Download,
  ChevronRight,
} from 'lucide-react'
import { type ChatAction } from '@/lib/chatbot/knowledge-graph'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
  actions?: ChatAction[]
}

interface AIChatModalProps {
  isOpen: boolean
  onClose: () => void
  language: 'en' | 'fr'
}

const suggestedQuestions = {
  fr: [
    'Présente-moi le parcours d’Andelson.',
    'Quel est son rôle chez Kamer Engineering Solution ?',
    'Quelles applications a-t-il publiées sur Play Store ?',
    'Quelle est son expérience Offline-First & IA ?',
    'Maîtrise-t-il Spring Boot, FastAPI & Odoo ?',
    'Comment puis-je le contacter ?',
  ],
  en: [
    'Introduce Andelson’s engineering background.',
    'What does he lead at Kamer Engineering Solution?',
    'Which mobile apps has he shipped on Google Play?',
    'What is his experience with Offline-First & AI?',
    'Does he master Spring Boot, FastAPI & Odoo?',
    'How can I contact him?',
  ],
}

function getSafeHref(url: string): string | null {
  if (/^(https?:\/\/|mailto:|tel:|\/)/i.test(url.trim())) {
    return url.trim()
  }
  return null
}

function renderInlineMarkdown(text: string): ReactNode[] {
  const tokenRegex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`|\*([^*]+)\*)/g
  const nodes: ReactNode[] = []
  let lastIdx = 0
  let match: RegExpExecArray | null

  while ((match = tokenRegex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      nodes.push(text.slice(lastIdx, match.index))
    }

    if (match[2] && match[3]) {
      const safeHref = getSafeHref(match[3])
      if (safeHref) {
        nodes.push(
          <a
            key={match.index}
            href={safeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 dark:text-sky-400 underline underline-offset-2 hover:text-sky-500 transition-colors font-medium"
          >
            {match[2]}
          </a>
        )
      } else {
        nodes.push(match[2])
      }
    } else if (match[4]) {
      nodes.push(
        <strong key={match.index} className="font-semibold text-foreground">
          {match[4]}
        </strong>
      )
    } else if (match[5]) {
      nodes.push(
        <code
          key={match.index}
          className="px-1.5 py-0.5 rounded bg-slate-200/80 dark:bg-white/10 font-mono text-[11px] text-sky-700 dark:text-sky-300"
        >
          {match[5]}
        </code>
      )
    } else if (match[6]) {
      nodes.push(
        <em key={match.index} className="italic opacity-90">
          {match[6]}
        </em>
      )
    }

    lastIdx = tokenRegex.lastIndex
  }

  if (lastIdx < text.length) {
    nodes.push(text.slice(lastIdx))
  }

  return nodes
}

function renderMarkdownContent(content: string): ReactNode {
  const lines = content.split('\n')
  const blocks: ReactNode[] = []

  lines.forEach((line, idx) => {
    const trimmed = line.trim()

    if (!trimmed) {
      blocks.push(<div key={`sp-${idx}`} className="h-1.5" />)
      return
    }

    if (/^---+$/.test(trimmed)) {
      blocks.push(<hr key={`hr-${idx}`} className="my-2 border-slate-200/70 dark:border-white/10" />)
      return
    }

    if (trimmed.startsWith('> ')) {
      blocks.push(
        <div
          key={`bq-${idx}`}
          className="pl-3 py-0.5 my-1 border-l-2 border-sky-500/60 text-slate-600 dark:text-slate-300"
        >
          {renderInlineMarkdown(trimmed.slice(2))}
        </div>
      )
      return
    }

    const subBulletMatch = line.match(/^\s{2,}[*-]\s+(.*)$/)
    if (subBulletMatch) {
      blocks.push(
        <div key={`sub-${idx}`} className="flex items-start gap-2 pl-4 leading-relaxed">
          <span className="mt-2 h-1 w-1 rounded-full bg-slate-400 shrink-0" />
          <span>{renderInlineMarkdown(subBulletMatch[1])}</span>
        </div>
      )
      return
    }

    const bulletMatch = trimmed.match(/^[*-]\s+(.*)$/)
    if (bulletMatch) {
      blocks.push(
        <div key={`li-${idx}`} className="flex items-start gap-2 pl-0.5 leading-relaxed">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500 dark:bg-sky-400 shrink-0" />
          <span>{renderInlineMarkdown(bulletMatch[1])}</span>
        </div>
      )
      return
    }

    const numberedMatch = trimmed.match(/^(\d+\.)\s+(.*)$/)
    if (numberedMatch) {
      blocks.push(
        <div key={`ol-${idx}`} className="flex items-start gap-2 pl-0.5 leading-relaxed">
          <span className="font-mono text-[11px] text-sky-600 dark:text-sky-400 font-semibold mt-0.5 shrink-0">
            {numberedMatch[1]}
          </span>
          <span>{renderInlineMarkdown(numberedMatch[2])}</span>
        </div>
      )
      return
    }

    blocks.push(
      <p key={`p-${idx}`} className="leading-relaxed">
        {renderInlineMarkdown(trimmed)}
      </p>
    )
  })

  return <div className="space-y-1 font-sans">{blocks}</div>
}

function buildWelcomeMessage(language: 'en' | 'fr'): Message {
  return {
    id: 'welcome',
    role: 'assistant',
    content:
      language === 'en'
        ? 'Hello! I am **Andelson’s Assistant**, powered by his verified engineering knowledge base.\n\nAsk me anything about his lead role at **Kamer Engineering Solution**, his projects (**Laoshi Consulting**, offline-first Flutter apps, **SOCAD’EL GIS**, **MomoKash**), his stack, or his CV.'
        : 'Bonjour ! Je suis **l’Assistant d’Andelson**, adossé à sa base de connaissances d’ingénierie vérifiée.\n\nPosez-moi vos questions sur son rôle chez **Kamer Engineering Solution**, ses projets (**Laoshi Consulting**, apps Flutter offline-first, **SIG SOCAD’EL**, **MomoKash**), sa stack ou son CV !',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  }
}

export default function AIChatModal({ isOpen, onClose, language }: AIChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [dynamicSuggestions, setDynamicSuggestions] = useState<string[] | null>(null)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const activeSuggestions =
    dynamicSuggestions ?? (language === 'en' ? suggestedQuestions.en : suggestedQuestions.fr)

  // Initialize Welcome Message & refresh if user toggles language before chatting
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([buildWelcomeMessage(language)])
    } else if (messages.length === 1 && messages[0].id === 'welcome') {
      setMessages([buildWelcomeMessage(language)])
      setDynamicSuggestions(null)
    }
  }, [language, messages.length])

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  // Keybinding Cmd+K / Ctrl+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) {
          onClose()
        } else {
          // Trigger open via parent
          const event = new CustomEvent('toggle-ai-chat')
          window.dispatchEvent(event)
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const handleActionClick = (action: ChatAction) => {
    if (action.type === 'scroll') {
      onClose()
      setTimeout(() => {
        const el = document.querySelector(action.target)
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 150)
    }
  }

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim()
    if (!text || isLoading) return

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    setMessages((prev) => [...prev, userMsg])
    if (!textToSend) setInput('')
    setIsLoading(true)

    try {
      const apiMessages = [...messages, userMsg]
        .filter((m) => m.id !== 'welcome')
        .map((m) => ({
          role: m.role,
          content: m.content,
        }))

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages, language }),
      })

      const data = await res.json()
      const replyText =
        data.reply ||
        (language === 'en' ? 'I could not generate a response.' : 'Impossible de générer une réponse.')

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: Array.isArray(data.actions) ? data.actions : undefined,
      }

      if (Array.isArray(data.followUpSuggestions) && data.followUpSuggestions.length > 0) {
        setDynamicSuggestions(data.followUpSuggestions)
      }

      setMessages((prev) => [...prev, assistantMsg])
    } catch (err) {
      console.error('Chat error:', err)
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content:
          language === 'en'
            ? 'An error occurred. Please try again.'
            : 'Une erreur s\'est produite. Veuillez réessayer.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
      setMessages((prev) => [...prev, errorMsg])
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleClear = () => {
    setDynamicSuggestions(null)
    setMessages([buildWelcomeMessage(language)])
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          data-lenis-prevent
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 16 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="relative w-full max-w-2xl h-[85vh] max-h-[700px] rounded-2xl bg-background border border-border shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-border flex items-center justify-between bg-card/95 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-700 dark:text-sky-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold font-display text-foreground">Andelson AI</h3>
                    <span className="px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-[10px] font-mono font-semibold text-sky-700 dark:text-sky-300">
                      {isLoading ? (language === 'en' ? 'ANALYZING' : 'ANALYSE') : 'READY'}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono">
                    {language === 'en' ? 'Portfolio Knowledge Assistant' : 'Assistant Technique & Parcours'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleClear}
                  className="p-2 rounded-lg text-slate-500 hover:text-rose-500 hover:bg-rose-500/10 transition-colors"
                  title={language === 'en' ? 'Clear conversation' : 'Effacer la discussion'}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-foreground hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div
              data-lenis-prevent
              className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-6 space-y-6"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-700 dark:text-sky-400 shrink-0 mt-1">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-sky-600 dark:bg-sky-400 text-white dark:text-slate-950 font-medium shadow-sm'
                        : 'editorial-surface text-foreground shadow-xs'
                    }`}
                  >
                    {msg.role === 'assistant' ? (
                      renderMarkdownContent(msg.content)
                    ) : (
                      <div className="whitespace-pre-wrap font-sans">{msg.content}</div>
                    )}

                    {msg.role === 'assistant' && msg.actions && msg.actions.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t border-slate-200/60 dark:border-white/10">
                        {msg.actions.map((action, actionIdx) => {
                          const pillClass =
                            'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/25 text-[11px] font-medium text-sky-700 dark:text-sky-300 transition-colors cursor-pointer'

                          if (action.type === 'scroll') {
                            return (
                              <button
                                key={`${action.target}-${actionIdx}`}
                                type="button"
                                onClick={() => handleActionClick(action)}
                                className={pillClass}
                              >
                                <ChevronRight className="w-3 h-3 shrink-0" />
                                <span>{action.label}</span>
                              </button>
                            )
                          }

                          if (action.type === 'download') {
                            return (
                              <a
                                key={`${action.target}-${actionIdx}`}
                                href={action.target}
                                download
                                className={pillClass}
                              >
                                <Download className="w-3 h-3 shrink-0" />
                                <span>{action.label}</span>
                              </a>
                            )
                          }

                          return (
                            <a
                              key={`${action.target}-${actionIdx}`}
                              href={action.target}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={pillClass}
                            >
                              <ArrowUpRight className="w-3 h-3 shrink-0" />
                              <span>{action.label}</span>
                            </a>
                          )
                        })}
                      </div>
                    )}

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200/50 dark:border-white/5 text-[10px] opacity-70">
                      <span>{msg.timestamp}</span>
                      {msg.role === 'assistant' && (
                        <button
                          onClick={() => handleCopy(msg.id, msg.content)}
                          className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors ml-2"
                        >
                          {copiedId === msg.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        </button>
                      )}
                    </div>
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 flex items-center justify-center shrink-0 mt-1 font-bold text-xs">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-3 text-sky-700 dark:text-sky-400 text-xs font-mono">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{language === 'en' ? 'Andelson AI is thinking...' : 'Andelson AI génère la réponse...'}</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions Pills */}
            <div className="px-4 py-2 bg-slate-50 dark:bg-white/[0.02] border-t border-slate-200/80 dark:border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar">
              {activeSuggestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="px-3 py-1.5 rounded-full bg-secondary hover:bg-muted border border-border hover:border-sky-500/40 text-xs font-medium text-secondary-foreground hover:text-sky-700 dark:hover:text-sky-300 whitespace-nowrap transition-all shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 sm:p-4 bg-card/95 border-t border-border backdrop-blur-xl">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={language === 'en' ? 'Ask anything about Andelson... (Cmd+K)' : 'Posez une question sur Andelson... (Cmd+K)'}
                  className="flex-1 px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground/60 text-xs sm:text-sm focus:border-sky-600 dark:focus:border-sky-400 transition-colors outline-none font-medium"
                />

                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-3 rounded-xl bg-sky-600 hover:bg-sky-700 dark:bg-sky-400 dark:hover:bg-sky-300 text-white dark:text-slate-950 font-semibold disabled:opacity-50 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
