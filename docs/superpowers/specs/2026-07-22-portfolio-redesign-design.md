# Spécification de Design — Refonte Portfolio Ultra-Premium "Cyber-Minimalist Obsidian"

**Date :** 2026-07-22  
**Auteur :** Antigravity & Andelson Teufack  
**Style Artistique :** Cyber-Minimalist Obsidian & Neon Cyan (Inspiré de Linear, Vercel, Raycast, Resn, Lusion)  
**Projet :** Portfolio Professionnel d'Andelson Teufack (Développeur Full-Stack & Analyste IT)

---

## 1. Vision & Directives Artistiques

Le portfolio d'Andelson Teufack est repensé pour devenir une expérience web immersive, spectaculaire et mémorable de niveau **Awwwards / Site of the Day**.

### Identité Visuelle :
- **Atmosphère :** Dark mode futuriste et élégant (Fonds obsidienne `#030305` / `#08080d`).
- **Lumière & Accents :** Cyan Électrique (`#00f0ff`), Violet Spacial (`#a855f7`), Vert Émeraude (`#10b981`), Blanc Titane (`#f8fafc`).
- **Texture & Profondeur :** Verre dépoli acrylique (`backdrop-blur-xl`), bordures lumineuses à micro-gradients (`border-white/10`), Spotlight réactif suivant le curseur de la souris (Radial Gradient glow), grille de particules interactives.
- **Typographie :**
  - Titres & Display : **Plus Jakarta Sans** / **Syne** (Google Fonts) avec taille fluide `clamp()` et lettrage haute précision.
  - Corps de texte : **Inter** / **Geist** pour une lisibilité parfaite.
  - Badges & Métriques : **JetBrains Mono** pour la touche ingénierie logicielle.

---

## 2. Architecture & Stack Technique

- **Framework :** Next.js 16 (App Router), React 19, TypeScript 5.7
- **Styling :** Tailwind CSS v4 + Variables CSS OKLCH sur mesure
- **Motion & Fluidité :**
  - **Framer Motion v12 :** Stagger animations, spring physics, layout animations, AnimatePresence
  - **Lenis Smooth Scroll :** Défilement cinématique ultra-fluide
- **Composants UI :** Radix UI primitives + Lucide Icons + React Icons + Sonner (Toasts)
- **Formulaires & Validation :** React Hook Form + Zod

---

## 3. Découpage des Composants & Expérience Utilisateur

### 3.1. Master Layout & Expérience Globale ([app/layout.tsx](file:///home/andelson-teufack/Bureau/Projets/MyPortfolio/app/layout.tsx))
- Rendu serveur hybride sans FOUC (hydratation propre, thème et langue initialisés sans écran blanc).
- Prise en charge i18n dynamique (Français / Anglais).
- Curseur interactif personnalisé avec effet magnétique sur les éléments cliquables.
- Barre de progression de défilement néon supérieure.
- Canvas de fond interactif réactif au mouvement de la souris.

### 3.2. Navigation Dock Flottant ([components/Header.tsx](file:///home/andelson-teufack/Bureau/Projets/MyPortfolio/components/Header.tsx))
- Navigation fixe flottante style **Glass Bento Dock**.
- Détection de la section active avec pillule lumineuse en transition fluide (Framer Motion `layoutId`).
- Sélecteur de langue (`EN` / `FR`) et sélecteur de thème avec animations spring.
- Menu mobile plein écran avec micro-animations d'ouverture/fermeture.

### 3.3. Section Hero Cybernetic ([components/Hero.tsx](file:///home/andelson-teufack/Bureau/Projets/MyPortfolio/components/Hero.tsx))
- **Badge d'état temps réel :** *"Disponible pour projets innovants & consulting"* avec point émeraude clignotant.
- **Titre & Nom :** Animation d'apparition par mots/lettres (Split-text reveal).
- **Rôle & Description :** Typographie bicolore lumineuse avec dégradé cyan à violet.
- **Boutons d'Action Magnétiques :**
  - *"Explorer mes projets"* (Gradient glowing button + shimmer).
  - *"Télécharger CV"* (Téléchargement direct avec feedback visuel).
  - *"Me contacter"* (Bouton verre dépoli).
- **Portrait / Visuel 3D :** Carte de profil avec effet de perspective 3D Tilt au survol et badge d'expérience flottant.

