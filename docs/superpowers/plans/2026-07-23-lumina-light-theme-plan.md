# Plan d'implémentation - Refonte de la Direction Artistique du Thème Clair (Lumina Executive)

> **Pour les agents :** SOUS-COMPÉTENCE REQUISE : Utilisez superpowers:subagent-driven-development (recommandé) ou planification pour implémenter ce plan tâche par tâche. Les étapes utilisent la syntaxe des cases à cocher (`- [ ]`) pour le suivi.

**Objectif :** Élever le Thème Clair au même niveau d'impact, de sophistication et d'effet "wow" que le Thème Sombre, en créant une expérience "Lumina Executive" aux contrastes parfaits, dégradés sculptés, cartes glassmorphism porcelaine et micro-interactions haut de gamme.

---

### Tâche 1 : Tokens CSS & Utilities du Thème Clair Lumina ([app/globals.css](file:///home/andelson-teufack/Bureau/Projets/MyPortfolio/app/globals.css))

- [ ] **Étape 1 : Mettre à jour `:root` dans `app/globals.css`** avec le fond Porcelaine Alabâtre, les dégradés de texte Navy-Azure tranchants, les ombres sculptées et le glassmorphic clair.

---

### Tâche 2 : Composants Dynamiques Adaptatifs (`SpotlightCard.tsx` & `ParticleBackground.tsx`)

- [ ] **Étape 1 : Modifier `SpotlightCard.tsx`** pour supporter les couleurs de spotlight et ombres adaptatives en mode clair et sombre.
- [ ] **Étape 2 : Modifier `ParticleBackground.tsx`** pour ajuster les couleurs des particules en fonction du thème actif.

---

### Tâche 3 : Adaptation Haute Définition des Composants de Navigation & En-tête (`Header.tsx` & `Hero.tsx`)

- [ ] **Étape 1 : Adapter `Header.tsx`** pour un contraste parfait en mode clair (texte midnight, pill actif azure/cyan, fond verre porcelaine).
- [ ] **Étape 2 : Adapter `Hero.tsx`** (badges, boutons CTA, titre principal et carte profil avec bordures et contrastes impeccables).

---

### Tâche 4 : Adaptation des Sections Contenu (`About.tsx`, `Skills.tsx`, `Experience.tsx`, `Projects.tsx`, `Contact.tsx`, `Footer.tsx`)

- [ ] **Étape 1 : Adapter `About.tsx`** (chiffres clés, piliers d'ingénierie et MacBook container).
- [ ] **Étape 2 : Adapter `Skills.tsx`** (pills de compétences, cartes soft skills et barres de langues).
- [ ] **Étape 3 : Adapter `Experience.tsx`** (timeline verticale, nœuds lumineux et cartes d'expériences).
- [ ] **Étape 4 : Adapter `Projects.tsx`** (filtres de catégories, cartes bento et badges de projets).
- [ ] **Étape 5 : Adapter `Contact.tsx` et `Footer.tsx`** (champs de formulaire, boutons d'envoi et pied de page).

---

### Tâche 5 : Validation TypeScript & Build

- [ ] **Étape 1 : Exécuter `npx tsc --noEmit`**
- [ ] **Étape 2 : Exécuter `npm run build`**
