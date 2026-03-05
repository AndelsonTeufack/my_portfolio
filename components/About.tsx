import { motion, useInView, Variants } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  Target, 
  Lightbulb, 
  Sparkles, 
  Code, 
  Cloud, 
  Search, 
  Quote
} from 'lucide-react'

interface AboutProps {
  language: 'en' | 'fr'
}

const content = {
  en: {
    title: 'About Me',
    intro: "I am Andelson TEUFACK, a young full-stack developer and IT analyst, 23 years old, residing in Douala, Cameroon. With a passion for solving complex problems and creating elegant solutions, I specialize in developing robust applications that combine technical excellence with exceptional user experience.",
    fullStory: "My journey in tech began with a curiosity to understand how systems work. Over 2+ years, I've evolved from a passionate learner to a professional developer who thrives at the intersection of innovation and problem-solving. I believe that great software isn't just about writing code—it's about understanding user needs, designing thoughtful solutions, and continuously improving.",
    vision: "I envision a future where technology seamlessly solves real-world problems. My approach is methodical yet creative: I analyze challenges deeply, design elegant architectures, and implement solutions that scale. I'm driven by impact—creating systems that not only perform but inspire confidence.",
    methodology: "My methodology combines Agile practices with systematic problem-solving. I start by understanding the business context, design comprehensive solutions, and iterate based on feedback. I believe in code quality, security-first thinking, and maintaining clean architectures.",
    expertise: [
      {
        title: 'Full-Stack Development',
        desc: 'Building end-to-end applications with modern technologies, from backend APIs to responsive frontends.',
        icon: Code,
      },
      {
        title: 'IT Solutions',
        desc: 'Analyzing business needs and designing comprehensive IT solutions with focus on optimization and security.',
        icon: Cloud,
      },
      {
        title: 'Problem Solving',
        desc: 'Breaking down complex challenges into manageable solutions with methodical approaches and creative thinking.',
        icon: Search,
      },
    ],
    mission: "My mission is to create software that doesn't just work, but delights users and solves real-world problems with elegance and reliability.",
    stats: [
      { value: 2, label: 'Years Experience', suffix: '+' },
      { value: 10, label: 'Projects Completed', suffix: '+' },
      { value: 20, label: 'Technologies', suffix: '+' },
    ],
  },
  fr: {
    title: 'À Propos',
    intro: "Je suis Andelson TEUFACK, un jeune développeur full-stack et analyste IT de 23 ans résident à Douala, Cameroun. Passionné par la résolution de problèmes complexes et la création de solutions élégantes, je me spécialise dans le développement d'applications robustes combinant excellence technique et expérience utilisateur exceptionnelle.",
    fullStory: "Mon parcours dans la technologie a commencé par la curiosité de comprendre comment fonctionnent les systèmes. Au cours de plus de 2 ans, j'ai évolué d'un passionné d'apprentissage à un développeur professionnel qui prospère à l'intersection de l'innovation et de la résolution de problèmes. Je crois que le grand logiciel ne concerne pas seulement l'écriture de code, mais la compréhension des besoins des utilisateurs.",
    vision: "Je vois un avenir où la technologie résout facilement les problèmes du monde réel. Mon approche est méthodique mais créative : j'analyse les défis en profondeur, je conçois des architectures élégantes et j'implémente des solutions qui s'adaptent. Je suis motivé par l'impact.",
    methodology: "Ma méthodologie combine les pratiques Agile avec la résolution systématique de problèmes. Je commence par comprendre le contexte métier, concevoir des solutions complètes et itérer selon les retours. Je crois en la qualité du code et à la sécurité.",
    expertise: [
      {
        title: 'Développement Full-Stack',
        desc: "Construire des applications end-to-end avec les technologies modernes, des APIs backend aux frontends réactifs.",
        icon: Code,
      },
      {
        title: 'Solutions IT',
        desc: "Analyser les besoins commerciaux et concevoir des solutions IT complètes axées sur l'optimisation et la sécurité.",
        icon: Cloud,
      },
      {
        title: 'Résolution de Problèmes',
        desc: 'Décomposer les défis complexes en solutions gérables avec des approches méthodiques et une réflexion créative.',
        icon: Search,
      },
    ],
    mission: "Ma mission est de créer des logiciels qui non seulement fonctionnent, mais ravissent les utilisateurs et résolvent des problèmes réels avec élégance et fiabilité.",
    stats: [
      { value: 2, label: "Années d'Expérience", suffix: '+' },
      { value: 10, label: 'Projets Réalisés', suffix: '+' },
      { value: 20, label: 'Technologies', suffix: '+' },
    ],
  },
}

// Variants pour les animations
const containerVariants: Variants = {
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
      type: 'spring' as const,
      stiffness: 100,
      damping: 12,
    },
  },
}

// Composant pour l'animation des nombres
function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = value
    const duration = 1500
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start > end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="text-4xl font-bold text-primary">
      {count}{suffix}
    </span>
  )
}

export default function About({ language }: AboutProps) {
  const text = language === 'en' ? content.en : content.fr
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Ref pour l'icône du développeur
  const iconContainerRef = useRef(null)
  const iconInView = useInView(iconContainerRef, { once: false, amount: 0.5 })

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />
      
      {/* Particules animées */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-accent/30 rounded-full"
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header avec animation */}
          <motion.div variants={itemVariants} className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground inline-flex items-center gap-3">
              {text.title}
              <Sparkles className="w-8 h-8 text-primary/70" />
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto md:mx-0" />
          </motion.div>

          {/* Contenu principal */}
          <div className="space-y-12">
            {/* Introduction et histoire */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                {text.intro}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                {text.fullStory}
              </p>
            </motion.div>

            {/* Vision & Méthodologie - cartes améliorées */}
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
              {/* Vision */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {language === 'en' ? 'My Vision' : 'Ma Vision'}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {text.vision}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Méthodologie */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {language === 'en' ? 'My Methodology' : 'Ma Méthodologie'}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {text.methodology}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Mission statement amélioré */}
            <motion.div variants={itemVariants}>
              <div className="relative p-8 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 via-primary/10 to-accent/5 backdrop-blur-sm">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
                <Quote className="absolute bottom-4 right-4 w-8 h-8 text-primary/20 rotate-180" />
                <p className="text-lg md:text-xl text-foreground leading-relaxed italic font-medium text-center max-w-3xl mx-auto">
                  "{text.mission}"
                </p>
              </div>
            </motion.div>

            {/* Statistiques animées */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-3 gap-6">
              {text.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="relative p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm text-center group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Expertise Grid */}
            <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6">
              {text.expertise.map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors text-primary">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Ligne décorative en bas */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Avatar / Profile avec animation flottante */}
            <motion.div
              ref={iconContainerRef}
              variants={itemVariants}
              className="flex justify-center md:justify-start"
            >
              <div className="relative group">
                {/* Anneau lumineux avec pulse */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"
                  animate={iconInView ? { scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Cercle principal avec flottement */}
                <motion.div
                  className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-white/20 backdrop-blur-sm"
                  animate={iconInView ? { y: [0, -8, 0] } : {}}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-4xl">👨‍💻</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}