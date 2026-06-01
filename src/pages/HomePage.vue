<template>
  <header class="hero">
    <div class="hero-bg"></div>
    <div class="container hero-content">
      <div class="hero-text">
        <div class="hero-badge">📘 June 2026 release • Companion site + launch platform</div>
        <h1>{{ siteMeta.heroTitle }}</h1>
        <p class="hero-subtitle">Architecture for the age of AI-augmented delivery</p>
        <p class="hero-description">{{ siteMeta.heroDescription }}</p>
        <div class="hero-cta">
          <router-link to="/buy" class="btn btn-primary btn-lg">Get the Book</router-link>
          <router-link to="/companion" class="btn btn-secondary btn-lg">Explore the Companion</router-link>
        </div>
        <div class="hero-stats">
          <div v-for="stat in siteMeta.stats" :key="stat.label" class="stat">
            <span class="stat-number">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <img src="/images/book-cover.png" alt="The AI-Augmented Architect book cover" class="hero-book-cover">
      </div>
    </div>
  </header>

  <section class="positioning">
    <div class="container">
      <div class="section-header">
        <h2>Why this book exists</h2>
        <p>The book argues that the durable work of architecture is not memorizing tools. It is making sound decisions about systems, teams, verification, and modernization while the tools keep changing.</p>
      </div>

      <div class="positioning-grid">
        <article class="positioning-card">
          <h3>It is built on judgment, not hype</h3>
          <p>The focus is what stays true when the tools move: delegation decisions, system legibility, verification, governance, and economic trade-offs.</p>
        </article>
        <article class="positioning-card">
          <h3>It uses a full enterprise case study</h3>
          <p>Meridian Logistics Group runs through the book so the ideas stay grounded in a real modernization story with real constraints, not abstract platitudes.</p>
        </article>
        <article class="positioning-card">
          <h3>It is written for the people who actually carry the risk</h3>
          <p>Architects, technology leaders, and program managers all need to understand the same transformation from different angles. The book is built to serve all three.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="resources">
    <div class="container">
      <div class="section-header">
        <h2>The companion toolkit</h2>
        <p>This site extends the book with artifacts you can use in your own organization.</p>
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

  <section class="audience-home">
    <div class="container">
      <div class="section-header">
        <h2>Who this is for</h2>
        <p>Three readers, one shared problem: how to modernize software delivery without losing control of the system.</p>
      </div>
      <div class="audience-grid-home">
        <article v-for="audience in audiences" :key="audience.title" class="audience-card-home">
          <h3>{{ audience.title }}</h3>
          <p>{{ audience.description }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="case-study">
    <div class="container case-study-shell">
      <div>
        <div class="hero-badge">📦 The running case study</div>
        <h2>Meridian Logistics Group</h2>
        <p>
          The site and the book both use Meridian, a mid-size freight and parcel company carrying the weight of acquisitions,
          legacy systems, batch integrations, and an executive mandate to “adopt AI.”
        </p>
        <p>
          That case study is how the book stays practical. Instead of random examples, the companion materials help you apply the same decisions to your own estate.
        </p>
      </div>
      <div class="case-study-points">
        <div class="case-point">
          <strong>Legacy pressure</strong>
          <span>Mainframe core, fearful monolith, brittle integrations.</span>
        </div>
        <div class="case-point">
          <strong>Business pressure</strong>
          <span>Leadership wants speed, lower cost, and visible AI progress.</span>
        </div>
        <div class="case-point">
          <strong>Architectural pressure</strong>
          <span>The team has to decide where delegation is safe and where it is dangerous.</span>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-strip">
    <div class="container cta-strip-inner">
      <div>
        <h2>Use the book as a workbook, not just a read</h2>
        <p>Start with the chapter map, then move straight into the companion pages for examples, worksheets, and labs.</p>
      </div>
      <div class="hero-cta">
        <router-link to="/book" class="btn btn-primary">See the chapter map</router-link>
        <router-link to="/worksheets" class="btn btn-secondary">Open the worksheets</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { audiences, companionCards, siteMeta } from '../data/siteContent'
</script>

<style scoped>
.positioning {
  background: linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg-elevated) 100%);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.positioning-grid,
.audience-grid-home {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.positioning-card,
.audience-card-home,
.case-point {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
}

.positioning-card h3,
.audience-card-home h3 {
  margin-bottom: var(--space-md);
}

.case-study {
  background: var(--color-bg);
}

.case-study-shell {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: var(--space-2xl);
  align-items: start;
}

.case-study-shell h2 {
  margin: var(--space-md) 0;
}

.case-study-points {
  display: grid;
  gap: var(--space-lg);
}

.case-point {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.case-point strong {
  color: var(--color-text);
}

.case-point span {
  color: var(--color-text-muted);
}

.cta-strip {
  background: var(--color-bg-elevated);
  border-top: 1px solid var(--color-border);
}

.cta-strip-inner {
  display: flex;
  gap: var(--space-xl);
  align-items: center;
  justify-content: space-between;
}

.cta-strip-inner h2 {
  margin-bottom: var(--space-sm);
}

@media (max-width: 968px) {
  .positioning-grid,
  .audience-grid-home,
  .case-study-shell {
    grid-template-columns: 1fr;
  }

  .cta-strip-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
