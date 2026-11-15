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
  tier: 'featured' | 'compact' | 'published' | 'other'
  roleBadge: BilingualText
  statusBadge: BilingualText
  statusTone: 'live' | 'production' | 'playstore' | 'prototype'
  summary: BilingualText
  problemSolution?: BilingualText
  resultSummary?: BilingualText
  problemStatement: BilingualText
  architectureNotes: BilingualText
  highlights: BilingualList
  tags: string[]
  hasCaseStudy?: boolean
  playStoreUrl?: string
  liveUrl?: string
  videoUrl?: string
  codeUrl?: string
}

export interface SkillCategory {
  id: string
  title: BilingualText
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
  birthDate: '2002-12-14',
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
    fr: 'Développeur Full-Stack & Mobile · Applications terrain, Web & ERP · Douala, Cameroun',
    en: 'Full-Stack & Mobile Developer · Field Apps, Web Platforms & ERP · Douala, Cameroon',
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
      fr: 'Développeur Full-Stack (Mobile & Web) - Stagiaire',
      en: 'Full-Stack Developer (Mobile & Web) - Intern',
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
      fr: 'Conception d’applications mobiles d’inspection offline-first assistées par IA (rapports PDF, Word, Excel - JSA, Q18, Q19), plateforme web multi-inspecteurs (QR Code, Cloudflare R2), SIG SOCAD’EL (KoboCollect/ESRI/GeoJSON) et qualification d’e-mails avec n8n.',
      en: 'Built AI-assisted offline-first inspection mobile apps (PDF, Word, Excel - JSA, Q18, Q19), collaborative web platform (QR Code, Cloudflare R2), SOCAD’EL GIS (KoboCollect/ESRI/GeoJSON), and n8n email automation.',
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
      fr: 'Analyste développeur de solutions IT - Stagiaire',
      en: 'IT Solutions Analyst & Developer - Intern',
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
      fr: 'Analyste développeur de solutions IT - Stagiaire',
      en: 'IT Solutions Analyst & Developer - Intern',
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
      fr: 'Développeur mobile - Stagiaire',
      en: 'Mobile Developer - Intern',
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
      fr: 'Développeur web - Stagiaire',
      en: 'Web Developer - Intern',
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
    id: 'laoshi-consulting',
    title: {
      fr: 'Laoshi Consulting',
      en: 'Laoshi Consulting',
    },
    category: 'web',
    categoryLabel: {
      fr: 'Web · En ligne',
      en: 'Web · Live',
    },
    roleContext: {
      fr: 'Client réel · Portail Full-Stack Next.js en production',
      en: 'Client delivery · Production Full-Stack Next.js portal',
    },
    tier: 'featured',
    roleBadge: {
      fr: 'Auteur',
      en: 'Author',
    },
    statusBadge: {
      fr: 'En ligne',
      en: 'Live',
    },
    statusTone: 'live',
    summary: {
      fr: 'Portail web multilingue pour un cabinet d’accompagnement aux études et à l’immigration en Chine.',
      en: 'Multilingual web portal for an international study-abroad and immigration consultancy in China.',
    },
    problemSolution: {
      fr: 'Structurer l’offre de bourses et qualifier les demandes d’étudiants internationaux via une architecture full-stack Next.js (App Router & API Routes).',
      en: 'Structure scholarship programs and qualify international student inquiries through a full-stack Next.js architecture (App Router & API Routes).',
    },
    resultSummary: {
      fr: 'Déployé en production avec interface multilingue, référencement SEO technique et prise de rendez-vous en ligne.',
      en: 'Live in production with multilingual routing, technical SEO, and online consultation booking.',
    },
    problemStatement: {
      fr: 'Le cabinet avait besoin d’une plateforme rapide et multilingue pour présenter ses programmes d’admission en Chine et centraliser les demandes de rendez-vous de candidats internationaux.',
      en: 'The consultancy needed a fast, multilingual web platform to present university admission programs in China and capture qualified consultation requests.',
    },
    architectureNotes: {
      fr: 'Application full-stack conçue entièrement sous Next.js App Router (TypeScript, Tailwind CSS) avec rendu optimisé pour le SEO et routes serveur Next.js gérant la validation des formulaires de qualification et les notifications de rendez-vous.',
      en: 'End-to-end Next.js App Router application (TypeScript, Tailwind CSS) combining SEO-focused rendering with Next.js server routes handling lead qualification and consultation booking notifications.',
    },
    highlights: {
      fr: [
        'Interface multilingue complète adaptée aux étudiants francophones, anglophones et internationaux.',
        'Parcours de qualification des dossiers (bourses, filières, niveau d’étude) et prise de rendez-vous gérés via les routes serveur Next.js.',
        'En ligne et accessible publiquement en production.',
      ],
      en: [
        'Multilingual navigation tailored for French-speaking, English-speaking, and international applicants.',
        'Structured applicant qualification and consultation scheduling powered by Next.js server routes.',
        'Deployed and publicly live in production.',
      ],
    },
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    hasCaseStudy: true,
    liveUrl: 'https://laoshi-consulting.vercel.app',
  },
  {
    id: 'kes-inspection',
    title: {
      fr: 'Application d’inspection offline-first',
      en: 'Offline-First Inspection Platform',
    },
    category: 'mobile',
    categoryLabel: {
      fr: 'Mobile & Web · Terrain',
      en: 'Mobile & Web · Field',
    },
    roleContext: {
      fr: 'Étude de cas anonymisée · Kamer Engineering Solution',
      en: 'Anonymized case study · Kamer Engineering Solution',
    },
    tier: 'featured',
    roleBadge: {
      fr: 'Projet d’entreprise',
      en: 'Company project',
    },
    statusBadge: {
      fr: 'En production',
      en: 'In production',
    },
    statusTone: 'production',
    summary: {
      fr: 'Suite mobile et web d’inspection technique pour un bureau d’études électriques et industrielles (Kamer Engineering Solution).',
      en: 'Mobile and web technical inspection suite for an electrical and industrial engineering firm (Kamer Engineering Solution).',
    },
    problemSolution: {
      fr: 'Saisir des inspections sur sites sans réseau via une app Flutter offline-first (IA Gemini) et une plateforme web synchronisée par QR Code et Cloudflare R2.',
      en: 'Capture inspections on offline industrial sites via a Flutter app (Gemini AI) and a multi-inspector web platform synced via QR Code and Cloudflare R2.',
    },
    resultSummary: {
      fr: 'Génération automatisée des rapports réglementaires PDF, Word et Excel (JSA, Q18, Q19) et mises à jour OTA terrain.',
      en: 'Automated generation of regulatory PDF, Word, and Excel reports (JSA, Q18, Q19) with OTA field updates.',
    },
    problemStatement: {
      fr: 'Les inspecteurs interviennent sur des installations électriques sans couverture réseau et devaient saisir leurs relevés sur papier avant de les ressaisir manuellement en rapports JSA, Q18 ou Q19.',
      en: 'Field inspectors operate on industrial electrical sites without internet connectivity and previously transcribed paper checklists manually into JSA, Q18, and Q19 reports.',
    },
    architectureNotes: {
      fr: 'Application Flutter offline-first avec persistance locale Hive, intégration de l’API Gemini pour l’assistance à la rédaction des anomalies, et plateforme web FastAPI/PostgreSQL gérant la synchronisation multi-inspecteurs par QR Code et le stockage Cloudflare R2 pour les livrables et mises à jour OTA.',
      en: 'Offline-first Flutter client using Hive local storage and Gemini API assistance for anomaly drafting, synced with a FastAPI/PostgreSQL web platform via QR Code workflows and Cloudflare R2 for reports and OTA distribution.',
    },
    highlights: {
      fr: [
        'Saisie terrain 100 % hors connexion avec synchronisation différée dès le retour réseau.',
        'Génération directe de rapports conformes aux trames PDF, Word et Excel (JSA, Q18, Q19).',
        'Architecture anonymisée : noms de sites clients et données sensibles volontairement masqués.',
      ],
      en: [
        'Full offline field capture with deferred synchronization once connectivity resumes.',
        'Automated PDF, Word, and Excel report export matching JSA, Q18, and Q19 templates.',
        'Anonymized showcase: client facility names and confidential data intentionally masked.',
      ],
    },
    tags: ['Flutter', 'FastAPI', 'Gemini API', 'Cloudflare R2'],
    hasCaseStudy: true,
  },
  {
    id: 'socadel-gis',
    title: {
      fr: 'Chaîne SIG SOCAD’EL',
      en: 'SOCAD’EL GIS Pipeline',
    },
    category: 'web',
    categoryLabel: {
      fr: 'Web · SIG',
      en: 'Web · GIS',
    },
    roleContext: {
      fr: 'Projet d’entreprise · Kamer Engineering Solution',
      en: 'Company project · Kamer Engineering Solution',
    },
    tier: 'featured',
    roleBadge: {
      fr: 'Projet d’entreprise',
      en: 'Company project',
    },
    statusBadge: {
      fr: 'En production',
      en: 'In production',
    },
    statusTone: 'production',
    summary: {
      fr: 'Chaîne de collecte et d’intégration géospatiale pour le suivi de réseaux électriques sur le projet SOCAD’EL.',
      en: 'Geospatial data collection and integration pipeline for electrical network monitoring on the SOCAD’EL project.',
    },
    problemSolution: {
      fr: 'Relier les relevés terrain KoboCollect aux couches cartographiques ESRI et GeoJSON avec validation et stockage spatial PostGIS.',
      en: 'Connect KoboCollect field surveys to ESRI and GeoJSON map layers with validation and PostGIS spatial storage.',
    },
    resultSummary: {
      fr: 'Centralisation des données géolocalisées terrain pour les équipes d’ingénierie et de contrôle.',
      en: 'Centralized geolocated field data for engineering and supervision teams.',
    },
    problemStatement: {
      fr: 'Les relevés collectés sur le terrain devaient être contrôlés, nettoyés et convertis pour alimenter les couches cartographiques de suivi des réseaux électriques.',
      en: 'Survey points collected in the field needed validation, cleansing, and conversion to feed electrical network monitoring map layers.',
    },
    architectureNotes: {
      fr: 'Composants web et scripts de traitement reliant les formulaires mobiles KoboCollect aux bases PostgreSQL/PostGIS, avec export et affichage compatibles ESRI et GeoJSON.',
      en: 'Web components and spatial processing modules linking KoboCollect mobile forms to PostgreSQL/PostGIS tables with ESRI and GeoJSON interoperability.',
    },
    highlights: {
      fr: [
        'Intégration de bout en bout entre collecte mobile KoboCollect et base géospatiale PostGIS.',
        'Compatibilité avec les formats SIG standards ESRI et GeoJSON.',
        'Fiabilisation et centralisation des coordonnées et attributs techniques relevés sur site.',
      ],
      en: [
        'End-to-end integration from KoboCollect mobile surveys to PostgreSQL/PostGIS.',
        'Interoperability with standard ESRI and GeoJSON spatial layers.',
        'Centralized validation of coordinates and electrical equipment attributes.',
      ],
    },
    tags: ['PostGIS', 'KoboCollect', 'ESRI', 'GeoJSON'],
    hasCaseStudy: true,
  },
  {
    id: 'momokash',
    title: {
      fr: 'MomoKash Mobile',
      en: 'MomoKash Mobile',
    },
    category: 'mobile',
    categoryLabel: {
      fr: 'Mobile · Fintech',
      en: 'Mobile · Fintech',
    },
    roleContext: {
      fr: 'Projet d’entreprise · Credix.cam SA',
      en: 'Company project · Credix.cam SA',
    },
    tier: 'compact',
    roleBadge: {
      fr: 'Projet d’entreprise',
      en: 'Company project',
    },
    statusBadge: {
      fr: 'Prototype',
      en: 'Prototype',
    },
    statusTone: 'prototype',
    summary: {
      fr: 'Application mobile de micro-crédit remplaçant le parcours USSD de Credix.cam SA, avec gestion des sessions sous Redis.',
      en: 'Mobile micro-lending application replacing Credix.cam SA’s legacy USSD channel, with Redis session management.',
    },
    problemStatement: {
      fr: 'Les parcours USSD créaient des coupures fréquentes et une expérience limitée lors des demandes de micro-crédit.',
      en: 'Legacy USSD menus caused session timeouts and constrained mobile micro-lending workflows.',
    },
    architectureNotes: {
      fr: 'Application mobile cross-platform Flutter reliée à un service backend Spring Boot utilisant Redis pour stocker l’état temporaire des sessions et validations.',
      en: 'Cross-platform Flutter client backed by a Spring Boot service using Redis for temporary session state and validation flows.',
    },
    highlights: {
      fr: [
        'Migration complète des écrans USSD vers une interface mobile Flutter.',
        'Stockage des sessions temporaires dans Redis et tests unitaires/d’intégration.',
      ],
      en: [
        'Full migration of legacy USSD menus into a cross-platform Flutter app.',
        'Redis session management paired with unit and integration tests.',
      ],
    },
    tags: ['Flutter', 'Spring Boot', 'Redis', 'REST'],
    hasCaseStudy: true,
    videoUrl: 'https://youtu.be/hyJJLx7mCCU',
  },
  {
    id: 'taillorpro',
    title: {
      fr: 'TaillorPro',
      en: 'TaillorPro',
    },
    category: 'mobile',
    categoryLabel: {
      fr: 'Mobile · Offline-First',
      en: 'Mobile · Offline-First',
    },
    roleContext: {
      fr: 'Projet personnel · Flutter & Firebase',
      en: 'Personal project · Flutter & Firebase',
    },
    tier: 'compact',
    roleBadge: {
      fr: 'Auteur',
      en: 'Author',
    },
    statusBadge: {
      fr: 'Prototype',
      en: 'Prototype',
    },
    statusTone: 'prototype',
    summary: {
      fr: 'Application mobile offline-first pour ateliers de couture : mesures clients, commandes, paiements et rappels.',
      en: 'Offline-first mobile app for tailoring workshops: client measurements, orders, payments, and reminders.',
    },
    problemStatement: {
      fr: 'Permettre aux ateliers de couture d’enregistrer mesures, commandes et paiements même sans connexion Internet permanente.',
      en: 'Enable tailoring workshops to record measurements, orders, and payments reliably without constant connectivity.',
    },
    architectureNotes: {
      fr: 'Application Flutter conçue autour d’un fonctionnement hors ligne avec synchronisation Firebase, support multilingue et notifications instantanées.',
      en: 'Flutter app built for offline usage with Firebase sync, localization support, and instant reminders.',
    },
    highlights: {
      fr: [
        'Gestion hors connexion des fiches clients, mesures, commandes et paiements.',
        'Notifications instantanées de rappel et support multilingue.',
      ],
      en: [
        'Offline management of customer measurements, orders, and payment balances.',
        'Instant deadline notifications and multilingual UI.',
      ],
    },
    tags: ['Flutter', 'Dart', 'Firebase'],
    hasCaseStudy: true,
    codeUrl: 'https://github.com/AndelsonTeufack/tailor_pro_app',
  },
  {
    id: 'mulema',
    title: {
      fr: 'MULEMA',
      en: 'MULEMA',
    },
    category: 'mobile',
    categoryLabel: {
      fr: 'Play Store · Contributeur',
      en: 'Play Store · Contributor',
    },
    roleContext: {
      fr: 'Contributeur bénévole V1 & V2 · Google Play Store',
      en: 'Volunteer contributor V1 & V2 · Google Play Store',
    },
    tier: 'published',
    roleBadge: {
      fr: 'Contributeur',
      en: 'Contributor',
    },
    statusBadge: {
      fr: 'Play Store',
      en: 'Play Store',
    },
    statusTone: 'playstore',
    summary: {
      fr: 'Application d’apprentissage des langues nationales camerounaises : corrections de bugs sur la V1 et participation bénévole à la V2.',
      en: 'Cameroonian national language learning app: V1 bug fixes and volunteer contribution to the V2 launch.',
    },
    problemStatement: {
      fr: 'Stabiliser l’application en production sur Play Store et appuyer la sortie de la deuxième version.',
      en: 'Stabilize the live Play Store application and support the engineering delivery of V2.',
    },
    architectureNotes: {
      fr: 'Maintenance corrective sur la V1 puis implémentation de fonctionnalités dans le cadre du lancement de la V2.',
      en: 'Corrective bug resolution on V1 followed by collaborative feature contributions for the V2 release.',
    },
    highlights: {
      fr: [
        'Correction de bugs sur la V1 en production.',
        'Participation bénévole au développement et lancement de la V2 sur Google Play Store.',
      ],
      en: [
        'Resolved production bugs on V1.',
        'Volunteer engineering contribution to the V2 Google Play Store launch.',
      ],
    },
    tags: ['Flutter', 'Dart', 'REST'],
    hasCaseStudy: false,
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mulema.app&hl=fr',
  },
  {
    id: 'shikaku',
    title: {
      fr: 'Shikaku',
      en: 'Shikaku',
    },
    category: 'mobile',
    categoryLabel: {
      fr: 'Play Store · Contributeur',
      en: 'Play Store · Contributor',
    },
    roleContext: {
      fr: 'Contributeur analyse, tests & déploiement · Google Play Store',
      en: 'Contributor (analysis, QA & release) · Google Play Store',
    },
    tier: 'published',
    roleBadge: {
      fr: 'Contributeur',
      en: 'Contributor',
    },
    statusBadge: {
      fr: 'Play Store',
      en: 'Play Store',
    },
    statusTone: 'playstore',
    summary: {
      fr: 'Jeu mobile de logique multijoueur en ligne et en local : participation à l’analyse, aux tests et à la publication Play Store.',
      en: 'Online and local multiplayer logic game: contributed to analysis, QA testing, and Play Store release.',
    },
    problemStatement: {
      fr: 'Proposer un jeu de puzzle fluide jouable à deux en local comme en ligne sur mobile.',
      en: 'Deliver a responsive puzzle game supporting both online and local two-player sessions.',
    },
    architectureNotes: {
      fr: 'Client Flutter/Dart avec synchronisation multijoueur via Firebase et phases de tests avant mise en ligne.',
      en: 'Flutter/Dart client using Firebase for multiplayer sync, tested prior to Play Store deployment.',
    },
    highlights: {
      fr: [
        'Participation à l’analyse et à la conception des modes multijoueurs.',
        'Contribution aux phases de test, au site de présentation et au déploiement sur Google Play Store.',
      ],
      en: [
        'Participated in game mode analysis and design.',
        'Contributed to QA testing, showcase landing page, and Google Play Store release.',
      ],
    },
    tags: ['Flutter', 'Dart', 'Firebase'],
    hasCaseStudy: false,
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.shikaku.jeu_carre',
    liveUrl: 'https://shikaku-site.vercel.app/',
  },
  {
    id: 'vote-iai',
    title: {
      fr: 'Vote IAI',
      en: 'Vote IAI',
    },
    category: 'backend',
    categoryLabel: {
      fr: 'Académique · Backend',
      en: 'Academic · Backend',
    },
    roleContext: {
      fr: 'Auteur · Spring Boot & Campay',
      en: 'Author · Spring Boot & Campay',
    },
    tier: 'other',
    roleBadge: {
      fr: 'Auteur',
      en: 'Author',
    },
    statusBadge: {
      fr: 'Académique',
      en: 'Academic',
    },
    statusTone: 'prototype',
    summary: {
      fr: 'Plateforme web de vote par paiement électronique intégrant l’API Mobile Money Campay.',
      en: 'Electronic paid-voting web platform integrating the Campay Mobile Money API.',
    },
    problemStatement: {
      fr: 'Enregistrer des votes payants via Mobile Money avec validation des paiements côté serveur.',
      en: 'Process paid votes via Mobile Money with server-side payment callback validation.',
    },
    architectureNotes: {
      fr: 'API REST Spring Boot connectée à la passerelle de paiement Campay.',
      en: 'Spring Boot REST backend integrated with the Campay payment gateway.',
    },
    highlights: {
      fr: [
        'Conception de la plateforme web de vote par paiement.',
        'Intégration de la solution Campay sous Spring Boot.',
      ],
      en: [
        'Built the paid electronic voting web platform.',
        'Integrated Campay Mobile Money callbacks in Spring Boot.',
      ],
    },
    tags: ['Spring Boot', 'Java', 'API Campay'],
    hasCaseStudy: false,
    codeUrl: 'https://github.com/AndelsonTeufack/sponsorship-IAI-Douala',
  },
  {
    id: 'rental-desktop',
    title: {
      fr: 'Gestion locative',
      en: 'Rental Property Manager',
    },
    category: 'automation',
    categoryLabel: {
      fr: 'Desktop · Python',
      en: 'Desktop · Python',
    },
    roleContext: {
      fr: 'Auteur · Application desktop PyQt',
      en: 'Author · PyQt desktop app',
    },
    tier: 'other',
    roleBadge: {
      fr: 'Auteur',
      en: 'Author',
    },
    statusBadge: {
      fr: 'Prototype',
      en: 'Prototype',
    },
    statusTone: 'prototype',
    summary: {
      fr: 'Application desktop de suivi des logements, disponibilités, états de paiement et relances automatiques.',
      en: 'Desktop application tracking housing availability, rent payments, and automated reminders.',
    },
    problemStatement: {
      fr: 'Centraliser le suivi des loyers, occupants et alertes de paiement dans une interface desktop locale.',
      en: 'Centralize unit availability, tenant payment statuses, and automated alerts in a local desktop UI.',
    },
    architectureNotes: {
      fr: 'Interface graphique développée en Python avec PyQt.',
      en: 'Graphical desktop interface built in Python with PyQt.',
    },
    highlights: {
      fr: [
        'Suivi des disponibilités, logements, occupants et états de paiement.',
        'Notifications et relances automatiques via interface PyQt.',
      ],
      en: [
        'Tracking of units, occupancy, and rent payment status.',
        'Automated alerts built inside a Python PyQt interface.',
      ],
    },
    tags: ['Python', 'PyQt'],
    hasCaseStudy: false,
    codeUrl: 'https://github.com/AndelsonTeufack/BuildingManagement',
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'mobile',
    title: {
      fr: 'Mobile',
      en: 'Mobile',
    },
    primary: ['Flutter', 'Dart', 'Clean Architecture'],
    secondary: ['Hive', 'Firebase', 'Android (Kotlin/Java)', 'BluetoothSockets'],
  },
  {
    id: 'web',
    title: {
      fr: 'Web',
      en: 'Web',
    },
    primary: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    secondary: ['JavaScript', 'HTML5 / CSS3'],
  },
  {
    id: 'backend-api',
    title: {
      fr: 'Back-end & API',
      en: 'Back-end & API',
    },
    primary: ['FastAPI', 'Spring Boot', 'Python', 'Java', 'REST'],
    secondary: ['Node.js / Express', 'WebSockets'],
  },
  {
    id: 'data-gis',
    title: {
      fr: 'Données & SIG',
      en: 'Data & GIS',
    },
    primary: ['PostgreSQL / PostGIS', 'MySQL', 'Redis'],
    secondary: ['MongoDB', 'KoboCollect', 'ESRI', 'GeoJSON'],
  },
  {
    id: 'security-arch',
    title: {
      fr: 'Sécurité & architecture',
      en: 'Security & architecture',
    },
    primary: ['JWT', 'RBAC', 'Spring Security'],
    secondary: ['Microservices', 'UML / Merise', 'JUnit / Pytest'],
  },
  {
    id: 'devops-ai-tools',
    title: {
      fr: 'DevOps, IA & outils',
      en: 'DevOps, AI & tools',
    },
    primary: ['Docker', 'Cloudflare R2', 'Gemini API', 'Git'],
    secondary: ['GitHub Actions', 'n8n', 'Odoo', 'Jira'],
  },
]

