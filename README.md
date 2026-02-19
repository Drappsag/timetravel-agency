# TimeTravel Agency — Webapp Interactive

Webapp moderne et interactive pour une agence de voyage temporel fictive.
Destinations incluses : Paris 1889, Crétacé (-65M), Florence 1504.

## Membres du groupe
- MEYER Gaspard
- NAMANI Samuel

## Liens
- Production (Vercel) : [<https://timetravel-agency-mu.vercel.app/>

## Stack technique
- Next.js (React) + TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Chatbot IA : Mistral API (côté serveur via API route)
- Déploiement : Vercel (recommandé) / Netlify

## Features implémentées
- Landing page (hero vidéo + CTA)
- Présentation de l’agence
- Galerie des destinations (cards interactives)
- Pages détail par destination
- Chatbot IA (widget flottant en bas à droite)
- Quiz de recommandation (optionnel du brief — inclus)
- Formulaire de réservation (optionnel du brief — inclus, validation Zod)

## IA utilisées (transparence)
- Chatbot : modèle Mistral via API (mistral-small-latest)
- (Optionnel) Génération initiale UI : v0.dev / Bolt / Cursor (si utilisé, préciser vos prompts)

## Installation
```bash
npm i
cp .env.example .env.local
# ajouter MISTRAL_API_KEY dans .env.local
npm run dev
