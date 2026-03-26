<template>
  <!-- Hero -->
  <header class="errata-hero">
    <div class="container">
      <h1>Errata</h1>
      <p>Corrections and clarifications for The AI Augmented Architect.</p>
    </div>
  </header>

  <!-- Content -->
  <main class="errata-content">
    <div class="errata-empty">
      <div class="errata-empty-icon">✨</div>
      <h2>No Known Errors</h2>
      <p>
        This book has been carefully reviewed for accuracy.
        No errata have been reported yet for the current edition (v2.2, March 2026).
      </p>
    </div>

    <!-- Example of how errata will be displayed when found:
    <table class="errata-table">
        <thead>
            <tr>
                <th>Location</th>
                <th>Type</th>
                <th>Description</th>
                <th>Correction</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="location">Chapter 3, p. 42</td>
                <td><span class="type typo">Typo</span></td>
                <td>Command shows "npm install" instead of native installer</td>
                <td>Use <code>curl -fsSL https://code.claude.com/install.sh | sh</code></td>
            </tr>
        </tbody>
    </table>
    -->

    <div class="report-section">
      <h3>Found an Error?</h3>
      <p>
        Help us improve the book by reporting any errors, typos, or technical inaccuracies.
      </p>
      <a href="mailto:feedback@augmented-architect.ai?subject=Errata Report" class="btn btn-primary">
        Report an Error
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

.errata-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: var(--space-2xl);
}

.errata-table th,
.errata-table td {
    padding: var(--space-md);
    text-align: left;
    border-bottom: 1px solid var(--color-border);
}

.errata-table th {
    background: var(--color-bg-card);
    font-weight: 600;
    color: var(--color-text);
}

.errata-table td {
    color: var(--color-text-muted);
}

.errata-table .location {
    font-family: var(--font-mono);
    font-size: 0.875rem;
    color: var(--color-primary-light);
}

.errata-table .type {
    display: inline-block;
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    font-weight: 600;
}

.errata-table .type.typo {
    background: rgba(234, 179, 8, 0.2);
    color: #fbbf24;
}

.errata-table .type.technical {
    background: rgba(239, 68, 68, 0.2);
    color: #f87171;
}

.errata-table .type.clarification {
    background: rgba(59, 130, 246, 0.2);
    color: #60a5fa;
}
</style>
