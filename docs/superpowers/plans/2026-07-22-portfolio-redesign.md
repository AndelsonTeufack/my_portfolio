# Plan d'implémentation - Refonte Total Portfolio Cyber-Minimalist Obsidian

> **Pour les agents :** SOUS-COMPÉTENCE REQUISE : Utilisez superpowers:subagent-driven-development (recommandé) ou planification pour implémenter ce plan tâche par tâche. Les étapes utilisent la syntaxe des cases à cocher (`- [ ]`) pour le suivi.

**Objectif :** Transformer le portfolio en une référence web moderne et futuriste de niveau Awwwards avec le thème "Cyber-Minimalist Obsidian", des animations fluides 60 FPS, une Bento Grid réactive et une excellente optimisation SEO/Core Web Vitals.

**Architecture :** Application SPA Next.js 16 avec React 19 et Tailwind CSS v4, enrichie par Lenis pour le smooth scroll cinématique, Framer Motion v12 pour la chorigraphie d'animation, et des composants isolés avec effet Spotlight Mouse-Tracking et Glassmorphism.

**Stack Technique :** Next.js 16, React 19, TypeScript 5.7, Tailwind CSS v4, Framer Motion v12, Lenis Scroll, Lucide Icons, React Icons, Sonner, React Hook Form, Zod.

## Contraintes Globales

- Thème "Cyber-Minimalist Obsidian" (fond `#030305`/`#08080d`, néon `#00f0ff`/`#a855f7`/`#10b981`).
- Support bilingue FR/EN fluide sans FOUC (hydratation propre).
- Animations fluides à 60 FPS (utilisation exclusive de `transform` et `opacity`).
- Respect strict des normes WCAG AA pour l'accessibilité.
- Règle de commit utilisateur : pré-syntaxes `[CREATE]`, `[UPD]`, `[DLT]` en français.

---

### Tâche 1 : Installation des Dépendances & Design System OKLCH / Tokens

**Fichiers :**
- Modifier : `app/globals.css`
- Modifier : `package.json`
- Créer : `lib/fonts.ts`

**Interfaces :**
- Produit : Variables CSS Cyber-Obsidian, configurations typographiques et tokens de thèmes.

- [ ] **Étape 1 : Installer les packages complémentaires (lenis, clsx, tailwind-merge si nécessaire)**
Commande : `npm install lenis @studio-freight/react-lenis`

- [ ] **Étape 2 : Mettre à jour `app/globals.css` avec le système de couleurs OKLCH Obsidian & Neon**
Mettre en place les couleurs obsidiennes, les variables néons (cyan, violet, émeraude), l'effet de bruit et la barre de scroll personnalisée.

- [ ] **Étape 3 : Configurer les polices Google Fonts dans `lib/fonts.ts`**
Importer `Plus_Jakarta_Sans`, `Inter`, et `JetBrains_Mono` avec pré-chargement et variables CSS.

- [ ] **Étape 4 : Valider la compilation avec `npm run build`**
Commande : `npm run build`

---

### Tâche 2 : Intégration du Custom Cursor & Interactive Particle Canvas Background

**Fichiers :**
- Créer : `components/ui/CustomCursor.tsx`
- Créer : `components/ui/ParticleBackground.tsx`
- Créer : `components/ui/SmoothScrollProvider.tsx`

**Interfaces :**
- Produit : Composants globaux d'immersion visuelle.

- [ ] **Étape 1 : Créer `SmoothScrollProvider.tsx` avec Lenis Scroll**
Initialiser Lenis avec support de `prefers-reduced-motion`.

- [ ] **Étape 2 : Créer `CustomCursor.tsx`**
Implémenter le curseur réactif magnétisé avec Framer Motion `useSpring`.

- [ ] **Étape 3 : Créer `ParticleBackground.tsx`**
Développer le canvas HTML5 dynamique à particules réactives au pointeur.

- [ ] **Étape 4 : Vérifier le fonctionnement visuel et l'absence d'erreurs TypeScript**
Commande : `npx tsc --noEmit`

---

### Tâche 3 : Header Glass Bento Dock & Sélecteurs FR/EN + Thème

**Fichiers :**
- Modifier : `components/Header.tsx`

**Interfaces :**
- Consomme : Thème & Langue depuis `app/page.tsx`
- Produit : Navigation fixe style Glass Dock avec indicateur néon `layoutId`.

- [ ] **Étape 1 : Refondre `Header.tsx` avec le style Glass Bento Dock**
Intégrer les pillules de navigation lumineuses, l'effet de survol fluide et la transition `layoutId` de la section active.

- [ ] **Étape 2 : Ajouter les boutons micro-interactifs pour la langue (EN/FR) et le thème**
Micro-animations spring lors des basculements.

- [ ] **Étape 3 : Valider le responsive mobile avec le menu plein écran animé**

---

### Tâche 4 : Section Hero Cybernetic & Profile Card 3D

**Fichiers :**
- Modifier : `components/Hero.tsx`

**Interfaces :**
- Produit : Section d'accueil haute impression avec badge live et Split-Text reveal.

- [ ] **Étape 1 : Implémenter le badge de statut en temps réel avec émeraude clignotante**
- [ ] **Étape 2 : Créer l'animation Split-Text sur le nom "Andelson Teufack" et le titre**
- [ ] **Étape 3 : Styliser les boutons magnétiques (Explorer Projets, Télécharger CV, Contact)**
- [ ] **Étape 4 : Intégrer l'effet 3D Perspective Tilt sur la carte de profil avec badges d'expérience flottants**

