# augmented-architect.ai

Official website for **"The AI-Augmented Architect"** book by Klaus Barkhausen.

## About the Book

The definitive guide to mastering Claude Code and Cursor for AI-augmented software development.

- 34 comprehensive chapters
- 9,000+ lines of content
- 100+ code examples
- Covers latest March 2026 features

## Deployment

This site is designed for **Cloudflare Pages** deployment.

### Setup

1. Connect this repository to Cloudflare Pages
2. Set build settings:
   - Build command: (none - static site)
   - Build output directory: `/`
3. Add custom domain: `augmented-architect.ai`

### Local Development

Simply open `index.html` in a browser, or use a local server:

```bash
npx serve .
```

## Structure

```
├── index.html          # Main landing page
├── resources.html      # Code samples, videos, changelog
├── errata.html         # Book corrections
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # Interactive features
├── _headers            # Cloudflare security headers
├── _redirects          # URL redirects
└── favicon.svg         # Site icon
```

## Features

- Responsive design (mobile-first)
- Dark theme
- Smooth scroll navigation
- Copy-to-clipboard code samples
- Newsletter signup (placeholder)
- Amazon buy links (placeholder - update when published)

## Updating

### Amazon Links

When the book is published on Amazon, update the buy buttons in `index.html`:

```html
<a href="https://amazon.com/dp/YOUR-ASIN" class="btn btn-primary btn-lg buy-btn">
    Buy on Amazon Kindle
</a>
```

### Adding Errata

Update `errata.html` with the errata table (example provided in comments).

### Adding Changelog Items

Add new items to the changelog section in `resources.html`.

## License

© 2026 Klaus Barkhausen. All rights reserved.
