'use client'

import { useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import { Calendar, MapPin, Sparkles, GraduationCap, Award, ChevronRight, Briefcase, ExternalLink } from 'lucide-react'
import SpotlightCard from '@/components/ui/SpotlightCard'

interface ExperienceProps {
  language: 'en' | 'fr'
}

const content = {
  en: {
    title: 'Professional Track',
    subtitle: 'Track record of software engineering, backend architecture, and IT solutions delivery.',
    experiences: [
      {
        company: 'KES IP',
        position: 'Full-Stack Developer Intern (Mobile & Web)',
        period: 'March 2026 - Present',
        location: 'Douala, Cameroon',
        type: 'Internship / Full-Stack',
        highlights: [
          'Developed an internal web app for email qualification & automatic classification (Soft Bounce, Hard Bounce, Outbound).',
          'Conception & development of offline-first mobile apps for electrical network audit & inspection with automatic PDF and Word report generation.',
          'Contributed as FullStack developer to Cameroon’s Electrical Information System for SOCAD\'EL (web, backend, mobile & GIS).',
          'Executed professional emailing campaigns using Microsoft Outlook & Word automation.',
          'Designed an internal ERP connected to Odoo for central management of leaves, missions, planning, inspections & business processes.',
          'Customized KoboCollect for advanced GIS features (ESRI map repositioning, automatic electrical grid tracking, GeoJSON export).',
        ],
      },
      {
        company: 'GREEN POWER CAMEROUN',
        position: 'IT Solutions Analysis & Development Intern',
        period: 'May 2025 - November 2025',
        location: 'Yaoundé, Cameroon',
        type: 'Internship',
        highlights: [
          'Designed and developed an internal web application for maintenance tracking.',
          'Set up MySQL relational databases and developed custom business modules.',
          'Executed unit and functional testing to guarantee high application availability.',
          'Automated financial and operational reports using Python scripts.',
          'Contributed to the ongoing maintenance and improvement of internal IT systems.',
        ],
      },
      {
        company: 'GREEN POWER CAMEROUN',
        position: 'IT Solutions Analysis & Development Intern',
        period: 'November 2024 - May 2025',
        location: 'Yaoundé, Cameroon',
        type: 'Internship',
        highlights: [
          'Functional analysis and technical specification drafting for internal process optimization.',
          'Participated in IT infrastructure security and performance audits.',
          'Provided Level 2 technical support on critical applications and end-user technical assistance.',
          'Maintained and upgraded existing information systems in a Windows & MS Office environment.',
        ],
      },
      {
        company: 'CREDIX.CAM SA',
        position: 'Mobile Development Intern',
        period: 'November 2024 - May 2025',
        location: 'Yaoundé, Cameroon',
        type: 'Internship',
        highlights: [
          'Developed an HR web application using Spring Boot and MongoDB.',
          'Designed backend services and REST APIs.',
          'Implemented secure authentication with JWT and Spring Security.',
          'Maintained and enhanced application features within an Agile/Scrum team.',
        ],
      },
      {
        company: 'CREDIX.CAM SA',
        position: 'Web Development Intern',
        period: 'August 2024 - October 2024',
        location: 'Yaoundé, Cameroon',
        type: 'Internship',
        highlights: [
          'Developed multi-platform mobile applications using Flutter (Android & iOS).',
          'Engineered REST APIs with Spring Boot.',
          'Participated in functional testing and application maintenance for internal services (MomoKash).',
        ],
      },
    ],
    education: {
      academicTitle: 'Academic Degree',
      certificationsTitle: 'Professional Certifications',
      academicItems: [
        {
          degree: 'Bachelor in Software Engineering (Licence Génie Logiciel)',
          school: 'Institut Africain d\'Informatique (IAI)',
          year: '2021 - 2024',
        },
      ],
      certifications: [
        {
          name: 'Google IT Support Professional Certificate',
          issuer: 'Google (Support technique, Réseaux, Sécurité & SysAdmin)',
          year: '2025',
        },
      ],
    },
  },
  fr: {
    title: 'Parcours Professionnel',
    subtitle: 'Historique des réalisations en ingénierie logicielle, architecture backend et solutions IT.',
    experiences: [
      {
        company: 'KES IP',
        position: 'Stagiaire en Développement FullStack (mobile et web)',
        period: 'Mars 2026 - Présent',
        location: 'Douala, Cameroun',
        type: 'Stage / Full-Stack',
        highlights: [
          'Développement d’une application web interne de filtrage d’emails avec classification automatique (Soft Bounce, Hard Bounce et Outbound).',
          'Conception et développement d’applications mobiles offline-first d’audit et inspection avec génération automatique de rapports PDF et Word.',
          'Participation au développement du Système d’Information Électrique du Cameroun pour la SOCAD’EL (web, backend, mobile et SIG).',
          'Mise en œuvre de campagnes de publipostage professionnelles automatisées via Outlook et MS Word.',
          'Conception et développement d’un ERP interne connecté à Odoo (gestion des congés, permissions, missions, planification, inspections).',
          'Personnalisation de KoboCollect pour intégrer du SIG avancé (carte ESRI, traçage des réseaux électriques, export GeoJSON).',
        ],
      },
      {
        company: 'GREEN POWER CAMEROUN',
        position: 'Stagiaire en Analyse et Développement de Solutions IT',
        period: 'Mai 2025 - Novembre 2025',
        location: 'Yaoundé, Cameroun',
        type: 'Stage',
        highlights: [
          'Conception et développement d’une application web interne de suivi de maintenance.',
          'Mise en place de bases de données relationnelles MySQL et développement de modules métiers.',
          'Réalisation de tests unitaires et fonctionnels pour assurer la disponibilité des applications.',
          'Automatisation de la génération de rapports via scripts Python.',
          'Contribution à la maintenance et à l’amélioration des systèmes internes.',
        ],
      },
      {
        company: 'GREEN POWER CAMEROUN',
        position: 'Stagiaire en Analyse et Développement de Solutions IT',
        period: 'Novembre 2024 - Mai 2025',
        location: 'Yaoundé, Cameroun',
        type: 'Stage',
        highlights: [
          'Analyse fonctionnelle et rédaction de spécifications techniques pour des projets d’optimisation des processus internes.',
          'Participation à l’audit et à l’amélioration des performances et de la sécurité de l’infrastructure IT.',
          'Support technique niveau 2 sur les applications critiques et assistance technique aux utilisateurs internes.',
          'Maintenance et amélioration des systèmes d’information existants.',
        ],
      },
      {
        company: 'CREDIX.CAM SA',
        position: 'Stagiaire Développement Mobile',
        period: 'Novembre 2024 - Mai 2025',
        location: 'Yaoundé, Cameroun',
        type: 'Stage',
        highlights: [
          'Développement d’une application web RH avec Spring Boot et MongoDB.',
          'Développement de services back-end et d’APIs REST.',
          'Implémentation d’une authentification sécurisée avec JWT et Spring Security.',
          'Maintenance et amélioration des fonctionnalités applicatives en environnement Agile/Scrum.',
        ],
      },
      {
        company: 'CREDIX.CAM SA',
        position: 'Stagiaire Développement Web',
        period: 'Août 2024 - Octobre 2024',
        location: 'Yaoundé, Cameroun',
        type: 'Stage',
        highlights: [
          'Développement d’applications mobiles Flutter multi-plateformes (Android et iOS).',
          'Développement d’APIs REST avec Spring Boot.',
          'Participation aux tests fonctionnels et à la maintenance applicative (MomoKash).',
        ],
      },
    ],
    education: {
      academicTitle: 'Diplôme Académique',
      certificationsTitle: 'Certifications Professionnelles',
      academicItems: [
        {
          degree: 'Licence en Génie Logiciel',
          school: 'Institut Africain d\'Informatique (IAI)',
          year: '2021 - 2024',
        },
      ],
      certifications: [
        {
          name: 'Certificat Google IT Support Professional',
          issuer: 'Google (Support technique, Réseaux, Administration systèmes & Sécurité)',
          year: '2025',
        },
      ],
    },
  },
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

export default function Experience({ language }: ExperienceProps) {
  const text = language === 'en' ? content.en : content.fr
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>// 03. Experience Timeline</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl font-bold font-display text-foreground">
            {text.title}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            {text.subtitle}
          </motion.p>
        </motion.div>

        {/* Vertical Timeline Track */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="relative pl-6 md:pl-8 space-y-12 border-l-2 border-cyan-500/30"
        >
          {text.experiences.map((exp, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative group">
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] md:-left-[39px] top-6 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_#00f0ff] transition-all" />

              <SpotlightCard className="p-6 sm:p-8 border-white/10 glass-card-hover">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-display text-foreground group-hover:text-cyan-300 transition-colors">
                      {exp.position}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400 flex items-center gap-2 mt-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                      {exp.period}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-purple-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2.5 pt-2">
                  {exp.highlights.map((item, hidx) => (
                    <li key={hidx} className="text-sm text-muted-foreground flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Education & Certifications Row */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 pt-8"
        >
          {/* Academic Education */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold font-display text-foreground flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>{text.education.academicTitle}</span>
            </h3>

            {text.education.academicItems.map((item, idx) => (
              <SpotlightCard key={idx} className="p-6 border-white/10">
                <h4 className="text-base font-bold text-foreground">{item.degree}</h4>
                <p className="text-sm text-cyan-400 font-mono mt-1">{item.school}</p>
                <p className="text-xs text-muted-foreground mt-2">{item.year}</p>
              </SpotlightCard>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold font-display text-foreground flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-400" />
              <span>{text.education.certificationsTitle}</span>
            </h3>

            {text.education.certifications.map((item, idx) => (
              <SpotlightCard key={idx} spotlightColor="rgba(168, 85, 247, 0.15)" className="p-6 border-purple-500/20">
                <h4 className="text-base font-bold text-foreground">{item.name}</h4>
                <p className="text-sm text-purple-400 font-mono mt-1">{item.issuer}</p>
                <p className="text-xs text-muted-foreground mt-2">{item.year}</p>
              </SpotlightCard>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}