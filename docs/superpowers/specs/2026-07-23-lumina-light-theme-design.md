# Spécification Direction Artistique — Thème Clair "Lumina Executive Cyber"

**Date :** 2026-07-23  
**Auteur :** Directeur Artistique & Lead UI/UX Antigravity  
**Portée :** Refonte intégrale de la direction artistique du Thème Clair (Light Theme). Éthos "Lumina Executive" inspiré de Stripe, Linear, Apple Vision et Vercel Light, tout en conservant une parfaite cohérence avec le Thème Sombre "Cyber Obsidian".

---

## 1. Diagnostic de l'Existant & Problématique

Le Thème Clair actuel manquait d'impact pour les raisons suivantes :
1. **Lavage des dégradés de texte :** Les dégradés `.text-gradient-cyan` (`#ffffff` vers `#00f0ff`) conçus pour le fond noir devenaient invisibles sur fond blanc/clair.
2. **Disparition du Glassmorphic :** Les cartes `.glass-card` avec `rgba(255, 255, 255, 0.03)` étaient indiscernables du fond clair.
3. **Contrastes insuffisants :** Les classes hardcodées `text-slate-300` ou `border-white/10` créaient un manque de lisibilité et de relief en mode clair.
4. **Absence de profondeur :** Manque d'ombres structurées, de rayons de lumière tamisés et de délimitations nettes.

---

## 2. Direction Artistique : "Lumina Executive"

Le Thème Clair ne doit pas être un simple "fond blanc avec du texte noir". Il doit posséder une **personnalité forte, épurée, architecturale et lumineuse**.

### Palette de Couleurs & Tokens (`:root` - Light Theme) :
- **Fond principal Canvas :** Porcelaine Alabâtre Lumineuse `oklch(0.978 0.005 250)` (`#f8fafc`).
- **Gradients de fond ambient :** Rayons lumineux tamisés Bleu Azure (`rgba(2, 132, 199, 0.05)`) & Violet Royal (`rgba(124, 58, 237, 0.04)`).
- **Typographie Principale (Titres/Headings) :** Midnight Obsidian Profond `oklch(0.12 0.02 260)` (`#0f172a`). Lisibilité 100/100 !
- **Typographie Secondaire (Body/Muted) :** Slate Gris Profond `#475569` (`oklch(0.4 0.02 250)`).
- **Gradients de Texte Haute Définition en Mode Clair :**
  - `.text-gradient-cyan` : `linear-gradient(135deg, #0f172a 0%, #0284c7 60%, #2563eb 100%)` (Navy Profond à Bleu Azure). Ultra tranchant et vibrant !
  - `.text-gradient-purple` : `linear-gradient(135deg, #0284c7 0%, #7c3aed 100%)` (Bleu Azure à Violet Royal).
- **Cartes & Surfaces Glassmorphic :**
  - Fond : `rgba(255, 255, 255, 0.82)` avec `backdrop-filter: blur(20px)`.
  - Bordure : Ultra-net `border: 1px solid rgba(15, 23, 42, 0.1)` (`#0f172a` à 10% d'opacité).
  - Ombre multi-couches : `box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(0, 0, 0, 0.03)`.
- **Survol Spotlight (Hover State) :**
  - Halo lumineux sous la souris : `rgba(2, 132, 199, 0.12)` (Bleu Azure).
  - Ombre élevée au survol : `box-shadow: 0 20px 40px -10px rgba(2, 132, 199, 0.18), 0 0 1px rgba(2, 132, 199, 0.4)`.
  - Élévation : `transform: translateY(-4px)`.

---

## 3. Déploiement Composant par Composant

1. **`SpotlightCard.tsx` :** Détection automatique du mode clair/sombre avec réfraction lumineuse adaptée et ombres portées sculptées.
2. **`ParticleBackground.tsx` :** Particules et connexions bleu azure/violet réactives au survol en mode clair.
3. **`Header.tsx` :** Barre de navigation en verre dépoli porcelaine (`rgba(255, 255, 255, 0.85)`), texte haut contraste et pill d'état actif cyan/azure.
4. **`Hero.tsx` :** Titre en dégradé Navy-Azure tranchant, badges haute visibilité, boutons haute définition.
5. **`About.tsx`, `Skills.tsx`, `Experience.tsx`, `Projects.tsx`, `Contact.tsx`, `Footer.tsx` :** Remplacement de toutes les classes hardcodées par des variables dynamiques fluides et contrastées en mode clair.
