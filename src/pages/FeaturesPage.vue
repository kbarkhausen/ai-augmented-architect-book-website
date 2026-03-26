<template>
  <!-- Hero -->
  <header class="features-hero">
    <div class="container">
      <h1>What's Inside</h1>
      <p>Everything you need to master AI-augmented development — from first principles to enterprise patterns.</p>
    </div>
  </header>

  <!-- Features Grid -->
  <section class="features-detail">
    <div class="container">
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🚀</div>
          <h3>Claude Code Mastery</h3>
          <p>
            Deep dive into CLAUDE.md configuration, subagents, Agent Teams,
            hooks, custom commands, and the new /loop scheduled tasks.
          </p>
          <ul class="feature-list">
            <li>Permission modes &amp; security</li>
            <li>Parallel execution patterns</li>
            <li>AutoMemory configuration</li>
          </ul>
        </div>

        <div class="feature-card">
          <div class="feature-icon">✨</div>
          <h3>Cursor Expertise</h3>
          <p>
            Master all Cursor modes—Tab, Chat, Composer, Agent—plus the new
            Cloud Agents and Automations for event-driven development.
          </p>
          <ul class="feature-list">
            <li>Rules files (.cursorrules, .mdc)</li>
            <li>Background &amp; Cloud Agents</li>
            <li>Notepads &amp; Memories</li>
          </ul>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🔗</div>
          <h3>MCP Integration</h3>
          <p>
            The Model Context Protocol is the future of AI tooling.
            Learn to connect your agents to any system.
          </p>
          <ul class="feature-list">
            <li>Server configuration</li>
            <li>GitHub, Playwright, databases</li>
            <li>Custom MCP servers</li>
          </ul>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🤖</div>
          <h3>Autonomous Workflows</h3>
          <p>
            Build the holy grail: ticket-to-merge automation.
            Let AI implement while you architect.
          </p>
          <ul class="feature-list">
            <li>GitHub Actions integration</li>
            <li>Ralph loops (PRD-driven)</li>
            <li>Quality gates &amp; guardrails</li>
          </ul>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🧠</div>
          <h3>Memory Architecture</h3>
          <p>
            Design multi-layer memory systems that give your agents
            perfect context across sessions.
          </p>
          <ul class="feature-list">
            <li>Memory Bank pattern</li>
            <li>AGENTS.md standards</li>
            <li>Context window optimization</li>
          </ul>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🏢</div>
          <h3>Enterprise Patterns</h3>
          <p>
            Scale AI development across teams with proven patterns
            for security, compliance, and governance.
          </p>
          <ul class="feature-list">
            <li>Team workflows</li>
            <li>Multi-agent orchestration</li>
            <li>Azure DevOps integration</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Social Proof -->
  <section class="proof-section">
    <div class="container">
      <div class="section-header">
        <h2>Written for Today's Market Demands</h2>
      </div>

      <div class="proof-grid">
        <div class="proof-card">
          <div class="proof-stat">87%</div>
          <p>of engineering leaders say AI coding skills are now <strong>required</strong> for senior roles</p>
        </div>
        <div class="proof-card">
          <div class="proof-stat">10x</div>
          <p>productivity gains reported by developers who master agent orchestration</p>
        </div>
        <div class="proof-card">
          <div class="proof-stat">2026</div>
          <p>The year agentic coding went from "nice to have" to <strong>essential skill</strong></p>
        </div>
      </div>

      <div class="proof-message">
        <p>
          <strong>The question isn't whether to learn AI-augmented development.</strong><br>
          It's whether you'll be ahead of the curve or scrambling to catch up.
        </p>
      </div>
    </div>
  </section>

  <!-- Audience -->
  <section class="audience-section">
    <div class="container">
      <div class="section-header">
        <h2>Is This Book For You?</h2>
      </div>

      <div class="audience-grid">
        <div class="audience-card yes">
          <div class="audience-icon">✅</div>
          <h3>Perfect For</h3>
          <ul>
            <li><strong>Senior Developers</strong> looking to multiply their impact</li>
            <li><strong>Tech Leads</strong> designing AI-augmented team workflows</li>
            <li><strong>Solution Architects</strong> building enterprise agentic systems</li>
            <li><strong>CTOs</strong> planning AI adoption strategies</li>
            <li><strong>Ambitious Juniors</strong> ready to accelerate their careers</li>
          </ul>
        </div>

        <div class="audience-card no">
          <div class="audience-icon">⏳</div>
          <h3>Wait If</h3>
          <ul>
            <li>You're brand new to programming (learn basics first)</li>
            <li>You're not planning to write code in the next year</li>
            <li>You believe AI coding tools are "just a fad"</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Table of Contents -->
  <section class="toc-section">
    <div class="container">
      <div class="section-header">
        <h2>Complete Table of Contents</h2>
        <p>34 comprehensive chapters across 7 parts</p>
      </div>

      <div class="toc-grid">
        <div class="toc-part">
          <h3>🚗 Part I: Foundations</h3>
          <ol>
            <li>The Agentic Coding Revolution</li>
            <li>Claude Code vs Cursor: Strategic Comparison</li>
            <li>Installation and Environment Setup</li>
          </ol>
        </div>

        <div class="toc-part">
          <h3>🚗 Part II: Claude Code Mastery</h3>
          <ol start="4">
            <li>Claude Code Architecture Deep Dive</li>
            <li>CLAUDE.md: Your Project's Brain</li>
            <li>Permission Modes and Security</li>
            <li>Subagents and Parallel Execution</li>
            <li>Hooks: Automating Your Workflow</li>
            <li>Custom Slash Commands</li>
            <li>Reusable Capability Bundles</li>
          </ol>
        </div>

        <div class="toc-part">
          <h3>🎶 Part III: Cursor Mastery</h3>
          <ol start="11">
            <li>Cursor Architecture and Modes</li>
            <li>Rules Files (.cursorrules and .mdc)</li>
            <li>Agent Mode and Composer</li>
            <li>Background Agents and Cloud Execution</li>
            <li>Notepads, Memories, and Context</li>
          </ol>
        </div>

        <div class="toc-part">
          <h3>🎶 Part IV: Shared Infrastructure</h3>
          <ol start="16">
            <li>MCP: Model Context Protocol</li>
            <li>AGENTS.md: Cross-Tool Instructions</li>
            <li>Memory Bank Pattern</li>
            <li>Context Window Management</li>
            <li>Model Selection Strategy</li>
          </ol>
        </div>

        <div class="toc-part">
          <h3>🏗️ Part V: Autonomous Workflows</h3>
          <ol start="21">
            <li>GitHub Integration</li>
            <li>Azure DevOps Integration</li>
            <li>Automated Testing and QA</li>
            <li>Git Workflow Automation</li>
            <li>The Ticket-to-Merge Pipeline</li>
          </ol>
        </div>

        <div class="toc-part">
          <h3>🏗️ Part VI: Expert Techniques</h3>
          <ol start="26">
            <li>Prompt Engineering for Agents</li>
            <li>Spec-Driven Development</li>
            <li>Debugging AI-Generated Code</li>
            <li>Multi-Agent Orchestration</li>
            <li>Enterprise Team Patterns</li>
          </ol>
        </div>

        <div class="toc-part">
          <h3>📚 Part VII: Reference</h3>
          <ol start="31">
            <li>Complete Configuration Reference</li>
            <li>Troubleshooting Guide</li>
            <li>Tool Comparison Matrix</li>
            <li>Resources and Community</li>
          </ol>
          <p class="toc-bonus">+ 3 Appendices: Pricing, Glossary, Advanced Techniques</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-hero {
    padding: 160px 0 40px;
    background: linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
}

