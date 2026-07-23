# Plan d'implémentation - SEO Mondial, Entity Branding & AI Search Optimization (GEO/SXO)

> **Pour les agents :** SOUS-COMPÉTENCE REQUISE : Utilisez superpowers:subagent-driven-development (recommandé) ou planification pour implémenter ce plan tâche par tâche. Les étapes utilisent la syntaxe des cases à cocher (`- [ ]`) pour le suivi.

**Objectif :** Élever le référencement du portfolio au plus haut niveau mondial (Google, Bing, Perplexity AI, ChatGPT, Gemini, Claude, DuckDuckGo) via un graphe de données structurées Schema.org ultra-complet, des fichiers robots/sitemap/manifest dynamiques, et un enrichissement sémantique SXO irréprochable.

**Architecture :** Next.js 16 App Router avec metadata API enrichie, JSON-LD Graph multi-schémas (`Person`, `ProfilePage`, `WebSite`, `FAQPage`, `SoftwareApplication`, `BreadcrumbList`), sitemap/robots/manifest natifs et balisage sémantique HTML5.

**Stack Technique :** Next.js 16, React 19, TypeScript 5.7, Schema.org JSON-LD, Next Metadata & Viewport API.

## Contraintes Globales

- Nom complet d'entité : `TEUFACK SONTSA Andelson`.
- Déclinaisons et variantes orthographiques gérées : `Teufack Sontsa Andelson`, `Andelson Sontsa Teufack`, `Andelson Teufack`, `Anderson Teufack`, `Teufac Andelson`.
- Email : `teufackandelson123@gmail.com` | Téléphones : `+237 690 819 035`, `+237 651 489 468` | Localisation : `Douala, Cameroun`.
- Règle de commit obligatoire : `[CREATE]`, `[UPD]`, `[DLT]` en français.

---

### Tâche 1 : Dynamic Web Manifest & Cleansed Static Robots

**Fichiers :**
- Supprimer : `public/robots.txt`
- Créer : `app/robots.ts`
- Créer : `app/manifest.ts`

**Interfaces :**
- Produit : `robots.txt` et `manifest.json` dynamiques conformes aux standards Next.js 16.

- [ ] **Étape 1 : Supprimer le fichier statique obsolète `public/robots.txt`**
- [ ] **Étape 2 : Créer `app/robots.ts`** avec prise en charge des crawlers traditionnels et des bots IA (`GPTBot`, `ChatGPT-User`, `Google-Extended`, `ClaudeBot`, `PerplexityBot`, `Bytespider`, `CCBot`, `Applebot-Extended`).
- [ ] **Étape 3 : Créer `app/manifest.ts`** avec les métadonnées d'application web progressive (PWA).

---

### Tâche 2 : Dynamic Sitemap.xml enrichi

**Fichiers :**
- Modifier : `app/sitemap.ts`

**Interfaces :**
- Produit : Sitemap XML complet avec canonique, priorités et révisions.

- [ ] **Étape 1 : Mettre à jour `app/sitemap.ts`** pour inclure le domaine canonique `https://andelson-teufack.dev`, les ancres de sections et les images clés.

---

### Tâche 3 : Enregistrement des Schémas Schema.org Complexes & Métadonnées Globales

**Fichiers :**
- Modifier : `app/layout.tsx`

**Interfaces :**
- Produit : Graphe JSON-LD `@graph` ultra-riche et métadonnées multi-moteurs / IA.

- [ ] **Étape 1 : Rédiger le graphe JSON-LD Schema.org dans `app/layout.tsx`** comprenant :
  - `Person` (avec email, téléphones, formation IAI, certif Google, alternateName, knowsAbout, sameAs).
  - `ProfilePage` (Google official entity page).
  - `WebSite` & `SearchAction`.
  - `FAQPage` (Questions & Réponses clés pour moteurs IA et Featured Snippets).
  - `ItemList` de `SoftwareApplication` (MomoKash, HR Management, TaillorPro, Maintenance Tracking, MULEMA, Laoshi Consulting, Building Manager).
  - `BreadcrumbList`.
- [ ] **Étape 2 : Mettre à jour la constante `metadata` dans `app/layout.tsx`** avec balises géographiques (`geo.region`), alternances de langues et métadonnées OpenGraph / Twitter.

---

### Tâche 4 : Enrichissement Sémantique, ARIA & SXO des Composants UI

**Fichiers :**
- Modifier : `components/Hero.tsx`
- Modifier : `components/About.tsx`
- Modifier : `components/Projects.tsx`
- Modifier : `components/Contact.tsx`
- Modifier : `components/Footer.tsx`

**Interfaces :**
- Produit : Balisage sémantique HTML5, alt-text d'images SEO-friendly et variantes d'entité sémantique.

- [ ] **Étape 1 : Mettre à jour `Hero.tsx`** avec attributs ALT enrichis ("TEUFACK SONTSA Andelson - Développeur Full-Stack Douala Cameroun").
- [ ] **Étape 2 : Mettre à jour `About.tsx`** avec les balises d'entité et compétences.
- [ ] **Étape 3 : Mettre à jour `Projects.tsx`** avec les titres sémantiques `article` et `itemscope`.
- [ ] **Étape 4 : Mettre à jour `Contact.tsx` et `Footer.tsx`** avec balises d'adresse sémantiques micro-données et mentions d'entité.

---

### Tâche 5 : Validation TypeScript & Audit de Build

**Fichiers :**
- Exécuter : `npx tsc --noEmit`
- Exécuter : `npm run build`

- [ ] **Étape 1 : Vérifier la compilation TypeScript sans erreur**
- [ ] **Étape 2 : Vérifier le build de production Next.js 16**
