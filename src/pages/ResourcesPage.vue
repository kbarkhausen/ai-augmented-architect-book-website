<template>
    <!-- Hero -->
    <header class="resources-hero">
        <div class="container">
            <h1>Free Resources</h1>
            <p>Code samples, tutorials, and updates to help you master AI-augmented development.</p>
        </div>
    </header>

    <!-- All Snippets Banner -->
    <section class="code-section" style="padding-bottom: 0;">
        <div class="container">
            <div style="background: var(--color-bg-card); border: 1px solid var(--color-primary); border-radius: var(--radius-xl); padding: var(--space-xl); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-lg);">
                <div>
                    <h3 style="margin-bottom: var(--space-sm);">📝 Looking for all 333 code snippets?</h3>
                    <p style="font-size: 0.875rem;">Search, copy, and download every code example from the book.</p>
                </div>
                <div style="display: flex; gap: var(--space-md); flex-wrap: wrap;">
                    <router-link to="/snippets" class="btn btn-primary">Browse All Snippets</router-link>
                    <a href="https://github.com/kbarkhausen/augmented-architect-book" target="_blank" class="btn btn-secondary">GitHub Repo</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Code Samples -->
    <section class="code-section">
        <div class="container">
            <div class="section-header">
                <h2>📝 Quick Start Templates</h2>
                <p>Most popular configurations from the book</p>
            </div>

            <div class="code-grid">
                <div class="code-card">
                    <div class="code-card-header">
                        <h3>CLAUDE.md Template</h3>
                        <button class="copy-btn" @click="copyCode($event)">Copy</button>
                    </div>
                    <div class="code-content">
<pre><code># Project Name

## Overview
Brief description of what this project does.

## Tech Stack
- Language: TypeScript 5.x
- Runtime: Node.js 22
- Framework: Next.js 15
- Database: PostgreSQL with Prisma
- Testing: Vitest + Playwright

## Commands
- `pnpm dev` — Start development server
- `pnpm test` — Run unit tests
- `pnpm e2e` — Run E2E tests
- `pnpm lint` — Lint and format

## Conventions
- Use functional components with hooks
- Prefer named exports
- Tests go in __tests__ directories
- Use conventional commits

## Architecture
- /src/app — Next.js app router pages
- /src/components — React components
- /src/lib — Shared utilities
- /src/server — API routes and services

## Important Notes
- Never commit .env files
- All API routes require authentication
- Use server actions for mutations</code></pre>
                    </div>
                </div>

                <div class="code-card">
                    <div class="code-card-header">
                        <h3>AGENTS.md Template</h3>
                        <button class="copy-btn" @click="copyCode($event)">Copy</button>
                    </div>
                    <div class="code-content">
<pre><code># AI Agent Instructions

This file provides instructions for any AI coding assistant.

## Code Style
- TypeScript strict mode
- ESLint + Prettier formatting
- Meaningful variable names

## Testing
- Write tests for all new code
- Minimum 80% coverage
- Use describe/it/expect pattern

## Git
- Conventional commits (feat:, fix:, docs:, etc.)
- Small, focused PRs
- Reference issue numbers

## Security
- Never hardcode secrets
- Validate all inputs
- Use parameterized queries</code></pre>
                    </div>
                </div>

                <div class="code-card">
                    <div class="code-card-header">
                        <h3>.cursorrules Template</h3>
                        <button class="copy-btn" @click="copyCode($event)">Copy</button>
                    </div>
                    <div class="code-content">
<pre><code>You are an expert TypeScript developer.

## Code Generation
- Use TypeScript strict mode
- Prefer functional programming
- Use early returns
- Handle errors explicitly

## File Naming
- Components: PascalCase.tsx
- Utilities: camelCase.ts
- Tests: *.test.ts

## Imports
- Use absolute imports (@/...)
- Group: external, internal, relative
- No circular dependencies

## React
- Functional components only
- Custom hooks for logic
- Memoize expensive computations
- Use server components by default</code></pre>
                    </div>
                </div>

                <div class="code-card">
                    <div class="code-card-header">
                        <h3>Custom /implement Command</h3>
                        <button class="copy-btn" @click="copyCode($event)">Copy</button>
                    </div>
                    <div class="code-content">
<pre><code v-pre>---
name: implement
description: Implement a feature from an issue
arguments:
  - name: issue
    required: true
---

