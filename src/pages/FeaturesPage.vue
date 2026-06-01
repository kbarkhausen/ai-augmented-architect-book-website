<template>
  <header class="page-hero">
    <div class="container">
      <h1>The Book</h1>
      <p>A complete map of the book’s argument, structure, and promise.</p>
    </div>
  </header>

  <section class="book-summary">
    <div class="container">
      <div class="book-cover-wrap">
        <div class="book-render-stage">
          <img src="/images/book-page-render.jpg" alt="The AI-Augmented Architect book render" class="book-page-cover">
        </div>
      </div>
      <div class="summary-shell">
        <div class="summary-card">
          <h2>What readers get</h2>
          <p>
            The AI-Augmented Architect is a book about how architecture changes when production gets cheap,
            but judgment, verification, and accountability remain human.
          </p>
          <ul class="summary-list">
            <li>A durable framework for architecting with AI agents without becoming tool-dependent</li>
            <li>A full enterprise modernization narrative built around Meridian Logistics Group</li>
            <li>Guidance for delegation, trust, legacy modernization, governance, and economics</li>
            <li>A clear view of what the book covers, who it is for, and why the topic matters now</li>
          </ul>
        </div>
        <div class="summary-card accent">
          <h2>Core promise</h2>
          <p>
            The value is not in memorizing this year’s tools. It is in learning how to decide what should be delegated,
            how to make systems safe to change, and how to modernize real enterprises without reckless rewrites.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="toc-section">
    <div class="container">
      <div class="section-header">
        <h2>Table of contents</h2>
        <p>Six parts, sixteen chapters, one continuous argument.</p>
      </div>
      <div class="toc-grid">
        <article v-for="part in bookParts" :key="part.title" class="toc-part-card">
          <div class="part-head">
            <span class="part-icon">{{ part.icon }}</span>
            <h3>{{ part.title }}</h3>
          </div>
          <p class="part-summary">{{ part.summary }}</p>
          <ol>
            <li v-for="chapter in part.chapters" :key="chapter">{{ chapter }}</li>
          </ol>
        </article>
      </div>
    </div>
  </section>

  <section class="reader-fit">
    <div class="container">
      <div class="section-header">
        <h2>Best fit for readers who need durable thinking</h2>
        <p>The book is aimed at the people who carry architecture and delivery risk, not just the people evaluating tools.</p>
      </div>
      <div class="fit-grid">
        <div class="fit-card yes">
          <h3>Strong fit</h3>
          <ul>
            <li>Enterprise and solution architects</li>
            <li>CTOs, VPs, and directors guiding AI adoption</li>
            <li>Program leaders driving modernization</li>
            <li>Senior engineers moving into architecture and system design</li>
          </ul>
        </div>
        <div class="fit-card no">
          <h3>Less likely to fit</h3>
          <ul>
            <li>Readers looking for a tool manual or prompt catalog</li>
            <li>People who only want short-term feature comparisons</li>
            <li>Beginners who need a first introduction to software development</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="chapter-cta">
    <div class="container chapter-cta-shell">
      <div>
        <h2>See the full scope of the book before release</h2>
        <p>Use the site to understand the argument, the audience, and the structure before the June 2026 launch.</p>
      </div>
      <router-link to="/buy" class="btn btn-primary">Get release details</router-link>
    </div>
  </section>
</template>

<script setup>
import { bookParts } from '../data/siteContent'
</script>

<style scoped>
.page-hero {
  padding: 160px 0 48px;
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
}

.page-hero h1 {
  margin-bottom: var(--space-md);
}

.book-summary {
  padding-top: 0;
}

.book-cover-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: var(--space-2xl);
}

.book-render-stage {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-md);
}

.book-render-stage::before {
  content: '';
  position: absolute;
  inset: 18% 18% 14% 18%;
  background: radial-gradient(circle, rgba(255, 214, 153, 0.18) 0%, rgba(99, 102, 241, 0.12) 34%, transparent 72%);
  filter: blur(38px);
  pointer-events: none;
}

.book-page-cover {
  position: relative;
  width: min(760px, 100%);
  height: auto;
  border-radius: var(--radius-lg);
  filter: drop-shadow(0 26px 54px rgba(0, 0, 0, 0.34));
}

.summary-shell,
.fit-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.summary-card,
.fit-card,
.toc-part-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
}

.summary-card h2,
.fit-card h3,
.toc-part-card h3 {
  margin-bottom: var(--space-md);
}

.summary-card.accent {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-glow);
}

.summary-list,
.fit-card ul,
.toc-part-card ol {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  padding-left: 1.1rem;
}

.summary-list li,
.fit-card li,
.toc-part-card li {
  list-style: disc;
  color: var(--color-text-muted);
}

.toc-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.part-head {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.part-icon {
  font-size: 1.5rem;
}

.part-summary {
  margin-bottom: var(--space-lg);
}

.fit-card.yes {
  border-color: rgba(16, 185, 129, 0.45);
}

.fit-card.no {
  border-color: rgba(245, 158, 11, 0.35);
}

.chapter-cta {
  background: var(--color-bg-elevated);
  border-top: 1px solid var(--color-border);
}

.chapter-cta-shell {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-xl);
}

.chapter-cta-shell h2 {
  margin-bottom: var(--space-sm);
}

@media (max-width: 968px) {
  .summary-shell,
  .fit-grid,
  .toc-grid {
    grid-template-columns: 1fr;
  }

  .chapter-cta-shell {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
