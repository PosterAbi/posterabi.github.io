# Kassa Kasutusjuhend

Documentation site built with [Docusaurus](https://docusaurus.io/). Hosted on GitHub Pages.

## Quick start

```bash
npm install
npm start        # local dev server at http://localhost:3000/kassa-wiki/
npm run build    # production build → ./build
```

## Deploy to GitHub Pages

### 1 — Create the repository

Create a new GitHub repo called `kassa-wiki` (or whatever you like).

### 2 — Update config

Open `docusaurus.config.ts` and change these three lines to match your repo:

```ts
url: 'https://YOUR-USERNAME.github.io',
baseUrl: '/kassa-wiki/',
organizationName: 'YOUR-USERNAME',
projectName: 'kassa-wiki',
```

### 3 — Push code

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/kassa-wiki.git
git push -u origin main
```

### 4 — Enable GitHub Pages

In your repo on GitHub:
- **Settings** → **Pages** → **Source**: Deploy from a branch
- **Branch**: `gh-pages` / `/ (root)`

The GitHub Action (`.github/workflows/deploy.yml`) runs automatically on every push to `main` and publishes to `gh-pages`.

Your site will be live at `https://YOUR-USERNAME.github.io/kassa-wiki/`

---

## Adding content

All documentation lives in `docs/` as Markdown files.

**Add a new page:**
1. Create `docs/tooted/uus-leht.md` with frontmatter:
   ```md
   ---
   id: uus-leht
   title: Uue lehe pealkiri
   sidebar_position: 6
   ---
   ```
2. Add it to `sidebars.ts` under the right category.

**Search** is powered by `@cmfcmf/docusaurus-search-local` — it indexes all content automatically on build.

## File structure

```
kassa-wiki/
├── docs/
│   ├── index.md                  ← home page
│   ├── kontaktid.md
│   ├── tooted/
│   │   ├── toote-lisamine.md
│   │   ├── kategooriad.md
│   │   ├── kampaaniad.md
│   │   ├── laoseis.md
│   │   └── mahakandmised.md
│   ├── finantsid/
│   │   ├── raha-algseisu.md
│   │   ├── kassavahetus.md
│   │   ├── sularaha.md
│   │   ├── tulud-kulud.md
│   │   └── ettemaksud.md
│   └── kasutajad/
│       ├── sisselogimine.md
│       └── tootaja.md
├── src/css/custom.css            ← styling
├── static/img/logo.svg
├── docusaurus.config.ts          ← site config (update org/repo here)
├── sidebars.ts                   ← sidebar order
└── .github/workflows/deploy.yml  ← auto-deploy on push
```
