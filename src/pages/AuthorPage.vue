<template>
  <header class="author-hero">
    <div class="container">
      <h1>About the Author</h1>
      <p>Meet Klaus Barkhausen, the author of The AI-Augmented Architect.</p>
    </div>
  </header>

  <section class="author-detail">
    <div class="container">
      <div class="author-content">
        <div class="author-image">
          <img src="/images/author-profile-photo-2026.png" alt="Klaus Barkhausen" class="author-photo">
        </div>
        <div class="author-bio">
          <h2>Klaus Barkhausen</h2>
          <p class="author-title">Enterprise architect, technologist, and AI transformation advisor</p>
          <p>
            Klaus Barkhausen brings more than 25 years of software experience to the question many enterprises are now facing:
            how do you modernize software delivery when capable AI can produce more software than most organizations can safely understand?
          </p>
          <p>
            His background spans architecture, enterprise software, intelligent automation, and modernization in complex environments.
            That makes this book less about tool excitement and more about the practical work of boundaries, verification,
            operability, governance, and legacy change.
          </p>
          <p>
            The AI-Augmented Architect is written for the people who carry real delivery and architecture risk,
            and Klaus writes from that perspective: the architect, the technology leader, and the program leader who all have to make the same transformation succeed together.
          </p>
          <div class="author-links">
            <a href="https://klausbarkhausen.com" target="_blank" rel="noopener">
              <span>🌐</span> klausbarkhausen.com
            </a>
            <a href="mailto:klaus@barkhausen.us?subject=The%20AI-Augmented%20Architect">
              <span>✉️</span> klaus@barkhausen.us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="expertise-section">
    <div class="container">
      <div class="section-header">
        <h2>What Klaus writes about</h2>
      </div>
      <div class="expertise-grid">
        <div class="expertise-card">
          <div class="card-icon">🏗️</div>
          <h3>Architecture under AI pressure</h3>
          <p>How architecture changes when production gets cheaper, but system judgment and accountability stay human.</p>
        </div>
        <div class="expertise-card">
          <div class="card-icon">🏚️</div>
          <h3>Legacy modernization</h3>
          <p>How to approach the systems that matter most, are understood least, and are easiest to break.</p>
        </div>
        <div class="expertise-card">
          <div class="card-icon">📊</div>
          <h3>Governance and economics</h3>
          <p>How leaders turn AI from demos and pilots into an operating model with measurable value and real control.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.author-hero {
  padding: 160px 0 40px;
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
}

.author-hero h1 {
  margin-bottom: var(--space-md);
}

.author-detail {
  padding: var(--space-3xl) 0;
}

.author-detail .author-content {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--space-3xl);
  align-items: start;
}

.author-detail .author-image {
  position: sticky;
  top: 120px;
}

.author-detail .author-photo {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--color-primary);
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.2);
}

.author-detail .author-bio h2 {
  font-size: 2rem;
  margin-bottom: var(--space-xs);
}

.author-detail .author-title {
  font-size: 1.1rem;
  color: var(--color-text-muted);
  margin-bottom: var(--space-lg);
}

.author-detail .author-bio p {
  margin-bottom: var(--space-md);
  line-height: 1.8;
  color: var(--color-text-muted);
}

.author-detail .author-links {
  display: flex;
  gap: var(--space-lg);
  margin-top: var(--space-xl);
}

.author-detail .author-links a {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--color-primary-light);
  text-decoration: none;
  font-weight: 500;
  transition: color var(--transition-fast);
}

.author-detail .author-links a:hover {
  color: var(--color-primary);
}

.expertise-section {
  padding: var(--space-3xl) 0;
  background: var(--color-bg-elevated);
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
  margin-top: var(--space-xl);
}

.expertise-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
}

.expertise-card .card-icon {
  font-size: 2rem;
  margin-bottom: var(--space-md);
}

.expertise-card h3 {
  font-size: 1.1rem;
  margin-bottom: var(--space-sm);
}

.expertise-card p {
  color: var(--color-text-muted);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .author-detail .author-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .author-detail .author-image {
    position: static;
    display: flex;
    justify-content: center;
  }

  .author-detail .author-photo {
    width: 200px;
    height: 200px;
  }

  .author-detail .author-links {
    justify-content: center;
    flex-wrap: wrap;
  }

  .expertise-grid {
    grid-template-columns: 1fr;
  }
}
</style>
