export interface KnowledgeBase {
  profile: {
    fullName: string
    shortName: string
    age: number
    birthDate: string
    location: string
    role: string
    bio: { fr: string; en: string }
    philosophy: { fr: string; en: string }
    whyHire: { fr: string[]; en: string[] }
  }
  experiences: Array<{
    company: string
    position: { fr: string; en: string }
    period: string
    location: string
    type: string
    highlights: { fr: string[]; en: string[] }
    technologies: string[]
  }>
  projects: Array<{
    title: string
    category: string
    description: { fr: string; en: string }
    tags: string[]
    highlights: { fr: string[]; en: string[] }
    demoUrl: string
    codeUrl: string
  }>
  skills: {
    backend: string[]
    frontendMobile: string[]
    databases: string[]
    devopsTools: string[]
    architecture: string[]
    performanceSecurity: string[]
    softSkills: { fr: string[]; en: string[] }
  }
  education: Array<{
    degree: { fr: string; en: string }
    institution: string
    period: string
  }>
  certifications: Array<{
    title: string
    issuer: string
    year: string
  }>
  contact: {
    email: string
    phoneCalls: string
    phoneWhatsapp: string
    location: string
    linkedin: string
    github: string
  }
}

export const ANDELSON_KNOWLEDGE: KnowledgeBase = {
  profile: {
    fullName: 'TEUFACK SONTSA Andelson',
    shortName: 'Andelson Teufack',
    age: 22,
    birthDate: '14 Décembre 2003',
    location: 'Douala, Cameroun (GMT+1)',
    role: 'Développeur Full-Stack & Analyste IT / IT Solutions Engineer',
    bio: {
      fr: "Andelson TEUFACK est un Développeur Full-Stack et Analyste de Solutions IT passionné de 22 ans basant son ingénierie à Douala, Cameroun. Il est spécialisé dans l'architecture backend scalable (Java, Spring Boot, Python, Django, FastAPI, Flask, Node.js), le développement mobile moderne (Flutter, Dart, Java/Kotlin Android natif), le frontend réactif (React, Next.js, TypeScript) et l'intégration de systèmes complexes (Odoo ERP, SIG / KoboCollect, PostgreSQL, MongoDB, Docker).",
      en: 'Andelson TEUFACK is a passionate 22-year-old Full-Stack Developer and IT Solutions Analyst based in Douala, Cameroon. He specializes in scalable backend architecture (Java, Spring Boot, Python, Django, FastAPI, Flask, Node.js), modern mobile engineering (Flutter, Dart, native Android Java/Kotlin), reactive frontends (React, Next.js, TypeScript), and complex enterprise integrations (Odoo ERP, GIS / KoboCollect, PostgreSQL, MongoDB, Docker).',
    },
    philosophy: {
      fr: "Sa philosophie repose sur la rigueur architecturale, la propreté du code (Clean Code, SOLID, Domain-Driven Design), la haute performance web (Core Web Vitals) et l'automatisation des processus métier à fort impact.",
      en: 'His engineering philosophy relies on architectural rigor, Clean Code, SOLID principles, Domain-Driven Design, web performance optimization (Core Web Vitals), and high-impact business process automation.',
    },
    whyHire: {
      fr: [
        '🚀 Polyvalence Full-Stack & Mobile : Maîtrise complète de Spring Boot, React, Next.js, Flutter et Python.',
        '🎯 Expérience Concrète en Entreprise : Stages réussis chez KES IP, Green Power Cameroun (x2), Credix.Cam SA (x2).',
        '👨‍🏫 Pédagogie & Mentorat : Formateur à l\'IAI pour +100 étudiants en ingénierie web et mobile.',
        '🛠️ Expertise SIG & ERP : Intégration avancée de KoboCollect/ESRI et personnalisation d\'Odoo ERP.',
        '⚡ Code Propre & Scalabilité : Application stricte des normes de sécurité (JWT, Spring Security) et de performance.',
      ],
      en: [
        '🚀 Full-Stack & Mobile Versatility: Mastery of Spring Boot, React, Next.js, Flutter, and Python.',
        '🎯 Real Enterprise Impact: Successful engineering stints at KES IP, Green Power Cameroon (x2), Credix.Cam SA (x2).',
        '👨‍🏫 Pedagogy & Mentorship: Technical Instructor at IAI mentoring 100+ software engineering students.',
        '🛠️ GIS & ERP Expertise: Advanced KoboCollect/ESRI customization and Odoo ERP integration.',
        '⚡ Clean Code & Scalability: Strict application of security standards (JWT, Spring Security) and performance.',
      ],
    },
  },

  experiences: [
    {
      company: 'KES IP',
      position: {
        fr: 'Stagiaire en Développement FullStack (Mobile & Web)',
        en: 'Full-Stack Developer Intern (Mobile & Web)',
      },
      period: 'Mars 2026 - Présent',
      location: 'Douala, Cameroun',
      type: 'Stage / Full-Stack',
      highlights: {
        fr: [
          "Développement d'une application web interne de qualification et classification automatique d'emails (Soft Bounce, Hard Bounce, Outbound).",
          "Développement d'applications mobiles offline-first d'audit et d'inspection avec génération automatique de rapports PDF, Word et Excel.",
          "Participation au projet de collecte et d’audit des actifs du Système d'Information Électrique du Cameroun pour SOCAD'EL (Web, Mobile, SIG).",
          "Mise en œuvre de campagnes de publipostage automatisées via Outlook, Word et n8n.",
          "Conception d'un ERP interne connecté à Odoo (gestion des congés, permissions, planning, inspections).",
          "Personnalisation de KoboCollect pour SIG avancé (positionnement carte ESRI, traçage automatique réseau électrique, export GeoJSON).",
        ],
        en: [
          'Developed an internal web app for email qualification & automatic classification (Soft Bounce, Hard Bounce, Outbound).',
          'Built offline-first mobile apps for electrical network inspection with automated PDF, Word, and Excel reports.',
          'Contributed as FullStack developer to Cameroon’s Electrical Information System asset collection & audit project for SOCAD’EL (web, mobile & GIS).',
          'Executed automated corporate emailing campaigns with Outlook, Word, and n8n.',
          'Designed an internal ERP integrated with Odoo for central business process management (leaves, permissions, planning, inspections).',
          'Customized KoboCollect for advanced GIS features (ESRI positioning, electrical grid tracking during collection, GeoJSON export).',
        ],
      },
      technologies: ['Flutter', 'Odoo ERP', 'KoboCollect', 'n8n', 'Python', 'Spring Boot', 'PostgreSQL', 'GIS / ESRI', 'PDF/Word/Excel Automation'],
    },
    {
      company: 'GREEN POWER CAMEROUN',
      position: {
        fr: 'Stagiaire en Analyse et Développement de Solutions IT',
        en: 'IT Solutions Analysis & Development Intern',
      },
      period: 'Mai 2025 - Novembre 2025',
      location: 'Yaoundé, Cameroun',
      type: 'Stage',
      highlights: {
        fr: [
          'Conception et développement d’une application web interne de gestion des opérations de maintenance (GMAO).',
          'Modélisation et implémentation de bases de données relationnelles MySQL avec développement de briques fonctionnelles.',
          'Rédaction et exécution de tests unitaires et de non-régression pour garantir la robustesse et la continuité de service.',
          'Automatisation de l’extraction et de l’agrégation de données de reporting via scripts Python.',
          'Participation à l’industrialisation et à l’optimisation des chaînes de traitement internes.',
        ],
        en: [
          'Designed and developed an internal web application for Computer-Aided Maintenance Management (GMAO).',
          'Modeled and implemented MySQL relational databases with custom business modules development.',
          'Wrote and executed unit and non-regression testing to guarantee high application robustness and continuity of service.',
          'Automated reporting data extraction and aggregation using Python scripts.',
          'Participated in the industrialization and optimization of internal data processing workflows.',
        ],
      },
      technologies: ['Python', 'MySQL', 'GMAO', 'Reporting', 'Automations', 'Unit Testing'],
    },
    {
      company: 'INSTITUT AFRICAIN D\'INFORMATIQUE (IAI)',
      position: {
        fr: 'Formateur & Mentor en Développement Web & Mobile',
        en: 'Technical Instructor & Mentor (Web & Mobile Engineering)',
      },
      period: 'Janvier 2025 - Mai 2025',
      location: 'Yaoundé, Cameroun',
      type: 'Mentorat & Enseignement',
      highlights: {
        fr: [
          'Animation de formations et travaux pratiques en Développement Web (React.js, JS, HTML/CSS) et Mobile (Flutter, Dart) pour étudiants de 1ère et 2ème année.',
          'Mentorat technique de +100 étudiants en génie logiciel, accélérant leur maîtrise architecturale.',
          'Préparation des étudiants aux stages en entreprise, projets de fin d\'études et certifications internationales.',
          'Sensibilisation au Clean Code, principes SOLID, workflows Git et intégration d\'APIs REST.',
        ],
        en: [
          'Conducted practical workshops in Web Engineering (React.js, JS) and Mobile Development (Flutter, Dart) for 1st & 2nd-year students.',
          'Mentored 100+ software engineering students, accelerating their technical proficiency.',
          'Prepared students for corporate internships, capstone projects, and international certifications.',
          'Fostered engineering best practices, Clean Code, Git workflows, and REST API integration.',
        ],
      },
      technologies: ['Flutter', 'React.js', 'Dart', 'JavaScript', 'Git', 'Clean Architecture', 'Pedagogy'],
    },
    {
      company: 'GREEN POWER CAMEROUN',
      position: {
        fr: 'Stagiaire en Analyse et Développement de Solutions IT',
        en: 'IT Solutions Analysis & Development Intern',
      },
      period: 'Novembre 2024 - Mai 2025',
      location: 'Yaoundé, Cameroun',
      type: 'Stage',
      highlights: {
        fr: [
          'Recueil des besoins métiers et rédaction de cahiers des charges techniques pour des projets de digitalisation et d’optimisation des workflows.',
          'Audit des performances (bases de données, réseau) et analyse des vulnérabilités de l’infrastructure IT.',
          'Prise en charge des incidents de niveau 2 (N2) : diagnostic approfondi et résolution sur les applications stratégiques.',
          'Maintenance évolutive et corrective du Système d’Information, couplée à une assistance technique proactive auprès des utilisateurs.',
          'Maîtrise des environnements Windows et des outils Microsoft 365 en contexte professionnel.',
        ],
        en: [
          'Requirements gathering and technical specification drafting for digitalization and workflow optimization projects.',
          'Performance audit (database, network) and infrastructure vulnerability analysis.',
          'Handled Level 2 (N2) technical incidents: deep diagnostics and resolution on strategic applications.',
          'Evolutive and corrective maintenance of the Information System with proactive end-user technical support.',
          'Proficiency in Windows environments and Microsoft 365 tools in a professional corporate context.',
        ],
      },
      technologies: ['IT Security', 'System Analysis', 'Level 2 Support', 'Network Audit', 'Windows & MS 365'],
    },
    {
      company: 'CREDIX.CAM SA',
      position: {
        fr: 'Stagiaire Développement Mobile',
        en: 'Mobile Development Intern',
      },
      period: 'Août 2024 - Octobre 2024',
      location: 'Yaoundé, Cameroun',
      type: 'Stage',
      highlights: {
        fr: [
          'Conception et développement d’une application mobile cross-platform permettant de migrer les utilisateurs du canal USSD vers une expérience mobile native.',
          'Mise en place d’un service backend dédié assurant l’orchestration des échanges entre l’application mobile et le cache Redis pour une gestion performante des sessions et des données temporaires.',
          'Élaboration et exécution de tests unitaires et d’intégration garantissant la fiabilité et la robustesse de l’application mobile.',
          'Collaboration étroite avec les équipes techniques (backend, infrastructure) pour assurer une intégration continue et cohérente des composants du système.',
        ],
        en: [
          'Conception & development of a cross-platform mobile application migrating users from USSD channels to a native mobile experience.',
          'Implementation of a dedicated backend service orchestrating communication between the mobile app and Redis cache for high-performance session & temporary data management.',
          'Elaboration and execution of unit and integration tests guaranteeing application reliability and robustness.',
          'Close collaboration with technical teams (backend, infrastructure) ensuring continuous integration across system components.',
        ],
      },
      technologies: ['Flutter', 'Spring Boot', 'Redis Cache', 'USSD Migration', 'Unit & Integration Testing'],
    },
    {
      company: 'CREDIX.CAM SA',
      position: {
        fr: 'Stagiaire Développement Web',
        en: 'Web Development Intern',
      },
      period: 'Juillet 2023 - Septembre 2023',
      location: 'Yaoundé, Cameroun',
      type: 'Stage',
      highlights: {
        fr: [
          'Mise en place d’un service backend planifié pour la détection automatique des transactions quotidiennes en échec et l’automatisation des processus de réconciliation financière.',
          'Conception et implémentation d’une application fullstack (Spring Boot / React JS) dédiée à la gestion interne des ressources humaines, avec sécurisation des endpoints REST via JWT et configuration des autorisations avec Spring Security.',
        ],
        en: [
          'Implementation of a scheduled backend service for automated detection of daily failed transactions and financial reconciliation automation.',
          'Design and implementation of a fullstack web application (Spring Boot / React JS) dedicated to internal HR management, securing REST endpoints via JWT & Spring Security RBAC permissions.',
        ],
      },
      technologies: ['Spring Boot', 'React.js', 'MongoDB', 'JWT Auth', 'Spring Security', 'Financial Reconciliation'],
    },
  ],

  projects: [
    {
      title: 'TaillorPro - Management pour Ateliers de Couture',
      category: 'mobile',
      description: {
        fr: 'Application mobile multiplateforme dédiée à la gestion complète des ateliers de couture, des commandes clients, du suivi des mesures et du statut de confection.',
        en: 'Cross-platform mobile application dedicated to managing tailoring workshops, client orders, fitting measurements, and garment status.',
      },
      tags: ['Flutter', 'Firebase', 'Mobile', 'i18n', 'Light/Dark Theme'],
      highlights: {
        fr: [
          'Développement mobile moderne sous Flutter.',
          'Base de données temps réel et authentification Firebase.',
          'Support multilingue i18n & thèmes personnalisables.',
        ],
        en: [
          'Modern mobile UI/UX engineering with Flutter.',
          'Firebase real-time database and auth integration.',
          'Multilingual i18n support & dynamic theme switching.',
        ],
      },
      demoUrl: '#',
      codeUrl: 'https://github.com/AndelsonTeufack/tailor_pro_app',
    },
    {
      title: 'Shikaku - Application Mobile de Jeu',
      category: 'mobile',
      description: {
        fr: 'Application de jeu mobile de réflexion multijoueur en ligne et local, déployée sur le Google Play Store.',
        en: 'Online and local multiplayer mobile puzzle game application deployed on the Google Play Store.',
      },
      tags: ['Flutter', 'Dart', 'Firebase', 'Play Store', 'Jeu Mobile'],
      highlights: {
        fr: [
          'Participation au développement d’un jeu multijoueur en ligne et local.',
          'Déploiement réussi de l’application sur le Google Play Store.',
          'Interface utilisateur et logique de jeu mobile interactives.',
        ],
        en: [
          'Participation in developing online & local multiplayer game features.',
          'Successful application deployment on the Google Play Store.',
          'Interactive UI/UX mobile game design and logic.',
        ],
      },
      demoUrl: 'https://shikaku-site.vercel.app/',
      codeUrl: 'https://github.com/AndelsonTeufack/shikaku',
    },
    {
      title: 'Système de Gestion RH (HR Management System)',
      category: 'backend',
      description: {
        fr: 'Application web d’entreprise pour la gestion des dossiers employés, des demandes de congés et des annonces administratives internes.',
        en: 'Enterprise web application for employee records, leave approval management, and internal corporate announcements.',
      },
      tags: ['Spring Boot', 'MongoDB', 'React', 'JWT Auth', 'REST API'],
      highlights: {
        fr: [
          'Authentification JWT sécurisée et contrôle des accès par rôles (RBAC).',
          'APIs REST Spring Boot haute performance reliées à un frontend React.',
          'Circuit de validation des demandes de congés et audit planifié.',
        ],
        en: [
          'JWT authentication & Role-Based Access Control (RBAC).',
          'High performance Spring Boot REST APIs connected to React.',
          'Leave request approval workflows & transaction audit.',
        ],
      },
      demoUrl: '#',
      codeUrl: 'https://github.com/AndelsonTeufack/credix-Hrm',
    },
    {
      title: 'MomoKash Mobile App',
      category: 'mobile',
      description: {
        fr: 'Application mobile de micro-crédit modernisant le service USSD MomoKash vers une expérience mobile Flutter fluide avec cache Redis backend.',
        en: 'Cross-platform mobile lending application migrating legacy USSD service to an intuitive Flutter mobile experience with Redis backend session caching.',
      },
      tags: ['Flutter', 'Spring Boot', 'Cache Redis', 'REST API', 'Fintech', 'Dart'],
      highlights: {
        fr: [
          'Migration complète de l’interface USSD vers Flutter.',
          'Orchestration backend avec cache Redis pour la gestion des sessions et données temporaires.',
          'Déploiement Android performant.',
        ],
        en: [
          'Complete UI/UX migration from USSD to Flutter.',
          'Redis cache backend orchestration for high-performance session & temporary data management.',
          'High performance Android deployment.',
        ],
      },
      demoUrl: 'https://youtu.be/hyJJLx7mCCU',
      codeUrl: 'https://github.com/AndelsonTeufack/MomoKash-Mobile-App',
    },
    {
      title: 'Système de Suivi de Maintenance (GMAO)',
      category: 'automation',
      description: {
        fr: 'Solution web interne de gestion des opérations de maintenance (GMAO) centralisant les interventions techniques et le reporting.',
        en: 'Internal web application for Computer-Aided Maintenance Management (GMAO) tracking technical interventions and reporting data.',
      },
      tags: ['Python', 'MySQL', 'GMAO', 'Automations', 'Reporting'],
      highlights: {
        fr: [
          'Modélisation de base de données relationnelle MySQL & briques fonctionnelles.',
          'Scripts Python de reporting et traitement/agrégation de données.',
          'Tests unitaires et de non-régression pour la continuité de service.',
        ],
        en: [
          'Relational MySQL database modeling & custom business modules.',
          'Python scripts for financial reporting & automated data processing.',
          'Unit and non-regression testing for service continuity.',
        ],
      },
      demoUrl: '#',
      codeUrl: 'https://github.com/AndelsonTeufack/Gav-App',
    },
    {
      title: 'MULEMA Language Learning App',
      category: 'mobile',
      description: {
        fr: 'Application mobile d’apprentissage des langues nationales du Cameroun avec gestion du contenu pédagogique via backend Node.js.',
        en: 'Interactive mobile learning application dedicated to preserving Cameroonian native heritage, featuring Node.js pedagogical backend management.',
      },
      tags: ['React Native', 'Node.js', 'Spring Boot', 'REST API', 'Education'],
      highlights: {
        fr: [
          'Implémentation de la gestion utilisateurs et contenus pédagogiques via un backend Node.js.',
          'Leçons interactives et quiz ludifiés.',
        ],
        en: [
          'Implementation of user management & pedagogical content features via Node.js backend.',
          'Gamified lessons and quiz interfaces.',
        ],
      },
      demoUrl: '#',
      codeUrl: 'https://github.com/noubayou237/mulema',
    },
    {
      title: 'Plateforme Laoshi Consulting',
      category: 'web',
      description: {
        fr: 'Portail web multilingue pour un cabinet international de conseil en immigration et études en Chine.',
        en: 'Modern multilingual web portal for an international education and immigration consulting enterprise in China.',
      },
      tags: ['Next.js', 'React', 'NestJS', 'TypeScript', 'Tailwind CSS'],
      highlights: {
        fr: [
          'Architecture Next.js App Router performante.',
          'Internationalisation multilingue.',
          'Prise de rdv et formulaires de qualification.',
        ],
        en: [
          'Performant Next.js App Router architecture.',
          'Multilingual internationalization.',
          'Lead generation forms and service booking.',
        ],
      },
      demoUrl: 'https://laoshi-consulting.vercel.app',
      codeUrl: 'https://github.com/AndelsonTeufack/laochi_site',
    },
    {
      title: 'Application Desktop de Gestion Locative',
      category: 'automation',
      description: {
        fr: 'Logiciel desktop de gestion locative automatisant la facturation locataires et la gestion des données avec MongoDB/SQLite.',
        en: 'Desktop software automating rental property management, tenant billing, room tracking, and MongoDB/SQLite database storage.',
      },
      tags: ['Python', 'PyQt', 'MongoDB', 'SQLite', 'Desktop GUI'],
      highlights: {
        fr: [
          'Interface graphique développée avec PyQt.',
          'Gestion des données avec MongoDB et calcul automatique des factures.',
        ],
        en: [
          'Graphical User Interface built with PyQt.',
          'MongoDB data management & automated billing calculation.',
        ],
      },
      demoUrl: '#',
      codeUrl: 'https://github.com/AndelsonTeufack/BuildingManagement',
    },
    {
      title: 'Développement d’API & Intégration Campay',
      category: 'backend',
      description: {
        fr: 'Système backend développant des APIs REST avec intégration de la solution de paiement électronique Campay.',
        en: 'Backend system implementing REST APIs and Campay electronic payment gateway solution integration for student sponsorship.',
      },
      tags: ['Spring Boot', 'Campay API', 'REST API', 'Sécurité', 'Fintech'],
      highlights: {
        fr: [
          'Intégration de la solution de paiement électronique Campay.',
          'Développement d’APIs REST et règles métiers de parrainage.',
        ],
        en: [
          'Secure Campay electronic payment solution integration.',
          'REST API development & student sponsorship allocation business rules.',
        ],
      },
      demoUrl: '#',
      codeUrl: 'https://github.com/AndelsonTeufack/sponsorship-IAI-Douala',
    },
  ],

  skills: {
    backend: ['Spring Boot', 'Java', 'Python', 'C/C++', 'Django', 'FastAPI', 'Flask', 'Node.js', 'NestJS', 'APIs REST', 'Microservices'],
    frontendMobile: ['React.js', 'Next.js', 'Flutter', 'Java/Kotlin (Android natif)', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Dart', 'HTML5/CSS3'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'SQL Server', 'Oracle SQL'],
    devopsTools: ['Git', 'GitHub', 'GitLab', 'Docker', 'n8n', 'Postman', 'Odoo ERP', 'Jira', 'Power BI', 'MS 365', 'KoboCollect / SIG'],
    architecture: ['Agile / Scrum', 'UML / Merise', 'System Design', 'Principes SOLID', 'Clean Architecture', 'Design Patterns'],
    performanceSecurity: ['Core Web Vitals', 'SEO Optimization', 'Authentification JWT & Spring Security', 'HTTPS / SSL'],
    softSkills: {
      fr: ['Adaptabilité rapide', 'Pédagogie & Mentorat (IAI)', 'Leadership d\'équipe', 'Pensée analytique', 'Communication technique'],
      en: ['Rapid adaptability', 'Pedagogy & Mentorship (IAI)', 'Team Leadership', 'Analytical thinking', 'Technical communication'],
    },
  },

  education: [
    {
      degree: {
        fr: 'Licence en Génie Logiciel (Bachelor in Software Engineering)',
        en: 'Bachelor Degree in Software Engineering (Licence Génie Logiciel)',
      },
      institution: "Institut Africain d'Informatique (IAI)",
      period: '2021 - 2024',
    },
  ],

  certifications: [
    {
      title: 'Google IT Support Professional Certificate',
      issuer: 'Google (Support technique, Réseaux, Administration systèmes & Sécurité)',
      year: '2025',
    },
  ],

  contact: {
    email: 'teufackandelson123@gmail.com',
    phoneCalls: '+237 651 489 468',
    phoneWhatsapp: '+237 690 819 035',
    location: 'Douala, Cameroun (GMT+1)',
    linkedin: 'https://www.linkedin.com/in/andelson-teufack-97a59b279/',
    github: 'https://github.com/AndelsonTeufack',
  },
}

/**
 * Smart Semantic Pattern Matcher & RAG Response Engine
 * Provides instant, zero-cost, accurate responses about Andelson Teufack
 */
export function queryAndelsonKnowledge(userQuery: string, lang: 'fr' | 'en' = 'fr'): string {
  const q = userQuery.toLowerCase().trim()
  const isEn = lang === 'en'

  // Out of scope detection: If the query is completely unrelated to Andelson
  const unrelatedKeywords = [
    'recette',
    'recipe',
    'meteo',
    'weather',
    'president',
    'politique',
    'politics',
    'football',
    'champions league',
    'cuisine',
    'cooking',
    'horoscope',
    'bitcoin price',
    'crypto',
    'film',
    'movie',
  ]

  const isUnrelated = unrelatedKeywords.some((kw) => q.includes(kw))
  if (isUnrelated) {
    return isEn
      ? "I am Andelson Teufack's specialized AI Assistant. My knowledge is dedicated exclusively to Andelson's engineering career, skills, projects, and experiences! Ask me anything about his work in Flutter, Spring Boot, Python, or his achievements at KES IP and IAI."
      : "Je suis l'assistant IA officiel d'Andelson Teufack. Ma connaissance est exclusivement dédiée au parcours d'Andelson, ses compétences, ses projets et ses expériences d'ingénierie ! Posez-moi n'importe quelle question sur son travail en Flutter, Spring Boot, Python ou ses réalisations chez KES IP et à l'IAI."
  }

  // 1. General Profile & Who is Andelson
  if (
    q.includes('qui est') ||
    q.includes('who is') ||
    q.includes('présente') ||
    q.includes('present') ||
    q.includes('parle-moi') ||
    q.includes('tell me about') ||
    q.includes('bio') ||
    q.includes('profil') ||
    q.includes('profile')
  ) {
    return isEn
      ? `👋 **TEUFACK SONTSA Andelson** is a 22-year-old Full-Stack Developer and IT Solutions Analyst based in Douala, Cameroon.\n\n` +
          `• **Specialties:** Spring Boot (Java), Python (Django/FastAPI/Flask), Flutter, React/Next.js, Odoo ERP & GIS.\n` +
          `• **Experience:** Stints at KES IP, Green Power Cameroon (x2), Credix.Cam SA (x2), and Technical Instructor at IAI.\n` +
          `• **Education:** Bachelor Degree in Software Engineering from IAI + Google IT Support Professional Certification.\n\n` +
          `What specific aspect of his engineering profile would you like to explore?`
      : `👋 **TEUFACK SONTSA Andelson** est un Développeur Full-Stack et Analyste IT de 22 ans basé à Douala, Cameroun.\n\n` +
          `• **Spécialités :** Spring Boot (Java), Python (Django/FastAPI/Flask), Flutter, React/Next.js, Odoo ERP & SIG.\n` +
          `• **Expériences :** Postes occupés chez KES IP, Green Power Cameroun (x2), Credix.Cam SA (x2) et Formateur à l'IAI.\n` +
          `• **Diplôme :** Licence en Génie Logiciel à l'IAI + Certificat Google IT Support Professional.\n\n` +
          `Quel aspect de son profil d'ingénieur souhaitez-vous approfondir ?`
  }

  // 2. Why Hire Andelson
  if (
    q.includes('pourquoi le recruter') ||
    q.includes('why hire') ||
    q.includes('pourquoi recruter') ||
    q.includes('points forts') ||
    q.includes('strengths') ||
    q.includes('avantages') ||
    q.includes('valeur')
  ) {
    const list = isEn ? ANDELSON_KNOWLEDGE.profile.whyHire.en : ANDELSON_KNOWLEDGE.profile.whyHire.fr
    return isEn
      ? `💡 **Why Hire Andelson Teufack?**\n\n` + list.join('\n') + `\n\nWould you like to schedule an interview or discuss a project?`
      : `💡 **Pourquoi recruter Andelson Teufack ?**\n\n` + list.join('\n') + `\n\nSouhaitez-vous planifier un échange ou discuter d'un projet ?`
  }

  // 3. Experience Details (KES IP, Green Power, Credix, IAI, n8n, Redis, GMAO)
  if (
    q.includes('expérience') ||
    q.includes('experience') ||
    q.includes('parcours') ||
    q.includes('kes') ||
    q.includes('green power') ||
    q.includes('credix') ||
    q.includes('iai') ||
    q.includes('n8n') ||
    q.includes('redis') ||
    q.includes('gmao') ||
    q.includes('n2')
  ) {
    if (q.includes('iai') || q.includes('formateur') || q.includes('mentor') || q.includes('teacher')) {
      return isEn
        ? `👨‍🏫 **Technical Instructor & Mentor at IAI (Jan 2025 - May 2025):**\n\n` +
            `• Conducted practical workshops in Web Engineering (React.js, JS) and Mobile Development (Flutter, Dart) for 1st & 2nd-year students.\n` +
            `• Mentored **100+ software engineering students**, accelerating their technical proficiency and code quality.\n` +
            `• Prepared students for corporate internships, capstone projects, and international professional certifications.`
        : `👨‍🏫 **Formateur & Mentor à l'IAI (Janvier 2025 - Mai 2025) :**\n\n` +
            `• Animation de formations pratiques en Développement Web (React.js, JS) et Mobile (Flutter, Dart) pour étudiants de 1ère et 2ème année.\n` +
            `• Mentorat et encadrement technique de **+100 étudiants en génie logiciel**, accélérant leur montée en compétences.\n` +
            `• Préparation des étudiants aux stages en entreprise, projets de fin d'études et certifications internationales.`
    }

    if (q.includes('kes') || q.includes('n8n')) {
      return isEn
        ? `⚡ **Full-Stack Developer Intern at KES IP (March 2026 - Present):**\n\n` +
            `• Web app for internal email qualification & automatic classification (Soft/Hard Bounce & Outbound).\n` +
            `• Offline-first mobile apps for electrical network inspection with automated PDF, Word & Excel reports.\n` +
            `• Contribution to Cameroon's Electrical Information System for SOCAD'EL (Web, Mobile, GIS).\n` +
            `• Professional emailing campaigns automated with Microsoft Outlook, Word & n8n.\n` +
            `• Internal ERP connected to Odoo & KoboCollect GIS customization (ESRI mapping, grid tracking, GeoJSON export).`
        : `⚡ **Stagiaire Développement FullStack chez KES IP (Mars 2026 - Présent) :**\n\n` +
            `• Application web interne de qualification & classification automatique d'emails (Soft/Hard Bounce & Outbound).\n` +
            `• Applications mobiles offline-first d'inspection électrique avec génération automatique de rapports PDF, Word et Excel.\n` +
            `• Contribution au Système d'Information Électrique du Cameroun pour SOCAD'EL (Web, Mobile, SIG).\n` +
            `• Campagnes de publipostage professionnelles automatisées via Outlook, Word et n8n.\n` +
            `• ERP interne connecté à Odoo & personnalisation KoboCollect SIG (cartes ESRI, traçage électrique, GeoJSON).`
    }

    if (q.includes('credix') || q.includes('redis')) {
      return isEn
        ? `🏦 **Stints at Credix.Cam SA:**\n\n` +
            `1. **Mobile Development Intern (Aug 2024 - Oct 2024):** Migrated legacy USSD services to a cross-platform native mobile experience with Flutter, orchestrating backend sessions via Redis cache.\n` +
            `2. **Web Development Intern (Jul 2023 - Sep 2023):** Built a scheduled backend service for daily failed transaction detection & financial reconciliation, and developed an HR web app (Spring Boot / React / JWT / Spring Security).`
        : `🏦 **Parcours chez Credix.Cam SA :**\n\n` +
            `1. **Stagiaire Développement Mobile (Août 2024 - Octobre 2024) :** Migration des services USSD vers une expérience mobile native Flutter, avec service backend orchestrant le cache Redis pour la gestion des sessions.\n` +
            `2. **Stagiaire Développement Web (Juillet 2023 - Septembre 2023) :** Création d'un service backend planifié de détection des échecs de transactions et réconciliation financière, et développement d'une app web RH (Spring Boot / React / JWT / Spring Security).`
    }

    // General experience overview
    return isEn
      ? `🏢 **Andelson Teufack's Professional Track Record:**\n\n` +
          `1. **KES IP (2026):** Full-Stack & GIS Developer (Odoo, Flutter, KoboCollect, n8n, PDF/Word/Excel Automation).\n` +
          `2. **Green Power Cameroon (2025):** IT Solutions Analyst & Developer (GMAO web app, Python reporting, MySQL).\n` +
          `3. **IAI (2025):** Technical Instructor & Mentor (Web & Mobile Flutter/React for 100+ students).\n` +
          `4. **Green Power Cameroon (2024-2025):** IT Solutions Analyst (Workflows, DB/Network Performance Audits, Level 2 Support).\n` +
          `5. **Credix.Cam SA (2024):** Mobile Developer Intern (Flutter, USSD Migration, Redis Session Cache).\n` +
          `6. **Credix.Cam SA (2023):** Web Developer Intern (Spring Boot, React, JWT Auth, Scheduled Financial Reconciliation).`
      : `🏢 **Synthèse des Expériences d'Andelson Teufack :**\n\n` +
          `1. **KES IP (2026) :** Développeur Full-Stack & SIG (Odoo, Flutter, KoboCollect, n8n, Automatisation PDF/Word/Excel).\n` +
          `2. **Green Power Cameroun (2025) :** Analyste IT & Développeur (GMAO, scripts Python de reporting, MySQL).\n` +
          `3. **IAI (2025) :** Formateur & Mentor Technique (Web & Mobile Flutter/React pour +100 étudiants).\n` +
          `4. **Green Power Cameroun (2024-2025) :** Analyste IT (Audit performance BDD/réseau, vulnérabilités & Support N2).\n` +
          `5. **Credix.Cam SA (2024) :** Développeur Mobile (Flutter, Migration USSD, Cache Redis backend).\n` +
          `6. **Credix.Cam SA (2023) :** Développeur Web (Spring Boot, React, JWT Auth, Réconciliation financière planifiée).`
  }

  // 4. Projects (MomoKash, TaillorPro, MULEMA, Shikaku, HR, etc.)
  if (
    q.includes('projet') ||
    q.includes('project') ||
    q.includes('shikaku') ||
    q.includes('jeu') ||
    q.includes('game') ||
    q.includes('momokash') ||
    q.includes('taillorpro') ||
    q.includes('mulema') ||
    q.includes('laoshi') ||
    q.includes('rh') ||
    q.includes('hrm')
  ) {
    if (q.includes('shikaku') || q.includes('jeu') || q.includes('game')) {
      return isEn
        ? `🎮 **Shikaku - Mobile Game App:**\n\n` +
            `Online and local multiplayer mobile puzzle game application built with Flutter/Dart and deployed on the Google Play Store.`
        : `🎮 **Shikaku - Application Mobile de Jeu :**\n\n` +
            `Application de jeu mobile de réflexion multijoueur en ligne et local développée avec Flutter/Dart et déployée sur le Google Play Store.`
    }

    if (q.includes('momokash')) {
      return isEn
        ? `📱 **MomoKash Mobile Application:**\n\n` +
            `Cross-platform mobile lending application migrating a legacy USSD service into an intuitive Flutter mobile experience powered by Spring Boot REST APIs and Redis session caching.`
        : `📱 **Application Mobile MomoKash :**\n\n` +
            `Application mobile de micro-crédit modernisant le service USSD MomoKash vers une expérience mobile Flutter fluide alimentée par des APIs REST Spring Boot et un cache Redis.`
    }

    if (q.includes('taillorpro')) {
      return isEn
        ? `✂️ **TaillorPro (Tailoring Workshop Management):**\n\n` +
            `Cross-platform Flutter mobile application managing client fittings, measurements, orders, and workshop progress with Firebase backend and multi-language support.`
        : `✂️ **TaillorPro (Gestion d'Ateliers de Couture) :**\n\n` +
            `Application mobile Flutter multiplateforme gérant les mesures clients, les commandes et le suivi d'atelier avec Firebase et support multilingue.`
    }

    return isEn
      ? `🚀 **Andelson's Key Projects:**\n\n` +
          `1. **TaillorPro:** Flutter & Firebase mobile app for tailoring workshops.\n` +
          `2. **Shikaku:** Online & local multiplayer mobile puzzle game on Google Play Store.\n` +
          `3. **MomoKash:** Flutter, Spring Boot & Redis fintech lending app.\n` +
          `4. **HR Management System:** Spring Boot, MongoDB & React enterprise web app.\n` +
          `5. **Maintenance Tracking (Gav-App / GMAO):** Python & MySQL IT maintenance workflow automation.\n` +
          `6. **MULEMA:** Native language learning mobile app with Node.js pedagogical backend.\n` +
          `7. **Laoshi Consulting:** Next.js & NestJS multilingual web portal.`
      : `🚀 **Projets Majeurs d'Andelson :**\n\n` +
          `1. **TaillorPro :** App mobile Flutter & Firebase pour ateliers de couture.\n` +
          `2. **Shikaku :** App mobile de jeu multijoueur en ligne/local sur le Play Store.\n` +
          `3. **MomoKash :** App fintech Flutter, Spring Boot & Redis de prêt mobile.\n` +
          `4. **Système de Gestion RH :** App web Spring Boot, MongoDB & React.\n` +
          `5. **Suivi de Maintenance (Gav-App / GMAO) :** Automatisation GMAO Python & MySQL.\n` +
          `6. **MULEMA :** App mobile d'apprentissage des langues avec backend Node.js.\n` +
          `7. **Laoshi Consulting :** Portail web multilingue Next.js & NestJS.`
  }

  // 5. Technologies & Skills (Flutter, React, Spring Boot, Python, SIG, Odoo, C/C++, etc.)
  if (
    q.includes('technologie') ||
    q.includes('tech') ||
    q.includes('compétence') ||
    q.includes('skill') ||
    q.includes('flutter') ||
    q.includes('spring') ||
    q.includes('react') ||
    q.includes('python') ||
    q.includes('sig') ||
    q.includes('gis') ||
    q.includes('odoo')
  ) {
    return isEn
      ? `🛠️ **Andelson Teufack's Technical Arsenal:**\n\n` +
          `• **Backend:** Spring Boot (Java), Python (Django/FastAPI/Flask), C/C++, Node.js, NestJS.\n` +
          `• **Frontend & Mobile:** Flutter, React.js, Next.js, Java/Kotlin (Android natif), TypeScript, Tailwind CSS, Dart.\n` +
          `• **Databases:** PostgreSQL, MySQL, MongoDB, Redis, Firebase.\n` +
          `• **ERP, GIS & Automation:** Odoo ERP customization, KoboCollect, ESRI mapping, GeoJSON, n8n automation.\n` +
          `• **DevOps & Security:** Docker, Git, JWT Authentication, Spring Security, Core Web Vitals.`
      : `🛠️ **Arsenal Technique d'Andelson Teufack :**\n\n` +
          `• **Backend :** Spring Boot (Java), Python (Django/FastAPI/Flask), C/C++, Node.js, NestJS.\n` +
          `• **Frontend & Mobile :** Flutter, React.js, Next.js, Java/Kotlin (Android natif), TypeScript, Tailwind CSS, Dart.\n` +
          `• **Bases de Données :** PostgreSQL, MySQL, MongoDB, Redis, Firebase.\n` +
          `• **ERP, SIG & Automatisation :** Personnalisation Odoo ERP, KoboCollect, cartographie ESRI, GeoJSON, automatisation n8n.\n` +
          `• **DevOps & Sécurité :** Docker, Git, Authentification JWT, Spring Security, Core Web Vitals.`
  }

  // 6. Education & Certifications (IAI, Google)
  if (
    q.includes('étude') ||
    q.includes('formation') ||
    q.includes('diplôme') ||
    q.includes('certification') ||
    q.includes('certif') ||
    q.includes('google')
  ) {
    return isEn
      ? `🎓 **Education & Certifications:**\n\n` +
          `• **Degree:** Bachelor in Software Engineering (Licence Génie Logiciel) — Institut Africain d'Informatique (IAI, 2021-2024).\n` +
          `• **Certification:** Google IT Support Professional Certificate (Google, 2025) covering SysAdmin, Security, Networking & Technical Support.`
      : `🎓 **Diplômes & Certifications :**\n\n` +
          `• **Diplôme :** Licence en Génie Logiciel — Institut Africain d'Informatique (IAI, 2021-2024).\n` +
          `• **Certification :** Certificat Google IT Support Professional (Google, 2025) couvrant le support technique, les réseaux, la sécurité et l'administration système.`
  }

  // 7. Languages
  if (
    q.includes('langue') ||
    q.includes('language') ||
    q.includes('yemba') ||
    q.includes('anglais') ||
    q.includes('français') ||
    q.includes('english') ||
    q.includes('french')
  ) {
    return isEn
      ? `🗣️ **Linguistic Competence:**\n\n` +
          `• **Yemba:** Native Language 🇨🇲\n` +
          `• **French:** Native 🇫🇷\n` +
          `• **English:** Level B1 🇬🇧`
      : `🗣️ **Compétences Linguistiques :**\n\n` +
          `• **Yemba :** Langue Maternelle 🇨🇲\n` +
          `• **Français :** Natif 🇫🇷\n` +
          `• **Anglais :** Niveau B1 🇬🇧`
  }

  // 8. Contact Info
  if (
    q.includes('contact') ||
    q.includes('email') ||
    q.includes('mail') ||
    q.includes('téléphone') ||
    q.includes('phone') ||
    q.includes('whatsapp') ||
    q.includes('joindre') ||
    q.includes('reach')
  ) {
    return isEn
      ? `📬 **Contact Information:**\n\n` +
          `• **Email:** teufackandelson123@gmail.com\n` +
          `• **Phone:** +237 651 489 468\n` +
          `• **WhatsApp:** +237 690 819 035\n` +
          `• **Location:** Douala, Cameroon (GMT+1)\n` +
          `• **LinkedIn:** https://www.linkedin.com/in/andelson-teufack-97a59b279/\n` +
          `• **GitHub:** https://github.com/AndelsonTeufack`
      : `📬 **Coordonnées de Contact :**\n\n` +
          `• **Email :** teufackandelson123@gmail.com\n` +
          `• **Téléphone :** +237 651 489 468\n` +
          `• **WhatsApp :** +237 690 819 035\n` +
          `• **Localisation :** Douala, Cameroun (GMT+1)\n` +
          `• **LinkedIn :** https://www.linkedin.com/in/andelson-teufack-97a59b279/\n` +
          `• **GitHub :** https://github.com/AndelsonTeufack`
  }

  // Fallback response about Andelson
  return isEn
    ? `I am Andelson Teufack's Official AI Assistant! Ask me anything about:\n\n` +
        `1. His work experience at KES IP, Green Power, Credix, or IAI.\n` +
        `2. His mobile projects (Flutter, Shikaku, MomoKash, TaillorPro).\n` +
        `3. His backend mastery (Spring Boot, Python, React, Next.js, Odoo, n8n, GIS).\n` +
        `4. Why he is a high-value software engineer for your team!`
    : `Je suis l'assistant IA officiel d'Andelson Teufack ! Posez-moi n'importe quelle question sur :\n\n` +
        `1. Ses expériences chez KES IP, Green Power, Credix ou l'IAI.\n` +
        `2. Ses projets mobiles (Flutter, Shikaku, MomoKash, TaillorPro).\n` +
        `3. Sa maîtrise backend (Spring Boot, Python, React, Next.js, Odoo, n8n, SIG).\n` +
        `4. Pourquoi il constitue un atout majeur pour vos équipes d'ingénierie !`
}
