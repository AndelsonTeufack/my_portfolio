'use client'

import { useRef, useState } from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import { ExternalLink, Github, Sparkles, Eye } from 'lucide-react'
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
      title: 'Shikaku - Mobile Game App',
      category: 'mobile',
      description:
        'Online and local multiplayer mobile puzzle game application deployed on the Google Play Store.',
      tags: ['Flutter', 'Dart', 'Firebase', 'Play Store', 'Mobile Game'],
      highlights: [
        'Participation in developing online & local multiplayer game features.',
        'Successful application deployment on the Google Play Store.',
        'Interactive UI/UX mobile game design and logic.',
      ],
      demo: 'https://shikaku-site.vercel.app/',
      code: 'https://github.com/AndelsonTeufack/shikaku',
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
        'Employee leave request approval workflows & scheduled transaction audit.',
      ],
      demo: '#',
      code: 'https://github.com/AndelsonTeufack/credix-Hrm',
    },
    {
      title: 'MomoKash Mobile App',
      category: 'mobile',
      description:
        'Cross-platform mobile lending application migrating legacy USSD service to an intuitive Flutter mobile experience with Redis session caching.',
      tags: ['Flutter', 'Spring Boot', 'Redis Cache', 'REST API', 'Dart', 'Fintech'],
      highlights: [
        'Complete UI/UX migration from USSD to Flutter native experience.',
        'Redis cache backend orchestration for high-performance session & temporary data management.',
        'Cross-platform deployment on Android devices.',
      ],
      demo: 'https://youtu.be/hyJJLx7mCCU',
      code: 'https://github.com/AndelsonTeufack/MomoKash-Mobile-App',
    },
    {
      title: 'Maintenance Tracking System (GMAO)',
      category: 'automation',
      description:
        'Internal web application for Computer-Aided Maintenance Management (GMAO) tracking technical interventions and reporting data.',
      tags: ['Python', 'MySQL', 'GMAO', 'Reporting', 'Automation'],
      highlights: [
        'Relational MySQL database modeling & custom business modules.',
        'Python scripts for automated reporting data extraction & aggregation.',
        'Unit and non-regression testing for service continuity.',
      ],
      demo: '#',
      code: 'https://github.com/AndelsonTeufack/Gav-App',
    },
    {
      title: 'MULEMA Language Learning App',
      category: 'mobile',
      description:
        'Interactive mobile learning application dedicated to preserving Cameroonian native heritage, featuring Node.js pedagogical backend management.',
      tags: ['React Native', 'Node.js', 'Spring Boot', 'REST API', 'Education'],
      highlights: [
        'Implementation of user management & pedagogical content features via Node.js backend.',
        'Gamified language lessons and interactive quiz interfaces.',
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
      title: 'Desktop Rental Property Manager',
      category: 'automation',
      description:
        'Desktop software automating rental property management, tenant billing, room tracking, and MongoDB/SQLite database storage.',
      tags: ['Python', 'PyQt', 'MongoDB', 'SQLite', 'Desktop GUI'],
      highlights: [
        'Graphical User Interface built with PyQt.',
        'MongoDB data management & automated billing calculation.',
        'Tenant record management & rent tracking.',
      ],
      demo: '#',
      code: 'https://github.com/AndelsonTeufack/BuildingManagement',
    },
    {
      title: 'REST API & Campay Payment Integration',
      category: 'backend',
      description:
        'Backend system implementing REST APIs and Campay electronic payment gateway solution integration for student sponsorship.',
      tags: ['Spring Boot', 'Campay API', 'REST API', 'Security', 'Fintech'],
      highlights: [
        'Secure Campay electronic payment solution integration.',
        'REST API development & student sponsorship allocation business rules.',
        'Scalable Spring Boot backend architecture.',
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
      code: 'https://github.com/AndelsonTeufack/tailor_pro_app',
    },
    {
      title: 'Shikaku - Application Mobile de Jeu',
      category: 'mobile',
      description:
        'Application de jeu mobile de réflexion multijoueur en ligne et local, déployée sur le Google Play Store.',
      tags: ['Flutter', 'Dart', 'Firebase', 'Play Store', 'Jeu Mobile'],
      highlights: [
        'Participation au développement d’un jeu multijoueur en ligne et local.',
        'Déploiement réussi de l’application sur le Google Play Store.',
        'Interface utilisateur et logique de jeu mobile interactives.',
      ],
      demo: 'https://shikaku-site.vercel.app/',
      code: 'https://github.com/AndelsonTeufack/shikaku',
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
        'Flux de validation des demandes de congés et audit planifié.',
      ],
      demo: '#',
      code: 'https://github.com/AndelsonTeufack/credix-Hrm',
    },
    {
      title: 'Application Mobile MomoKash',
      category: 'mobile',
      description:
        'Application mobile multiplateforme modernisant le service de prêt MomoKash en migrant l’USSD vers Flutter avec cache Redis backend.',
      tags: ['Flutter', 'Spring Boot', 'Cache Redis', 'API REST', 'Dart', 'Fintech'],
      highlights: [
        'Migration intégrale de l’USSD vers une expérience Flutter native.',
        'Orchestration backend avec cache Redis pour la gestion des sessions et données temporaires.',
        'Déploiement Android optimisé.',
      ],
      demo: 'https://youtu.be/hyJJLx7mCCU',
      code: 'https://github.com/AndelsonTeufack/MomoKash-Mobile-App',
    },
    {
      title: 'Système de Suivi de Maintenance (GMAO)',
      category: 'automation',
      description:
        'Solution web interne de gestion des opérations de maintenance (GMAO) gérant les interventions techniques et le reporting.',
      tags: ['Python', 'MySQL', 'GMAO', 'Rapports', 'Automatisation'],
      highlights: [
        'Modélisation de base de données relationnelle MySQL & briques fonctionnelles.',
        'Scripts Python pour l’extraction et l’agrégation automatique de données de reporting.',
        'Tests unitaires et de non-régression pour la continuité de service.',
      ],
      demo: '#',
      code: 'https://github.com/AndelsonTeufack/Gav-App',
    },
    {
      title: 'Application MULEMA d’Apprentissage',
      category: 'mobile',
      description:
        'Application mobile interactive d’apprentissage des langues nationales camerounaises avec gestion du contenu pédagogique via backend Node.js.',
      tags: ['React Native', 'Node.js', 'Spring Boot', 'API REST', 'Éducation', 'Mobile'],
      highlights: [
        'Implémentation de la gestion utilisateurs et contenus pédagogiques via un backend Node.js.',
        'Leçons ludifiées et interfaces interactives.',
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
      title: 'Application Desktop de Gestion Locative',
      category: 'automation',
      description:
        'Logiciel desktop de gestion locative automatisant les logements, les facturations locataires et le stockage MongoDB/SQLite.',
      tags: ['Python', 'PyQt', 'MongoDB', 'SQLite', 'Desktop GUI'],
      highlights: [
        'Interface graphique développée avec PyQt.',
        'Gestion des données avec MongoDB et calcul automatique des factures.',
        'Gestion centralisée des locataires et chambres.',
      ],
      demo: '#',
      code: 'https://github.com/AndelsonTeufack/BuildingManagement',
    },
    {
      title: 'Développement d’API & Intégration Campay',
      category: 'backend',
      description:
        'Système backend développant des APIs REST avec intégration de la solution de paiement électronique Campay.',
      tags: ['Spring Boot', 'API Campay', 'API REST', 'Sécurité', 'Fintech'],
      highlights: [
        'Intégration de la solution de paiement électronique Campay.',
        'Développement d’APIs REST et règles métiers de parrainage.',
        'Architecture API REST Spring Boot évolutive.',
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
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-sky-600 dark:text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold">
            <Sparkles className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
            <span>// 04. Featured Showcase</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl font-bold font-display text-slate-900 dark:text-foreground">
            {language === 'en' ? 'Engineered Projects' : 'Projets Récents & Réalisations'}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-slate-600 dark:text-muted-foreground text-base sm:text-lg max-w-2xl font-medium">
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
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all shadow-2xs ${
                  isActive
                    ? 'bg-sky-600 text-white dark:bg-cyan-500 dark:text-slate-950 glow-cyan'
                    : 'bg-slate-100 dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/10 text-slate-700 dark:text-muted-foreground hover:text-slate-900 dark:hover:text-foreground hover:border-sky-400 dark:hover:border-cyan-500/30'
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
          {filteredProjects.map((project) => (
            <motion.div key={project.title} layout variants={itemVariants}>
              <SpotlightCard className="p-6 h-full flex flex-col justify-between glass-card-hover border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-none group">
                <div className="space-y-4">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sky-700 dark:text-cyan-400 font-bold px-2.5 py-1 rounded bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-400/30 dark:border-cyan-500/20">
                      {project.category}
                    </span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-muted-foreground hover:text-sky-600 dark:hover:text-cyan-400 transition-colors"
                      title={language === 'en' ? 'Quick view' : 'Aperçu rapide'}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-foreground group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-muted-foreground leading-relaxed line-clamp-3 font-medium">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 pt-2">
                    {project.highlights.slice(0, 2).map((h, hidx) => (
                      <li key={hidx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2 font-medium">
                        <span className="text-sky-600 dark:text-cyan-400 shrink-0">✦</span>
                        <span className="line-clamp-1">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Tags & Links */}
                <div className="pt-6 space-y-4 border-t border-slate-200 dark:border-white/10 mt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tidx) => (
                      <span
                        key={tidx}
                        className="px-2.5 py-0.5 rounded bg-slate-100 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 text-[10px] font-mono font-bold text-sky-800 dark:text-cyan-400"
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
                      className="text-xs text-sky-700 dark:text-cyan-400 hover:text-sky-800 dark:hover:text-cyan-300 hover:bg-sky-500/10 dark:hover:bg-cyan-500/10 px-3 h-8 font-bold"
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
                      className="text-xs text-slate-600 dark:text-muted-foreground hover:text-slate-900 dark:hover:text-foreground hover:bg-slate-100 dark:hover:bg-white/5 px-3 h-8 font-semibold"
                    >
                      <a href={project.code} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3.5 h-3.5 mr-1.5 text-purple-600 dark:text-purple-400" />
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