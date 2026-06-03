<div align="center">

# 🧠 Empowerhouse Group

### _Behavioral Agility. Inner Strength. Unshakable You._

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-empowerhousegroup.com-3ee8a4?style=for-the-badge&logoColor=white)](https://empowerhousegroup.com/)
[![Netlify Status](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://empowerhousegroup.netlify.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/shihabiiuc/empowerhousegroup)

</div>

---

## 📌 Overview

A high-performance, modern web presence for **Empowerhouse Group** — a leadership consultancy empowering individuals, athletes, students, and organizations through the proprietary **BioCode System®**. Trusted by brands like Coca-Cola, Home Depot, Chick-fil-A, and the Green Bay Packers.

This project is a complete redesign and rebuild of the existing WordPress site — migrated to a blazing-fast, statically-generated **Astro** architecture with a focus on performance, SEO, and clean component-driven code.

> 🏆 **78% of individuals** assessed with The BioCode System® reported improvement in their ability to perform at their best under stress.

---

## 🚀 Tech Stack

<div align="center">

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)

</div>

| Layer           | Technology                                   | Purpose                                                |
| --------------- | -------------------------------------------- | ------------------------------------------------------ |
| **Framework**   | Astro 5                                      | Static site generation with island architecture        |
| **Styling**     | Tailwind CSS v4 + Custom CSS                 | Utility-first + custom design tokens via CSS variables |
| **Language**    | TypeScript + JavaScript                      | Type-safe components, client-side interactivity        |
| **Transitions** | Astro `<ClientRouter />`                     | SPA-like page transitions without full reloads         |
| **Fonts**       | Google Fonts (DM Serif Display, Inter, Jost) | Refined editorial typography                           |
| **Deployment**  | Netlify                                      | Continuous deployment from GitHub                      |
| **SEO**         | Open Graph, Twitter Cards, Canonical URLs    | Full social sharing & search engine metadata           |

---

## ✨ Features

- ⚡ **Sub-second load times** — Static generation with zero JavaScript by default
- 📱 **Fully responsive** — Mobile-first design with a custom hamburger nav
- 🎨 **Custom design system** — CSS variables for consistent theming across all pages
- 🔗 **SPA-like navigation** — Smooth page transitions via Astro's `ClientRouter`
- 🧩 **Component architecture** — Reusable `.astro` components (Header, Footer, Layout)
- 🔍 **SEO-optimised** — Open Graph, Twitter Card meta, canonical URLs, robots meta
- 🖼️ **OG image support** — Per-page social preview images with absolute URL resolution
- ♿ **Accessible markup** — ARIA labels, semantic HTML, keyboard navigation support
- 🌙 **Active link highlighting** — Correct path normalisation for trailing slash edge cases

---

## 📁 Project Structure

```
empowerhousegroup/
├── public/
│   ├── og-image.jpg          # Open Graph social preview image (1200×630)
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── logo.png
│   └── scripts/
│       └── header.js         # Mobile nav toggle logic
├── src/
│   ├── components/
│   │   ├── Header.astro      # Responsive nav with active link detection
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro      # Base layout with full SEO meta & OG tags
│   ├── pages/
│   │   ├── index.astro
│   │   ├── the-biocode-system.astro
│   │   ├── team.astro
│   │   ├── self-assessment.astro
│   │   ├── events.astro
│   │   ├── programs.astro
│   │   ├── testimonials.astro
│   │   └── contact-us.astro
│   └── styles/
│       └── global.css        # Design tokens, resets, custom properties
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js `v18+`
- npm or your preferred package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/shihabiiuc/empowerhousegroup.git

# Navigate into the project
cd empowerhousegroup

# Install dependencies
npm install
```

### Development

```bash
# Start the local dev server at http://localhost:4321
npm run dev
```

### Build & Preview

```bash
# Build for production (outputs to ./dist)
npm run build

# Preview the production build locally
npm run preview
```

---

## 🧞 Commands Reference

| Command               | Action                               |
| --------------------- | ------------------------------------ |
| `npm install`         | Install project dependencies         |
| `npm run dev`         | Start dev server at `localhost:4321` |
| `npm run build`       | Build production site to `./dist/`   |
| `npm run preview`     | Preview production build locally     |
| `npm run astro check` | Run TypeScript diagnostics           |
| `npm run astro add`   | Add an official Astro integration    |

---

## 🔍 SEO & Open Graph

The `Layout.astro` file includes a complete meta setup:

- `og:title`, `og:description`, `og:image`, `og:type`, `og:url`
- `twitter:card`, `twitter:image`, `twitter:title`
- Canonical URL auto-resolved from `Astro.site`
- Per-page OG image override via the `ogImage` prop
- `robots: index, follow`

To override the OG image on any page:

```astro
<Layout title="Team" description="Meet the BioCode team" ogImage="/team-og.jpg">
  ...
</Layout>
```

---

## 🌐 Deployment

This site is deployed on **Netlify** with continuous deployment from the `master` branch.

| Environment       | URL                                                                     |
| ----------------- | ----------------------------------------------------------------------- |
| Production        | [empowerhousegroup.com](https://empowerhousegroup.com/)                 |
| Preview / Staging | [empowerhousegroup.netlify.app](https://empowerhousegroup.netlify.app/) |

The `site` field in `astro.config.mjs` is set to the production domain to ensure all canonical and OG URLs resolve correctly:

```js
export default defineConfig({
  site: "https://empowerhousegroup.netlify.app",
});
```

---

## 👨‍💻 Developer

**Designed & developed by [Shihab](https://shihabiiuc.com)**

If you're a hiring manager or potential client — this project showcases:

- Real-world **Astro** project structure and best practices
- Custom **responsive navigation** with correct active state handling
- Production-grade **SEO implementation** (OG, Twitter Cards, Canonical)
- Clean, maintainable **TypeScript-typed component props**
- **CSS architecture** using design tokens and custom properties
- **Netlify deployment** pipeline with environment-specific config

---

## 📄 License

This project is proprietary. All content and branding belong to **Empowerhouse Leadership Consultancy, Inc.**

---

<div align="center">

Made with ❤️ and ⚡ Astro

[![Astro](https://img.shields.io/badge/Built_with-Astro-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Deployed on Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://netlify.com)

</div>
