# 💻 Portfolio — Maxime Esteves

Bienvenue sur mon site personnel où je présente mes projets web, mes compétences techniques et mon parcours.  
Ce portfolio est conçu comme une vitrine professionnelle, avec une mise en valeur de chaque réalisation par des démonstrations, captures d’écran et descriptions détaillées.

## 🎯 Objectif du site

- Présenter mes **projets personnels et professionnels**
- Mettre en avant mes **compétences techniques et créatives**
- Offrir aux recruteurs et partenaires une vision claire de **mon profil et mes réalisations**
- Servir de **base centralisée** pour mes liens professionnels (GitHub, LinkedIn, etc.)

## 🚀 Fonctionnalités

- **Page d’accueil** : introduction et présentation rapide
- **Section Projets** : liste interactive avec détails, images et liens vers les démos
- **Navigation fluide** : transitions douces et responsive design
- **Animations et effets visuels** pour dynamiser la présentation
- **Contact** : formulaire ou lien direct vers mes réseaux

## Rubrique restaurants

La page `/restaurant` présente des sites d’exemple destinés à la prospection.
Elle est accessible depuis le menu et l’accueil. Les textes et liens sont dans
`src/data/restaurantExamples.js`, partagés avec les aperçus de l’accueil.
Les images sont dans `public/restaurants/`.
Le bouton de contact ouvre un e-mail prérempli, sans envoyer de message automatiquement.

Après déploiement du portfolio sur Netlify, l’adresse à partager est
`https://maximeesteves.fr/restaurant`. La règle dans `public/_redirects`, copiée
dans `dist/_redirects` à la compilation, permet l’ouverture directe et le
rafraîchissement des routes React (`/restaurant`, `/projet/:id`, etc.) sans
modifier l’URL. Les fichiers existants (images, PDF, scripts) restent servis normalement.
`netlify.toml` définit la compilation et le dossier `dist` à publier.
La configuration Vercel est conservée pour un éventuel autre hébergement.

## 🛠️ Stack technique

- **Front-end** : HTML5, CSS3 (SCSS), JavaScript
- **Framework** : React.js
- **Animations** : Framer Motion
- **Gestion d’icônes** : Font Awesome
- **Hébergement** : Netlify

## 📂 Installation et exécution

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/utilisateur/portfolio.git
   ```
