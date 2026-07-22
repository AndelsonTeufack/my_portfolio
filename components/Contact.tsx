'use client'

import { useState, useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
  FaPhone,
  FaCopy,
} from 'react-icons/fa'
import { Sparkles, Send, Check } from 'lucide-react'
import SpotlightCard from '@/components/ui/SpotlightCard'
import { toast } from 'sonner'

interface ContactProps {
  language: 'en' | 'fr'
}

const content = {
  en: {
    title: 'Initiate Contact',
    subtitle: 'Have a project, engineering inquiry, or consulting opportunity? Send a message below.',
    email: 'teufackandelson123@gmail.com',
    phoneTel: '+237 651 489 468',
    phoneWhatsapp: '+237 690 819 035',
    location: 'Douala, Cameroon (GMT+1)',
    formTitle: 'Send a Direct Message',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email Address',
    messagePlaceholder: 'Describe your project or inquiry...',
    sendButton: 'Send Message',
    sending: 'Encrypting & Sending...',
    successMessage: 'Message sent successfully! I will respond within 24 hours.',
    errorMessage: 'Failed to send message. Please try emailing directly.',
    socials: [
      { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/andelson-teufack-97a59b279/' },
      { name: 'GitHub', icon: FaGithub, href: 'https://github.com/AndelsonTeufack' },
    ],
  },
  fr: {
    title: 'Initier un Contact',
    subtitle: 'Vous avez un projet, une question d\'ingénierie ou une opportunité de consulting ? Laissez un message.',
    email: 'teufackandelson123@gmail.com',
    phoneTel: '+237 651 489 468',
    phoneWhatsapp: '+237 690 819 035',
    location: 'Douala, Cameroun (GMT+1)',
    formTitle: 'Envoyer un message direct',
    namePlaceholder: 'Votre Nom',
    emailPlaceholder: 'Votre Adresse Email',
    messagePlaceholder: 'Décrivez votre projet ou besoin...',
    sendButton: 'Envoyer le message',
    sending: 'Envoi sécurisé...',
    successMessage: 'Message envoyé avec succès ! Je répondrai sous 24 heures.',
    errorMessage: 'Échec de l\'envoi. Veuillez utiliser l\'email direct.',
    socials: [
      { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/andelson-teufack-97a59b279/' },
      { name: 'GitHub', icon: FaGithub, href: 'https://github.com/AndelsonTeufack' },
    ],
  },
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 14 },
  },
}

export default function Contact({ language }: ContactProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const text = language === 'en' ? content.en : content.fr
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const handleCopy = (val: string, label: string) => {
    navigator.clipboard.writeText(val)
    setCopiedField(label)
    toast.success(`${label} ${language === 'en' ? 'copied to clipboard!' : 'copié dans le presse-papier !'}`)
    setTimeout(() => setCopiedField(null), 2500)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send message')

      setFormData({ name: '', email: '', message: '' })
      toast.success(text.successMessage)
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error(text.errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-4 text-center md:text-left"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>// 05. Direct Connect</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl font-bold font-display text-foreground">
            {text.title}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            {text.subtitle}
          </motion.p>
        </motion.div>

        {/* Quick Contact Cards Row */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Email */}
          <motion.div variants={itemVariants}>
            <SpotlightCard className="p-6 border-white/10 glass-card-hover group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(text.email, 'Email')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-cyan-400 transition-colors"
                  title="Copy email"
                >
                  {copiedField === 'Email' ? <Check className="w-4 h-4 text-emerald-400" /> : <FaCopy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <h3 className="text-xs font-mono uppercase text-muted-foreground">Email</h3>
              <a href={`mailto:${text.email}`} className="text-sm font-semibold text-foreground hover:text-cyan-400 transition-colors break-all mt-1 block">
                {text.email}
              </a>
            </SpotlightCard>
          </motion.div>

          {/* Phone */}
          <motion.div variants={itemVariants}>
            <SpotlightCard className="p-6 border-white/10 glass-card-hover group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <FaPhone className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(text.phoneTel, 'Téléphone')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-purple-400 transition-colors"
                  title="Copy phone"
                >
                  {copiedField === 'Téléphone' ? <Check className="w-4 h-4 text-emerald-400" /> : <FaCopy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <h3 className="text-xs font-mono uppercase text-muted-foreground">Phone / Call</h3>
              <a href={`tel:${text.phoneTel.replace(/\s/g, '')}`} className="text-sm font-semibold text-foreground hover:text-purple-400 transition-colors mt-1 block">
                {text.phoneTel}
              </a>
            </SpotlightCard>
          </motion.div>

          {/* WhatsApp */}
          <motion.div variants={itemVariants}>
            <SpotlightCard className="p-6 border-white/10 glass-card-hover group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(text.phoneWhatsapp, 'WhatsApp')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-emerald-400 transition-colors"
                  title="Copy WhatsApp"
                >
                  {copiedField === 'WhatsApp' ? <Check className="w-4 h-4 text-emerald-400" /> : <FaCopy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <h3 className="text-xs font-mono uppercase text-muted-foreground">WhatsApp Direct</h3>
              <a
                href={`https://wa.me/${text.phoneWhatsapp.replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-foreground hover:text-emerald-400 transition-colors mt-1 block"
              >
                {text.phoneWhatsapp}
              </a>
            </SpotlightCard>
          </motion.div>

          {/* Location */}
          <motion.div variants={itemVariants}>
            <SpotlightCard className="p-6 border-white/10 glass-card-hover group">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-fit mb-4">
                <FaMapMarkerAlt className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-mono uppercase text-muted-foreground">Location</h3>
              <p className="text-sm font-semibold text-foreground mt-1">{text.location}</p>
            </SpotlightCard>
          </motion.div>
        </motion.div>

        {/* Contact Form & Social Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid lg:grid-cols-12 gap-8"
        >
          {/* Form (7 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <SpotlightCard className="p-8 border-cyan-500/20 spotlight-bg">
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold font-display text-foreground mb-4">{text.formTitle}</h3>

                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={text.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-foreground placeholder:text-muted-foreground/60 text-sm focus:border-cyan-400 focus:bg-cyan-500/5 focus:ring-1 focus:ring-cyan-400 transition-all outline-none font-sans"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={text.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-foreground placeholder:text-muted-foreground/60 text-sm focus:border-cyan-400 focus:bg-cyan-500/5 focus:ring-1 focus:ring-cyan-400 transition-all outline-none font-sans"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder={text.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-foreground placeholder:text-muted-foreground/60 text-sm focus:border-cyan-400 focus:bg-cyan-500/5 focus:ring-1 focus:ring-cyan-400 transition-all outline-none font-sans resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.01]"
                >
                  {isLoading ? (
                    <span>{text.sending}</span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <FaPaperPlane className="w-4 h-4" />
                      {text.sendButton}
                    </span>
                  )}
                </Button>
              </form>
            </SpotlightCard>
          </motion.div>

          {/* Socials & Callout (5 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <SpotlightCard className="p-8 border-purple-500/20 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-display text-foreground">Social & Code Networks</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Follow my technical updates, open-source repositories, and professional network.
                </p>

                <div className="flex gap-4 pt-2">
                  {text.socials.map((s, idx) => {
                    const Icon = s.icon
                    return (
                      <a
                        key={idx}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-cyan-400 transition-all hover:scale-110"
                        title={s.name}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">// Response guarantee</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Inquiries answered within 24 hours. Confidential NDA options available for corporate software projects.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}