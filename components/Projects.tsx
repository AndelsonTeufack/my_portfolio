'use client'

import { useRef, useState } from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import { ExternalLink, Github, Sparkles, Eye, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SpotlightCard from '@/components/ui/SpotlightCard'
import ProjectModal, { ProjectType } from '@/components/ProjectModal'
import { toast } from 'sonner'

interface ProjectsProps {
  language: 'en' | 'fr'
}

const projectsData: { en: ProjectType[]; fr: ProjectType[] } = {
  en: [
    {
      title: 'TaillorPro - Tailor Workshop Management',
      category: 'mobile',
      description:
        'Cross-platform mobile application dedicated to managing tailoring workshops, client orders, and garment fitting records.',
      tags: ['Flutter', 'Firebase', 'Mobile', 'i18n', 'Dark/Light Theme'],
      highlights: [
        'Complete mobile app development with Flutter.',
        'Firebase backend integration for authentication and real-time database.',
        'Multi-language support (i18n) & dynamic Light/Dark theme switching.',
      ],
      demo: '#',
      code: 'https://github.com/AndelsonTeufack/tailor_pro_app',
    },
    {
      title: 'HR Management System',
      category: 'backend',
      description:
        'Enterprise web application for employee records, leave management, and internal administrative announcements.',
      tags: ['Spring Boot', 'MongoDB', 'React', 'JWT Auth', 'REST API'],
      highlights: [
        'JWT-based secure authentication & Role-Based Access Control (RBAC).',
        'Spring Boot backend REST APIs integrated with React frontend.',
        'Employee leave request approval workflows.',
      ],
      demo: '#',
      code: 'https://github.com/AndelsonTeufack/credix-Hrm',
    },
    {
      title: 'MomoKash Mobile App',
      category: 'mobile',
      description:
        'Cross-platform mobile lending application migrating legacy USSD service to a intuitive Flutter mobile experience.',
      tags: ['Flutter', 'Spring Boot', 'REST API', 'Dart', 'Financial Tech'],
      highlights: [
        'Complete UI/UX migration from USSD to Flutter.',
        'High-performance HTTP state management and REST synchronization.',
        'Cross-platform deployment on Android devices.',
      ],
      demo: 'https://youtu.be/hyJJLx7mCCU',
      code: 'https://github.com/AndelsonTeufack/MomoKash-Mobile-App',
    },
    {
      title: 'Maintenance Tracking System',
      category: 'automation',
      description:
        'Internal IT maintenance tracking solution managing technician interventions and equipment request lifecycle.',
      tags: ['Python', 'Web App', 'Database', 'Reporting', 'Automation'],
      highlights: [
        'Automated ticket routing and status tracking in real time.',
        'Python scripts for financial reporting & automated data processing.',
        'Centralized database for IT maintenance logs.',
      ],
      demo: '#',
      code: 'https://github.com/AndelsonTeufack/Gav-App',
    },
    {
      title: 'MULEMA Language Learning App',
      category: 'mobile',
      description:
        'Interactive mobile learning application dedicated to preserving Cameroonian native heritage and languages.',
      tags: ['React Native', 'Spring Boot', 'REST API', 'Education', 'Mobile'],
      highlights: [
        'Gamified language lessons and interactive quiz interfaces.',
        'Spring Boot REST backend for phrase translation storage.',
        'Cross-functional Agile team collaboration.',
      ],
      demo: '#',
      code: 'https://github.com/noubayou237/mulema',
    },
    {
      title: 'Laoshi Consulting Platform',
      category: 'web',
      description:
        'Modern multilingual web portal for an international education and immigration consulting enterprise in China.',
      tags: ['Next.js', 'React', 'NestJS', 'TypeScript', 'Tailwind CSS'],
      highlights: [
        'Performant Next.js App Router architecture with SSG / ISR.',
        'Multilingual internationalization for global prospective students.',
        'Lead generation forms and service booking workflows.',
      ],
      demo: 'https://laoshi-consulting.vercel.app',
      code: 'https://github.com/AndelsonTeufack/laochi_site',
    },
    {
      title: 'Desktop Inventory & Building Manager',
      category: 'automation',
      description:
        'Desktop software automating student accommodation management, tenant billing, and room availability tracking.',
      tags: ['Python', 'PyQt', 'SQLite', 'Desktop GUI'],
      highlights: [
        'Graphical User Interface built with PyQt.',
        'Automated billing calculation & SQLite database backend.',
        'Tenant record management & rent tracking.',
      ],
      demo: '#',
      code: 'https://github.com/AndelsonTeufack/BuildingManagement',
    },
    {
      title: 'Student Sponsorship Engine',
      category: 'backend',
      description:
        'Backend system implementing a student sponsorship program with Campay payment gateway API integration.',
      tags: ['Spring Boot', 'Campay API', 'REST API', 'Security'],
      highlights: [
        'Secure Campay mobile money payment processing.',
        'Student sponsorship allocation business rules.',
        'Scalable Spring Boot REST API architecture.',
      ],
      demo: '#',
      code: 'https://github.com/AndelsonTeufack/sponsorship-IAI-Douala',
    },
  ],
  fr: [
    {
      title: 'TaillorPro - Gestion d’Ateliers de Couture',
      category: 'mobile',
      description:
        'Application mobile multiplateforme dédiée à la gestion complète des ateliers de couture, des commandes clients et des mesures.',
      tags: ['Flutter', 'Firebase', 'Mobile', 'i18n', 'Thème Clair/Sombre'],
      highlights: [
        'Développement complet d’une application mobile avec Flutter.',
        'Intégration de Firebase pour la gestion des données et authentification.',
        'Prise en charge du multilingue (i18n) et gestion dynamique des thèmes Light/Dark.',
      ],
      demo: '#',
      code: 'https://github.com/AndelsonTeufack',
    },
    {
      title: 'Système de Gestion RH',
      category: 'backend',
      description:
        'Application web d’entreprise pour la gestion des dossiers employés, des congés et des annonces administratives.',
      tags: ['Spring Boot', 'MongoDB', 'React', 'Authentification JWT', 'API REST'],
      highlights: [
        'Authentification JWT sécurisée et contrôle d’accès par rôles (RBAC).',
        'APIs REST Spring Boot intégrées au frontend React.',
        'Flux de validation des demandes de congés.',
      ],
      demo: '#',
      code: 'https://github.com/AndelsonTeufack/credix-Hrm',
    },
    {
      title: 'Application Mobile MomoKash',
      category: 'mobile',
      description:
        'Application mobile multiplateforme modernisant le service de prêt MomoKash en migrant l’ancien système USSD vers Flutter.',
      tags: ['Flutter', 'Spring Boot', 'API REST', 'Dart', 'Fintech'],
      highlights: [
        'Migration intégrale de l’USSD vers Flutter.',
        'Gestion d’état HTTP performante et synchronisation REST.',
        'Déploiement Android optimisé.',
      ],
      demo: 'https://youtu.be/hyJJLx7mCCU',
      code: 'https://github.com/AndelsonTeufack/MomoKash-Mobile-App',
    },
    {
      title: 'Système de Suivi de Maintenance',
      category: 'automation',
      description:
        'Solution web interne de suivi de maintenance IT gérant les interventions techniques et le cycle des équipements.',
      tags: ['Python', 'Web App', 'Base de Données', 'Rapports', 'Automatisation'],
      highlights: [
        'Routage automatisé des tickets et suivi en temps réel.',
        'Scripts Python pour les rapports financiers et traitement de données.',
        'Base de données centralisée d’interventions.',
      ],
      demo: '#',
      code: 'https://github.com/AndelsonTeufack/Gav-App',
    },
    {
      title: 'Application MULEMA d’Apprentissage',
      category: 'mobile',
      description:
        'Application mobile interactive d’apprentissage des langues nationales camerounaises.',
      tags: ['React Native', 'Spring Boot', 'API REST', 'Éducation', 'Mobile'],
      highlights: [
        'Leçons ludifiées et interfaces interactives.',
        'Backend Spring Boot pour la gestion du dictionnaire de traduction.',
        'Travail en équipe multidisciplinaire Agile.',
      ],
      demo: '#',
      code: 'https://github.com/noubayou237/mulema',
    },
    {
      title: 'Plateforme Laoshi Consulting',
      category: 'web',
      description:
        'Portail web multilingue pour un cabinet international de conseil en immigration et études en Chine.',
      tags: ['Next.js', 'React', 'NestJS', 'TypeScript', 'Tailwind CSS'],
      highlights: [
        'Architecture Next.js App Router performante.',
        'Support multilingue international pour candidats.',
        'Système de génération de leads et prise de rdv.',
      ],
      demo: 'https://laoshi-consulting.vercel.app',
      code: 'https://github.com/AndelsonTeufack/laochi_site',
    },
    {
      title: 'Gestionnaire d’Inventaire Desktop',
      category: 'automation',
      description:
        'Logiciel desktop automatisant la gestion des logements universitaires et le suivi des facturations locataires.',
      tags: ['Python', 'PyQt', 'SQLite', 'Desktop GUI'],
      highlights: [
        'Interface graphique développée avec PyQt.',
        'Calcul automatique des factures et base SQLite.',
        'Gestion centralisée des locataires et chambres.',
      ],
      demo: '#',
      code: 'https://github.com/AndelsonTeufack/BuildingManagement',
    },
    {
      title: 'Système de Parrainage Étudiant',
      category: 'backend',
      description:
        'Système backend implémentant un programme de parrainage avec intégration de la passerelle de paiement Campay.',
      tags: ['Spring Boot', 'API Campay', 'API REST', 'Sécurité'],
      highlights: [
        'Paiements sécurisés Mobile Money via API Campay.',
        'Règles métiers de répartition des parrainages.',
        'Architecture API REST évolutive.',
      ],
      demo: '#',
      code: 'https://github.com/AndelsonTeufack/sponsorship-IAI-Douala',
    },
  ],
}

const filterCategories = [
  { id: 'all', label: { en: 'All Projects', fr: 'Tous les projets' } },
  { id: 'web', label: { en: 'Web Apps', fr: 'Applications Web' } },
  { id: 'mobile', label: { en: 'Mobile', fr: 'Applications Mobiles' } },
  { id: 'backend', label: { en: 'Backend APIs', fr: 'APIs & Backend' } },
  { id: 'automation', label: { en: 'Automation & Desktop', fr: 'Automatisation' } },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
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

export default function Projects({ language }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null)

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const rawProjects = language === 'en' ? projectsData.en : projectsData.fr
  const filteredProjects =
    activeFilter === 'all'
      ? rawProjects
      : rawProjects.filter((p) => p.category === activeFilter)

  const handleDemoClick = (e: React.MouseEvent, project: ProjectType) => {
    if (project.demo === '#') {
      e.preventDefault()
      toast.info(
        language === 'en'
          ? `Demo for "${project.title}" is available upon enterprise request.`
          : `La démo pour "${project.title}" est disponible sur demande entreprise.`
      )
    }
  }

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-4 text-center md:text-left"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>// 04. Featured Showcase</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl font-bold font-display text-foreground">
            {language === 'en' ? 'Engineered Projects' : 'Projets Récents & Réalisations'}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            {language === 'en'
              ? 'Selection of full-stack systems, mobile apps, and enterprise APIs designed for performance.'
              : 'Sélection de systèmes full-stack, applications mobiles et APIs conçus avec rigueur.'}
          </motion.p>
        </motion.div>

        {/* Filter Category Pills */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="flex flex-wrap items-center gap-2 pt-2"
        >
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold glow-cyan shadow-md shadow-cyan-500/20'
                    : 'bg-white/[0.04] border border-white/10 text-muted-foreground hover:text-foreground hover:border-cyan-500/30'
                }`}
              >
                {language === 'en' ? cat.label.en : cat.label.fr}
              </button>
            )
          })}
        </motion.div>

        {/* Projects Bento Grid */}
        <motion.div
          layout
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div key={project.title} layout variants={itemVariants}>
              <SpotlightCard className="p-6 h-full flex flex-col justify-between glass-card-hover border-white/10 group">
                <div className="space-y-4">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20">
                      {project.category}
                    </span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-cyan-400 transition-colors"
                      title={language === 'en' ? 'Quick view' : 'Aperçu rapide'}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-display text-foreground group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 pt-2">
                    {project.highlights.slice(0, 2).map((h, hidx) => (
                      <li key={hidx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-cyan-400 shrink-0">✦</span>
                        <span className="line-clamp-1">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Tags & Links */}
                <div className="pt-6 space-y-4 border-t border-white/10 mt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tidx) => (
                      <span
                        key={tidx}
                        className="px-2.5 py-0.5 rounded bg-white/[0.03] border border-white/10 text-[10px] font-mono text-cyan-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="text-xs text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 px-3 h-8"
                    >
                      <a
                        href={project.demo}
                        onClick={(e) => handleDemoClick(e, project)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                        Demo
                      </a>
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="text-xs text-muted-foreground hover:text-foreground hover:bg-white/5 px-3 h-8"
                    >
                      <a href={project.code} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        language={language}
      />
    </section>
  )
}