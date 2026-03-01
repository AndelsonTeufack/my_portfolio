import { motion, useInView, Variants, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Sparkles, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProjectsProps {
  language: 'en' | 'fr'
}

const content = {
  en: {
    title: 'Featured Projects',
    projects: [
      {
        title: 'HR Management System',
        description: 'Enterprise-grade HR application with employee management, leave tracking, and announcement system. Features JWT authentication and role-based access control.',
        tags: ['Spring Boot', 'MongoDB', 'React', 'JWT', 'REST API'],
        highlights: [
          'Secure authentication with JWT',
          'Role-based access control',
          'Real-time notifications',
        ],
        demo: '#',
        code: 'https://github.com/AndelsonTeufack/credix-Hrm',
      },
      {
        title: 'MomoKash Mobile App',
        description: 'Microfinance application migrated from USSD to modern mobile platform. Enables users to access loan services seamlessly with improved UI/UX.',
        tags: ['Flutter', 'Spring Boot', 'REST API', 'Mobile', 'Payment Integration'],
        highlights: [
          'USSD to mobile migration',
          'Integrated payment processing',
          'Cross-platform compatibility',
        ],
        demo: '#',
        code: 'https://github.com/AndelsonTeufack/MomoKash-Mobile-App',
      },
      {
        title: 'Maintenance Tracking System',
        description: 'Internal web solution for IT maintenance request management. Reduced processing time by 30% through automated workflows and real-time status tracking.',
        tags: ['Web App', 'Automation', 'Database', 'Reporting', 'Python'],
        highlights: [
          '30% efficiency gain',
          'Automated workflows',
          'Real-time tracking',
        ],
        demo: '#',
        code: 'https://github.com/AndelsonTeufack/Gav-App',
      },
      {
        title: 'MULEMA Language Learning App',
        description: 'Mobile application for learning Cameroonian native languages. Features interactive lessons, voice recognition, and progress tracking.',
        tags: ['React Native', 'Spring Boot', 'REST API', 'Education', 'Mobile'],
        highlights: [
          'Interactive lessons',
          'Voice recognition',
          'Progress tracking',
        ],
        demo: '#',
        code: 'https://github.com/noubayou237/mulema',
      },
      {
        title: 'Desktop Inventory Manager',
        description: 'Python-based desktop application for managing university accommodation with automatic billing, room assignment, and tenant tracking.',
        tags: ['Python', 'PyQt', 'SQLite', 'Desktop', 'Automation'],
        highlights: [
          'Automatic billing',
          'User-friendly interface',
          'Complete automation',
        ],
        demo: '#',
        code: 'https://github.com/AndelsonTeufack/BuildingManagement',
      },
      {
        title: 'Student Sponsorship System',
        description: 'Spring Boot backend system implementing student sponsorship logic with secure payment integration via Campay for transaction processing.',
        tags: ['Spring Boot', 'REST API', 'Payment API', 'Backend', 'Security'],
        highlights: [
          'Secure transactions',
          'Payment integration',
          'Scalable architecture',
        ],
        demo: '#',
        code: 'https://github.com/AndelsonTeufack/sponsorship-IAI-Douala',
      },
      {
        title: 'Laoshi Consulting',
        description: 'Professional website for an immigration company in China, presenting its services for students and professionals. Modern design and optimal performance.',
        tags: ['React', 'Next.js', 'NestJS', 'TypeScript', 'Tailwind CSS'],
        highlights: [
          'Service presentation',
          'Contact form',
          'Multilingual content',
        ],
        demo: 'https://laoshi-consulting.vercel.app',
        code: 'https://github.com/AndelsonTeufack/laochi_site',
      },
    ],
  },
  fr: {
    title: 'Projets Vedettes',
    projects: [
      {
        title: 'Système de Gestion RH',
        description: 'Application RH d\'entreprise avec gestion des employés, suivi des congés et système d\'annonces. Authentification JWT et contrôle d\'accès par rôle.',
        tags: ['Spring Boot', 'MongoDB', 'React', 'JWT', 'API REST'],
        highlights: [
          'Authentification sécurisée JWT',
          'Contrôle d\'accès par rôle',
          'Notifications en temps réel',
        ],
        demo: '#',
        code: 'https://github.com/AndelsonTeufack/credix-Hrm',
      },
      {
        title: 'Application Mobile MomoKash',
        description: 'Application de microfinance migrée d\'USSD vers plateforme mobile moderne. Permet aux utilisateurs d\'accéder aux services de prêt de manière transparente.',
        tags: ['Flutter', 'Spring Boot', 'API REST', 'Mobile', 'Paiement'],
        highlights: [
          'Migration USSD vers mobile',
          'Traitement de paiement intégré',
          'Compatibilité multiplateforme',
        ],
        demo: '#',
        code: 'https://github.com/AndelsonTeufack/MomoKash-Mobile-App',
      },
      {
        title: 'Système de Suivi de Maintenance',
        description: 'Solution web interne pour la gestion des demandes de maintenance IT. A réduit le temps de traitement de 30% grâce aux flux de travail automatisés.',
        tags: ['Web App', 'Automatisation', 'Base de Données', 'Rapports', 'Python'],
        highlights: [
          'Gain d\'efficacité de 30%',
          'Flux de travail automatisés',
          'Suivi en temps réel',
        ],
        demo: '#',
        code: 'https://github.com/AndelsonTeufack/Gav-App',
      },
      {
        title: 'Application MULEMA d\'Apprentissage des Langues',
        description: 'Application mobile pour l\'apprentissage des langues maternelles camerounaises. Leçons interactives, reconnaissance vocale et suivi des progrès.',
        tags: ['React Native', 'Spring Boot', 'API REST', 'Éducation', 'Mobile'],
        highlights: [
          'Leçons interactives',
          'Reconnaissance vocale',
          'Suivi des progrès',
        ],
        demo: '#',
        code: 'https://github.com/noubayou237/mulema',
      },
      {
        title: 'Gestionnaire d\'Inventaire Bureau',
        description: 'Application bureau basée sur Python pour gérer l\'hébergement universitaire avec facturation automatique, attribution de chambres et suivi des résidents.',
        tags: ['Python', 'PyQt', 'SQLite', 'Bureau', 'Automatisation'],
        highlights: [
          'Facturation automatique',
          'Interface conviviale',
          'Automatisation complète',
        ],
        demo: '#',
        code: 'https://github.com/AndelsonTeufack/BuildingManagement',
      },
      {
        title: 'Système de Parrainage Étudiant',
        description: 'Système Spring Boot implémentant la logique de parrainage étudiant avec intégration sécurisée des paiements via Campay.',
        tags: ['Spring Boot', 'API REST', 'API Paiement', 'Backend', 'Sécurité'],
        highlights: [
          'Transactions sécurisées',
          'Intégration paiement',
          'Architecture scalable',
        ],
        demo: '#',
        code: 'https://github.com/AndelsonTeufack/sponsorship-IAI-Douala',
      },
      {
        title: 'Laoshi Consulting',
        description: 'Site web professionnel pour une entreprise d\'immigration en Chine, présentant ses services d\'accompagnement aux étudiants et professionnels. Design moderne et performance optimale.',
        tags: ['React', 'Next.js', 'NestJS', 'TypeScript', 'Tailwind CSS'],
        highlights: [
          'Présentation des services',
          'Formulaire de contact',
          'Contenu multilingue',
        ],
        demo: 'https://laoshi-consulting.vercel.app',
        code: 'https://github.com/AndelsonTeufack/laochi_site',
      },
    ],
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
}

export default function Projects({ language }: ProjectsProps) {
  const text = language === 'en' ? content.en : content.fr
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')

  const handleDemoClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    project: typeof content.en.projects[0]
  ) => {
    if (project.demo === '#') {
      e.preventDefault()
      const message =
        language === 'en'
          ? `Demo for "${project.title}" is not available online yet.`
          : `La démo de "${project.title}" n'est pas encore en ligne.`
      setNotificationMessage(message)
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 4000)
    }
  }

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Contexte décoratif */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground inline-flex items-center gap-3">
                {text.title}
                <Sparkles className="w-8 h-8 text-primary/70" />
              </h2>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto md:mx-0" />
            <p className="text-muted-foreground max-w-2xl mx-auto md:mx-0 text-lg">
              {language === 'en'
                ? "A selection of projects I've built, combining robust backends with polished interfaces."
                : 'Une sélection de projets que j\'ai réalisés, alliant backends robustes et interfaces soignées.'}
            </p>
          </motion.div>

          {/* Grille de projets */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
          >
            {text.projects.map((project, idx) => {
              const isDemoAvailable = project.demo !== '#'
              return (
                <motion.article
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Effet de brillance au survol */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Badge "Featured" décoratif */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-xs font-mono px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
                      featured
                    </span>
                  </div>

                  {/* Contenu */}
                  <div className="p-6 flex-1 flex flex-col gap-4 relative z-0">
                    {/* Titre */}
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Points forts */}
                    <ul className="space-y-2 mt-2">
                      {project.highlights.map((highlight, hidx) => (
                        <motion.li
                          key={hidx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + hidx * 0.05 }}
                          className="text-xs text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary shrink-0 mt-0.5">✦</span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50 mt-auto">
                      {project.tags.map((tag, tidx) => (
                        <span
                          key={tidx}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions (demo / code) */}
                    <div className="flex gap-3 pt-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`gap-2 ${
                          isDemoAvailable
                            ? 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 hover:bg-green-500/10'
                            : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                        }`}
                        asChild
                      >
                        <a
                          href={project.demo}
                          onClick={(e) => handleDemoClick(e, project)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {language === 'en' ? 'Demo' : 'Démo'}
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 text-muted-foreground hover:text-primary hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.code} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Notification Toast */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 max-w-md w-full sm:w-auto"
          >
            <div className="bg-background/95 backdrop-blur-md border border-primary/20 rounded-xl shadow-2xl shadow-primary/10 p-4 flex items-start gap-3">
              <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="text-lg">🔔</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground font-medium">{notificationMessage}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {language === 'en' ? 'The demo will be available soon.' : 'La démo sera bientôt disponible.'}
                </p>
              </div>
              <button
                onClick={() => setShowNotification(false)}
                className="shrink-0 w-6 h-6 rounded-full hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}