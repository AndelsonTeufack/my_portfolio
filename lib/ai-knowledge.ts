import { runChatbotEngine } from '@/lib/chatbot/engine'
import {
  ADDITIONAL_CV_FACTS,
  PORTFOLIO_DATA,
} from '@/lib/chatbot/knowledge-graph'
import { type Language } from '@/lib/portfolio-data'

/**
 * Facade de connaissances structurées alimentée dynamiquement par `PORTFOLIO_DATA`
 * et conservée pour compatibilité avec les appels existants.
 */
export const ANDELSON_KNOWLEDGE = {
  profile: PORTFOLIO_DATA.profile,
  pillars: PORTFOLIO_DATA.pillars,
  experiences: PORTFOLIO_DATA.experiences,
  projects: PORTFOLIO_DATA.projects,
  skillCategories: PORTFOLIO_DATA.skillCategories,
  skillNotions: PORTFOLIO_DATA.skillNotions,
  softSkills: PORTFOLIO_DATA.softSkills,
  education: PORTFOLIO_DATA.education,
  certifications: PORTFOLIO_DATA.certifications,
  languages: PORTFOLIO_DATA.languages,
  cvAdditionalFacts: ADDITIONAL_CV_FACTS,
} as const

/**
 * Point d'entrée synchrone rétrocompatible : délègue au moteur conversationnel déterministe.
 */
export function queryAndelsonKnowledge(userQuery: string, lang: Language = 'fr'): string {
  const result = runChatbotEngine({
    messages: [{ role: 'user', content: userQuery }],
    language: lang,
  })
  return result.reply
}
