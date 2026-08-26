'use client'

import { useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import { MapPin, Sparkles, GraduationCap, Award, ChevronRight, Briefcase } from 'lucide-react'
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
          'Conception & development of offline-first mobile apps for electrical network audit & inspection with automatic PDF, Word, and Excel report generation.',
          'Contributed as FullStack developer to Cameroon’s Electrical Information System asset collection & audit project for SOCAD\'EL (web, mobile & GIS).',
          'Executed professional emailing campaigns using Microsoft Outlook & Word automation with n8n.',
          'Designed & developed an internal ERP connected to Odoo for central management of company business processes (leaves, permissions, planning, inspections).',
          'Customized KoboCollect for advanced GIS features (ESRI map repositioning, automatic electrical grid tracking during asset collection, GeoJSON export).',
        ],
      },
      {
        company: 'GREEN POWER CAMEROUN',
        position: 'IT Solutions Analysis & Development Intern',
        period: 'May 2025 - November 2025',
        location: 'Yaoundé, Cameroon',
        type: 'Internship',
        highlights: [
          'Designed and developed an internal web application for Computer-Aided Maintenance Management (GMAO).',
          'Modeled and implemented MySQL relational databases with custom business modules development.',
          'Wrote and executed unit and non-regression testing to guarantee high application robustness and continuity of service.',
          'Automated reporting data extraction and aggregation using Python scripts.',
          'Participated in the industrialization and optimization of internal data processing workflows.',
        ],
      },
      {
        company: 'INSTITUT AFRICAIN D\'INFORMATIQUE (IAI)',
        position: 'Technical Instructor & Mentor (Web & Mobile Engineering)',
        period: 'January 2025 - May 2025',
        location: 'Yaoundé, Cameroon',
        type: 'Mentorship & Pedagogy',
        highlights: [
          'Conducted intensive practical workshops in Web Engineering (React.js, JS, HTML5/CSS3) and Mobile Development (Flutter, Dart) for 1st & 2nd-year students.',
          'Mentored 100+ software engineering students, accelerating their technical proficiency and practical problem-solving skills.',
          'Prepared students for corporate software engineering internships, capstone projects, and international professional certifications.',
          'Fostered engineering best practices, clean code architecture, Git workflows, and API integration methods.',
        ],
      },
      {
        company: 'GREEN POWER CAMEROUN',
        position: 'IT Solutions Analysis & Development Intern',
        period: 'November 2024 - May 2025',
        location: 'Yaoundé, Cameroon',
        type: 'Internship',
        highlights: [
          'Requirements gathering and technical specification drafting for digitalization and workflow optimization projects.',
          'Performance audit (database, network) and infrastructure vulnerability analysis.',
          'Handled Level 2 (N2) technical incidents: deep diagnostics and resolution on strategic applications.',
          'Evolutive and corrective maintenance of the Information System with proactive end-user technical support.',
          'Proficiency in Windows environments and Microsoft 365 tools in a professional corporate context.',
        ],
      },
      {
        company: 'CREDIX.CAM SA',
        position: 'Mobile Development Intern',
        period: 'August 2024 - October 2024',
        location: 'Yaoundé, Cameroon',
        type: 'Internship',
        highlights: [
          'Conception & development of a cross-platform mobile application migrating users from USSD channels to a native mobile experience.',
          'Implementation of a dedicated backend service orchestrating communication between the mobile app and Redis cache for high-performance session & temporary data management.',
          'Elaboration and execution of unit and integration tests guaranteeing application reliability and robustness.',
          'Close collaboration with technical teams (backend, infrastructure) ensuring continuous integration across system components.',
        ],
      },
      {
        company: 'CREDIX.CAM SA',
        position: 'Web Development Intern',
        period: 'July 2023 - September 2023',
        location: 'Yaoundé, Cameroon',
        type: 'Internship',
        highlights: [
          'Implementation of a scheduled backend service for automated detection of daily failed transactions and financial reconciliation automation.',
          'Design and implementation of a fullstack web application (Spring Boot / React JS) dedicated to internal HR management, securing REST endpoints via JWT & Spring Security RBAC permissions.',
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
          issuer: 'Google (Support technique, Réseaux, Administration systèmes & Sécurité)',
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
          'Développement d’une application web interne de filtrage et qualification d’adresses e-mail avec classification automatique (Soft Bounce, Hard Bounce et Outbound).',
          'Conception et développement d’applications mobiles offline-first d’audit et inspection des installations électriques avec génération automatique de rapports PDF, Word et Excel.',
          'Participation au projet de collecte et d’audit des actifs du Système d’Information Électrique du Cameroun pour la SOCAD’EL (web, mobile et SIG).',
          'Mise en œuvre de campagnes de publipostage professionnelles automatisées via Outlook et MS Word avec n8n.',
          'Conception et développement d’un ERP interne connecté à Odoo permettant la gestion centralisée des processus métiers de l’entreprise.',
          'Personnalisation de KoboCollect pour intégrer du SIG avancé (repositionnement des points sur carte ESRI, traçage automatique des réseaux électriques, export GeoJSON).',
        ],
      },
      {
        company: 'GREEN POWER CAMEROUN',
        position: 'Stagiaire en Analyse et Développement de Solutions IT',
        period: 'Mai 2025 - Novembre 2025',
        location: 'Yaoundé, Cameroun',
        type: 'Stage',
        highlights: [
          'Conception et développement d’une application web interne de gestion des opérations de maintenance (GMAO).',
          'Modélisation et implémentation de bases de données relationnelles MySQL et développement de briques fonctionnelles.',
          'Rédaction et exécution de tests unitaires et de non-régression pour garantir la robustesse et la continuité de service.',
          'Automatisation de l’extraction et de l’agrégation de données de reporting via scripts Python.',
          'Participation à l’industrialisation et à l’optimisation des chaînes de traitement internes.',
        ],
      },
      {
        company: 'INSTITUT AFRICAIN D\'INFORMATIQUE (IAI)',
        position: 'Formateur & Mentor en Développement Web & Mobile',
        period: 'Janvier 2025 - Mai 2025',
        location: 'Yaoundé, Cameroun',
        type: 'Mentorat & Enseignement',
        highlights: [
          'Animation de cours et travaux pratiques intensifs en Développement Web (React.js, JS, HTML5/CSS3) et Mobile (Flutter, Dart) pour les étudiants de 1ère et 2ème année.',
          'Mentorat et encadrement technique de +100 étudiants en génie logiciel, favorisant la montée en compétences et la maîtrise des architectures logicielles.',
          'Préparation accélérée des étudiants aux stages en entreprise, projets professionnels de fin d’études et certifications internationales.',
          'Sensibilisation aux bonnes pratiques de développement, au clean code, à la gestion de versions Git et à l’intégration d’APIs REST.',
        ],
      },
      {
        company: 'GREEN POWER CAMEROUN',
        position: 'Stagiaire en Analyse et Développement de Solutions IT',
        period: 'Novembre 2024 - Mai 2025',
        location: 'Yaoundé, Cameroun',
        type: 'Stage',
        highlights: [
          'Recueil des besoins métiers et rédaction de cahiers des charges techniques pour des projets de digitalisation et d’optimisation des workflows.',
          'Audit des performances (bases de données, réseau) et analyse des vulnérabilités de l’infrastructure.',
          'Prise en charge des incidents de niveau 2 (N2) : diagnostic approfondi et résolution sur les applications stratégiques.',
          'Maintenance évolutive et corrective du Système d’Information, couplée à une assistance technique proactive auprès des utilisateurs.',
          'Maîtrise des environnements Windows et des outils Microsoft 365 en contexte professionnel.',
        ],
      },
      {
        company: 'CREDIX.CAM SA',
        position: 'Stagiaire Développement Mobile',
        period: 'Août 2024 - Octobre 2024',
        location: 'Yaoundé, Cameroun',
        type: 'Stage',
        highlights: [
          'Conception et développement d’une application mobile cross-platform permettant de migrer les utilisateurs du canal USSD vers une expérience mobile native.',
          'Mise en place d’un service backend dédié assurant l’orchestration des échanges entre l’application mobile et le cache Redis pour une gestion performante des sessions et des données temporaires.',
          'Élaboration et exécution de tests unitaires et d’intégration garantissant la fiabilité et la robustesse de l’application mobile.',
          'Collaboration étroite avec les équipes techniques (backend, infrastructure) pour assurer une intégration continue et cohérente des différents composants du système.',
        ],
      },
      {
        company: 'CREDIX.CAM SA',
        position: 'Stagiaire Développement Web',
        period: 'Juillet 2023 - Septembre 2023',
        location: 'Yaoundé, Cameroun',
        type: 'Stage',
        highlights: [
          'Mise en place d’un service backend planifié pour la détection automatique des transactions quotidiennes en échec et l’automatisation des processus de réconciliation financière.',
          'Conception et implémentation d’une application fullstack (Spring Boot / React JS) dédiée à la gestion interne des ressources humaines, avec sécurisation des endpoints REST via JWT et configuration des autorisations (rôles/permissions) avec Spring Security.',
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
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-sky-600 dark:text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold">
            <Sparkles className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
            <span>// 03. Experience Timeline</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl font-bold font-display text-slate-900 dark:text-foreground">
            {text.title}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-slate-600 dark:text-muted-foreground text-base sm:text-lg max-w-2xl font-medium">
            {text.subtitle}
          </motion.p>
        </motion.div>

        {/* Vertical Timeline Track */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="relative pl-6 md:pl-8 space-y-12 border-l-2 border-sky-400/40 dark:border-cyan-500/30"
        >
          {text.experiences.map((exp, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative group">
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] md:-left-[39px] top-6 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-sky-600 dark:border-cyan-400 group-hover:bg-sky-600 dark:group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_#0284c7] dark:group-hover:shadow-[0_0_15px_#00f0ff] transition-all" />

              <SpotlightCard className="p-6 sm:p-8 border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-none glass-card-hover">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-foreground group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors">
                      {exp.position}
                    </h3>
                    <p className="text-sm font-bold text-sky-700 dark:text-cyan-400 flex items-center gap-2 mt-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-400/40 dark:border-cyan-500/30 text-xs font-mono font-bold text-sky-800 dark:text-cyan-300">
                      {exp.period}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-xs font-mono font-semibold text-slate-600 dark:text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2.5 pt-2">
                  {exp.highlights.map((item, hidx) => (
                    <li key={hidx} className="text-sm text-slate-700 dark:text-muted-foreground flex items-start gap-2.5 font-medium">
                      <ChevronRight className="w-4 h-4 text-sky-600 dark:text-cyan-400 shrink-0 mt-0.5" />
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
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-foreground flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-sky-600 dark:text-cyan-400" />
              <span>{text.education.academicTitle}</span>
            </h3>

            {text.education.academicItems.map((item, idx) => (
              <SpotlightCard key={idx} className="p-6 border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-none">
                <h4 className="text-base font-bold text-slate-900 dark:text-foreground">{item.degree}</h4>
                <p className="text-sm text-sky-700 dark:text-cyan-400 font-mono font-bold mt-1">{item.school}</p>
                <p className="text-xs text-slate-500 dark:text-muted-foreground font-semibold mt-2">{item.year}</p>
              </SpotlightCard>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-foreground flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span>{text.education.certificationsTitle}</span>
            </h3>

            {text.education.certifications.map((item, idx) => (
              <SpotlightCard key={idx} spotlightColor="rgba(124, 58, 237, 0.15)" className="p-6 border-purple-400/30 dark:border-purple-500/20 shadow-sm dark:shadow-none">
                <h4 className="text-base font-bold text-slate-900 dark:text-foreground">{item.name}</h4>
                <p className="text-sm text-purple-700 dark:text-purple-400 font-mono font-bold mt-1">{item.issuer}</p>
                <p className="text-xs text-slate-500 dark:text-muted-foreground font-semibold mt-2">{item.year}</p>
              </SpotlightCard>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}