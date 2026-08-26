# Spécification Technique — Assistant IA & Avatar Cyber Interactif (GEO / AI UX)

**Date :** 2026-07-23  
**Auteur :** Équipe IA & Lead Frontend Antigravity  
**Portée :** Intégration d'un Assistant IA autonome, d'un Avatar Cyber 3D/Canvas interactif, d'une Base de Connaissances locale/RAG dynamique, et d'un modal de chat glassmorphism avec streaming et raccourci clavier `Cmd+K`.

---

## 1. Vision & Directives Clés

L'Assistant IA doit devenir l'une des fonctionnalités les plus mémorables du portfolio de **TEUFACK SONTSA Andelson**.

### Exigences Spécifiques :
1. **Périmètre Strict (Zero Hallucination) :** L'assistant est une extension numérique d'Andelson Teufack. Sa connaissance est **exclusivement dédiée à Andelson** (expériences, projets, compétences, formation IAI, certif Google, contact). S'il est interrogé sur un sujet externe (recette, maths générales, actualité), il refuse poliment en 1 phrase et réoriente le visiteur vers le profil d'Andelson.
2. **Coût Zéro / Hybride RAG :** Le système fonctionne de manière autonome via un moteur de connaissances sémantiques réactif (`lib/ai-knowledge.ts`) et se connecte à l'API Gemini 2.5 Flash / Groq si une clé `GEMINI_API_KEY` est configurée.
3. **Avatar Cyber Interactif (`components/ui/AIAvatar.tsx`) :**
   - Sphère/Core hologramme Cyber avec anneaux de particules réactifs au survol, au curseur, à la frappe et au scroll.
   - Animations d'attente (breathing), d'invitation discrète ("Besoin d'un aperçu sur les projets d'Andelson ? 👋") et d'expression pendant la génération de réponse.
4. **Interface Chat Premium (`components/AIChatModal.tsx`) :**
   - Modal glassmorphic bilingue (FR/EN) avec pilules de suggestions de questions ("Présente-moi Andelson", "Expérience avec Flutter & Spring Boot", "Pourquoi le recruter ?").
   - Support du raccourci clavier universel `Cmd+K` / `Ctrl+K`.

---

## 2. Architecture Technique

- **Moteur de Connaissances (`lib/ai-knowledge.ts`) :**
  - Indexation exhaustive du profil : KES IP, Green Power (x2), Credix (x2), Formateur IAI, MomoKash, TaillorPro, MULEMA, HR Management System, Maintenance Tracking, Laoshi Consulting, Building Manager, Sponsorship Engine.
  - Fonction RAG / Pattern-Matching sémantique pour réponses ultra-rapides et contextuelles en FR & EN.

- **Route API (`app/api/chat/route.ts`) :**
  - Validation des messages entrants et application du Prompt Système de sécurité & personnalité.

- **Trigger & Raccourcis :**
  - Bouton flottant bas-droite avec badge d'état live (`● AI Assistant`).
  - Écouteur global de touche `Cmd+K` / `Ctrl+K` affichant l'indicateur dans la barre de navigation.
