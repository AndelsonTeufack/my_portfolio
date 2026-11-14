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
    id: 'kes',
    company: 'Kamer Engineering Solution',
    role: {
      fr: 'Responsable de la digitalisation des inspections (depuis sept. 2026, après un stage de développeur full-stack)',
      en: 'Head of Inspection Digitalization (since Sept. 2026, following a full-stack developer internship)',
    },
    period: {
      fr: 'Mars 2026 – présent',
      en: 'March 2026 – present',
    },
    location: {
      fr: 'Douala',
      en: 'Douala',
    },
    isCurrent: true,
    isFeatured: true,
    summary: {
      fr: 'Pilotage de la digitalisation des inspections, applications Flutter offline-first assistées par IA (Gemini), plateforme web multi-inspecteurs, SIG SOCAD’EL et supervision des stagiaires.',
      en: 'Leading inspection digitalization, AI-assisted (Gemini) offline-first Flutter apps, multi-inspector web platform, SOCAD’EL GIS, and intern supervision.',
    },
    keyAchievements: {
      fr: [
        'Pilote la digitalisation des inspections : corrections et mises à jour continues à partir des retours terrain, supervision des stagiaires.',
        'Conçu des apps Flutter offline-first assistées par IA (Gemini) qui génèrent automatiquement les rapports PDF, Word et Excel (JSA, Q18, Q19).',
        'Développé une plateforme web multi-inspecteurs (QR Code, mises à jour OTA via Cloudflare R2) et conçu une app Bluetooth centralisant les mesures des appareils d’essai de pression.',
        'Contribué au SIG de la SOCAD’EL : KoboCollect adapté (carte ESRI, tracé automatique des réseaux, export GeoJSON).',
      ],
      en: [
        'Lead inspection digitalization: continuous bug fixes and updates driven by field feedback, supervising interns.',
        'Built AI-assisted (Gemini) offline-first Flutter apps that automatically generate PDF, Word, and Excel reports (JSA, Q18, Q19).',
        'Developed a multi-inspector web platform (QR Code, OTA updates via Cloudflare R2) and designed a Bluetooth app centralizing pressure-testing device measurements.',
        'Contributed to the SOCAD’EL GIS: customized KoboCollect (ESRI map, automatic grid tracing, GeoJSON export).',
      ],
    },
    caseStudy: {
      context: {
        fr: 'Entré comme stagiaire développeur full-stack (mars – sept. 2026), puis promu responsable de la digitalisation des inspections en septembre 2026. Ce rôle couvre le maintien en production des outils déployés sur le terrain, l’encadrement des stagiaires et la conception de nouvelles applications.',
        en: 'Joined as a full-stack developer intern (March – Sept. 2026) and promoted to Head of Inspection Digitalization in September 2026. The role spans production field-tool maintenance, intern supervision, and the design of new internal and client-facing software.',
      },
      workstreams: [
        {
          stage: 'production',
          title: {
            fr: 'Apps mobiles d’inspection offline-first & génération de rapports',
            en: 'Offline-first inspection mobile apps & automated reporting',
          },
          description: {
            fr: 'Applications Flutter utilisables sans connexion (inspections électriques, thermographiques, éclairage, pression, levage, sécurité incendie, bilan de puissance, ascenseurs), assistées par l’API Gemini et capables de générer les rapports PDF, Word et Excel (JSA, Q18, Q19).',
            en: 'Offline-capable Flutter apps covering electrical, thermographic, lighting, pressure, lifting, fire safety, power balance, and elevator inspections, assisted by the Gemini API with automated PDF, Word, and Excel report export (JSA, Q18, Q19).',
          },
          deliverables: {
            fr: [
              'Persistance locale hors-ligne et synchronisation multi-inspecteurs',
              'Export automatisé PDF / Word / Excel (JSA, Q18, Q19)',
              'Mises à jour continues à partir des retours terrain',
            ],
            en: [
              'Offline local persistence and multi-inspector sync',
              'Automated PDF / Word / Excel report generation (JSA, Q18, Q19)',
              'Continuous field-feedback bug fixes and updates',
            ],
          },
        },
        {
          stage: 'production',
          title: {
            fr: 'Plateforme web multi-inspecteurs & distribution OTA',
            en: 'Multi-inspector web platform & OTA updates',
          },
          description: {
            fr: 'Plateforme web Next.js / FastAPI interconnectée aux terminaux mobiles : missions collaboratives simultanées, accès rapide aux équipements par QR Code, sauvegardes et mises à jour automatiques via Cloudflare R2.',
            en: 'Interconnected Next.js / FastAPI web platform supporting simultaneous collaborative inspections, QR Code equipment lookup, backups, and automatic updates hosted on Cloudflare R2.',
          },
          deliverables: {
            fr: [
              'Synchronisation collaborative web / mobile',
              'Identification équipements par QR Code & mises à jour Cloudflare R2',
            ],
            en: [
              'Collaborative web/mobile inspection synchronization',
              'QR Code asset access & Cloudflare R2 OTA updates',
            ],
          },
        },
        {
          stage: 'production',
          title: {
            fr: 'SIG SOCAD’EL & automatisation e-mails',
            en: 'SOCAD’EL GIS & email workflow automation',
          },
          description: {
            fr: 'Contribution au Système d’Information Électrique du Cameroun et adaptation de KoboCollect (repositionnement cartographique ESRI, tracé automatique des réseaux électriques, historique et export GeoJSON). Développement en parallèle d’une app web de qualification d’e-mails (Soft/Hard Bounce, Outbound) couplée à n8n.',
            en: 'Contributed to Cameroon’s Electrical Information System by customizing KoboCollect (ESRI map repositioning, automatic power grid tracing, submission history, GeoJSON export), alongside an email deliverability classifier integrated with n8n.',
          },
          deliverables: {
            fr: [
              'KoboCollect adapté avec carte ESRI & export GeoJSON / PostGIS',
              'Filtre de délivrabilité e-mails et campagnes automatisées n8n',
            ],
            en: [
              'Customized KoboCollect with ESRI mapping & GeoJSON / PostGIS export',
              'Email deliverability classifier and n8n automation workflows',
            ],
          },
        },
        {
          stage: 'design',
          title: {
            fr: 'App Bluetooth (essais de pression), maîtrise d’œuvre & ERP Odoo',
            en: 'Pressure-test Bluetooth app, project supervision & Odoo ERP',
          },
          description: {
            fr: 'Travaux d’analyse et de conception en cours depuis septembre 2026 : application mobile BluetoothSockets pour appareils d’essai de pression, plateforme web/mobile de maîtrise d’œuvre (suivi chantier, dépenses, planification) et ERP interne connecté à Odoo avec portail client.',
            en: 'Ongoing analysis and design initiatives started in Sept. 2026: a BluetoothSockets mobile app for pressure-testing equipment, a web/mobile project supervision platform (progress, expenses, planning), and an Odoo-connected internal ERP with external client access.',
          },
          deliverables: {
            fr: [
              'Spécifications et module BluetoothSockets de collecte des mesures',
              'Architecture plateforme maîtrise d’œuvre & connecteurs Odoo ERP',
            ],
            en: [
              'Specifications and BluetoothSockets measurement capture module',
              'Project supervision architecture & Odoo ERP integration design',
            ],
          },
        },
      ],
      impact: {
        fr: [
          'Promotion au poste de responsable de la digitalisation des inspections après 6 mois de stage.',
          'Supervision technique des stagiaires et maintien continu du parc informatique interne.',
          'Continuité des inspections sur sites sans réseau et réduction du temps de rédaction des rapports JSA, Q18 et Q19.',
        ],
        en: [
          'Promoted to Head of Inspection Digitalization after a 6-month internship.',
          'Supervising incoming engineering interns and supporting internal IT operations.',
          'Enabled offline field inspections and reduced manual drafting time for JSA, Q18, and Q19 reports.',
        ],
      },
    },
    technologies: ['Flutter', 'FastAPI', 'Next.js', 'PostGIS', 'Odoo'],
  },
  {
    id: 'green-power',
    company: 'Green Power Cameroon',
    role: {
      fr: 'Analyste développeur de solutions IT (stagiaire)',
      en: 'IT Solutions Analyst & Developer (intern)',
    },
    period: {
      fr: 'Nov. 2024 – nov. 2025',
      en: 'Nov. 2024 – Nov. 2025',
    },
    location: {
      fr: 'Yaoundé',
      en: 'Yaoundé',
    },
    summary: {
      fr: 'Conception et développement d’une GMAO web sur MySQL, automatisation du reporting en Python, audits BDD/réseau, support N2 et administration Microsoft 365.',
      en: 'Built an internal web CMMS on MySQL, automated reporting pipelines with Python, performed DB/network audits, Level 2 IT support, and Microsoft 365 administration.',
    },
    keyAchievements: {
      fr: [
        'Conçu et développé une GMAO web interne sur MySQL, avec tests unitaires et de non-régression.',
        'Automatisé l’extraction et l’agrégation des données de reporting avec des scripts Python.',
        'Audité les performances et vulnérabilités (BDD, réseau) ; support N2 et administration Microsoft 365.',
      ],
      en: [
        'Designed and built an internal web CMMS backed by MySQL, with unit and regression testing.',
        'Automated reporting data extraction and aggregation using Python scripts.',
        'Audited database and network performance and vulnerabilities; Level 2 IT support and Microsoft 365 administration.',
      ],
    },
    technologies: ['Python', 'MySQL', 'Pytest'],
  },
  {
    id: 'iai',
    company: 'IAI (centre de Douala)',
    role: {
      fr: 'Formateur & mentor en développement web et mobile',
      en: 'Web & Mobile Development Instructor and Mentor',
    },
    period: {
      fr: 'Janv. – mai 2025',
      en: 'Jan. – May 2025',
    },
    location: {
      fr: '',
      en: '',
    },
    summary: {
      fr: 'Animation des cours et TP de React.js et Flutter pour les 1ère et 2ème années ; encadrement de +15 étudiants.',
      en: 'Taught React.js and Flutter lectures and labs for 1st- and 2nd-year students; mentored +15 students.',
    },
    keyAchievements: {
      fr: [
        'Animé les cours et TP de React.js et Flutter pour les 1ʳᵉ et 2ᵉ années ; encadré +15 étudiants.',
        'Préparé les étudiants aux stages et projets de fin d’études (Git, clean code, APIs REST).',
      ],
      en: [
        'Taught React.js and Flutter lectures and labs for 1st- and 2nd-year students; mentored +15 students.',
        'Prepared students for internships and capstone projects (Git, clean code, REST APIs, software architecture).',
      ],
    },
    technologies: [],
  },
  {
    id: 'credix',
    company: 'Credix.cam SA',
    role: {
      fr: 'Développeur web, puis développeur mobile (stagiaire)',
      en: 'Web Developer, then Mobile Developer (intern)',
    },
    period: {
      fr: 'Juil.–sept. 2023 et août–oct. 2024',
      en: 'July–Sept. 2023 & Aug.–Oct. 2024',
    },
    location: {
      fr: 'Yaoundé',
      en: 'Yaoundé',
    },
    summary: {
      fr: 'Migration du canal USSD vers une app mobile cross-platform avec Redis, service de réconciliation des transactions sur Momokash et app RH Spring Boot / React sécurisée par JWT.',
      en: 'Migrated USSD workflows to a cross-platform mobile app backed by Redis sessions, built a Momokash failed-transaction reconciliation service, and delivered a JWT-secured Spring Boot / React HR portal.',
    },
    keyAchievements: {
      fr: [
        'Conçu une app mobile cross-platform migrant les utilisateurs du canal USSD, avec un service backend et Redis pour les sessions.',
        'Développé un service de détection des transactions en échec sur Momokash (réconciliation automatisée) et une app RH Spring Boot / React sécurisée par JWT.',
      ],
      en: [
        'Built a cross-platform mobile app migrating users from USSD, backed by a backend service and Redis session management.',
        'Developed a scheduled failed-transaction detection service on Momokash (automated reconciliation) and a JWT-secured Spring Boot / React HR app.',
      ],
    },
    technologies: ['Flutter', 'Spring Boot', 'React', 'Redis'],
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
