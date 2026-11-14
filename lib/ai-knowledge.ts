import {
  PORTFOLIO_PROFILE,
  EXPERIENCES,
  PROJECTS,
  SKILL_CATEGORIES,
  EDUCATION,
  CERTIFICATIONS,
  LANGUAGES,
  SOFT_SKILLS,
} from '@/lib/portfolio-data'

export const ANDELSON_KNOWLEDGE = {
  profile: {
    fullName: PORTFOLIO_PROFILE.fullName,
    shortName: PORTFOLIO_PROFILE.displayName,
    title: PORTFOLIO_PROFILE.title,
    currentRole: PORTFOLIO_PROFILE.currentRoleHeadline,
    currentCompany: PORTFOLIO_PROFILE.currentCompany,
    location: PORTFOLIO_PROFILE.location,
    summary: PORTFOLIO_PROFILE.heroDescription,
  },
  experiences: EXPERIENCES.map((exp) => ({
    company: exp.company,
    role: exp.role,
    period: exp.period,
    location: exp.location,
    summary: exp.summary,
    achievements: exp.keyAchievements,
    technologies: exp.technologies,
  })),
  projects: PROJECTS.map((p) => ({
    title: p.title,
    category: p.category,
    summary: p.summary,
    highlights: p.highlights,
    tags: p.tags,
    playStoreUrl: p.playStoreUrl,
    liveUrl: p.liveUrl,
    videoUrl: p.videoUrl,
    codeUrl: p.codeUrl,
  })),
  skills: SKILL_CATEGORIES,
  softSkills: SOFT_SKILLS,
  education: EDUCATION,
  certifications: CERTIFICATIONS,
  languages: LANGUAGES,
  contact: PORTFOLIO_PROFILE.contact,
}

/**
 * Fallback deterministic knowledge engine when GEMINI_API_KEY is absent.
 */
