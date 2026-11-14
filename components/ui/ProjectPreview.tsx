'use client'

import { Globe, WifiOff, Lock, MapPin, Smartphone, Sparkles, CheckCircle2, Layers } from 'lucide-react'
import type { Language, ProjectPreviewType } from '@/lib/portfolio-data'

interface ProjectPreviewProps {
  previewType: ProjectPreviewType
  variant?: 'featured' | 'compact' | 'modal'
  language: Language
}

export default function ProjectPreview({
  previewType,
  variant = 'featured',
  language,
}: ProjectPreviewProps) {
  const heightClass =
    variant === 'compact'
      ? 'h-36'
      : variant === 'modal'
        ? 'h-48 sm:h-56'
        : 'h-48 sm:h-52'

  const isEn = language === 'en'

  if (previewType === 'laoshi') {
    return (
      <div
        className={`relative w-full ${heightClass} rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/90 dark:bg-[#0d1017] overflow-hidden flex flex-col select-none`}
      >
        {/* Browser top chrome */}
        <div className="h-7 px-3 border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-400/70" />
            <span className="w-2 h-2 rounded-full bg-amber-400/70" />
            <span className="w-2 h-2 rounded-full bg-emerald-400/70" />
          </div>
          <div className="px-2.5 py-0.5 rounded bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-[10px] font-mono text-slate-600 dark:text-slate-300 truncate">
            laoshi-consulting.vercel.app
          </div>
          <span className="text-[9px] font-mono font-semibold text-sky-700 dark:text-sky-300">
            FR · EN · 中文
          </span>
        </div>

        {/* Simulated Web Portal Body */}
        <div className="flex-1 p-3.5 sm:p-4 grid grid-cols-12 gap-3 items-center">
          <div className="col-span-7 space-y-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-sky-500/15 text-sky-700 dark:text-sky-300 text-[9px] font-mono font-semibold">
              <Globe className="w-2.5 h-2.5" />
              Next.js · NestJS
            </span>
            <p className="text-xs sm:text-sm font-bold font-display text-slate-900 dark:text-white leading-snug">
              {isEn
                ? 'Study & Immigration Advisory in China'
                : 'Études, Bourses & Immigration en Chine'}
            </p>
            <div className="flex items-center gap-2 pt-0.5">
              <span className="px-2.5 py-1 rounded-md bg-sky-600 dark:bg-sky-400 text-white dark:text-slate-950 text-[10px] font-semibold">
                {isEn ? 'Book consultation' : 'Prendre RDV'}
              </span>
              <span className="px-2 py-1 rounded-md border border-slate-300 dark:border-white/15 text-[10px] font-mono text-slate-600 dark:text-slate-300">
                SEO
              </span>
            </div>
          </div>

          <div className="col-span-5 space-y-1.5">
            {[
              isEn ? 'University Admissions' : 'Admissions Univ.',
              isEn ? 'CSC Scholarships' : 'Bourses d’études',
              isEn ? 'Visa & Follow-up' : 'Suivi Visa',
            ].map((item) => (
              <div
                key={item}
                className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-between gap-1.5"
              >
                <span className="text-[10px] font-medium text-slate-800 dark:text-slate-200 truncate">
                  {item}
                </span>
                <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (previewType === 'kes-inspection') {
    return (
      <div
        className={`relative w-full ${heightClass} rounded-xl border border-slate-200 dark:border-white/10 bg-slate-900 text-slate-100 overflow-hidden p-3.5 sm:p-4 flex flex-col justify-between select-none`}
      >
        {/* Top bar + Confidentiality badge */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-400/30 text-[10px] font-mono text-emerald-300">
            <WifiOff className="w-2.5 h-2.5" />
            <span>Offline-First · Hive</span>
          </div>

          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/10 border border-white/15 text-[10px] font-mono text-slate-200">
            <Lock className="w-2.5 h-2.5 text-amber-300" />
            {isEn ? 'Anonymized preview' : 'Aperçu anonymisé'}
          </span>
        </div>

        {/* Dual Mobile + Web Interface */}
        <div className="grid grid-cols-12 gap-2.5 my-auto py-1">
          <div className="col-span-6 rounded-lg bg-white/[0.05] border border-white/10 p-2.5 space-y-1.5">
            <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
              <span className="blur-[3px]">CLIENT-IND-042</span>
              <span className="text-sky-300 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                Gemini AI
              </span>
            </div>
            <div className="h-2 rounded bg-white/15 w-4/5 blur-[2px]" />
            <div className="flex flex-wrap gap-1 pt-0.5">
              {['JSA', 'Q18', 'Q19'].map((form) => (
                <span
                  key={form}
                  className="px-1.5 py-0.5 rounded bg-sky-500/20 border border-sky-400/30 text-[9px] font-mono text-sky-200"
                >
                  {form}
                </span>
              ))}
            </div>
          </div>

          <div className="col-span-6 rounded-lg bg-white/[0.05] border border-white/10 p-2.5 space-y-1.5">
            <div className="flex items-center justify-between text-[9px] font-mono text-slate-300">
              <span>{isEn ? 'Multi-inspector sync' : 'Synchro QR Code'}</span>
              <span className="text-emerald-300">R2</span>
            </div>
            <div className="flex items-center gap-1 pt-0.5">
              {['PDF', 'Word', 'Excel'].map((fmt) => (
                <span
                  key={fmt}
                  className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] font-mono text-slate-200"
                >
                  {fmt}
                </span>
              ))}
            </div>
            <p className="text-[9px] font-mono text-slate-400 truncate blur-[2px]">
              DOUALA-SITE-HT-114
            </p>
          </div>
        </div>

        {/* Footer note */}
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>Flutter · FastAPI · Cloudflare R2</span>
          <span className="text-sky-300">{isEn ? 'OTA updates' : 'Mises à jour OTA'}</span>
        </div>
      </div>
    )
  }

  if (previewType === 'socadel-gis') {
    return (
      <div
        className={`relative w-full ${heightClass} rounded-xl border border-slate-200 dark:border-white/10 bg-[#0b1320] text-slate-100 overflow-hidden p-3.5 sm:p-4 flex flex-col justify-between select-none`}
      >
        {/* Top GIS Badges */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-sky-500/15 border border-sky-400/30 text-[10px] font-mono text-sky-200">
            <Layers className="w-2.5 h-2.5" />
            KoboCollect → PostGIS
          </span>
          <span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-mono text-slate-200">
            ESRI · GeoJSON
          </span>
        </div>

        {/* Vector Electrical Network Overlay */}
        <svg
          viewBox="0 0 320 110"
          className="w-full h-24 my-auto"
          aria-hidden="true"
        >
          <defs>
            <pattern id="gis-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="rgba(148,163,184,0.12)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="320" height="110" fill="url(#gis-grid)" rx="6" />
          <polyline
            points="22,82 88,52 152,66 226,30 296,44"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="88,52 126,22 204,18"
            fill="none"
            stroke="#34d399"
            strokeWidth="2"
            strokeDasharray="4 3"
          />
          {[
            { x: 22, y: 82, c: '#38bdf8' },
            { x: 88, y: 52, c: '#38bdf8' },
            { x: 152, y: 66, c: '#38bdf8' },
            { x: 226, y: 30, c: '#38bdf8' },
            { x: 296, y: 44, c: '#38bdf8' },
            { x: 126, y: 22, c: '#34d399' },
            { x: 204, y: 18, c: '#34d399' },
          ].map((node, i) => (
            <g key={i}>
              <circle cx={node.x} cy={node.y} r="6" fill={node.c} fillOpacity="0.2" />
              <circle cx={node.x} cy={node.y} r="3" fill={node.c} />
            </g>
          ))}
        </svg>

        {/* Coordinates footer */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-300">
          <span className="inline-flex items-center gap-1">
            <MapPin className="w-3 h-3 text-emerald-400" />
            4.0511° N, 9.7679° E
          </span>
          <span className="text-slate-400">SOCAD’EL · SIG</span>
        </div>
      </div>
    )
  }

  if (previewType === 'momokash') {
    return (
      <div
        className={`w-full ${heightClass} rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/90 dark:bg-[#0d1017] p-3 flex items-center justify-between gap-3 select-none overflow-hidden`}
      >
        <div className="space-y-1.5 min-w-0">
          <span className="inline-block px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-[10px] font-mono font-semibold text-amber-700 dark:text-amber-300">
            USSD → Flutter
          </span>
          <p className="text-xs font-bold font-display text-slate-900 dark:text-white truncate">
            MomoKash App
          </p>
          <p className="text-[10px] font-mono text-slate-600 dark:text-slate-300">
            Redis Session Cache
          </p>
        </div>

        <div className="w-24 shrink-0 rounded-lg border border-slate-300 dark:border-white/15 bg-white dark:bg-[#151923] p-2 space-y-1.5 shadow-xs">
          <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 dark:text-slate-400">
            <Smartphone className="w-3 h-3 text-sky-600 dark:text-sky-400" />
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">OK</span>
          </div>
          <div className="h-1.5 w-full rounded bg-sky-500/30" />
          <div className="h-1.5 w-3/4 rounded bg-slate-200 dark:bg-white/10" />
        </div>
      </div>
    )
  }

  if (previewType === 'taillorpro') {
    return (
      <div
        className={`w-full ${heightClass} rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/90 dark:bg-[#0d1017] p-3 flex items-center justify-between gap-3 select-none overflow-hidden`}
      >
        <div className="space-y-1.5 min-w-0">
          <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono font-semibold text-emerald-700 dark:text-emerald-300">
            Offline-First
          </span>
          <p className="text-xs font-bold font-display text-slate-900 dark:text-white truncate">
            {isEn ? 'Workshop & Orders' : 'Atelier & Mesures'}
          </p>
          <p className="text-[10px] font-mono text-slate-600 dark:text-slate-300">
            Flutter · Firebase
          </p>
        </div>

        <div className="w-24 shrink-0 rounded-lg border border-slate-300 dark:border-white/15 bg-white dark:bg-[#151923] p-2 space-y-1.5 shadow-xs">
          <div className="grid grid-cols-2 gap-1 text-[8px] font-mono text-slate-600 dark:text-slate-300">
            <span className="px-1 py-0.5 rounded bg-slate-100 dark:bg-white/[0.06] text-center">42</span>
            <span className="px-1 py-0.5 rounded bg-slate-100 dark:bg-white/[0.06] text-center">98</span>
          </div>
          <div className="h-1.5 w-full rounded bg-emerald-500/40" />
        </div>
      </div>
    )
  }

  if (previewType === 'mulema') {
    return (
      <div
        className={`w-full ${heightClass} rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/90 dark:bg-[#0d1017] p-3 flex items-center justify-between gap-3 select-none overflow-hidden`}
      >
        <div className="space-y-1.5 min-w-0">
          <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono font-semibold text-emerald-700 dark:text-emerald-300">
            V1 → V2 Play Store
          </span>
          <p className="text-xs font-bold font-display text-slate-900 dark:text-white truncate">
            Yemba · Duala · Ewondo
          </p>
          <p className="text-[10px] font-mono text-slate-600 dark:text-slate-300">
            {isEn ? 'Language learning' : 'Langues nationales'}
          </p>
        </div>

        <div className="w-24 shrink-0 rounded-lg border border-slate-300 dark:border-white/15 bg-white dark:bg-[#151923] p-2 space-y-1.5 shadow-xs">
          <div className="flex items-end gap-1 h-5 justify-center">
            {[40, 75, 55, 90, 50, 70].map((pct, idx) => (
              <span
                key={idx}
                className="w-1.5 rounded-full bg-sky-500/70"
                style={{ height: `${pct}%` }}
              />
            ))}
          </div>
          <div className="h-1 w-full rounded bg-slate-200 dark:bg-white/10" />
        </div>
      </div>
    )
  }

  // shikaku
  return (
    <div
      className={`w-full ${heightClass} rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/90 dark:bg-[#0d1017] p-3 flex items-center justify-between gap-3 select-none overflow-hidden`}
    >
      <div className="space-y-1.5 min-w-0">
        <span className="inline-block px-2 py-0.5 rounded bg-sky-500/15 border border-sky-500/30 text-[10px] font-mono font-semibold text-sky-700 dark:text-sky-300">
          2P Online / Local
        </span>
        <p className="text-xs font-bold font-display text-slate-900 dark:text-white truncate">
          Shikaku Puzzle
        </p>
        <p className="text-[10px] font-mono text-slate-600 dark:text-slate-300">
          Flutter · Firebase
        </p>
      </div>

      <div className="w-20 h-20 shrink-0 rounded-lg border border-slate-300 dark:border-white/15 bg-white dark:bg-[#151923] p-1.5 grid grid-cols-3 grid-rows-3 gap-1">
        <div className="col-span-2 row-span-1 rounded bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-[10px] font-mono font-bold text-sky-700 dark:text-sky-300">
          2
        </div>
        <div className="col-span-1 row-span-3 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-300">
          3
        </div>
        <div className="col-span-2 row-span-2 rounded bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-[10px] font-mono font-bold text-amber-700 dark:text-amber-300">
          4
        </div>
      </div>
    </div>
  )
}
