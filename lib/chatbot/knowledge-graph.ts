import {
  CERTIFICATIONS,
  EDUCATION,
  ENGINEERING_PILLARS,
  EXPERIENCES,
  LANGUAGES,
  PORTFOLIO_PROFILE,
  PROJECTS,
  SKILL_CATEGORIES,
  SKILL_NOTIONS,
  SOFT_SKILLS,
  type ExperienceItem,
  type Language,
  type ProjectItem,
} from '@/lib/portfolio-data'

export type ChatIntent =
  | 'greeting'
  | 'farewell'
  | 'identity_bio'
  | 'experiences_overview'
  | 'experience_detail'
  | 'projects_overview'
  | 'project_detail'
  | 'skills_overview'
  | 'skill_verification'
  | 'architecture_offline_ai'
  | 'education_certifications'
  | 'languages_softskills'
  | 'availability_mobility'
  | 'contact_cv'
  | 'disambiguation_needed'
  | 'out_of_scope'
  | 'unknown_factual'

export type ConfidenceLevel = 'high' | 'medium' | 'low'
export type QueryDepth = 'concise' | 'detailed' | 'technical'
export type QueryAngle =
  | 'general'
  | 'role'
  | 'architecture'
  | 'stack'
  | 'problem_result'
  | 'links'

export interface ChatMessageInput {
  role: 'user' | 'assistant'
  content: string
}

export interface ChatAction {
  label: string
  type: 'scroll' | 'external' | 'download'
  target: string
}

export interface ExtractedEntities {
  projects: string[]
  experiences: string[]
  employers: string[]
  skills: string[]
  skillCategories: string[]
  unsupportedTech: string[]
  educationAsked: boolean
  contactAsked: boolean
  cvAsked: boolean
  salaryOrRateAsked: boolean
  ageAsked: boolean
  hobbiesAsked: boolean
}

export interface ResolvedContextEntities {
  projects: string[]
  experiences: string[]
  employers: string[]
  skills: string[]
}

export interface ChatEngineInput {
  messages: ChatMessageInput[]
  language?: Language
}

export interface ChatEngineResult {
  reply: string
  intent: ChatIntent
  confidence: number
  confidenceLevel: ConfidenceLevel
  entities: ExtractedEntities
  actions: ChatAction[]
  followUpSuggestions: string[]
  resolvedEntities?: ResolvedContextEntities
}

export interface BilingualText {
  fr: string
  en: string
}

export interface SkillEvidenceNode {
  id: string
  label: string
  level: 'core' | 'notion' | 'cv_tool'
  category: string
  aliases: string[]
  matchTokens: string[]
  experienceIds: string[]
  projectIds: string[]
  evidenceSummary: BilingualText
}

export interface ProjectAliasNode {
  projectId: string
  aliases: string[]
  employerId?: string
  ownershipNote: BilingualText
}

export interface ExperienceAliasNode {
  experienceId: string
  employerId: string
  aliases: string[]
  workstreamNote?: BilingualText
}

export interface EmployerGroup {
  id: string
  name: string
  aliases: string[]
  experienceIds: string[]
  projectIds: string[]
  disambiguationPrompt: BilingualText
}

export interface UnsupportedTechNode {
  id: string
  label: string
  aliases: string[]
  closestRealSkills: string[]
  specificClarification?: BilingualText
}

export interface SkillCategoryAliasNode {
  id: string
  aliases: string[]
}

export const PORTFOLIO_DATA = {
  profile: PORTFOLIO_PROFILE,
  pillars: ENGINEERING_PILLARS,
  experiences: EXPERIENCES,
  projects: PROJECTS,
  skillCategories: SKILL_CATEGORIES,
  skillNotions: SKILL_NOTIONS,
  softSkills: SOFT_SKILLS,
  education: EDUCATION,
  certifications: CERTIFICATIONS,
  languages: LANGUAGES,
} as const

export const ADDITIONAL_CV_FACTS = {
  hobbies: {
    fr: ['Lecture', 'Jeux de stratégie (échecs, dames, scrabble)', 'Football', 'Billard'],
    en: ['Reading', 'Strategy games (chess, checkers, scrabble)', 'Football', 'Billiards'],
  },
  softSkillsCv: {
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
      'Rigor, precision and attention to detail',
      'Analytical, synthesis and problem-solving mindset',
      'Critical thinking and initiative',
      'Adaptability and autonomy',
      'Active listening and interpersonal fluency',
      'Integrity, ethics and ownership',
      'Teamwork and execution under pressure',
      'Professional communication in English',
    ],
  },
  cvExtraTools: [
    'AWS S3',
    'Minio',
    'GitLab',
    'Notion',
    'Bootstrap',
    'NumPy',
    'TDD',
    'GanttProjects',
    'Microsoft Entra ID',
    'Microsoft Intune',
    'Ubuntu',
    'macOS',
    'SEO technique',
    'IAM',
  ],
  availability: {
    timezone: 'UTC+1 (Douala, Cameroun)',
    responseTime: {
      fr: 'Réponse sous 24 h ouvrées',
      en: 'Response within 24 business hours',
    },
    contractTypes: {
      fr: ['Poste CDI / Temps plein', 'Mission freelance', 'Collaboration technique', 'Architecture & conseil'],
      en: ['Full-time role', 'Freelance engagement', 'Technical collaboration', 'Architecture & advisory'],
    },
    remoteAndMobility: {
      fr: 'Basé à Douala (Cameroun), ouvert aux opportunités locales, hybrides et full-remote à l’international.',
      en: 'Based in Douala (Cameroon), open to local, hybrid and international remote opportunities.',
    },
  },
} as const

