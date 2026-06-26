# Igor Franklin — Portfolio

> Personal portfolio built with pure HTML, CSS and vanilla JavaScript. Bilingual (PT/EN), dark gradient design, fully responsive.

🌐 **Live:** [igorfggomes.github.io](https://igorfggomes.github.io)

---

## Features

- **PT / EN toggle** — language switch with localStorage persistence
- **Dark gradient design** — `#0f172a` background with indigo → pink accent
- **Fade-in animations** — IntersectionObserver, no dependencies
- **Devicon badges** — tech stack with official icons via CDN
- **Responsive** — mobile-first, tested on all breakpoints
- **Zero build step** — plain HTML/CSS/JS, deploy directly to GitHub Pages

---

## Tech Stack (Portfolio itself)

| Layer | Tech |
|---|---|
| Markup | HTML5 semantic |
| Styles | CSS3 custom properties, animations, grid/flexbox |
| Scripts | Vanilla JS (ES6+) |
| Icons | [Devicon](https://devicon.dev) via CDN |
| Font | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |
| Hosting | GitHub Pages |

---

## Sections

| Section | Description |
|---|---|
| Hero | Name, title, CTA buttons |
| About | Bio, photo, key info |
| Stack | Tech badges grouped by area |
| Experience | Timeline with measurable results |
| Contact | LinkedIn, GitHub, WhatsApp, Email |

---

## Running locally

No build step required — just open the file:

```bash
git clone https://github.com/igorfggomes/igorfggomes.github.io.git
cd igorfggomes.github.io
# Open index.html in your browser
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

---

## Adding translations

All text lives in the `translations` object inside `js/scripts.js`. To update content or add a new language, edit only that object — no HTML changes needed.

```js
const translations = {
  pt: { 'hero-title': '...', ... },
  en: { 'hero-title': '...', ... }
};
```

---

## Contact

| | |
|---|---|
| LinkedIn | [linkedin.com/in/igorfggomes](https://linkedin.com/in/igorfggomes) |
| Email | igor.fggomes@hotmail.com |
| WhatsApp | [(35) 9 9192-3916](https://api.whatsapp.com/send?phone=5535991923916) |
