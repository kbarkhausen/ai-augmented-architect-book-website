<template>
  <!-- Hero -->
  <header class="author-hero">
    <div class="container">
      <h1>About the Author</h1>
      <p>Meet the person behind The AI Augmented Architect.</p>
    </div>
  </header>

  <!-- Author Detail -->
  <section class="author-detail">
    <div class="container">
      <div class="author-content">
        <div class="author-image">
          <img src="/images/author-profile-photo-2026.png" alt="Klaus Barkhausen" class="author-photo">
        </div>
        <div class="author-bio">
          <h2>Klaus Barkhausen</h2>
          <p class="author-title">AI Business Transformation Architect</p>
          <p>
            With over <strong>25 years of software development experience</strong>,
            Klaus has been at the forefront of enterprise AI adoption. He specializes
            in document intelligence systems and agentic development workflows,
            helping organizations transform how they build software.
          </p>
          <p>
            Klaus has witnessed every major shift in software development — from
            waterfall to agile, monoliths to microservices, on-prem to cloud.
            He believes AI-augmented development is the most significant
            transformation yet.
          </p>
          <p>
            Klaus works with
            enterprise teams to design and implement AI-powered development workflows.
            His hands-on experience building production systems with Claude Code,
            Cursor, and multi-agent orchestration is what makes this book uniquely
            practical — every pattern has been battle-tested in real projects.
          </p>
          <p>
            Klaus is also the author of
            <a href="https://www.totalfitness.ai" target="_blank" rel="noopener"><strong>Total Fitness with AI</strong></a>,
            a guide to using ChatGPT and AI to develop personalized health and fitness
            plans tailored to your goals — a reflection of his dedication to continuous
            growth, commitment, and discipline in every area of life.
          </p>
          <div class="author-links">
            <a href="https://klausbarkhausen.com" target="_blank" rel="noopener">
              <span>🌐</span> klausbarkhausen.com
            </a>
            <a href="mailto:klaus@barkhausen.us">
              <span>✉️</span> klaus@barkhausen.us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Expertise -->
  <section class="expertise-section">
    <div class="container">
      <div class="section-header">
        <h2>Areas of Expertise</h2>
      </div>
      <div class="expertise-grid">
        <div class="expertise-card">
          <div class="card-icon">🤖</div>
          <h3>Agentic Development</h3>
          <p>Designing autonomous AI workflows that go from ticket to merge with minimal human intervention.</p>
        </div>
        <div class="expertise-card">
          <div class="card-icon">📄</div>
          <h3>Document Intelligence</h3>
          <p>Building systems that extract, understand, and act on information from complex documents at scale.</p>
        </div>
        <div class="expertise-card">
          <div class="card-icon">🏢</div>
          <h3>Enterprise AI Strategy</h3>
          <p>Helping organizations adopt AI-augmented development with governance, security, and team-wide patterns.</p>
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

.author-detail .author-bio h3 {
    font-size: 1.25rem;
    color: var(--color-primary-light);
    margin-bottom: var(--space-md);
}

.author-detail .author-title {
    font-size: 1.1rem;
    color: var(--color-text-muted);
    margin-bottom: var(--space-lg);
}

.author-detail .author-bio p {
    margin-bottom: var(--space-md);
    line-height: 1.8;
    color: var(--color-text-secondary);
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
    background: var(--color-bg-secondary);
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
