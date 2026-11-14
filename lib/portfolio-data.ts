export type Language = 'fr' | 'en'

export interface BilingualText {
  fr: string
  en: string
}

export interface BilingualList {
  fr: string[]
  en: string[]
}

export interface ExperienceWorkstream {
  stage?: 'production' | 'design'
  title: BilingualText
  description: BilingualText
  deliverables: BilingualList
}

export interface ExperienceItem {
  id: string
  company: string
  role: BilingualText
  period: BilingualText
  location: BilingualText
  type?: BilingualText
  domain?: BilingualText
  isCurrent?: boolean
  isFeatured?: boolean
  summary?: BilingualText
  keyAchievements: BilingualList
  caseStudy?: {
    context: BilingualText
    workstreams: ExperienceWorkstream[]
    impact: BilingualList
  }
  technologies: string[]
}

export interface ProjectItem {
  id: string
  title: BilingualText
  category: 'web' | 'mobile' | 'backend' | 'automation'
  categoryLabel: BilingualText
  roleContext: BilingualText
  summary: BilingualText
  problemStatement: BilingualText
  architectureNotes: BilingualText
  highlights: BilingualList
  tags: string[]
  playStoreUrl?: string
  liveUrl?: string
  videoUrl?: string
  codeUrl?: string
}

export interface SkillCategory {
  id: string
  title: BilingualText
  description: BilingualText
  primary: string[]
  secondary: string[]
}

export interface EducationItem {
  id: string
  degree: BilingualText
  institution: string
  period: BilingualText
  status: BilingualText
}

export interface CertificationItem {
  id: string
  title: string
  issuer: string
  domains: BilingualList
}

export interface LanguageSkill {
  name: BilingualText
  level: BilingualText
  detail: BilingualText
}

export const PORTFOLIO_PROFILE = {
  fullName: 'Andelson TEUFACK SONTSA',
  displayName: 'Andelson TEUFACK SONTSA',
  birthDate: '2003-12-14',
  title: {
    fr: 'Développeur Full-Stack & Mobile',
    en: 'Full-Stack & Mobile Developer',
  },
  currentRoleHeadline: {
    fr: 'Développeur Full-Stack & Mobile',
    en: 'Full-Stack & Mobile Developer',
  },
  currentCompany: 'Kamer Engineering Solution',
  availabilityBadge: {
    fr: 'Douala, Cameroun',
    en: 'Douala, Cameroon',
  },
  heroDescription: {
    fr: 'Je conçois des applications mobiles offline-first et des plateformes web pour le terrain : inspections, données géospatiales, ERP. Actuellement chez Kamer Engineering Solution, Douala.',
    en: 'I build offline-first mobile applications and web platforms for field operations: inspections, geospatial data, and ERP. Currently at Kamer Engineering Solution, Douala.',
  },
  location: {
    fr: 'Douala, Cameroun (GMT+1)',
    en: 'Douala, Cameroon (GMT+1)',
  },
  contact: {
    email: 'teufackandelson123@gmail.com',
    phone: '+237 690 819 035',
    whatsapp: '+237 690 819 035',
    website: 'https://andelson-teufack.dev',
    linkedin: 'https://www.linkedin.com/in/andelson-teufack-97a59b279/',
    github: 'https://github.com/AndelsonTeufack',
  },
}

