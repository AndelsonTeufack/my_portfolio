import { type ExperienceItem, type Language, type ProjectItem } from '@/lib/portfolio-data'
import { calculateAge } from '@/lib/utils'
import {
  ADDITIONAL_CV_FACTS,
  EMPLOYER_GROUPS,
  EMPLOYER_MAP,
  EXPERIENCE_ALIASES,
  EXPERIENCE_ALIAS_MAP,
  EXPERIENCE_MAP,
  PORTFOLIO_DATA,
  PROJECT_ALIASES,
  PROJECT_ALIAS_MAP,
  PROJECT_MAP,
  SKILL_CATEGORY_ALIASES,
  SKILL_GRAPH,
  SKILL_MAP,
  UNSUPPORTED_TECH_MAP,
  UNSUPPORTED_TECH_NODES,
  type ChatAction,
  type ChatEngineInput,
  type ChatEngineResult,
  type ChatIntent,
  type ChatMessageInput,
  type ConfidenceLevel,
  type ExtractedEntities,
  type QueryAngle,
  type QueryDepth,
  type ResolvedContextEntities,
} from '@/lib/chatbot/knowledge-graph'

interface NormalizedQuery {
  raw: string
  clean: string
  expanded: string
  tokens: string[]
  expandedTokens: string[]
  rawLower: string
}

interface ScoredIntent {
  intent: ChatIntent
  score: number
}

interface ClauseAnalysis {
  raw: string
  nq: NormalizedQuery
  entities: ExtractedEntities
  topIntent: ChatIntent
  score: number
  angle: QueryAngle
  depth: QueryDepth
}

const STOPWORDS = new Set([
  'le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'd', 'l', 'et', 'ou', 'est', 'sont',
  'a', 'au', 'aux', 'en', 'dans', 'par', 'pour', 'sur', 'avec', 'sans', 'sous', 'chez',
  'il', 'elle', 'on', 'nous', 'vous', 'ils', 'ce', 'cet', 'cette', 'ces', 'son', 'sa',
  'ses', 'qui', 'que', 'quoi', 'quel', 'quelle', 'quels', 'quelles', 'comment', 'pourquoi',
  'quand', 'combien', 'oui', 'non', 'pas', 'plus', 'tres', 'bien', 'tout', 'tous', 'toutes',
  'fait', 'faire', 'reste', 'etre', 'avoir', 'peut', 'peux', 'veut', 'veux', 'moi', 'toi',
  'the', 'a', 'an', 'and', 'or', 'is', 'are', 'was', 'were', 'be', 'been', 'in', 'on', 'at',
  'for', 'with', 'about', 'from', 'by', 'to', 'of', 'he', 'she', 'his', 'her', 'they',
  'what', 'which', 'who', 'how', 'why', 'when', 'where', 'can', 'does', 'do', 'did', 'has',
  'have', 'had', 'this', 'that', 'these', 'those', 'me', 'you', 'your', 'any', 'tell', 'more',
])

const ABBREVIATION_MAP: Record<string, string> = {
  dispo: 'disponible',
  dispos: 'disponible',
  boulot: 'travail poste',
  taf: 'travail poste',
  job: 'travail poste',
  boite: 'entreprise',
  boites: 'entreprise',
  appli: 'application',
  applis: 'application',
  app: 'application',
  apps: 'application',
  bdd: 'base de donnees',
  db: 'base de donnees',
  tel: 'telephone contact',
  num: 'numero telephone contact',
  numero: 'numero telephone contact',
  mail: 'email contact',
  joindre: 'contacter contact',
  etude: 'formation diplome',
  etudes: 'formation diplome',
  fac: 'formation universite',
  ecole: 'formation ecole',
  diplomes: 'diplome formation',
  certif: 'certification',
  certifs: 'certification',
  techno: 'competence technologie',
  technos: 'competences technologies',
  outil: 'competence outils',
  outils: 'competences outils',
  stack: 'competences architecture',
  xp: 'experience',
  xps: 'experiences',
  parcours: 'parcours experience profil',
  dev: 'developpeur',
  bosse: 'travaille',
  bosser: 'travailler',
  tjm: 'tarif tjm prix',
  tarif: 'tarif prix',
  salaire: 'salaire remuneration',
  pretentions: 'salaire tarif',
  resume: 'cv resume',
  portfolio: 'projets portfolio',
  realisations: 'projets realisations',
  loisirs: 'hobbies loisirs',
  passions: 'hobbies passions',
  passion: 'hobbies passions',
  interets: 'hobbies interets',
}

function stripDiacritics(input: string): string {
  return input.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function boundedLevenshtein(a: string, b: string, maxDist: number): number {
  if (Math.abs(a.length - b.length) > maxDist) return maxDist + 1
  if (a === b) return 0

  const prev = new Array<number>(b.length + 1)
  const curr = new Array<number>(b.length + 1)

  for (let j = 0; j <= b.length; j++) prev[j] = j

  for (let i = 1; i <= a.length; i++) {
    curr[0] = i
    let rowMin = curr[0]
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost)
      if (curr[j] < rowMin) rowMin = curr[j]
    }
    if (rowMin > maxDist) return maxDist + 1
    for (let j = 0; j <= b.length; j++) prev[j] = curr[j]
  }

  return prev[b.length]
}

const FUZZY_DICTIONARY: string[] = Array.from(
  new Set([
    'flutter',
    'sqlite',
    'bluetooth',
    'bluetoothsockets',
    'nextjs',
    'typescript',
    'javascript',
    'tailwind',
    'springboot',
    'fastapi',
    'python',
    'laravel',
    'nodejs',
    'postgresql',
    'postgis',
    'kobocollect',
    'geojson',
    'gemini',
    'docker',
    'cloudflare',
    'kubernetes',
    'terraform',
    'graphql',
    'angular',
    'pytorch',
    'tensorflow',
    'laoshi',
    'consulting',
    'momokash',
    'taillorpro',
    'mulema',
    'shikaku',
    'socadel',
    'credix',
    'kamer',
    'engineering',
    'offline',
    'competences',
    'experiences',
    'disponible',
    'architecture',
    'certification',
    'andelson',
    'teufack',
    'douala',
    'whatsapp',
    'linkedin',
    'github',
    'playwright',
    'kafka',
    'rabbitmq',
    'django',
    'firebase',
    'nestjs',
    'golang',
    'graphql',
    'svelte',
    'angular',
    'vuejs',
    'laravel',
    'fastapi',
    'mysql',
    'postgis',
    'minikube',
    'vagrant',
  ])
)

// Canonical vocabulary that must NEVER be altered by fuzzy matching (e.g., preventing nestjs -> nextjs)
const KNOWN_EXACT_TOKENS = new Set<string>([
  ...FUZZY_DICTIONARY,
  ...Object.keys(ABBREVIATION_MAP),
  ...SKILL_GRAPH.flatMap((s) => s.aliases.flatMap((a) => a.split(/\s+/))),
  ...UNSUPPORTED_TECH_NODES.flatMap((u) => u.aliases.flatMap((a) => a.split(/\s+/))),
  ...PROJECT_ALIASES.flatMap((p) => p.aliases.flatMap((a) => a.split(/\s+/))),
  ...EMPLOYER_GROUPS.flatMap((g) => g.aliases.flatMap((a) => a.split(/\s+/))),
  ...EXPERIENCE_ALIASES.flatMap((e) => e.aliases.flatMap((a) => a.split(/\s+/))),
])

function correctTokenWithDictionary(token: string): string {
  if (token.length < 5 || STOPWORDS.has(token)) return token
  if (KNOWN_EXACT_TOKENS.has(token)) return token

  const maxDist = token.length >= 8 ? 2 : 1
  let bestWord = token
  let bestDist = maxDist + 1

  for (const candidate of FUZZY_DICTIONARY) {
    if (Math.abs(candidate.length - token.length) > maxDist) continue
    // Require matching first letter for length 5-6 to prevent noisy swaps
    if (token.length <= 6 && candidate[0] !== token[0]) continue
    const dist = boundedLevenshtein(token, candidate, maxDist)
    if (dist < bestDist) {
      bestDist = dist
      bestWord = candidate
      if (dist === 1) break
    }
  }

  return bestWord
}