export const EMPLOYER_GROUPS: EmployerGroup[] = [
  {
    id: 'kamer-engineering',
    name: 'Kamer Engineering Solution (KES)',
    aliases: ['kamer engineering', 'kamer engineering solution', 'kes', 'kamer'],
    experienceIds: ['kes-lead', 'kes-intern'],
    projectIds: ['kes-inspection', 'socadel-gis'],
    disambiguationPrompt: {
      fr: 'Andelson compte **deux expériences** chez Kamer Engineering Solution : son **poste actuel de Lead / Digitalisation** (maintenances terrain, encadrement, app Bluetooth pression, maîtrise d’œuvre et ERP interne connecté à Odoo) et son **stage précédent** (première mise en place de l’application d’inspection offline-first et de la chaîne SIG). Sur lequel souhaitez-vous zoomer ?',
      en: 'Andelson has **two experiences** at Kamer Engineering Solution: his **current Lead / Digitalization role** (field maintenance, intern supervision, Bluetooth pressure app, project-management platform, and internal Odoo-connected ERP) and his **prior internship** (initial rollout of the offline-first inspection app and GIS pipeline). Which one would you like to explore?',
    },
  },
  {
    id: 'green-power',
    name: 'Green Power Cameroon',
    aliases: ['green power', 'greenpower', 'green power cameroon'],
    experienceIds: ['green-power-2', 'green-power-1'],
    projectIds: [],
    disambiguationPrompt: {
      fr: 'Andelson a effectué **deux missions** chez Green Power Cameroon (plateforme **GMAO** de maintenance et **système RH** sécurisé). Voulez-vous consulter les détails de la **seconde mission** ou de la **première mission** ?',
      en: 'Andelson completed **two engagements** at Green Power Cameroon (**GMAO/CMMS maintenance platform** and **secured HR system**). Would you like details on his **second engagement** or his **first engagement**?',
    },
  },
  {
    id: 'credix',
    name: 'Credix.Cam SA',
    aliases: ['credix', 'credix cam', 'credix.cam'],
    experienceIds: ['credix-mobile', 'credix-web'],
    projectIds: ['momokash'],
    disambiguationPrompt: {
      fr: 'Chez **Credix.Cam SA**, Andelson a occupé **deux rôles distincts** : **Développeur Mobile** (application fintech **MomoKash** avec réconciliation financière) et **Développeur Web**. Lequel vous intéresse ?',
      en: 'At **Credix.Cam SA**, Andelson held **two distinct roles**: **Mobile Developer** (**MomoKash** fintech app with financial reconciliation) and **Web Developer**. Which one would you like to inspect?',
    },
  },
  {
    id: 'iai',
    name: 'IAI-Cameroun (Centre de Douala)',
    aliases: ['iai', 'iai cameroun', 'institut africain d informatique'],
    experienceIds: ['iai-instructor'],
    projectIds: ['vote-iai'],
    disambiguationPrompt: {
      fr: 'À l’**IAI-Cameroun (Centre de Douala)**, Andelson est à la fois diplômé (**Licence en Génie Logiciel**), **moniteur / encadreur** pour les étudiants et auteur de l’application **Vote IAI**. Souhaitez-vous explorer son encadrement pédagogique, son diplôme ou le projet Vote IAI ?',
      en: 'At **IAI-Cameroun (Douala Center)**, Andelson holds a **Software Engineering Bachelor**, worked as an **instructor/mentor**, and built **Vote IAI**. Would you like details on his mentoring role, degree, or the Vote IAI app?',
    },
  },
]

export const EXPERIENCE_ALIASES: ExperienceAliasNode[] = [
  {
    experienceId: 'kes-lead',
    employerId: 'kamer-engineering',
    aliases: [
      'kes lead',
      'poste actuel',
      'role actuel',
      'bluetooth',
      'pression',
      'maitrise d oeuvre',
      'erp interne',
      'encadrement stagiaires',
      'support it',
      'actuel kes',
      'current role kes',
    ],
    workstreamNote: {
      fr: 'Distingue les chantiers déjà en production (correctifs terrain sur l’app d’inspection, encadrement de stagiaires, support IT) des chantiers en conception (app BluetoothSockets pour capteur de pression, plateforme de maîtrise d’œuvre et ERP interne relié à Odoo).',
      en: 'Distinguishes production workstreams (field bugfixes on the inspection app, intern supervision, IT support) from active design workstreams (BluetoothSockets pressure-sensor app, project-management platform, and internal ERP connected to Odoo).',
    },
  },
  {
    experienceId: 'kes-intern',
    employerId: 'kamer-engineering',
    aliases: [
      'stage kes',
      'stagiaire kes',
      'premier stage kes',
      'kes intern',
      'internship kes',
    ],
  },
  {
    experienceId: 'green-power-2',
    employerId: 'green-power',
    aliases: ['green power 2', 'gmao', 'maintenance green power', 'deuxieme stage green power', 'second green power'],
  },
  {
    experienceId: 'green-power-1',
    employerId: 'green-power',
    aliases: ['green power 1', 'rh green power', 'systeme rh', 'premier stage green power', 'first green power'],
  },
  {
    experienceId: 'iai-instructor',
    employerId: 'iai',
    aliases: ['moniteur iai', 'encadreur iai', 'enseignant iai', 'instructor iai', 'formateur iai'],
  },
  {
    experienceId: 'credix-mobile',
    employerId: 'credix',
    aliases: ['credix mobile', 'stage mobile credix', 'momokash credix', 'mobile credix'],
  },
  {
    experienceId: 'credix-web',
    employerId: 'credix',
    aliases: ['credix web', 'stage web credix', 'web credix'],
  },
]

