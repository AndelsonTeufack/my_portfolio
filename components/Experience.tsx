import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Briefcase, GraduationCap, Award, ChevronRight } from 'lucide-react'

interface ExperienceProps {
  language: 'en' | 'fr'
}

const content = {
  en: {
    title: 'Professional Experience',
    experiences: [
      {
        company: 'CREDIX.CAM SA',
        position: 'Web Development Intern',
        period: 'June 2023 - September 2023',
        location: 'Yaoundé, Cameroon',
        type: 'Internship',
        highlights: [
          'Development of an HR management service using Spring Boot and MongoDB with JWT authentication and role-based access control',
          'Development of a web interface for the HR app communicating with my back-end via HTTP requests',
          'Implementation of REST APIs for the Momokash reconciliation service',
          'Collaborated with cross-functional team of 15+ professionals on containerized services',
        ],
      },
      {
        company: 'CREDIX.CAM SA',
        position: 'Mobile Development Intern',
        period: 'August 2024 - October 2024',
        location: 'Yaoundé, Cameroon',
        type: 'Internship',
        highlights: [
          'Specialized in mobile application development with Flutter framework',
          'Migration of the money lending service (MomoKash) from USSD to a mobile application',
          'Enhanced mobile application performance and user experience',
          'Implemented responsive UI components and smooth animations',
          'Integrated backend APIs with mobile frontend seamlessly',
        ],
      },
      {
        company: 'GREEN POWER CAMEROUN',
        position: 'IT Solutions Analysis and Development Intern',
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
        position: 'IT Solutions Analysis and Development Intern',
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
        position: 'Full-Stack Developer',
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
        period: 'Juin 2023 - Septembre 2023',
        location: 'Yaoundé, Cameroun',
        type: 'Stage',
        highlights: [
          'Développement d\'un service de gestion RH avec Spring Boot et MongoDB avec authentification JWT et contrôle d\'accès par rôle',
          'Développement d\'une interface web de l\app de RH communiquant avec mon back-end via des requetes Http',
          'Implémentation d\'APIs REST pour le service réconciliation de Momokash',
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
          'Migration du service de prêt d\'argent (MomoKash) d\'USSD vers application mobile',
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

// Variants pour les animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

export default function Experience({ language }: ExperienceProps) {
  const text = language === 'en' ? content.en : content.fr
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />
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
              <Briefcase className="w-8 h-8 text-primary/70" />
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto md:mx-0" />
            <p className="text-muted-foreground max-w-2xl mx-auto md:mx-0 text-lg">
              {language === 'en'
                ? 'My professional journey and the experiences that shaped my skills.'
                : 'Mon parcours professionnel et les expériences qui ont façonné mes compétences.'}
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Ligne verticale de la timeline (cachée sur mobile) */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent hidden md:block transform -translate-x-1/2" />

            <div className="space-y-8">
              {text.experiences.map((exp, idx) => {
                const isEven = idx % 2 === 0
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-8`}
                  >
                    {/* Point de la timeline */}
                    <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 bg-primary rounded-full ring-4 ring-background z-10 hidden md:block transform -translate-x-1/2" />

                    {/* Contenu */}
                    <div className="flex-1 md:ml-0 ml-8 md:ml-0">
                      <motion.div
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
                      >
                        {/* En-tête */}
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {exp.position}
                            </h3>
                            <p className="text-primary font-semibold">{exp.company}</p>
                          </div>
                          <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                            {exp.type}
                          </span>
                        </div>

                        {/* Métadonnées */}
                        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {exp.location}
                          </span>
                        </div>

                        {/* Points forts */}
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, hidx) => (
                            <motion.li
                              key={hidx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + hidx * 0.05 }}
                              className="text-sm text-muted-foreground flex gap-3"
                            >
                              <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                    {/* Espace vide pour aligner les points */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Section Éducation & Certifications */}
          <motion.div variants={itemVariants} className="mt-20 pt-12 border-t border-border/50">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Formation académique */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  {text.education.academicTitle}
                </h3>
                <div className="space-y-4">
                  {text.education.academicItems.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all"
                    >
                      <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                      <p className="text-sm text-primary font-medium mb-2">{edu.school}</p>
                      <p className="text-xs text-muted-foreground">{edu.year}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  {text.education.certificationsTitle}
                </h3>
                <div className="space-y-4">
                  {text.education.certifications.map((cert, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="p-6 rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-sm hover:border-primary/50 transition-all"
                    >
                      <h4 className="font-semibold text-foreground mb-1">{cert.name}</h4>
                      <p className="text-sm text-primary font-medium mb-2">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground">{cert.year}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}