export function normalizeQuery(raw: string): NormalizedQuery {
  const rawLower = raw.toLowerCase()
  let text = stripDiacritics(rawLower)

  // Protect French apostrophe contractions BEFORE alias/substring matching (prevents n'est -> nest)
  text = text.replace(/\b([cdjlmnst]|qu)['’]/g, '$1 ')

  // Normalize special programming language / project symbols before punctuation removal
  text = text
    .replace(/\bc\+\+/g, ' cpp ')
    .replace(/\bc#/g, ' csharp ')
    .replace(/\basp\.net\b/g, ' dotnet ')
    .replace(/\.net\b/g, ' dotnet ')
    .replace(/\bnext\.?js\b/g, ' nextjs ')
    .replace(/\bnode\.?js\b/g, ' nodejs ')
    .replace(/\bvue\.?js\b/g, ' vuejs ')
    .replace(/\bnest\.?js\b/g, ' nestjs ')
    .replace(/\bkobo[\s-]*collect\b/g, ' kobocollect ')
    .replace(/\bsocad[\s'’-]*el\b/g, ' socadel ')
    .replace(/\btai?ll?or[\s-]*pro\b/g, ' taillorpro ')
    .replace(/\bmomo[\s-]*kash\b/g, ' momokash ')
    .replace(/\boffline[\s-]*first\b/g, ' offline first ')
    .replace(/\bbluetooth[\s-]*sockets?\b/g, ' bluetoothsockets ')
    .replace(/\bfast[\s-]*api\b/g, ' fastapi ')
    .replace(/\bspring[\s-]*boot\b/g, ' spring boot ')
    .replace(/\bcloud[\s-]*flare\s*r2\b/g, ' cloudflare r2 ')
    .replace(/\bci\s*\/\s*cd\b/g, ' cicd ')

  // Replace remaining punctuation with spaces
  text = text.replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim()

  const rawTokens = text ? text.split(' ') : []
  const tokens = rawTokens.map(correctTokenWithDictionary)

  const expandedTokens: string[] = []
  for (const tok of tokens) {
    const replacement = ABBREVIATION_MAP[tok]
    if (replacement) {
      expandedTokens.push(...replacement.split(' '))
    } else {
      expandedTokens.push(tok)
    }
  }

  return {
    raw,
    clean: tokens.join(' '),
    expanded: expandedTokens.join(' '),
    tokens,
    expandedTokens,
    rawLower,
  }
}

function hasAlias(haystack: string, alias: string): boolean {
  const normAlias = stripDiacritics(alias.toLowerCase())
    .replace(/\.js\b/g, 'js')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  if (!normAlias) return false
  const pattern = new RegExp(`(^|\\s)${escapeRegExp(normAlias)}(\\s|$)`, 'i')
  return pattern.test(haystack)
}

function hasAnyPhrase(haystack: string, phrases: string[]): boolean {
  return phrases.some((p) => hasAlias(haystack, p))
}

export function extractEntities(nq: NormalizedQuery): ExtractedEntities {
  const searchPool = `${nq.clean} ${nq.expanded}`

  const projects = new Set<string>()
  const experiences = new Set<string>()
  const employers = new Set<string>()
  const skills = new Set<string>()
  const skillCategories = new Set<string>()
  const unsupportedTech = new Set<string>()

  for (const pa of PROJECT_ALIASES) {
    // Do not auto-promote generic GIS words to socadel-gis unless GIS/SOCAD'EL pipeline or project is asked
    if (pa.projectId === 'socadel-gis') {
      const strongProjectMatch = hasAnyPhrase(searchPool, [
        'socadel',
        'socad el',
        'sig socadel',
        'gis socadel',
      ])
      const gisPipelineWithProject =
        hasAnyPhrase(searchPool, ['kobocollect', 'esri', 'geojson']) &&
        hasAnyPhrase(searchPool, ['projet', 'project', 'chaine', 'pipeline', 'donnees', 'etude', 'cas', 'architecture'])
      if (strongProjectMatch || gisPipelineWithProject) {
        projects.add(pa.projectId)
      }
      continue
    }

    if (hasAnyPhrase(searchPool, pa.aliases)) {
      projects.add(pa.projectId)
    }
  }

  for (const ea of EXPERIENCE_ALIASES) {
    if (hasAnyPhrase(searchPool, ea.aliases)) {
      experiences.add(ea.experienceId)
    }
  }

  for (const eg of EMPLOYER_GROUPS) {
    if (hasAnyPhrase(searchPool, eg.aliases)) {
      employers.add(eg.id)
    }
  }

  // Nuanced employer + role discriminators
  if (employers.has('kamer-engineering') || hasAnyPhrase(searchPool, ['poste actuel', 'role actuel', 'en ce moment', 'aujourd hui', 'actuellement', 'currently'])) {
    if (hasAnyPhrase(searchPool, ['actuel', 'actuellement', 'aujourd hui', 'en ce moment', 'lead', 'responsable', 'bluetooth', 'odoo', 'erp', 'maitrise d oeuvre', 'current', 'now'])) {
      experiences.add('kes-lead')
    } else if (hasAnyPhrase(searchPool, ['premier stage', 'ancien stage', 'stage', 'stagiaire', 'internship', 'intern'])) {
      experiences.add('kes-intern')
    }
  }

  if (employers.has('green-power')) {
    if (hasAnyPhrase(searchPool, ['gmao', 'maintenance', 'deuxieme', 'second', '2eme'])) {
      experiences.add('green-power-2')
    }
    if (hasAnyPhrase(searchPool, ['rh', 'ressources humaines', 'hr', 'premier', 'first', '1er'])) {
      experiences.add('green-power-1')
    }
  }

  if (employers.has('credix')) {
    if (hasAnyPhrase(searchPool, ['mobile', 'momokash', 'flutter', 'reconciliation'])) {
      experiences.add('credix-mobile')
    }
    if (hasAnyPhrase(searchPool, ['web', 'laravel', 'php', 'site'])) {
      experiences.add('credix-web')
    }
  }

  // Map MomoKash mention also to credix-mobile context when discussing experience/role
  if (projects.has('momokash') && hasAnyPhrase(searchPool, ['experience', 'stage', 'role', 'credix'])) {
    experiences.add('credix-mobile')
  }

  // Indirect phrasing recognition for flagship projects
  if (
    hasAnyPhrase(searchPool, [
      'livre un site',
      'vrai client',
      'site client',
      'client reel',
      'site web complet',
      'shipped a client website',
      'real client website',
    ])
  ) {
    projects.add('laoshi-consulting')
  }

  if (
    hasAnyPhrase(searchPool, [
      'paiement mobile',
      'reconciliation financiere',
      'reconciliation',
      'mobile payments',
      'financial reconciliation',
      'mobile money',
      'campay',
      'fintech',
    ])
  ) {
    projects.add('momokash')
    if (hasAnyPhrase(searchPool, ['campay', 'vote', 'mobile money', 'mobile payments'])) {
      projects.add('vote-iai')
    }
  }

  for (const sk of SKILL_GRAPH) {
    if (hasAnyPhrase(searchPool, sk.aliases)) {
      skills.add(sk.id)
    }
  }

  for (const cat of SKILL_CATEGORY_ALIASES) {
    if (hasAnyPhrase(searchPool, cat.aliases)) {
      skillCategories.add(cat.id)
    }
  }

  for (const ut of UNSUPPORTED_TECH_NODES) {
    if (ut.id === 'golang') {
      const goDetected =
        hasAnyPhrase(searchPool, ut.aliases) ||
        /\b(langage go|go language|stack go|en go|know go|use go|master go|maitrise.*go|developp.*go)\b/i.test(
          searchPool
        )
      if (goDetected) unsupportedTech.add(ut.id)
      continue
    }

    if (ut.id === 'nestjs') {
      const nestDetected =
        hasAnyPhrase(searchPool, ['nestjs', 'nest js']) ||
        (/\bnest\b/i.test(nq.clean) &&
          hasAnyPhrase(searchPool, ['framework', 'backend', 'api', 'node', 'typescript', 'laoshi', 'nextjs', 'avec', 'sans', 'utilise']))
      if (nestDetected) unsupportedTech.add(ut.id)
      continue
    }

    if (ut.id === 'dotnet') {
      if (/\bcsharp\b|\bdotnet\b/.test(searchPool)) unsupportedTech.add(ut.id)
      continue
    }

    if (hasAnyPhrase(searchPool, ut.aliases)) {
      unsupportedTech.add(ut.id)
    }
  }

  // Handle C# detected directly from cleaned symbols
  if (searchPool.includes('csharp')) {
    unsupportedTech.add('dotnet')
  }

  const masterAsVerbInEnglish = /\b(?:does|did|can|could|will|would)\s+(?:he|she|andelson)\s+master\b|\bto\s+master\b/i.test(
    searchPool
  )

  const educationAsked =
    hasAnyPhrase(searchPool, [
      'formation',
      'formations',
      'diplome',
      'diplomes',
      'etude',
      'etudes',
      'licence',
      'enspd',
      'polytechnique',
      'baccalaureat',
      'bac',
      'certification',
      'certifications',
      'google it support',
      'education',
      'degree',
      'university',
      'school',
      'master degree',
      'masters degree',
    ]) || (hasAlias(searchPool, 'master') && !masterAsVerbInEnglish)

  const cvAsked = hasAnyPhrase(searchPool, ['cv', 'curriculum', 'curriculum vitae', 'resume', 'pdf'])

  const contactAsked = hasAnyPhrase(searchPool, [
    'contact',
    'contacter',
    'joindre',
    'email',
    'mail',
    'telephone',
    'whatsapp',
    'linkedin',
    'github',
    'ecrire',
    'reach',
    'hire',
    'recruter',
    'embaucher',
  ])

  const salaryOrRateAsked = hasAnyPhrase(searchPool, [
    'tjm',
    'tarif',
    'tarifs',
    'salaire',
    'salaires',
    'remuneration',
    'pretention',
    'pretentions',
    'combien il coute',
    'combien coute',
    'honoraires',
    'budget',
    'prix',
    'salary',
    'rate',
    'hourly rate',
    'day rate',
    'compensation',
  ])

  const ageAsked = hasAnyPhrase(searchPool, [
    'age',
    'quel age',
    'naissance',
    'ne en',
    'nee en',
    'combien d annees',
    'how old',
    'birth',
    'born',
  ])

  const hobbiesAsked = hasAnyPhrase(searchPool, [
    'hobbies',
    'hobby',
    'loisirs',
    'loisir',
    'centres d interet',
    'centre d interet',
    'temps libre',
    'aime faire',
    'echecs',
    'billard',
    'football',
    'lecture',
    'interests',
  ])

  return {
    projects: Array.from(projects),
    experiences: Array.from(experiences),
    employers: Array.from(employers),
    skills: Array.from(skills),
    skillCategories: Array.from(skillCategories),
    unsupportedTech: Array.from(unsupportedTech),
    educationAsked,
    contactAsked,
    cvAsked,
    salaryOrRateAsked,
    ageAsked,
    hobbiesAsked,
  }
}

export function detectQueryAngle(nq: NormalizedQuery): QueryAngle {
  const s = `${nq.clean} ${nq.expanded}`
  if (
    hasAnyPhrase(s, [
      'architecture',
      'comment ca marche',
      'sous le capot',
      'sync',
      'synchronisation',
      'conflit',
      'conflits',
      'offline',
      'schema',
      'base de donnees',
      'securite',
      'stateless',
      'jwt',
      'rbac',
      'scaler',
      'technique',
      'how does it work',
      'under the hood',
      'conflict',
      'cto',
    ])
  ) {
    return 'architecture'
  }
  if (
    hasAnyPhrase(s, [
      'role',
      'mission',
      'responsabilite',
      'createur',
      'auteur',
      'contributeur',
      'gere',
      'encadrement',
      'ownership',
      'created',
      'contributed',
    ])
  ) {
    return 'role'
  }
  if (
    hasAnyPhrase(s, [
      'stack',
      'technologie',
      'technologies',
      'outils',
      'langages',
      'avec quoi',
      'framework',
      'built with',
    ])
  ) {
    return 'stack'
  }
  if (
    hasAnyPhrase(s, [
      'probleme',
      'problematique',
      'besoin',
      'solution',
      'resultat',
      'resultats',
      'impact',
      'benefice',
      'valeur',
      'problem',
      'outcome',
      'impact',
    ])
  ) {
    return 'problem_result'
  }
  if (hasAnyPhrase(s, ['lien', 'liens', 'url', 'voir', 'demo', 'play store', 'live', 'code', 'link', 'links'])) {
    return 'links'
  }
  return 'general'
}

export function detectQueryDepth(nq: NormalizedQuery): QueryDepth {
  const s = `${nq.clean} ${nq.expanded}`
  if (
    hasAnyPhrase(s, [
      'en bref',
      'bref',
      'resume',
      'rapide',
      'rapidement',
      '2 phrases',
      '30 secondes',
      'court',
      'synthese',
      'briefly',
      'short',
      'tldr',
      'summary',
    ])
  ) {
    return 'concise'
  }
  if (
    hasAnyPhrase(s, [
      'architecture',
      'cto',
      'approfondi',
      'detaille',
      'conflit',
      'concurrence',
      'stateless',
      'isolates',
      'idempotence',
      'resilient',
      'bluetoothsockets',
      'postgis',
      'deep dive',
      'scalability',
    ])
  ) {
    return 'technical'
  }
  return 'detailed'
}

export function splitCompoundQuery(raw: string): string[] {
  const trimmed = raw.trim()
  if (!trimmed) return ['']

  // 1. Split by explicit question marks, semicolons, or sentence breaks when multiple sentences exist
  const primaryParts = trimmed
    .split(/[?;]+|(?<=[.!])\s+(?=[A-ZÀ-ÿa-z]{3,})/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0)

  const candidates: string[] = []
  const explicitCoordRegex =
    /\s+(?:et aussi|ainsi que|par ailleurs|en plus|également|egalement|and also|as well as|moreover|additionally)\s+|,\s*(?:et|puis|and)\s+/i

  // Also split on bare " et " / " and " when right clause starts with a question/verb cue (avoids splitting "Flutter et Dart")
  const clauseBoundaryCoordRegex =
    /\s+(?:et|and)\s+(?=(?:quel|quels|quelle|quelles|comment|o[ùu]|combien|est-ce|parle|a-t-il|peut-il|ma[îi]trise|what|how|where|does|which|tell|can|also)\b)/i

  for (const part of primaryParts) {
    const firstPass = part
      .split(explicitCoordRegex)
      .map((s) => s.trim())
      .filter((s) => s.length > 0)

    for (const sub of firstPass) {
      const secondPass = sub
        .split(clauseBoundaryCoordRegex)
        .map((s) => s.trim())
        .filter((s) => s.length > 0)

      if (secondPass.length > 1 && secondPass.every((s) => s.split(/\s+/).length >= 3)) {
        candidates.push(...secondPass)
      } else {
        candidates.push(sub)
      }
    }
  }

  return candidates.slice(0, 3)
}

function hasAnaphoraOrFollowUpMarker(nq: NormalizedQuery): boolean {
  const s = `${nq.clean} ${nq.expanded}`
  if (
    hasAnyPhrase(s, [
      'celui',
      'celle',
      'ce projet',
      'cette app',
      'cette application',
      'cette experience',
      'ce poste',
      'ce role',
      'la bas',
      'chez eux',
      'son architecture',
      'sa stack',
      'ses fonctionnalites',
      'quel resultat',
      'quels resultats',
      'quel probleme',
      'le lien',
      'la demo',
      'le premier',
      'le second',
      'le deuxieme',
      'la premiere',
      'la seconde',
      'la deuxieme',
      'l autre',
      'approfondis',
      'detaille plus',
      'dis m en plus',
      'et dessus',
      'dessus',
      'on it',
      'this project',
      'that project',
      'this app',
      'that role',
      'there',
      'its architecture',
      'its stack',
      'tell me more',
      'more details',
      'elaborate',
      'the first one',
      'the second one',
      'second one',
      'first one',
      'what about',
      'and the stack',
    ])
  ) {
    return true
  }

  // English pronoun "it" / "its" in a short follow-up question
  if (nq.tokens.length <= 10 && /\b(it|its)\b/i.test(nq.clean)) {
    return true
  }

  // Ordinal short reply ("le 1", "la 2", "1er", "2eme")
  if (nq.tokens.length <= 5 && /\b(1er|2eme|premier|deuxieme|seconde|second|first|mobile|web|gmao|rh|lead|stage)\b/i.test(nq.clean)) {
    return true
  }

  return false
}

function isDefinitelyOutOfScopeText(nq: NormalizedQuery, entities: ExtractedEntities): boolean {
  const s = `${nq.clean} ${nq.expanded}`

  const offTopicSignals = [
    'meteo',
    'temps qu il fait',
    'quel temps',
    'weather',
    'recette',
    'cuisine',
    'ndole',
    'eru',
    'pizza',
    'gateau',
    'recipe',
    'president',
    'politique',
    'election presidentielle',
    'bitcoin',
    'crypto',
    'bourse',
    'trading',
    'ligue des champions',
    'score du match',
    'blague',
    'raconte une blague',
    'joke',
    'horoscope',
    'capitale du',
    'capitale de',
    'equation',
    'ecris moi un script',
    'ecris un code',
    'write me a python script',
    'traduire en',
    'medicament',
    'symptome',
    'religion',
    'dieux',
    'film',
    'serie netflix',
  ]

  // Never classify Football as off-topic if user asks about Andelson's hobbies!
  if (entities.hobbiesAsked || hasAnyPhrase(s, ['andelson', 'teufack', 'son profil', 'ses loisirs', 'ses hobbies'])) {
    return false
  }

  if (hasAnyPhrase(s, offTopicSignals)) {
    return true
  }

  return false
}

function isUnknownFactualQuestion(nq: NormalizedQuery, entities: ExtractedEntities): boolean {
  if (entities.salaryOrRateAsked) return true
  const s = `${nq.clean} ${nq.expanded}`
  return hasAnyPhrase(s, [
    'moyenne generale',
    'moyenne',
    'note au bac',
    'notes au bac',
    'notes au baccalaureat',
    'quelles notes',
    'ses notes',
    'notes scolaires',
    'mention au bac',
    'gpa',
    'exact grades',
    'grades',
    'situation matrimoniale',
    'marie',
    'enfants',
    'adresse exacte',
    'quartier exact',
    'numero de cni',
    'passeport',
    'mot de passe',
    'chiffre d affaires',
    'revenue',
    'clients confidentiels',
    'noms des clients anonymises',
    'quel client kes',
  ])
}

function scoreSingleClause(
  nq: NormalizedQuery,
  entities: ExtractedEntities,
  hasContext: boolean,
  isResolvedDisambiguation: boolean
): ScoredIntent[] {
  const s = `${nq.clean} ${nq.expanded}`
  const scores = new Map<ChatIntent, number>()
  const addScore = (intent: ChatIntent, val: number) => {
    scores.set(intent, Math.max(scores.get(intent) ?? 0, val))
  }

  // 0. If user explicitly resolved a prior disambiguation prompt, honor experience_detail immediately
  if (isResolvedDisambiguation && entities.experiences.length > 0) {
    return [{ intent: 'experience_detail', score: 0.98 }]
  }

  // 1. Out of scope guard (high priority when explicit & no portfolio entity)
  if (isDefinitelyOutOfScopeText(nq, entities)) {
    return [{ intent: 'out_of_scope', score: 0.96 }]
  }

  // 2. Unknown factual facts (salary/TJM, confidential NDA client names, grades)
  if (isUnknownFactualQuestion(nq, entities)) {
    addScore('unknown_factual', 0.95)
  }

  // 3. Pure Greeting / Farewell
  const isGreetingPhrase = hasAnyPhrase(s, [
    'bonjour',
    'salut',
    'bonsoir',
    'coucou',
    'hello',
    'hi',
    'hey',
    'good morning',
    'good afternoon',
    'good evening',
  ])
  const isFarewellPhrase = hasAnyPhrase(s, [
    'merci',
    'merci beaucoup',
    'au revoir',
    'a bientot',
    'bonne journee',
    'bonne soiree',
    'bye',
    'goodbye',
    'thanks',
    'thank you',
    'see you',
    'c est tout',
  ])

  const hasAnyDomainEntity =
    entities.projects.length > 0 ||
    entities.experiences.length > 0 ||
    entities.employers.length > 0 ||
    entities.skills.length > 0 ||
    entities.skillCategories.length > 0 ||
    entities.unsupportedTech.length > 0 ||
    entities.educationAsked ||
    entities.contactAsked ||
    entities.cvAsked ||
    entities.ageAsked ||
    entities.hobbiesAsked ||
    entities.salaryOrRateAsked

  if (isGreetingPhrase && nq.tokens.length <= 6 && !hasAnyDomainEntity && !hasContext) {
    addScore('greeting', 0.96)
  }
  if (isFarewellPhrase && nq.tokens.length <= 7 && !hasAnyDomainEntity) {
    addScore('farewell', 0.95)
  }

  // 4. Ambiguity detection on multi-role employers
  const needsEmployerDisambiguation =
    !isResolvedDisambiguation &&
    entities.employers.some((empId) => {
      const grp = EMPLOYER_MAP.get(empId)
      return grp && grp.experienceIds.length > 1
    }) &&
    entities.experiences.length === 0 &&
    entities.projects.length === 0 &&
    !hasAnyPhrase(s, ['toutes', 'tous', 'liste', 'all', 'resume global', 'parcours complet'])

  if (needsEmployerDisambiguation) {
    addScore('disambiguation_needed', 0.9)
  }

  // 5. Experience Detail
  if (entities.experiences.length > 0) {
    addScore('experience_detail', 0.89)
  } else if (
    hasAnyPhrase(s, ['poste actuel', 'travaille ou', 'fait actuellement', 'role actuel', 'current role', 'where does he work'])
  ) {
    entities.experiences.push('kes-lead')
    addScore('experience_detail', 0.89)
  }

  // 6. Project Detail
  if (entities.projects.length > 0) {
    addScore('project_detail', 0.9)
  }

  // 7. Cross-cutting Technical Architecture (Offline / AI / Bluetooth / Security / CTO)
  const archHowCue = hasAnyPhrase(s, [
    'comment',
    'how',
    'architecture',
    'strategie',
    'strategy',
    'sous le capot',
    'under the hood',
    'cto',
    'integre',
    'integrates',
    'securise',
    'secures',
    'fonctionne',
    'works',
  ])
  const archDomainCue = hasAnyPhrase(s, [
    'offline',
    'sans connexion',
    'hors ligne',
    'sync',
    'synchronisation',
    'conflit',
    'gemini',
    'llm',
    'prompt',
    'jwt',
    'rbac',
    'bluetooth',
    'bluetoothsockets',
    'capteur de pression',
    'piliers d ingenierie',
  ])

  if (entities.projects.length === 0 && archHowCue && archDomainCue) {
    addScore('architecture_offline_ai', 0.92)
  } else if (
    entities.projects.length === 0 &&
    hasAnyPhrase(s, [
      'architecture offline',
      'offline first',
      'resolution de conflits',
      'gestion des conflits',
      'strategie de synchronisation',
      'anti hallucination',
      'piliers d ingenierie',
      'principes d architecture',
      'offline strategy',
      'sync strategy',
      'conflict resolution',
    ])
  ) {
    addScore('architecture_offline_ai', 0.91)
  }

  // 8. Skill Verification (known skill or unsupported tech)
  if (entities.unsupportedTech.length > 0) {
    addScore('skill_verification', entities.projects.length > 0 ? 0.84 : 0.91)
  }
  if (entities.skills.length > 0) {
    const verificationCue = hasAnyPhrase(s, [
      'maitrise',
      'connais',
      'connait',
      'utilise',
      'fait du',
      'deja utilise',
      'niveau',
      'competence en',
      'experience avec',
      'est ce qu il',
      'a t il',
      'does he know',
      'does he master',
      'proficient',
      'used',
      'experience with',
      'know',
    ])
    const baseSkillScore = verificationCue ? 0.9 : entities.projects.length > 0 ? 0.65 : 0.85
    addScore('skill_verification', baseSkillScore)
  }

  // 9. Skills Overview (explicit stack/category overview without specific tech hijacking)
  const isOverviewCue = hasAnyPhrase(s, [
    'competences',
    'competence',
    'stack technique',
    'savoir faire',
    'technologies maitrisees',
    'ses technos',
    'technos mobile',
    'langages de programmation',
    'notions',
    'skills',
    'tech stack',
    'capabilities',
    'quels outils',
    'quelle stack',
  ])
  if (isOverviewCue && entities.projects.length === 0 && !archHowCue) {
    addScore('skills_overview', entities.skillCategories.length > 0 ? 0.89 : 0.86)
  } else if (
    entities.skillCategories.length > 0 &&
    entities.skills.length === 0 &&
    entities.projects.length === 0 &&
    !entities.contactAsked &&
    !entities.educationAsked
  ) {
    addScore('skills_overview', 0.87)
  }

  // 10. Projects Overview
  if (
    hasAnyPhrase(s, [
      'projets',
      'projet',
      'realisations',
      'applications publiees',
      'play store',
      'google play',
      'portfolio',
      'principaux projets',
      'meilleurs projets',
      'etudes de cas',
      'projects',
      'published apps',
      'case studies',
    ]) &&
    entities.projects.length === 0
  ) {
    addScore('projects_overview', 0.88)
  }

  // 11. Experiences Overview
  if (
    hasAnyPhrase(s, [
      'experiences',
      'experience',
      'parcours professionnel',
      'entreprises',
      'quelles entreprises',
      'dans quelles boites',
      'historique pro',
      'stages',
      'carriere',
      'ou a t il travaille',
      'where has he worked',
      'which companies',
      'work history',
      'career',
      'past roles',
    ]) &&
    entities.experiences.length === 0 &&
    !needsEmployerDisambiguation
  ) {
    addScore('experiences_overview', 0.88)
  }

  // 12. Education & Certifications
  if (entities.educationAsked) {
    addScore('education_certifications', 0.91)
  }

  // 13. Languages & Soft Skills (including mentoring/supervision/anglophone)
  if (
    hasAnyPhrase(s, [
      'langues',
      'langue',
      'anglais',
      'anglophone',
      'francais',
      'francophone',
      'yemba',
      'c1',
      'bilingue',
      'bilingual',
      'soft skills',
      'qualites humaines',
      'qualites',
      'mentorat',
      'mentor',
      'mentore',
      'encadre',
      'encadrer',
      'encadrement',
      'supervise',
      'superviser',
      'etudiants',
      'stagiaires',
      'leadership',
      'travail en equipe',
      'languages',
      'english',
      'french',
      'soft skill',
      'mentoring',
    ])
  ) {
    addScore('languages_softskills', 0.9)
  }

  // 14. Availability & Mobility
  const strongAvailCue = hasAnyPhrase(s, [
    'disponible',
    'disponibilite',
    'freelance',
    'cdi',
    'remote',
    'teletravail',
    'presentiel',
    'mobilite',
    'ouvert aux opportunites',
    'delai de reponse',
    'localisation',
    'fuseau horaire',
    'available',
    'availability',
    'open to work',
    'relocate',
    'timezone',
  ])
  if (strongAvailCue) {
    addScore('availability_mobility', hasAnyPhrase(s, ['disponible', 'freelance', 'remote', 'teletravail', 'opportunite', 'hire', 'available']) ? 0.91 : 0.82)
  }

  // 15. Contact & CV
  if (entities.contactAsked || entities.cvAsked) {
    addScore('contact_cv', 0.93)
  }

  // 16. Identity / Bio / Age / Hobbies / Recruiter Fit Pitch
  const isRecruiterPitch = hasAnyPhrase(s, [
    'presente moi le profil',
    'presente moi andelson',
    'pourquoi il correspond',
    'explain why he fits',
    'summarize andelson',
    'recrutons',
    'looking for a',
  ])
  if (
    isRecruiterPitch ||
    entities.ageAsked ||
    entities.hobbiesAsked ||
    hasAnyPhrase(s, [
      'qui est',
      'presente moi',
      'presente andelson',
      'parle moi d andelson',
      'parle moi de lui',
      'a propos',
      'profil',
      'resume du profil',
      'biographie',
      'parcours global',
      'introduce',
      'who is',
      'about him',
      'background',
    ])
  ) {
    addScore('identity_bio', isRecruiterPitch ? 0.94 : entities.ageAsked || entities.hobbiesAsked ? 0.91 : 0.86)
  }

  // Fallback low-signal detection
  if (scores.size === 0) {
    // Check if the query mentions general engineering / portfolio words
    if (hasAnyPhrase(s, ['andelson', 'teufack', 'developpeur', 'ingenieur', 'portfolio', 'competence', 'projet'])) {
      addScore('identity_bio', 0.48)
    } else {
      addScore('out_of_scope', 0.25)
    }
  }

  return Array.from(scores.entries())
    .map(([intent, score]) => ({ intent, score }))
    .sort((a, b) => b.score - a.score)
}

function resolveConversationContext(
  history: ChatMessageInput[],
  currentNq: NormalizedQuery,
  currentEntities: ExtractedEntities
): {
  resolvedEntities: ExtractedEntities
  hasContextBoost: boolean
  isResolvedDisambiguation: boolean
} {
  const resolved: ExtractedEntities = {
    ...currentEntities,
    projects: [...currentEntities.projects],
    experiences: [...currentEntities.experiences],
    employers: [...currentEntities.employers],
    skills: [...currentEntities.skills],
    skillCategories: [...currentEntities.skillCategories],
    unsupportedTech: [...currentEntities.unsupportedTech],
  }

  if (history.length === 0) {
    return { resolvedEntities: resolved, hasContextBoost: false, isResolvedDisambiguation: false }
  }

  // Never inherit previous context if current message is a clear greeting, farewell, out-of-scope, or contact/education standalone query
  if (isDefinitelyOutOfScopeText(currentNq, currentEntities)) {
    return { resolvedEntities: resolved, hasContextBoost: false, isResolvedDisambiguation: false }
  }

  const lastAssistantMsg = [...history].reverse().find((m) => m.role === 'assistant')
  const assistantAskedDisambiguation = lastAssistantMsg
    ? /Lequel|Laquelle|Souhaitez-vous zoomer|Souhaitez-vous explorer|Which one|first engagement|second engagement/i.test(
        lastAssistantMsg.content
      )
    : false

  // Extract most recent entities from prior user + assistant turns (most recent first)
  let recentProjects: string[] = []
  let recentExperiences: string[] = []
  let recentEmployers: string[] = []
  let recentSkills: string[] = []

  const recentSlice = history.slice(-6).reverse()
  for (const msg of recentSlice) {
    const msgNq = normalizeQuery(msg.content)
    const msgEnt = extractEntities(msgNq)
    if (recentProjects.length === 0 && msgEnt.projects.length > 0) recentProjects = msgEnt.projects
    if (recentExperiences.length === 0 && msgEnt.experiences.length > 0) recentExperiences = msgEnt.experiences
    if (recentEmployers.length === 0 && msgEnt.employers.length > 0) recentEmployers = msgEnt.employers
    if (recentSkills.length === 0 && msgEnt.skills.length > 0) recentSkills = msgEnt.skills
  }

  // Handle ordinal/role resolution after disambiguation prompt
  if (assistantAskedDisambiguation && recentEmployers.length > 0) {
    const employerId = recentEmployers[0]
    const group = EMPLOYER_MAP.get(employerId)
    const s = `${currentNq.clean} ${currentNq.expanded}`
    if (group && group.experienceIds.length >= 2) {
      if (
        hasAnyPhrase(s, ['premier', 'premiere', 'first', '1er', '1ere', 'lead', 'actuel', 'mobile', 'momokash', 'seconde', 'deuxieme', 'second', '2eme', 'gmao', 'rh', 'stage', 'web', 'laravel'])
      ) {
        if (employerId === 'kamer-engineering') {
          if (hasAnyPhrase(s, ['premier', 'first', '1', 'lead', 'actuel', 'courant', 'bluetooth', 'odoo'])) {
            resolved.experiences = ['kes-lead']
          } else {
            resolved.experiences = ['kes-intern']
          }
          return { resolvedEntities: resolved, hasContextBoost: true, isResolvedDisambiguation: true }
        }
        if (employerId === 'green-power') {
          if (hasAnyPhrase(s, ['deuxieme', 'seconde', 'second', '2', 'gmao', 'maintenance'])) {
            resolved.experiences = ['green-power-2']
          } else if (hasAnyPhrase(s, ['premier', 'premiere', 'first', '1', 'rh'])) {
            resolved.experiences = ['green-power-1']
          } else {
            resolved.experiences = [group.experienceIds[0]]
          }
          return { resolvedEntities: resolved, hasContextBoost: true, isResolvedDisambiguation: true }
        }
        if (employerId === 'credix') {
          if (hasAnyPhrase(s, ['premier', 'first', '1', 'mobile', 'momokash'])) {
            resolved.experiences = ['credix-mobile']
          } else {
            resolved.experiences = ['credix-web']
          }
          return { resolvedEntities: resolved, hasContextBoost: true, isResolvedDisambiguation: true }
        }
      }
    }
  }

  const hasAnaphora = hasAnaphoraOrFollowUpMarker(currentNq)
  const hasExplicitNewTarget =
    currentEntities.projects.length > 0 ||
    currentEntities.experiences.length > 0 ||
    currentEntities.employers.length > 0 ||
    currentEntities.educationAsked ||
    currentEntities.contactAsked ||
    currentEntities.cvAsked ||
    currentEntities.salaryOrRateAsked ||
    currentEntities.hobbiesAsked ||
    currentEntities.ageAsked

  if (!hasExplicitNewTarget && (hasAnaphora || (currentEntities.skills.length === 0 && currentNq.tokens.length <= 6))) {
    const angle = detectQueryAngle(currentNq)
    const isFollowUpQuestion =
      hasAnaphora || angle !== 'general' || hasAnyPhrase(currentNq.clean, ['encore', 'suite', 'detail', 'developpe', 'more', 'continue'])

    // If user explicitly says "dessus" / "on it" / "for that project", inherit recent project/experience even alongside a skill check (e.g., "A-t-il utilisé NestJS dessus ?")
    if (isFollowUpQuestion) {
      if (recentProjects.length > 0) {
        resolved.projects = [...recentProjects]
        return { resolvedEntities: resolved, hasContextBoost: true, isResolvedDisambiguation: false }
      }
      if (recentExperiences.length > 0) {
        resolved.experiences = [...recentExperiences]
        return { resolvedEntities: resolved, hasContextBoost: true, isResolvedDisambiguation: false }
      }
      if (recentEmployers.length > 0) {
        resolved.employers = [...recentEmployers]
        return { resolvedEntities: resolved, hasContextBoost: true, isResolvedDisambiguation: false }
      }
      if (recentSkills.length > 0 && currentEntities.skills.length === 0 && currentEntities.unsupportedTech.length === 0) {
        resolved.skills = [...recentSkills]
        return { resolvedEntities: resolved, hasContextBoost: true, isResolvedDisambiguation: false }
      }
    }
  }

  return { resolvedEntities: resolved, hasContextBoost: false, isResolvedDisambiguation: false }
}

function getConfidenceLevel(score: number): ConfidenceLevel {
  if (score >= 0.72) return 'high'
  if (score >= 0.45) return 'medium'
  return 'low'
}

function formatExperienceSection(exp: ExperienceItem, lang: Language, angle: QueryAngle, depth: QueryDepth): string {
  const header = `**${exp.role[lang]} — ${exp.company}** (${exp.period[lang]} · ${exp.location[lang]})`

  if (depth === 'concise') {
    const topAchievement = exp.keyAchievements[lang][0] ?? exp.summary?.[lang] ?? ''
    const stack = exp.technologies.slice(0, 6).map((t) => `\`${t}\``).join(', ')
    return lang === 'fr'
      ? `${header}\n${exp.summary?.[lang] ?? topAchievement}\n- Stack clé : ${stack}`
      : `${header}\n${exp.summary?.[lang] ?? topAchievement}\n- Key stack: ${stack}`
  }

  const lines: string[] = [header]

  if (exp.summary?.[lang]) {
    lines.push(exp.summary[lang])
  }

  const aliasMeta = EXPERIENCE_ALIAS_MAP.get(exp.id)
  if (aliasMeta?.workstreamNote && (angle === 'role' || angle === 'general' || exp.id === 'kes-lead')) {
    lines.push(`> ${aliasMeta.workstreamNote[lang]}`)
  }

  if (exp.caseStudy && (angle === 'architecture' || angle === 'role' || depth === 'technical' || exp.id === 'kes-lead')) {
    lines.push('')
    lines.push(lang === 'fr' ? '**Chantiers clés :**' : '**Key workstreams:**')
    for (const ws of exp.caseStudy.workstreams) {
      const stageBadge =
        ws.stage === 'production'
          ? lang === 'fr'
            ? '[En production]'
            : '[Production]'
          : ws.stage === 'design'
            ? lang === 'fr'
              ? '[En conception]'
              : '[In design]'
            : ''
      lines.push(`- ${stageBadge ? `**${stageBadge}** ` : ''}**${ws.title[lang]}** : ${ws.description[lang]}`)
      if (depth === 'technical' && ws.deliverables[lang].length > 0) {
        lines.push(`  - ${ws.deliverables[lang].slice(0, 2).join(' ; ')}`)
      }
    }
  } else if (angle !== 'stack' && angle !== 'links') {
    lines.push('')
    lines.push(lang === 'fr' ? '**Réalisations vérifiées :**' : '**Verified outcomes:**')
    for (const item of exp.keyAchievements[lang]) {
      lines.push(`- ${item}`)
    }
  }

  if (angle === 'stack' || angle === 'architecture' || angle === 'general') {
    lines.push('')
    lines.push(
      `${lang === 'fr' ? '**Technologies**' : '**Technologies**'} : ${exp.technologies.map((t) => `\`${t}\``).join(', ')}`
    )
  }

  if (exp.id === 'credix-mobile') {
    lines.push(
      lang === 'fr'
        ? `- **Étude de cas liée** : Application mobile fintech **MomoKash** (parcours financiers & réconciliation multi-statuts).`
        : `- **Linked case study**: **MomoKash** fintech mobile application (financial workflows & multi-state reconciliation).`
    )
  } else if (exp.id === 'kes-lead' || exp.id === 'kes-intern') {
    lines.push(
      lang === 'fr'
        ? `- **Projets liés** : Application d’inspection offline-first **KES Inspection** & chaîne géospatiale **SIG SOCAD’EL**.`
        : `- **Linked projects**: **KES Inspection** offline-first app & **SOCAD’EL GIS** geospatial pipeline.`
    )
  } else if (exp.id === 'iai-instructor') {
    lines.push(
      lang === 'fr'
        ? `- **Projet académique associé** : Plateforme **Vote IAI** (Spring Boot + Campay).`
        : `- **Related academic project**: **Vote IAI** platform (Spring Boot + Campay).`
    )
  }

  return lines.join('\n')
}

function formatProjectSection(
  proj: ProjectItem,
  lang: Language,
  angle: QueryAngle,
  depth: QueryDepth,
  unsupportedChallenges: string[]
): string {
  const aliasMeta = PROJECT_ALIAS_MAP.get(proj.id)
  const titleLine = `**${proj.title[lang]}** — *${proj.roleBadge[lang]} · ${proj.statusBadge[lang]}*`

  const lines: string[] = []

  // Directly answer an unsupported-tech challenge on this project (e.g., Laoshi + NestJS)
  if (unsupportedChallenges.length > 0) {
    for (const utId of unsupportedChallenges) {
      const ut = UNSUPPORTED_TECH_MAP.get(utId)
      if (ut?.specificClarification) {
        lines.push(`> ${ut.specificClarification[lang]}`)
        lines.push('')
      } else if (ut) {
        lines.push(
          lang === 'fr'
            ? `> Attention : **${ut.label}** n’est pas utilisé dans **${proj.title[lang]}** ni dans la stack documentée d’Andelson.`
            : `> Note: **${ut.label}** is not used in **${proj.title[lang]}** or anywhere in Andelson’s documented stack.`
        )
        lines.push('')
      }
    }
  }

  if (depth === 'concise') {
    lines.push(titleLine)
    lines.push(proj.summary[lang])
    lines.push(`${lang === 'fr' ? '**Stack**' : '**Stack**'} : ${proj.tags.map((t) => `\`${t}\``).join(', ')}`)
    if (proj.liveUrl) lines.push(`${lang === 'fr' ? 'Lien en ligne' : 'Live URL'} : ${proj.liveUrl}`)
    if (proj.playStoreUrl) lines.push(`Google Play : ${proj.playStoreUrl}`)
    return lines.join('\n')
  }

  lines.push(titleLine)
  lines.push(proj.summary[lang])

  if (aliasMeta?.ownershipNote) {
    lines.push('')
    lines.push(`- ${lang === 'fr' ? '**Rôle & périmètre**' : '**Role & scope**'} : ${aliasMeta.ownershipNote[lang]}`)
  }

  if (angle === 'problem_result' || angle === 'general' || angle === 'architecture') {
    lines.push(`- ${lang === 'fr' ? '**Problème traité**' : '**Problem**'} : ${proj.problemStatement[lang]}`)
    if (proj.resultSummary?.[lang]) {
      lines.push(`- ${lang === 'fr' ? '**Résultat / Valeur**' : '**Impact**'} : ${proj.resultSummary[lang]}`)
    }
  }

  if (angle === 'architecture' || angle === 'stack' || angle === 'general' || depth === 'technical') {
    lines.push(`- ${lang === 'fr' ? '**Architecture**' : '**Architecture**'} : ${proj.architectureNotes[lang]}`)
  }

  if (angle !== 'stack' && angle !== 'links' && proj.highlights[lang].length > 0) {
    lines.push('')
    lines.push(lang === 'fr' ? '**Points clés :**' : '**Key highlights:**')
    for (const h of proj.highlights[lang]) {
      lines.push(`- ${h}`)
    }
  }

  lines.push('')
  lines.push(`${lang === 'fr' ? '**Stack**' : '**Stack**'} : ${proj.tags.map((t) => `\`${t}\``).join(', ')}`)

  const linkParts: string[] = []
  if (proj.liveUrl) linkParts.push(`[${lang === 'fr' ? 'Voir en ligne' : 'Live demo'}](${proj.liveUrl})`)
  if (proj.playStoreUrl) linkParts.push(`[Google Play Store](${proj.playStoreUrl})`)
  if (proj.codeUrl) linkParts.push(`[Code](${proj.codeUrl})`)
  if (linkParts.length > 0) {
    lines.push(`${lang === 'fr' ? '**Liens**' : '**Links**'} : ${linkParts.join(' · ')}`)
  }

  return lines.join('\n')
}

function composeSkillVerification(entities: ExtractedEntities, lang: Language): string {
  const parts: string[] = []

  for (const skId of entities.skills) {
    const sk = SKILL_MAP.get(skId)
    if (!sk) continue

    const levelTag =
      sk.level === 'notion'
        ? lang === 'fr'
          ? 'Notions & Bases'
          : 'Foundations / Notions'
        : sk.level === 'cv_tool'
          ? lang === 'fr'
            ? 'Pratique / Outil documenté'
            : 'Documented Practical Tool'
          : lang === 'fr'
            ? 'Compétence confirmée en production'
            : 'Production-Verified Skill'

    const exps = sk.experienceIds
      .map((id) => EXPERIENCE_MAP.get(id))
      .filter((x): x is ExperienceItem => Boolean(x))
      .map((e) => `${e.company} (${e.role[lang]})`)

    const projs = sk.projectIds
      .map((id) => PROJECT_MAP.get(id))
      .filter((x): x is ProjectItem => Boolean(x))
      .map((p) => `**${p.title[lang]}**`)

    const lines: string[] = [`**${sk.label}** — *${levelTag}*`, sk.evidenceSummary[lang]]
    if (projs.length > 0) {
      lines.push(`- ${lang === 'fr' ? 'Projets associés' : 'Related projects'} : ${projs.join(', ')}`)
    }
    if (exps.length > 0) {
      lines.push(`- ${lang === 'fr' ? 'Expériences liées' : 'Related roles'} : ${exps.join(' ; ')}`)
    }
    parts.push(lines.join('\n'))
  }

  for (const utId of entities.unsupportedTech) {
    const ut = UNSUPPORTED_TECH_MAP.get(utId)
    if (!ut) continue

    if (ut.specificClarification) {
      parts.push(`**${ut.label}** — *${lang === 'fr' ? 'Non revendiqué' : 'Not Claimed'}*\n${ut.specificClarification[lang]}`)
    } else {
      const alternatives = ut.closestRealSkills
        .map((id) => SKILL_MAP.get(id)?.label)
        .filter((l): l is string => Boolean(l))
        .map((l) => `\`${l}\``)
        .join(', ')

      parts.push(
        lang === 'fr'
          ? `**${ut.label}** — *Non documenté*\n**${ut.label}** ne figure pas parmi les compétences documentées dans le portfolio ni sur le CV d’Andelson. Sur ce type de besoin, ses équivalents vérifiés sont : ${alternatives}.`
          : `**${ut.label}** — *Not Documented*\n**${ut.label}** is not listed in Andelson’s portfolio or CV. For similar requirements, his verified equivalents are: ${alternatives}.`
      )
    }
  }

  return parts.join('\n\n')
}

function buildClauseResponse(
  intent: ChatIntent,
  entities: ExtractedEntities,
  angle: QueryAngle,
  depth: QueryDepth,
  nq: NormalizedQuery,
  lang: Language
): { text: string; actions: ChatAction[] } {
  const age = calculateAge(PORTFOLIO_DATA.profile.birthDate)
  const contact = PORTFOLIO_DATA.profile.contact
  const s = `${nq.clean} ${nq.expanded}`

  switch (intent) {
    case 'greeting': {
      return {
        text:
          lang === 'fr'
            ? `Bonjour ! Je suis l’assistant technique d’**${PORTFOLIO_DATA.profile.displayName}**. Posez-moi vos questions sur son expérience actuelle chez **Kamer Engineering Solution**, ses projets (**Laoshi Consulting**, apps **Flutter offline-first** & **Play Store**, **SIG SOCAD’EL**, **MomoKash**), sa stack ou son CV.`
            : `Hello! I’m **${PORTFOLIO_DATA.profile.displayName}**’s technical portfolio assistant. Feel free to ask about his current lead role at **Kamer Engineering Solution**, his projects (**Laoshi Consulting**, **offline-first Flutter** & **Play Store** apps, **SOCAD’EL GIS**, **MomoKash**), his stack, or his CV.`,
        actions: [
          { label: lang === 'fr' ? 'Voir les projets' : 'Explore projects', type: 'scroll', target: '#projects' },
          { label: lang === 'fr' ? 'Télécharger le CV' : 'Download CV', type: 'download', target: '/CV - Andelson TEUFACK.pdf' },
        ],
      }
    }

    case 'farewell': {
      return {
        text:
          lang === 'fr'
            ? `Avec plaisir ! Si vous souhaitez échanger avec Andelson au sujet d’un poste, d’une mission ou d’une architecture technique, vous pouvez lui écrire directement — il répond sous **24 h ouvrées**.`
            : `My pleasure! If you’d like to discuss a role, freelance mission, or software architecture with Andelson directly, reach out anytime — he responds within **24 business hours**.`,
        actions: [{ label: lang === 'fr' ? 'Contacter Andelson' : 'Contact Andelson', type: 'scroll', target: '#contact' }],
      }
    }

    case 'identity_bio': {
      const asksSoftSkillsToo = hasAnyPhrase(s, ['qualites humaines', 'qualites', 'soft skills', 'leadership'])
      if (entities.hobbiesAsked && !hasAnyPhrase(s, ['qui est', 'profil', 'parcours', 'age', 'presente'])) {
        const hobbyText =
          lang === 'fr'
            ? `**Centres d’intérêt (CV)** :\n- ${ADDITIONAL_CV_FACTS.hobbies.fr.join('\n- ')}`
            : `**Personal Interests (CV)**:\n- ${ADDITIONAL_CV_FACTS.hobbies.en.join('\n- ')}`

        const softBlock = asksSoftSkillsToo
          ? lang === 'fr'
            ? `\n\n**Qualités humaines & Leadership** :\n- ${PORTFOLIO_DATA.softSkills.fr.join('\n- ')}\n- ${ADDITIONAL_CV_FACTS.softSkillsCv.fr.slice(0, 4).join('\n- ')}`
            : `\n\n**Leadership & Behavioral Strengths**:\n- ${PORTFOLIO_DATA.softSkills.en.join('\n- ')}\n- ${ADDITIONAL_CV_FACTS.softSkillsCv.en.slice(0, 4).join('\n- ')}`
          : ''

        return {
          text: `${hobbyText}${softBlock}`,
          actions: [{ label: lang === 'fr' ? 'Télécharger le CV' : 'Download CV', type: 'download', target: '/CV - Andelson TEUFACK.pdf' }],
        }
      }

      if (entities.ageAsked && !entities.educationAsked && !entities.contactAsked && nq.tokens.length <= 7 && !entities.hobbiesAsked) {
        return {
          text:
            lang === 'fr'
              ? `**${PORTFOLIO_DATA.profile.fullName}** est né le **14 décembre 2002** : il a donc **${age} ans**. Il est basé à **Douala, Cameroun (UTC+1)**.`
              : `**${PORTFOLIO_DATA.profile.fullName}** was born on **December 14, 2002**, making him **${age} years old**. He is based in **Douala, Cameroon (UTC+1)**.`,
          actions: [{ label: lang === 'fr' ? 'Section À propos' : 'About section', type: 'scroll', target: '#about' }],
        }
      }

      const introLines: string[] =
        lang === 'fr'
          ? [
              `**${PORTFOLIO_DATA.profile.fullName}** (${age} ans) est **Développeur Full-Stack & Mobile** (*Ingénieur des Travaux Informatiques*), basé à **Douala, Cameroun**.`,
              '',
              `- **Poste actuel** : Responsable de la digitalisation des inspections chez **Kamer Engineering Solution** (promu en 6 mois après son stage).`,
              `- **Expertise cœur** : Applications mobiles **Flutter offline-first** avec assistance IA (**Gemini API**), Web full-stack (**Next.js**, **React**, **TypeScript**), backends (**Spring Boot**, **FastAPI**, **Laravel**, **Odoo**) et pipelines **SIG (KoboCollect / GeoJSON / ESRI / PostGIS)**.`,
              `- **Preuves livrées** : Site client B2B en production (**Laoshi Consulting**, full Next.js), application d’inspection terrain KES, fintech **MomoKash** (Credix.Cam SA), et contributions sur des apps **Google Play Store** (**MULEMA**, **Shikaku**).`,
              `- **Formation** : Master professionnel en Génie Logiciel à l’**ENSPD** (en cours), après une Licence à l’**IAI-Cameroun** (où il a encadré +15 étudiants).`,
            ]
          : [
              `**${PORTFOLIO_DATA.profile.fullName}** (${age} years old) is a **Full-Stack & Mobile Developer** (*Software & IT Engineer*) based in **Douala, Cameroon**.`,
              '',
              `- **Current role**: Leads inspection digitalization at **Kamer Engineering Solution** (promoted from intern in 6 months).`,
              `- **Core engineering focus**: **Offline-first Flutter** mobile apps with **Gemini AI** assistance, full-stack **Next.js / React / TypeScript**, **Spring Boot / FastAPI / Laravel / Odoo** backends, and **GIS pipelines (KoboCollect / GeoJSON / ESRI / PostGIS)**.`,
              `- **Production proof**: Live client site (**Laoshi Consulting**, 100% Next.js), KES enterprise field app, **MomoKash** fintech (Credix.Cam SA), and **Google Play Store** contributions (**MULEMA**, **Shikaku**).`,
              `- **Education**: Professional Master’s in Software Engineering at **ENSPD** (in progress), following a Bachelor’s from **IAI-Cameroun** (where he mentored 15+ students).`,
            ]

      if (entities.hobbiesAsked) {
        introLines.push('')
        introLines.push(
          lang === 'fr'
            ? `- **Centres d’intérêt (CV)** : ${ADDITIONAL_CV_FACTS.hobbies.fr.join(', ')}.`
            : `- **Interests (CV)**: ${ADDITIONAL_CV_FACTS.hobbies.en.join(', ')}.`
        )
      }
      if (entities.contactAsked) {
        introLines.push(
          lang === 'fr'
            ? `- **Contact direct** : \`${contact.email}\` · \`${contact.phone}\` (réponse sous 24 h ouvrées).`
            : `- **Direct contact**: \`${contact.email}\` · \`${contact.phone}\` (replies within 24 business hours).`
        )
      }

      return {
        text: depth === 'concise' ? introLines.slice(0, 4).join('\n') : introLines.join('\n'),
        actions: [
          { label: lang === 'fr' ? 'Voir les expériences' : 'View experience', type: 'scroll', target: '#experience' },
          { label: lang === 'fr' ? 'Voir les projets' : 'View projects', type: 'scroll', target: '#projects' },
        ],
      }
    }

    case 'experiences_overview': {
      const bullets = PORTFOLIO_DATA.experiences.map(
        (exp) => `- **${exp.role[lang]} — ${exp.company}** (*${exp.period[lang]}*) : ${exp.summary?.[lang] ?? exp.keyAchievements[lang][0]}`
      )
      return {
        text:
          lang === 'fr'
            ? `**Parcours professionnel vérifié (7 expériences)** :\n\n${bullets.join('\n')}`
            : `**Verified professional track record (7 roles)**:\n\n${bullets.join('\n')}`,
        actions: [{ label: lang === 'fr' ? 'Explorer la section Expériences' : 'Open Experience section', type: 'scroll', target: '#experience' }],
      }
    }

    case 'experience_detail': {
      const targetIds = entities.experiences.length > 0 ? entities.experiences : ['kes-lead']
      const items = targetIds
        .map((id) => EXPERIENCE_MAP.get(id))
        .filter((e): e is ExperienceItem => Boolean(e))
      return {
        text: items.map((e) => formatExperienceSection(e, lang, angle, depth)).join('\n\n---\n\n'),
        actions: [
          { label: lang === 'fr' ? 'Section Expériences' : 'Experience section', type: 'scroll', target: '#experience' },
          { label: lang === 'fr' ? 'Contacter pour un poste' : 'Discuss a role', type: 'scroll', target: '#contact' },
        ],
      }
    }

    case 'projects_overview': {
      const playStoreOnly = hasAnyPhrase(s, ['play store', 'google play', 'publiees', 'mobile'])
      const webOnly = hasAnyPhrase(s, ['web', 'site', 'nextjs'])

      const selected = PORTFOLIO_DATA.projects.filter((p) => {
        if (playStoreOnly) return Boolean(p.playStoreUrl) || p.category === 'mobile'
        if (webOnly) return p.category === 'web'
        return true
      })

      const lines = selected.map((p) => {
        const aliasMeta = PROJECT_ALIAS_MAP.get(p.id)
        const links: string[] = []
        if (p.liveUrl) links.push(`[Live](${p.liveUrl})`)
        if (p.playStoreUrl) links.push(`[Play Store](${p.playStoreUrl})`)
        const note =
          p.id === 'mulema' || p.id === 'shikaku'
            ? lang === 'fr'
              ? ' *(contribution)*'
              : ' *(contribution)*'
            : ''
        return `- **${p.title[lang]}**${note} (*${p.statusBadge[lang]}*) : ${p.summary[lang]}${
          links.length > 0 ? ` — ${links.join(' · ')}` : ''
        }${aliasMeta && p.id === 'laoshi-consulting' ? (lang === 'fr' ? ' [Full Next.js]' : ' [Full Next.js]') : ''}`
      })

      return {
        text:
          lang === 'fr'
            ? `**Projets & réalisations (${selected.length})** :\n\n${lines.join('\n')}`
            : `**Projects & Case Studies (${selected.length})**:\n\n${lines.join('\n')}`,
        actions: [
          { label: lang === 'fr' ? 'Voir la grille Projets' : 'Explore Projects', type: 'scroll', target: '#projects' },
          { label: 'GitHub', type: 'external', target: contact.github },
        ],
      }
    }

    case 'project_detail': {
      const targetIds = entities.projects
      const items = targetIds
        .map((id) => PROJECT_MAP.get(id))
        .filter((p): p is ProjectItem => Boolean(p))
      if (items.length === 0) {
        return buildClauseResponse('projects_overview', entities, angle, depth, nq, lang)
      }

      const actions: ChatAction[] = [{ label: lang === 'fr' ? 'Voir dans Projets' : 'View in Projects', type: 'scroll', target: '#projects' }]
      for (const proj of items) {
        if (proj.liveUrl) actions.push({ label: lang === 'fr' ? `Ouvrir ${proj.title[lang]}` : `Open ${proj.title[lang]}`, type: 'external', target: proj.liveUrl })
        if (proj.playStoreUrl) actions.push({ label: `Play Store · ${proj.title[lang]}`, type: 'external', target: proj.playStoreUrl })
      }

      return {
        text: items
          .map((p) => formatProjectSection(p, lang, angle, depth, entities.unsupportedTech))
          .join('\n\n---\n\n'),
        actions: actions.slice(0, 3),
      }
    }

    case 'skills_overview': {
      const cats =
        entities.skillCategories.length > 0
          ? PORTFOLIO_DATA.skillCategories.filter((c) => entities.skillCategories.includes(c.id))
          : PORTFOLIO_DATA.skillCategories

      const catBlocks = cats.map((c) => {
        const primary = c.primary.map((t) => `\`${t}\``).join(', ')
        const secondary = c.secondary.map((t) => `\`${t}\``).join(', ')
        return lang === 'fr'
          ? `- **${c.title.fr}**\n  - Cœur : ${primary}${secondary ? `\n  - Complémentaire : ${secondary}` : ''}`
          : `- **${c.title.en}**\n  - Core: ${primary}${secondary ? `\n  - Secondary: ${secondary}` : ''}`
      })

      const extraBlock =
        entities.skillCategories.length === 0
          ? lang === 'fr'
            ? `\n**Notions & Bases** : ${PORTFOLIO_DATA.skillNotions.map((n) => `\`${n}\``).join(', ')}\n**Outils complémentaires (CV)** : ${ADDITIONAL_CV_FACTS.cvExtraTools.map((n) => `\`${n}\``).join(', ')}`
            : `\n**Foundations / Notions**: ${PORTFOLIO_DATA.skillNotions.map((n) => `\`${n}\``).join(', ')}\n**Additional CV Tools**: ${ADDITIONAL_CV_FACTS.cvExtraTools.map((n) => `\`${n}\``).join(', ')}`
          : ''

      return {
        text:
          lang === 'fr'
            ? `**Compétences techniques d’Andelson** :\n\n${catBlocks.join('\n')}${extraBlock}`
            : `**Andelson’s Technical Stack**:\n\n${catBlocks.join('\n')}${extraBlock}`,
        actions: [{ label: lang === 'fr' ? 'Voir la section Compétences' : 'Explore Skills section', type: 'scroll', target: '#skills' }],
      }
    }

    case 'skill_verification': {
      const text = composeSkillVerification(entities, lang)
      return {
        text:
          text ||
          (lang === 'fr'
            ? 'Précisez la technologie que vous souhaitez vérifier (ex. Flutter, Next.js, Spring Boot, FastAPI, Odoo, Docker, Kubernetes...).'
            : 'Please specify the technology you want to verify (e.g., Flutter, Next.js, Spring Boot, FastAPI, Odoo, Docker, Kubernetes...).'),
        actions: [
          { label: lang === 'fr' ? 'Voir les compétences' : 'View skills', type: 'scroll', target: '#skills' },
          { label: lang === 'fr' ? 'Voir les projets' : 'View projects', type: 'scroll', target: '#projects' },
        ],
      }
    }

    case 'architecture_offline_ai': {
      const pillars = PORTFOLIO_DATA.pillars.map((p) => `- **${p.title[lang]}** : ${p.description[lang]}`)
      const focusAi = hasAnyPhrase(s, ['ia', 'ai', 'gemini', 'llm', 'prompt', 'hallucination'])
      const focusOffline = hasAnyPhrase(s, ['offline', 'hors ligne', 'hive', 'sqlite', 'sync', 'conflit', 'qr'])

      const deepNotes: string[] = []
      if (focusOffline || !focusAi) {
        deepNotes.push(
          lang === 'fr'
            ? `- **Offline-First Terrain (KES Inspection)** : Client **Flutter** avec persistance locale **Hive**, formulaires structurés utilisables en zone sans réseau, **synchronisation multi-inspecteurs par QR Code** et API **FastAPI / PostgreSQL** + stockage **Cloudflare R2** pour les rapports (JSA, Q18, Q19 en PDF/Word/Excel) et les mises à jour OTA.`
            : `- **Offline-First Field Engine (KES Inspection)**: **Flutter** client backed by **Hive** local persistence for zero-connectivity zones, **QR Code multi-inspector sync**, **FastAPI / PostgreSQL** backend, and **Cloudflare R2** object storage for JSA/Q18/Q19 reports (PDF/Word/Excel) and OTA updates.`
        )
      }
      if (focusAi || !focusOffline) {
        deepNotes.push(
          lang === 'fr'
            ? `- **IA Générative Appliquée (Gemini API)** : Assistance embarquée à la rédaction et normalisation des anomalies techniques dans les workflows d’inspection KES, avec structuration stricte des données de sortie.`
            : `- **Applied Generative AI (Gemini API)**: Embedded drafting assistance and structured technical anomaly normalization inside KES inspection workflows.`
        )
      }
      deepNotes.push(
        lang === 'fr'
          ? `- **Sécurité, IoT & ERP (en cours)** : API **Spring Boot** sécurisées par **JWT stateless / RBAC** (Green Power), réconciliation fintech multi-statuts (**MomoKash**), acquisition matérielle via **BluetoothSockets** et ERP interne interconnecté à **Odoo** (KES).`
          : `- **Security, IoT & ERP (active)**: Stateless **JWT / RBAC** APIs with **Spring Boot** (Green Power), multi-state fintech reconciliation (**MomoKash**), hardware telemetry over **BluetoothSockets**, and an internal ERP integrated with **Odoo** (KES).`
      )

      return {
        text:
          lang === 'fr'
            ? `**Architecture & Principes d’Ingénierie** :\n\n${pillars.join('\n')}\n\n**Détails d’implémentation vérifiés :**\n${deepNotes.join('\n')}`
            : `**Architecture & Engineering Pillars**:\n\n${pillars.join('\n')}\n\n**Verified implementation details:**\n${deepNotes.join('\n')}`,
        actions: [
          { label: lang === 'fr' ? 'Cas d’étude KES & Projets' : 'KES & Case Studies', type: 'scroll', target: '#projects' },
          { label: lang === 'fr' ? 'Télécharger le CV' : 'Download CV', type: 'download', target: '/CV - Andelson TEUFACK.pdf' },
        ],
      }
    }

    case 'education_certifications': {
      const eduLines = PORTFOLIO_DATA.education.map(
        (ed) => `- **${ed.degree[lang]}** — ${ed.institution} (*${ed.period[lang]} · ${ed.status[lang]}*)`
      )
      const certLines = PORTFOLIO_DATA.certifications.map(
        (c) => `- **${c.title}** (*${c.issuer}*) : ${c.domains[lang].join(', ')}`
      )
      const agePrefix = entities.ageAsked
        ? lang === 'fr'
          ? `- **Âge** : **${age} ans** (né le 14 décembre 2002).\n\n`
          : `- **Age**: **${age} years old** (born December 14, 2002).\n\n`
        : ''

      return {
        text:
          lang === 'fr'
            ? `${agePrefix}**Formations académiques :**\n${eduLines.join('\n')}\n\n**Certifications :**\n${certLines.join('\n')}`
            : `${agePrefix}**Academic Education:**\n${eduLines.join('\n')}\n\n**Certifications:**\n${certLines.join('\n')}`,
        actions: [
          { label: lang === 'fr' ? 'Voir À propos & Parcours' : 'View About section', type: 'scroll', target: '#about' },
          { label: lang === 'fr' ? 'Télécharger le CV' : 'Download CV', type: 'download', target: '/CV - Andelson TEUFACK.pdf' },
        ],
      }
    }

    case 'languages_softskills': {
      const langLines = PORTFOLIO_DATA.languages.map(
        (l) => `- **${l.name[lang]}** : ${l.level[lang]} (*${l.detail[lang]}*)`
      )
      const leadershipLines = PORTFOLIO_DATA.softSkills[lang].map((item) => `- ${item}`)
      const cvSoft = ADDITIONAL_CV_FACTS.softSkillsCv[lang].slice(0, 5).map((item) => `- ${item}`)

      return {
        text:
          lang === 'fr'
            ? `**Langues parlées :**\n${langLines.join('\n')}\n\n**Leadership & Terrain :**\n${leadershipLines.join('\n')}\n\n**Qualités professionnelles (CV) :**\n${cvSoft.join('\n')}`
            : `**Spoken Languages:**\n${langLines.join('\n')}\n\n**Leadership & Field Impact:**\n${leadershipLines.join('\n')}\n\n**Behavioral Strengths (CV):**\n${cvSoft.join('\n')}`,
        actions: [{ label: lang === 'fr' ? 'Télécharger le CV' : 'Download CV', type: 'download', target: '/CV - Andelson TEUFACK.pdf' }],
      }
    }

    case 'availability_mobility': {
      const av = ADDITIONAL_CV_FACTS.availability
      return {
        text:
          lang === 'fr'
            ? `**Disponibilité & Modalités** :\n\n- **Localisation & Fuseau** : ${av.timezone}\n- **Mobilité** : ${av.remoteAndMobility.fr}\n- **Types de collaboration** : ${av.contractTypes.fr.join(' · ')}\n- **Engagement de réponse** : **${av.responseTime.fr}** via le formulaire, par email (${contact.email}) ou WhatsApp.`
            : `**Availability & Work Preferences**:\n\n- **Location & Timezone**: ${av.timezone}\n- **Mobility**: ${av.remoteAndMobility.en}\n- **Engagement types**: ${av.contractTypes.en.join(' · ')}\n- **Response commitment**: **${av.responseTime.en}** via the contact form, email (${contact.email}), or WhatsApp.`,
        actions: [
          { label: lang === 'fr' ? 'Écrire à Andelson' : 'Send a message', type: 'scroll', target: '#contact' },
          { label: 'WhatsApp', type: 'external', target: 'https://wa.me/237690819035' },
        ],
      }
    }

    case 'contact_cv': {
      const prefixBlocks: string[] = []
      if (entities.ageAsked) {
        prefixBlocks.push(
          lang === 'fr'
            ? `- **Âge** : **${age} ans** (né le 14 décembre 2002).`
            : `- **Age**: **${age} years old** (born December 14, 2002).`
        )
      }
      if (entities.experiences.includes('kes-lead')) {
        const kesLead = EXPERIENCE_MAP.get('kes-lead')
        if (kesLead) {
          prefixBlocks.push(
            lang === 'fr'
              ? `- **Poste actuel** : **${kesLead.role.fr}** chez **${kesLead.company}** (*${kesLead.period.fr}*).`
              : `- **Current role**: **${kesLead.role.en}** at **${kesLead.company}** (*${kesLead.period.en}*).`
          )
        }
      }
      if (entities.educationAsked) {
        const eduSummary = PORTFOLIO_DATA.education
          .map((ed) => `**${ed.degree[lang]}** (${ed.institution}, *${ed.period[lang]}*)`)
          .join(' · ')
        prefixBlocks.push(
          lang === 'fr'
            ? `- **Formation** : ${eduSummary}.`
            : `- **Education**: ${eduSummary}.`
        )
      }

      const prefixStr = prefixBlocks.length > 0 ? `${prefixBlocks.join('\n')}\n\n` : ''

      return {
        text:
          lang === 'fr'
            ? `${prefixStr}**Coordonnées directes d’Andelson TEUFACK SONTSA** :\n\n- **Email** : \`${contact.email}\`\n- **Téléphone / WhatsApp** : \`${contact.phone}\` ([Démarrer sur WhatsApp](https://wa.me/237690819035))\n- **LinkedIn** : ${contact.linkedin}\n- **GitHub** : ${contact.github}\n- **CV PDF** : Téléchargeable directement ci-dessous.\n- **Délai de réponse** : Sous **24 h ouvrées** (Douala · UTC+1).`
            : `${prefixStr}**Direct Contact Details — Andelson TEUFACK SONTSA**:\n\n- **Email**: \`${contact.email}\`\n- **Phone / WhatsApp**: \`${contact.phone}\` ([Chat on WhatsApp](https://wa.me/237690819035))\n- **LinkedIn**: ${contact.linkedin}\n- **GitHub**: ${contact.github}\n- **PDF Resume**: Available for instant download below.\n- **Response time**: Within **24 business hours** (Douala · UTC+1).`,
        actions: [
          { label: lang === 'fr' ? 'Télécharger le CV (PDF)' : 'Download CV (PDF)', type: 'download', target: '/CV - Andelson TEUFACK.pdf' },
          { label: lang === 'fr' ? 'Formulaire de contact' : 'Contact form', type: 'scroll', target: '#contact' },
          { label: 'LinkedIn', type: 'external', target: contact.linkedin },
        ],
      }
    }

    case 'disambiguation_needed': {
      const empId = entities.employers[0]
      const grp = EMPLOYER_MAP.get(empId)
      if (!grp) {
        return buildClauseResponse('experiences_overview', entities, angle, depth, nq, lang)
      }
      const choices = grp.experienceIds
        .map((id) => {
          const exp = EXPERIENCE_MAP.get(id)
          if (!exp) return null
          return `- **${exp.role[lang]}** (*${exp.period[lang]}*) — ${exp.summary?.[lang] ?? exp.keyAchievements[lang][0]}`
        })
        .filter((x): x is string => Boolean(x))

      return {
        text: `${grp.disambiguationPrompt[lang]}\n\n${choices.join('\n')}`,
        actions: [{ label: lang === 'fr' ? 'Voir toute la section Expériences' : 'Open Experience section', type: 'scroll', target: '#experience' }],
      }
    }

    case 'unknown_factual': {
      if (entities.salaryOrRateAsked) {
        return {
          text:
            lang === 'fr'
              ? `Andelson ne publie pas de **TJM (tarif journalier), prix forfaitaire ou prétention salariale fixe** dans son portfolio ou son CV, car les modalités dépendent du périmètre technique et du type de contrat (CDI, freelance ou conseil).\n\nVous pouvez lui préciser votre besoin via le formulaire de contact ou sur WhatsApp — il répond sous **24 h ouvrées**.`
              : `Andelson does not publish a fixed **day rate (TJM), project price, or salary expectation** in his portfolio or CV, as terms depend on technical scope and engagement model (full-time, freelance, or advisory).\n\nFeel free to share your brief via the contact section or WhatsApp — he replies within **24 business hours**.`,
          actions: [
            { label: lang === 'fr' ? 'Demander un échange / devis' : 'Request a discussion', type: 'scroll', target: '#contact' },
            { label: 'WhatsApp', type: 'external', target: 'https://wa.me/237690819035' },
          ],
        }
      }

      const eduNote = entities.educationAsked
        ? lang === 'fr'
          ? `Le diplôme du **Baccalauréat** ainsi que son parcours supérieur (**ENSPD**, **IAI-Cameroun**) sont bien confirmés, toutefois ses **notes chiffrées ou mentions exactes** ne figurent pas dans les données vérifiées du portfolio ni du CV.\n\n`
          : `His **Baccalauréat** and higher-education degrees (**ENSPD**, **IAI-Cameroun**) are confirmed, however his **exact numeric grades or honors** are not included in the verified portfolio or CV data.\n\n`
        : ''

      return {
        text:
          lang === 'fr'
            ? `${eduNote}Cette information précise **n’est pas publiée** dans les données vérifiées du portfolio ni du CV d’Andelson. Je préfère vous le signaler honnêtement plutôt que d’inventer une donnée.\n\nSouhaitez-vous explorer ses diplômes, ses projets vérifiés ou le contacter directement ?`
            : `${eduNote}This specific datum **is not published** in Andelson’s verified portfolio or CV data. I’d rather state that transparently than speculate.\n\nWould you like to review his verified degrees, projects, or contact him directly?`,
        actions: [
          { label: lang === 'fr' ? 'Contacter Andelson' : 'Contact Andelson', type: 'scroll', target: '#contact' },
          { label: lang === 'fr' ? 'Voir les projets' : 'Explore projects', type: 'scroll', target: '#projects' },
        ],
      }
    }

    case 'out_of_scope':
    default: {
      return {
        text:
          lang === 'fr'
            ? `Je suis exclusivement l’assistant du portfolio d’**Andelson TEUFACK SONTSA**. Je ne peux pas répondre aux demandes hors de ce périmètre.\n\nJe peux en revanche vous renseigner sur son poste actuel chez **Kamer Engineering Solution**, ses projets (**Laoshi Consulting**, **KES Inspection**, **SIG SOCAD’EL**, **MomoKash**, **Play Store**), ses compétences techniques ou ses coordonnées.`
            : `I am exclusively **Andelson TEUFACK SONTSA**’s portfolio assistant and cannot answer topics outside his engineering profile.\n\nI can gladly help you with his current role at **Kamer Engineering Solution**, his projects (**Laoshi Consulting**, **KES Inspection**, **SOCAD’EL GIS**, **MomoKash**, **Play Store**), his technical stack, or his contact details.`,
        actions: [
          { label: lang === 'fr' ? 'Découvrir ses projets' : 'Explore projects', type: 'scroll', target: '#projects' },
          { label: lang === 'fr' ? 'Compétences & Stack' : 'Skills & Stack', type: 'scroll', target: '#skills' },
        ],
      }
    }
  }
}

