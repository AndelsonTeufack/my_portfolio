'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Bot, MessageSquare } from 'lucide-react'

interface AIAvatarProps {
  state?: 'idle' | 'thinking' | 'speaking' | 'invited'
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
  showTooltip?: boolean
  tooltipText?: string
}

export default function AIAvatar({
  state = 'idle',
  onClick,
  size = 'md',
  showTooltip = false,
  tooltipText,
}: AIAvatarProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const sizePx = size === 'sm' ? 44 : size === 'md' ? 64 : 100

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let angle = 0

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      setMousePos({
        x: (e.clientX - centerX) / (window.innerWidth / 2),
        y: (e.clientY - centerY) / (window.innerHeight / 2),
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    const render = () => {
      ctx.clearRect(0, 0, sizePx, sizePx)
      const center = sizePx / 2
      const radius = sizePx * 0.35

      angle += state === 'thinking' ? 0.08 : state === 'speaking' ? 0.05 : 0.02

      // Outer Holographic Ring 1
      ctx.beginPath()
      ctx.arc(
        center + mousePos.x * 3,
        center + mousePos.y * 3,
        radius + Math.sin(angle) * 3,
        0,
        Math.PI * 2
      )
      ctx.strokeStyle = state === 'thinking' ? 'rgba(168, 85, 247, 0.7)' : 'rgba(0, 240, 255, 0.6)'
      ctx.lineWidth = 2
      ctx.stroke()

      // Rotating Particle Satellites
      for (let i = 0; i < 3; i++) {
        const satAngle = angle * (i % 2 === 0 ? 1 : -1) + (i * Math.PI * 2) / 3
        const satX = center + Math.cos(satAngle) * (radius + 4)
        const satY = center + Math.sin(satAngle) * (radius + 4)

        ctx.beginPath()
        ctx.arc(satX, satY, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = i === 0 ? '#00f0ff' : i === 1 ? '#a855f7' : '#3b82f6'
        ctx.fill()
      }

      // Inner Core Pulse
      const coreGradient = ctx.createRadialGradient(center, center, 2, center, center, radius * 0.8)
      coreGradient.addColorStop(0, state === 'thinking' ? '#a855f7' : '#00f0ff')
      coreGradient.addColorStop(0.6, state === 'speaking' ? 'rgba(168, 85, 247, 0.8)' : 'rgba(2, 132, 199, 0.6)')
      coreGradient.addColorStop(1, 'rgba(3, 3, 5, 0)')

      ctx.beginPath()
      ctx.arc(center + mousePos.x * 2, center + mousePos.y * 2, radius * 0.75, 0, Math.PI * 2)
      ctx.fillStyle = coreGradient
      ctx.fill()

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [state, mousePos, sizePx])

  return (
    <div className="relative inline-block group">
      {/* Tooltip Invitation */}
      <AnimatePresence>
        {showTooltip && tooltipText && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute bottom-full right-0 mb-3 w-64 p-3 rounded-xl glass-card border-sky-400/40 dark:border-cyan-500/30 text-xs text-slate-900 dark:text-foreground font-medium shadow-xl pointer-events-auto cursor-pointer z-50 flex items-start gap-2.5"
            onClick={onClick}
          >
            <div className="p-1.5 rounded-lg bg-sky-500/10 dark:bg-cyan-500/20 text-sky-600 dark:text-cyan-400 shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-sky-700 dark:text-cyan-300 font-display">Andelson AI</p>
              <p className="text-slate-600 dark:text-muted-foreground mt-0.5 leading-relaxed">{tooltipText}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cyber Avatar Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={onClick}
        className={`relative rounded-full flex items-center justify-center cursor-pointer transition-all overflow-hidden ${
          size === 'sm' ? 'w-11 h-11' : size === 'md' ? 'w-16 h-16' : 'w-24 h-24'
        } bg-slate-900/90 dark:bg-slate-950/90 border border-sky-400/40 dark:border-cyan-500/40 shadow-lg shadow-sky-500/20 dark:shadow-cyan-500/20 glow-cyan`}
        aria-label="Open Andelson AI Assistant"
      >
        <canvas
          ref={canvasRef}
          width={sizePx}
          height={sizePx}
          className="pointer-events-none absolute inset-0"
        />

        {/* Center Monogram / Icon */}
        <div className="relative z-10 flex items-center justify-center text-cyan-400 font-extrabold font-mono text-xs">
          {state === 'thinking' ? (
            <Sparkles className="w-5 h-5 text-purple-400 animate-spin" />
          ) : state === 'speaking' ? (
            <MessageSquare className="w-5 h-5 text-cyan-300 animate-pulse" />
          ) : (
            <Bot className="w-5 h-5 text-cyan-400" />
          )}
        </div>
      </motion.button>
    </div>
  )
}
