interface ExperienceProps {
  language: 'en' | 'fr'
}

const content = {
  en: {
    title: 'Professional Experience',
    experiences: [
      {
        company: 'CREDIX.CAM SA',
        position: 'Stagiaire en Développement Web',
        period: 'June 2023 - September 2024',
        location: 'Yaoundé, Cameroon',
        type: 'Internship',
        highlights: [
          'Developed HR management application with Spring Boot and MongoDB featuring JWT authentication and role-based access control',
          'Migrated microfinance service (MomoKash) from USSD to mobile app, improving UX significantly',
          'Integrated payment API (Campay) with secure transaction processing',
          'Implemented REST APIs for internal services including SMS, Redis, and Mongo integration',
          'Collaborated with cross-functional team of 15+ professionals on containerized services',
        ],
      },
      {
        company: 'CREDIX.CAM SA',
        position: 'Stagiaire en Développement Mobile',
        period: 'August 2024 - October 2024',
        location: 'Yaoundé, Cameroon',
        type: 'Internship',
        highlights: [
          'Specialized in mobile application development with Flutter framework',
          'Enhanced mobile application performance and user experience',
          'Implemented responsive UI components and smooth animations',
          'Integrated backend APIs with mobile frontend seamlessly',
        ],
      },
      {
        company: 'GREEN POWER CAMEROUN',
        position: 'Stagiaire en Analyse et Développement de Solutions IT',
        period: 'November 2024 - May 2025',
        location: 'Douala, Cameroon',
        type: 'Internship',
        highlights: [
          'Designed and developed internal maintenance tracking web solution',
          'Automated financial report generation via Python script, saving 15 hours monthly',
          'Created IT asset inventory module improving asset traceability',
          'Conducted comprehensive IT infrastructure audit',
          'Provided Level 2 support on critical applications with 90% resolution rate',
        ],
      },
      {
        company: 'GREEN POWER CAMEROUN',
        position: 'Stagiaire en Analyse et Développement de Solutions IT',
        period: 'May 2025 - November 2025',
        location: 'Douala, Cameroon',
        type: 'Internship',
        highlights: [
          'Advanced IT solutions analysis and system optimization',
          'Led database optimization project improving query performance by 40%',
          'Mentored junior team members on best practices',
          'Implemented security enhancements across IT infrastructure',
        ],
      },
      {
        company: 'MULEMA',
        position: 'Développeur Full-Stack',
        period: 'December 2025 - February 2026',
        location: 'Remote',
        type: 'Project',
        highlights: [
          'Developed mobile language learning app for Cameroonian native languages using Flutter',
          'Designed REST APIs for translation logic with Spring Boot backend',
          'Created ergonomic, responsive interfaces with smooth animations',
          'Collaborated with multidisciplinary team on international project',
          'Implemented unit and functional tests ensuring feature reliability',
        ],
      },
    ],
    education: {
      academicTitle: 'Academic Formation',
      certificationsTitle: 'Certifications',
      academicItems: [
        {
          degree: 'Master I in Information Systems & Software Engineering',
          school: 'THE BRAINS University',
          year: '2025 - Present',
        },
        {
          degree: 'Bachelor in Software Engineering',
          school: 'Institut Africain d\'Informatique (IAI)',
          year: '2021 - 2024',
        },
      ],
      certifications: [
        {
          name: 'Google IT Support Professional Certificate',
          issuer: 'Google',
          year: '2025',
        },
      ],
    },
  },
  fr: {
    title: 'Expériences Professionnelles',
    experiences: [
      {
        company: 'CREDIX.CAM SA',
        position: 'Stagiaire en Développement Web',
        period: 'Juin 2023 - Septembre 2024',
        location: 'Yaoundé, Cameroun',
        type: 'Stage',
        highlights: [
          'Développement d\'application de gestion RH avec Spring Boot et MongoDB avec authentification JWT et contrôle d\'accès par rôle',
          'Migration du service de microfinance (MomoKash) d\'USSD vers application mobile',
          'Intégration de l\'API de paiement (Campay) avec traitement sécurisé des transactions',
          'Implémentation d\'APIs REST pour services internes',
          'Collaboration avec équipe multidisciplinaire de 15+ professionnels',
        ],
      },
      {
        company: 'CREDIX.CAM SA',
        position: 'Stagiaire en Développement Mobile',
        period: 'Août 2024 - Octobre 2024',
        location: 'Yaoundé, Cameroun',
        type: 'Stage',
        highlights: [
          'Spécialisation en développement d\'applications mobiles avec Flutter',
          'Amélioration des performances et de l\'expérience utilisateur mobile',
          'Implémentation de composants UI réactifs et animations fluides',
          'Intégration transparente des APIs backend avec le frontend mobile',
        ],
      },
      {
        company: 'GREEN POWER CAMEROUN',
        position: 'Stagiaire en Analyse et Développement de Solutions IT',
        period: 'Novembre 2024 - Mai 2025',
        location: 'Douala, Cameroun',
        type: 'Stage',
        highlights: [
          'Conception et développement d\'une solution web interne de suivi de maintenance',
          'Automatisation de la génération de rapports financiers via script Python',
          'Création d\'un module d\'inventaire IT améliorant la traçabilité des actifs',
          'Audit complet de l\'infrastructure IT',
          'Support de niveau 2 avec taux de résolution de 90%',
        ],
      },
      {
        company: 'GREEN POWER CAMEROUN',
        position: 'Stagiaire en Analyse et Développement de Solutions IT',
        period: 'Mai 2025 - Novembre 2025',
        location: 'Douala, Cameroun',
        type: 'Stage',
        highlights: [
          'Analyse avancée de solutions IT et optimisation des systèmes',
          'Projet d\'optimisation de base de données améliorant les performances de 40%',
          'Mentorat de membres juniors de l\'équipe sur les meilleures pratiques',
          'Implémentation d\'améliorations de sécurité dans l\'infrastructure IT',
        ],
      },
      {
        company: 'MULEMA',
        position: 'Développeur Full-Stack',
        period: 'Décembre 2025 - Février 2026',
        location: 'Télétravail',
        type: 'Projet',
        highlights: [
          'Développement d\'application mobile d\'apprentissage des langues camerounaises avec Flutter',
          'Conception d\'APIs REST pour logique de traduction avec backend Spring Boot',
          'Création d\'interfaces ergonomiques et responsives avec animations fluides',
          'Collaboration avec équipe multidisciplinaire sur projet international',
          'Implémentation de tests unitaires et fonctionnels',
        ],
      },
    ],
    education: {
      academicTitle: 'Formation Académique',
      certificationsTitle: 'Certifications',
      academicItems: [
        {
          degree: 'Master I en Systèmes d\'Information & Génie Logiciel',
          school: 'THE BRAINS University',
          year: '2025 - Maintenant',
        },
        {
          degree: 'Licence en Génie Logiciel',
          school: 'Institut Africain d\'Informatique (IAI)',
          year: '2021 - 2024',
        },
      ],
      certifications: [
        {
          name: 'Certificat Google IT Support Professional',
          issuer: 'Google',
          year: '2025',
        },
      ],
    },
  },
}

