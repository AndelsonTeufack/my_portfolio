interface SkillsProps {
  language: 'en' | 'fr'
}

const content = {
  en: {
    title: 'Technical Skills',
    categories: [
      {
        name: 'Languages',
        skills: ['Java', 'Python', 'JavaScript', 'Dart', 'PHP', 'C/C++', 'HTML/CSS'],
      },
      {
        name: 'Frontend',
        skills: ['React', 'Next.js', 'Flutter', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
      },
      {
        name: 'Backend',
        skills: ['Spring Boot', 'Django', 'NestJS', 'Node.js', 'REST APIs', 'Microservices'],
      },
      {
        name: 'Databases',
        skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Oracle'],
      },
      {
        name: 'Tools & DevOps',
        skills: ['Git/GitLab', 'Docker', 'Postman', 'Jira', 'VS Code', 'IntelliJ', 'Power BI'],
      },
      {
        name: 'Methodologies',
        skills: ['Agile/Scrum', 'UML', 'Merise', 'Software Architecture', 'System Design'],
      },
    ],
    softSkills: [
      { name: 'Adaptability', icon: '⚡' },
      { name: 'Team Collaboration', icon: '👥' },
      { name: 'Critical Thinking', icon: '🧠' },
      { name: 'Communication', icon: '📢' },
      { name: 'Leadership', icon: '🎯' },
      { name: 'Time Management', icon: '⏱️' },
    ],
  },
  fr: {
    title: 'Compétences Techniques',
    categories: [
      {
        name: 'Langages',
        skills: ['Java', 'Python', 'JavaScript', 'Dart', 'PHP', 'C/C++', 'HTML/CSS'],
      },
      {
        name: 'Frontend',
        skills: ['React', 'Next.js', 'Flutter', 'Tailwind CSS', 'Bootstrap', 'Design Responsif'],
      },
      {
        name: 'Backend',
        skills: ['Spring Boot', 'Django', 'NestJS', 'Node.js', 'APIs REST', 'Microservices'],
      },
      {
        name: 'Bases de Données',
        skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Oracle'],
      },
      {
        name: 'Outils & DevOps',
        skills: ['Git/GitLab', 'Docker', 'Postman', 'Jira', 'VS Code', 'IntelliJ', 'Power BI'],
      },
      {
        name: 'Méthodologies',
        skills: ['Agile/Scrum', 'UML', 'Merise', 'Architecture Logicielle', 'System Design'],
      },
    ],
    softSkills: [
      { name: 'Adaptabilité', icon: '⚡' },
      { name: 'Travail en Équipe', icon: '👥' },
      { name: 'Pensée Critique', icon: '🧠' },
      { name: 'Communication', icon: '📢' },
      { name: 'Leadership', icon: '🎯' },
      { name: 'Gestion du Temps', icon: '⏱️' },
    ],
  },
}

export default function Skills({ language }: SkillsProps) {
  const text = language === 'en' ? content.en : content.fr

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">{text.title}</h2>
            <div className="h-1 w-24 bg-primary rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {text.categories.map((category, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card group"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sidx) => (
                    <span
                      key={sidx}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills & Languages */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Soft Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                {language === 'en' ? 'Soft Skills' : 'Compétences Transversales'}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {text.softSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border border-border hover:border-primary bg-card hover:bg-background transition-all duration-300 flex items-center gap-3"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                {language === 'en' ? 'Languages' : 'Langues'}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-border hover:border-primary bg-card hover:bg-background transition-all duration-300">
                  <h4 className="font-semibold text-foreground mb-2">🇫🇷 Français</h4>
                  <p className="text-sm text-muted-foreground">{language === 'en' ? 'Native' : 'Natif'}</p>
                </div>
                <div className="p-4 rounded-lg border border-border hover:border-primary bg-card hover:bg-background transition-all duration-300">
                  <h4 className="font-semibold text-foreground mb-2">🇬🇧 English</h4>
                  <p className="text-sm text-muted-foreground">{language === 'en' ? 'Fluent' : 'Courant'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
