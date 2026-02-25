'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'

interface HeroProps {
  language: 'en' | 'fr'
}

const content = {
  en: {
    greeting: 'Welcome to my portfolio',
    title: 'Full-Stack Developer & IT Solutions Analyst',
    description: 'Crafting impactful applications with expertise in Java, Python, JavaScript, React, and Spring Boot. Transforming ideas into elegant, scalable solutions.',
    cta: 'Explore My Work',
    scrollHint: 'Scroll to explore',
  },
  fr: {
    greeting: 'Bienvenue sur mon portfolio',
    title: 'Développeur Full-Stack & Analyste IT',
    description: 'Créer des applications impactantes avec expertise en Java, Python, JavaScript, React et Spring Boot. Transformer les idées en solutions élégantes et scalables.',
    cta: 'Découvrez mes projets',
    scrollHint: 'Scrollez pour explorer',
  },
}

export default function Hero({ language }: HeroProps) {
  const text = language === 'en' ? content.en : content.fr

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-40 dark:opacity-20" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-30 dark:opacity-10" />
      </div>

      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-2">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">{text.greeting}</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
                {text.title}
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              {text.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold"
                onClick={() => {
                  const element = document.getElementById('contact')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {text.cta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                onClick={() => {
                  const element = document.getElementById('about')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96 animate-in fade-in slide-in-from-right duration-1000 delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
            <div className="relative h-full rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <Image
                src="/hero.jpg"
                alt="Andelson Teufack - Full Stack Developer"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