export default function Experience({ language }: ExperienceProps) {
  const text = language === 'en' ? content.en : content.fr

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">{text.title}</h2>
            <div className="h-1 w-24 bg-primary rounded-full" />
          </div>

          {/* Timeline */}
          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/0 transform md:-translate-x-1/2" />

            {text.experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`md:flex gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="md:flex-1 hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background absolute left-1/2 transform -translate-x-1/2" />
                </div>

                {/* Content */}
                <div className="md:flex-1 ml-8 md:ml-0">
                  <div className="bg-background border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{exp.period}</p>
                    <p className="text-xs text-muted-foreground mb-4">{exp.location}</p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hidx) => (
                        <li key={hidx} className="text-sm text-muted-foreground flex gap-3">
                          <span className="text-primary font-bold flex-shrink-0 mt-0.5">▪</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-16 pt-12 border-t border-border">
            <div className="space-y-12">
              {/* Academic Formation */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-2xl">🎓</span> {text.education.academicTitle}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {text.education.academicItems.map((edu, idx) => (
                    <div key={idx} className="p-6 rounded-xl border border-border bg-background hover:border-primary transition-colors">
                      <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                      <p className="text-sm text-primary font-medium mb-2">{edu.school}</p>
                      <p className="text-xs text-muted-foreground">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-2xl">📜</span> {text.education.certificationsTitle}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {text.education.certifications.map((cert, idx) => (
                    <div key={idx} className="p-6 rounded-xl border border-accent/30 bg-accent/5 hover:border-accent transition-colors">
                      <h4 className="font-semibold text-foreground mb-1">{cert.name}</h4>
                      <p className="text-sm text-accent font-medium mb-2">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground">{cert.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