export const ENGINEERING_PILLARS: Array<{
  id: string
  title: BilingualText
  description: BilingualText
}> = [
  {
    id: 'mobile-offline-ai',
    title: {
      fr: 'Mobile offline-first',
      en: 'Offline-first mobile',
    },
    description: {
      fr: 'Flutter, synchronisation, rapports PDF/Word/Excel, assistance IA',
      en: 'Flutter, offline sync, PDF/Word/Excel reports, AI assistance',
    },
  },
  {
    id: 'backend-security',
    title: {
      fr: 'Backend & API sécurisées',
      en: 'Backend & secure APIs',
    },
    description: {
      fr: 'FastAPI, Spring Boot, JWT, RBAC',
      en: 'FastAPI, Spring Boot, JWT, RBAC',
    },
  },
  {
    id: 'web-erp-ota',
    title: {
      fr: 'Plateformes web & ERP',
      en: 'Web platforms & ERP',
    },
    description: {
      fr: 'Next.js, Odoo, accès QR Code, mises à jour OTA',
      en: 'Next.js, Odoo, QR Code access, OTA updates',
    },
  },
  {
    id: 'gis-mapping',
    title: {
      fr: 'SIG & données géospatiales',
      en: 'GIS & geospatial data',
    },
    description: {
      fr: 'PostGIS, KoboCollect, ESRI, GeoJSON',
      en: 'PostGIS, KoboCollect, ESRI, GeoJSON',
    },
  },
]

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'kes-lead',
    company: 'Kamer Engineering Solution',
    role: {
      fr: 'Développeur Full-Stack / Responsable de la digitalisation des inspections',
      en: 'Full-Stack Developer / Head of Inspection Digitalization',
    },
    period: {
      fr: 'Septembre 2026 – présent',
      en: 'September 2026 – present',
    },
    location: {
      fr: 'Douala',
      en: 'Douala',
    },
    isCurrent: true,
    isFeatured: true,
    summary: {
      fr: 'Supervision des stagiaires, correction continue des applications d’inspection à partir des retours terrain, conception de l’app mobile Bluetooth pour appareils d’essais de pression, plateforme de maîtrise d’œuvre et ERP interne connecté à Odoo.',
      en: 'Supervising interns, maintaining production inspection apps from field feedback, designing a Bluetooth pressure-testing app, a project supervision platform, and an Odoo-connected internal ERP.',
    },
    keyAchievements: {
      fr: [
        'Supervision, accompagnement technique et répartition des tâches des stagiaires sur les projets de digitalisation.',
        'Analyse et correction constante des anomalies remontées lors des inspections, avec mise à jour continue des applications à partir des retours terrain.',
        'Analyse et conception d’une application mobile BluetoothSockets communiquant avec les appareils d’essais de pression pour recevoir, centraliser et exploiter les données de mesure.',
        'Analyse et conception d’une plateforme web et mobile de suivi des projets de maîtrise d’œuvre (échanges entre acteurs, évolutions, dépenses et planification) ainsi que d’un ERP interne connecté à Odoo avec accès client externe.',
        'Assistance informatique et gestion des ressources du parc interne.',
      ],
      en: [
        'Technical supervision, mentoring, and task distribution for interns working on digitalization projects.',
        'Root-cause analysis and continuous resolution of field inspection anomalies, shipping ongoing app updates from inspector feedback.',
        'Analysis and design of a BluetoothSockets mobile app communicating with pressure-testing equipment to receive, centralize, and process test measurements.',
        'Analysis and design of a web and mobile project supervision platform (stakeholder exchanges, progress, expenses, planning) and an Odoo-integrated internal ERP with external client access.',
        'Internal IT support and hardware resource administration.',
      ],
    },
    caseStudy: {
      context: {
        fr: 'Promu responsable de la digitalisation des inspections après 6 mois de stage chez Kamer Engineering Solution. Ce poste associe maintien en condition opérationnelle des applications déployées sur le terrain, encadrement des stagiaires et conception de nouveaux produits internes.',
        en: 'Promoted to Head of Inspection Digitalization after a 6-month internship at Kamer Engineering Solution. Combines continuous field-application support, intern supervision, and new product design.',
      },
      workstreams: [
        {
          stage: 'production',
          title: {
            fr: 'Maintenance continue & retours terrain des apps d’inspection',
            en: 'Continuous maintenance & field updates for inspection apps',
          },
          description: {
            fr: 'Analyse et correction continue des anomalies remontées lors des inspections sur site, intégration des retours métier et publication régulière de mises à jour.',
            en: 'Continuous bug investigation from live inspection sites, integrating inspector feedback into regular application updates.',
          },
          deliverables: {
            fr: [
              'Corrections et mises à jour continues à partir des retours terrain',
              'Support technique et gestion du parc informatique interne',
            ],
            en: [
              'Continuous field-driven fixes and releases',
              'Internal IT support and equipment administration',
            ],
          },
        },
        {
          stage: 'production',
          title: {
            fr: 'Supervision & encadrement technique des stagiaires',
            en: 'Technical supervision & mentoring of interns',
          },
          description: {
            fr: 'Accompagnement quotidien, répartition des tâches, revues techniques et suivi des livrables des stagiaires impliqués dans la digitalisation.',
            en: 'Day-to-day technical coaching, task assignment, reviews, and delivery follow-up for digitalization interns.',
          },
          deliverables: {
            fr: [
              'Répartition des tâches et suivi d’avancement technique',
              'Accompagnement sur les bonnes pratiques de développement',
            ],
            en: [
              'Task breakdown and engineering progress tracking',
              'Guidance on development practices',
            ],
          },
        },
        {
          stage: 'design',
          title: {
            fr: 'Application mobile BluetoothSockets (appareils d’essais de pression)',
            en: 'BluetoothSockets mobile app (pressure-testing hardware)',
          },
          description: {
            fr: 'Analyse et conception d’une application mobile interfacée en Bluetooth avec des appareils d’essais de pression pour recevoir, centraliser et exploiter les données de mesure.',
            en: 'Analysis and design of a mobile app communicating over Bluetooth with pressure-testing devices to receive, centralize, and exploit measurements.',
          },
          deliverables: {
            fr: [
              'Cahier des charges et module de réception BluetoothSockets',
              'Structuration et centralisation des séries de mesures',
            ],
            en: [
              'Specifications and BluetoothSockets acquisition module',
              'Structured measurement storage and processing',
            ],
          },
        },
        {
          stage: 'design',
          title: {
            fr: 'Plateforme de maîtrise d’œuvre & ERP interne connecté à Odoo',
            en: 'Project supervision platform & Odoo-connected internal ERP',
          },
          description: {
            fr: 'Analyse et conception d’une plateforme web/mobile multi-acteurs de suivi des projets (échanges, évolutions, dépenses, planification) et d’un ERP interne interconnecté à Odoo avec portail d’accès client externe.',
            en: 'Analysis and design of a multi-stakeholder web/mobile project supervision platform (communications, progress, expenses, planning) and an internal ERP integrated with Odoo featuring external client access.',
          },
          deliverables: {
            fr: [
              'Architecture suivi de projets : échanges, dépenses et planification',
              'Synchronisation processus internes ↔ Odoo et portail client',
            ],
            en: [
              'Project tracking workflows: communications, expenses, and planning',
              'Internal ERP ↔ Odoo integration and external client portal',
            ],
          },
        },
      ],
      impact: {
        fr: [
          'Prise de responsabilité technique complète des projets de digitalisation après 6 mois de stage.',
          'Réactivité continue sur les anomalies remontées par les inspecteurs sur site.',
          'Structuration des nouveaux chantiers logiciels internes (Bluetooth, maîtrise d’œuvre, Odoo).',
        ],
        en: [
          'Stepped up to full technical ownership of digitalization projects after 6 months as an intern.',
          'Sustained responsiveness to issues reported from field inspections.',
          'Structured the roadmap for new internal software initiatives (Bluetooth, project tracking, Odoo).',
        ],
      },
    },
    technologies: ['Flutter', 'BluetoothSockets', 'Next.js', 'FastAPI', 'Odoo', 'PostgreSQL'],
  },
  {
    id: 'kes-intern',
    company: 'Kamer Engineering Solution',
    role: {
      fr: 'Développeur Full-Stack (Mobile & Web) — Stagiaire',
      en: 'Full-Stack Developer (Mobile & Web) — Intern',
    },
    period: {
      fr: 'Mars 2026 – septembre 2026',
      en: 'March 2026 – September 2026',
    },
    location: {
      fr: 'Douala',
      en: 'Douala',
    },
    summary: {
      fr: 'Conception d’applications mobiles d’inspection offline-first assistées par IA (rapports PDF, Word, Excel — JSA, Q18, Q19), plateforme web multi-inspecteurs (QR Code, Cloudflare R2), SIG SOCAD’EL (KoboCollect/ESRI/GeoJSON) et qualification d’e-mails avec n8n.',
      en: 'Built AI-assisted offline-first inspection mobile apps (PDF, Word, Excel — JSA, Q18, Q19), collaborative web platform (QR Code, Cloudflare R2), SOCAD’EL GIS (KoboCollect/ESRI/GeoJSON), and n8n email automation.',
    },
    keyAchievements: {
      fr: [
        'Analyse et conception d’applications mobiles d’inspection offline-first assistées par IA (électriques, thermographiques, éclairage, pression, levage, sécurité incendie, bilan de puissance, ascenseurs), avec génération automatique des rapports PDF, Word et Excel (JSA, Q18, Q19).',
        'Conception d’une plateforme web interconnectée pour la gestion de missions multi-inspections collaboratives, l’accès rapide aux équipements par QR Code, les sauvegardes et la mise à jour automatique via Cloudflare R2.',
        'Contribution au Système d’Information Électrique du Cameroun pour la SOCAD’EL (Web, Mobile, SIG) et adaptation de KoboCollect (repositionnement cartographique ESRI, traçage automatique des réseaux électriques, historique des soumissions et export GeoJSON).',
        'Conception d’une application web de filtrage et qualification d’adresses e-mail (Soft Bounce, Hard Bounce, Outbound) et automatisation de campagnes / newsletters via n8n.',
      ],
      en: [
        'Analyzed and built AI-assisted offline-first inspection mobile apps (electrical, thermographic, lighting, pressure, lifting, fire safety, power balance, elevators) with automated PDF, Word, and Excel report export (JSA, Q18, Q19).',
        'Built an interconnected web platform for multi-inspector collaborative missions, QR Code equipment access, backups, and automatic OTA updates via Cloudflare R2.',
        'Contributed Web, Mobile, and GIS modules to Cameroon’s Electrical Information System for SOCAD’EL and customized KoboCollect (ESRI coordinate repositioning, automated grid tracing, submission history, and GeoJSON export).',
        'Developed an internal email qualification web app (Soft Bounce, Hard Bounce, Outbound) and automated campaigns / newsletters with n8n.',
      ],
    },
    caseStudy: {
      context: {
        fr: 'Stage de 6 mois consacré à la numérisation des inspections techniques multi-domaines, au déploiement de la plateforme collaborative web et aux travaux SIG pour le réseau électrique camerounais.',
        en: 'Six-month engineering internship dedicated to digitalizing multi-domain technical inspections, building the collaborative web platform, and delivering GIS tooling for Cameroon’s electrical grid.',
      },
      workstreams: [
        {
          stage: 'production',
          title: {
            fr: 'Apps mobiles d’inspection offline-first assistées par IA',
            en: 'AI-assisted offline-first mobile inspection apps',
          },
          description: {
            fr: 'Persistance hors connexion, sauvegarde locale et en ligne, partage de missions entre inspecteurs, assistance IA (Gemini) et génération automatique de rapports PDF, Word et Excel incluant les fiches JSA, Q18 et Q19.',
            en: 'Offline persistence, local/cloud backup, inspector mission handoff, Gemini AI assistance, and automated PDF, Word, and Excel reports including JSA, Q18, and Q19.',
          },
          deliverables: {
            fr: [
              '8 domaines d’inspection couverts hors-ligne',
              'Export automatique PDF / Word / Excel (JSA, Q18, Q19)',
            ],
            en: [
              '8 inspection domains supported offline',
              'Automated PDF / Word / Excel reporting (JSA, Q18, Q19)',
            ],
          },
        },
        {
          stage: 'production',
          title: {
            fr: 'Plateforme web multi-inspecteurs, QR Code & Cloudflare R2',
            en: 'Multi-inspector web platform, QR Code & Cloudflare R2',
          },
          description: {
            fr: 'Gestion de missions multi-inspections, travail collaboratif simultané entre inspecteurs sur le terrain, accès aux équipements via QR Code et mises à jour automatiques sur Cloudflare R2.',
            en: 'Multi-inspection mission orchestration, simultaneous field collaboration, QR Code equipment lookup, and automated Cloudflare R2 distribution.',
          },
          deliverables: {
            fr: [
              'Synchronisation web / mobile multi-inspecteurs',
              'Distribution OTA via Cloudflare R2 & accès QR Code',
            ],
            en: [
              'Multi-inspector web/mobile synchronization',
              'Cloudflare R2 OTA updates & QR Code asset access',
            ],
          },
        },
        {
          stage: 'production',
          title: {
            fr: 'SIG SOCAD’EL & adaptation KoboCollect (ESRI / GeoJSON)',
            en: 'SOCAD’EL GIS & KoboCollect customization (ESRI / GeoJSON)',
          },
          description: {
            fr: 'Contribution au Système d’Information Électrique du Cameroun (Web, Mobile, SIG) et personnalisation de KoboCollect pour le repositionnement de points sur fonds ESRI, le tracé automatique de réseaux électriques et l’export GeoJSON.',
            en: 'Delivered Web, Mobile, and GIS modules for SOCAD’EL and customized KoboCollect with ESRI coordinate repositioning, automated grid tracing, submission history, and GeoJSON export.',
          },
          deliverables: {
            fr: [
              'Fork KoboCollect avec repositionnement ESRI & tracé réseau',
              'Export normalisé GeoJSON & intégration PostGIS',
            ],
            en: [
              'Customized KoboCollect with ESRI map repositioning & grid tracing',
              'Standardized GeoJSON export & PostGIS integration',
            ],
          },
        },
        {
          stage: 'production',
          title: {
            fr: 'Qualification d’e-mails & automatisation n8n',
            en: 'Email qualification app & n8n automation',
          },
          description: {
            fr: 'Application web interne classifiant automatiquement les adresses (Soft Bounce, Hard Bounce, Outbound) couplée à des workflows de newsletters automatisés sur n8n.',
            en: 'Internal web app automatically classifying email statuses (Soft Bounce, Hard Bounce, Outbound) connected to n8n newsletter workflows.',
          },
          deliverables: {
            fr: [
              'Qualification automatique Soft/Hard Bounce et Outbound',
              'Automatisations campagnes & newsletters sous n8n',
            ],
            en: [
              'Automated Soft/Hard Bounce and Outbound classifier',
              'Automated n8n campaign and newsletter pipelines',
            ],
          },
        },
      ],
      impact: {
        fr: [
          'Continuité opérationnelle des inspections sur des sites industriels dépourvus de réseau.',
          'Automatisation directe de la production des rapports réglementaires JSA, Q18 et Q19.',
          'Recrutement et promotion en responsabilité technique à l’issue du stage.',
        ],
        en: [
          'Enabled uninterrupted inspections on zero-connectivity industrial sites.',
          'Automated regulatory JSA, Q18, and Q19 report generation.',
          'Promoted to lead inspection digitalization upon completing the internship.',
        ],
      },
    },
    technologies: ['Flutter', 'Gemini API', 'Next.js', 'Cloudflare R2', 'KoboCollect / ESRI', 'PostGIS', 'n8n'],
  },
  {
    id: 'green-power-2',
    company: 'Green Power Cameroon',
    role: {
      fr: 'Analyste développeur de solutions IT — Stagiaire',
      en: 'IT Solutions Analyst & Developer — Intern',
    },
    period: {
      fr: 'Mai 2025 – novembre 2025',
      en: 'May 2025 – November 2025',
    },
    location: {
      fr: 'Yaoundé',
      en: 'Yaoundé',
    },
    summary: {
      fr: 'Conception et développement d’une application web interne de gestion de maintenance (GMAO) sur MySQL, tests unitaires et de non-régression, et automatisation du reporting via scripts Python.',
      en: 'Designed and developed an internal web CMMS (GMAO) on MySQL, authored unit and regression tests, and automated reporting extraction/aggregation with Python.',
    },
    keyAchievements: {
      fr: [
        'Conception et développement d’une application web interne dédiée à la gestion et au suivi des opérations de maintenance (GMAO).',
        'Modélisation de la base de données relationnelle MySQL et implémentation des fonctionnalités métiers.',
        'Rédaction et exécution de tests unitaires et de non-régression pour garantir la stabilité applicative et la continuité de service.',
        'Automatisation de l’extraction et de l’agrégation des données de reporting via des scripts Python.',
      ],
      en: [
        'Designed and built an internal web application for maintenance management and operations tracking (CMMS/GMAO).',
        'Modeled the relational MySQL database and implemented core business workflows.',
        'Authored and executed unit and non-regression tests to guarantee application stability and service continuity.',
        'Automated extraction and aggregation of reporting datasets using Python scripts.',
      ],
    },
    caseStudy: {
      context: {
        fr: 'Second stage chez Green Power Cameroon centré sur le développement d’une plateforme web interne de GMAO remplaçant les suivis manuels de maintenance.',
        en: 'Second internship at Green Power Cameroon focused on replacing manual maintenance tracking with a tested internal web CMMS platform.',
      },
      workstreams: [
        {
          title: {
            fr: 'Application web GMAO & modélisation MySQL',
            en: 'Internal GMAO web platform & MySQL database',
          },
          description: {
            fr: 'Conception du schéma relationnel MySQL et développement des interfaces et fonctionnalités de suivi des opérations et ordres de maintenance.',
            en: 'Relational MySQL modeling and development of web workflows to track maintenance operations and interventions.',
          },
          deliverables: {
            fr: [
              'Schéma relationnel MySQL structuré pour la maintenance',
              'Application web interne complète de suivi des interventions',
            ],
            en: [
              'Normalized MySQL schema for maintenance tracking',
              'Internal web application for operational follow-up',
            ],
          },
        },
        {
          title: {
            fr: 'Tests automatisés & scripts Python de reporting',
            en: 'Automated test suites & Python reporting scripts',
          },
          description: {
            fr: 'Mise en place de tests unitaires et de non-régression avec Pytest, et écriture de scripts Python automatisant l’extraction et l’agrégation des indicateurs de reporting.',
            en: 'Implemented Pytest unit and non-regression test suites alongside Python scripts automating reporting data extraction and aggregation.',
          },
          deliverables: {
            fr: [
              'Suite de tests unitaires et de non-régression',
              'Scripts Python d’extraction et d’agrégation de données',
            ],
            en: [
              'Unit and non-regression test suite',
              'Automated Python reporting data scripts',
            ],
          },
        },
      ],
      impact: {
        fr: [
          'Centralisation du suivi des opérations de maintenance dans une base MySQL fiable.',
          'Réduction du travail manuel sur les extractions de reporting grâce à Python.',
        ],
        en: [
          'Centralized maintenance records in a structured MySQL database.',
          'Automated repetitive reporting extraction tasks using Python.',
        ],
      },
    },
    technologies: ['Python', 'MySQL', 'Pytest', 'HTML5 / CSS3', 'JavaScript'],
  },
  {
    id: 'iai-instructor',
    company: 'IAI (Centre de Douala)',
    role: {
      fr: 'Formateur & mentor en développement web et mobile',
      en: 'Web & Mobile Development Instructor and Mentor',
    },
    period: {
      fr: 'Janvier 2025 – mai 2025',
      en: 'January 2025 – May 2025',
    },
    location: {
      fr: 'Douala',
      en: 'Douala',
    },
    summary: {
      fr: 'Animation de cours et TP intensifs React.js / JavaScript et Flutter / Dart pour les 1ʳᵉ et 2ᵉ années ; accompagnement technique de +15 étudiants sur leurs projets d’études et la préparation aux stages.',
      en: 'Delivered intensive React.js and Flutter lectures and labs for 1st- and 2nd-year cohorts; mentored 15+ software engineering students on capstone projects and internship readiness.',
    },
    keyAchievements: {
      fr: [
        'Animation de cours et travaux pratiques intensifs en développement web (React.js, JavaScript, HTML5/CSS3) et mobile (Flutter, Dart) pour les étudiants de 1ʳᵉ et 2ᵉ année.',
        'Mentorat et accompagnement technique de +15 étudiants en génie logiciel dans la réalisation de leurs projets d’études, la structuration des architectures logicielles et la résolution de problèmes.',
        'Préparation des étudiants aux stages en entreprise et aux certifications (bonnes pratiques de code, Git et intégration d’APIs REST).',
      ],
      en: [
        'Delivered intensive lectures and hands-on labs in web (React.js, JavaScript, HTML5/CSS3) and mobile (Flutter, Dart) development for 1st- and 2nd-year students.',
        'Mentored 15+ software engineering students on academic projects, software architecture structuring, and debugging.',
        'Prepared students for corporate internships and certifications (clean code practices, Git workflows, REST API integration).',
      ],
    },
    caseStudy: {
      context: {
        fr: 'Mission d’enseignement et de mentorat au Centre de Douala de l’Institut Africain d’Informatique (IAI), axée sur la mise en pratique directe des standards professionnels en web et mobile.',
        en: 'Teaching and mentoring engagement at IAI (Douala Campus), focused on equipping undergraduate students with practical industry skills in web and mobile engineering.',
      },
      workstreams: [
        {
          title: {
            fr: 'Cours & travaux pratiques React.js et Flutter',
            en: 'React.js and Flutter lectures & practical labs',
          },
          description: {
            fr: 'Préparation et animation de séances intensives couvrant HTML5/CSS3, JavaScript, React.js côté web ainsi que Dart et Flutter côté mobile pour les promotions de 1ʳᵉ et 2ᵉ année.',
            en: 'Prepared and delivered hands-on sessions covering HTML5/CSS3, JavaScript, React.js for web and Dart/Flutter for mobile across 1st- and 2nd-year cohorts.',
          },
          deliverables: {
            fr: [
              'Travaux pratiques guidés : interfaces web React.js et applications Flutter',
              'Consommation et intégration d’APIs REST en conditions réelles',
            ],
            en: [
              'Guided labs across React.js web apps and Flutter mobile apps',
              'Hands-on REST API integration exercises',
            ],
          },
        },
        {
          title: {
            fr: 'Mentorat de +15 étudiants & préparation aux stages',
            en: 'Mentoring 15+ students & internship readiness',
          },
          description: {
            fr: 'Suivi individuel et en groupe de +15 étudiants sur la structuration de leurs architectures logicielles, la résolution de blocages techniques, l’usage de Git et la préparation aux stages.',
            en: 'Coached 15+ students on software architecture structure, technical problem solving, Git discipline, and corporate internship preparation.',
          },
          deliverables: {
            fr: [
              'Accompagnement de +15 étudiants sur leurs projets d’études',
              'Revues de code, Git et préparation aux entretiens de stage',
            ],
            en: [
              'Project coaching for 15+ software engineering students',
              'Code reviews, Git workflows, and internship preparation',
            ],
          },
        },
      ],
      impact: {
        fr: [
          'Plus de 15 étudiants accompagnés concrètement jusqu’à leurs projets d’études et candidatures en entreprise.',
          'Consolidation de la transmission pédagogique et de la pratique de revue de code.',
        ],
        en: [
          'Coached 15+ students through capstone deliveries and internship applications.',
          'Strengthened technical communication, code review, and mentoring practice.',
        ],
      },
    },
    technologies: ['React.js', 'Flutter', 'Dart', 'JavaScript', 'Git', 'APIs REST'],
  },
  {
    id: 'green-power-1',
    company: 'Green Power Cameroon',
    role: {
      fr: 'Analyste développeur de solutions IT — Stagiaire',
      en: 'IT Solutions Analyst & Developer — Intern',
    },
    period: {
      fr: 'Novembre 2024 – mai 2025',
      en: 'November 2024 – May 2025',
    },
    location: {
      fr: 'Yaoundé',
      en: 'Yaoundé',
    },
    summary: {
      fr: 'Analyse des besoins et cahiers des charges techniques, audits de performance et vulnérabilités BDD/réseau, support applicatif niveau 2 (N2) et administration Windows / Microsoft 365.',
      en: 'Requirements analysis and technical specifications, database/network performance and vulnerability audits, Level 2 application support, and Windows / Microsoft 365 administration.',
    },
    keyAchievements: {
      fr: [
        'Analyse des besoins métiers et rédaction de cahiers des charges techniques pour l’optimisation et la digitalisation des processus internes.',
        'Diagnostic et audit des performances des bases de données et du réseau afin d’identifier les goulots d’étranglement et les vulnérabilités.',
        'Diagnostic et résolution des incidents applicatifs de niveau 2 (N2), maintenance corrective et évolutive du système d’information.',
        'Assistance technique aux utilisateurs et administration des environnements Windows et Microsoft 365.',
      ],
      en: [
        'Analyzed business requirements and authored technical specification documents to optimize and digitalize internal processes.',
        'Diagnosed and audited database and network performance to pinpoint bottlenecks and security vulnerabilities.',
        'Diagnosed and resolved Level 2 (L2) application incidents alongside corrective and evolutive IS maintenance.',
        'Provided user technical support and administered Windows and Microsoft 365 environments.',
      ],
    },
    caseStudy: {
      context: {
        fr: 'Premier stage chez Green Power Cameroon dédié à l’analyse fonctionnelle et technique du système d’information, aux audits infrastructure et au support applicatif niveau 2.',
        en: 'First internship at Green Power Cameroon focused on IT requirements engineering, database/network diagnostics, and Level 2 application support.',
      },
      workstreams: [
        {
          title: {
            fr: 'Analyse métier, cahiers des charges & audits BDD/réseau',
            en: 'Requirements drafting & DB/network performance audits',
          },
          description: {
            fr: 'Recueil des besoins auprès des services internes, rédaction de spécifications techniques et évaluation des performances et vulnérabilités sur les bases de données et le réseau.',
            en: 'Gathered internal team requirements, wrote technical specifications, and audited database and network performance and vulnerabilities.',
          },
          deliverables: {
            fr: [
              'Cahiers des charges techniques pour les processus à digitaliser',
              'Diagnostics de performance et vulnérabilités BDD / réseau',
            ],
            en: [
              'Technical specifications for internal digitalization',
              'Database and network bottleneck/vulnerability reports',
            ],
          },
        },
        {
          title: {
            fr: 'Support niveau 2 (N2), maintenance SI & Microsoft 365',
            en: 'Level 2 incident resolution & Microsoft 365 administration',
          },
          description: {
            fr: 'Traitement et résolution des incidents applicatifs de niveau 2, maintenance corrective/évolutive du SI, support utilisateurs et administration Windows / Microsoft 365.',
            en: 'Investigated and resolved L2 application incidents, maintained internal IS tools, supported staff, and administered Windows / Microsoft 365.',
          },
          deliverables: {
            fr: [
              'Résolution d’incidents applicatifs N2 et maintenance SI',
              'Administration Windows et Microsoft 365',
            ],
            en: [
              'L2 application incident resolution and IS maintenance',
              'Windows and Microsoft 365 environment administration',
            ],
          },
        },
      ],
      impact: {
        fr: [
          'Cadrage documenté des besoins préparant le développement ultérieur de la GMAO interne.',
          'Maintien de la continuité d’exploitation du parc Windows / Microsoft 365 et du SI.',
        ],
        en: [
          'Documented requirements that paved the way for the internal CMMS build.',
          'Maintained operational continuity across Windows, Microsoft 365, and internal IS services.',
        ],
      },
    },
    technologies: ['SQL', 'UML / Merise', 'Windows', 'Microsoft 365', 'Diagnostic réseau & BDD'],
  },
  {
    id: 'credix-mobile',
    company: 'Credix.cam SA',
    role: {
      fr: 'Développeur mobile — Stagiaire',
      en: 'Mobile Developer — Intern',
    },
    period: {
      fr: 'Août 2024 – octobre 2024',
      en: 'August 2024 – October 2024',
    },
    location: {
      fr: 'Yaoundé',
      en: 'Yaoundé',
    },
    summary: {
      fr: 'Migration des parcours USSD vers une application mobile cross-platform avec service backend dédié gérant les sessions et données temporaires sous Redis, et rédaction de tests unitaires et d’intégration.',
      en: 'Migrated USSD workflows to a cross-platform mobile app supported by a backend service managing sessions and temporary data via Redis, with unit and integration tests.',
    },
    keyAchievements: {
      fr: [
        'Conception et développement d’une application mobile cross-platform permettant de migrer les utilisateurs du canal USSD vers une expérience mobile native.',
        'Mise en place d’un service backend dédié pour orchestrer les échanges avec l’application mobile et gérer les sessions et données temporaires via le cache Redis.',
        'Élaboration et exécution de tests unitaires et d’intégration en collaboration avec les équipes backend et infrastructure.',
      ],
      en: [
        'Designed and built a cross-platform mobile application migrating users from legacy USSD menus to a native mobile experience.',
        'Implemented a dedicated backend service managing mobile exchanges, user sessions, and temporary state through Redis caching.',
        'Authored and ran unit and integration tests in collaboration with backend and infrastructure teams.',
      ],
    },
    caseStudy: {
      context: {
        fr: 'Second stage chez Credix.cam SA pour proposer une alternative mobile fluide aux menus USSD existants tout en garantissant la cohérence des sessions applicatives.',
        en: 'Second internship at Credix.cam SA replacing rigid USSD menus with a cross-platform mobile interface while preserving reliable session state.',
      },
      workstreams: [
        {
          title: {
            fr: 'Migration USSD vers application mobile cross-platform',
            en: 'USSD-to-mobile cross-platform application',
          },
          description: {
            fr: 'Conception des écrans et parcours mobiles cross-platform en Flutter remplaçant les menus USSD pas-à-pas.',
            en: 'Built cross-platform Flutter screens and navigation flows replacing multi-step USSD menus.',
          },
          deliverables: {
            fr: [
              'Parcours mobile cross-platform remplaçant le canal USSD',
              'Tests unitaires et d’intégration applicatifs',
            ],
            en: [
              'Cross-platform mobile user journeys replacing USSD',
              'Unit and integration test suites',
            ],
          },
        },
        {
          title: {
            fr: 'Service backend & gestion des sessions via Redis',
            en: 'Backend orchestration service & Redis session cache',
          },
          description: {
            fr: 'Développement d’un service backend dédié exploitant Redis pour conserver les sessions et données temporaires entre l’application mobile et les services métiers.',
            en: 'Built a dedicated backend service leveraging Redis to handle user sessions and temporary data between the mobile app and core services.',
          },
          deliverables: {
            fr: [
              'Service backend d’échanges mobile ↔ APIs métiers',
              'Gestion des sessions et états temporaires via Redis',
            ],
            en: [
              'Backend service bridging mobile app and core APIs',
              'Redis-backed session and temporary state management',
            ],
          },
        },
      ],
      impact: {
        fr: [
          'Simplification du parcours utilisateur par rapport aux contraintes de session du canal USSD.',
          'Intégration validée par tests unitaires et d’intégration avec les équipes backend et infrastructure.',
        ],
        en: [
          'Replaced timeout-constrained USSD steps with a smoother mobile interface.',
          'Validated integration alongside backend and infrastructure teams through automated tests.',
        ],
      },
    },
    technologies: ['Flutter', 'Dart', 'Spring Boot', 'Redis', 'APIs REST', 'JUnit'],
  },
  {
    id: 'credix-web',
    company: 'Credix.cam SA',
    role: {
      fr: 'Développeur web — Stagiaire',
      en: 'Web Developer — Intern',
    },
    period: {
      fr: 'Juillet 2023 – septembre 2023',
      en: 'July 2023 – September 2023',
    },
    location: {
      fr: 'Yaoundé',
      en: 'Yaoundé',
    },
    summary: {
      fr: 'Service backend planifié sur Momokash détectant automatiquement les transactions quotidiennes en échec et facilitant la réconciliation financière, plus une app full-stack RH (Spring Boot / React.js) sécurisée par JWT et Spring Security.',
      en: 'Scheduled backend job on Momokash detecting failed daily transactions for financial reconciliation, plus a Spring Boot / React.js HR portal protected with JWT and Spring Security.',
    },
    keyAchievements: {
      fr: [
        'Développement d’un service backend planifié sur Momokash permettant de détecter automatiquement les transactions quotidiennes en échec et de faciliter la réconciliation financière.',
        'Conception et réalisation d’une application full-stack (Spring Boot / React.js) dédiée à la gestion interne des ressources humaines.',
        'Sécurisation des endpoints REST via l’authentification JWT et la gestion des rôles et permissions avec Spring Security.',
      ],
      en: [
        'Built a scheduled backend service on Momokash to automatically detect daily failed transactions and support financial reconciliation.',
        'Designed and implemented a full-stack internal HR web application using Spring Boot and React.js.',
        'Secured REST endpoints with JWT authentication and Spring Security role/permission access control.',
      ],
    },
    caseStudy: {
      context: {
        fr: 'Premier stage chez Credix.cam SA autour de deux besoins précis : la détection automatique des transactions en échec sur Momokash et la mise en place d’une application RH interne.',
        en: 'First internship at Credix.cam SA addressing two concrete needs: automated detection of failed transactions on Momokash and building an internal HR portal.',
      },
      workstreams: [
        {
          title: {
            fr: 'Service planifié de réconciliation financière (Momokash)',
            en: 'Scheduled financial reconciliation service (Momokash)',
          },
          description: {
            fr: 'Implémentation d’une tâche backend planifiée identifiant quotidiennement les transactions en échec pour simplifier et fiabiliser les rapprochements financiers.',
            en: 'Implemented a scheduled backend job scanning daily transaction records for failures to assist financial reconciliation.',
          },
          deliverables: {
            fr: [
              'Tâche planifiée quotidienne de détection des transactions en échec',
              'Support direct aux opérations de réconciliation financière',
            ],
            en: [
              'Scheduled daily job flagging failed transactions',
              'Streamlined financial reconciliation workflow',
            ],
          },
        },
        {
          title: {
            fr: 'Application full-stack RH (Spring Boot / React.js / JWT)',
            en: 'Full-stack HR portal (Spring Boot / React.js / JWT)',
          },
          description: {
            fr: 'Développement de l’API REST Spring Boot et de l’interface React.js de gestion du personnel, avec authentification JWT et gestion des rôles/permissions sous Spring Security.',
            en: 'Developed the Spring Boot REST API and React.js UI for internal HR management, secured via JWT authentication and Spring Security role/permission rules.',
          },
          deliverables: {
            fr: [
              'API REST Spring Boot + interface React.js de gestion RH',
              'Authentification JWT et contrôle d’accès Spring Security',
            ],
            en: [
              'Spring Boot REST backend + React.js HR management UI',
              'JWT authentication and Spring Security RBAC',
            ],
          },
        },
      ],
      impact: {
        fr: [
          'Automatisation du repérage quotidien des anomalies transactionnelles sur Momokash.',
          'Application RH sécurisée par JWT et gestion des rôles/permissions Spring Security.',
        ],
        en: [
          'Automated daily identification of failed Momokash transactions.',
          'Delivered an internal HR tool protected by JWT and Spring Security RBAC.',
        ],
      },
    },
    technologies: ['Spring Boot', 'Java', 'React.js', 'Spring Security', 'JWT', 'MongoDB'],
  },
]