### 3.4. Section À Propos & Vision — Bento Grid ([components/About.tsx](file:///home/andelson-teufack/Bureau/Projets/MyPortfolio/components/About.tsx))
- Disposition en **Grille Bento 4 cartes** :
  1. **Bio & Story :** Présentation engageante avec mise en valeur de la vision.
  2. **Compteurs de Métriques :** Chiffres clés (Années d'expérience, Projets réalisés, Technologies) avec incrémentation animée à l'apparition.
  3. **Vision & Méthodologie :** Cartes interactives avec icônes néon et effets de brillance.
  4. **Code Sandbox / Animation Macbook 3D :** Modèle interactif du Macbook ou widget de code interactif présentant son workflow.

### 3.5. Section Compétences Techniques & Transversales ([components/Skills.tsx](file:///home/andelson-teufack/Bureau/Projets/MyPortfolio/components/Skills.tsx))
- Bento Grid réorganisée par domaines d'expertise (Langages, Frontend, Backend, BDD, DevOps, Architecture & SEO).
- Pilules de compétences réactives avec filtrage interactif ou effets au survol (Glow effect).
- Barres de progression stylisées pour les langues et cartes interactives pour les soft skills.

### 3.6. Section Parcours & Expériences ([components/Experience.tsx](file:///home/andelson-teufack/Bureau/Projets/MyPortfolio/components/Experience.tsx))
- Timeline verticale lumineuse néon.
- Cartes d'expériences professionnelles interactives (dépliables / survol 3D) détaillant les réalisations chez CREDIX.CAM, GREEN POWER CAMEROUN et KES Inspection & Project.
- Cartes pour la formation académique (IAI) et certifications (Google IT Support).

### 3.7. Section Projets Vedettes & Showcase ([components/Projects.tsx](file:///home/andelson-teufack/Bureau/Projets/MyPortfolio/components/Projects.tsx))
- Grille Bento dynamique filtrable par catégorie (*Tous, Web, Mobile, Backend, Automatisation*).
- Cartes de projets avec effet **Spotlight Mouse-Tracking** (rayon de lumière qui suit le curseur sur la carte).
- Liens directs vers les démonstrations et dépôts GitHub avec notification Toast enrichie (Sonner).
- Tiroir / Modale détaillée de projet pour consulter la stack complète et la capture/vidéo.

### 3.8. Section Contact & Modalités ([components/Contact.tsx](file:///home/andelson-teufack/Bureau/Projets/MyPortfolio/components/Contact.tsx))
- Formulaire interactif en verre dépoli avec validation temps réel et feedback visuel dynamique lors de l'envoi via l'API `/api/contact`.
- Cartes d'accès rapide (Email, WhatsApp, Téléphone, Localisation Douala) avec bouton de copie rapide dans le presse-papier.
- Liens sociaux interactifs (LinkedIn, GitHub) avec effet magnétique.

### 3.9. Footer & Navigation de Fin ([components/Footer.tsx](file:///home/andelson-teufack/Bureau/Projets/MyPortfolio/components/Footer.tsx))
- Pied de page minimaliste futuriste avec horloge temps réel (Heure locale Douala GMT+1).
- Bouton retour en haut magnétisé.
- Mentions légales et copyright 2026.

---

## 4. Stratégie de Performance, Accessibilité & SEO

- **Performance :**
  - Score Lighthouse ciblé : > 95/100 sur tous les piliers (Performance, Accessibilité, Best Practices, SEO).
  - Code splitting dynamique des composants lourds (Lenis, Particle Canvas).
  - Images WebP/AVIF optimisées via Next/Image.
- **SEO & Social Share :**
  - Données structurées JSON-LD (`Person`, `WebSite`, `BreadcrumbList`) enrichies.
  - Balises Open Graph & Twitter Card complètes.
- **Accessibilité (a11y) :**
  - Support complet `prefers-reduced-motion`.
  - Contrastes WCAG AA respectés sur les textes.
  - Navigation complète au clavier avec anneaux de focus visibles stylisés (`focus-visible:ring-2`).

---

## 5. Critères de Validation & Exigences
- Aucun avertissement ou erreur de build Next.js / TypeScript / Linting.
- Fluidité garantie à 60 FPS sur mobile, tablette, desktop et écrans ultrawide.
- Respect strict de la convention de commits avec pré-syntaxes `[CREATE]`, `[UPD]`, `[DLT]`.
