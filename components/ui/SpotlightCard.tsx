'use client'

import { useRef, useState, ReactNode, MouseEvent, KeyboardEvent } from 'react'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
  spotlightColor?: string
  onClick?: () => void
  interactive?: boolean
}

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor,
  onClick,
  interactive = false,
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      onClick={onClick}
      onKeyDown={onClick ? handleKeyDown : undefined}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={`relative overflow-hidden rounded-xl editorial-surface ${
        interactive || onClick ? 'editorial-surface-hover cursor-pointer' : ''
      } ${className}`}
    >
      {/* Subtle architectural specular highlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-xl"
        style={{
          opacity,
          background: `radial-gradient(420px circle at ${position.x}px ${position.y}px, ${
            spotlightColor || 'rgba(56, 189, 248, 0.06)'
          }, transparent 45%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}
