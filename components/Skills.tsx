'use client'

import { useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import {
  Code,
  Layout,
  Database,
  GitBranch,
  Cpu,
  TrendingUp,
  Users,
  Globe,
  Sparkles,
  Zap,
  Brain,
  MessageCircle,
  Target,
  Server,
} from 'lucide-react'
import SpotlightCard from '@/components/ui/SpotlightCard'

interface SkillsProps {
  language: 'en' | 'fr'
}

const content = {
  en: {
    title: 'Technical Arsenal',
    subtitle: 'Comprehensive toolkit across full-stack software development, IT analysis, and devops.',
    categories: [
      {
        name: 'Backend & APIs',
        skills: ['Spring Boot', 'Java', 'Python', 'C/C++', 'Django', 'FastAPI', 'Flask', 'Node.js', 'NestJS', 'REST APIs'],
        icon: Server,
        color: 'rgba(2, 132, 199, 0.15)',
      },
      {
        name: 'Frontend & Mobile',
        skills: ['React.js', 'Next.js', 'Flutter', 'Java/Kotlin (Android)', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Dart', 'HTML5/CSS3'],
        icon: Layout,
        color: 'rgba(124, 58, 237, 0.15)',
      },
      {
        name: 'Databases & Storage',
        skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'SQL Server', 'Oracle SQL'],
        icon: Database,
        color: 'rgba(5, 150, 105, 0.15)',
      },
      {
        name: 'DevOps, Tools & ERP',
        skills: ['Git', 'GitHub', 'GitLab', 'Docker', 'n8n', 'Postman', 'Odoo ERP', 'Jira', 'Power BI', 'MS 365', 'KoboCollect / SIG'],
        icon: GitBranch,
        color: 'rgba(217, 119, 6, 0.15)',
      },
      {
        name: 'Architecture & Design',
        skills: ['Agile / Scrum', 'UML / Merise', 'System Design', 'SOLID Principles', 'Design Patterns'],
        icon: Cpu,
        color: 'rgba(37, 99, 235, 0.15)',
      },
      {
        name: 'Performance & Security',
        skills: ['Core Web Vitals', 'Lighthouse', 'SEO Optimization', 'JWT Auth & Spring Security', 'HTTPS / SSL'],
        icon: TrendingUp,
        color: 'rgba(219, 39, 119, 0.15)',
      },
    ],
    softSkillsTitle: 'Professional Mindset',
    softSkills: [
      { name: 'Adaptability', icon: Zap, description: 'Rapidly learning & adopting emerging frameworks' },
      { name: 'Pedagogy & Mentorship', icon: Users, description: 'Technical training, student coaching & knowledge transfer at IAI' },
      { name: 'Team Leadership', icon: Target, description: 'Guiding development sprints & technical reviews' },
      { name: 'Analytical Thinking', icon: Brain, description: 'Deconstructing complex business logic into code' },
      { name: 'Communication', icon: MessageCircle, description: 'Clear technical documentation & client syncs' },
    ],
    languagesTitle: 'Linguistic Competence',
    languages: [
      { name: 'Yemba', level: 'Native Language', proficiency: 100, flag: '🇨🇲' },
      { name: 'French', level: 'Native', proficiency: 100, flag: '🇨🇲' },
      { name: 'English', level: 'Level B1', proficiency: 80, flag: '🇨🇲' },
    ],
  },
  fr: {
    title: 'Arsenal Technique',
    subtitle: 'Boîte à outils complète en développement full-stack, analyse IT et ingénierie logicielle.',
    categories: [
      {
        name: 'Backend & APIs',
        skills: ['Spring Boot', 'Java', 'Python', 'C/C++', 'Django', 'FastAPI', 'Flask', 'Node.js', 'NestJS', 'APIs REST'],
        icon: Server,
        color: 'rgba(2, 132, 199, 0.15)',
      },
      {
        name: 'Frontend & Mobile',
        skills: ['React.js', 'Next.js', 'Flutter', 'Java/Kotlin (Android natif)', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Dart', 'HTML5/CSS3'],
        icon: Layout,
        color: 'rgba(124, 58, 237, 0.15)',
      },
      {
        name: 'Bases de Données',
        skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'SQL Server', 'Oracle SQL'],
        icon: Database,
        color: 'rgba(5, 150, 105, 0.15)',
      },
      {
        name: 'DevOps, Outils & ERP',
        skills: ['Git', 'GitHub', 'GitLab', 'Docker', 'n8n', 'Postman', 'Odoo ERP', 'Jira', 'Power BI', 'MS 365', 'KoboCollect / SIG'],
        icon: GitBranch,
        color: 'rgba(217, 119, 6, 0.15)',
      },
      {
        name: 'Architecture & Conception',
        skills: ['Agile / Scrum', 'UML / Merise', 'System Design', 'Principes SOLID', 'Design Patterns'],
        icon: Cpu,
        color: 'rgba(37, 99, 235, 0.15)',
      },
      {
        name: 'Performance & Sécurité',
        skills: ['Core Web Vitals', 'Lighthouse', 'Référencement SEO', 'Authentification JWT & Spring Security', 'HTTPS / SSL'],
        icon: TrendingUp,
        color: 'rgba(219, 39, 119, 0.15)',
      },
    ],
    softSkillsTitle: 'Compétences Transversales',
    softSkills: [
      { name: 'Adaptabilité', icon: Zap, description: 'Assimilation rapide des nouveaux frameworks' },
      { name: 'Pédagogie & Mentorat', icon: Users, description: 'Formation technique, accompagnement & transmission de savoir à l\'IAI' },
      { name: 'Leadership & Équipe', icon: Target, description: 'Pilotage des sprints Agile et revue de code' },
      { name: 'Pensée Analytique', icon: Brain, description: 'Modélisation et résolution de problèmes complexes' },
      { name: 'Communication', icon: MessageCircle, description: 'Documentation claire et alignement technique' },
    ],
    languagesTitle: 'Compétences Linguistiques',
    languages: [
      { name: 'Yemba', level: 'Langue Maternelle', proficiency: 100, flag: '🇨🇲' },
      { name: 'Français', level: 'Natif', proficiency: 100, flag: '🇨🇲' },
      { name: 'Anglais', level: 'Niveau B1', proficiency: 80, flag: '🇨🇲' },
    ],
  },
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

export default function Skills({ language }: SkillsProps) {
  const text = language === 'en' ? content.en : content.fr
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>// 02. Skills & Expertise</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl font-bold font-display text-slate-900 dark:text-foreground">
            {text.title}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-slate-600 dark:text-muted-foreground text-base sm:text-lg max-w-2xl font-medium">
            {text.subtitle}
          </motion.p>
        </motion.div>

        {/* Technical Categories Bento Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {text.categories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <motion.div key={idx} variants={itemVariants}>
                <SpotlightCard
                  spotlightColor={cat.color}
                  className="p-6 h-full flex flex-col justify-between glass-card-hover border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-none"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-sky-500/10 dark:bg-white/[0.05] border border-sky-400/30 dark:border-white/10 text-sky-600 dark:text-cyan-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold font-display text-slate-900 dark:text-foreground">{cat.name}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {cat.skills.map((skill, sidx) => (
                        <span
                          key={sidx}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 text-xs font-mono font-semibold text-slate-800 dark:text-slate-300 hover:text-sky-700 dark:hover:text-cyan-300 hover:border-sky-500/50 dark:hover:border-cyan-500/40 hover:bg-sky-500/10 dark:hover:bg-cyan-500/10 transition-all cursor-default shadow-2xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Soft Skills & Languages Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid lg:grid-cols-12 gap-8 pt-6"
        >
          {/* Soft Skills (7 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-foreground flex items-center gap-2">
              <Users className="w-5 h-5 text-sky-600 dark:text-cyan-400" />
              <span>{text.softSkillsTitle}</span>
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {text.softSkills.map((soft, idx) => {
                const Icon = soft.icon
                return (
                  <SpotlightCard key={idx} className="p-5 border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-none">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-foreground">{soft.name}</h4>
                        <p className="text-xs text-slate-600 dark:text-muted-foreground mt-1 leading-relaxed font-medium">{soft.description}</p>
                      </div>
                    </div>
                  </SpotlightCard>
                )
              })}
            </div>
          </motion.div>

          {/* Languages (5 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-foreground flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span>{text.languagesTitle}</span>
            </h3>

            <div className="space-y-4">
              {text.languages.map((lang, idx) => (
                <SpotlightCard key={idx} className="p-5 border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-none">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-foreground">{lang.name}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-sky-700 dark:text-cyan-400">{lang.level}</span>
                  </div>

                  <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${lang.proficiency}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.4 + idx * 0.2 }}
                      className="h-full bg-gradient-to-r from-sky-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 rounded-full"
                    />
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}