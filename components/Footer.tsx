interface FooterProps {
  language: 'en' | 'fr'
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const content = {
  en: {
    copyright: '© 2026 Andelson Teufack. All rights reserved.',
    tagline: 'Building elegant solutions to complex problems.',
    navigation: 'Navigation',
    connect: 'Connect',
    designed: 'Designed & Developed by Andelson Teufack',
  },
  fr: {
    copyright: '© 2026 Andelson Teufack. Tous droits réservés.',
    tagline: 'Construire des solutions élégantes à des problèmes complexes.',
    navigation: 'Navigation',
    connect: 'Réseaux',
    designed: 'Conçu & développé par Andelson Teufack',
  },
}

export default function Footer({ language }: FooterProps) {
  const text = language === 'en' ? content.en : content.fr

  const links = [
    { href: '#about', label: language === 'en' ? 'About' : 'À propos' },
    { href: '#skills', label: language === 'en' ? 'Skills' : 'Compétences' },
    { href: '#experience', label: language === 'en' ? 'Experience' : 'Expériences' },
    { href: '#projects', label: language === 'en' ? 'Projects' : 'Projets' },
    { href: '#contact', label: language === 'en' ? 'Contact' : 'Contact' },
  ]

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-3">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-lg tracking-tight">
                AT
              </div>
              <span className="font-semibold text-lg tracking-tight">
                Andelson Teufack
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {text.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-5">
              {text.navigation}
            </h4>

            <ul className="space-y-3">
              {links.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-5">
              {text.connect}
            </h4>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/andelson-teufack-97a59b279/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group h-11 w-11 rounded-2xl border border-border flex items-center justify-center transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-base text-muted-foreground group-hover:text-primary transition-colors"
                />
              </a>

              <a
                href="https://github.com/AndelsonTeufack"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group h-11 w-11 rounded-2xl border border-border flex items-center justify-center transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-base text-muted-foreground group-hover:text-primary transition-colors"
                />
              </a>

              <a
                href="mailto:teufackandelson123@gmail.com"
                aria-label="Email"
                className="group h-11 w-11 rounded-2xl border border-border flex items-center justify-center transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-base text-muted-foreground group-hover:text-primary transition-colors"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-border" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>{text.copyright}</p>
          <p>{text.designed}</p>
        </div>
      </div>
    </footer>
  )
}