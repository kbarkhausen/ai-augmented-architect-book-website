<template>
  <header class="errata-hero">
    <div class="container">
      <h1>Errata</h1>
      <p>Corrections and clarifications for The AI-Augmented Architect.</p>
    </div>
  </header>

  <main class="errata-content">
    <div class="errata-empty">
      <div class="errata-empty-icon">✨</div>
      <h2>No posted errata yet</h2>
      <p>
        This page is ready to track corrections, clarifications, and edition-specific notes as the book moves through release.
        For now, there are no published errata entries.
      </p>
    </div>

    <div class="report-section">
      <h3>Found something that should be corrected?</h3>
      <p>
        Send typos, technical corrections, or requests for clarification and they can be added here for future readers.
      </p>
      <a href="mailto:klaus@barkhausen.us?subject=The%20AI-Augmented%20Architect%20Errata" class="btn btn-primary">
        Report an Issue
      </a>
    </div>
  </main>
</template>

<script setup>
</script>

<style scoped>
.errata-hero {
  padding: 160px 0 80px;
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
}

.errata-hero h1 {
  margin-bottom: var(--space-md);
}

.errata-content {
  max-width: 800px;
  margin: 0 auto;
  padding: var(--space-3xl) var(--space-lg);
}

.errata-empty {
  text-align: center;
  padding: var(--space-4xl);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
}

.errata-empty-icon {
  font-size: 4rem;
  margin-bottom: var(--space-lg);
}

.errata-empty h2 {
  margin-bottom: var(--space-md);
}

.report-section {
  margin-top: var(--space-3xl);
  padding: var(--space-xl);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  text-align: center;
}

.report-section h3 {
  margin-bottom: var(--space-md);
}

.report-section p {
  margin-bottom: var(--space-lg);
}
</style>
