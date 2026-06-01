<template>
  <header class="page-hero">
    <div class="container">
      <h1>The Companion</h1>
      <p>Use the website as the workbook, exercise kit, and extension layer for the book.</p>
    </div>
  </header>

  <section class="companion-intro">
    <div class="container intro-shell">
      <div class="intro-card">
        <h2>How to use this site</h2>
        <ol>
          <li>Read a chapter or a full part from the book.</li>
          <li>Come here to grab the related example, worksheet, or lab.</li>
          <li>Use the materials with your own team, portfolio, or modernization effort.</li>
          <li>Return to the book when you need the underlying argument and trade-off framing.</li>
        </ol>
      </div>
      <div class="intro-card accent">
        <h2>What this site is for</h2>
        <p>
          The site is not meant to repeat the manuscript. It is meant to extend it with reusable artifacts,
          team exercises, and a clearer path from concept to action.
        </p>
      </div>
    </div>
  </section>

  <section class="map-section">
    <div class="container">
      <div class="section-header">
        <h2>Chapter-to-companion map</h2>
        <p>Each part of the book has a practical entry point on the site.</p>
      </div>
      <div class="map-grid">
        <article v-for="item in companionMap" :key="item.part" class="map-card">
          <h3>{{ item.part }}</h3>
          <p>{{ item.resource }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="companion-grid-section">
    <div class="container">
      <div class="section-header">
        <h2>The four companion layers</h2>
        <p>The website is designed to function both as extension material and as the public-facing marketing layer for the book.</p>
      </div>
      <div class="resources-grid">
        <article v-for="card in companionCards" :key="card.title" class="resource-card">
          <div class="resource-icon">{{ card.icon }}</div>
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
          <router-link :to="card.link" class="resource-link">{{ card.cta }} →</router-link>
        </article>
      </div>
    </div>
  </section>

  <section class="marketing-section">
    <div class="container marketing-shell">
      <div class="marketing-card">
        <h2>As a companion</h2>
        <ul>
          <li>Provides reusable artifacts instead of just static prose</li>
          <li>Supports workshops, team reviews, and leadership briefings</li>
          <li>Turns each part of the book into an actionable exercise</li>
        </ul>
      </div>
      <div class="marketing-card">
        <h2>As a marketing site</h2>
        <ul>
          <li>Shows the book is practical, not abstract</li>
          <li>Demonstrates value before purchase through real tools and examples</li>
          <li>Lets visitors understand the book’s thesis, audience, and structure quickly</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { companionCards, companionMap } from '../data/siteContent'
</script>

<style scoped>
.page-hero {
  padding: 160px 0 48px;
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
}

.page-hero h1 {
  margin-bottom: var(--space-md);
}

.companion-intro {
  padding-top: 0;
}

.intro-shell,
.marketing-shell {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.intro-card,
.map-card,
.marketing-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
}

.intro-card h2,
.marketing-card h2,
.map-card h3 {
  margin-bottom: var(--space-md);
}

.intro-card ol {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  padding-left: 1.2rem;
}

.intro-card li {
  list-style: decimal;
  color: var(--color-text-muted);
}

.intro-card.accent {
  border-color: var(--color-primary);
}

.map-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.marketing-section {
  background: var(--color-bg-elevated);
  border-top: 1px solid var(--color-border);
}

.marketing-card ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  padding-left: 1rem;
}

.marketing-card li {
  list-style: disc;
  color: var(--color-text-muted);
}

@media (max-width: 968px) {
  .intro-shell,
  .map-grid,
  .marketing-shell {
    grid-template-columns: 1fr;
  }
}
</style>
