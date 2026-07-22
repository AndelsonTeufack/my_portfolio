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
        company: 'KES Inspection & Project',
        position: 'Full-Stack Developer (Mobile & Web)',
        period: 'March 2026 - Present',
        location: 'Douala, Cameroon',
        type: 'Stage / Full-Stack',
        highlights: [
          'Developed an internal web platform for email address verification and Softbounce / Outbounce classification.',
          'Engineered mobile inspection software with automated dynamic PDF report rendering engines.',
          'Built an electrical audit mobile app with JSON data export and multi-format (PDF/Word) report generation.',
          'Contributed to the enterprise asset audit platform for SOCADEL.',
          'Designed an internal mini-ERP system integrated with Odoo and custom REST services.',
        ],
      },
      {
        company: 'GREEN POWER CAMEROUN',
        position: 'IT Solutions Analysis & Development',
        period: 'November 2024 - November 2025',
        location: 'Yaoundé, Cameroon',
        type: 'Stage',
        highlights: [
          'Designed and deployed an internal maintenance request tracking web solution.',
          'Automated monthly financial reporting workflows using Python, saving ~15 hours of manual work per month.',
          'Developed an IT asset inventory module improving equipment traceability.',
          'Conducted comprehensive IT infrastructure security and performance audits.',
          'Provided Level 2 technical support for critical operational apps.',
        ],
      },
      {
        company: 'CREDIX.CAM SA',
        position: 'Mobile & Web Development Intern',
        period: 'June 2023 - October 2024',
        location: 'Yaoundé, Cameroon',
        type: 'Stage',
        highlights: [
          'Developed a microservice HR management portal using Spring Boot and MongoDB with JWT RBAC authentication.',
          'Migrated the Momokash lending service from legacy USSD to a modern Flutter cross-platform mobile application.',
          'Engineered REST APIs for Momokash automated financial reconciliation service.',
          'Collaborated with QA teams in an Agile Scrum environment.',
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
          issuer: 'Google Coursera',
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
        company: 'KES Inspection & Project',
        position: 'Développeur Full-Stack (Mobile & Web)',
        period: 'Mars 2026 - Présent',
        location: 'Douala, Cameroun',
        type: 'Stage / Full-Stack',
        highlights: [
          'Développement d’une application web de filtrage d’emails avec classification Softbounce et Outbounce.',
          'Conception d’applications mobiles d’inspection et moteur automatisé de génération de rapports PDF.',
          'Développement d’une application d’audit électrique avec exportation JSON et rapports PDF/Word.',
          'Participation au développement de la plateforme d’audit d’actifs pour l’entreprise SOCADEL.',
          'Conception et développement d’un mini ERP interne communiquant avec Odoo.',
        ],
      },
      {
        company: 'GREEN POWER CAMEROUN',
        position: 'Stagiaire en Analyse et Développement de Solutions IT',
        period: 'Novembre 2024 - Novembre 2025',
        location: 'Yaoundé, Cameroun',
        type: 'Stage',
        highlights: [
          'Conception et développement d’une solution web interne pour le suivi des demandes de maintenance.',
          'Automatisation des rapports financiers en Python, économisant environ 15 heures de travail manuel par mois.',
          'Développement d’un module d’inventaire IT améliorant la traçabilité des équipements.',
          'Audit complet de l’infrastructure IT et optimisation des requêtes de bases de données.',
          'Support technique de niveau 2 sur les applications critiques.',
        ],
      },
      {
        company: 'CREDIX.CAM SA',
        position: 'Stagiaire Développement Mobile & Web',
        period: 'Juin 2023 - Octobre 2024',
        location: 'Yaoundé, Cameroun',
        type: 'Stage',
        highlights: [
          'Développement d’un service RH avec Spring Boot et MongoDB avec authentification JWT et rôles.',
          'Migration du service de prêt Momokash du système USSD vers une application mobile Flutter.',
          'Implémentation d’APIs REST pour le service de réconciliation financière Momokash.',
          'Collaboration avec l’équipe QA en environnement Agile Scrum.',
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
          issuer: 'Google Coursera',
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