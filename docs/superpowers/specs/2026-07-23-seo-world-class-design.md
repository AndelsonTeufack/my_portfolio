# Spécification Technique — SEO Mondial, Entity Branding & AI Search Optimization (GEO/SXO)

**Date :** 2026-07-23  
**Auteur :** Antigravity & TEUFACK SONTSA Andelson  
**Portée :** Référencement Naturel (SEO), Indexation Multi-Moteurs, Graphe d'Entité (Knowledge Graph), Données Structurées (Schema.org), Optimisation pour Moteurs IA (ChatGPT, Gemini, Perplexity, Claude), SXO & Performance Core Web Vitals.

---

## 1. Objectifs & Stratégie Multi-Moteurs

Le portfolio doit devenir une référence technique absolue en termes de découvrabilité numérique et d'autorité de marque personnelle pour **TEUFACK SONTSA Andelson**.

### Cibles d'Indexation & de Découvrabilité :
1. **Moteurs de recherche traditionnels :** Google, Bing, Yahoo, DuckDuckGo, Brave Search, Ecosia, Yandex, Baidu.
2. **Moteurs & Assistants IA (GEO - Generative Engine Optimization) :** Perplexity AI, ChatGPT (SearchGPT), Google Gemini, Claude, Copilot.
3. **Knowledge Graph & Entité Nommée :** Établir une entité sémantique unique pour "TEUFACK SONTSA Andelson" avec variantes orthographiques et synonymes techniques.

---

## 2. Architecture des Données Structurées (Schema.org Graph Complexe)

Injection d'un graphe JSON-LD `@graph` ultra-complet dans `app/layout.tsx` contenant :

1. **`Person` (Entité Principale) :**
   - `name`: "TEUFACK SONTSA Andelson"
   - `alternateName`: `["Teufack Sontsa Andelson", "Andelson Sontsa Teufack", "Andelson Teufack", "Anderson Teufack", "Teufac Andelson"]`
   - `email`: "teufackandelson123@gmail.com"
   - `telephone`: `["+237690819035", "+237651489468"]`
   - `jobTitle`: "Full-Stack Developer & IT Solutions Analyst"
   - `birthDate`: "2003-12-14"
   - `address`: Douala, Cameroun (GeoRegion `CM-LT`)
   - `alumniOf`: Institut Africain d'Informatique (IAI)
   - `worksFor`: KES Inspection & Project
   - `hasCredential`: Google IT Support Professional Certificate
   - `knowsAbout`: Java, Spring Boot, React, Next.js, Flutter, Python, Odoo ERP, PostgreSQL, MongoDB, APIs REST, Microservices.
   - `sameAs`: LinkedIn, GitHub.

2. **`ProfilePage` (Spécification Google pour les pages personnelles) :**
   - Déclarée comme page de profil officielle de l'entité `Person`.

3. **`WebSite` & `SearchAction` :**
   - Indexation de la structure du site et support des requêtes de recherche.

4. **`FAQPage` (Optimisation IA / Perplexity / SearchGPT) :**
   - Questions-réponses structurées résumant qui est Andelson Teufack, ses compétences, ses projets et comment le contacter.

5. **`ItemList` & `SoftwareApplication` (Projets) :**
   - Balisage Schema.org pour chaque projet (MomoKash, HR Management System, TaillorPro, Maintenance Tracking System, MULEMA, Laoshi Consulting, Building Manager).

6. **`BreadcrumbList` :**
   - Fil d'Ariane sémantique pour les rich snippets Google.

---

## 3. Optimisations Techniques (Robots, Sitemap, Manifest & Geolocation)

- **Dynamic `app/robots.ts` :**
  - Remplacement de `public/robots.txt`.
  - Autorisations explicites pour tous les moteurs et tous les crawlers IA (`GPTBot`, `ChatGPT-User`, `Google-Extended`, `ClaudeBot`, `PerplexityBot`, `Bytespider`, `CCBot`, `Applebot-Extended`).
  - Déclaration canonique du sitemap : `https://andelson-teufack.dev/sitemap.xml`.
- **Dynamic `app/sitemap.ts` :**
  - Génération avec priorités (`priority: 1.0`), fréquences de changement (`changeFrequency: 'weekly'`) et sections ancrées.
- **Dynamic `app/manifest.ts` :**
  - Web App Manifest PWA complet pour l'indexation mobile et l'installation sur écran d'accueil.
- **Balises Géographiques & Méta Extended :**
  - Méta-balises `geo.region` (`CM-LT`), `geo.placename` (`Douala`), `ICBM` et balises pour moteurs alternatifs.

---

## 4. Enrichissement Sémantique & SXO On-Page

- **Sémantique HTML5 :** Structure stricte `header`, `nav`, `main`, `section`, `article`, `footer` avec un seul `<h1>` et hiérarchie logique `<h2>`, `<h3>`.
- **Accessibilité (a11y) & ARIA :** Attributs ARIA explicites, rôles de navigation, alt-text d'images contextuels et SEO-friendly (`alt="TEUFACK SONTSA Andelson - Développeur Full-Stack Douala"`).
- **Inclusion naturelle des variantes de recherche :** Intégration fluide dans le footer et les balises cachées/alt text des déclinaisons de noms et intentions de recherche recruteurs.

---

## 5. Critères de Validation
- Rendu SSR valide sans erreur TypeScript (`npx tsc --noEmit`).
- Validation du build Next.js 16 (`npm run build`).
- Score Lighthouse SEO & Accessibilité ciblé à 100/100.
