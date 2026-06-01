# The AI-Augmented Architect website

Official website and companion hub for **The AI-Augmented Architect** by Klaus Barkhausen.

## Positioning

This site now serves two jobs at once:

1. **Book marketing site**
   - Explains the thesis of the book
   - Shows who it is for
   - Presents the table of contents and author positioning
   - Provides launch and contact paths

2. **Book companion site**
   - Hosts examples aligned to the book
   - Provides worksheets and forms teams can reuse
   - Provides labs for workshops and internal planning sessions
   - Tracks errata and future companion materials

## Content structure

The site is organized around the new manuscript structure:

- **Home**: overview and positioning
- **Book**: six-part table of contents and core promise
- **Companion**: chapter-to-resource map
- **Examples**: reference artifacts tied to the book’s themes
- **Worksheets**: reusable planning and review forms
- **Labs**: facilitated exercises for teams
- **Author**: Klaus Barkhausen profile
- **Get the Book**: launch and inquiry page
- **Errata**: corrections and clarifications

Legacy routes from the older version of the site are preserved as aliases in `src/router.js`.

## Tech stack

- Vue 3
- Vue Router
- Vite

## Local development

```bash
npm install
npm run dev
```

Dev server: `http://localhost:5173`

## Production build

```bash
npm run build
```

Build output: `dist/`

## Preview production build

```bash
npm run preview
```

## Important source file

Companion and marketing copy is centralized in:

- `src/data/siteContent.js`

That file contains:
- book structure
- audience positioning
- example artifacts
- worksheet templates
- lab descriptions
- buy-page messaging

## Deployment

Typical static deployment settings:

- Build command: `npm run build`
- Output directory: `dist`

## License

© 2026 Klaus Barkhausen. All rights reserved.