export const PROJECT_ALIASES: ProjectAliasNode[] = [
  {
    projectId: 'laoshi-consulting',
    aliases: ['laoshi', 'laoshi consulting', 'site laoshi', 'vitrine b2b'],
    ownershipNote: {
      fr: 'Projet client réel en production, conçu et développé intégralement en full Next.js (App Router, React, TypeScript, Tailwind CSS) — sans NestJS.',
      en: 'Live client production website built 100% in full Next.js (App Router, React, TypeScript, Tailwind CSS) — with zero NestJS.',
    },
  },
  {
    projectId: 'kes-inspection',
    aliases: [
      'kes inspection',
      'application inspection',
      'app inspection',
      'inspection terrain',
      'offline first kes',
      'offline kes',
      'inspection electrique',
    ],
    employerId: 'kamer-engineering',
    ownershipNote: {
      fr: 'Application métier développée pour Kamer Engineering Solution (Flutter offline-first avec persistance Hive, assistance IA Gemini, synchronisation multi-inspecteurs par QR Code, API FastAPI/PostgreSQL et stockage Cloudflare R2 pour rapports PDF/Word/Excel JSA/Q18/Q19 et OTA).',
      en: 'Enterprise field app engineered for Kamer Engineering Solution (Flutter offline-first with Hive persistence, Gemini AI assistance, QR Code multi-inspector sync, FastAPI/PostgreSQL API, and Cloudflare R2 storage for JSA/Q18/Q19 PDF/Word/Excel reports & OTA updates).',
    },
  },
  {
    projectId: 'socadel-gis',
    aliases: ['socadel', 'socad el', 'sig socadel', 'gis socadel', 'kobocollect', 'esri', 'geojson', 'cartographie'],
    employerId: 'kamer-engineering',
    ownershipNote: {
      fr: 'Chaîne de collecte et d’intégration géospatiale conçue pour les relevés terrain (KoboCollect -> PostgreSQL/PostGIS, export/affichage ESRI et GeoJSON).',
      en: 'Geospatial ingestion & processing pipeline designed for field surveys (KoboCollect -> PostgreSQL/PostGIS, ESRI and GeoJSON export/visualization).',
    },
  },
  {
    projectId: 'momokash',
    aliases: ['momokash', 'momo kash', 'fintech momokash', 'reconciliation financiere'],
    employerId: 'credix',
    ownershipNote: {
      fr: 'Application fintech développée en mission chez Credix.Cam SA avec réconciliation financière multi-statuts.',
      en: 'Fintech mobile application developed during his Credix.Cam SA engagement with multi-state financial reconciliation.',
    },
  },
  {
    projectId: 'taillorpro',
    aliases: ['taillorpro', 'tailorpro', 'tailor pro', 'taillor pro', 'atelier couture', 'gestion couture'],
    ownershipNote: {
      fr: 'Produit Flutter conçu et développé par Andelson pour digitaliser les ateliers de couture (mode hors ligne, synchronisation Firebase, mesures, commandes, paiements et rappels).',
      en: 'Flutter product authored by Andelson to digitize tailoring workshops (offline capability, Firebase sync, measurements, orders, payments, and reminders).',
    },
  },
  {
    projectId: 'mulema',
    aliases: ['mulema', 'langue camerounaise', 'apprentissage langues'],
    ownershipNote: {
      fr: 'Contribution technique & maintenance bénévole (V1 Play Store / refonte V2 Flutter). Andelson y est **contributeur / mainteneur**, et non le créateur originel.',
      en: 'Volunteer technical contribution & maintenance (Play Store V1 / Flutter V2 overhaul). Andelson is a **contributor/maintainer**, not the original creator.',
    },
  },
  {
    projectId: 'shikaku',
    aliases: ['shikaku', 'jeu logique', 'puzzle'],
    ownershipNote: {
      fr: 'Jeu de puzzle Flutter/Dart avec synchronisation multijoueur Firebase publié sur Google Play Store, auquel Andelson a apporté des **contributions** (modes multijoueurs, tests, site de présentation et déploiement Play Store).',
      en: 'Google Play Store Flutter/Dart puzzle game with Firebase multiplayer sync to which Andelson **contributed** (multiplayer design, testing, landing site, and Play Store release).',
    },
  },
  {
    projectId: 'vote-iai',
    aliases: ['vote iai', 'voteiai', 'vote en ligne', 'scrutin etudiant'],
    employerId: 'iai',
    ownershipNote: {
      fr: 'Plateforme web de vote payant sécurisée (API REST Spring Boot + passerelle Mobile Money Campay) conçue et réalisée par Andelson dans le cadre académique de l’IAI-Cameroun.',
      en: 'Paid web voting platform (Spring Boot REST API + Campay Mobile Money gateway) authored by Andelson within the IAI-Cameroun academic ecosystem.',
    },
  },
  {
    projectId: 'rental-desktop',
    aliases: ['rental', 'gestion locative', 'logiciel location', 'app locative', 'immobilier', 'pyqt'],
    ownershipNote: {
      fr: 'Logiciel desktop de gestion locative développé en **Python (PyQt)** par Andelson (disponibilités, occupants, paiements et relances automatiques).',
      en: 'Desktop rental property management software built in **Python (PyQt)** by Andelson (unit availability, tenants, payments, and automated reminders).',
    },
  },
]

export const SKILL_CATEGORY_ALIASES: SkillCategoryAliasNode[] = [
  { id: 'mobile', aliases: ['mobile', 'android', 'ios', 'application mobile', 'flutter dart'] },
  { id: 'web', aliases: ['web', 'frontend', 'front end', 'interface', 'ui'] },
  { id: 'backend-api', aliases: ['backend', 'back end', 'api', 'serveur', 'erp', 'microservices'] },
  { id: 'data-gis', aliases: ['data', 'gis', 'sig', 'geospatial', 'base de donnees', 'bdd', 'sql', 'bi', 'cartographie'] },
  { id: 'security-arch', aliases: ['securite', 'security', 'architecture', 'auth', 'iam', 'rbac', 'tests'] },
  { id: 'devops-ai-tools', aliases: ['devops', 'ia', 'ai', 'llm', 'cloud', 'outils', 'tools', 'ci cd', 'docker'] },
]

interface RawSkillDef {
  id: string
  label: string
  level: 'core' | 'notion' | 'cv_tool'
  category: string
  aliases: string[]
  matchTokens: string[]
  extraExperienceIds?: string[]
  extraProjectIds?: string[]
  evidenceSummary: BilingualText
}

