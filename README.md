# Nagarjuna Charupally — Portfolio

A creative, modern personal portfolio for **Nagarjuna Charupally** — VMware Administrator at Aptly Technology Corporation, formerly Software Engineer at Tech Mahindra.

Built with **React 18 + Vite** and hand-crafted CSS. No UI libraries, no Tailwind — just clean, modern web.

## ✨ Features

- **Animated hero** with typewriter effect, gradient orbs, and an interactive 3D terminal mockup.
- **Interactive cursor glow** that softly follows the mouse (desktop only).
- **Scroll progress bar** at the top.
- **Reveal-on-scroll** animations powered by `IntersectionObserver`.
- **Sticky scrollspy navbar** with active-section highlighting and a mobile menu.
- **Light / Dark theme toggle** that respects user choice.
- **Sections**: Hero, About, Experience timeline, Skills (with animated bars), Projects, Contact form.
- **Fully responsive** — looks great on phones, tablets, and desktops.
- **Accessibility**: respects `prefers-reduced-motion`, semantic landmarks, ARIA labels.

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

The dev server runs at **http://localhost:5173**.

## 🗂️ Project Structure

```
.
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── index.css
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Experience.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── CursorGlow.jsx
        └── ScrollProgress.jsx
```

## 🛠️ Customization

- **Personal info** lives directly inside the section components (`Hero.jsx`, `About.jsx`, etc.).
- **Email address** for the contact form is in `src/components/Contact.jsx` — update `nagarjuna.charupally@example.com` to your real address.
- **Theme colors** are defined as CSS variables in `src/styles/index.css` under `:root[data-theme='dark']` and `:root[data-theme='light']`.

## 📦 Tech Stack

- React 18
- Vite 5
- Vanilla CSS (custom properties, container queries, modern layout)
- Google Fonts: Space Grotesk + JetBrains Mono

---

Made with ☕ and PowerCLI.
