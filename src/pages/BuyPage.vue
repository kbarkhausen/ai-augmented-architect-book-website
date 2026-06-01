<template>
  <header class="buy-hero">
    <div class="container">
      <h1>Get the Book</h1>
      <p>The AI-Augmented Architect is planned for release in June 2026, positioned as both a serious architecture book and a practical companion experience.</p>
    </div>
  </header>

  <section class="buy-section">
    <div class="container buy-shell">
      <div class="buy-card featured">
        <div class="buy-badge">Book + Companion</div>
        <h2>Why this book stands out</h2>
        <ul class="points-list">
          <li v-for="point in buyPagePoints" :key="point">{{ point }}</li>
        </ul>
      </div>

      <div class="buy-card">
        <h2>June 2026 release</h2>
        <p>
          The website is being positioned now so it can market the June 2026 release, support the launch,
          and continue serving readers after purchase with practical resources.
        </p>
        <div class="buy-actions">
          <a href="mailto:klaus@barkhausen.us?subject=The%20AI-Augmented%20Architect%20Launch%20Updates" class="btn btn-primary btn-lg">
            Request launch updates
          </a>
          <a href="mailto:klaus@barkhausen.us?subject=The%20AI-Augmented%20Architect%20-%20Review%20Copy%20or%20Workshop" class="btn btn-secondary btn-lg">
            Ask about review copies or workshops
          </a>
        </div>
        <p class="buy-note">Once retail links are live, this page can be updated with Amazon, direct sales, and print options for the June 2026 release.</p>
      </div>
    </div>
  </section>

  <section class="buy-paths">
    <div class="container">
      <div class="section-header">
        <h2>Three reasons to visit the site before and after buying</h2>
      </div>
      <div class="path-grid">
        <article class="path-card">
          <h3>Before purchase</h3>
          <p>Visitors can quickly understand the thesis, audience, structure, and practical value of the book.</p>
        </article>
        <article class="path-card">
          <h3>During evaluation</h3>
          <p>Examples, worksheets, and labs show that the book is grounded in real architecture work, not buzzwords.</p>
        </article>
        <article class="path-card">
          <h3>After purchase</h3>
          <p>The companion materials keep the site useful, which makes the book more referable and easier to recommend inside organizations.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { buyPagePoints } from '../data/siteContent'
</script>

<style scoped>
.buy-hero {
  padding: 160px 0 40px;
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
}

.buy-hero h1 {
  margin-bottom: var(--space-md);
}

.buy-section {
  padding: var(--space-3xl) 0;
}

.buy-shell,
.path-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.buy-card,
.path-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  position: relative;
}

.buy-card.featured {
  border-color: var(--color-primary);
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.15);
}

.buy-badge {
  display: inline-flex;
  margin-bottom: var(--space-lg);
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-full, 999px);
  font-size: 0.8rem;
  font-weight: 600;
}

.buy-card h2,
.path-card h3 {
  margin-bottom: var(--space-md);
}

.points-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  padding-left: 1rem;
}

.points-list li,
.path-card p {
  color: var(--color-text-muted);
}

.points-list li {
  list-style: disc;
}

.buy-actions {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin: var(--space-xl) 0 var(--space-lg);
}

.buy-note {
  font-size: 0.9rem;
}

.buy-paths {
  background: var(--color-bg-elevated);
  border-top: 1px solid var(--color-border);
}

.path-grid {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 968px) {
  .buy-shell,
  .path-grid {
    grid-template-columns: 1fr;
  }
}
</style>