const RAW_SKILL_DEFS: RawSkillDef[] = [
  {
    id: 'flutter',
    label: 'Flutter',
    level: 'core',
    category: 'mobile',
    aliases: ['flutter', 'flutter dart', 'fluter', 'fluttr'],
    matchTokens: ['flutter'],
    extraExperienceIds: ['kes-lead', 'kes-intern', 'credix-mobile'],
    extraProjectIds: ['kes-inspection', 'momokash', 'taillorpro', 'mulema', 'shikaku'],
    evidenceSummary: {
      fr: 'Stack mobile principale utilisée en production (app d’inspection offline-first KES, fintech MomoKash chez Credix, TaillorPro) et en contribution sur MULEMA et Shikaku (Google Play Store).',
      en: 'Primary mobile framework used in production (KES offline-first inspection app, Credix MomoKash fintech, TaillorPro) plus contributions on Google Play apps MULEMA and Shikaku.',
    },
  },
  {
    id: 'dart',
    label: 'Dart',
    level: 'core',
    category: 'mobile',
    aliases: ['dart', 'langage dart'],
    matchTokens: ['dart'],
    extraExperienceIds: ['kes-lead', 'kes-intern', 'credix-mobile'],
    extraProjectIds: ['kes-inspection', 'momokash', 'taillorpro'],
    evidenceSummary: {
      fr: 'Langage maître de ses architectures Flutter (gestion d’état, DAO SQLite, isolates/services asynchrones, BluetoothSockets).',
      en: 'Core language behind his Flutter architectures (state management, SQLite DAOs, async sync workers, BluetoothSockets).',
    },
  },
  {
    id: 'sqlite',
    label: 'Offline-First / Hive / SQLite',
    level: 'core',
    category: 'mobile',
    aliases: ['sqlite', 'sqflite', 'drift', 'offline', 'offline first', 'hors ligne', 'sans connexion', 'sync locale'],
    matchTokens: ['sqlite', 'offline', 'hive'],
    extraExperienceIds: ['kes-lead', 'kes-intern'],
    extraProjectIds: ['kes-inspection', 'taillorpro'],
    evidenceSummary: {
      fr: 'Conception d’architectures mobiles 100 % **offline-first** : persistance locale **Hive** (KES Inspection) et **SQLite** avec synchronisation différée multi-inspecteurs (QR Code / FastAPI / Firebase selon les cas) sur zones blanches.',
      en: 'Engineered **offline-first** mobile architectures using **Hive** (KES Inspection) and **SQLite** local persistence with deferred synchronization (QR Code / FastAPI / Firebase depending on the system) for zero-connectivity zones.',
    },
  },
  {
    id: 'bluetooth',
    label: 'BluetoothSockets / IoT Terrain',
    level: 'core',
    category: 'mobile',
    aliases: ['bluetooth', 'bluetoothsockets', 'bluetooth sockets', 'ble', 'capteur pression', 'capteur', 'serial'],
    matchTokens: ['bluetooth', 'bluetoothsockets'],
    extraExperienceIds: ['kes-lead'],
    extraProjectIds: [],
    evidenceSummary: {
      fr: 'Conception en cours chez Kamer Engineering Solution d’une application de lecture et d’acquisition de données depuis un capteur de pression via BluetoothSockets.',
      en: 'Currently designing a field pressure-sensor acquisition application over BluetoothSockets at Kamer Engineering Solution.',
    },
  },
  {
    id: 'hive-firebase-android',
    label: 'Hive / Firebase / Android (Kotlin/Java)',
    level: 'core',
    category: 'mobile',
    aliases: ['hive', 'firebase', 'kotlin', 'android native', 'android natif', 'fcm'],
    matchTokens: ['hive', 'firebase', 'kotlin'],
    extraExperienceIds: ['kes-lead', 'kes-intern'],
    extraProjectIds: ['kes-inspection', 'taillorpro', 'shikaku'],
    evidenceSummary: {
      fr: 'Persistance locale **Hive** sur l’app d’inspection offline-first KES, synchronisation **Firebase** (TaillorPro, multijoueur Shikaku) et bases **Android (Kotlin/Java)** en appui de Flutter/Dart.',
      en: '**Hive** local storage powering KES offline-first inspections, **Firebase** real-time sync (TaillorPro, Shikaku multiplayer), and **Android (Kotlin/Java)** foundations supporting Flutter/Dart.',
    },
  },
  {
    id: 'nextjs',
    label: 'Next.js',
    level: 'core',
    category: 'web',
    aliases: ['next', 'nextjs', 'next js', 'next.js', 'app router'],
    matchTokens: ['next.js', 'nextjs'],
    extraProjectIds: ['laoshi-consulting'],
    evidenceSummary: {
      fr: 'Développement full-stack Next.js (App Router, Server/Client Components, API Routes), notamment pour le site client en production **Laoshi Consulting** (sans NestJS) et ce portfolio.',
      en: 'Full-stack Next.js development (App Router, API Routes, SSR/SSG), notably powering the live **Laoshi Consulting** client site (100% Next.js, zero NestJS) and this portfolio.',
    },
  },
  {
    id: 'react',
    label: 'React',
    level: 'core',
    category: 'web',
    aliases: ['react', 'reactjs', 'react js'],
    matchTokens: ['react'],
    extraProjectIds: ['laoshi-consulting'],
    evidenceSummary: {
      fr: 'Interfaces modulaires React + TypeScript orientées performance, SEO et réactivité (Laoshi Consulting, portfolio & plateformes web).',
      en: 'Modular React + TypeScript interfaces engineered for performance, SEO, and responsiveness (Laoshi Consulting, portfolio & web platforms).',
    },
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    level: 'core',
    category: 'web',
    aliases: ['typescript', 'ts', 'typestript'],
    matchTokens: ['typescript'],
    extraProjectIds: ['laoshi-consulting'],
    evidenceSummary: {
      fr: 'Typage strict appliqué sur les projets Next.js/React et moteurs front/back TypeScript pour fiabiliser les contrats de données.',
      en: 'Strict TypeScript across Next.js/React applications and shared domain contracts for runtime safety.',
    },
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    level: 'core',
    category: 'web',
    aliases: ['javascript', 'js', 'es6'],
    matchTokens: ['javascript'],
    evidenceSummary: {
      fr: 'Maîtrise de JavaScript moderne (ES6+, async/fetch, DOM) pour le web dynamique et les intégrations API.',
      en: 'Modern JavaScript (ES6+, async flows, browser APIs) across full-stack web apps and integrations.',
    },
  },
  {
    id: 'tailwind',
    label: 'Tailwind CSS / UI Moderne',
    level: 'core',
    category: 'web',
    aliases: ['tailwind', 'tailwindcss', 'tailwind css', 'css', 'html', 'bootstrap'],
    matchTokens: ['tailwind', 'bootstrap', 'html', 'css'],
    extraProjectIds: ['laoshi-consulting'],
    evidenceSummary: {
      fr: 'Systèmes de design responsive avec Tailwind CSS (Laoshi Consulting, portfolio) ainsi que HTML5/CSS3 et Bootstrap (noté sur le CV).',
      en: 'Responsive UI systems with Tailwind CSS (Laoshi Consulting, portfolio), HTML5/CSS3, and Bootstrap (listed on CV).',
    },
  },
  {
    id: 'spring-boot',
    label: 'Spring Boot (Java)',
    level: 'core',
    category: 'backend-api',
    aliases: ['spring', 'springboot', 'spring boot', 'java spring', 'sprign'],
    matchTokens: ['spring boot', 'spring'],
    extraExperienceIds: ['green-power-2', 'green-power-1'],
    extraProjectIds: ['vote-iai'],
    evidenceSummary: {
      fr: 'Conception d’API REST sécurisées en Java / Spring Boot avec authentification stateless JWT et contrôle d’accès RBAC (systèmes RH & GMAO chez Green Power Cameroon) et intégration Mobile Money Campay (**Vote IAI**).',
      en: 'Enterprise Java / Spring Boot REST APIs with stateless JWT authentication and RBAC authorization (HR & CMMS platforms at Green Power Cameroon) plus Campay Mobile Money integration (**Vote IAI**).',
    },
  },
  {
    id: 'java',
    label: 'Java',
    level: 'core',
    category: 'backend-api',
    aliases: ['java', 'jdk', 'jee'],
    matchTokens: ['java'],
    extraExperienceIds: ['green-power-2', 'green-power-1'],
    extraProjectIds: ['vote-iai'],
    evidenceSummary: {
      fr: 'Langage utilisé pour les backends Spring Boot (Green Power Cameroon, Vote IAI) et le développement orienté objet.',
      en: 'Used across Spring Boot enterprise backends (Green Power Cameroon, Vote IAI) and structured OOP engineering.',
    },
  },
  {
    id: 'fastapi',
    label: 'FastAPI',
    level: 'core',
    category: 'backend-api',
    aliases: ['fastapi', 'fast api', 'fast-api'],
    matchTokens: ['fastapi'],
    extraExperienceIds: ['kes-lead', 'kes-intern'],
    extraProjectIds: ['kes-inspection', 'socadel-gis'],
    evidenceSummary: {
      fr: 'Backend Python haute performance avec FastAPI pour la synchronisation d’inspections terrain, l’ingestion KoboCollect/SIG (SOCAD’EL) et l’orchestration d’API IA.',
      en: 'High-performance Python FastAPI services for field inspection sync, KoboCollect/GIS ingestion (SOCAD’EL), and AI API orchestration.',
    },
  },
  {
    id: 'python',
    label: 'Python',
    level: 'core',
    category: 'backend-api',
    aliases: ['python', 'py', 'pyhton', 'pyqt'],
    matchTokens: ['python', 'pyqt'],
    extraExperienceIds: ['kes-lead', 'kes-intern'],
    extraProjectIds: ['kes-inspection', 'socadel-gis', 'rental-desktop'],
    evidenceSummary: {
      fr: 'Utilisé en production pour les services FastAPI, les pipelines géospatiaux (GeoJSON/ESRI/KoboCollect), le scripting data (Pandas, NumPy, Scikit-learn), les connecteurs Odoo et les interfaces desktop **PyQt** (Gestion locative).',
      en: 'Production Python across FastAPI backends, geospatial pipelines (GeoJSON/ESRI/KoboCollect), data processing (Pandas, NumPy, Scikit-learn), Odoo connectors, and **PyQt** desktop interfaces (Rental Management).',
    },
  },
  {
    id: 'laravel',
    label: 'Laravel / PHP',
    level: 'core',
    category: 'backend-api',
    aliases: ['laravel', 'php', 'larvel'],
    matchTokens: ['laravel', 'php'],
    extraExperienceIds: ['credix-web'],
    extraProjectIds: ['momokash'],
    evidenceSummary: {
      fr: 'Développement d’API et d’applications web métier en PHP / Laravel (missions web chez Credix.Cam SA et modules de gestion).',
      en: 'Business web apps and APIs built with PHP / Laravel (Credix.Cam SA web engineering and backend services).',
    },
  },
  {
    id: 'nodejs',
    label: 'Node.js',
    level: 'core',
    category: 'backend-api',
    aliases: ['node', 'nodejs', 'node js', 'node.js'],
    matchTokens: ['node.js', 'nodejs'],
    extraProjectIds: ['laoshi-consulting'],
    evidenceSummary: {
      fr: 'Environnement serveur JavaScript/TypeScript utilisé pour les routes API Next.js, l’outillage et les services backend légers.',
      en: 'JavaScript/TypeScript server runtime for Next.js API routes, tooling, and lightweight backend services.',
    },
  },
  {
    id: 'odoo',
    label: 'Odoo ERP',
    level: 'core',
    category: 'backend-api',
    aliases: ['odoo', 'erp', 'erp interne', 'odd', 'odoo erp'],
    matchTokens: ['odoo', 'erp'],
    extraExperienceIds: ['kes-lead'],
    evidenceSummary: {
      fr: 'En cours de conception chez Kamer Engineering Solution : architecture d’un ERP interne interconnecté avec Odoo pour centraliser les flux opérationnels et d’inspection.',
      en: 'Actively designing an internal ERP interconnected with Odoo at Kamer Engineering Solution to unify operational and inspection workflows.',
    },
  },
  {
    id: 'postgresql',
    label: 'PostgreSQL / PostGIS',
    level: 'core',
    category: 'data-gis',
    aliases: ['postgres', 'postgresql', 'postgis', 'pg', 'postgre'],
    matchTokens: ['postgresql', 'postgis', 'postgres'],
    extraExperienceIds: ['kes-lead', 'kes-intern'],
    extraProjectIds: ['kes-inspection', 'socadel-gis'],
    evidenceSummary: {
      fr: 'Base relationnelle et géospatiale principale (PostGIS) pour le stockage des inspections KES et des couches SIG SOCAD’EL.',
      en: 'Primary relational and geospatial database (PostGIS) backing KES field inspections and SOCAD’EL GIS layers.',
    },
  },
  {
    id: 'mysql',
    label: 'MySQL',
    level: 'core',
    category: 'data-gis',
    aliases: ['mysql', 'sql', 'mariadb'],
    matchTokens: ['mysql'],
    extraExperienceIds: ['green-power-2', 'green-power-1', 'credix-web'],
    extraProjectIds: ['vote-iai', 'taillorpro'],
    evidenceSummary: {
      fr: 'Modélisation relationnelle MySQL utilisée sur les plateformes RH/GMAO (Green Power), web (Credix) et projets de gestion.',
      en: 'Relational database design with MySQL across Green Power HR/CMMS platforms, Credix web systems, and business apps.',
    },
  },
  {
    id: 'gis',
    label: 'SIG / KoboCollect / ESRI / GeoJSON',
    level: 'core',
    category: 'data-gis',
    aliases: [
      'sig',
      'gis',
      'geojson',
      'kobo',
      'kobocollect',
      'kobo collect',
      'esri',
      'arcgis',
      'cartographie',
      'geospatial',
    ],
    matchTokens: ['geojson', 'kobocollect', 'esri', 'gis', 'sig', 'postgis'],
    extraExperienceIds: ['kes-lead', 'kes-intern'],
    extraProjectIds: ['socadel-gis', 'kes-inspection'],
    evidenceSummary: {
      fr: 'Chaîne complète de collecte et traitement SIG pour la SOCAD’EL : formulaires terrain KoboCollect, transformation Python/FastAPI vers GeoJSON et intégration ESRI / PostGIS.',
      en: 'End-to-end GIS pipeline for SOCAD’EL: KoboCollect field surveys, Python/FastAPI transformation to GeoJSON, and ESRI / PostGIS integration.',
    },
  },
  {
    id: 'ml-data',
    label: 'Pandas / NumPy / Scikit-learn / Power BI',
    level: 'core',
    category: 'data-gis',
    aliases: ['pandas', 'numpy', 'scikit', 'scikit learn', 'sklearn', 'machine learning', 'power bi', 'powerbi', 'bi'],
    matchTokens: ['pandas', 'numpy', 'scikit-learn', 'power bi'],
    evidenceSummary: {
      fr: 'Manipulation et analyse de données structurées avec Pandas, NumPy et Scikit-learn (fondamentaux ML) ainsi que notions de reporting Power BI.',
      en: 'Structured data manipulation and ML fundamentals using Pandas, NumPy, Scikit-learn, plus Power BI reporting foundations.',
    },
  },
  {
    id: 'gemini-llm',
    label: 'Gemini API / LLM / Prompt Engineering',
    level: 'core',
    category: 'devops-ai-tools',
    aliases: [
      'gemini',
      'llm',
      'ia',
      'ai',
      'intelligence artificielle',
      'prompt',
      'prompt engineering',
      'multi agents',
      'mcp',
      'rag',
    ],
    matchTokens: ['gemini', 'llm', 'prompt', 'ia'],
    extraExperienceIds: ['kes-lead', 'kes-intern'],
    extraProjectIds: ['kes-inspection'],
    evidenceSummary: {
      fr: 'Intégration d’assistance IA Gemini et structuration de prompts / schémas JSON contrôlés dans l’écosystème d’inspection KES pour assister l’analyse et la génération de rapports techniques.',
      en: 'Integrated Gemini AI assistance and structured JSON prompt engineering into the KES inspection ecosystem to accelerate technical analysis and reporting.',
    },
  },
  {
    id: 'jwt-rbac',
    label: 'JWT / RBAC / OAuth2 / IAM',
    level: 'core',
    category: 'security-arch',
    aliases: [
      'jwt',
      'rbac',
      'oauth',
      'oauth2',
      'iam',
      'authentification',
      'securite',
      'security',
      'entra id',
      'intune',
      'microsoft entra',
    ],
    matchTokens: ['jwt', 'rbac', 'oauth2', 'iam', 'entra', 'intune'],
    extraExperienceIds: ['green-power-2', 'green-power-1', 'kes-lead', 'credix-mobile'],
    extraProjectIds: ['vote-iai', 'momokash', 'kes-inspection'],
    evidenceSummary: {
      fr: 'Sécurisation d’API REST par tokens JWT stateless, contrôle d’accès par rôles (RBAC), notions OAuth2 et administration identité/terminaux via Microsoft Entra ID & Intune (CV).',
      en: 'Stateless JWT REST API security, Role-Based Access Control (RBAC), OAuth2 foundations, and enterprise identity/device administration with Microsoft Entra ID & Intune (CV).',
    },
  },
  {
    id: 'docker-git-cloud',
    label: 'Docker / Git / Cloudflare R2 / AWS S3 / Minio',
    level: 'core',
    category: 'devops-ai-tools',
    aliases: [
      'docker',
      'conteneur',
      'git',
      'github',
      'gitlab',
      'aws',
      's3',
      'aws s3',
      'minio',
      'cloudflare r2',
      'r2',
      'stockage objet',
      'ota',
      'linux',
      'ubuntu',
      'macos',
    ],
    matchTokens: ['docker', 'git', 'github', 'gitlab', 'aws', 'minio', 'cloudflare r2', 'ubuntu', 'macos'],
    extraProjectIds: ['kes-inspection'],
    evidenceSummary: {
      fr: 'Conteneurisation Docker, gestion de versions Git/GitHub/GitLab, stockage objet **Cloudflare R2** (rapports et distribution OTA KES Inspection), **AWS S3 / Minio** (CV), et environnements Ubuntu Linux / macOS.',
      en: 'Docker containerization, Git/GitHub/GitLab workflows, **Cloudflare R2** object storage (KES Inspection reports & OTA distribution), **AWS S3 / Minio** (CV), across Ubuntu Linux and macOS environments.',
    },
  },
  {
    id: 'testing-arch',
    label: 'TDD / Tests Unitaires / Clean Architecture',
    level: 'core',
    category: 'security-arch',
    aliases: ['tdd', 'test', 'tests unitaires', 'clean architecture', 'architecture', 'qualite'],
    matchTokens: ['tdd', 'tests', 'clean architecture'],
    extraExperienceIds: ['green-power-2', 'kes-lead', 'credix-mobile'],
    evidenceSummary: {
      fr: 'Pratique des tests unitaires et d’intégration (notamment API Green Power & réconciliation MomoKash), approche TDD (CV) et séparation claire UI / Métier / Data.',
      en: 'Unit and integration testing discipline (Green Power APIs, MomoKash financial reconciliation), TDD practices (CV), and clean separation of concerns.',
    },
  },
  {
    id: 'seo-management',
    label: 'SEO technique / Notion / GanttProjects',
    level: 'cv_tool',
    category: 'devops-ai-tools',
    aliases: ['seo', 'seo technique', 'notion', 'gantt', 'ganttprojects', 'gestion de projet'],
    matchTokens: ['seo', 'notion', 'gantt'],
    extraProjectIds: ['laoshi-consulting'],
    evidenceSummary: {
      fr: 'Compétences complémentaires documentées sur le CV : SEO technique (appliqué sur les vitrines web Next.js), organisation sous Notion et planification GanttProjects.',
      en: 'Complementary skills from CV: technical SEO (applied on Next.js web deliveries), Notion documentation workflows, and GanttProjects planning.',
    },
  },
  {
    id: 'kafka',
    label: 'Apache Kafka',
    level: 'notion',
    category: 'backend-api',
    aliases: ['kafka', 'apache kafka', 'event streaming'],
    matchTokens: ['kafka'],
    evidenceSummary: {
      fr: 'Documenté dans la rubrique **Notions & Bases** du portfolio : compréhension conceptuelle du streaming événementiel et du découplage asynchrone (non revendiqué comme expertise production principale).',
      en: 'Listed under **Foundations & Notions** in the portfolio: conceptual understanding of event streaming and async decoupling (not claimed as primary production mastery).',
    },
  },
  {
    id: 'rabbitmq',
    label: 'RabbitMQ',
    level: 'notion',
    category: 'backend-api',
    aliases: ['rabbitmq', 'rabbit mq', 'amqp', 'message broker'],
    matchTokens: ['rabbitmq'],
    evidenceSummary: {
      fr: 'Documenté dans **Notions & Bases** : compréhension des files de messages AMQP et workers asynchrones.',
      en: 'Listed under **Foundations & Notions**: solid understanding of AMQP message queues and asynchronous workers.',
    },
  },
  {
    id: 'django-flask',
    label: 'Django / Flask',
    level: 'notion',
    category: 'backend-api',
    aliases: ['django', 'flask'],
    matchTokens: ['django', 'flask'],
    evidenceSummary: {
      fr: 'Bases pratiques sur Django et Flask pour le web Python, avec une pratique principale et production centrée sur **FastAPI**.',
      en: 'Working foundations in Django and Flask for Python web backends, with primary production usage centered on **FastAPI**.',
    },
  },
  {
    id: 'c-cpp',
    label: 'C / C++',
    level: 'notion',
    category: 'backend-api',
    aliases: ['c++', 'cpp', 'langage c', 'c/c++'],
    matchTokens: ['c/c++', 'c++'],
    evidenceSummary: {
      fr: 'Notions fondamentales acquises durant le cursus ingénieur (algorithmique, structures de données, programmation bas niveau).',
      en: 'Foundational knowledge from his engineering curriculum (algorithms, data structures, low-level programming).',
    },
  },
]

