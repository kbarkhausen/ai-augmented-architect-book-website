<template>
  <!-- Hero -->
  <header class="journey-hero">
    <div class="container">
      <h1>Your Transformation Journey</h1>
      <p>Progress through three stages of mastery — from using AI tools to architecting autonomous systems.</p>
    </div>
  </header>

  <!-- Journey Stages -->
  <section class="journey-detail">
    <div class="container">
      <div class="journey-stages">
        <div class="stage">
          <div class="stage-icon">🚗</div>
          <div class="stage-content">
            <h3>Stage 1: Driver</h3>
            <p class="stage-parts">Parts I–II</p>
            <p>
              Learn to drive the tools. Claude Code becomes your terminal companion.
              Cursor becomes your IDE partner. You're still doing the thinking,
              but the agents handle the typing.
            </p>
            <div class="stage-skills">
              <span>Installation</span>
              <span>CLAUDE.md</span>
              <span>Permissions</span>
              <span>Basic Commands</span>
            </div>
          </div>
        </div>

        <div class="stage-connector"></div>

        <div class="stage">
          <div class="stage-icon">🎶</div>
          <div class="stage-content">
            <h3>Stage 2: Conductor</h3>
            <p class="stage-parts">Parts III–IV</p>
            <p>
              Learn to orchestrate. Multiple tools, multiple agents, working in harmony.
              You design rules that shape agent behavior. You build memory systems
              that preserve context.
            </p>
            <div class="stage-skills">
              <span>Cursor Modes</span>
              <span>MCP</span>
              <span>Memory Bank</span>
              <span>Context Management</span>
            </div>
          </div>
        </div>

        <div class="stage-connector"></div>

        <div class="stage">
          <div class="stage-icon">🏗️</div>
          <div class="stage-content">
            <h3>Stage 3: Architect</h3>
            <p class="stage-parts">Parts V–VI</p>
            <p>
              Design systems. Autonomous pipelines. Ticket-to-merge automation.
              Enterprise team patterns. You're not just using AI — you're designing
              how AI integrates with your organization.
            </p>
            <div class="stage-skills">
              <span>CI/CD Integration</span>
              <span>Multi-Agent</span>
              <span>Enterprise Patterns</span>
              <span>Autonomous Pipelines</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- What You'll Learn at Each Stage -->
  <section class="breakdown-section">
    <div class="container">
      <div class="section-header">
        <h2>What You'll Learn at Each Stage</h2>
      </div>
      <div class="breakdown-grid">
        <div class="breakdown-card">
          <h3>🚗 Driver Outcomes</h3>
          <ul>
            <li>Set up Claude Code and Cursor from scratch</li>
            <li>Write effective CLAUDE.md project configs</li>
            <li>Use permission modes for safe autonomous coding</li>
            <li>Run subagents and parallel execution</li>
            <li>Create custom hooks and slash commands</li>
          </ul>
        </div>
        <div class="breakdown-card">
          <h3>🎶 Conductor Outcomes</h3>
          <ul>
            <li>Master all Cursor modes (Tab, Chat, Composer, Agent)</li>
            <li>Connect AI tools via MCP to any system</li>
            <li>Build persistent memory systems across sessions</li>
            <li>Optimize context windows for maximum efficiency</li>
            <li>Choose the right model for each task</li>
          </ul>
        </div>
        <div class="breakdown-card">
          <h3>🏗️ Architect Outcomes</h3>
          <ul>
            <li>Build ticket-to-merge automation pipelines</li>
            <li>Integrate AI agents into CI/CD workflows</li>
            <li>Design multi-agent orchestration systems</li>
            <li>Implement enterprise governance patterns</li>
            <li>Scale AI-augmented development across teams</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="journey-cta">
    <div class="container">
      <h2>Ready to Begin?</h2>
      <p>Start your transformation from developer to AI-augmented architect today.</p>
      <router-link to="/buy" class="btn">Get the Book</router-link>
    </div>
  </section>
</template>

<style scoped>
.journey-hero {
    padding: 160px 0 40px;
    background: linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
}

.journey-hero h1 {
    margin-bottom: var(--space-md);
}

.journey-detail {
    padding: var(--space-3xl) 0;
}

.journey-stages {
    max-width: 800px;
    margin: 0 auto;
}

.stage {
    display: flex;
    gap: var(--space-xl);
    align-items: flex-start;
}

.stage-icon {
    font-size: 3rem;
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
}

.stage-content {
    flex: 1;
}

.stage-content h3 {
    font-size: 1.5rem;
    margin-bottom: var(--space-xs);
}

.stage-parts {
    color: var(--color-primary-light);
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: var(--space-md);
}

.stage-content > p:not(.stage-parts) {
    color: var(--color-text-secondary);
    line-height: 1.8;
    margin-bottom: var(--space-lg);
}

.stage-skills {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
}

.stage-skills span {
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    padding: var(--space-xs) var(--space-md);
    font-size: 0.85rem;
    color: var(--color-text-secondary);
}

.stage-connector {
    width: 2px;
    height: 60px;
    background: linear-gradient(180deg, var(--color-primary), var(--color-secondary));
    margin: var(--space-lg) 0 var(--space-lg) 39px;
}

/* Detailed breakdown */
.breakdown-section {
    padding: var(--space-3xl) 0;
    background: var(--color-bg-secondary);
}

.breakdown-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-xl);
    margin-top: var(--space-xl);
}

.breakdown-card {
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-xl);
}

.breakdown-card h3 {
    font-size: 1.1rem;
    margin-bottom: var(--space-md);
    color: var(--color-primary-light);
}

.breakdown-card ul {
    list-style: none;
    padding: 0;
}

.breakdown-card li {
    padding: var(--space-xs) 0;
    color: var(--color-text-secondary);
    line-height: 1.6;
}

.breakdown-card li::before {
    content: "\2713 ";
    color: var(--color-primary-light);
}

/* CTA */
.journey-cta {
    padding: var(--space-3xl) 0;
    text-align: center;
}

.journey-cta p {
    color: var(--color-text-muted);
    margin-bottom: var(--space-lg);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.7;
}

.journey-cta .btn {
    display: inline-block;
    padding: var(--space-md) var(--space-xl);
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    color: white;
    text-decoration: none;
    border-radius: var(--radius-md);
    font-weight: 600;
    transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.journey-cta .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}

@media (max-width: 768px) {
    .stage {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .stage-connector {
        margin: var(--space-lg) auto;
    }

    .stage-skills {
        justify-content: center;
    }

    .breakdown-grid {
        grid-template-columns: 1fr;
    }
}
</style>