1. Fetch issue: `gh issue view {{issue}}`
2. Create branch: `git checkout -b feature/{{issue}}`
3. Implement the feature
4. Write tests
5. Commit: `git commit -m "feat: implement #{{issue}}"`</code></pre>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Video Tutorials -->
    <section id="videos" class="code-section" style="background: var(--color-bg-elevated);">
        <div class="container">
            <div class="section-header">
                <h2>🎬 Video Tutorials</h2>
                <p>Curated tutorials to accelerate your learning</p>
            </div>

            <div class="video-grid">
                <div class="video-card">
                    <h4>Claude Code Fundamentals</h4>
                    <p>Official introduction to Claude Code's architecture and core concepts.</p>
                    <a href="https://www.youtube.com/results?search_query=claude+code+tutorial+2026" target="_blank" class="video-link">Watch on YouTube →</a>
                </div>

                <div class="video-card">
                    <h4>Cursor Agent Mode Deep Dive</h4>
                    <p>Mastering Cursor's Agent Mode for autonomous code generation.</p>
                    <a href="https://www.youtube.com/results?search_query=cursor+agent+mode+tutorial" target="_blank" class="video-link">Watch on YouTube →</a>
                </div>

                <div class="video-card">
                    <h4>MCP Server Setup</h4>
                    <p>Setting up Model Context Protocol servers for extended capabilities.</p>
                    <a href="https://www.youtube.com/results?search_query=MCP+model+context+protocol+tutorial" target="_blank" class="video-link">Watch on YouTube →</a>
                </div>

                <div class="video-card">
                    <h4>CLAUDE.md Best Practices</h4>
                    <p>How to write effective project configuration files.</p>
                    <a href="https://www.youtube.com/results?search_query=CLAUDE.md+configuration" target="_blank" class="video-link">Watch on YouTube →</a>
                </div>

                <div class="video-card">
                    <h4>GitHub Actions + AI Agents</h4>
                    <p>Automating your CI/CD with AI-powered workflows.</p>
                    <a href="https://www.youtube.com/results?search_query=github+actions+ai+agents" target="_blank" class="video-link">Watch on YouTube →</a>
                </div>

                <div class="video-card">
                    <h4>Multi-Agent Orchestration</h4>
                    <p>Coordinating multiple AI agents for complex tasks.</p>
                    <a href="https://www.youtube.com/results?search_query=multi+agent+ai+coding" target="_blank" class="video-link">Watch on YouTube →</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Changelog -->
    <section id="changelog" class="code-section">
        <div class="container">
            <div class="section-header">
                <h2>📰 Changelog</h2>
                <p>Latest updates to Claude Code, Cursor, and AI models</p>
            </div>

            <div class="changelog-list">
                <div class="changelog-item">
                    <div class="changelog-date">March 17, 2026</div>
                    <h4>Claude Code 2.1.7</h4>
                    <ul>
                        <li>Agent Teams - coordinated multi-agent development with team lead structure</li>
                        <li>AutoMemory - automatic context retention across sessions</li>
                        <li>/loop command - scheduled recurring tasks for up to 3 days</li>
                        <li>Opus 4.6 now default model</li>
                    </ul>
                </div>

                <div class="changelog-item">
                    <div class="changelog-date">March 5, 2026</div>
                    <h4>Cursor Automations</h4>
                    <ul>
                        <li>Always-on cloud agents triggered by events</li>
                        <li>GitHub PR, Slack, PagerDuty, Linear triggers</li>
                        <li>Memory tool for cross-run learning</li>
                        <li>Schedule-based execution with cron expressions</li>
                    </ul>
                </div>

                <div class="changelog-item">
                    <div class="changelog-date">February 19, 2026</div>
                    <h4>Claude Sonnet 4.6</h4>
                    <ul>
                        <li>Approaches Opus-level intelligence at Sonnet pricing</li>
                        <li>1M token context window</li>
                        <li>Improved coding benchmarks</li>
                        <li>Pricing: $3/$15 per million tokens</li>
                    </ul>
                </div>

                <div class="changelog-item">
                    <div class="changelog-date">February 2026</div>
                    <h4>Google Gemini 3.1 Pro</h4>
                    <ul>
                        <li>2M token context window</li>
                        <li>Double the reasoning performance of 3 Pro</li>
                        <li>Enhanced multimodal capabilities</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
function copyCode(event) {
    const button = event.currentTarget
    const codeBlock = button.closest('.code-card').querySelector('code')
    navigator.clipboard.writeText(codeBlock.textContent).then(() => {
        button.textContent = 'Copied!'
        setTimeout(() => {
            button.textContent = 'Copy'
        }, 2000)
    })
}
</script>

<style scoped>
.resources-hero {
    padding: 160px 0 80px;
    background: linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
}

.resources-hero h1 {
    margin-bottom: var(--space-md);
}

.code-section {
    padding: var(--space-3xl) 0;
}

.code-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-xl);
}

.code-card {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    overflow: hidden;
}

.code-card-header {
    padding: var(--space-lg);
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.code-card-header h3 {
    font-size: 1rem;
}

.copy-btn {
    padding: var(--space-sm) var(--space-md);
    background: var(--color-bg-hover);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    color: var(--color-text-muted);
    font-size: 0.875rem;
    cursor: pointer;
    transition: all var(--transition-fast);
}

.copy-btn:hover {
    background: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
}

.code-content {
    padding: var(--space-lg);
    overflow-x: auto;
}

.code-content pre {
    font-family: var(--font-mono);
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--color-text-muted);
    margin: 0;
}

.code-content code {
    font-family: inherit;
}

#videos, #changelog {
    scroll-margin-top: 100px;
}

.video-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-lg);
}

.video-card {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
    transition: all var(--transition-base);
}

.video-card:hover {
    border-color: var(--color-primary);
    transform: translateY(-4px);
}

.video-card h4 {
    margin-bottom: var(--space-sm);
}

.video-card p {
    font-size: 0.875rem;
    margin-bottom: var(--space-md);
}

.video-link {
    font-weight: 600;
    font-size: 0.875rem;
}

.changelog-list {
    max-width: 800px;
    margin: 0 auto;
}

.changelog-item {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
    margin-bottom: var(--space-lg);
}

.changelog-date {
    font-size: 0.875rem;
    color: var(--color-primary-light);
    margin-bottom: var(--space-sm);
}

.changelog-item h4 {
    margin-bottom: var(--space-md);
}

.changelog-item ul {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
}

.changelog-item li {
    color: var(--color-text-muted);
    font-size: 0.875rem;
    padding-left: var(--space-lg);
    position: relative;
}

.changelog-item li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--color-primary);
}

@media (max-width: 968px) {
    .code-grid {
        grid-template-columns: 1fr;
    }

    .video-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 640px) {
    .video-grid {
        grid-template-columns: 1fr;
    }
}
</style>