function containsWholeToken(haystack: string, needle: string): boolean {
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, 'i')
  return regex.test(haystack)
}

function buildExperienceTextBlob(exp: ExperienceItem): string {
  const parts = [
    exp.technologies.join(' '),
    exp.role.fr,
    exp.role.en,
    exp.summary?.fr ?? '',
    exp.summary?.en ?? '',
    ...exp.keyAchievements.fr,
    ...exp.keyAchievements.en,
    exp.caseStudy?.context.fr ?? '',
    exp.caseStudy?.context.en ?? '',
    ...(exp.caseStudy?.workstreams.map(
      (w) =>
        `${w.title.fr} ${w.description.fr} ${w.description.en} ${w.deliverables.fr.join(' ')} ${w.deliverables.en.join(' ')}`
    ) ?? []),
  ]
  return parts.join(' ').toLowerCase()
}

function buildProjectTextBlob(proj: ProjectItem): string {
  const parts = [
    proj.tags.join(' '),
    proj.summary.fr,
    proj.summary.en,
    proj.architectureNotes.fr,
    proj.architectureNotes.en,
    proj.problemStatement.fr,
    proj.problemStatement.en,
  ]
  return parts.join(' ').toLowerCase()
}

const EXPERIENCE_TEXT_CACHE = new Map<string, string>(
  EXPERIENCES.map((exp) => [exp.id, buildExperienceTextBlob(exp)])
)
const PROJECT_TEXT_CACHE = new Map<string, string>(
  PROJECTS.map((proj) => [proj.id, buildProjectTextBlob(proj)])
)

