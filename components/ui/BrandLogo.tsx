interface BrandLogoProps {
  className?: string
}

export default function BrandLogo({ className = 'w-8 h-8' }: BrandLogoProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-xl bg-slate-900 dark:bg-[#0d131f] border border-slate-800 dark:border-sky-400/35 shadow-xs transition-colors ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 36 36"
        fill="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 10.5H26"
          stroke="#38bdf8"
          strokeWidth="2.3"
          strokeLinecap="round"
        />
        <path
          d="M18 10.5V25.5"
          stroke="#38bdf8"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeOpacity="0.85"
        />
        <path
          d="M10.5 25.5L18 10.5L25.5 25.5"
          stroke="#f8fafc"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="21" r="1.4" fill="#38bdf8" />
      </svg>
    </span>
  )
}
