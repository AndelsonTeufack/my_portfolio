import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  Lock,
  Mail,
  Play,
  Smartphone,
  Target,
} from 'lucide-react'
import BrandLogo from '@/components/ui/BrandLogo'
import {
  PORTFOLIO_PROFILE,
  PROJECTS,
  type ProjectItem,
} from '@/lib/portfolio-data'

const SITE_URL = 'https://andelson-teufack.dev'

export const dynamicParams = false

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.id,
  }))
}

function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS.find((project) => project.id === slug)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {}
  }

  const canonicalUrl = `${SITE_URL}/projets/${project.id}`
  const title = `${project.title.fr} — Étude de cas (${project.categoryLabel.fr}) | ${PORTFOLIO_PROFILE.fullName}`
  const description = `${project.summary.fr} Technologies : ${project.tags.slice(0, 6).join(', ')}.`

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: [
      project.title.fr,
      project.title.en,
      ...project.tags,
      PORTFOLIO_PROFILE.fullName,
      'Étude de cas développeur Cameroun',
      'Développeur Full-Stack Mobile Douala',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: `${PORTFOLIO_PROFILE.fullName} Portfolio`,
      locale: 'fr_CM',
      alternateLocale: ['en_US'],
      type: 'article',
      images: [
        {
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${project.title.fr} — ${PORTFOLIO_PROFILE.fullName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/opengraph-image`],
    },
  }
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const projectIndex = PROJECTS.findIndex((item) => item.id === slug)

  if (projectIndex === -1) {
    notFound()
  }

  const project = PROJECTS[projectIndex]
  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : null
  const nextProject =
    projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : null

  const hasAnyExternalLink = Boolean(
    project.liveUrl || project.playStoreUrl || project.videoUrl || project.codeUrl
  )
  const canonicalUrl = `${SITE_URL}/projets/${project.id}`

  const schemaType =
    project.category === 'mobile' || project.category === 'automation'
      ? 'SoftwareApplication'
      : 'CreativeWork'

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': schemaType,
        '@id': `${canonicalUrl}/#project`,
        name: project.title.fr,
        alternateName:
          project.title.en !== project.title.fr ? project.title.en : undefined,
        description: project.summary.fr,
        url: canonicalUrl,
        ...(schemaType === 'SoftwareApplication'
          ? {
              applicationCategory:
                project.category === 'mobile'
                  ? 'MobileApplication'
                  : 'BusinessApplication',
              operatingSystem:
                project.category === 'mobile' ? 'Android, iOS' : 'Windows, Linux',
            }
          : {}),
        creator: {
          '@id': `${SITE_URL}/#person`,
        },
        author: {
          '@id': `${SITE_URL}/#person`,
        },
        keywords: project.tags.join(', '),
        inLanguage: ['fr', 'en'],
        sameAs: [
          project.liveUrl,
          project.playStoreUrl,
          project.codeUrl,
          project.videoUrl,
        ].filter(Boolean),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Accueil',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: project.title.fr,
            item: canonicalUrl,
          },
        ],
      },
    ],
  }

  return (
    <div className="relative bg-background text-foreground min-h-screen">
      {/* Static architectural backdrop matching home aesthetic */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-architectural-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_75%)] z-0"
      />

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 font-display font-bold text-sm sm:text-base text-foreground hover:text-sky-700 dark:hover:text-sky-400 transition-colors"
          >
            <BrandLogo className="w-8 h-8 shrink-0" />
            <span>{PORTFOLIO_PROFILE.fullName}</span>
          </Link>

          <nav aria-label="Navigation étude de cas" className="flex items-center gap-3">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-secondary hover:bg-muted text-xs font-mono font-medium text-foreground transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Tous les projets</span>
            </Link>
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 dark:bg-sky-400 dark:hover:bg-sky-300 text-white dark:text-slate-950 text-xs font-semibold transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contacter</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        {/* Semantic Breadcrumb */}
        <nav aria-label="Fil d’Ariane" className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Accueil
          </Link>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          <Link href="/#projects" className="hover:text-foreground transition-colors">
            Projets
          </Link>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="text-foreground font-semibold">{project.title.fr}</span>
        </nav>

        <article className="space-y-8">
          {/* Case Study Header */}
          <header className="space-y-5 pb-8 border-b border-border">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/15 text-xs font-mono font-medium text-foreground">
                {project.categoryLabel.fr}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/15 text-xs font-mono font-medium text-foreground">
                {project.roleBadge.fr}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-700 dark:text-sky-300 text-xs font-mono font-semibold">
                {project.statusBadge.fr}
              </span>
              <span className="text-xs font-mono text-muted-foreground">
                {project.roleContext.fr}
              </span>
            </div>

            <div className="space-y-2.5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-foreground leading-tight">
                {project.title.fr}
              </h1>
              {project.title.en !== project.title.fr && (
                <p className="text-sm font-mono text-sky-700 dark:text-sky-400">
                  {project.title.en}
                </p>
              )}
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed pt-1">
                {project.summary.fr}
              </p>
            </div>

            {/* External Deliverables */}
            {hasAnyExternalLink ? (
              <div className="flex flex-wrap gap-3 pt-1">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 dark:bg-sky-400 dark:hover:bg-sky-300 text-white dark:text-slate-950 font-semibold text-xs sm:text-sm transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Voir le site en ligne</span>
                  </a>
                )}
                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-semibold text-xs sm:text-sm transition-colors"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Google Play Store</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.videoUrl && (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary hover:bg-muted border border-border text-foreground font-semibold text-xs sm:text-sm transition-colors"
                  >
                    <Play className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <span>Démo vidéo</span>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary hover:bg-muted border border-border text-foreground font-semibold text-xs sm:text-sm transition-colors"
                  >
                    <Code2 className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <span>Code source GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                  </a>
                )}
              </div>
            ) : (
              <div className="flex items-start gap-2.5 p-4 rounded-xl bg-muted/60 border border-border text-xs sm:text-sm text-muted-foreground">
                <Lock className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <span>
                  Application d’entreprise ou soumise à confidentialité client :
                  les données sensibles et identifiants internes sont anonymisés ;
                  l’architecture technique est documentée ci-dessous.
                </span>
              </div>
            )}
          </header>

          {/* Summary Outcomes if present */}
          {(project.problemSolution || project.resultSummary) && (
            <section
              aria-labelledby="synthesis-heading"
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <h2 id="synthesis-heading" className="sr-only">
                Synthèse problème et résultats
              </h2>
              {project.problemSolution && (
                <div className="editorial-surface rounded-xl p-5 border-l-2 border-l-sky-500/60 space-y-1.5">
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-sky-700 dark:text-sky-400">
                    Problème → Solution
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/90">
                    {project.problemSolution.fr}
                  </p>
                </div>
              )}
              {project.resultSummary && (
                <div className="editorial-surface rounded-xl p-5 border-l-2 border-l-emerald-500/60 space-y-1.5">
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                    Impact & résultat
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/90">
                    {project.resultSummary.fr}
                  </p>
                </div>
              )}
            </section>
          )}

          {/* Problem Statement */}
          <section className="editorial-surface rounded-2xl p-6 sm:p-7 space-y-3">
            <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400">
              <Target className="w-4 h-4" />
              <h2 className="text-sm font-mono font-semibold uppercase tracking-widest">
                Problématique & contexte métier
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
              {project.problemStatement.fr}
            </p>
          </section>

          {/* Architecture & Engineering Choices */}
          <section className="editorial-surface rounded-2xl p-6 sm:p-7 space-y-3">
            <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400">
              <Cpu className="w-4 h-4" />
              <h2 className="text-sm font-mono font-semibold uppercase tracking-widest">
                Architecture & choix techniques
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
              {project.architectureNotes.fr}
            </p>
          </section>

          {/* Key Highlights */}
          <section className="editorial-surface rounded-2xl p-6 sm:p-7 space-y-4">
            <h2 className="text-sm font-mono font-semibold uppercase tracking-widest text-foreground">
              Réalisations & résultats clés
            </h2>
            <ul className="space-y-3">
              {project.highlights.fr.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm sm:text-base leading-relaxed text-foreground/90"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Full Tech Stack */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground">
              Stack technique utilisée
            </h2>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-xs font-mono font-medium text-secondary-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </section>

          {/* Bilingual English Overview (crawlable EN summary for international recruiters) */}
          <section
            lang="en"
            className="editorial-surface rounded-2xl p-6 sm:p-7 space-y-3 border-dashed"
          >
            <h2 className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground">
              English Case Study Summary — {project.title.en}
            </h2>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {project.summary.en}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Challenge:</strong>{' '}
              {project.problemStatement.en}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Architecture:</strong>{' '}
              {project.architectureNotes.en}
            </p>
          </section>
        </article>

        {/* Internal Linking: Previous / Next Case Study */}
        <nav
          aria-label="Autres études de cas"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border"
        >
          {prevProject ? (
            <Link
              href={`/projets/${prevProject.id}`}
              className="editorial-surface p-4 rounded-xl hover:border-sky-500/40 transition-colors flex items-center justify-between gap-3 group"
            >
              <div className="space-y-1 min-w-0">
                <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" />
                  <span>Projet précédent</span>
                </p>
                <p className="text-sm font-bold font-display text-foreground group-hover:text-sky-700 dark:group-hover:text-sky-400 truncate">
                  {prevProject.title.fr}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projets/${nextProject.id}`}
              className="editorial-surface p-4 rounded-xl hover:border-sky-500/40 transition-colors flex items-center justify-end gap-3 text-right group"
            >
              <div className="space-y-1 min-w-0">
                <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground flex items-center justify-end gap-1">
                  <span>Projet suivant</span>
                  <ArrowRight className="w-3 h-3" />
                </p>
                <p className="text-sm font-bold font-display text-foreground group-hover:text-sky-700 dark:group-hover:text-sky-400 truncate">
                  {nextProject.title.fr}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </nav>

        {/* Conversion CTA Block */}
        <section className="editorial-surface rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="space-y-1.5 max-w-xl">
            <h2 className="text-lg sm:text-xl font-bold font-display text-foreground">
              Un projet similaire ou une opportunité technique ?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Discutons d’architecture mobile offline-first, d’applications web
              Next.js / FastAPI ou d’intégration métier.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 dark:bg-sky-400 dark:hover:bg-sky-300 text-white dark:text-slate-950 font-semibold text-sm transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Me contacter</span>
            </Link>
            <a
              href="/CV - Andelson TEUFACK.pdf"
              download="CV - Andelson TEUFACK.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-secondary hover:bg-muted text-foreground font-semibold text-sm transition-colors"
            >
              <Download className="w-4 h-4 text-sky-700 dark:text-sky-400" />
              <span>CV (PDF)</span>
            </a>
          </div>
        </section>
      </main>

      {/* Project-Specific JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
    </div>
  )
}
