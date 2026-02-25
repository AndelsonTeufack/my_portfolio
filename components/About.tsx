interface AboutProps {
  language: 'en' | 'fr'
}

const content = {
  en: {
    title: 'About Me',
    intro: "I'm a 23-year-old full-stack developer and IT solutions analyst from Douala, Cameroon. With a passion for solving complex problems and creating elegant solutions, I specialize in developing robust applications that combine technical excellence with exceptional user experience.",
    fullStory: "My journey in tech began with a curiosity to understand how systems work. Over 2+ years, I've evolved from a passionate learner to a professional developer who thrives at the intersection of innovation and problem-solving. I believe that great software isn't just about writing code—it's about understanding user needs, designing thoughtful solutions, and continuously improving.",
    vision: "I envision a future where technology seamlessly solves real-world problems. My approach is methodical yet creative: I analyze challenges deeply, design elegant architectures, and implement solutions that scale. I'm driven by impact—creating systems that not only perform but inspire confidence.",
    methodology: "My methodology combines Agile practices with systematic problem-solving. I start by understanding the business context, design comprehensive solutions, and iterate based on feedback. I believe in code quality, security-first thinking, and maintaining clean architectures.",
    expertise: [
      {
        title: 'Full-Stack Development',
        desc: 'Building end-to-end applications with modern technologies, from backend APIs to responsive frontends.',
        icon: '⚙️',
      },
      {
        title: 'IT Solutions',
        desc: 'Analyzing business needs and designing comprehensive IT solutions with focus on optimization and security.',
        icon: '☁️',
      },
      {
        title: 'Problem Solving',
        desc: 'Breaking down complex challenges into manageable solutions with methodical approaches and creative thinking.',
        icon: '🔍',
      },
    ],
    mission: "My mission is to create software that doesn't just work, but delights users and solves real-world problems with elegance and reliability.",
  },
  fr: {
    title: 'À Propos',
    intro: "Je suis un développeur full-stack et analyste IT de 23 ans originaire de Douala, Cameroun. Passionné par la résolution de problèmes complexes et la création de solutions élégantes, je me spécialise dans le développement d'applications robustes combinant excellence technique et expérience utilisateur exceptionnelle.",
    fullStory: "Mon parcours dans la technologie a commencé par la curiosité de comprendre comment fonctionnent les systèmes. Au cours de plus de 2 ans, j'ai évolué d'un passionné d'apprentissage à un développeur professionnel qui prospère à l'intersection de l'innovation et de la résolution de problèmes. Je crois que le grand logiciel ne concerne pas seulement l'écriture de code, mais la compréhension des besoins des utilisateurs.",
    vision: "Je vois un avenir où la technologie résout facilement les problèmes du monde réel. Mon approche est méthodique mais créative : j'analyse les défis en profondeur, je conçois des architectures élégantes et j'implémente des solutions qui s'adaptent. Je suis motivé par l'impact.",
    methodology: "Ma méthodologie combine les pratiques Agile avec la résolution systématique de problèmes. Je commence par comprendre le contexte métier, concevoir des solutions complètes et itérer selon les retours. Je crois en la qualité du code et à la sécurité.",
    expertise: [
      {
        title: 'Développement Full-Stack',
        desc: "Construire des applications end-to-end avec les technologies modernes, des APIs backend aux frontends réactifs.",
        icon: '⚙️',
      },
      {
        title: 'Solutions IT',
        desc: "Analyser les besoins commerciaux et concevoir des solutions IT complètes axées sur l'optimisation et la sécurité.",
        icon: '☁️',
      },
      {
        title: 'Résolution de Problèmes',
        desc: 'Décomposer les défis complexes en solutions gérables avec des approches méthodiques et une réflexion créative.',
        icon: '🔍',
      },
    ],
    mission: "Ma mission est de créer des logiciels qui non seulement fonctionnent, mais ravissent les utilisateurs et résolvent des problèmes réels avec élégance et fiabilité.",
  },
}

export default function About({ language }: AboutProps) {
  const text = language === 'en' ? content.en : content.fr

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">{text.title}</h2>
            <div className="h-1 w-24 bg-primary rounded-full" />
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Intro & Story */}
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">{text.intro}</p>
              <p className="text-base text-muted-foreground leading-relaxed">{text.fullStory}</p>
            </div>

            {/* Vision & Methodology Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-secondary/20 border border-secondary/30">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-xl">🎯</span> {language === 'en' ? 'My Vision' : 'Ma Vision'}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{text.vision}</p>
              </div>
              <div className="p-6 rounded-xl bg-accent/15 border border-accent/30">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-xl">🔧</span> {language === 'en' ? 'My Methodology' : 'Ma Méthodologie'}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{text.methodology}</p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="p-6 rounded-xl border-l-4 border-primary bg-gradient-to-r from-primary/5 to-accent/5">
              <p className="text-base text-foreground leading-relaxed italic font-medium">
                "{text.mission}"
              </p>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
                <p className="text-4xl font-bold text-primary">2+</p>
                <p className="text-sm text-muted-foreground mt-2">{language === 'en' ? 'Years Experience' : 'Années d\'Expérience'}</p>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-6 border border-accent/20">
                <p className="text-4xl font-bold text-accent">10+</p>
                <p className="text-sm text-muted-foreground mt-2">{language === 'en' ? 'Projects Completed' : 'Projets Réalisés'}</p>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg p-6 border border-secondary/20">
                <p className="text-4xl font-bold text-secondary">20+</p>
                <p className="text-sm text-muted-foreground mt-2">{language === 'en' ? 'Technologies' : 'Technologies'}</p>
              </div>
            </div>
          </div>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {text.expertise.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-background group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors text-xl">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