export const SKILL_NOTIONS: string[] = [
  'Kafka',
  'RabbitMQ',
  'Django',
  'Flask',
  'OAuth2',
  'Power BI',
  'C/C++',
]

export const SOFT_SKILLS: BilingualList = {
  fr: [
    'Encadrement et mentorat de +15 étudiants en génie logiciel (IAI Douala)',
    'Supervision des stagiaires sur les projets de digitalisation (Kamer Engineering Solution)',
    'Promotion de stagiaire à responsable de la digitalisation en 6 mois (KES)',
  ],
  en: [
    'Mentored and coached 15+ software engineering students (IAI Douala)',
    'Supervised interns on inspection digitalization projects (Kamer Engineering Solution)',
    'Promoted from intern to Head of Inspection Digitalization in 6 months (KES)',
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
    name: { fr: 'Français', en: 'French' },
    level: { fr: 'Natif', en: 'Native' },
    detail: { fr: 'Langue de travail principale', en: 'Primary working language' },
  },
  {
    name: { fr: 'Anglais', en: 'English' },
    level: { fr: 'Niveau C1', en: 'C1 Level' },
    detail: { fr: 'Communication professionnelle (oral, écrit & technique)', en: 'Professional working proficiency' },
  },
  {
    name: { fr: 'Yemba', en: 'Yemba' },
    level: { fr: 'Natif', en: 'Native' },
    detail: { fr: 'Langue nationale (Ouest Cameroun)', en: 'Cameroonian national language' },
  },
]

export const INTERESTS: BilingualList = {
  fr: ['Lecture', 'Jeux de stratégie (échecs, dames et scrabble)', 'Football', 'Billard'],
  en: ['Reading', 'Strategy games (chess, checkers, scrabble)', 'Football', 'Billiards'],
}