function buildFollowUpSuggestions(
  intent: ChatIntent,
  entities: ExtractedEntities,
  lang: Language
): string[] {
  if (intent === 'disambiguation_needed' && entities.employers.length > 0) {
    const empId = entities.employers[0]
    if (empId === 'kamer-engineering') {
      return lang === 'fr'
        ? ['Détaille son poste actuel de Lead chez KES', 'Parle-moi de son premier stage chez KES', 'Comment fonctionne l’app d’inspection offline-first ?']
        : ['Detail his current Lead role at KES', 'Tell me about his first KES internship', 'How does the offline-first inspection app work?']
    }
    if (empId === 'green-power') {
      return lang === 'fr'
        ? ['La seconde mission (plateforme GMAO)', 'La première mission (système RH Spring Boot)', 'Quelles sécurités JWT/RBAC a-t-il utilisées ?']
        : ['The second engagement (CMMS / GMAO)', 'The first engagement (Spring Boot HR)', 'How did he implement JWT/RBAC security?']
    }
    if (empId === 'credix') {
      return lang === 'fr'
        ? ['Son rôle Mobile sur MomoKash', 'Son rôle Web chez Credix.Cam SA', 'Comment gère-t-il la réconciliation financière ?']
        : ['His Mobile role on MomoKash', 'His Web role at Credix.Cam SA', 'How does he handle financial reconciliation?']
    }
  }

  if (intent === 'project_detail' && entities.projects.length > 0) {
    const pId = entities.projects[0]
    if (pId === 'laoshi-consulting') {
      return lang === 'fr'
        ? ['Quelle architecture Next.js a été utilisée ?', 'Voir ses projets mobiles offline-first', 'Comment contacter Andelson ?']
        : ['What Next.js architecture was used?', 'Show his offline-first mobile projects', 'How can I contact Andelson?']
    }
    if (pId === 'kes-inspection') {
      return lang === 'fr'
        ? ['Comment gère-t-il la synchronisation offline & QR ?', 'Quel est le rôle de Gemini AI dans ce projet ?', 'Parle-moi de la chaîne SIG SOCAD’EL']
        : ['How does offline sync & QR work?', 'What is Gemini AI’s role in this project?', 'Tell me about the SOCAD’EL GIS pipeline']
    }
    return lang === 'fr'
      ? ['Quelle est l’architecture technique ?', 'Quels problèmes ce projet résout-il ?', 'Voir ses autres réalisations']
      : ['What is the technical architecture?', 'What problem does this project solve?', 'See his other projects']
  }

  if (intent === 'experience_detail') {
    return lang === 'fr'
      ? ['Quelles technologies utilise-t-il dans ce rôle ?', 'Quels autres projets a-t-il livrés ?', 'Télécharger son CV ou le contacter']
      : ['Which technologies does he use in this role?', 'What other projects has he shipped?', 'Download his CV or contact him']
  }

  if (intent === 'out_of_scope' || intent === 'greeting' || intent === 'farewell') {
    return lang === 'fr'
      ? ['Quel est son poste actuel chez KES ?', 'Quels sont ses meilleurs projets livrés ?', 'Maîtrise-t-il Flutter, Next.js et Spring Boot ?']
      : ['What is his current role at KES?', 'What are his flagship shipped projects?', 'Does he master Flutter, Next.js and Spring Boot?']
  }

  if (intent === 'skill_verification' || intent === 'skills_overview' || intent === 'architecture_offline_ai') {
    return lang === 'fr'
      ? ['Détaille l’application d’inspection offline-first KES', 'Quel est son parcours de formation ?', 'Comment le contacter pour une mission ?']
      : ['Detail the KES offline-first inspection app', 'What is his academic background?', 'How to reach him for a project?']
  }

  return lang === 'fr'
    ? ['Détaille ses chantiers chez Kamer Engineering Solution', 'Quelles applications sont sur Play Store ?', 'Comment le contacter ou obtenir son CV ?']
    : ['Detail his work at Kamer Engineering Solution', 'Which apps are live on Google Play Store?', 'How can I contact him or download his CV?']
}

