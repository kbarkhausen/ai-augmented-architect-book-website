# augmented-architect.ai

Official website for **"The AI Augmented Architect"** book by Klaus Barkhausen.

## About the Book

The definitive guide to mastering Claude Code and Cursor for AI-augmented software development.

- 34 comprehensive chapters
- 9,000+ lines of content
- 100+ code examples
- Covers latest April 2026 features

## Tech Stack

- **Vue.js 3** with Composition API (`<script setup>`)
- **Vue Router** for client-side routing
- **Vite** for build tooling and dev server

## Local Development

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

## Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

## Deployment (Cloudflare Pages)

1. Connect this repository to Cloudflare Pages
2. Set build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Add custom domain: `augmented-architect.ai`

## Project Structure

```
├── index.html                  # SPA entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── public/
│   ├── favicon.svg             # Site icon
│   └── images/                 # Static images (logo, book cover, author photo)
├── src/
│   ├── main.js                 # App entry — mounts Vue + router
│   ├── App.vue                 # Root component (NavBar + router-view + Footer)
│   ├── router.js               # Vue Router routes
│   ├── assets/
│   │   └── styles.css          # Global stylesheet
│   ├── components/
│   │   ├── NavBar.vue          # Shared navigation bar
│   │   └── SiteFooter.vue      # Shared footer
│   └── pages/
│       ├── HomePage.vue        # Landing page
│       ├── FeaturesPage.vue    # What's Inside
│       ├── JourneyPage.vue     # Your Journey
│       ├── SnippetsPage.vue    # Code Snippets browser
│       ├── CheatsheetPage.vue  # Quick Reference Cheat Sheet
│       ├── ResourcesPage.vue   # Videos & Changelog
│       ├── AuthorPage.vue      # About the Author
│       ├── BuyPage.vue         # Get the Book
│       └── ErrataPage.vue      # Errata
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/features` | What's Inside |
| `/journey` | Your Journey |
| `/snippets` | Code Snippets |
| `/cheatsheet` | Cheat Sheet |
| `/resources` | Resources |
| `/author` | About the Author |
| `/buy` | Get the Book |
| `/errata` | Errata |

## Updating

### Amazon Links

When the book is published on Amazon, update the buy buttons in `src/pages/BuyPage.vue`:

```html
<a href="https://amazon.com/dp/YOUR-ASIN" class="btn btn-primary btn-lg buy-btn">
    Buy on Amazon Kindle
</a>
```

### Adding Errata

Update `src/pages/ErrataPage.vue` with the errata table (example provided in comments).

### Adding Changelog Items

Add new items to the changelog section in `src/pages/ResourcesPage.vue`.

## License

© 2026 Klaus Barkhausen. All rights reserved.