export const PROJECTS: ProjectItem[] = [
  {
    id: 'mulema',
    title: {
      fr: 'MULEMA — Apprentissage des Langues Nationales',
      en: 'MULEMA — Native Language Learning Mobile App',
    },
    category: 'mobile',
    categoryLabel: {
      fr: 'Mobile · Play Store',
      en: 'Mobile · Play Store',
    },
    roleContext: {
      fr: 'Maintenance corrective V1 & Participation bénévole V2 · Publié sur Google Play Store',
      en: 'V1 Corrective Maintenance & Volunteer V2 Development · Published on Google Play Store',
    },
    summary: {
      fr: 'Application mobile dédiée à l’apprentissage des langues nationales camerounaises : stabilisation de la V1 et contribution active au développement et lancement de la V2.',
      en: 'Mobile application preserving and teaching Cameroonian native languages: bug-fixing on V1 and volunteer engineering contribution through the launch of V2.',
    },
    problemStatement: {
      fr: 'Garantir la stabilité de la première version en production auprès des apprenants tout en participant à la refonte et au lancement de la V2 sur Google Play Store.',
      en: 'Stabilize an active production mobile app for learners while co-developing and shipping a major V2 release on Google Play Store.',
    },
    architectureNotes: {
      fr: 'Diagnostic et résolution de bugs critiques sur la V1, puis développement de nouvelles briques applicatives et préparation de la mise en production V2.',
      en: 'Root-cause bug resolution across V1 production flows, followed by collaborative feature engineering and release stabilization for V2.',
    },
    highlights: {
      fr: [
        'Contribution à la maintenance corrective de la première version (V1), notamment par l’identification et la correction de bugs.',
        'Participation bénévole au développement et au lancement de la deuxième version (V2) de l’application.',
        'Application publiquement disponible et téléchargeable sur le Google Play Store.',
      ],
      en: [
        'Performed corrective maintenance on V1 through systematic bug identification and resolution.',
        'Contributed voluntarily to the engineering and public launch of V2.',
        'Live and publicly distributed on Google Play Store.',
      ],
    },
    tags: ['Mobile', 'Google Play Store', 'Maintenance V1', 'Lancement V2', 'Clean Code'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mulema.app&hl=fr',
    codeUrl: 'https://github.com/noubayou237/mulema',
  },
  {
    id: 'shikaku',
    title: {
      fr: 'Shikaku — Jeu Mobile Multijoueur en Ligne & Local',
      en: 'Shikaku — Online & Local Multiplayer Mobile Game',
    },
    category: 'mobile',
    categoryLabel: {
      fr: 'Mobile · Play Store',
      en: 'Mobile · Play Store',
    },
    roleContext: {
      fr: 'Analyse, conception, tests & déploiement Play Store',
      en: 'Analysis, Design, QA & Play Store Release',
    },
    summary: {
      fr: 'Jeu mobile de réflexion et stratégie proposant des modes multijoueurs en ligne et en local, testé et déployé sur le Google Play Store avec site vitrine dédié.',
      en: 'Multiplayer mobile puzzle game supporting both online and local play modes, tested and deployed to Google Play Store alongside a web showcase.',
    },
    problemStatement: {
      fr: 'Concevoir un jeu fluide capable de synchroniser des parties multijoueurs en temps réel en ligne tout en restant jouable localement à deux sur le terrain.',
      en: 'Design a responsive mobile game supporting synchronized online multiplayer sessions as well as frictionless local play.',
    },
    architectureNotes: {
      fr: 'Architecture Flutter/Dart couplée à Firebase pour l’état multijoueur en ligne, accompagnée d’une phase rigoureuse de tests avant publication sur Google Play Store.',
      en: 'Flutter/Dart game engine integrated with Firebase for online multiplayer synchronization, followed by structured QA and Google Play Store deployment.',
    },
    highlights: {
      fr: [
        'Participation à l’analyse et à la conception d’un jeu mobile multijoueur proposant des modes en ligne et en local.',
        'Contribution aux phases de test et au déploiement de l’application sur Google Play Store.',
        'Site de présentation et d’accès rapide déployé en ligne.',
      ],
      en: [
        'Contributed to the analysis and design of online and local multiplayer game modes.',
        'Executed testing phases and managed deployment on Google Play Store.',
        'Accompanied by a live web landing page.',
      ],
    },
    tags: ['Flutter', 'Dart', 'Firebase', 'Multijoueur', 'Google Play Store'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.shikaku.jeu_carre',
    liveUrl: 'https://shikaku-site.vercel.app/',
    codeUrl: 'https://github.com/AndelsonTeufack/shikaku',
  },
  {
    id: 'taillorpro',
    title: {
      fr: 'TaillorPro — Gestion Offline-First d’Ateliers de Couture',
      en: 'TaillorPro — Offline-First Tailoring Workshop App',
    },
    category: 'mobile',
    categoryLabel: {
      fr: 'Mobile · Offline-First',
      en: 'Mobile · Offline-First',
    },
    roleContext: {
      fr: 'Analyse & conception complète d’application multiplateforme',
      en: 'End-to-End Cross-Platform Analysis & Engineering',
    },
    summary: {
      fr: 'Application mobile multiplateforme fonctionnant hors connexion (offline-first), dédiée à la digitalisation des ateliers de couture : commandes, clients, paiements et notifications instantanées.',
      en: 'Offline-first cross-platform mobile application built to digitalize tailoring workshops: orders, client measurements, payments, and instant notifications.',
    },
    problemStatement: {
      fr: 'Permettre aux ateliers de couture d’enregistrer mesures, commandes et paiements même sans connexion Internet permanente, sans perte de données.',
      en: 'Enable tailoring workshops to track orders, client records, and payments reliably without permanent internet connectivity.',
    },
    architectureNotes: {
      fr: 'Architecture offline-first sous Flutter avec synchronisation Firebase, support multilingue (i18n), thèmes clair/sombre et système de notifications instantanées.',
      en: 'Offline-first Flutter architecture paired with Firebase synchronization, i18n localization, dynamic theming, and instant notifications.',
    },
    highlights: {
      fr: [
        'Analyse et conception d’une application multiplateforme fonctionnant en mode hors connexion (offline-first).',
        'Gestion complète des commandes, fiches clients/mesures et suivi des paiements.',
        'Intégration de notifications instantanées et support multilingue.',
      ],
      en: [
        'Architected a cross-platform mobile app designed around an offline-first workflow.',
        'Full management of client measurements, garment orders, and payment tracking.',
        'Integrated instant notifications and multi-language support.',
      ],
    },
    tags: ['Flutter', 'Dart', 'Offline-First', 'Firebase', 'Notifications'],
    codeUrl: 'https://github.com/AndelsonTeufack/tailor_pro_app',
  },
  {
    id: 'momokash',
    title: {
      fr: 'MomoKash Mobile — Migration USSD vers Flutter & Redis',
      en: 'MomoKash Mobile — USSD-to-Flutter Fintech & Redis',
    },
    category: 'mobile',
    categoryLabel: {
      fr: 'Fintech · Mobile & Backend',
      en: 'Fintech · Mobile & Backend',
    },
    roleContext: {
      fr: 'Projet Entreprise (CREDIX.CAM SA) · Démo vidéo disponible',
      en: 'Enterprise Project (CREDIX.CAM SA) · Video Demo Available',
    },
    summary: {
      fr: 'Modernisation du service de micro-crédit MomoKash par migration du canal USSD vers une application mobile cross-platform Flutter orchestrée via cache Redis.',
      en: 'Modernized the MomoKash lending platform by migrating users from legacy USSD menus to a cross-platform Flutter app orchestrated through Redis session caching.',
    },
    problemStatement: {
      fr: 'Les parcours USSD limitaient l’expérience utilisateur et générant des interruptions de session lors des demandes de micro-crédit.',
      en: 'Legacy USSD channels created rigid UX constraints and session timeouts during mobile lending operations.',
    },
    architectureNotes: {
      fr: 'Frontend mobile Flutter communiqué via APIs REST à un service backend Spring Boot dédié, s’appuyant sur Redis pour les données temporaires et sessions haute performance.',
      en: 'Flutter cross-platform client communicating over REST with a dedicated Spring Boot orchestration layer backed by Redis for low-latency session caching.',
    },
    highlights: {
      fr: [
        'Migration intégrale des parcours USSD vers une application mobile native cross-platform.',
        'Orchestration backend avec cache Redis pour les sessions et données temporaires.',
        'Tests unitaires et d’intégration couvrant la fiabilité des échanges.',
      ],
      en: [
        'Full UX migration from legacy USSD menus to native cross-platform Flutter.',
        'Dedicated backend orchestration layer utilizing Redis cache for session state.',
        'Unit and integration tests validating transactional reliability.',
      ],
    },
    tags: ['Flutter', 'Spring Boot', 'Redis', 'REST API', 'Fintech'],
    videoUrl: 'https://youtu.be/hyJJLx7mCCU',
    codeUrl: 'https://github.com/AndelsonTeufack/MomoKash-Mobile-App',
  },
  {
    id: 'vote-iai',
    title: {
      fr: 'Vote - IAI — Plateforme Web de Vote & Paiement Campay',
      en: 'Vote - IAI — Paid Voting Web Platform & Campay API',
    },
    category: 'backend',
    categoryLabel: {
      fr: 'Backend & Fintech · Campay',
      en: 'Backend & Fintech · Campay',
    },
    roleContext: {
      fr: 'Analyse, conception API & intégration paiement mobile',
      en: 'Backend Analysis, API Design & Mobile Payment Integration',
    },
    summary: {
      fr: 'Plateforme web de vote par paiement électronique intégrant la solution de paiement mobile Campay avec validation sécurisée des transactions et comptabilisation des votes.',
      en: 'Electronic paid-voting web platform integrating the Campay payment gateway with secure transaction callbacks and vote validation.',
    },
    problemStatement: {
      fr: 'Permettre aux étudiants et votants de participer en ligne via Mobile Money (Orange Money / MTN MoMo) tout en garantissant l’unicité et la traçabilité chaque vote payé.',
      en: 'Enable online voting via Mobile Money payments while guaranteeing atomic transaction verification and accurate vote tallying.',
    },
    architectureNotes: {
      fr: 'APIs REST Spring Boot intégrant les webhooks et appels sécurisés vers la passerelle Campay avec règles métiers d’allocation et de vérification transactionnelle.',
      en: 'Spring Boot REST APIs integrating Campay payment initiation and webhook verification with strict business rules for vote validation.',
    },
    highlights: {
      fr: [
        'Analyse et conception d’une plateforme web de vote par paiement.',
        'Intégration complète de la solution de paiement électronique Campay.',
        'Architecture API REST robuste et sécurisée sous Spring Boot.',
      ],
      en: [
        'End-to-end analysis and engineering of an electronic paid-voting platform.',
        'Integrated the Campay electronic payment gateway.',
        'Scalable Spring Boot REST API architecture.',
      ],
    },
    tags: ['Spring Boot', 'Java', 'API Campay', 'REST API', 'Sécurité'],
    codeUrl: 'https://github.com/AndelsonTeufack/sponsorship-IAI-Douala',
  },
  {
    id: 'rental-desktop',
    title: {
      fr: 'Gestion Locative Desktop — Suivi Immobilier PyQt',
      en: 'Desktop Rental Property Manager — PyQt & MongoDB',
    },
    category: 'automation',
    categoryLabel: {
      fr: 'Desktop · Python / PyQt',
      en: 'Desktop · Python / PyQt',
    },
    roleContext: {
      fr: 'Développement logiciel desktop complet',
      en: 'Full Desktop Application Engineering',
    },
    summary: {
      fr: 'Application desktop de gestion locative intégrant le suivi des disponibilités, des états de paiement, des logements et occupants, ainsi que des notifications automatiques.',
      en: 'Desktop property management software tracking unit availability, rent payment status, tenants, and automated notifications through a modern PyQt interface.',
    },
    problemStatement: {
      fr: 'Centraliser la gestion des loyers, disponibilités de chambres/logements et relances locataires dans un outil desktop rapide utilisable hors ligne.',
      en: 'Centralize unit availability, tenant records, payment statuses, and automated reminders inside a responsive offline desktop tool.',
    },
    architectureNotes: {
      fr: 'Interface graphique ergonomique conçue avec Python et PyQt, couplée à une couche de persistance MongoDB/SQLite et un module d’alertes automatisées.',
      en: 'Ergonomic GUI engineered with Python and PyQt, connected to MongoDB/SQLite persistence and automated notification triggers.',
    },
    highlights: {
      fr: [
        'Suivi en temps réel des disponibilités, états de paiement, logements et occupants.',
        'Système intégré de notifications et alertes automatiques.',
        'Interfaces graphiques modernes et ergonomiques développées avec PyQt.',
      ],
      en: [
        'Real-time tracking of unit availability, payment statuses, and tenant profiles.',
        'Automated notification engine for rent due dates and status changes.',
        'Modern, ergonomic desktop interfaces crafted with PyQt.',
      ],
    },
    tags: ['Python', 'PyQt', 'MongoDB', 'SQLite', 'Desktop GUI'],
    codeUrl: 'https://github.com/AndelsonTeufack/BuildingManagement',
  },
  {
    id: 'credix-hrm',
    title: {
      fr: 'Système de Gestion RH — Spring Boot, React & JWT',
      en: 'Enterprise HR Management System — Spring Boot & React',
    },
    category: 'backend',
    categoryLabel: {
      fr: 'Full-Stack · Sécurité RBAC',
      en: 'Full-Stack · RBAC Security',
    },
    roleContext: {
      fr: 'Projet Entreprise (CREDIX.CAM SA)',
      en: 'Enterprise Project (CREDIX.CAM SA)',
    },
    summary: {
      fr: 'Application web fullstack dédiée à la gestion interne des ressources humaines, avec sécurisation des endpoints REST via JWT et gestion des rôles/permissions sous Spring Security.',
      en: 'Full-stack internal HR management web application featuring JWT-secured REST endpoints and role/permission access control via Spring Security.',
    },
    problemStatement: {
      fr: 'Digitaliser la gestion des dossiers employés, des demandes de congés et des communications internes avec séparation stricte des droits d’accès.',
      en: 'Digitalize employee records, leave workflows, and internal announcements under strict role-based access controls.',
    },
    architectureNotes: {
      fr: 'Backend Java Spring Boot + Spring Security (JWT + RBAC) connecté à MongoDB et consommé par une interface SPA React JS.',
      en: 'Java Spring Boot + Spring Security (JWT + RBAC) backend backed by MongoDB, paired with a React JS frontend.',
    },
    highlights: {
      fr: [
        'Sécurisation complète des endpoints REST via JWT.',
        'Configuration fine des autorisations (rôles et permissions RBAC) avec Spring Security.',
        'Interface React JS intégrée pour la gestion des ressources humaines.',
      ],
      en: [
        'Secured all REST endpoints with stateless JWT authentication.',
        'Configured fine-grained RBAC roles and permissions using Spring Security.',
        'Built responsive React JS workflows for internal HR teams.',
      ],
    },
    tags: ['Spring Boot', 'React.js', 'Spring Security', 'JWT', 'MongoDB', 'RBAC'],
    codeUrl: 'https://github.com/AndelsonTeufack/credix-Hrm',
  },
  {
    id: 'gav-gmao',
    title: {
      fr: 'Plateforme GMAO & Automatisation Reporting (Gav-App)',
      en: 'Internal CMMS (GMAO) & Python Reporting Automation',
    },
    category: 'automation',
    categoryLabel: {
      fr: 'Web & Automatisation · Python',
      en: 'Web & Automation · Python',
    },
    roleContext: {
      fr: 'Projet Entreprise (GREEN POWER CAMEROON)',
      en: 'Enterprise Project (GREEN POWER CAMEROON)',
    },
    summary: {
      fr: 'Application web interne de gestion des opérations de maintenance (GMAO) adossée à MySQL, tests unitaires/non-régression et scripts Python d’agrégation de reporting.',
      en: 'Internal web CMMS application tracking maintenance operations on MySQL, reinforced by unit/regression tests and Python ETL reporting automation.',
    },
    problemStatement: {
      fr: 'Structurer la traçabilité des opérations de maintenance et éliminer la compilation manuelle des indicateurs de reporting.',
      en: 'Standardize operational maintenance tracking and eliminate manual aggregation of weekly/monthly reporting KPIs.',
    },
    architectureNotes: {
      fr: 'Modélisation relationnelle MySQL, logique applicative modulaire couverte par tests unitaires et scripts Python automatisant l’extraction et l’agrégation des données.',
      en: 'Normalized MySQL database, modular application logic protected by unit/non-regression tests, and Python reporting scripts.',
    },
    highlights: {
      fr: [
        'Modélisation et implémentation d’une base de données relationnelle MySQL.',
        'Scripts Python d’extraction, traitement et agrégation automatique de reporting.',
        'Tests unitaires et de non-régression pour garantir la continuité de service.',
      ],
      en: [
        'Modeled and implemented the relational MySQL database.',
        'Automated data extraction, transformation, and reporting aggregation in Python.',
        'Wrote unit and non-regression tests ensuring service reliability.',
      ],
    },
    tags: ['Python', 'MySQL', 'GMAO', 'Tests Unitaires', 'Automatisation'],
    codeUrl: 'https://github.com/AndelsonTeufack/Gav-App',
  },
  {
    id: 'laoshi-consulting',
    title: {
      fr: 'Portail Web Multilingue Laoshi Consulting',
      en: 'Laoshi Consulting Multilingual Web Platform',
    },
    category: 'web',
    categoryLabel: {
      fr: 'Web App · Production Live',
      en: 'Web App · Live Production',
    },
    roleContext: {
      fr: 'Architecture Next.js / NestJS · Déployé en production',
      en: 'Next.js / NestJS Architecture · Live in Production',
    },
    summary: {
      fr: 'Portail web multilingue conçu pour un cabinet international de conseil en études et immigration en Chine, optimisé pour le SEO et la qualification de prospects.',
      en: 'Multilingual web portal engineered for an international study-abroad and immigration consultancy in China, built for SEO and lead qualification.',
    },
    problemStatement: {
      fr: 'Offrir une vitrine institutionnelle crédible et multilingue capable de convertir les demandes d’accompagnement international.',
      en: 'Provide a credible, fast, multilingual portal capturing and qualifying international student and client leads.',
    },
    architectureNotes: {
      fr: 'Architecture Next.js App Router avec TypeScript et Tailwind CSS, couplée à un backend NestJS pour les workflows de contact et prise de rendez-vous.',
      en: 'Next.js App Router frontend in TypeScript and Tailwind CSS, supported by NestJS backend workflows.',
    },
    highlights: {
      fr: [
        'Architecture Next.js performante avec rendu optimisé et SEO technique.',
        'Interface multilingue adaptée à une audience internationale.',
        'Formulaires de qualification et prise de rendez-vous en ligne.',
      ],
      en: [
        'High-performance Next.js App Router architecture with technical SEO.',
        'Multilingual experience tailored to international applicants.',
        'Lead qualification and consultation booking workflows.',
      ],
    },
    tags: ['Next.js', 'React', 'NestJS', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://laoshi-consulting.vercel.app',
    codeUrl: 'https://github.com/AndelsonTeufack/laochi_site',
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages-backend',
    title: {
      fr: 'Langages, Back-end & APIs',
      en: 'Languages, Back-End & APIs',
    },
    description: {
      fr: 'Conception d’APIs REST, temps réel WebSockets, microservices et communication matérielle.',
      en: 'Designing REST APIs, real-time WebSockets, microservices, and hardware socket communication.',
    },
    primary: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'TypeScript', 'APIs REST'],
    secondary: ['Django', 'Flask', 'Node.js', 'NestJS', 'JavaScript', 'Dart', 'C/C++', 'WebSockets', 'BluetoothSockets'],
  },
  {
    id: 'frontend-mobile',
    title: {
      fr: 'Développement Front-end & Mobile',
      en: 'Front-End & Mobile Engineering',
    },
    description: {
      fr: 'Applications mobiles offline-first publiées sur Play Store et interfaces web réactives.',
      en: 'Offline-first mobile apps published on Google Play Store and high-precision web interfaces.',
    },
    primary: ['Flutter', 'React.js', 'Next.js', 'Clean Architecture', 'Offline-First', 'Tailwind CSS'],
    secondary: [
      'Android (Java, Kotlin)',
      'HTML5 / CSS3',
      'Bootstrap',
      'SEO technique',
      'Gestion d’état applicative',
      'Déploiement Google Play Store',
    ],
  },
  {
    id: 'databases-gis',
    title: {
      fr: 'Bases de Données, Cache & SIG',
      en: 'Databases, Caching & GIS',
    },
    description: {
      fr: 'Modélisation relationnelle/NoSQL, indexation, caching Redis, stockage local et géomatique.',
      en: 'Relational/NoSQL modeling, query optimization, Redis caching, offline storage, and spatial data.',
    },
    primary: ['PostgreSQL', 'MySQL', 'Redis', 'PostGIS', 'Firebase', 'Hive'],
    secondary: ['MongoDB', 'Modélisation & Indexation', 'Optimisation des requêtes', 'Stratégies de cache', 'KoboCollect / ESRI / GeoJSON'],
  },
  {
    id: 'architecture-security',
    title: {
      fr: 'Architecture Logicielle & Sécurité',
      en: 'Software Architecture & Security',
    },
    description: {
      fr: 'Systèmes distribués événementiels, conception modulaire et sécurisation des identités.',
      en: 'Event-driven distributed systems, modular architecture, and enterprise identity/access security.',
    },
    primary: ['Architecture Microservices', 'JWT', 'OAuth2', 'Spring Security', 'RBAC'],
    secondary: ['Kafka', 'RabbitMQ', 'UML', 'Merise', 'GanttProject', 'Sécurisation des APIs', 'IAM'],
  },
  {
    id: 'cloud-devops-qa',
    title: {
      fr: 'Cloud, DevOps, Tests & Qualité',
      en: 'Cloud, DevOps, Testing & QA',
    },
    description: {
      fr: 'Stockage objet S3/R2, conteneurisation, intégration continue CI/CD et tests automatisés.',
      en: 'Object storage (S3/R2), containerization, CI/CD pipelines, and automated quality assurance.',
    },
    primary: ['Cloudflare (R2)', 'Docker', 'GitHub Actions (CI/CD)', 'JUnit', 'Pytest'],
    secondary: ['AWS (S3)', 'Minio', 'TDD', 'Revues de code', 'Tests automatisés', 'Documentation technique'],
  },
  {
    id: 'ai-it-tools',
    title: {
      fr: 'IA, Data, ERP & Environnements IT',
      en: 'AI, Data, ERP & Enterprise IT',
    },
    description: {
      fr: 'Intégration de modèles LLM, automatisation de workflows, ERP Odoo et écosystème Microsoft.',
      en: 'LLM API integration, workflow automation, Odoo ERP integration, and Microsoft enterprise tooling.',
    },
    primary: ['APIs LLM (Gemini)', 'Odoo ERP', 'n8n', 'Git / GitHub / GitLab'],
    secondary: ['NumPy', 'Power BI', 'Microsoft 365', 'Microsoft Entra ID', 'Microsoft Intune', 'Jira', 'Notion', 'Windows / Linux (Ubuntu) / macOS'],
  },
]

export const SOFT_SKILLS: BilingualList = {
  fr: [
    'Rigueur, précision et sens du détail',
    'Esprit d’analyse, de synthèse et de résolution de problèmes',
    'Esprit critique et sens de l’initiative',
    'Capacité d’adaptation et autonomie',
    'Sens de l’écoute et aisance relationnelle',
    'Intégrité, éthique professionnelle et sens des responsabilités',
    'Aptitude au travail en équipe et sous pression',
    'Communication professionnelle en anglais',
  ],
  en: [
    'Rigor, precision, and attention to detail',
    'Analytical, synthesis, and problem-solving mindset',
    'Critical thinking and sense of initiative',
    'Rapid adaptability and strong autonomy',
    'Active listening and interpersonal fluency',
    'Integrity, professional ethics, and accountability',
    'Effective teamwork under pressure',
    'Professional business communication in English',
  ],
}

export const EDUCATION: EducationItem[] = [
  {
    id: 'enspd-master',
    degree: {
      fr: 'Master professionnel en génie logiciel',
      en: 'Professional Master’s Degree in Software Engineering',
    },
    institution: 'ENSPD (École nationale supérieure polytechnique de Douala)',
    period: {
      fr: 'En cours',
      en: 'In Progress',
    },
    status: {
      fr: 'Cycle master',
      en: 'Graduate Program',
    },
  },
  {
    id: 'iai-licence',
    degree: {
      fr: 'Licence en génie logiciel',
      en: 'Bachelor’s Degree in Software Engineering',
    },
    institution: 'Institut africain d’informatique (IAI-Cameroun)',
    period: {
      fr: '2024',
      en: '2024',
    },
    status: {
      fr: 'Diplômé',
      en: 'Graduated',
    },
  },
  {
    id: 'baccalaureat',
    degree: {
      fr: 'Baccalauréat',
      en: 'High School Diploma (Baccalauréat)',
    },
    institution: 'Lycée Bilingue de Bobongo Petit Paris',
    period: {
      fr: '2021',
      en: '2021',
    },
    status: {
      fr: 'Obtenu',
      en: 'Completed',
    },
  },
]

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'google-it-support',
    title: 'Google IT Support Professional Certificate',
    issuer: 'Google',
    domains: {
      fr: [
        'Support technique',
        'Réseaux',
        'Administration systèmes',
        'Sécurité informatique',
      ],
      en: [
        'Technical Support',
        'Computer Networking',
        'System Administration',
        'IT Security',
      ],
    },
  },
]

export const LANGUAGES: LanguageSkill[] = [
  {
    name: { fr: 'Yemba', en: 'Yemba' },
    level: { fr: 'Langue maternelle', en: 'Native' },
    detail: { fr: 'Maîtrise native', en: 'Native fluency' },
  },
  {
    name: { fr: 'Français', en: 'French' },
    level: { fr: 'Courant', en: 'Fluent' },
    detail: { fr: 'Langue de travail principale', en: 'Full professional & native proficiency' },
  },
  {
    name: { fr: 'Anglais', en: 'English' },
    level: { fr: 'Niveau C1', en: 'C1 Level' },
    detail: { fr: 'Communication professionnelle avancée', en: 'Advanced professional working proficiency' },
  },
]

export const INTERESTS: BilingualList = {
  fr: ['Lecture', 'Jeux de stratégie (échecs, dames et scrabble)', 'Football', 'Billard'],
  en: ['Reading', 'Strategy games (chess, checkers, scrabble)', 'Football', 'Billiards'],
}