---

### Tâche 5 : Section À Propos & Vision en Bento Grid 4 Cartes

**Fichiers :**
- Modifier : `components/About.tsx`
- Modifier : `components/MacbookAnimation.tsx`

**Interfaces :**
- Produit : Grille Bento interactive avec compteurs animés et bac à sable de code.

- [ ] **Étape 1 : Restructurer `About.tsx` en Bento Grid 4 cartes**
- [ ] **Étape 2 : Implémenter les compteurs animés `AnimatedNumber` pour les métriques**
- [ ] **Étape 3 : Sublimer l'animation `MacbookAnimation.tsx` avec un terminal interactif de code**
- [ ] **Étape 4 : Ajouter la carte de citation interactive avec halos lumineux**

---

### Tâche 6 : Section Compétences Techniques & Transversales (Bento Stack)

**Fichiers :**
- Modifier : `components/Skills.tsx`

**Interfaces :**
- Produit : Catalogue de compétences interactif avec filtres et effets Spotlight.

- [ ] **Étape 1 : Organiser les compétences en catégories Bento (Frontend, Backend, BDD, DevOps, Architecture, SEO)**
- [ ] **Étape 2 : Ajouter les badges réactifs avec effet Spotlight Mouse-Tracking**
- [ ] **Étape 3 : Styliser la section Soft Skills et les barres de progression des langues**

---

### Tâche 7 : Section Parcours Professionnel & Timeline Néon

**Fichiers :**
- Modifier : `components/Experience.tsx`

**Interfaces :**
- Produit : Timeline interactive avec faisceau lumineux vertical et cartes dépliables.

- [ ] **Étape 1 : Créer la timeline verticale néon animée au scroll**
- [ ] **Étape 2 : Styliser les cartes d'expériences chez CREDIX.CAM, GREEN POWER et KES Inspection**
- [ ] **Étape 3 : Intégrer les sections de formation (IAI) et certification Google IT Support**

---

### Tâche 8 : Section Projets Vedettes, Spotlight Grid & Modale Détaillée

**Fichiers :**
- Modifier : `components/Projects.tsx`
- Créer : `components/ProjectModal.tsx`

**Interfaces :**
- Produit : Showcase de projets réactif avec filtre par catégorie, effet Spotlight 3D et modale immersive.

- [ ] **Étape 1 : Développer le système de filtre par catégorie (*Tous, Web, Mobile, Backend, Automatisation*)**
- [ ] **Étape 2 : Appliquer le composant Spotlight Mouse-Tracking sur chaque carte de projet**
- [ ] **Étape 3 : Créer `ProjectModal.tsx` pour afficher le détail d'un projet sélectionné**
- [ ] **Étape 4 : Intégrer le système de toast de notification Sonner**

---

### Tâche 9 : Section Contact Verre Acrylique & Actions Rapides

**Fichiers :**
- Modifier : `components/Contact.tsx`

**Interfaces :**
- Produit : Formulaire de contact avec validation Zod et cartes d'action instantanée.

- [ ] **Étape 1 : Styliser le formulaire en verre acrylique avec animations sur les champs au focus**
- [ ] **Étape 2 : Connecter la validation du formulaire et l'état d'envoi API**
- [ ] **Étape 3 : Créer les cartes d'accès rapide avec micro-interaction "Copier dans le presse-papier"**

---

### Tâche 10 : Footer Futuriste & Horloge Temps Réel

**Fichiers :**
- Modifier : `components/Footer.tsx`

**Interfaces :**
- Produit : Pied de page futuriste avec horloge Douala GMT+1 et retour en haut magnétisé.

- [ ] **Étape 1 : Créer l'horloge temps réel affichant l'heure locale de Douala (GMT+1)**
- [ ] **Étape 2 : Styliser le bouton retour en haut magnétisé**
- [ ] **Étape 3 : Intégrer les liens sociaux et crédits 2026**

---

### Tâche 11 : Intégration Globale `app/page.tsx` & Résolution FOUC/Hydratation

**Fichiers :**
- Modifier : `app/page.tsx`
- Modifier : `app/layout.tsx`

**Interfaces :**
- Produit : Page principale réassemblée sans flash d'hydratation et support multilingue instantané.

- [ ] **Étape 1 : Supprimer le blocage `if (!mounted) return null` et mettre en place l'initialisation du thème sans FOUC**
- [ ] **Étape 2 : Assembler tous les nouveaux composants dans `app/page.tsx` avec le SmoothScrollProvider**
- [ ] **Étape 3 : Tester les basculements de langues et de thèmes en temps réel**

---

### Tâche 12 : Audit de Validation Final (Build, SEO & Core Web Vitals)

**Fichiers :**
- Modifier : `app/layout.tsx`
- Modifier : `app/sitemap.ts`

**Interfaces :**
- Produit : Site web prêt pour la production, 100% sans erreur et optimisé SEO.

- [ ] **Étape 1 : Exécuter la vérification du typage TypeScript**
Commande : `npx tsc --noEmit`

- [ ] **Étape 2 : Exécuter le build de production Next.js**
Commande : `npm run build`

- [ ] **Étape 3 : Vérifier le rendu et valider la satisfaction complète de la demande**
