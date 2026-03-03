import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code, 
  Layout, 
  Database, 
  GitBranch, 
  Cpu,
  Monitor,
  Users,
  Globe,
  Sparkles,
  Zap,
  Brain,
  MessageCircle,
  Target,
  Clock,
  Server
} from 'lucide-react'

interface SkillsProps {
  language: 'en' | 'fr'
}

const content = {
  en: {
    title: 'Technical Skills',
    categories: [
      {
        name: 'Languages',
        skills: ['Java', 'Python', 'JavaScript', 'TypeScript' , 'Dart', 'PHP', 'C/C++', 'HTML/CSS'],
        icon: Code,
      },
      {
        name: 'Frontend',
        skills: ['React', 'Next.js', 'Flutter', 'Tailwind CSS', 'Bootstrap', 'Responsive Design', 'Wordpress'],
        icon: Layout,
      },
      {
        name: 'Backend',
        skills: ['Spring Boot', 'Django', 'NestJS', 'Node.js', 'REST APIs', 'Microservices'],
        icon: Server,
      },
      {
        name: 'Databases',
        skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Oracle', 'Redis'],
        icon: Database,
      },
      {
        name: 'Tools & DevOps',
        skills: ['Git/GitLab', 'Docker', 'Kubernate', 'Kafka' , 'Postman', 'Jira', 'VS Code', 'Android Studio', 'Power BI', 'Swagger'],
        icon: GitBranch,
      },
      {
        name: 'Methodologies',
        skills: ['Agile/Scrum', 'UML', 'Merise', 'Software Architecture', 'SOLID' , 'System Design'],
        icon: Cpu,
      },
      {
        name: 'Operating System',
        skills: ['Linux', 'Windows'],
        icon: Monitor,
      },
    ],
    softSkills: [
      { name: 'Adaptability', icon: Zap, description: 'Quickly adjust to new challenges' },
      { name: 'Team Collaboration', icon: Users, description: 'Work effectively in groups' },
      { name: 'Critical Thinking', icon: Brain, description: 'Analytical and logical approach' },
      { name: 'Communication', icon: MessageCircle, description: 'Clear and concise exchange' },
      { name: 'Leadership', icon: Target, description: 'Guide and motivate teams' },
      { name: 'Time Management', icon: Clock, description: 'Efficient prioritization' },
    ],
    languages: [
      { name: 'French', level: 'Native', proficiency: 100, flag: '🇫🇷' },
      { name: 'English', level: 'Fluent', proficiency: 85, flag: '🇬🇧' },
    ],
  },
  fr: {
    title: 'Compétences Techniques',
    categories: [
      {
        name: 'Langages',
        skills: ['Java', 'Python', 'JavaScript', 'TypeScript' , 'Dart', 'PHP', 'C/C++', 'HTML/CSS'],
        icon: Code,
      },
      {
        name: 'Frontend',
        skills: ['React', 'Next.js', 'Flutter', 'Tailwind CSS', 'Bootstrap', 'Design Responsif', 'Wordpress'],
        icon: Layout,
      },
      {
        name: 'Backend',
        skills: ['Spring Boot', 'Django', 'NestJS', 'Node.js', 'APIs REST', 'Microservices'],
        icon: Server,
      },
      {
        name: 'Bases de Données',
        skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Oracle', 'Redis'],
        icon: Database,
      },
      {
        name: 'Outils & DevOps',
        skills: ['Git/GitLab', 'Docker', 'Kubernate', 'Kafka' , 'Postman', 'Jira', 'VS Code', 'Android Studio', 'Power BI', 'Swagger'],
        icon: GitBranch,
      },
      {
        name: 'Méthodologies',
        skills: ['Agile/Scrum', 'UML', 'Merise', 'Architecture Logicielle', 'SOLID', 'System Design'],
        icon: Cpu,
      },
      {
        name: 'Systèmes d\'Exploitation',
        skills: ['Linux', 'Windows'],
        icon: Monitor,
      },
    ],
    softSkills: [
      { name: 'Adaptabilité', icon: Zap, description: "S'adapter rapidement aux défis" },
      { name: 'Travail en Équipe', icon: Users, description: 'Collaborer efficacement' },
      { name: 'Pensée Critique', icon: Brain, description: 'Approche analytique et logique' },
      { name: 'Communication', icon: MessageCircle, description: 'Échanges clairs et concis' },
      { name: 'Leadership', icon: Target, description: 'Guider et motiver les équipes' },
      { name: 'Gestion du Temps', icon: Clock, description: 'Priorisation efficace' },
    ],
    languages: [
      { name: 'Français', level: 'Natif', proficiency: 100, flag: '🇫🇷' },
      { name: 'Anglais', level: 'Courant', proficiency: 85, flag: '🇬🇧' },
    ],
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

export default function Skills({ language }: SkillsProps) {
  const text = language === 'en' ? content.en : content.fr
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />

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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground inline-flex items-center gap-3">
              {text.title}
              <Sparkles className="w-8 h-8 text-primary/70" />
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto md:mx-0" />
            <p className="text-muted-foreground max-w-2xl mx-auto md:mx-0 text-lg">
              {language === 'en'
                ? 'A comprehensive overview of my technical toolkit and soft skills.'
                : 'Un aperçu complet de ma boîte à outils technique et de mes compétences transversales.'}
            </p>
          </motion.div>

          {/* Grille des catégories techniques */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {text.categories.map((category, idx) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sidx) => (
                      <motion.span
                        key={sidx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + sidx * 0.02 }}
                        whileHover={{ scale: 1.1 }}
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Section Soft Skills & Langues */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
            {/* Soft Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                {language === 'en' ? 'Soft Skills' : 'Compétences Transversales'}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {text.softSkills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="group relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 hover:border-primary/30 hover:shadow-md hover:shadow-primary/10 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                        <skill.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-base">{skill.name}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{skill.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Langues */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Globe className="w-6 h-6 text-primary" />
                {language === 'en' ? 'Languages' : 'Langues'}
              </h3>
              <div className="space-y-4">
                {text.languages.map((lang, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="p-5 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{lang.flag}</span>
                        <span className="font-semibold text-foreground">{lang.name}</span>
                      </div>
                      <span className="text-sm text-primary font-medium">{lang.level}</span>
                    </div>
                    <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${lang.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}