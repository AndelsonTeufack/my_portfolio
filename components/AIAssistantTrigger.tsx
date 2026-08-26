'use client'

import { useState, useEffect } from 'react'
import AIAvatar from '@/components/ui/AIAvatar'

interface AIAssistantTriggerProps {
  onOpen: () => void
  language: 'en' | 'fr'
}

const invitations = {
  fr: [
    'Posez-moi une question sur le parcours d\'Andelson ! 👋',
    'Curieux d\'en savoir plus sur ses projets Flutter & Spring Boot ? 🚀',
    'Découvrez ses réalisations chez KES IP & Credix ! 💡',
    'Demandez-moi : "Pourquoi recruter Andelson ?" 🎯',
  ],
  en: [
    'Ask me anything about Andelson\'s career! 👋',
    'Curious about his Flutter & Spring Boot projects? 🚀',
    'Explore his impact at KES IP & Credix! 💡',
    'Ask me: "Why hire Andelson?" 🎯',
  ],
}

export default function AIAssistantTrigger({ onOpen, language }: AIAssistantTriggerProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipIndex, setTooltipIndex] = useState(0)

  const activeInvitations = language === 'en' ? invitations.en : invitations.fr

  useEffect(() => {
    // Show invitation after 6 seconds of idle time
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 6000)

    // Cycle invitations every 12 seconds
    const interval = setInterval(() => {
      setTooltipIndex((prev) => (prev + 1) % activeInvitations.length)
    }, 12000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [activeInvitations.length])

  return (
    <div className="fixed bottom-6 right-6 z-40 pointer-events-auto">
      <AIAvatar
        state={showTooltip ? 'invited' : 'idle'}
        size="md"
        showTooltip={showTooltip}
        tooltipText={activeInvitations[tooltipIndex]}
        onClick={() => {
          setShowTooltip(false)
          onOpen()
        }}
      />
    </div>
  )
}
