import {
  PORTFOLIO_PROFILE,
  ENGINEERING_PILLARS,
  EXPERIENCES,
  PROJECTS,
  SKILL_CATEGORIES,
  SKILL_NOTIONS,
  EDUCATION,
  CERTIFICATIONS,
  LANGUAGES,
} from '@/lib/portfolio-data'

export const dynamic = 'force-static'

export async function GET(): Promise<Response> {
  const siteUrl = PORTFOLIO_PROFILE.contact.website

  const lines: string[] = [
    `# ${PORTFOLIO_PROFILE.fullName}`,
    '',
    `> ${PORTFOLIO_PROFILE.heroDescription.fr}`,
    `> ${PORTFOLIO_PROFILE.heroDescription.en}`,
    '',
    `- **Site officiel (FR)**: ${siteUrl}`,
    `- **Version anglaise (EN)**: ${siteUrl}/en`,
    `- **Localisation**: ${PORTFOLIO_PROFILE.location.fr} (Mobile / Remote international)`,
    `- **Poste actuel**: ${PORTFOLIO_PROFILE.currentRoleHeadline.fr} — ${PORTFOLIO_PROFILE.currentCompany}`,
    `- **Email**: ${PORTFOLIO_PROFILE.contact.email}`,
    `- **Téléphone / WhatsApp**: ${PORTFOLIO_PROFILE.contact.phone}`,
    `- **GitHub**: ${PORTFOLIO_PROFILE.contact.github}`,
    `- **LinkedIn**: ${PORTFOLIO_PROFILE.contact.linkedin}`,
    `- **CV PDF**: ${siteUrl}/CV%20-%20Andelson%20TEUFACK.pdf`,
    '',
    '## Profil & Domaines d’intervention',
    '',
    ...ENGINEERING_PILLARS.map(
      (pillar) =>
        `- **${pillar.title.fr}** (${pillar.title.en}) : ${pillar.description.fr}`
    ),
    '',
    '## Compétences techniques vérifiées',
    '',
    ...SKILL_CATEGORIES.map(
      (cat) =>
        `- **${cat.title.fr}** : ${[...cat.primary, ...cat.secondary].join(', ')}`
    ),
    `- **Notions complémentaires** : ${SKILL_NOTIONS.join(', ')}`,
    '',
    '## Langues',
    '',
    ...LANGUAGES.map(
      (lang) => `- ${lang.name.fr} (${lang.level.fr}) — ${lang.detail.fr}`
    ),
    '',
    '## Formation & Certifications',
    '',
    ...EDUCATION.map(
      (edu) =>
        `- **${edu.degree.fr}** — ${edu.institution} (${edu.period.fr})`
    ),
    ...CERTIFICATIONS.map(
      (cert) =>
        `- **${cert.title}** — ${cert.issuer} (${cert.domains.fr.join(', ')})`
    ),
    '',
    '## Expériences professionnelles',
    '',
  ]

  for (const exp of EXPERIENCES) {
    lines.push(
      `### ${exp.role.fr} — ${exp.company} (${exp.period.fr}, ${exp.location.fr})`
    )
    if (exp.summary?.fr) {
      lines.push(exp.summary.fr)
    }
    for (const achievement of exp.keyAchievements.fr) {
      lines.push(`- ${achievement}`)
    }
    if (exp.caseStudy?.workstreams?.length) {
      lines.push('')
      lines.push('Chantiers principaux :')
      for (const ws of exp.caseStudy.workstreams) {
        lines.push(`- **${ws.title.fr}** : ${ws.description.fr}`)
      }
    }
    if (exp.technologies.length > 0) {
      lines.push(`- Technologies : ${exp.technologies.join(', ')}`)
    }
    lines.push('')
  }

  lines.push('## Études de cas & Projets', '')

  for (const project of PROJECTS) {
    const projectUrl = `${siteUrl}/projets/${project.id}`
    lines.push(`### ${project.title.fr} (${project.categoryLabel.fr})`)
    lines.push(`- **URL étude de cas**: ${projectUrl}`)
    lines.push(`- **Contexte**: ${project.roleContext.fr} · ${project.statusBadge.fr}`)
    lines.push(`- **Résumé (FR)**: ${project.summary.fr}`)
    lines.push(`- **Summary (EN)**: ${project.summary.en}`)
    lines.push(`- **Problématique**: ${project.problemStatement.fr}`)
    lines.push(`- **Architecture**: ${project.architectureNotes.fr}`)
    lines.push(`- **Stack**: ${project.tags.join(', ')}`)
    if (project.liveUrl) lines.push(`- **Production URL**: ${project.liveUrl}`)
    if (project.playStoreUrl) lines.push(`- **Google Play Store**: ${project.playStoreUrl}`)
    if (project.codeUrl) lines.push(`- **GitHub**: ${project.codeUrl}`)
    if (project.videoUrl) lines.push(`- **Démo vidéo**: ${project.videoUrl}`)
    lines.push('')
  }

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