export function queryAndelsonKnowledge(userQuery: string, lang: 'fr' | 'en' = 'fr'): string {
  const q = userQuery.toLowerCase().trim()
  const isEn = lang === 'en'

  const unrelatedKeywords = [
    'recette',
    'recipe',
    'meteo',
    'weather',
    'president',
    'politique',
    'politics',
    'champions league',
    'cuisine',
    'cooking',
    'horoscope',
    'bitcoin price',
    'crypto',
    'film',
    'movie',
  ]

  if (unrelatedKeywords.some((kw) => q.includes(kw))) {
    return isEn
      ? 'I am dedicated exclusively to answering questions about TEUFACK SONTSA Andelson’s engineering background, skills, projects, and availability.'
      : 'Je suis exclusivement dédié aux questions concernant le parcours d’ingénieur, les compétences, les réalisations et la disponibilité de TEUFACK SONTSA Andelson.'
  }

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
      ? `TEUFACK SONTSA Andelson is a Software & IT Engineer based in Douala, Cameroon, currently serving as Full-Stack Developer / Head of Inspection Digitalization at Kamer Engineering Solution.\n\n• Academic track: Professional Master’s in Software Engineering (ENSPD, in progress) after a Bachelor’s degree from IAI-Cameroun (2024).\n• Core focus: AI-assisted offline-first mobile apps (Flutter), Bluetooth hardware integration, Spring Boot / Python backends, React / Next.js platforms, Odoo ERP, and GIS (KoboCollect / ESRI / PostGIS).\n• Published work: Contributor to Google Play Store apps (MULEMA, Shikaku).`
      : `TEUFACK SONTSA Andelson est Ingénieur des Travaux Informatiques basé à Douala, Cameroun, actuellement Développeur Full Stack / Responsable de la digitalisation des inspections chez Kamer Engineering Solution.\n\n• Formation : Master Professionnel en Génie Logiciel à l’ENSPD (en cours), après une Licence en Génie Logiciel à l’IAI-Cameroun (2024).\n• Spécialités : Applications mobiles offline-first assistées par IA (Flutter), communication Bluetooth matérielle, backends Spring Boot / Python, plateformes React / Next.js, ERP Odoo et SIG (KoboCollect / ESRI / PostGIS).\n• Réalisations publiques : Contributeur sur Google Play Store (MULEMA, Shikaku).`
  }

  if (
    q.includes('pourquoi') ||
    q.includes('why hire') ||
    q.includes('points forts') ||
    q.includes('strengths') ||
    q.includes('valeur') ||
    q.includes('recruter')
  ) {
    return isEn
      ? `Why work with Andelson Teufack:\n\n1. Proven Leadership & Ownership: Promoted to Head of Inspection Digitalization at Kamer Engineering Solution, supervising interns and owning production field releases.\n2. End-to-End Engineering: Ships offline-first mobile apps with Gemini AI & BluetoothSockets, scalable Spring Boot / FastAPI APIs, Redis caching, and React/Next.js web platforms.\n3. Enterprise Integrations: Hands-on delivery with Odoo ERP, Cloudflare R2 OTA updates, n8n automation, and ESRI/PostGIS spatial data.\n4. Mentorship & Communication: Former Technical Instructor at IAI (Douala Campus) and C1 professional English proficiency.`
      : `Pourquoi collaborer avec Andelson Teufack :\n\n1. Leadership & Prise de responsabilité : Promu Responsable de la digitalisation des inspections chez Kamer Engineering Solution avec supervision technique des stagiaires.\n2. Maîtrise de bout en bout : Applications mobiles offline-first avec IA (Gemini) et BluetoothSockets, APIs Spring Boot / FastAPI, cache Redis et plateformes React / Next.js.\n3. Intégrations complexes : Expérience réelle sur Odoo ERP, mises à jour OTA via Cloudflare R2, automatisation n8n et SIG (ESRI / PostGIS / KoboCollect).\n4. Transmission & Communication : Formateur & Mentor à l’IAI (Centre de Douala) et maîtrise professionnelle de l’anglais (niveau C1).`
  }

  if (
    q.includes('kamer') ||
    q.includes('kes') ||
    q.includes('inspection') ||
    q.includes('bluetooth') ||
    q.includes('offline') ||
    q.includes('expérience') ||
    q.includes('experience') ||
    q.includes('parcours') ||
    q.includes('green power') ||
    q.includes('credix') ||
    q.includes('iai')
  ) {
    if (q.includes('iai') || q.includes('formateur') || q.includes('mentor')) {
      return isEn
        ? `Technical Instructor & Mentor at IAI (Douala Campus, Jan 2025 – May 2025):\n• Led intensive Web (React.js, JS, HTML5/CSS3) and Mobile (Flutter, Dart) courses and labs for 1st & 2nd-year students.\n• Mentored 15+ software engineering students on clean code, Git workflows, REST APIs, capstone projects, and corporate internship readiness.`
        : `Formateur & Mentor en Développement Web & Mobile à l’IAI (Centre de Douala, Janvier – Mai 2025) :\n• Animation de cours et TP intensifs en Web (React.js, JS, HTML5/CSS3) et Mobile (Flutter, Dart) pour les étudiants de 1ère et 2ème année.\n• Mentorat de +15 étudiants en génie logiciel sur le clean code, Git, les APIs REST et la préparation aux stages et certifications.`
    }

    if (q.includes('credix') || q.includes('redis') || q.includes('momokash')) {
      return isEn
        ? `Experiences at CREDIX.CAM SA (Yaoundé):\n• Mobile Development Intern (Aug – Oct 2024): Built a cross-platform mobile app migrating users from USSD, backed by a Redis session orchestration service and unit/integration tests.\n• Web Development Intern (Jul – Sep 2023): Implemented a scheduled failed-transaction reconciliation service in Momokash and a full-stack HR app (Spring Boot / React JS / JWT / Spring Security).`
        : `Expériences chez CREDIX.CAM SA (Yaoundé) :\n• Développeur Mobile Stagiaire (Août – Octobre 2024) : Migration du canal USSD vers une app mobile cross-platform avec service backend orchestrant le cache Redis et tests unitaires/intégration.\n• Développeur Web Stagiaire (Juillet – Septembre 2023) : Service backend planifié de détection des échecs de transactions et réconciliation financière sur Momokash, plus une app fullstack RH (Spring Boot / React JS / JWT / Spring Security).`
    }

    return isEn
      ? `Current & Recent Track at Kamer Engineering Solution (Douala):\n• Sep 2026 – Present (Full-Stack Developer / Head of Inspection Digitalization): Supervises interns, resolves field anomalies, engineers a BluetoothSockets mobile app for pressure-testing hardware, a web/mobile supervision platform, and an Odoo-connected internal ERP with external client portal.\n• Mar 2026 – Sep 2026 (Full-Stack Intern): Built AI-assisted offline-first inspection apps generating PDF/Word/Excel reports (JSA, Q18, Q19), collaborative QR Code/Cloudflare R2 web platform, SOCAD’EL GIS/KoboCollect ESRI/GeoJSON modules, and n8n email automation.\n• Previously: Green Power Cameroon (GMAO, Python reporting, L2 Support & audits), IAI Douala (Instructor & Mentor), and Credix.Cam SA (Fintech mobile/web).`
      : `Parcours chez Kamer Engineering Solution (Douala) & expériences antérieures :\n• Septembre 2026 – présent (Développeur Full Stack / Responsable de la digitalisation des inspections) : Supervision des stagiaires, correction continue terrain, app mobile Bluetooth d’essais de pression, plateforme de maîtrise d’œuvre et ERP interne connecté à Odoo avec accès client externe.\n• Mars 2026 – Septembre 2026 (Stagiaire Full Stack) : Apps mobiles offline-first assistées par IA (rapports PDF/Word/Excel — JSA, Q18, Q19), plateforme web multi-inspecteurs avec QR Code et Cloudflare R2, SIG SOCAD’EL (KoboCollect/ESRI/GeoJSON) et automatisation n8n.\n• Précédemment : Green Power Cameroon (GMAO MySQL/Python, Support N2, audits BDD/réseau), IAI Centre de Douala (Formateur & Mentor), et Credix.Cam SA (Fintech USSD/Flutter/Redis et Spring Boot/React).`
  }

  if (
    q.includes('projet') ||
    q.includes('project') ||
    q.includes('shikaku') ||
    q.includes('mulema') ||
    q.includes('taillorpro') ||
    q.includes('vote') ||
    q.includes('campay') ||
    q.includes('laoshi') ||
    q.includes('locative')
  ) {
    return isEn
      ? `Notable Projects:\n• MULEMA (Google Play Store): V1 corrective maintenance & volunteer V2 launch.\n• Shikaku (Google Play Store & Web): Online & local multiplayer puzzle game.\n• TaillorPro: Offline-first Flutter app for tailoring workshops.\n• MomoKash Mobile: USSD-to-Flutter migration with Spring Boot & Redis.\n• Vote - IAI: Paid electronic voting web platform with Campay payment integration.\n• Desktop Rental Manager: PyQt & MongoDB property management app.\n• Also: HR Management System (Spring Boot/React/JWT), GMAO Maintenance System (Python/MySQL), and Laoshi Consulting (Next.js/NestJS).`
      : `Projets notables :\n• MULEMA (Google Play Store) : Maintenance corrective V1 et participation bénévole au lancement V2.\n• Shikaku (Google Play Store & Web) : Jeu mobile multijoueur en ligne et local.\n• TaillorPro : Application mobile offline-first de gestion d’ateliers de couture.\n• MomoKash Mobile : Migration USSD vers Flutter avec cache Redis.\n• Vote - IAI : Plateforme web de vote par paiement avec intégration Campay.\n• Application Desktop de Gestion Locative : Interface moderne PyQt & MongoDB.\n• Également : Système RH (Spring Boot/React/JWT), GMAO (Python/MySQL) et Laoshi Consulting (Next.js/NestJS).`
  }

  if (
    q.includes('étude') ||
    q.includes('formation') ||
    q.includes('diplôme') ||
    q.includes('master') ||
    q.includes('licence') ||
    q.includes('enspd') ||
    q.includes('certification') ||
    q.includes('google')
  ) {
    return isEn
      ? `Education & Certifications:\n• Professional Master’s in Software Engineering — ENSPD (École Nationale Supérieure Polytechnique de Douala), in progress.\n• Bachelor’s Degree in Software Engineering — IAI-Cameroun (2024).\n• Baccalauréat — Lycée Bilingue de Bobongo Petit Paris (2021).\n• Certification: Google IT Support Professional Certificate (Technical Support, Networking, SysAdmin, IT Security).`
      : `Formation & Certifications :\n• Master Professionnel en Génie Logiciel — ENSPD (École Nationale Supérieure Polytechnique de Douala), en cours.\n• Licence en Génie Logiciel — IAI-Cameroun (2024).\n• Baccalauréat — Lycée Bilingue de Bobongo Petit Paris (2021).\n• Certification : Google IT Support Professional Certificate (Support technique, Réseaux, Administration systèmes, Sécurité informatique).`
  }

  if (
    q.includes('langue') ||
    q.includes('language') ||
    q.includes('anglais') ||
    q.includes('english') ||
    q.includes('français') ||
    q.includes('yemba')
  ) {
    return isEn
      ? `Languages:\n• Yemba: Native\n• French: Fluent\n• English: C1 Level (Professional business communication)`
      : `Langues :\n• Yemba : Langue maternelle\n• Français : Courant\n• Anglais : Niveau C1 (Communication professionnelle)`
  }

  if (
    q.includes('contact') ||
    q.includes('email') ||
    q.includes('téléphone') ||
    q.includes('phone') ||
    q.includes('whatsapp') ||
    q.includes('joindre')
  ) {
    return isEn
      ? `Contact details:\n• Email: teufackandelson123@gmail.com\n• Phone / WhatsApp: +237 690 819 035\n• Location: Douala, Cameroon (GMT+1)\n• LinkedIn: https://www.linkedin.com/in/andelson-teufack-97a59b279/\n• GitHub: https://github.com/AndelsonTeufack`
      : `Coordonnées directes :\n• Email : teufackandelson123@gmail.com\n• Téléphone / WhatsApp : +237 690 819 035\n• Localisation : Douala, Cameroun (GMT+1)\n• LinkedIn : https://www.linkedin.com/in/andelson-teufack-97a59b279/\n• GitHub : https://github.com/AndelsonTeufack`
  }

  return isEn
    ? `Ask me about Andelson’s current role as Head of Inspection Digitalization at Kamer Engineering Solution, his offline-first / Bluetooth / AI engineering work, his Master’s at ENSPD, or his Google Play Store projects (MULEMA, Shikaku).`
    : `Posez-moi une question sur le poste actuel d’Andelson en tant que Responsable de la digitalisation des inspections chez Kamer Engineering Solution, ses systèmes offline-first / Bluetooth / IA, son Master à l’ENSPD ou ses projets sur Google Play Store (MULEMA, Shikaku).`
}
