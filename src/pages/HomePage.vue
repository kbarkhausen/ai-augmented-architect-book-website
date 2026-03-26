<template>
  <!-- Hero Section -->
  <header class="hero">
    <div class="hero-bg"></div>
    <div class="container hero-content">
      <div class="hero-text">
        <div class="hero-badge">📚 New Release • April 2026</div>
        <h1>The AI Augmented<br><span class="gradient-text">Architect</span></h1>
        <p class="hero-subtitle">From Developer to AI Agent Orchestrator with Claude Code &amp; Cursor</p>
        <p class="hero-description">
          The definitive guide to the most transformative shift in software development since version control.
          Learn to orchestrate AI agents, automate your workflow, and multiply your impact.
        </p>
        <div class="hero-cta">
          <router-link to="/buy" class="btn btn-primary btn-lg">
            <span>Get the Book</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </router-link>
          <router-link to="/features" class="btn btn-secondary btn-lg">See What's Inside</router-link>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">34</span>
            <span class="stat-label">Chapters</span>
          </div>
          <div class="stat">
            <span class="stat-number">9,000+</span>
            <span class="stat-label">Lines</span>
          </div>
          <div class="stat">
            <span class="stat-number">100+</span>
            <span class="stat-label">Examples</span>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <img src="/images/book-cover.png" alt="The AI Augmented Architect book cover" class="hero-book-cover">
      </div>
    </div>
    <div class="hero-scroll">
      <span>Scroll to explore</span>
      <div class="scroll-indicator"></div>
    </div>
  </header>

  <!-- Urgency Section -->
  <section class="urgency">
    <div class="container">
      <div class="urgency-content">
        <div class="urgency-icon">⚠️</div>
        <h2>The Development Landscape Has Changed Forever</h2>
        <p>
          Developers who master AI agents are <strong>shipping 10x faster</strong>.
          Those who don't are being left behind. This isn't hype—it's the new reality of software development.
        </p>
        <div class="urgency-quote">
          <blockquote>
            "Within 3 months, my team's throughput doubled and bugs dropped 40%.
            The transformation wasn't optional—it was survival."
          </blockquote>
          <cite>— From the book's preface</cite>
        </div>
      </div>
    </div>
  </section>

  <!-- Resources Section -->
  <section id="resources" class="resources">
    <div class="container">
      <div class="section-header">
        <h2>Free Resources</h2>
        <p>Companion materials to accelerate your learning</p>
      </div>

      <div class="resources-grid">
        <div class="resource-card">
          <div class="resource-icon">📝</div>
          <h3>333 Code Snippets</h3>
          <p>All code examples from the book — searchable, copyable, downloadable.</p>
          <router-link to="/snippets" class="resource-link">Browse Snippets →</router-link>
        </div>

        <div class="resource-card">
          <div class="resource-icon">🎬</div>
          <h3>Video Tutorials</h3>
          <p>Curated list of the best YouTube tutorials and walkthroughs.</p>
          <router-link to="/resources" class="resource-link">Watch Videos →</router-link>
        </div>

        <div class="resource-card">
          <div class="resource-icon">📰</div>
          <h3>Changelog</h3>
          <p>Stay updated with the latest changes to Claude Code, Cursor, and AI models.</p>
          <router-link to="/resources" class="resource-link">View Updates →</router-link>
        </div>

        <div class="resource-card">
          <div class="resource-icon">🐛</div>
          <h3>Errata</h3>
          <p>Corrections and clarifications for the book.</p>
          <router-link to="/errata" class="resource-link">View Errata →</router-link>
        </div>

        <div class="resource-card">
          <div class="resource-icon">📦</div>
          <h3>GitHub Repository</h3>
          <p>Download all code organized by chapter from our public repository.</p>
          <a href="https://github.com/kbarkhausen/augmented-architect-book" target="_blank" class="resource-link">View on GitHub →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Newsletter Section -->
  <section class="newsletter">
    <div class="container">
      <div class="newsletter-content">
        <h2>Stay Ahead of the Curve</h2>
        <p>Get updates on AI coding tools, new techniques, and book additions.</p>
        <form class="newsletter-form" @submit.prevent="handleSubscribe">
          <input type="email" v-model="email" placeholder="Enter your email" required>
          <button type="submit" class="btn btn-primary">{{ buttonText }}</button>
        </form>
        <p class="newsletter-note">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const buttonText = ref('Subscribe')

function handleSubscribe() {
  buttonText.value = 'Subscribed! ✓'
  email.value = ''
  setTimeout(() => {
    buttonText.value = 'Subscribe'
  }, 3000)
}
</script>
