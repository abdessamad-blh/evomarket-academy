# EvoMarket Academy - Formation en Communication Digitale

Landing page responsive pour EvoMarket Academy, inspirée de cinemaform.com avec un design mobile-first.

## 🚀 Technologies

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## 📦 Installation

1. Installez les dépendances :
```bash
npm install
```

2. Lancez le serveur de développement :
```bash
npm run dev
```

3. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 🎨 Personnalisation des Images

### Images à Remplacer

Toutes les images sont actuellement des placeholders. Ajoutez vos images dans `/public/images/` :

#### Hero Section
- **hero-bg.jpg** (1920x1080px) - Image de fond de la section hero

#### About Section
- **team-photo.jpg** (800x600px) - Photo de l'équipe

#### Trainers Section
- **trainer-mouad.jpg** (600x800px) - Photo de B.Mouad
- **trainer-rachid.jpg** (600x800px) - Photo de S.Rachid
- **trainer-ayoub.jpg** (600x800px) - Photo de M.Ayoub
- **trainer-youness.jpg** (600x800px) - Photo de E.Youness
- **team-full.jpg** (1600x900px) - Photo complète de l'équipe

#### Logo
- **logo.png** ou **logo.svg** - Logo EvoMarket Academy

### 📹 Vidéos YouTube

Pour ajouter vos vidéos de témoignages, modifiez le composant `Trainers.tsx` :

```tsx
// Remplacez les placeholders vidéo par des embeds YouTube
<iframe
  className="w-full aspect-video rounded-2xl"
  src="https://www.youtube.com/embed/VOTRE_VIDEO_ID"
  title="Témoignage"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
```

## 🎨 Couleurs du Thème

Les couleurs peuvent être modifiées dans `tailwind.config.ts` :

- **primary**: `#F4B223` (Jaune/Or)
- **dark**: `#0A0E27` (Bleu foncé)
- **accent**: `#FF6B35` (Orange)

## 📱 Responsive Design

Le site est entièrement responsive avec breakpoints :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🔗 Configuration pour Subdomain

### Déploiement sur Vercel

1. Poussez votre projet sur GitHub
2. Connectez-vous à [Vercel](https://vercel.com)
3. Importez votre repository
4. Déployez le projet
5. Dans les paramètres du projet, ajoutez un domaine personnalisé : `academy.evomarket.ma`

### Configuration DNS

Dans votre provider DNS (où evomarket.ma est enregistré) :

1. Ajoutez un enregistrement **CNAME** :
   - **Name/Host** : `academy`
   - **Value** : `cname.vercel-dns.com`
   - **TTL** : Automatic ou 3600

2. Ou ajoutez un enregistrement **A** :
   - **Name/Host** : `academy`
   - **Value** : `76.76.21.21` (IP de Vercel)
   - **TTL** : Automatic ou 3600

## 📞 Contact

- **Téléphone** : 06 24 45 88 47 / 05 37 70 59 11
- **Email** : evomarketagency@gmail.com
- **Site Web** : www.evomarket.ma
- **Instagram** : @academy.evomarket

## 📄 Structure du Projet

```
evomarket-academy/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout principal
│   │   ├── page.tsx         # Page d'accueil
│   │   └── globals.css      # Styles globaux
│   └── components/
│       ├── Header.tsx       # Navigation
│       ├── Hero.tsx         # Section hero
│       ├── About.tsx        # Section à propos
│       ├── Planning.tsx     # Planning des sessions
│       ├── Objective.tsx    # Objectifs de formation
│       ├── Trainers.tsx     # Section formateurs
│       └── Footer.tsx       # Pied de page
├── public/
│   └── images/             # Vos images ici
├── tailwind.config.ts      # Configuration Tailwind
├── tsconfig.json          # Configuration TypeScript
└── package.json           # Dépendances

```

## 🛠️ Build pour Production

```bash
npm run build
npm run start
```

## 📝 Notes

- Tous les placeholders d'images affichent les dimensions recommandées
- Les animations sont optimisées pour les performances
- Le design suit les principes de cinemaform.com avec mobile-first
- Toutes les sections sont accessibles via le menu de navigation

---

Développé avec ❤️ par EvoMarket Digital Agency
