'use client'

import { useState, useRef, useEffect } from 'react'
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
  FaTimesCircle,
  FaPhone // Ajout de l'icône téléphone
} from 'react-icons/fa'
import { Sparkles, Send } from 'lucide-react'

interface ContactProps {
  language: 'en' | 'fr'
}

const content = {
  en: {
    title: 'Get In Touch',
    subtitle: 'Have a project in mind? Let\'s collaborate and create something amazing together.',
    email: 'teufackandelson123@gmail.com',
    phoneTel: '+237 651 489 468',
    phoneWhatsapp: '+237 690 819 035',
    location: 'Douala, Cameroon',
    formTitle: 'Send me a message',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    messagePlaceholder: 'Your Message...',
    sendButton: 'Send Message',
    sending: 'Sending...',
    successMessage: 'Message sent successfully!',
    errorMessage: 'Failed to send message. Please try again.',
    socials: [
      { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/andelson-teufack-97a59b279/' },
      { name: 'GitHub', icon: FaGithub, href: 'https://github.com/AndelsonTeufack' },
    ],
    connectTitle: 'Connect With Me',
    connectDesc: 'Follow my work and stay updated on new projects and insights.',
    ctaTitle: 'Ready for a Challenge?',
    ctaDesc: 'I\'m always interested in hearing about new projects and opportunities. Feel free to reach out!',
  },
  fr: {
    title: 'Parlons-nous',
    subtitle: 'Vous avez un projet en tête? Collaborons et créons quelque chose d\'extraordinaire ensemble.',
    email: 'teufackandelson123@gmail.com',
    phoneTel: '+237 651 489 468',     
    phoneWhatsapp: '+237 690 819 035',
    location: 'Douala, Cameroun',
    formTitle: 'Envoyez-moi un message',
    namePlaceholder: 'Votre Nom',
    emailPlaceholder: 'Votre Email',
    messagePlaceholder: 'Votre Message...',
    sendButton: 'Envoyer le message',
    sending: 'Envoi...',
    successMessage: 'Message envoyé avec succès !',
    errorMessage: 'Échec de l\'envoi. Veuillez réessayer.',
    socials: [
      { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/andelson-teufack-97a59b279/' },
      { name: 'GitHub', icon: FaGithub, href: 'https://github.com/AndelsonTeufack' },
    ],
    connectTitle: 'Connectez-vous Avec Moi',
    connectDesc: 'Suivez mon travail et restez informé des nouveaux projets et perspectives.',
    ctaTitle: 'Prêt pour un Défi?',
    ctaDesc: 'Je suis toujours intéressé par les nouveaux projets et opportunités. N\'hésitez pas à me contacter!',
  },
}

// Variants pour les animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 12,
    },
  },
}

export default function Contact({ language }: ContactProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const text = language === 'en' ? content.en : content.fr
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Auto-hide notification after 5 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 5000)
      return () => clearTimeout(timer)
    }
  }, [notification])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setNotification(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send message')

      setFormData({ name: '', email: '', message: '' })
      setNotification({ type: 'success', message: text.successMessage })
    } catch (error) {
      console.error('Error sending message:', error)
      setNotification({ type: 'error', message: text.errorMessage })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Éléments de fond décoratifs */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-40 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />

      {/* Particules flottantes */}
      <div className="absolute inset-0 -z-5 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              y: [null, '-20%', '20%', '-20%'],
              x: [null, '10%', '-10%', '10%'],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground inline-flex items-center gap-3 justify-center">
              {text.title}
              <Sparkles className="w-8 h-8 text-primary/70" />
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto" />
            <p className="text-lg text-muted-foreground">{text.subtitle}</p>
          </motion.div>

          {/* Contact Methods Cards - 4 cartes */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Email */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 text-center hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                  <FaEnvelope className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <a
                  href={`mailto:${text.email}`}
                  className="text-primary hover:text-primary/80 transition-colors text-sm break-all"
                >
                  {text.email}
                </a>
              </div>
            </motion.div>

            {/* Téléphone*/}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 text-center hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                  <FaPhone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {language === 'en' ? 'Phone' : 'Téléphone'}
                </h3>
                <a
                  href={`tel:${text.phoneTel.replace(/\s/g, '')}`}
                  className="text-primary hover:text-primary/80 transition-colors text-sm block"
                >
                  {text.phoneTel}
                </a>
              </div>
            </motion.div>

            {/* WhatsApp*/}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 text-center hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                  <FaWhatsapp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                <a
                  href={`https://wa.me/${text.phoneWhatsapp.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors text-sm block"
                >
                  {text.phoneWhatsapp}
                </a>
              </div>
            </motion.div>

            {/* Localisation */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 text-center hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                  <FaMapMarkerAlt className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {language === 'en' ? 'Location' : 'Localisation'}
                </h3>
                <p className="text-muted-foreground text-sm">{text.location}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form & Social Links (inchangé) */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-5 relative"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 inline-flex items-center gap-2">
                {text.formTitle}
              </h3>

              {/* Champs avec animation au focus */}
              <motion.div variants={itemVariants}>
                <input
                  type="text"
                  name="name"
                  placeholder={text.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <input
                  type="email"
                  name="email"
                  placeholder={text.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <textarea
                  name="message"
                  placeholder={text.messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold flex items-center justify-center gap-2 h-14 text-base relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isLoading ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="inline-block"
                        >
                          ⚙️
                        </motion.span>
                        {text.sending}
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        {text.sendButton}
                      </>
                    )}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
              </motion.div>

              {/* Notification */}
              {notification && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`flex items-center gap-2 p-4 rounded-xl ${
                    notification.type === 'success' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'
                  }`}
                >
                  {notification.type === 'success' ? <FaCheckCircle className="w-5 h-5 shrink-0" /> : <FaTimesCircle className="w-5 h-5 shrink-0" />}
                  <p className="text-sm">{notification.message}</p>
                </motion.div>
              )}
            </motion.form>

            {/* Social Links & CTA */}
            <motion.div variants={itemVariants} className="space-y-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 inline-flex items-center gap-2">
                  {text.connectTitle}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {text.connectDesc}
                </p>

                <motion.div variants={containerVariants} className="flex gap-4">
                  {text.socials.map((social, idx) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={idx}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-xl bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary flex items-center justify-center transition-all duration-300"
                        title={social.name}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    )
                  })}
                </motion.div>
              </div>

              {/* Ready to Collaborate */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 space-y-3 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="font-semibold text-foreground text-lg">{text.ctaTitle}</p>
                <p className="text-sm text-muted-foreground">{text.ctaDesc}</p>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}