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
  type: BilingualText
  domain: BilingualText
  isCurrent?: boolean
  summary: BilingualText
  keyAchievements: BilingualList
  caseStudy: {
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
    company: 'KAMER ENGINEERING SOLUTION',
    role: {
      fr: 'Développeur Full Stack / Responsable de la digitalisation des inspections',
      en: 'Full-Stack Developer / Head of Inspection Digitalization',
    },
    period: {
      fr: 'Septembre 2026 - présent',
      en: 'September 2026 - Present',
    },
    location: {
      fr: 'Douala, Cameroun',
      en: 'Douala, Cameroon',
    },
    type: {
      fr: 'Poste actuel · Pilotage & Ingénierie',
      en: 'Current Role · Engineering Lead',
    },
    domain: {
      fr: 'Ingénierie Industrielle, Inspection Technique & Digitalisation',
      en: 'Industrial Engineering, Technical Inspection & Digitalization',
    },
    isCurrent: true,
    summary: {
      fr: 'Pilotage technique de la digitalisation des inspections, supervision des stagiaires et conception d’écosystèmes logiciels critiques (IoT Bluetooth, maîtrise d’œuvre, ERP Odoo).',
      en: 'Leading technical digitalization of field inspections, supervising engineering interns, and architecting mission-critical software (Bluetooth IoT, project management, Odoo ERP).',
    },
    keyAchievements: {
      fr: [
        'Supervision technique, accompagnement et répartition des tâches des stagiaires sur les projets de digitalisation.',
        'Conception d’une app mobile BluetoothSockets interfacée aux appareils d’essais de pression pour la centralisation des mesures.',
        'Architecture d’une plateforme web/mobile de maîtrise d’œuvre et d’un ERP interne connecté à Odoo avec portail client.',
      ],
      en: [
        'Technical supervision, mentoring, and task allocation for interns across digitalization workstreams.',
        'Designed a BluetoothSockets mobile app communicating with pressure-testing devices to capture and centralize measurement data.',
        'Architected a web/mobile project supervision platform and an Odoo-connected internal ERP with external client access.',
      ],
    },
    caseStudy: {
      context: {
        fr: 'À l’issue de mon stage chez Kamer Engineering Solution, j’ai pris la responsabilité de la digitalisation des inspections. L’enjeu consiste à fiabiliser les outils déployés sur le terrain, orchestrer de nouveaux produits connectés aux équipements physiques et encadrer l’équipe de stagiaires.',
        en: 'Following my internship at Kamer Engineering Solution, I stepped into the Head of Inspection Digitalization role—ensuring continuous reliability of field tools, engineering hardware-connected mobile products, and supervising incoming interns.',
      },
      workstreams: [
        {
          title: {
            fr: 'Maintenance continue & Fiabilisation des applications terrain',
            en: 'Continuous Field Reliability & Release Management',
          },
          description: {
            fr: 'Analyse et correction constante des anomalies remontées lors des inspections sur site, intégration des retours métier des inspecteurs et déploiement régulier des mises à jour applicatives.',
            en: 'Continuous root-cause analysis and resolution of field inspection anomalies, incorporating inspector feedback into regular production releases.',
          },
          deliverables: {
            fr: [
              'Cycle court de correction d’anomalies terrain et déploiement continu des versions.',
              'Amélioration continue de l’ergonomie pour les équipes d’inspection.',
            ],
            en: [
              'Rapid field bug-fix cycle and continuous application updates.',
              'Ongoing UX refinement driven by field inspector telemetry.',
            ],
          },
        },
        {
          title: {
            fr: 'Application Mobile IoT Bluetooth pour Appareils d’Essais de Pression',
            en: 'Bluetooth Telemetry Mobile App for Pressure-Testing Devices',
          },
          description: {
            fr: 'Analyse et conception d’une application mobile dédiée à la communication Bluetooth avec les appareils d’essais de pression pour recevoir, centraliser et exploiter les données de mesure.',
            en: 'End-to-end analysis and engineering of a mobile application using Bluetooth communication with pressure-testing equipment to receive, centralize, and process live measurement streams.',
          },
          deliverables: {
            fr: [
              'Module de communication BluetoothSockets avec acquisition des mesures terrain.',
              'Centralisation structurée et exploitation directe des séries de mesures.',
            ],
            en: [
              'BluetoothSockets communication layer for real-time instrument data acquisition.',
              'Structured storage and operational processing of test measurements.',
            ],
          },
        },
        {
          title: {
            fr: 'Plateforme Web & Mobile de Gestion de Maîtrise d’Œuvre',
            en: 'Web & Mobile Project Supervision (Maîtrise d’Œuvre) Platform',
          },
          description: {
            fr: 'Analyse et conception d’une plateforme multi-acteurs centralisant les échanges, le suivi des évolutions de chantier, la maîtrise des dépenses et la planification globale des projets.',
            en: 'Analysis and design of a cross-platform tool uniting project stakeholders, centralizing communications, tracking progress milestones, budgets/expenses, and project schedules.',
          },
          deliverables: {
            fr: [
              'Espaces multi-acteurs avec traçabilité des échanges et des évolutions.',
              'Modules de suivi budgétaire, dépenses et planification de projets.',
            ],
            en: [
              'Multi-stakeholder collaboration workflows and change tracking.',
              'Expense monitoring and project scheduling modules.',
            ],
          },
        },
        {
          title: {
            fr: 'ERP Interne Connecté à Odoo & Portail Client Externe',
            en: 'Odoo-Integrated Internal ERP & External Client Access',
          },
          description: {
            fr: 'Analyse et conception d’un ERP interne interconnecté à Odoo pour centraliser et optimiser les processus métiers de l’entreprise tout en offrant un accès sécurisé externe aux clients.',
            en: 'Architecture of an internal ERP synchronized with Odoo to streamline core company workflows while exposing a secure external portal for clients.',
          },
          deliverables: {
            fr: [
              'Connecteurs et synchronisation bidirectionnelle des processus métiers avec Odoo.',
              'Portail d’accès client externe sécurisé.',
            ],
            en: [
              'Bidirectional business workflow integration with Odoo.',
              'Secure external client portal for operational visibility.',
            ],
          },
        },
        {
          title: {
            fr: 'Encadrement Technique & Gestion du Parc IT',
            en: 'Technical Supervision & IT Infrastructure Support',
          },
          description: {
            fr: 'Supervision, accompagnement technique et répartition des tâches des stagiaires sur les projets de digitalisation, accompagnés d’une assistance informatique continue et gestion du parc interne.',
            en: 'Technical mentoring and task distribution across digitalization interns, alongside ongoing IT support and internal hardware/resource administration.',
          },
          deliverables: {
            fr: [
              'Pilotage quotidien et revues techniques auprès des stagiaires.',
              'Administration et continuité de service du parc informatique interne.',
            ],
            en: [
              'Daily technical guidance and task management for interns.',
              'Administration and support of internal IT assets.',
            ],
          },
        },
      ],
      impact: {
        fr: [
          'Passage du statut de stagiaire à responsable technique des projets de digitalisation.',
          'Fiabilisation de l’acquisition de mesures physiques par liaison Bluetooth directe.',
          'Centralisation des opérations internes, clients et projets de maîtrise d’œuvre.',
        ],
        en: [
          'Promoted from intern to technical lead overseeing inspection digitalization.',
          'Eliminated manual transcription errors via direct Bluetooth measurement capture.',
          'Unified internal operations, external client tracking, and engineering supervision.',
        ],
      },
    },
    technologies: [
      'Flutter',
      'BluetoothSockets',
      'React / Next.js',
      'Spring Boot',
      'Python / FastAPI',
      'Odoo ERP',
      'PostgreSQL',
      'Cloudflare R2',
    ],
  },
  {
    id: 'kes-intern',
    company: 'KAMER ENGINEERING SOLUTION',
    role: {
      fr: 'Développeur Full Stack (Mobile & Web) - Stagiaire',
      en: 'Full-Stack Developer Intern (Mobile & Web)',
    },
    period: {
      fr: 'Mars 2026 - Septembre 2026',
      en: 'March 2026 - September 2026',
    },
    location: {
      fr: 'Douala, Cameroun',
      en: 'Douala, Cameroon',
    },
    type: {
      fr: 'Stage Ingénierie · Full-Stack & SIG',
      en: 'Engineering Internship · Full-Stack & GIS',
    },
    domain: {
      fr: 'Inspections Industrielles, IA, Géomatique (SIG) & Automatisation',
      en: 'Industrial Inspection, AI, Geomatics (GIS) & Automation',
    },
    summary: {
      fr: 'Conception de l’écosystème d’inspection offline-first assisté par IA, plateforme collaborative QR Code/Cloudflare R2, ingénierie SIG pour la SOCAD’EL (KoboCollect/ESRI) et automatisation n8n.',
      en: 'Built the AI-assisted offline-first inspection ecosystem, collaborative QR Code/Cloudflare R2 web platform, GIS engineering for SOCAD’EL (KoboCollect/ESRI), and n8n automation.',
    },
    keyAchievements: {
      fr: [
        'Apps mobiles offline-first assistées par IA générant automatiquement des rapports PDF, Word et Excel (JSA, Q18, Q19).',
        'Plateforme web multi-inspecteurs avec accès équipements par QR Code et mise à jour OTA via Cloudflare R2.',
        'Composants Web/Mobile/SIG pour la SOCAD’EL et adaptation KoboCollect (carte ESRI, traçage réseau, GeoJSON).',
      ],
      en: [
        'AI-assisted offline-first mobile apps automating PDF, Word, and Excel verification reports (JSA, Q18, Q19).',
        'Collaborative multi-inspector web platform with QR Code equipment lookup and Cloudflare R2 OTA updates.',
        'Web/Mobile/GIS components for SOCAD’EL and customized KoboCollect (ESRI mapping, power grid tracing, GeoJSON export).',
      ],
    },
    caseStudy: {
      context: {
        fr: 'Stage intensif de 6 mois au cœur de la transformation numérique des activités d’audit électrique, d’inspection technique et de cartographie d’actifs énergétiques au Cameroun.',
        en: 'Six-month engineering internship driving the digital transformation of electrical audits, industrial inspections, and national power-grid asset mapping in Cameroon.',
      },
      workstreams: [
        {
          title: {
            fr: 'Applications Mobiles Offline-First Assistées par IA & Rapports Normés',
            en: 'AI-Assisted Offline-First Inspection Apps & Automated Reporting',
          },
          description: {
            fr: 'Analyse et conception d’applications couvrant les inspections électriques, thermographiques, d’éclairage, pression, levage, sécurité incendie, bilan de puissance et ascenseurs, avec génération automatisée de rapports PDF, Word et Excel incluant les analyses JSA (Job Safety Analysis), Q18 et Q19.',
            en: 'Architected offline-first mobile apps covering electrical, thermographic, lighting, pressure, lifting, fire safety, power balance, and elevator inspections, generating standardized PDF, Word, and Excel reports (JSA, Q18, Q19).',
          },
          deliverables: {
            fr: [
              'Moteur de persistance hors-ligne, sauvegarde locale/cloud et partage de missions entre inspecteurs.',
              'Assistance IA (LLM Gemini) et génération documentaire multi-formats automatisée.',
            ],
            en: [
              'Offline persistence, local/online sync, and inspector-to-inspector mission handoff.',
              'LLM-assisted analysis and automated PDF/Word/Excel report generation.',
            ],
          },
        },
        {
          title: {
            fr: 'Plateforme Web Multi-Inspections, QR Code & Cloudflare R2',
            en: 'Multi-Inspection Web Platform, QR Code & Cloudflare R2 OTA',
          },
          description: {
            fr: 'Conception de la plateforme web interconnectée permettant la gestion de missions multi-inspections, le travail collaboratif simultané de plusieurs inspecteurs, l’accès rapide aux équipements par QR Code et la mise à jour automatique via Cloudflare R2.',
            en: 'Built an interconnected web platform supporting multi-inspection missions, simultaneous collaborative inspection, QR Code asset identification, secure backups, and automatic app updates via Cloudflare R2.',
          },
          deliverables: {
            fr: [
              'Workflow collaboratif multi-inspecteurs synchronisé avec les terminaux mobiles.',
              'Système de distribution et mise à jour automatique hébergé sur Cloudflare R2.',
            ],
            en: [
              'Collaborative multi-inspector synchronization across web and mobile.',
              'Automated binary/asset update distribution via Cloudflare R2.',
            ],
          },
        },
        {
          title: {
            fr: 'Collecte & Valorisation SIG pour la SOCAD’EL (KoboCollect / ESRI)',
            en: 'GIS Asset Collection & Mapping for SOCAD’EL (KoboCollect / ESRI)',
          },
          description: {
            fr: 'Contribution au Système d’Information Électrique du Cameroun (Web, Mobile, SIG) et adaptation de l’outil open source KoboCollect : repositionnement cartographique ESRI, traçage automatique des réseaux électriques, historisation et export GeoJSON.',
            en: 'Contributed Web, Mobile, and GIS modules for Cameroon’s Electrical Information System, extending open-source KoboCollect with ESRI coordinate repositioning, automated grid tracing, submission history, and GeoJSON export.',
          },
          deliverables: {
            fr: [
              'Fork personnalisé de KoboCollect adapté aux contraintes géomatiques terrain.',
              'Pipeline de traitement et exportation normalisée au format GeoJSON.',
            ],
            en: [
              'Customized KoboCollect mobile client with ESRI map repositioning.',
              'Automated electrical network tracing and GeoJSON export pipeline.',
            ],
          },
        },
        {
          title: {
            fr: 'Qualification Automatique d’Emails & Campagnes n8n',
            en: 'Email Qualification Engine & n8n Campaign Automation',
          },
          description: {
            fr: 'Conception d’une application web interne de filtrage et qualification d’adresses e-mail avec classification automatique (Soft Bounce, Hard Bounce, Outbound) couplée à l’automatisation de newsletters via n8n.',
            en: 'Designed an internal web application for email verification and automatic classification (Soft Bounce, Hard Bounce, Outbound) integrated with n8n campaign and newsletter automation.',
          },
          deliverables: {
            fr: [
              'Classificateur automatique d’état de délivrabilité email.',
              'Workflows automatisés de campagnes et newsletters sous n8n.',
            ],
            en: [
              'Automated email bounce and deliverability classifier.',
              'Scheduled communication workflows orchestrated with n8n.',
            ],
          },
        },
      ],
      impact: {
        fr: [
          'Continuité opérationnelle garantie à 100 % sur des sites industriels sans connectivité.',
          'Réduction drastique du temps de rédaction des rapports réglementaires JSA, Q18 et Q19.',
          'Exploitation cartographique fiable des actifs du réseau électrique SOCAD’EL.',
        ],
        en: [
          'Guaranteed 100% operational continuity across zero-connectivity industrial sites.',
          'Cut regulatory JSA, Q18, and Q19 report generation time from hours to minutes.',
          'Delivered geo-verified electrical network datasets for SOCAD’EL.',
        ],
      },
    },
    technologies: [
      'Flutter',
      'Gemini API',
      'Cloudflare R2',
      'KoboCollect',
      'ESRI / GeoJSON',
      'PostGIS',
      'React / Next.js',
      'n8n',
      'Python',
    ],
  },
  {
    id: 'green-power-2',
    company: 'GREEN POWER CAMEROON',
    role: {
      fr: 'Analyste Développeur de solutions IT - Stagiaire',
      en: 'IT Solutions Analysis & Development Intern',
    },
    period: {
      fr: 'Mai 2025 - Novembre 2025',
      en: 'May 2025 - November 2025',
    },
    location: {
      fr: 'Yaoundé, Cameroun',
      en: 'Yaoundé, Cameroon',
    },
    type: {
      fr: 'Stage Ingénierie · Web & Data',
      en: 'Engineering Internship · Web & Data',
    },
    domain: {
      fr: 'GMAO, Industrialisation Logicielle & Reporting Automatisé',
      en: 'CMMS (GMAO), Software Industrialization & Automated Reporting',
    },
    summary: {
      fr: 'Conception et déploiement d’une application web GMAO interne sur MySQL, sécurisée par tests unitaires/non-régression et complétée par des pipelines Python de reporting.',
      en: 'Designed and delivered an internal web CMMS (GMAO) platform on MySQL, backed by automated unit/regression tests and Python reporting pipelines.',
    },
    keyAchievements: {
      fr: [
        'Conception et développement complet de l’application web interne de gestion de maintenance (GMAO).',
        'Modélisation relationnelle MySQL et implémentation des briques métiers critiques.',
        'Automatisation de l’extraction et agrégation des données de reporting via scripts Python + tests unitaires.',
      ],
      en: [
        'Designed and built an internal web application for maintenance operations management (GMAO).',
        'Modeled MySQL relational schemas and implemented core business modules.',
        'Automated reporting extraction/aggregation with Python scripts alongside unit and non-regression test suites.',
      ],
    },
    caseStudy: {
      context: {
        fr: 'Second stage chez Green Power Cameroon dédié à la transformation du suivi opérationnel de maintenance vers une plateforme web structurée et testable.',
        en: 'Second internship at Green Power Cameroon focused on replacing manual maintenance tracking with a structured, tested internal web platform.',
      },
      workstreams: [
        {
          title: {
            fr: 'Application Web de Maintenance (GMAO) & Modélisation MySQL',
            en: 'Internal GMAO Web Platform & MySQL Architecture',
          },
          description: {
            fr: 'Digitalisation des ordres d’intervention, suivi des opérations de maintenance, structuration des données et conception du schéma relationnel MySQL.',
            en: 'Digitalized maintenance workflows, modeled relational MySQL schemas, and developed business logic for operational tracking.',
          },
          deliverables: {
            fr: [
              'Base de données relationnelle MySQL normalisée et optimisée.',
              'Modules web complets de suivi opérationnel de la maintenance.',
            ],
            en: [
              'Normalized MySQL schema tailored for maintenance operations.',
              'End-to-end web modules for tracking technical interventions.',
            ],
          },
        },
        {
          title: {
            fr: 'Qualité Logicielle & Scripts Python d’Automatisation',
            en: 'Test Automation & Python Reporting Pipelines',
          },
          description: {
            fr: 'Rédaction de tests unitaires et de non-régression pour garantir la continuité de service, et création de scripts Python automatisant l’extraction et l’agrégation du reporting.',
            en: 'Implemented unit and non-regression testing to safeguard service continuity, plus Python scripts automating extraction and aggregation of reporting data.',
          },
          deliverables: {
            fr: [
              'Suites de tests unitaires et de non-régression.',
              'Chaîne automatisée d’extraction et agrégation de reporting en Python.',
            ],
            en: [
              'Unit and non-regression test suites.',
              'Automated Python ETL scripts for operational reporting.',
            ],
          },
        },
      ],
      impact: {
        fr: [
          'Industrialisation des chaînes internes de traitement et de reporting.',
          'Fiabilisation des mises en production grâce aux tests automatisés.',
        ],
        en: [
          'Industrialized internal data processing and reporting pipelines.',
          'Improved release stability through systematic automated testing.',
        ],
      },
    },
    technologies: ['Python', 'Pytest', 'MySQL', 'Web Full-Stack', 'GMAO', 'ETL Reporting'],
  },
  {
    id: 'iai-instructor',
    company: 'IAI (Centre de Douala)',
    role: {
      fr: 'Formateur & Mentor en Développement Web & Mobile',
      en: 'Technical Instructor & Mentor (Web & Mobile Engineering)',
    },
    period: {
      fr: 'Janvier 2025 - Mai 2025',
      en: 'January 2025 - May 2025',
    },
    location: {
      fr: 'Douala, Cameroun',
      en: 'Douala, Cameroon',
    },
    type: {
      fr: 'Enseignement & Mentorat Technique',
      en: 'Teaching & Technical Mentorship',
    },
    domain: {
      fr: 'Formation Supérieure en Génie Logiciel & Transmission',
      en: 'Software Engineering Education & Mentorship',
    },
    summary: {
      fr: 'Animation de cours et travaux pratiques intensifs en Web (React.js, JS) et Mobile (Flutter, Dart) avec accompagnement de +15 étudiants de 1ère et 2ème année.',
      en: 'Delivered intensive practical training in Web (React.js, JS) and Mobile (Flutter, Dart) engineering while mentoring 15+ 1st and 2nd-year software engineering students.',
    },
    keyAchievements: {
      fr: [
        'Animation de cours et TP intensifs en React.js, JavaScript, HTML5/CSS3 et Flutter/Dart.',
        'Mentorat et encadrement technique de +15 étudiants en génie logiciel sur les architectures propres.',
        'Préparation accélérée aux stages en entreprise, projets de fin d’études et bonnes pratiques Git/REST.',
      ],
      en: [
        'Led hands-on workshops in React.js, JavaScript, HTML5/CSS3, and Flutter/Dart for 1st & 2nd-year cohorts.',
        'Mentored 15+ software engineering students on software architecture and problem solving.',
        'Prepared students for corporate internships, capstone projects, Git workflows, and REST API integration.',
      ],
    },
    caseStudy: {
      context: {
        fr: 'Intervention pédagogique au Centre de Douala de l’Institut Africain d’Informatique (IAI) visant à combler le fossé entre la théorie académique et les exigences réelles des équipes d’ingénierie en entreprise.',
        en: 'Pedagogical engagement at IAI (Douala Campus) designed to bridge the gap between academic computer science and real-world software engineering standards.',
      },
      workstreams: [
        {
          title: {
            fr: 'Ateliers Intensifs Web & Mobile',
            en: 'Intensive Web & Mobile Engineering Workshops',
          },
          description: {
            fr: 'Conception et animation de séances pratiques couvrant React.js, JavaScript, HTML5/CSS3 côté web, ainsi que Flutter et Dart côté mobile.',
            en: 'Designed and taught practical labs covering React.js, JavaScript, HTML5/CSS3 on the web and Flutter/Dart for cross-platform mobile apps.',
          },
          deliverables: {
            fr: [
              'Travaux pratiques guidés de l’interface jusqu’à la consommation d’APIs REST.',
              'Ateliers dédiés au Clean Code et à la structuration modulaire.',
            ],
            en: [
              'End-to-end practical labs from UI composition to REST API integration.',
              'Clean Code and modular project structuring sessions.',
            ],
          },
        },
        {
          title: {
            fr: 'Mentorat Individuel & Préparation Professionnelle',
            en: 'Student Mentorship & Industry Readiness',
          },
          description: {
            fr: 'Suivi rapproché de +15 étudiants sur leurs projets professionnels de fin d’études, revues de code Git et préparation aux certifications et entretiens de stage.',
            en: 'Close mentoring of 15+ students on capstone projects, Git collaboration workflows, and preparation for internships and international certifications.',
          },
          deliverables: {
            fr: [
              'Revues de code et accompagnement architectural de projets étudiants.',
              'Sensibilisation aux standards Git et intégration d’APIs en équipe.',
            ],
            en: [
              'Hands-on code reviews and architectural coaching.',
              'Team Git workflow and API integration coaching.',
            ],
          },
        },
      ],
      impact: {
        fr: [
          'Montée en compétence rapide de +15 étudiants vers des standards professionnels.',
          'Renforcement des capacités de vulgarisation technique, leadership et revue de code.',
        ],
        en: [
          'Accelerated 15+ students toward production-grade development practices.',
          'Demonstrated technical leadership, pedagogy, and code review discipline.',
        ],
      },
    },
    technologies: ['React.js', 'JavaScript', 'HTML5 / CSS3', 'Flutter', 'Dart', 'Git', 'REST APIs', 'Clean Code'],
  },
  {
    id: 'green-power-1',
    company: 'GREEN POWER CAMEROON',
    role: {
      fr: 'Analyste Développeur de solutions IT - Stagiaire',
      en: 'IT Solutions Analysis & Development Intern',
    },
    period: {
      fr: 'Novembre 2024 - Mai 2025',
      en: 'November 2024 - May 2025',
    },
    location: {
      fr: 'Yaoundé, Cameroun',
      en: 'Yaoundé, Cameroon',
    },
    type: {
      fr: 'Stage · Analyse IT, Audit & Support N2',
      en: 'Internship · IT Analysis, Audit & L2 Support',
    },
    domain: {
      fr: 'Systèmes d’Information, Audit Infrastructure & Support N2',
      en: 'Information Systems, Infrastructure Audit & Level 2 Support',
    },
    summary: {
      fr: 'Rédaction de cahiers des charges, audit de performance et vulnérabilités (bases de données et réseau), gestion d’incidents niveau 2 et administration Windows / Microsoft 365.',
      en: 'Technical specification drafting, database and network performance/vulnerability audits, Level 2 incident resolution, and Windows / Microsoft 365 administration.',
    },
    keyAchievements: {
      fr: [
        'Analyse des besoins métiers et rédaction de cahiers des charges techniques pour la digitalisation.',
        'Diagnostic et audit des performances BDD/réseau avec identification des vulnérabilités.',
        'Résolution des incidents applicatifs de niveau 2 (N2), maintenance SI et administration Microsoft 365.',
      ],
      en: [
        'Business requirements gathering and technical specification drafting for internal digitalization.',
        'Database and network performance diagnostics with vulnerability analysis.',
        'Level 2 (N2) incident diagnostics/resolution, corrective SI maintenance, and Microsoft 365 administration.',
      ],
    },
    caseStudy: {
      context: {
        fr: 'Immersion au sein de la direction des systèmes d’information pour structurer l’expression des besoins, auditer la robustesse de l’infrastructure existante et assurer la continuité applicative.',
        en: 'Embedded within IT operations to formalize technical requirements, audit infrastructure bottlenecks/vulnerabilities, and maintain strategic applications.',
      },
      workstreams: [
        {
          title: {
            fr: 'Analyse Métier & Audits de Performance / Vulnérabilités',
            en: 'Requirements Engineering & Performance/Security Audits',
          },
          description: {
            fr: 'Recueil des exigences auprès des équipes opérationnelles, rédaction des spécifications techniques et conduite d’audits sur les bases de données et l’infrastructure réseau.',
            en: 'Gathered stakeholder requirements, authored technical specifications, and audited database and network performance and security posture.',
          },
          deliverables: {
            fr: [
              'Cahiers des charges techniques pour les projets d’optimisation.',
              'Rapports d’audit de performances et axes de remédiation sécurité.',
            ],
            en: [
              'Technical specification documents for process digitalization.',
              'Infrastructure performance and vulnerability assessment reports.',
            ],
          },
        },
        {
          title: {
            fr: 'Support Niveau 2 (N2), Maintenance SI & Microsoft 365',
            en: 'Level 2 Incident Management & Microsoft 365 Operations',
          },
          description: {
            fr: 'Diagnostic approfondi et résolution d’incidents applicatifs N2, maintenance corrective/évolutive du SI et exploitation professionnelle de Windows et Microsoft 365.',
            en: 'Deep diagnostics and resolution of Level 2 application incidents, corrective/evolutive SI maintenance, and administration of Windows and Microsoft 365.',
          },
          deliverables: {
            fr: [
              'Rétablissement rapide des services critiques lors d’incidents N2.',
              'Accompagnement technique proactif des utilisateurs.',
            ],
            en: [
              'Rapid restoration of critical business applications during L2 incidents.',
              'Proactive user support and Microsoft 365 administration.',
            ],
          },
        },
      ],
      impact: {
        fr: [
          'Amélioration de la visibilité sur les goulots d’étranglement réseau et BDD.',
          'Solidification de la double compétence Analyse IT / Développement.',
        ],
        en: [
          'Identified actionable database and network performance improvements.',
          'Strengthened hybrid IT Analyst and Software Engineer profile.',
        ],
      },
    },
    technologies: ['Audit BDD & Réseau', 'Cahier des charges', 'Support N2', 'Windows', 'Microsoft 365', 'Sécurité IT'],
  },
  {
    id: 'credix-mobile',
    company: 'CREDIX.CAM SA',
    role: {
      fr: 'Développeur mobile - Stagiaire',
      en: 'Mobile Development Intern',
    },
    period: {
      fr: 'Août 2024 - Octobre 2024',
      en: 'August 2024 - October 2024',
    },
    location: {
      fr: 'Yaoundé, Cameroun',
      en: 'Yaoundé, Cameroon',
    },
    type: {
      fr: 'Stage · Fintech Mobile & Redis',
      en: 'Internship · Mobile Fintech & Redis',
    },
    domain: {
      fr: 'Fintech, Migration USSD-to-Mobile & Orchestration Temps Réel',
      en: 'Fintech, USSD-to-Mobile Migration & Session Orchestration',
    },
    summary: {
      fr: 'Migration d’utilisateurs du canal USSD vers une application mobile native cross-platform, orchestrée par un service backend connecté au cache Redis et couverte par des tests.',
      en: 'Migrated users from legacy USSD channels to a cross-platform native mobile app backed by a dedicated Redis session-orchestration service and full test coverage.',
    },
    keyAchievements: {
      fr: [
        'Conception et développement d’une app mobile cross-platform remplaçant le parcours USSD.',
        'Mise en place d’un service backend dédié orchestrant les sessions et données temporaires via Redis.',
        'Élaboration de tests unitaires et d’intégration en collaboration avec les équipes backend/infra.',
      ],
      en: [
        'Built a cross-platform mobile application migrating users from USSD flows to a native mobile experience.',
        'Implemented a dedicated backend service orchestrating mobile exchanges with Redis cache for session management.',
        'Authored unit and integration tests in close alignment with backend and infrastructure teams.',
      ],
    },
    caseStudy: {
      context: {
        fr: 'Dans le cadre de la modernisation des services financiers digitaux de Credix.Cam SA (Momokash), l’objectif était d’offrir une alternative mobile ergonomique aux parcours USSD contraignants.',
        en: 'To modernize Credix.Cam SA’s financial services (Momokash), the team needed a fluid mobile experience replacing rigid USSD session menus without breaking stateful session continuity.',
      },
      workstreams: [
        {
          title: {
            fr: 'Migration USSD vers Application Mobile Cross-Platform',
            en: 'USSD-to-Mobile Cross-Platform Engineering',
          },
          description: {
            fr: 'Traduction des arbres décisionnels USSD en écrans mobiles natifs fluides avec gestion rigoureuse des états transitoires.',
            en: 'Transformed multi-step USSD menus into an intuitive cross-platform Flutter UI with resilient state management.',
          },
          deliverables: {
            fr: [
              'Parcours mobile complet fidèle aux règles métiers financières.',
              'Tests unitaires et d’intégration garantissant la robustesse applicative.',
            ],
            en: [
              'Complete mobile user flows matching financial business constraints.',
              'Unit and integration test suite validating edge cases.',
            ],
          },
        },
        {
          title: {
            fr: 'Service Backend d’Orchestration & Cache Redis',
            en: 'Backend Orchestration Service & Redis Caching',
          },
          description: {
            fr: 'Mise en place d’un service intermédiaire gérant les sessions temporaires et l’état des transactions via Redis pour minimiser la latence.',
            en: 'Developed a dedicated backend orchestration layer leveraging Redis to store high-frequency temporary transaction states and sessions.',
          },
          deliverables: {
            fr: [
              'Architecture d’orchestration API ↔ Redis à faible latence.',
              'Intégration continue coordonnée avec les équipes backend et infrastructure.',
            ],
            en: [
              'Low-latency API-to-Redis session orchestration.',
              'Seamless integration with core banking/infrastructure teams.',
            ],
          },
        },
      ],
      impact: {
        fr: [
          'Expérience utilisateur fluidifiée par rapport aux timeouts fréquents du canal USSD.',
          'Gestion performante et sécurisée des sessions temporaires sous Redis.',
        ],
        en: [
          'Replaced timeout-prone USSD sessions with a responsive native mobile flow.',
          'Delivered scalable, low-latency temporary state management via Redis.',
        ],
      },
    },
    technologies: ['Flutter', 'Dart', 'Spring Boot', 'Redis', 'APIs REST', 'Tests Unitaires & Intégration'],
  },
  {
    id: 'credix-web',
    company: 'CREDIX.CAM SA',
    role: {
      fr: 'Développeur web - Stagiaire',
      en: 'Web Development Intern',
    },
    period: {
      fr: 'Juillet 2023 - Septembre 2023',
      en: 'July 2023 - September 2023',
    },
    location: {
      fr: 'Yaoundé, Cameroun',
      en: 'Yaoundé, Cameroon',
    },
    type: {
      fr: 'Stage · Backend Fintech & Full-Stack RH',
      en: 'Internship · Fintech Backend & Full-Stack HR',
    },
    domain: {
      fr: 'Réconciliation Financière Automatisée & Sécurité Spring/React',
      en: 'Automated Financial Reconciliation & Spring/React Security',
    },
    summary: {
      fr: 'Développement d’un service planifié de réconciliation financière sur Momokash et conception d’une application fullstack RH (Spring Boot / React JS) sécurisée par JWT et Spring Security.',
      en: 'Built a scheduled transaction reconciliation service on Momokash and delivered a full-stack HR web app (Spring Boot / React JS) secured with JWT and Spring Security RBAC.',
    },
    keyAchievements: {
      fr: [
        'Service backend planifié sur Momokash détectant les transactions quotidiennes en échec et automatisant la réconciliation.',
        'Application fullstack Spring Boot / React JS dédiée à la gestion interne des ressources humaines.',
        'Sécurisation complète des endpoints REST via JWT et gestion fine des rôles/permissions (Spring Security).',
      ],
      en: [
        'Implemented a scheduled backend job on Momokash for automated detection of failed daily transactions and financial reconciliation.',
        'Designed and implemented an internal HR full-stack web app using Spring Boot and React JS.',
        'Secured REST endpoints via JWT authentication and Spring Security role-based authorization.',
      ],
    },
    caseStudy: {
      context: {
        fr: 'Premier stage en entreprise fintech avec une double mission critique : automatiser le contrôle de fiabilité des transactions sur la plateforme Momokash et doter l’entreprise d’un outil RH interne sécurisé.',
        en: 'First fintech engineering internship carrying two core deliverables: automating failed-transaction reconciliation on Momokash and building an internal HR management portal.',
      },
      workstreams: [
        {
          title: {
            fr: 'Réconciliation Financière Automatisée (Momokash)',
            en: 'Scheduled Financial Reconciliation Service (Momokash)',
          },
          description: {
            fr: 'Conception d’un service backend exécuté selon une planification stricte pour identifier quotidiennement les transactions en échec et déclencher les workflows de réconciliation.',
            en: 'Built a scheduled backend worker scanning daily transaction logs to flag failed operations and automate financial reconciliation.',
          },
          deliverables: {
            fr: [
              'Tâche planifiée automatisée de détection d’anomalies transactionnelles.',
              'Fiabilisation des rapprochements financiers quotidiens.',
            ],
            en: [
              'Automated scheduled job for failed transaction detection.',
              'Reliable daily financial reconciliation pipeline.',
            ],
          },
        },
        {
          title: {
            fr: 'Plateforme Fullstack RH (Spring Boot / React JS / Spring Security)',
            en: 'Full-Stack HR Application (Spring Boot / React JS / JWT)',
          },
          description: {
            fr: 'Conception de l’API REST Spring Boot, modélisation des données, développement du frontend React JS et sécurisation stricte par jetons JWT et contrôle d’accès basé sur les rôles.',
            en: 'Developed RESTful Spring Boot APIs, React JS frontend modules, and fine-grained endpoint protection using JWT and Spring Security RBAC.',
          },
          deliverables: {
            fr: [
              'Architecture API REST sécurisée par JWT et Spring Security.',
              'Interface React JS de gestion du personnel et des autorisations.',
            ],
            en: [
              'JWT-protected REST backend with role/permission matrices.',
              'React JS administrative dashboard for HR management.',
            ],
          },
        },
      ],
      impact: {
        fr: [
          'Automatisation complète d’un contrôle financier critique auparavant manuel.',
          'Socle applicatif RH sécurisé selon les standards Spring Security.',
        ],
        en: [
          'Automated daily failed-transaction detection in a production fintech context.',
          'Delivered a secure Spring Boot + React HR portal with RBAC.',
        ],
      },
    },
    technologies: ['Spring Boot', 'Java', 'React.js', 'Spring Security', 'JWT', 'RBAC', 'MongoDB'],
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
