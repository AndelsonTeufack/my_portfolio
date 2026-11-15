'use client'

import { useState, useRef, FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  FileText,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { toast } from 'sonner'
import SpotlightCard from '@/components/ui/SpotlightCard'
import { PORTFOLIO_PROFILE, type Language } from '@/lib/portfolio-data'

interface ContactProps {
  language: Language
}

type InquiryKey = 'recruitment' | 'freelance' | 'collaboration' | 'other'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact({ language }: ContactProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const [formData, setFormData] = useState<{
    name: string
    email: string
    inquiryType: InquiryKey
    message: string
    _gotcha_hp: string
  }>({
    name: '',
    email: '',
    inquiryType: 'recruitment',
    message: '',
    _gotcha_hp: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null)

  const copy = {
    fr: {
      eyebrow: '05 — Contact',
      title: 'Contact',
      subtitle: 'Un projet, une opportunité ? Écrivez-moi, je réponds sous 24 h.',
      directTitle: 'Coordonnées',
      emailLabel: 'Email',
      phoneLabel: 'Téléphone',
      whatsappLabel: 'WhatsApp',
      whatsappAction: 'Démarrer une conversation',
      whatsappPrefill: 'Bonjour Andelson, je vous contacte depuis votre portfolio.',
      metaNote: 'Douala · UTC+1 · Réponse sous 24 h ouvrées.',
      copyLabel: 'Copier',
      copyEmailToast: 'Adresse email copiée dans le presse-papiers.',
      copyPhoneToast: 'Numéro de téléphone copié dans le presse-papiers.',
      copyErrorToast: 'Impossible de copier dans le presse-papiers.',
      linksTitle: 'Liens',
      cvButton: 'Télécharger le CV (PDF)',
      formTitle: 'Envoyer un message',
      nameLabel: 'Nom complet',
      namePlaceholder: 'Ex. Marc Mbarga',
      emailInputLabel: 'Adresse email',
      emailPlaceholder: 'nom@entreprise.com',
      inquiryTypeLabel: 'Type de demande',
      inquiryOptions: {
        recruitment: 'Recrutement',
        freelance: 'Mission freelance',
        collaboration: 'Collaboration',
        other: 'Autre',
      } satisfies Record<InquiryKey, string>,
      messageLabel: 'Message',
      messagePlaceholder:
        'Précisez votre contexte, vos objectifs ou vos disponibilités...',
      submitButton: 'Envoyer le message',
      sendingButton: 'Envoi en cours...',
      privacyNote: 'Vos données ne servent qu’à répondre à votre message.',
      successTitle: 'Message envoyé',
      successBody:
        'Merci pour votre message. Je vous répondrai sous 24 h ouvrées.',
      sendAnother: 'Envoyer un autre message',
      validationRequired: 'Veuillez renseigner votre nom (min. 2 caractères), une adresse email valide et un message (min. 5 caractères).',
      validationEmail: 'Veuillez saisir une adresse email valide.',
      successToast: 'Votre message a bien été envoyé.',
      errorToast:
        'L’envoi a échoué pour le moment. Vous pouvez me joindre directement par email ou WhatsApp.',
    },
    en: {
      eyebrow: '05 — Contact',
      title: 'Contact',
      subtitle: 'Have a project or an opportunity? Write to me — I reply within 24h.',
      directTitle: 'Direct contact',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      whatsappLabel: 'WhatsApp',
      whatsappAction: 'Start a conversation',
      whatsappPrefill: 'Hello Andelson, I am reaching out from your portfolio.',
      metaNote: 'Douala · UTC+1 · Reply within 24 business hours.',
      copyLabel: 'Copy',
      copyEmailToast: 'Email address copied to clipboard.',
      copyPhoneToast: 'Phone number copied to clipboard.',
      copyErrorToast: 'Unable to copy to clipboard.',
      linksTitle: 'Links',
      cvButton: 'Download CV (PDF)',
      formTitle: 'Send a message',
      nameLabel: 'Full name',
      namePlaceholder: 'e.g. Sarah Connor',
      emailInputLabel: 'Email address',
      emailPlaceholder: 'name@company.com',
      inquiryTypeLabel: 'Inquiry type',
      inquiryOptions: {
        recruitment: 'Recruitment',
        freelance: 'Freelance project',
        collaboration: 'Collaboration',
        other: 'Other',
      } satisfies Record<InquiryKey, string>,
      messageLabel: 'Message',
      messagePlaceholder:
        'Share key requirements, timeline, or preferred meeting slots...',
      submitButton: 'Send message',
      sendingButton: 'Sending message...',
      privacyNote: 'Your details are only used to reply to your message.',
      successTitle: 'Message delivered',
      successBody:
        'Thank you for reaching out. I will review your message and reply within 24 business hours.',
      sendAnother: 'Send another message',
      validationRequired: 'Please provide your name (min. 2 characters), a valid email address, and a message (min. 5 characters).',
      validationEmail: 'Please enter a valid email address.',
      successToast: 'Your message has been sent successfully.',
      errorToast:
        'Unable to send right now. Please reach out directly via email or WhatsApp.',
    },
  }

  const t = copy[language]

  const whatsappDigits = PORTFOLIO_PROFILE.contact.whatsapp.replace(/\D/g, '')
  const telDigits = PORTFOLIO_PROFILE.contact.phone.replace(/\s+/g, '')
  const whatsappUrl = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(
    t.whatsappPrefill
  )}`

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
    setFormError(null)

    const trimmedName = formData.name.trim()
    const trimmedEmail = formData.email.trim()
    const trimmedMessage = formData.message.trim()

    if (!trimmedEmail || !EMAIL_PATTERN.test(trimmedEmail)) {
      setFormError(t.validationEmail)
      return
    }

    if (trimmedName.length < 2 || trimmedMessage.length < 5) {
      setFormError(t.validationRequired)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          inquiryType: t.inquiryOptions[formData.inquiryType],
          message: trimmedMessage,
          _gotcha_hp: formData._gotcha_hp,
        }),
      })

      const data = await response.json().catch(() => null)

      if (!response.ok || data?.success !== true) {
        const message = data?.error || t.errorToast
        setFormError(message)
        return
      }

      setIsSent(true)
      setFormData({
        name: '',
        email: '',
        inquiryType: 'recruitment',
        message: '',
        _gotcha_hp: '',
      })
      toast.success(t.successToast)
    } catch {
      setFormError(t.errorToast)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClassName =
    'w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#151822] border border-slate-300 dark:border-white/25 text-sm sm:text-[15px] text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-sky-600 dark:focus:border-sky-400 focus:outline-none transition-colors'

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="max-w-2xl mb-10 sm:mb-12 space-y-2.5"
      >
        <p className="text-xs font-mono font-semibold tracking-wider text-sky-700 dark:text-sky-300">
          {t.eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
          {t.title}
        </h2>
        <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
          {t.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Direct Channels + Links */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Card 1: Direct Coordinates + Discreet Meta Line */}
          <SpotlightCard className="p-6 rounded-2xl flex-1">
            <div className="h-full flex flex-col justify-between gap-4">
              <div className="space-y-4">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-200">
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
                        <p className="text-xs font-mono text-slate-600 dark:text-slate-300">
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
                      className="shrink-0 p-2 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
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
                        <p className="text-xs font-mono text-slate-600 dark:text-slate-300">
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
                      className="shrink-0 p-2 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
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
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-secondary/70 border border-border hover:border-emerald-500/40 flex items-center justify-between gap-3 group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <FaWhatsapp className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-slate-600 dark:text-slate-300">
                          {t.whatsappLabel}
                        </p>
                        <p className="text-sm font-medium text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                          {t.whatsappAction}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                  </a>
                </div>
              </div>

              <p className="pt-3 border-t border-border text-xs font-mono text-slate-600 dark:text-slate-300">
                {t.metaNote}
              </p>
            </div>
          </SpotlightCard>

          {/* Card 2: Links + Secondary CV Button */}
          <SpotlightCard className="p-6 rounded-2xl">
            <div className="space-y-4">
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                {t.linksTitle}
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
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-300 dark:border-white/25 bg-transparent hover:bg-slate-100 dark:hover:bg-white/[0.06] text-slate-900 dark:text-white font-semibold text-sm transition-colors"
              >
                <FileText className="w-4 h-4 text-sky-700 dark:text-sky-400" />
                <span>{t.cvButton}</span>
              </a>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Right Column: Contact Form (Matched Height) */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.14 }}
          className="lg:col-span-7 flex"
        >
          <SpotlightCard className="w-full h-full p-6 sm:p-8 rounded-2xl">
            <div className="h-full flex flex-col justify-between">
              {isSent ? (
                <div className="my-auto py-12 text-center space-y-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-xl font-bold font-display text-foreground">
                      {t.successTitle}
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t.successBody}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsSent(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary hover:bg-muted border border-border text-sm font-medium text-foreground transition-colors cursor-pointer"
                  >
                    {t.sendAnother}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="h-full flex-1 flex flex-col justify-between gap-5"
                  noValidate
                >
                <div className="space-y-5 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white pb-3 border-b border-border">
                    {t.formTitle}
                  </h3>

                  {/* Anti-spam honeypot field */}
                  <input
                    type="text"
                    name="_gotcha_hp"
                    value={formData._gotcha_hp}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        _gotcha_hp: e.target.value,
                      }))
                    }
                    tabIndex={-1}
                    autoComplete="new-password"
                    data-lpignore="true"
                    data-1p-ignore="true"
                    data-form-type="other"
                    aria-hidden="true"
                    className="sr-only"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-name"
                        className="block text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100"
                      >
                        {t.nameLabel}{' '}
                        <span className="text-sky-600 dark:text-sky-400">*</span>
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
                        className={inputClassName}
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="contact-email"
                        className="block text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100"
                      >
                        {t.emailInputLabel}{' '}
                        <span className="text-sky-600 dark:text-sky-400">*</span>
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
                        className={inputClassName}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-inquiry-type"
                      className="block text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100"
                    >
                      {t.inquiryTypeLabel}
                    </label>
                    <select
                      id="contact-inquiry-type"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          inquiryType: e.target.value as InquiryKey,
                        }))
                      }
                      className={inputClassName}
                    >
                      {(Object.keys(t.inquiryOptions) as InquiryKey[]).map(
                        (key) => (
                          <option key={key} value={key}>
                            {t.inquiryOptions[key]}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  <div className="space-y-2 flex-1 flex flex-col">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100"
                    >
                      {t.messageLabel}{' '}
                      <span className="text-sky-600 dark:text-sky-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      placeholder={t.messagePlaceholder}
                      className={`${inputClassName} flex-1 min-h-[116px] resize-y`}
                    />
                  </div>

                  {formError && (
                    <div
                      role="alert"
                      className="flex items-start gap-2 px-3.5 py-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs sm:text-sm text-rose-700 dark:text-rose-300"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{formError}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2.5 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 dark:bg-sky-400 dark:hover:bg-sky-300 text-white dark:text-slate-950 font-semibold text-sm disabled:opacity-60 disabled:pointer-events-none transition-colors cursor-pointer"
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

                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {t.privacyNote}
                  </p>
                </div>
              </form>
              )}
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  )
}
