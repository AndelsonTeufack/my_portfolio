'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, CheckCircle2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export interface ProjectType {
  title: string
  category: 'web' | 'mobile' | 'backend' | 'automation'
  description: string
  fullDetails?: string
  tags: string[]
  highlights: string[]
  demo: string
  code: string
}

interface ProjectModalProps {
  project: ProjectType | null
  onClose: () => void
  language: 'en' | 'fr'
}

export default function ProjectModal({ project, onClose, language }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-2xl bg-card border border-cyan-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 glass-card"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 inline-block">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold font-display text-foreground">{project.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          {/* Highlights */}
          <div className="space-y-3 my-6 pt-4 border-t border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">
              {language === 'en' ? 'Key Technical Highlights' : 'Réalisations Techniques Majeures'}
            </h4>
            <div className="space-y-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            {project.demo !== '#' ? (
              <Button
                asChild
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl gap-2"
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  {language === 'en' ? 'Live Demo' : 'Démo en ligne'}
                </a>
              </Button>
            ) : (
              <span className="text-xs font-mono text-muted-foreground italic">
                {language === 'en' ? 'Demo upon enterprise request' : 'Démo sur demande entreprise'}
              </span>
            )}

            <Button
              variant="outline"
              asChild
              className="border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-foreground rounded-xl gap-2"
            >
              <a href={project.code} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 text-cyan-400" />
                Code Source
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