.features-hero h1 {
    margin-bottom: var(--space-md);
}

.features-detail {
    padding: var(--space-3xl) 0;
}

.features-detail .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-xl);
}

.features-detail .feature-card {
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-xl);
    transition: transform var(--transition-fast), border-color var(--transition-fast);
}

.features-detail .feature-card:hover {
    transform: translateY(-4px);
    border-color: var(--color-primary);
}

.features-detail .feature-icon {
    font-size: 2.5rem;
    margin-bottom: var(--space-md);
}

.features-detail .feature-card h3 {
    font-size: 1.25rem;
    margin-bottom: var(--space-sm);
}

.features-detail .feature-card p {
    color: var(--color-text-muted);
    margin-bottom: var(--space-md);
    line-height: 1.7;
}

.features-detail .feature-list {
    list-style: none;
    padding: 0;
}

.features-detail .feature-list li {
    padding: var(--space-xs) 0;
    color: var(--color-text-secondary);
    font-size: 0.9rem;
}

.features-detail .feature-list li::before {
    content: "\2192 ";
    color: var(--color-primary-light);
}

/* Social Proof */
.proof-section {
    padding: var(--space-3xl) 0;
    background: var(--color-bg-secondary);
}

.proof-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-xl);
    margin-top: var(--space-xl);
}

.proof-card {
    text-align: center;
    padding: var(--space-xl);
}

.proof-stat {
    font-size: 3rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: var(--space-sm);
}

.proof-card p {
    color: var(--color-text-muted);
    line-height: 1.6;
}

.proof-message {
    text-align: center;
    margin-top: var(--space-xl);
    padding: var(--space-xl);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    background: var(--color-bg);
}

/* Audience */
.audience-section {
    padding: var(--space-3xl) 0;
}

.audience-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-xl);
    margin-top: var(--space-xl);
}

.audience-card {
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-xl);
}

.audience-card .audience-icon {
    font-size: 2rem;
    margin-bottom: var(--space-md);
}

.audience-card h3 {
    margin-bottom: var(--space-md);
}

.audience-card ul {
    list-style: none;
    padding: 0;
}

.audience-card li {
    padding: var(--space-xs) 0;
    color: var(--color-text-secondary);
    line-height: 1.6;
}

/* TOC */
.toc-section {
    padding: var(--space-3xl) 0;
    background: var(--color-bg-secondary);
}

.toc-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-xl);
    margin-top: var(--space-xl);
}

.toc-part {
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-xl);
}

.toc-part h3 {
    font-size: 1.1rem;
    margin-bottom: var(--space-md);
    color: var(--color-primary-light);
}

.toc-part ol {
    padding-left: var(--space-lg);
}

.toc-part li {
    padding: var(--space-xs) 0;
    color: var(--color-text-secondary);
}

.toc-bonus {
    margin-top: var(--space-md);
    color: var(--color-text-muted);
    font-style: italic;
    font-size: 0.9rem;
}

@media (max-width: 768px) {
    .features-detail .features-grid,
    .proof-grid {
        grid-template-columns: 1fr;
    }

    .audience-grid,
    .toc-grid {
        grid-template-columns: 1fr;
    }
}
</style>
