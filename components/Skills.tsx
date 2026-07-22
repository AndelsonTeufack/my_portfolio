'use client'

import { useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import {
  Code,
  Layout,
  Database,
  GitBranch,
  Cpu,
  Monitor,
  TrendingUp,
  Headset,
  Users,
  Globe,
  Sparkles,
  Zap,
  Brain,
  MessageCircle,
  Target,
  Clock,
  Server,
  Terminal,
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
        skills: ['Spring Boot', 'Java', 'Python', 'Django', 'FastAPI', 'Node.js', 'NestJS', 'REST APIs', 'Microservices'],
        icon: Server,
        color: 'rgba(0, 240, 255, 0.15)',
      },
      {
        name: 'Frontend & Mobile',
        skills: ['React', 'Next.js', 'Flutter', 'TypeScript', 'Tailwind CSS', 'Dart', 'Responsive UI', 'WordPress'],
        icon: Layout,
        color: 'rgba(168, 85, 247, 0.15)',
      },
      {
        name: 'Databases & Storage',
        skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQL Server', 'Oracle SQL'],
        icon: Database,
        color: 'rgba(16, 185, 129, 0.15)',
      },
      {
        name: 'DevOps, Tools & ERP',
        skills: ['Git/GitLab', 'Docker', 'Kubernetes', 'Kafka', 'Postman', 'Odoo ERP Integration', 'Jira', 'Power BI'],
        icon: GitBranch,
        color: 'rgba(245, 158, 11, 0.15)',
      },
      {
        name: 'Architecture & Design',
        skills: ['Agile / Scrum', 'UML / Merise', 'System Design', 'SOLID Principles', 'Design Patterns'],
        icon: Cpu,
        color: 'rgba(59, 130, 246, 0.15)',
      },
      {
        name: 'Performance & Security',
        skills: ['Core Web Vitals', 'Lighthouse', 'SEO Optimization', 'JWT Auth', 'HTTPS / SSL'],
        icon: TrendingUp,
        color: 'rgba(236, 72, 153, 0.15)',
      },
    ],
    softSkillsTitle: 'Professional Mindset',
    softSkills: [
      { name: 'Adaptability', icon: Zap, description: 'Rapidly learning & adopting emerging frameworks' },
      { name: 'Team Leadership', icon: Target, description: 'Guiding development sprints & technical reviews' },
      { name: 'Analytical Thinking', icon: Brain, description: 'Deconstructing complex business logic into code' },
      { name: 'Communication', icon: MessageCircle, description: 'Clear technical documentation & client syncs' },
    ],
    languagesTitle: 'Linguistic Competence',
    languages: [
      { name: 'French', level: 'Native / Bilingual', proficiency: 100, flag: '🇫🇷' },
      { name: 'English', level: 'Full Professional Proficiency', proficiency: 85, flag: '🇬🇧' },
    ],
  },
  fr: {
    title: 'Arsenal Technique',
    subtitle: 'Boîte à outils complète en développement full-stack, analyse IT et ingénierie logicielle.',
    categories: [
      {
        name: 'Backend & APIs',
        skills: ['Spring Boot', 'Java', 'Python', 'Django', 'FastAPI', 'Node.js', 'NestJS', 'APIs REST', 'Microservices'],
        icon: Server,
        color: 'rgba(0, 240, 255, 0.15)',
      },
      {
        name: 'Frontend & Mobile',
        skills: ['React', 'Next.js', 'Flutter', 'TypeScript', 'Tailwind CSS', 'Dart', 'Design Responsif', 'WordPress'],
        icon: Layout,
        color: 'rgba(168, 85, 247, 0.15)',
      },
      {
        name: 'Bases de Données',
        skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQL Server', 'Oracle SQL'],
        icon: Database,
        color: 'rgba(16, 185, 129, 0.15)',
      },
      {
        name: 'DevOps, Outils & ERP',
        skills: ['Git/GitLab', 'Docker', 'Kubernetes', 'Kafka', 'Postman', 'Intégration Odoo', 'Jira', 'Power BI'],
        icon: GitBranch,
        color: 'rgba(245, 158, 11, 0.15)',
      },
      {
        name: 'Architecture & Conception',
        skills: ['Agile / Scrum', 'UML / Merise', 'System Design', 'Principes SOLID', 'Design Patterns'],
        icon: Cpu,
        color: 'rgba(59, 130, 246, 0.15)',
      },
      {
        name: 'Performance & Sécurité',
        skills: ['Core Web Vitals', 'Lighthouse', 'Référencement SEO', 'Authentification JWT', 'HTTPS / SSL'],
        icon: TrendingUp,
        color: 'rgba(236, 72, 153, 0.15)',
      },
    ],
    softSkillsTitle: 'Compétences Transversales',
    softSkills: [
      { name: 'Adaptabilité', icon: Zap, description: 'Assimilation rapide des nouveaux frameworks' },
      { name: 'Leadership & Équipe', icon: Target, description: 'Pilotage des sprints Agile et revue de code' },
      { name: 'Pensée Analytique', icon: Brain, description: 'Modélisation et résolution de problèmes complexes' },
      { name: 'Communication', icon: MessageCircle, description: 'Documentation claire et alignement technique' },
    ],
    languagesTitle: 'Compétences Linguistiques',
    languages: [
      { name: 'Français', level: 'Langue Maternelle', proficiency: 100, flag: '🇫🇷' },
      { name: 'Anglais', level: 'Courant / Professionnel', proficiency: 85, flag: '🇬🇧' },
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
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>// 02. Skills & Expertise</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl font-bold font-display text-foreground">
            {text.title}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-muted-foreground text-base sm:text-lg max-w-2xl">
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
                  className="p-6 h-full flex flex-col justify-between glass-card-hover border-white/10"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-cyan-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold font-display text-foreground">{cat.name}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {cat.skills.map((skill, sidx) => (
                        <span
                          key={sidx}
                          className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono font-medium text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all cursor-default"
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
            <h3 className="text-xl font-bold font-display text-foreground flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan-400" />
              <span>{text.softSkillsTitle}</span>
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {text.softSkills.map((soft, idx) => {
                const Icon = soft.icon
                return (
                  <SpotlightCard key={idx} className="p-5 border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground">{soft.name}</h4>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{soft.description}</p>
                      </div>
                    </div>
                  </SpotlightCard>
                )
              })}
            </div>
          </motion.div>

          {/* Languages (5 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold font-display text-foreground flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-400" />
              <span>{text.languagesTitle}</span>
            </h3>

            <div className="space-y-4">
              {text.languages.map((lang, idx) => (
                <SpotlightCard key={idx} className="p-5 border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="text-sm font-bold text-foreground">{lang.name}</span>
                    </div>
                    <span className="text-xs font-mono text-cyan-400">{lang.level}</span>
                  </div>

                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${lang.proficiency}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.4 + idx * 0.2 }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
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