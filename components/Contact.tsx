'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

interface ContactProps {
  language: 'en' | 'fr'
}

const content = {
  en: {
    title: 'Get In Touch',
    subtitle: 'Have a project in mind? Let\'s collaborate and create something amazing together.',
    email: 'teufackandelson123@gmail.com',
    phone: '+237 690 819 035',
    location: 'Douala, Cameroon',
    formTitle: 'Send me a message',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    messagePlaceholder: 'Your Message...',
    sendButton: 'Send Message',
    sending: 'Sending...',
    socials: [
      { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/andelson-teufack-97a59b279/' },
      { name: 'GitHub', icon: FaGithub, href: 'https://github.com/AndelsonTeufack' },
    ],
  },
  fr: {
    title: 'Parlons-nous',
    subtitle: 'Vous avez un projet en tête? Collaborons et créons quelque chose d\'extraordinaire ensemble.',
    email: 'teufackandelson123@gmail.com',
    phone: '+237 690 819 035',
    location: 'Douala, Cameroun',
    formTitle: 'Envoyez-moi un message',
    namePlaceholder: 'Votre Nom',
    emailPlaceholder: 'Votre Email',
    messagePlaceholder: 'Votre Message...',
    sendButton: 'Envoyer le message',
    sending: 'Envoi...',
    socials: [
      { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/andelson-teufack-97a59b279/' },
      { name: 'GitHub', icon: FaGithub, href: 'https://github.com/AndelsonTeufack' },
    ],
  },
}

export default function Contact({ language }: ContactProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const text = language === 'en' ? content.en : content.fr

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      // Reset form and show success message
      setFormData({ name: '', email: '', message: '' })
      alert('Message sent! I\'ll get back to you soon.')
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">{text.title}</h2>
            <div className="h-1 w-24 bg-primary rounded-full mx-auto" />
            <p className="text-lg text-muted-foreground">{text.subtitle}</p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="p-6 rounded-xl border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {language === 'en' ? 'Email' : 'Email'}
              </h3>
              <a
                href={`mailto:${text.email}`}
                className="text-primary hover:text-primary/80 transition-colors text-sm break-all"
              >
                {text.email}
              </a>
            </div>

            {/* Phone & WhatsApp */}
            <div className="p-6 rounded-xl border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <FaWhatsapp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {language === 'en' ? 'Phone & WhatsApp' : 'Téléphone & WhatsApp'}
              </h3>
              <a
                href={`https://wa.me/237690819035`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors text-sm block mb-2"
              >
                {text.phone}
              </a>
              <a
                href={`tel:${text.phone.replace(/\s/g, '')}`}
                className="text-primary hover:text-primary/80 transition-colors text-xs opacity-75"
              >
                {/* Texte facultatif si vous voulez afficher "Appeler" */}
              </a>
            </div>

            {/* Location */}
            <div className="p-6 rounded-xl border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {language === 'en' ? 'Location' : 'Localisation'}
              </h3>
              <p className="text-muted-foreground text-sm">{text.location}</p>
            </div>
          </div>

          {/* Contact Form & Social Links */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-6">{text.formTitle}</h3>

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={text.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder={text.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder={text.messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin">⚙️</span>
                    {text.sending}
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    {text.sendButton}
                  </>
                )}
              </Button>
            </form>

            {/* Social Links & CTA */}
            <div className="space-y-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {language === 'en' ? 'Connect With Me' : 'Connectez-vous Avec Moi'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {language === 'en'
                    ? 'Follow my work and stay updated on new projects and insights.'
                    : 'Suivez mon travail et restez informé des nouveaux projets et perspectives.'}
                </p>

                <div className="flex gap-4">
                  {text.socials.map((social, idx) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                        title={social.name}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Ready to Collaborate */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 space-y-3">
                <p className="font-semibold text-foreground">
                  {language === 'en' ? 'Ready for a Challenge?' : 'Prêt pour un Défi?'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {language === 'en'
                    ? 'I\'m always interested in hearing about new projects and opportunities. Feel free to reach out!'
                    : 'Je suis toujours intéressé par les nouveaux projets et opportunités. N\'hésitez pas à me contacter!'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}