export const SKILL_GRAPH: SkillEvidenceNode[] = RAW_SKILL_DEFS.map((def) => {
  const expSet = new Set<string>(def.extraExperienceIds ?? [])
  const projSet = new Set<string>(def.extraProjectIds ?? [])

  for (const exp of EXPERIENCES) {
    const blob = EXPERIENCE_TEXT_CACHE.get(exp.id) ?? ''
    if (def.matchTokens.some((tok) => containsWholeToken(blob, tok.toLowerCase()))) {
      expSet.add(exp.id)
    }
  }

  for (const proj of PROJECTS) {
    const blob = PROJECT_TEXT_CACHE.get(proj.id) ?? ''
    if (def.matchTokens.some((tok) => containsWholeToken(blob, tok.toLowerCase()))) {
      projSet.add(proj.id)
    }
  }

  return {
    id: def.id,
    label: def.label,
    level: def.level,
    category: def.category,
    aliases: def.aliases,
    matchTokens: def.matchTokens,
    experienceIds: Array.from(expSet),
    projectIds: Array.from(projSet),
    evidenceSummary: def.evidenceSummary,
  }
})

export const UNSUPPORTED_TECH_NODES: UnsupportedTechNode[] = [
  {
    id: 'nestjs',
    label: 'NestJS',
    aliases: ['nestjs', 'nest js', 'nest.js', 'nest'],
    closestRealSkills: ['nextjs', 'nodejs', 'spring-boot', 'fastapi'],
    specificClarification: {
      fr: 'Précision importante : **Laoshi Consulting** a été développé intégralement en **full Next.js** (avec **zéro NestJS**). Bien que `Node.js / NestJS` figure en compétence secondaire de son profil Back-end, son expertise production principale repose sur **FastAPI (Python)**, **Spring Boot (Java)**, **Next.js API Routes** et **Laravel (PHP)**.',
      en: 'Important clarification: **Laoshi Consulting** was built 100% in **full Next.js** (with **zero NestJS**). While `Node.js / NestJS` is listed as a secondary Back-end skill on his profile, his primary production backend work relies on **FastAPI (Python)**, **Spring Boot (Java)**, **Next.js API Routes**, and **Laravel (PHP)**.',
    },
  },
  {
    id: 'kubernetes',
    label: 'Kubernetes',
    aliases: ['kubernetes', 'k8s', 'helm', 'kube'],
    closestRealSkills: ['docker-git-cloud', 'spring-boot', 'fastapi'],
  },
  {
    id: 'terraform',
    label: 'Terraform / Ansible',
    aliases: ['terraform', 'ansible', 'pulumi', 'iac'],
    closestRealSkills: ['docker-git-cloud'],
  },
  {
    id: 'rust',
    label: 'Rust',
    aliases: ['rust', 'cargo'],
    closestRealSkills: ['python', 'dart', 'c-cpp'],
  },
  {
    id: 'golang',
    label: 'Go (Golang)',
    aliases: ['golang'],
    closestRealSkills: ['fastapi', 'spring-boot', 'nodejs'],
  },
  {
    id: 'dotnet',
    label: 'C# / .NET',
    aliases: ['c#', 'csharp', 'dotnet', '.net', 'asp.net'],
    closestRealSkills: ['spring-boot', 'java', 'typescript'],
  },
  {
    id: 'ruby-rails',
    label: 'Ruby / Ruby on Rails',
    aliases: ['ruby', 'rails', 'ruby on rails'],
    closestRealSkills: ['laravel', 'fastapi', 'nextjs'],
  },
  {
    id: 'angular-vue',
    label: 'Angular / Vue.js / Svelte',
    aliases: ['angular', 'vue', 'vuejs', 'vue.js', 'nuxt', 'svelte'],
    closestRealSkills: ['react', 'nextjs', 'typescript'],
  },
  {
    id: 'graphql',
    label: 'GraphQL',
    aliases: ['graphql', 'apollo'],
    closestRealSkills: ['fastapi', 'spring-boot', 'nextjs'],
  },
  {
    id: 'native-ios',
    label: 'Swift / SwiftUI (iOS natif)',
    aliases: ['swift', 'swiftui', 'objective c', 'ios natif'],
    closestRealSkills: ['flutter', 'dart', 'hive-firebase-android'],
    specificClarification: {
      fr: 'Andelson ne revendique pas le développement iOS natif **Swift / SwiftUI** : il développe ses applications Android/iOS cross-platform avec **Flutter & Dart** (apps publiées sur Google Play Store et solutions offline-first terrain), complétés par des bases **Android (Kotlin/Java)**.',
      en: 'Andelson does not claim native **Swift / SwiftUI** iOS development: he ships cross-platform Android/iOS apps with **Flutter & Dart** (published on Google Play Store and offline-first enterprise apps), complemented by **Android (Kotlin/Java)** foundations.',
    },
  },
  {
    id: 'deeplearning-frameworks',
    label: 'PyTorch / TensorFlow',
    aliases: ['pytorch', 'tensorflow', 'keras'],
    closestRealSkills: ['ml-data', 'gemini-llm', 'python'],
    specificClarification: {
      fr: 'PyTorch et TensorFlow ne figurent pas dans ses compétences revendiquées. Sur l’axe Data & IA, il travaille avec **Python (Pandas, NumPy, Scikit-learn)** pour les fondamentaux ML et **Gemini API / LLM / Prompt Engineering** pour l’intégration d’IA générative applicative.',
      en: 'PyTorch and TensorFlow are not listed in his documented stack. On the Data & AI axis, he works with **Python (Pandas, NumPy, Scikit-learn)** for ML fundamentals and **Gemini API / LLM / Prompt Engineering** for applied generative AI.',
    },
  },
  {
    id: 'blockchain-web3',
    label: 'Blockchain / Solidity / Web3',
    aliases: ['blockchain', 'solidity', 'web3', 'smart contract', 'ethereum'],
    closestRealSkills: ['jwt-rbac', 'spring-boot'],
  },
  {
    id: 'sap-salesforce',
    label: 'SAP / Salesforce',
    aliases: ['sap', 'salesforce', 'abap'],
    closestRealSkills: ['odoo', 'postgresql'],
    specificClarification: {
      fr: 'SAP et Salesforce ne font pas partie du périmètre d’Andelson. En matière d’ERP, il travaille actuellement sur l’interconnexion d’un ERP interne avec **Odoo** chez Kamer Engineering Solution.',
      en: 'SAP and Salesforce are not part of Andelson’s documented background. His ERP engineering experience centers on interconnecting an internal ERP with **Odoo** at Kamer Engineering Solution.',
    },
  },
]

export const PROJECT_MAP = new Map<string, ProjectItem>(PROJECTS.map((p) => [p.id, p]))
export const EXPERIENCE_MAP = new Map<string, ExperienceItem>(EXPERIENCES.map((e) => [e.id, e]))
export const SKILL_MAP = new Map<string, SkillEvidenceNode>(SKILL_GRAPH.map((s) => [s.id, s]))
export const EMPLOYER_MAP = new Map<string, EmployerGroup>(EMPLOYER_GROUPS.map((g) => [g.id, g]))
export const PROJECT_ALIAS_MAP = new Map<string, ProjectAliasNode>(
  PROJECT_ALIASES.map((pa) => [pa.projectId, pa])
)
export const EXPERIENCE_ALIAS_MAP = new Map<string, ExperienceAliasNode>(
  EXPERIENCE_ALIASES.map((ea) => [ea.experienceId, ea])
)
export const UNSUPPORTED_TECH_MAP = new Map<string, UnsupportedTechNode>(
  UNSUPPORTED_TECH_NODES.map((u) => [u.id, u])
)
