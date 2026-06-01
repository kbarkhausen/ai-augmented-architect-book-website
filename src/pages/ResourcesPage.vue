<template>
  <header class="page-hero">
    <div class="container">
      <h1>Labs</h1>
      <p>Facilitated exercises that let teams apply the book to their own systems, portfolio, and operating model.</p>
    </div>
  </header>

  <section class="labs-section">
    <div class="container lab-grid">
      <article v-for="lab in labs" :key="lab.title" class="lab-card">
        <div class="lab-top">
          <div>
            <h2>{{ lab.title }}</h2>
            <p class="lab-meta">{{ lab.duration }} · {{ lab.forWho }}</p>
          </div>
        </div>
        <p class="lab-outcome"><strong>Outcome:</strong> {{ lab.outcome }}</p>
        <ol>
          <li v-for="step in lab.steps" :key="step">{{ step }}</li>
        </ol>
      </article>
    </div>
  </section>

  <section class="resources-extra">
    <div class="container extra-shell">
      <article class="extra-card">
        <h2>How to run these labs well</h2>
        <ul>
          <li>Use real systems and current initiatives, not fictional workshop examples</li>
          <li>Put architects, delivery leaders, and operators in the same room</li>
          <li>Capture decisions and unresolved questions before the session ends</li>
          <li>Turn the outputs into portfolio sequencing, policy, or architecture backlog work</li>
        </ul>
      </article>
      <article class="extra-card">
        <h2>Other companion resources</h2>
        <ul>
          <li><router-link to="/examples">Examples</router-link> show what good outputs look like</li>
          <li><router-link to="/worksheets">Worksheets</router-link> give teams reusable forms and canvases</li>
          <li><router-link to="/errata">Errata</router-link> will track corrections and clarifications by edition</li>
          <li><router-link to="/buy">Get the Book</router-link> explains the launch and positioning of the book itself</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup>
import { labs } from '../data/siteContent'
</script>

<style scoped>
.page-hero {
  padding: 160px 0 48px;
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
}

.page-hero h1 {
  margin-bottom: var(--space-md);
}

.lab-grid,
.extra-shell {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.lab-card,
.extra-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
}

.lab-card h2,
.extra-card h2 {
  font-size: 1.35rem;
  margin-bottom: var(--space-sm);
}

.lab-meta {
  color: var(--color-primary-light);
  font-size: 0.92rem;
}

.lab-outcome {
  margin: var(--space-lg) 0;
}

.lab-card ol,
.extra-card ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  padding-left: 1.2rem;
}

.lab-card li {
  list-style: decimal;
  color: var(--color-text-muted);
}

.extra-card li {
  list-style: disc;
  color: var(--color-text-muted);
}

.resources-extra {
  background: var(--color-bg-elevated);
  border-top: 1px solid var(--color-border);
}

@media (max-width: 968px) {
  .lab-grid,
  .extra-shell {
    grid-template-columns: 1fr;
  }
}
</style>
