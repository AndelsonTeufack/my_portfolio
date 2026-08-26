'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Sparkles, Trash2, Copy, Check, Bot, User, CornerDownLeft } from 'lucide-react'
import AIAvatar from '@/components/ui/AIAvatar'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

interface AIChatModalProps {
  isOpen: boolean
  onClose: () => void
  language: 'en' | 'fr'
}

const suggestedQuestions = {
  fr: [
    '👋 Présente-moi Andelson.',
    '🚀 Quels sont ses meilleurs projets ?',
    '📱 Quelle est son expérience Flutter & Mobile ?',
    '⚡ Maîtrise-t-il Spring Boot & Python ?',
    '🎯 Pourquoi devrais-je le recruter ?',
    '📬 Comment puis-je le contacter ?',
  ],
  en: [
    '👋 Tell me about Andelson.',
    '🚀 What are his top projects?',
    '📱 What is his Flutter & Mobile experience?',
    '⚡ Does he master Spring Boot & Python?',
    '🎯 Why should I hire him?',
    '📬 How can I contact him?',
  ],
}

export default function AIChatModal({ isOpen, onClose, language }: AIChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const activeSuggestions = language === 'en' ? suggestedQuestions.en : suggestedQuestions.fr

  // Initialize Welcome Message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          role: 'assistant',
          content:
            language === 'en'
              ? 'Hello! I am **Andelson AI**, the official digital extension of TEUFACK SONTSA Andelson.\n\nAsk me anything about his software engineering track record, Flutter & Spring Boot projects, or technical expertise!'
              : 'Bonjour ! Je suis **Andelson AI**, l\'extension numérique officielle de TEUFACK SONTSA Andelson.\n\nPosez-moi n\'importe quelle question sur son parcours d\'ingénieur, ses projets Flutter & Spring Boot ou ses compétences !',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ])
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
      const apiMessages = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.content,
      }))

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages, language }),
      })

      const data = await res.json()
      const replyText = data.reply || (language === 'en' ? 'I could not generate a response.' : 'Impossible de générer une réponse.')

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }

      setMessages((prev) => [...prev, assistantMsg])
    } catch (err) {
      console.error('Chat error:', err)
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: language === 'en' ? 'An error occurred. Please try again.' : 'Une erreur s\'est produite. Veuillez réessayer.',
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
    setMessages([])
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-auto">
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
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-full max-w-2xl h-[85vh] max-h-[700px] rounded-3xl glass-card border border-sky-400/40 dark:border-cyan-500/30 shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200/80 dark:border-white/10 flex items-center justify-between bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <AIAvatar size="sm" state={isLoading ? 'thinking' : 'idle'} />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold font-display text-slate-900 dark:text-foreground">Andelson AI</h3>
                    <span className="px-2 py-0.5 rounded-full bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-400/30 dark:border-cyan-500/30 text-[10px] font-mono font-bold text-sky-700 dark:text-cyan-400">
                      LIVE RAG
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-muted-foreground font-mono">
                    {language === 'en' ? 'Digital Assistant & Career Extension' : 'Assistant Numérique & Extension de Profil'}
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
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-sky-500/10 dark:bg-cyan-500/20 border border-sky-400/40 dark:border-cyan-500/30 flex items-center justify-center text-sky-600 dark:text-cyan-400 shrink-0 mt-1">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-sky-600 to-blue-600 dark:from-cyan-500 dark:to-blue-600 text-white font-medium shadow-md'
                        : 'glass-card border-slate-200/80 dark:border-white/10 text-slate-900 dark:text-foreground font-medium shadow-sm'
                    }`}
                  >
                    <div className="whitespace-pre-wrap font-sans">{msg.content}</div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200/50 dark:border-white/5 text-[10px] opacity-70">
                      <span>{msg.timestamp}</span>
                      {msg.role === 'assistant' && (
                        <button
                          onClick={() => handleCopy(msg.id, msg.content)}
                          className="hover:text-sky-600 dark:hover:text-cyan-300 transition-colors ml-2"
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
                <div className="flex items-center gap-3 text-sky-600 dark:text-cyan-400 text-xs font-mono">
                  <Sparkles className="w-4 h-4 animate-spin" />
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
                  className="px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 hover:border-sky-400 dark:hover:border-cyan-400 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-sky-700 dark:hover:text-cyan-300 whitespace-nowrap transition-all shrink-0 shadow-2xs"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 sm:p-4 bg-white/90 dark:bg-slate-950/90 border-t border-slate-200/80 dark:border-white/10 backdrop-blur-xl">
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
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-foreground placeholder:text-slate-400 dark:placeholder:text-muted-foreground/60 text-xs sm:text-sm focus:border-sky-500 dark:focus:border-cyan-400 focus:bg-white dark:focus:bg-cyan-500/5 transition-all outline-none font-medium"
                />

                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 dark:from-cyan-500 dark:to-blue-600 text-white dark:text-slate-950 font-bold disabled:opacity-50 transition-all hover:scale-105 shadow-md"
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
