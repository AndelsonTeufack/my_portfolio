'use client'

import { useState, useRef, FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  Clock,
  FileText,
  CheckCircle2,
  Loader2,
} from 'lucide-react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { toast } from 'sonner'
import SpotlightCard from '@/components/ui/SpotlightCard'
import { PORTFOLIO_PROFILE, type Language } from '@/lib/portfolio-data'

interface ContactProps {
  language: Language
}

export default function Contact({ language }: ContactProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null)

  const copy = {
    fr: {
      eyebrow: '05 - CONTACT',
      title: 'Échanger autour d’un projet ou d’une opportunité',
      subtitle:
        'Disponible pour discuter d’architecture logicielle, de développement full-stack/mobile critique ou de collaboration technique.',
      directTitle: 'Coordonnées Directes',
      emailLabel: 'Email professionnel',
      phoneLabel: 'Téléphone',
      whatsappLabel: 'WhatsApp direct',
      whatsappAction: 'Démarrer une conversation',
      locationLabel: 'Localisation',
      copyLabel: 'Copier',
      copiedLabel: 'Copié',
      copyEmailToast: 'Adresse email copiée dans le presse-papiers.',
      copyPhoneToast: 'Numéro de téléphone copié dans le presse-papiers.',
      copyErrorToast: 'Impossible de copier dans le presse-papiers.',
      networksTitle: 'Réseaux & Documentation',
      cvButton: 'Télécharger le CV (PDF)',
      slaTitle: 'Délai de réponse',
      slaText:
        'Réponse généralement sous 24 heures ouvrées sur le fuseau de Douala (GMT+1).',
      formTitle: 'Envoyer un message',
      formSubtitle:
        'Décrivez brièvement votre besoin, le contexte technique ou l’opportunité envisagée.',
      nameLabel: 'Nom complet',
      namePlaceholder: 'Ex. Marc Mbarga',
      emailInputLabel: 'Adresse email',
      emailPlaceholder: 'nom@entreprise.com',
      subjectLabel: 'Objet (optionnel)',
      subjectPlaceholder: 'Architecture mobile, poste Full-Stack, audit...',
      messageLabel: 'Message',
      messagePlaceholder:
        'Précisez votre contexte, vos objectifs ou vos disponibilités...',
      submitButton: 'Envoyer le message',
      sendingButton: 'Envoi en cours...',
      successTitle: 'Message envoyé avec succès',
      successBody:
        'Merci pour votre message. Je vous répondrai dans les plus brefs délais.',
      sendAnother: 'Envoyer un autre message',
      validationError: 'Veuillez renseigner votre nom, email et message.',
      successToast: 'Votre message a bien été envoyé.',
      errorToast:
        'Une erreur est survenue lors de l’envoi. Vous pouvez me joindre directement par email.',
    },
    en: {
      eyebrow: '05 - CONTACT',
      title: 'Start an Engineering Conversation',
      subtitle:
        'Open to discussing software architecture, mission-critical full-stack/mobile delivery, or strategic technical roles.',
      directTitle: 'Direct Channels',
      emailLabel: 'Work Email',
      phoneLabel: 'Phone',
      whatsappLabel: 'Direct WhatsApp',
      whatsappAction: 'Open chat thread',
      locationLabel: 'Location',
      copyLabel: 'Copy',
      copiedLabel: 'Copied',
      copyEmailToast: 'Email address copied to clipboard.',
      copyPhoneToast: 'Phone number copied to clipboard.',
      copyErrorToast: 'Unable to copy to clipboard.',
      networksTitle: 'Profiles & Resume',
      cvButton: 'Download Resume (PDF)',
      slaTitle: 'Response SLA',
      slaText:
        'Inquiries are typically answered within 24 business hours (Douala, GMT+1).',
      formTitle: 'Send a Direct Message',
      formSubtitle:
        'Share a brief overview of your technical context, role, or project scope.',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g. Sarah Connor',
      emailInputLabel: 'Email Address',
      emailPlaceholder: 'name@company.com',
      subjectLabel: 'Subject (optional)',
      subjectPlaceholder: 'Mobile architecture, Full-Stack role, consulting...',
      messageLabel: 'Message',
      messagePlaceholder:
        'Share key requirements, timeline, or preferred meeting slots...',
      submitButton: 'Send message',
      sendingButton: 'Sending message...',
      successTitle: 'Message delivered',
      successBody:
        'Thank you for reaching out. I will review your message and reply shortly.',
      sendAnother: 'Send another message',
      validationError: 'Please fill in your name, email, and message.',
      successToast: 'Your message has been sent successfully.',
      errorToast:
        'Failed to send your message. Please reach out directly by email.',
    },
  }

  const t = copy[language]

  const whatsappDigits = PORTFOLIO_PROFILE.contact.whatsapp.replace(/\D/g, '')
  const telDigits = PORTFOLIO_PROFILE.contact.phone.replace(/\s+/g, '')

  const handleCopy = async (value: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedField(field)
      toast.success(field === 'email' ? t.copyEmailToast : t.copyPhoneToast)
      setTimeout(() => {
        setCopiedField((prev) => (prev === field ? null : prev))
      }, 2000)
    } catch {
      toast.error(t.copyErrorToast)
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const trimmedName = formData.name.trim()
    const trimmedEmail = formData.email.trim()
    const trimmedSubject = formData.subject.trim()
    const trimmedMessage = formData.message.trim()

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      toast.error(t.validationError)
      return
    }

    const composedMessage = trimmedSubject
      ? `[${trimmedSubject}]\n\n${trimmedMessage}`
      : trimmedMessage

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: composedMessage,
        }),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setIsSent(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      toast.success(t.successToast)
    } catch {
      toast.error(t.errorToast)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45 }}
        className="max-w-2xl mb-12 sm:mb-14 space-y-3"
      >
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-400">
          {t.eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground tracking-tight">
          {t.title}
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          {t.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Coordinates + Networks */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="lg:col-span-5 space-y-5"
        >
          <SpotlightCard className="p-6 rounded-2xl space-y-4">
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-muted-foreground">
              {t.directTitle}
            </h3>

            <div className="space-y-3">
              {/* Email */}
              <div className="p-3.5 rounded-xl bg-secondary/70 border border-border flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PORTFOLIO_PROFILE.contact.email}`}
                  className="flex items-center gap-3 min-w-0 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-700 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono text-muted-foreground">
                      {t.emailLabel}
                    </p>
                    <p className="text-sm font-medium text-foreground group-hover:text-sky-700 dark:group-hover:text-sky-400 truncate transition-colors">
                      {PORTFOLIO_PROFILE.contact.email}
                    </p>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() =>
                    handleCopy(PORTFOLIO_PROFILE.contact.email, 'email')
                  }
                  aria-label={`${t.copyLabel} ${PORTFOLIO_PROFILE.contact.email}`}
                  className="shrink-0 p-2 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-secondary/70 border border-border flex items-center justify-between gap-3">
                <a
                  href={`tel:${telDigits}`}
                  className="flex items-center gap-3 min-w-0 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-700 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono text-muted-foreground">
                      {t.phoneLabel}
                    </p>
                    <p className="text-sm font-medium text-foreground group-hover:text-sky-700 dark:group-hover:text-sky-400 truncate transition-colors">
                      {PORTFOLIO_PROFILE.contact.phone}
                    </p>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() =>
                    handleCopy(PORTFOLIO_PROFILE.contact.phone, 'phone')
                  }
                  aria-label={`${t.copyLabel} ${PORTFOLIO_PROFILE.contact.phone}`}
                  className="shrink-0 p-2 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-secondary/70 border border-border hover:border-emerald-500/40 flex items-center justify-between gap-3 group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <FaWhatsapp className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-muted-foreground">
                      {t.whatsappLabel}
                    </p>
                    <p className="text-sm font-medium text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {t.whatsappAction}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-secondary/70 border border-border flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-700 dark:text-sky-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-muted-foreground">
                    {t.locationLabel}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {PORTFOLIO_PROFILE.location[language]}
                  </p>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Networks & CV Card */}
          <SpotlightCard className="p-6 rounded-2xl space-y-4">
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-muted-foreground">
              {t.networksTitle}
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={PORTFOLIO_PROFILE.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-secondary hover:bg-muted border border-border text-sm font-medium text-foreground transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <FaGithub className="w-4 h-4" />
                  <span>GitHub</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
              </a>

              <a
                href={PORTFOLIO_PROFILE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-secondary hover:bg-muted border border-border text-sm font-medium text-foreground transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <FaLinkedin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>LinkedIn</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
              </a>
            </div>

            <a
              href="/CV - Andelson TEUFACK.pdf"
              download="CV - Andelson TEUFACK.pdf"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 dark:bg-sky-400 dark:hover:bg-sky-300 text-white dark:text-slate-950 font-semibold text-sm transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>{t.cvButton}</span>
            </a>

            <div className="pt-3 border-t border-border flex items-start gap-2.5 text-xs text-muted-foreground">
              <Clock className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-mono font-semibold text-foreground/90 mb-0.5">
                  {t.slaTitle}
                </p>
                <p className="leading-relaxed">{t.slaText}</p>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="lg:col-span-7"
        >
          <SpotlightCard className="p-6 sm:p-8 rounded-2xl">
            {isSent ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-xl font-bold font-display text-foreground">
                    {t.successTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.successBody}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSent(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary hover:bg-muted border border-border text-sm font-medium text-foreground transition-colors"
                >
                  {t.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="space-y-1.5 pb-2 border-b border-border">
                  <h3 className="text-xl font-bold font-display text-foreground">
                    {t.formTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t.formSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-semibold text-foreground/90"
                    >
                      {t.nameLabel} <span className="text-sky-600 dark:text-sky-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      placeholder={t.namePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-input text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-semibold text-foreground/90"
                    >
                      {t.emailInputLabel} <span className="text-sky-600 dark:text-sky-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      placeholder={t.emailPlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-input text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono font-semibold text-foreground/90"
                  >
                    {t.subjectLabel}
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        subject: e.target.value,
                      }))
                    }
                    placeholder={t.subjectPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-input text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-semibold text-foreground/90"
                  >
                    {t.messageLabel} <span className="text-sky-600 dark:text-sky-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    placeholder={t.messagePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-input text-sm text-foreground placeholder:text-muted-foreground/60 resize-y transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 dark:bg-sky-400 dark:hover:bg-sky-300 text-white dark:text-slate-950 font-semibold text-sm disabled:opacity-60 disabled:pointer-events-none transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{t.sendingButton}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.submitButton}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  )
}
