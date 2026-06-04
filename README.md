# HR.DEV — Portfolio

Portfolio personnel de Hugo Rulier, développeur fullstack basé à Nantes.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Sass** + CSS Modules pour le styling
- **Framer Motion** pour les animations
- **React Hook Form** pour le formulaire de contact
- **Resend** + **react-email** pour l'envoi d'emails

## Lancer en local

```bash
npm install
npm run dev       # http://localhost:3000
```

### Variables d'environnement

Créer un fichier `.env.local` à la racine :

```env
RESEND_APIKEY=your_resend_api_key
NOREPLY=noreply@yourdomain.com
EMAIL_TO=your@email.com
```

## Scripts

```bash
npm run dev       # Serveur de développement
npm run build     # Build de production
npm run start     # Serveur de production
npm run lint      # ESLint
```

## Déploiement

Le projet est configuré en mode `standalone` (Next.js) et déployé via Docker + GitHub Actions sur push sur `main`.
