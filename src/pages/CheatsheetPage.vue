<template>
  <header class="page-hero">
    <div class="container">
      <h1>Worksheets & Forms</h1>
      <p>Copyable templates that turn the book into practical planning and review tools.</p>
    </div>
  </header>

  <section class="worksheet-section">
    <div class="container worksheet-grid">
      <article v-for="worksheet in worksheets" :key="worksheet.title" class="worksheet-card">
        <div class="worksheet-head">
          <div>
            <h2>{{ worksheet.title }}</h2>
            <p>{{ worksheet.intro }}</p>
          </div>
          <button class="copy-btn" @click="copyTemplate($event, worksheet.template)">Copy</button>
        </div>
        <pre><code>{{ worksheet.template }}</code></pre>
      </article>
    </div>
  </section>
</template>

<script setup>
import { worksheets } from '../data/siteContent'

function copyTemplate(event, text) {
  const button = event.currentTarget
  navigator.clipboard.writeText(text).then(() => {
    const original = button.textContent
    button.textContent = 'Copied!'
    setTimeout(() => {
      button.textContent = original
    }, 1800)
  })
}
</script>

<style scoped>
.page-hero {
  padding: 160px 0 48px;
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
}

.page-hero h1 {
  margin-bottom: var(--space-md);
}

.worksheet-grid {
  display: grid;
  gap: var(--space-xl);
}

.worksheet-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
}

.worksheet-head {
  display: flex;
  justify-content: space-between;
  gap: var(--space-lg);
  align-items: start;
  margin-bottom: var(--space-lg);
}

.worksheet-head h2 {
  font-size: 1.3rem;
  margin-bottom: var(--space-sm);
}

.copy-btn {
  padding: var(--space-sm) var(--space-md);
  background: var(--color-bg-hover);
  border: 1px solid var(--color-border-light);
  color: var(--color-text);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.copy-btn:hover {
  border-color: var(--color-primary);
  background: rgba(99, 102, 241, 0.12);
}

pre {
  margin: 0;
  white-space: pre-wrap;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  overflow-x: auto;
}

code {
  font-family: var(--font-mono);
  font-size: 0.93rem;
  color: var(--color-text-muted);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .worksheet-head {
    flex-direction: column;
  }
}
</style>
