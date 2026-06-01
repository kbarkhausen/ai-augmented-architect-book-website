<template>
  <header class="page-hero">
    <div class="container">
      <h1>Examples</h1>
      <p>Practical reference artifacts aligned to the book’s core decisions.</p>
    </div>
  </header>

  <section class="examples-section">
    <div class="container examples-grid">
      <article v-for="artifact in exampleArtifacts" :key="artifact.title" class="example-card">
        <div class="example-meta">{{ artifact.chapters }}</div>
        <h2>{{ artifact.title }}</h2>
        <p>{{ artifact.description }}</p>
        <ul>
          <li v-for="bullet in artifact.bullets" :key="bullet">{{ bullet }}</li>
        </ul>
      </article>
    </div>
  </section>

  <section class="examples-note">
    <div class="container note-card">
      <h2>Why examples instead of code dumps?</h2>
      <p>
        This book is about architecture judgment, modernization sequencing, verification, and governance.
        So the companion examples prioritize memos, scorecards, contracts, operating views, and portfolio artifacts,
        the things teams actually need when deciding how to use AI in real enterprises.
      </p>
    </div>
  </section>
</template>

<script setup>
import { exampleArtifacts } from '../data/siteContent'
</script>

<style scoped>
.page-hero {
  padding: 160px 0 48px;
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
}

.page-hero h1 {
  margin-bottom: var(--space-md);
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.example-card,
.note-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
}

.example-meta {
  font-size: 0.875rem;
  color: var(--color-primary-light);
  margin-bottom: var(--space-md);
}

.example-card h2,
.note-card h2 {
  font-size: 1.35rem;
  margin-bottom: var(--space-md);
}

.example-card p {
  margin-bottom: var(--space-lg);
}

.example-card ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  padding-left: 1rem;
}

.example-card li {
  list-style: disc;
  color: var(--color-text-muted);
}

.examples-note {
  background: var(--color-bg-elevated);
  border-top: 1px solid var(--color-border);
}

.note-card {
  max-width: 860px;
  margin: 0 auto;
}

@media (max-width: 968px) {
  .examples-grid {
    grid-template-columns: 1fr;
  }
}
</style>