export function runChatbotEngine(input: ChatEngineInput): ChatEngineResult {
  const lang: Language = input.language === 'en' ? 'en' : 'fr'
  const messages = Array.isArray(input.messages) ? input.messages : []
  const lastUser = [...messages].reverse().find((m) => m.role === 'user') ?? messages[messages.length - 1]
  const rawQuery = (lastUser?.content ?? '').trim()

  if (!rawQuery) {
    const emptyRes = buildClauseResponse(
      'greeting',
      extractEntities(normalizeQuery('')),
      'general',
      'concise',
      normalizeQuery(''),
      lang
    )
    return {
      reply: emptyRes.text,
      intent: 'greeting',
      confidence: 0.9,
      confidenceLevel: 'high',
      entities: extractEntities(normalizeQuery('')),
      actions: emptyRes.actions,
      followUpSuggestions: buildFollowUpSuggestions('greeting', extractEntities(normalizeQuery('')), lang),
    }
  }

  const history = messages.slice(0, -1)
  const fullNq = normalizeQuery(rawQuery)
  const baseEntities = extractEntities(fullNq)
  const { resolvedEntities, hasContextBoost, isResolvedDisambiguation } = resolveConversationContext(
    history,
    fullNq,
    baseEntities
  )

  const clauses = splitCompoundQuery(rawQuery)

  // Single-clause fast path
  if (clauses.length <= 1 || isResolvedDisambiguation || resolvedEntities.projects.length > 0 && clauses.length === 1) {
    const scored = scoreSingleClause(fullNq, resolvedEntities, hasContextBoost, isResolvedDisambiguation)
    const primary = scored[0]
    const confidence = Number(Math.min(0.99, primary.score + (hasContextBoost ? 0.04 : 0)).toFixed(2))
    const angle = detectQueryAngle(fullNq)
    const depth = detectQueryDepth(fullNq)

    const { text, actions } = buildClauseResponse(primary.intent, resolvedEntities, angle, depth, fullNq, lang)
    return {
      reply: text,
      intent: primary.intent,
      confidence,
      confidenceLevel: getConfidenceLevel(confidence),
      entities: resolvedEntities,
      actions,
      followUpSuggestions: buildFollowUpSuggestions(primary.intent, resolvedEntities, lang),
      resolvedEntities: hasContextBoost
        ? {
            projects: resolvedEntities.projects,
            experiences: resolvedEntities.experiences,
            employers: resolvedEntities.employers,
            skills: resolvedEntities.skills,
          }
        : undefined,
    }
  }

  // Multi-clause compound handling (up to 3 clauses)
  const analyzedClauses: ClauseAnalysis[] = clauses.map((c) => {
    const cNq = normalizeQuery(c)
    const cEnt = extractEntities(cNq)
    const cScored = scoreSingleClause(cNq, cEnt, hasContextBoost, false)
    return {
      raw: c,
      nq: cNq,
      entities: cEnt,
      topIntent: cScored[0].intent,
      score: cScored[0].score,
      angle: detectQueryAngle(cNq),
      depth: detectQueryDepth(cNq),
    }
  })

  // Deduplicate identical consecutive/redundant intents unless target entity differs
  const mergedParts: string[] = []
  const mergedActions: ChatAction[] = []
  const seenSignatures = new Set<string>()
  let highestClause = analyzedClauses[0]

  for (const ac of analyzedClauses) {
    if (ac.topIntent === 'greeting' || ac.topIntent === 'farewell') continue
    if (ac.score > highestClause.score) highestClause = ac

    const sig = `${ac.topIntent}:${ac.entities.projects.join(',')}:${ac.entities.experiences.join(',')}:${ac.entities.skills.join(',')}:${ac.entities.unsupportedTech.join(',')}`
    if (seenSignatures.has(sig)) continue
    seenSignatures.add(sig)

    const built = buildClauseResponse(ac.topIntent, ac.entities, ac.angle, ac.depth, ac.nq, lang)
    mergedParts.push(built.text)
    for (const act of built.actions) {
      if (!mergedActions.some((m) => m.target === act.target && m.type === act.type)) {
        mergedActions.push(act)
      }
    }
  }

  if (mergedParts.length === 0) {
    const fallbackScored = scoreSingleClause(fullNq, resolvedEntities, hasContextBoost, isResolvedDisambiguation)
    const primary = fallbackScored[0]
    const built = buildClauseResponse(primary.intent, resolvedEntities, detectQueryAngle(fullNq), detectQueryDepth(fullNq), fullNq, lang)
    return {
      reply: built.text,
      intent: primary.intent,
      confidence: Number(primary.score.toFixed(2)),
      confidenceLevel: getConfidenceLevel(primary.score),
      entities: resolvedEntities,
      actions: built.actions,
      followUpSuggestions: buildFollowUpSuggestions(primary.intent, resolvedEntities, lang),
    }
  }

  // Merge all entities from compound subclauses so callers see full entity picture
  const unionEntities: ExtractedEntities = {
    projects: Array.from(new Set(analyzedClauses.flatMap((c) => c.entities.projects))),
    experiences: Array.from(new Set(analyzedClauses.flatMap((c) => c.entities.experiences))),
    employers: Array.from(new Set(analyzedClauses.flatMap((c) => c.entities.employers))),
    skills: Array.from(new Set(analyzedClauses.flatMap((c) => c.entities.skills))),
    skillCategories: Array.from(new Set(analyzedClauses.flatMap((c) => c.entities.skillCategories))),
    unsupportedTech: Array.from(new Set(analyzedClauses.flatMap((c) => c.entities.unsupportedTech))),
    educationAsked: analyzedClauses.some((c) => c.entities.educationAsked),
    contactAsked: analyzedClauses.some((c) => c.entities.contactAsked),
    cvAsked: analyzedClauses.some((c) => c.entities.cvAsked),
    salaryOrRateAsked: analyzedClauses.some((c) => c.entities.salaryOrRateAsked),
    ageAsked: analyzedClauses.some((c) => c.entities.ageAsked),
    hobbiesAsked: analyzedClauses.some((c) => c.entities.hobbiesAsked),
  }

  const avgScore =
    analyzedClauses.reduce((acc, c) => acc + c.score, 0) / analyzedClauses.length
  const finalConfidence = Number(Math.max(highestClause.score, avgScore).toFixed(2))

  return {
    reply: mergedParts.join('\n\n---\n\n'),
    intent: highestClause.topIntent,
    confidence: finalConfidence,
    confidenceLevel: getConfidenceLevel(finalConfidence),
    entities: unionEntities,
    actions: mergedActions.slice(0, 3),
    followUpSuggestions: buildFollowUpSuggestions(highestClause.topIntent, unionEntities, lang),
  }
}
