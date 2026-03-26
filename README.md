# Nithish — Personal Website & Nithish OS

A modern one-page portfolio built with vanilla HTML, CSS, and JavaScript, alongside **Nithish OS** — an interactive React-based career digital twin.

## Structure

- `index.html` / `styles.css` / `script.js` — Main portfolio (vanilla JS)
- `os.html` / `os-main.jsx` / `nithish-os.jsx` — Nithish OS (React + Vite)

## Edit content

Open `script.js` and update the `siteData` object:

- `profile` — name, title, email, location, links
- `metrics` — highlight numbers with animated counters
- `projects` — featured showcase cards
- `experience` — timeline entries
- `skillCategories` — categorized tech stack
- `endorsements` — recommendation quotes
- `docs` — document links (resume, certs, LORs)

## Run locally

```bash
# Main site (static)
open index.html

# Nithish OS (requires Vite)
npm install
npm run dev
```

## Deploy

Build for production:

```bash
npm run build
```

Both `index.html` and `os.html` are included as Vite entry points via `vite.config.js`.

Deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages.

**Note:** Document links (`../work_details/...`) need to be updated to relative paths or hosted URLs before deployment.
