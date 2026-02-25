'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Moon, Sun, Globe } from 'lucide-react'

interface HeaderProps {
  isDark: boolean
  onThemeToggle: () => void
  language: 'en' | 'fr'
  onLanguageToggle: () => void
}

const navItems = {
  en: [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],
  fr: [
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Expériences', href: '#experience' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],
}

export default function Header({ isDark, onThemeToggle, language, onLanguageToggle }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const currentNav = language === 'en' ? navItems.en : navItems.fr

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="font-bold text-xl text-primary hover:text-primary/80 transition-colors">
            AT
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {currentNav.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onLanguageToggle}
              className="rounded-full text-xl hover:bg-primary/10"
              title={language === 'en' ? 'Switch to Français' : 'Switch to English'}
            >
              {language === 'en' ? '🇬🇧' : '🇫🇷'}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onThemeToggle}
              className="rounded-full"
              title={isDark ? 'Light mode' : 'Dark mode'}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            {currentNav.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
