# Plan d'implémentation — Assistant IA & Avatar Cyber "Andelson AI"

> **Pour les agents :** SOUS-COMPÉTENCE REQUISE : Utilisez superpowers:subagent-driven-development ou planification pour suivre ce plan.

**Objectif :** Créer un Assistant IA personnel immersif avec Avatar Cyber 3D/Canvas interactif, base de connaissances RAG réactive sur Andelson Teufack, interface de chat glassmorphic bilingue, et raccourci clavier `Cmd+K`.

---

### Tâche 1 : Moteur de Connaissances & RAG (`lib/ai-knowledge.ts`)
- [ ] **Étape 1 : Créer `lib/ai-knowledge.ts`** contenant la base de données exhaustive d'Andelson Teufack (parcours KES IP, Green Power, Credix, IAI, projets TaillorPro, MomoKash, MULEMA, etc.) et l'algorithme sémantique de réponses bilingues (FR/EN) avec restriction de périmètre stricte.

---

### Tâche 2 : Route API Backend (`app/api/chat/route.ts`)
- [ ] **Étape 1 : Créer `app/api/chat/route.ts`** traitant les requêtes de conversation, intégrant le Prompt Système de personnalité et se connectant de façon hybride à l'API LLM / Moteur de connaissances.

---

### Tâche 3 : Composants Avatar Cyber & Trigger Dock (`components/ui/AIAvatar.tsx` & `components/AIAssistantTrigger.tsx`)
- [ ] **Étape 1 : Créer `components/ui/AIAvatar.tsx`** (Core holographique animé Canvas/Framer Motion, réactif au curseur, aux états de frappe/réponse et breathing).
- [ ] **Étape 2 : Créer `components/AIAssistantTrigger.tsx`** (Bouton flottant bas-droite avec bulle d'invitation discrète et badge de présence).

---

### Tâche 4 : Interface Chat Modal Glassmorphic & Raccourci Keyboard (`components/AIChatModal.tsx`)
- [ ] **Étape 1 : Créer `components/AIChatModal.tsx`** (Panneau de chat premium, streaming de texte, questions suggérées, raccourci `Cmd+K` / `Ctrl+K`, bilingue FR/EN).
- [ ] **Étape 2 : Intégrer l'Assistant dans `app/page.tsx` et `components/Header.tsx`** avec la mention `Cmd+K`.

---

### Tâche 5 : Validation TypeScript & Build
- [ ] **Étape 1 : Exécuter `npx tsc --noEmit`**
- [ ] **Étape 2 : Exécuter `npm run build`**
