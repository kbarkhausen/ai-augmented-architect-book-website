<template>
    <!-- Hero -->
    <header class="cheatsheet-hero">
        <div class="container">
            <h1>📋 Quick Reference Cheat Sheet</h1>
            <p>Essential commands, tips, and key points from every chapter — organized for quick lookup.</p>
        </div>
    </header>

    <!-- Quick Nav -->
    <nav class="cheatsheet-nav">
        <div class="cheatsheet-nav-inner">
            <a href="#part1">Part I: Foundations</a>
            <a href="#part2">Part II: Claude Code</a>
            <a href="#part3">Part III: Cursor</a>
            <a href="#part4">Part IV: Infrastructure</a>
            <a href="#part5">Part V: Autonomous</a>
            <a href="#part6">Part VI: Expert</a>
            <a href="#part7">Part VII: Reference</a>
        </div>
    </nav>

    <!-- Cheat Sheet Content -->
    <main class="cheatsheet-content">
        <div class="container">

            <!-- Part I: Foundations -->
            <section id="part1" class="part-section">
                <div class="part-header">
                    <span class="part-icon">🚗</span>
                    <h2>Part I: Foundations</h2>
                </div>

                <!-- Chapter 1 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch1') }">
                    <div class="chapter-header" @click="toggleChapter('ch1')">
                        <h3><span class="chapter-num">Ch 1</span> The Agentic Coding Revolution</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>🔑 Key Concepts</h4>
                            <div class="tip-list">
                                <div class="key-point">
                                    <span class="key-point-icon">→</span>
                                    <span class="key-point-text"><strong>Agentic Coding:</strong> AI agents autonomously execute multi-step workflows—reading code, making changes, running commands, and iterating—with minimal human intervention.</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">→</span>
                                    <span class="key-point-text"><strong>Old vs New:</strong> Old = AI suggests, you apply. New = You specify intent, AI executes entire workflow.</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">→</span>
                                    <span class="key-point-text"><strong>Two Champions:</strong> Claude Code (terminal-first, autonomous) + Cursor (IDE, visual feedback). Use both together.</span>
                                </div>
                            </div>
                        </div>
                        <div class="cheat-section">
                            <h4>💡 Pro Tips</h4>
                            <div class="tip-list">
                                <div class="tip-item">
                                    <span class="tip-icon">💡</span>
                                    <span class="tip-text">Use <strong>Cursor</strong> for interactive development with visual feedback. Use <strong>Claude Code</strong> for autonomous background tasks.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Chapter 2 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch2') }">
                    <div class="chapter-header" @click="toggleChapter('ch2')">
                        <h3><span class="chapter-num">Ch 2</span> Claude Code vs Cursor: Strategic Comparison</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>📊 When to Use Which</h4>
                            <table class="quick-ref-table">
                                <tr>
                                    <th>Scenario</th>
                                    <th>Tool</th>
                                </tr>
                                <tr>
                                    <td>Complex multi-file refactors</td>
                                    <td>Claude Code</td>
                                </tr>
                                <tr>
                                    <td>CI/CD automation</td>
                                    <td>Claude Code</td>
                                </tr>
                                <tr>
                                    <td>Visual diff review</td>
                                    <td>Cursor</td>
                                </tr>
                                <tr>
                                    <td>Frontend/UI work</td>
                                    <td>Cursor</td>
                                </tr>
                                <tr>
                                    <td>Background autonomous tasks</td>
                                    <td>Claude Code</td>
                                </tr>
                                <tr>
                                    <td>Learning new codebase</td>
                                    <td>Cursor</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Chapter 3 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch3') }">
                    <div class="chapter-header" @click="toggleChapter('ch3')">
                        <h3><span class="chapter-num">Ch 3</span> Installation and Environment Setup</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>⌨️ Commands</h4>
                            <div class="command-grid">
                                <div class="command-item">
                                    <code class="command-code">curl -fsSL https://code.claude.com/install.sh | sh</code>
                                    <span class="command-desc">Install Claude Code (macOS/Linux)</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">brew install claude-code</code>
                                    <span class="command-desc">Install via Homebrew (macOS)</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">winget install Anthropic.ClaudeCode</code>
                                    <span class="command-desc">Install on Windows</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">claude</code>
                                    <span class="command-desc">Start Claude Code in current directory</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">claude --version</code>
                                    <span class="command-desc">Check installed version</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Part II: Claude Code Mastery -->
            <section id="part2" class="part-section">
                <div class="part-header">
                    <span class="part-icon">🚗</span>
                    <h2>Part II: Claude Code Mastery</h2>
                </div>

                <!-- Chapter 4 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch4') }">
                    <div class="chapter-header" @click="toggleChapter('ch4')">
                        <h3><span class="chapter-num">Ch 4</span> Claude Code Architecture Deep Dive</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>🔑 Context Loading Order</h4>
                            <div class="tip-list">
                                <div class="key-point">
                                    <span class="key-point-icon">1.</span>
                                    <span class="key-point-text"><span class="file-ref">~/.claude/CLAUDE.md</span> — Global settings (all projects)</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">2.</span>
                                    <span class="key-point-text"><span class="file-ref">./CLAUDE.md</span> — Project root config</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">3.</span>
                                    <span class="key-point-text"><span class="file-ref">./CLAUDE.local.md</span> — Personal overrides (gitignored)</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">4.</span>
                                    <span class="key-point-text"><span class="file-ref">./.claude/settings.json</span> — Tool settings</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Chapter 5 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch5') }">
                    <div class="chapter-header" @click="toggleChapter('ch5')">
                        <h3><span class="chapter-num">Ch 5</span> CLAUDE.md: Your Project's Brain</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>📁 Essential Sections</h4>
                            <div class="command-grid">
                                <div class="command-item">
                                    <code class="command-code">## Overview</code>
                                    <span class="command-desc">What this project does</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">## Tech Stack</code>
                                    <span class="command-desc">Languages, frameworks, tools</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">## Commands</code>
                                    <span class="command-desc">Build, test, run commands</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">## Architecture</code>
                                    <span class="command-desc">Directory structure explanation</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">## Conventions</code>
                                    <span class="command-desc">Coding standards, naming</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">## Do NOT</code>
                                    <span class="command-desc">Things to avoid</span>
                                </div>
                            </div>
                        </div>
                        <div class="cheat-section">
                            <h4>💡 Pro Tips</h4>
                            <div class="tip-list">
                                <div class="tip-item">
                                    <span class="tip-icon">💡</span>
                                    <span class="tip-text">Keep CLAUDE.md <strong>under 200 lines</strong>. Use progressive disclosure for details.</span>
                                </div>
                                <div class="tip-item">
                                    <span class="tip-icon">💡</span>
                                    <span class="tip-text">Use <span class="file-ref">CLAUDE.local.md</span> for personal preferences (API keys paths, etc.) — add to .gitignore.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Chapter 6 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch6') }">
                    <div class="chapter-header" @click="toggleChapter('ch6')">
                        <h3><span class="chapter-num">Ch 6</span> Permission Modes and Security</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>⌨️ Commands</h4>
                            <div class="command-grid">
                                <div class="command-item">
                                    <code class="command-code">claude --dangerously-skip-permissions</code>
                                    <span class="command-desc">Full autonomy mode (use carefully!)</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">/permissions</code>
                                    <span class="command-desc">View/manage current permissions</span>
                                </div>
                            </div>
                        </div>
                        <div class="cheat-section">
                            <h4>🔐 Permission Modes</h4>
                            <table class="quick-ref-table">
                                <tr>
                                    <th>Mode</th>
                                    <th>Behavior</th>
                                </tr>
                                <tr>
                                    <td>Default</td>
                                    <td>Asks permission for file writes, commands</td>
                                </tr>
                                <tr>
                                    <td>Allowlist</td>
                                    <td>Auto-approve specific patterns</td>
                                </tr>
                                <tr>
                                    <td>YOLO</td>
                                    <td>Full autonomy (dangerous)</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Chapter 7 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch7') }">
                    <div class="chapter-header" @click="toggleChapter('ch7')">
                        <h3><span class="chapter-num">Ch 7</span> Subagents and Parallel Execution</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>⌨️ Commands</h4>
                            <div class="command-grid">
                                <div class="command-item">
                                    <code class="command-code">In parallel: [task1] [task2] [task3]</code>
                                    <span class="command-desc">Spawn parallel subagents</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">claude config set agentTeams.enabled true</code>
                                    <span class="command-desc">Enable Agent Teams (v2.1.7+)</span>
                                </div>
                            </div>
                        </div>
                        <div class="cheat-section">
                            <h4>🔑 Agent Teams vs Subagents</h4>
                            <table class="quick-ref-table">
                                <tr>
                                    <th>Feature</th>
                                    <th>Subagents</th>
                                    <th>Agent Teams</th>
                                </tr>
                                <tr>
                                    <td>Communication</td>
                                    <td>Independent</td>
                                    <td>Can message each other</td>
                                </tr>
                                <tr>
                                    <td>Coordination</td>
                                    <td>None</td>
                                    <td>Team lead coordinates</td>
                                </tr>
                                <tr>
                                    <td>Best for</td>
                                    <td>Independent parallel tasks</td>
                                    <td>Complex interdependent work</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Chapter 8 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch8') }">
                    <div class="chapter-header" @click="toggleChapter('ch8')">
                        <h3><span class="chapter-num">Ch 8</span> Hooks: Automating Your Workflow</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>📁 Hook Location</h4>
                            <div class="command-grid">
                                <div class="command-item">
                                    <code class="command-code">.claude/hooks/</code>
                                    <span class="command-desc">Hook scripts directory</span>
                                </div>
                            </div>
                        </div>
                        <div class="cheat-section">
                            <h4>🔑 Common Hook Patterns</h4>
                            <div class="tip-list">
                                <div class="key-point">
                                    <span class="key-point-icon">→</span>
                                    <span class="key-point-text"><strong>Auto-format:</strong> Run Prettier/ESLint after file edits</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">→</span>
                                    <span class="key-point-text"><strong>Auto-test:</strong> Run tests when source files change</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">→</span>
                                    <span class="key-point-text"><strong>Protected files:</strong> Block edits to .env, secrets/</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">→</span>
                                    <span class="key-point-text"><strong>Notifications:</strong> Alert when task completes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Chapter 9 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch9') }">
                    <div class="chapter-header" @click="toggleChapter('ch9')">
                        <h3><span class="chapter-num">Ch 9</span> Custom Slash Commands</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>⌨️ Built-in Commands</h4>
                            <div class="command-grid">
                                <div class="command-item">
                                    <code class="command-code">/help</code>
                                    <span class="command-desc">Show available commands</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">/compact</code>
                                    <span class="command-desc">Summarize and reduce context</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">/clear</code>
                                    <span class="command-desc">Clear conversation history</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">/context</code>
                                    <span class="command-desc">Show current context usage</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">/permissions</code>
                                    <span class="command-desc">Manage permission mode</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">/loop</code>
                                    <span class="command-desc">Schedule recurring tasks (v2.1.7+)</span>
                                </div>
                            </div>
                        </div>
                        <div class="cheat-section">
                            <h4>📁 Custom Commands Location</h4>
                            <div class="command-grid">
                                <div class="command-item">
                                    <code class="command-code">.claude/commands/*.md</code>
                                    <span class="command-desc">Custom command definitions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Chapter 10 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch10') }">
                    <div class="chapter-header" @click="toggleChapter('ch10')">
                        <h3><span class="chapter-num">Ch 10</span> Reusable Capability Bundles (Skills)</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>📁 Skills Location</h4>
                            <div class="command-grid">
                                <div class="command-item">
                                    <code class="command-code">.claude/skills/</code>
                                    <span class="command-desc">Installed skills directory</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">SKILL.md</code>
                                    <span class="command-desc">Main skill instructions file</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Part III: Cursor Mastery -->
            <section id="part3" class="part-section">
                <div class="part-header">
                    <span class="part-icon">🎶</span>
                    <h2>Part III: Cursor Mastery</h2>
                </div>

                <!-- Chapter 11 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch11') }">
                    <div class="chapter-header" @click="toggleChapter('ch11')">
                        <h3><span class="chapter-num">Ch 11</span> Cursor Architecture and Modes</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>⌨️ Keyboard Shortcuts</h4>
                            <div class="command-grid">
                                <div class="command-item">
                                    <code class="command-code">Tab</code>
                                    <span class="command-desc">Accept inline completion</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">Cmd+L</code>
                                    <span class="command-desc">Open Chat panel</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">Cmd+I</code>
                                    <span class="command-desc">Open Composer</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">Cmd+K</code>
                                    <span class="command-desc">Inline edit (selection)</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">Cmd+Shift+I</code>
                                    <span class="command-desc">Composer with Agent Mode</span>
                                </div>
                            </div>
                        </div>
                        <div class="cheat-section">
                            <h4>🎯 Mode Selection</h4>
                            <table class="quick-ref-table">
                                <tr>
                                    <th>Mode</th>
                                    <th>Best For</th>
                                </tr>
                                <tr>
                                    <td>Tab</td>
                                    <td>Quick inline completions</td>
                                </tr>
                                <tr>
                                    <td>Chat</td>
                                    <td>Questions, explanations</td>
                                </tr>
                                <tr>
                                    <td>Composer</td>
                                    <td>Multi-file edits</td>
                                </tr>
                                <tr>
                                    <td>Agent</td>
                                    <td>Autonomous implementation</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Chapter 12 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch12') }">
                    <div class="chapter-header" @click="toggleChapter('ch12')">
                        <h3><span class="chapter-num">Ch 12</span> Rules Files (.cursorrules and .mdc)</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>📁 Rules Locations</h4>
                            <div class="command-grid">
                                <div class="command-item">
                                    <code class="command-code">.cursorrules</code>
                                    <span class="command-desc">Project root rules (legacy)</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">.cursor/rules/*.mdc</code>
                                    <span class="command-desc">Modern rules directory</span>
                                </div>
                            </div>
                        </div>
                        <div class="cheat-section">
                            <h4>🔑 Auto-Attach Rules</h4>
                            <div class="tip-list">
                                <div class="key-point">
                                    <span class="key-point-icon">→</span>
                                    <span class="key-point-text"><code>globs: ["**/*.tsx"]</code> — Attach to React files</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">→</span>
                                    <span class="key-point-text"><code>globs: ["**/*.test.*"]</code> — Attach to test files</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">→</span>
                                    <span class="key-point-text"><code>alwaysApply: true</code> — Always load this rule</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Chapter 13 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch13') }">
                    <div class="chapter-header" @click="toggleChapter('ch13')">
                        <h3><span class="chapter-num">Ch 13</span> Agent Mode and Composer</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>⌨️ Agent Mode Commands</h4>
                            <div class="command-grid">
                                <div class="command-item">
                                    <code class="command-code">Shift+Tab</code>
                                    <span class="command-desc">Toggle Plan Mode (in Composer)</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">@file</code>
                                    <span class="command-desc">Reference specific file</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">@folder</code>
                                    <span class="command-desc">Reference folder</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">@codebase</code>
                                    <span class="command-desc">Search entire codebase</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">@docs</code>
                                    <span class="command-desc">Reference documentation</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">@web</code>
                                    <span class="command-desc">Search the web</span>
                                </div>
                            </div>
                        </div>
                        <div class="cheat-section">
                            <h4>💡 Pro Tips</h4>
                            <div class="tip-list">
                                <div class="tip-item">
                                    <span class="tip-icon">💡</span>
                                    <span class="tip-text">Use <strong>Plan Mode</strong> first for complex tasks — review the plan before execution.</span>
                                </div>
                                <div class="tip-item">
                                    <span class="tip-icon">💡</span>
                                    <span class="tip-text">Create a git commit before Agent runs for easy rollback.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Chapter 14 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch14') }">
                    <div class="chapter-header" @click="toggleChapter('ch14')">
                        <h3><span class="chapter-num">Ch 14</span> Background and Cloud Agents</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>⌨️ Commands</h4>
                            <div class="command-grid">
                                <div class="command-item">
                                    <code class="command-code">Cmd+Shift+P → "Start Background Agent"</code>
                                    <span class="command-desc">Start local background agent</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">Cmd+Shift+P → "Start Cloud Agent"</code>
                                    <span class="command-desc">Start cloud agent</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">cursor.com/automations</code>
                                    <span class="command-desc">Create event-triggered automations</span>
                                </div>
                            </div>
                        </div>
                        <div class="cheat-section">
                            <h4>🔑 Automation Triggers</h4>
                            <table class="quick-ref-table">
                                <tr>
                                    <th>Trigger</th>
                                    <th>Use Case</th>
                                </tr>
                                <tr>
                                    <td>GitHub PR</td>
                                    <td>Auto code review</td>
                                </tr>
                                <tr>
                                    <td>Slack message</td>
                                    <td>DevOps alerts</td>
                                </tr>
                                <tr>
                                    <td>Schedule (cron)</td>
                                    <td>Periodic reports</td>
                                </tr>
                                <tr>
                                    <td>PagerDuty</td>
                                    <td>Incident response</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Chapter 15 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch15') }">
                    <div class="chapter-header" @click="toggleChapter('ch15')">
                        <h3><span class="chapter-num">Ch 15</span> Notepads, Memories, and Context</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>🔑 Context Types</h4>
                            <div class="tip-list">
                                <div class="key-point">
                                    <span class="key-point-icon">→</span>
                                    <span class="key-point-text"><strong>Notepads:</strong> Scratchpad for current session (temporary)</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">→</span>
                                    <span class="key-point-text"><strong>Memories:</strong> Persistent facts across sessions</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">→</span>
                                    <span class="key-point-text"><strong>@docs:</strong> Index external documentation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Part IV: Shared Infrastructure -->
            <section id="part4" class="part-section">
                <div class="part-header">
                    <span class="part-icon">🎶</span>
                    <h2>Part IV: Shared Infrastructure</h2>
                </div>

                <!-- Chapter 16 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch16') }">
                    <div class="chapter-header" @click="toggleChapter('ch16')">
                        <h3><span class="chapter-num">Ch 16</span> MCP: Model Context Protocol</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>⌨️ Commands</h4>
                            <div class="command-grid">
                                <div class="command-item">
                                    <code class="command-code">claude mcp add &lt;server&gt;</code>
                                    <span class="command-desc">Add MCP server</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">claude mcp list</code>
                                    <span class="command-desc">List configured servers</span>
                                </div>
                            </div>
                        </div>
                        <div class="cheat-section">
                            <h4>🔌 Essential MCP Servers</h4>
                            <table class="quick-ref-table">
                                <tr>
                                    <th>Server</th>
                                    <th>Purpose</th>
                                </tr>
                                <tr>
                                    <td><code>@anthropic/github</code></td>
                                    <td>GitHub operations</td>
                                </tr>
                                <tr>
                                    <td><code>@playwright/mcp</code></td>
                                    <td>Browser automation</td>
                                </tr>
                                <tr>
                                    <td><code>@anthropic/filesystem</code></td>
                                    <td>Extended file ops</td>
                                </tr>
                                <tr>
                                    <td><code>@anthropic/postgres</code></td>
                                    <td>Database access</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Chapter 17 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch17') }">
                    <div class="chapter-header" @click="toggleChapter('ch17')">
                        <h3><span class="chapter-num">Ch 17</span> AGENTS.md: Cross-Tool Instructions</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>🔑 AGENTS.md vs CLAUDE.md</h4>
                            <table class="quick-ref-table">
                                <tr>
                                    <th>File</th>
                                    <th>Scope</th>
                                </tr>
                                <tr>
                                    <td><code>AGENTS.md</code></td>
                                    <td>Any AI tool (Claude, Cursor, Copilot)</td>
                                </tr>
                                <tr>
                                    <td><code>CLAUDE.md</code></td>
                                    <td>Claude Code only</td>
                                </tr>
                            </table>
                        </div>
                        <div class="cheat-section">
                            <h4>💡 Pro Tip</h4>
                            <div class="tip-list">
                                <div class="tip-item">
                                    <span class="tip-icon">💡</span>
                                    <span class="tip-text">Put shared instructions in <strong>AGENTS.md</strong>, tool-specific in <strong>CLAUDE.md</strong> or <strong>.cursorrules</strong>.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Chapter 18 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch18') }">
                    <div class="chapter-header" @click="toggleChapter('ch18')">
                        <h3><span class="chapter-num">Ch 18</span> Memory Bank Pattern</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>📁 Memory Bank Structure</h4>
                            <div class="command-grid">
                                <div class="command-item">
                                    <code class="command-code">memory-bank/projectbrief.md</code>
                                    <span class="command-desc">Core mission and scope</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">memory-bank/productContext.md</code>
                                    <span class="command-desc">Why we're building this</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">memory-bank/activeContext.md</code>
                                    <span class="command-desc">Current focus (update often)</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">memory-bank/systemPatterns.md</code>
                                    <span class="command-desc">Architecture decisions</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">memory-bank/progress.md</code>
                                    <span class="command-desc">What's done, what's next</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">memory-bank/decisionLog.md</code>
                                    <span class="command-desc">Key decisions &amp; rationale</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Chapter 19 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch19') }">
                    <div class="chapter-header" @click="toggleChapter('ch19')">
                        <h3><span class="chapter-num">Ch 19</span> Context Window Management</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>⌨️ Commands</h4>
                            <div class="command-grid">
                                <div class="command-item">
                                    <code class="command-code">/context</code>
                                    <span class="command-desc">Check context usage</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">/compact</code>
                                    <span class="command-desc">Summarize and reduce context</span>
                                </div>
                            </div>
                        </div>
                        <div class="cheat-section">
                            <h4>💡 Context Tips</h4>
                            <div class="tip-list">
                                <div class="tip-item">
                                    <span class="tip-icon">💡</span>
                                    <span class="tip-text">Keep CLAUDE.md/rules <strong>under 100 lines</strong> per file.</span>
                                </div>
                                <div class="tip-item">
                                    <span class="tip-icon">💡</span>
                                    <span class="tip-text">Use <strong>/compact</strong> when context gets large.</span>
                                </div>
                                <div class="tip-item">
                                    <span class="tip-icon">💡</span>
                                    <span class="tip-text">Use subagents to split context across multiple sessions.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Chapter 20 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch20') }">
                    <div class="chapter-header" @click="toggleChapter('ch20')">
                        <h3><span class="chapter-num">Ch 20</span> Model Selection Strategy</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>🎯 Model Selection Guide</h4>
                            <table class="quick-ref-table">
                                <tr>
                                    <th>Task</th>
                                    <th>Model</th>
                                </tr>
                                <tr>
                                    <td>Simple edits, boilerplate</td>
                                    <td>Sonnet 4.6 / Haiku 4.5</td>
                                </tr>
                                <tr>
                                    <td>Most coding tasks</td>
                                    <td>Sonnet 4.6</td>
                                </tr>
                                <tr>
                                    <td>Complex architecture</td>
                                    <td>Opus 4.6</td>
                                </tr>
                                <tr>
                                    <td>Security-sensitive</td>
                                    <td>Opus 4.6</td>
                                </tr>
                                <tr>
                                    <td>Very long context (&gt;150K)</td>
                                    <td>Gemini 3.1 Pro</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Part V: Autonomous Workflows -->
            <section id="part5" class="part-section">
                <div class="part-header">
                    <span class="part-icon">🏗️</span>
                    <h2>Part V: Autonomous Workflows</h2>
                </div>

                <!-- Chapter 21 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch21') }">
                    <div class="chapter-header" @click="toggleChapter('ch21')">
                        <h3><span class="chapter-num">Ch 21</span> GitHub Integration</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>⌨️ GitHub CLI Commands</h4>
                            <div class="command-grid">
                                <div class="command-item">
                                    <code class="command-code">gh issue view &lt;num&gt;</code>
                                    <span class="command-desc">View issue details</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">gh pr create</code>
                                    <span class="command-desc">Create pull request</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">gh pr merge</code>
                                    <span class="command-desc">Merge current PR</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">gh run list</code>
                                    <span class="command-desc">List workflow runs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Chapter 23 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch23') }">
                    <div class="chapter-header" @click="toggleChapter('ch23')">
                        <h3><span class="chapter-num">Ch 23</span> Automated Testing and QA</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>🔑 Test Generation Prompts</h4>
                            <div class="tip-list">
                                <div class="key-point">
                                    <span class="key-point-icon">→</span>
                                    <span class="key-point-text">"Write unit tests for [file] covering happy path, edge cases, and errors"</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">→</span>
                                    <span class="key-point-text">"Generate E2E tests for the login flow using Playwright"</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">→</span>
                                    <span class="key-point-text">"Add test coverage for uncovered branches in [file]"</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Chapter 25 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch25') }">
                    <div class="chapter-header" @click="toggleChapter('ch25')">
                        <h3><span class="chapter-num">Ch 25</span> The Ticket-to-Merge Pipeline</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>🔑 Pipeline Flow</h4>
                            <div class="tip-list">
                                <div class="key-point">
                                    <span class="key-point-icon">1.</span>
                                    <span class="key-point-text"><strong>Trigger:</strong> Issue labeled "ai-ready"</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">2.</span>
                                    <span class="key-point-text"><strong>Implement:</strong> Claude Code implements from spec</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">3.</span>
                                    <span class="key-point-text"><strong>Test:</strong> Run tests, fix failures</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">4.</span>
                                    <span class="key-point-text"><strong>PR:</strong> Create PR with description</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">5.</span>
                                    <span class="key-point-text"><strong>Review:</strong> Human reviews and approves</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">6.</span>
                                    <span class="key-point-text"><strong>Merge:</strong> Auto-merge if approved</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Part VI: Expert Techniques -->
            <section id="part6" class="part-section">
                <div class="part-header">
                    <span class="part-icon">🏗️</span>
                    <h2>Part VI: Expert Techniques</h2>
                </div>

                <!-- Chapter 26 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch26') }">
                    <div class="chapter-header" @click="toggleChapter('ch26')">
                        <h3><span class="chapter-num">Ch 26</span> Prompt Engineering for Agents</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>✅ Prompt Patterns</h4>
                            <div class="tip-list">
                                <div class="key-point">
                                    <span class="key-point-icon">✅</span>
                                    <span class="key-point-text"><strong>Be specific:</strong> "Add email validation to UserForm using zod schema"</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">✅</span>
                                    <span class="key-point-text"><strong>Provide context:</strong> Reference files with @file or "see src/..."</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">✅</span>
                                    <span class="key-point-text"><strong>Define success:</strong> "Tests should pass, no TypeScript errors"</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">✅</span>
                                    <span class="key-point-text"><strong>Constrain scope:</strong> "Only modify files in src/auth/"</span>
                                </div>
                            </div>
                        </div>
                        <div class="cheat-section">
                            <h4>❌ Anti-Patterns</h4>
                            <div class="tip-list">
                                <div class="key-point">
                                    <span class="key-point-icon">❌</span>
                                    <span class="key-point-text"><strong>Vague:</strong> "Make it better" → Be specific about what to improve</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">❌</span>
                                    <span class="key-point-text"><strong>Too broad:</strong> "Refactor everything" → Break into smaller tasks</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">❌</span>
                                    <span class="key-point-text"><strong>No context:</strong> Always reference relevant files/patterns</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Chapter 28 -->
                <div class="chapter-card" :class="{ open: openChapters.has('ch28') }">
                    <div class="chapter-header" @click="toggleChapter('ch28')">
                        <h3><span class="chapter-num">Ch 28</span> Debugging AI-Generated Code</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>🔍 Common AI Code Issues</h4>
                            <div class="tip-list">
                                <div class="key-point">
                                    <span class="key-point-icon">→</span>
                                    <span class="key-point-text"><strong>Hallucinated APIs:</strong> Verify imports and method signatures exist</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">→</span>
                                    <span class="key-point-text"><strong>Incomplete error handling:</strong> Check all error paths</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">→</span>
                                    <span class="key-point-text"><strong>Missing edge cases:</strong> Test boundaries, nulls, empty arrays</span>
                                </div>
                                <div class="key-point">
                                    <span class="key-point-icon">→</span>
                                    <span class="key-point-text"><strong>Outdated patterns:</strong> Verify against current docs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Part VII: Reference -->
            <section id="part7" class="part-section">
                <div class="part-header">
                    <span class="part-icon">📚</span>
                    <h2>Part VII: Quick Reference</h2>
                </div>

                <!-- Essential Files -->
                <div class="chapter-card" :class="{ open: openChapters.has('ref-files') }">
                    <div class="chapter-header" @click="toggleChapter('ref-files')">
                        <h3>📁 Essential Files Quick Reference</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>Claude Code Files</h4>
                            <div class="command-grid">
                                <div class="command-item">
                                    <code class="command-code">CLAUDE.md</code>
                                    <span class="command-desc">Project instructions for Claude Code</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">CLAUDE.local.md</code>
                                    <span class="command-desc">Personal overrides (gitignored)</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">.claude/settings.json</code>
                                    <span class="command-desc">Tool configuration</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">.claude/commands/*.md</code>
                                    <span class="command-desc">Custom slash commands</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">.claude/skills/</code>
                                    <span class="command-desc">Installed capability bundles</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">.claude/hooks/</code>
                                    <span class="command-desc">Automation hooks</span>
                                </div>
                            </div>
                        </div>
                        <div class="cheat-section">
                            <h4>Cursor Files</h4>
                            <div class="command-grid">
                                <div class="command-item">
                                    <code class="command-code">.cursorrules</code>
                                    <span class="command-desc">Project rules (legacy)</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">.cursor/rules/*.mdc</code>
                                    <span class="command-desc">Modern rules directory</span>
                                </div>
                            </div>
                        </div>
                        <div class="cheat-section">
                            <h4>Universal Files</h4>
                            <div class="command-grid">
                                <div class="command-item">
                                    <code class="command-code">AGENTS.md</code>
                                    <span class="command-desc">Cross-tool AI instructions</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">memory-bank/</code>
                                    <span class="command-desc">Long-term project memory</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- All Commands -->
                <div class="chapter-card" :class="{ open: openChapters.has('ref-commands') }">
                    <div class="chapter-header" @click="toggleChapter('ref-commands')">
                        <h3>⌨️ All Commands Quick Reference</h3>
                        <span class="chapter-toggle">▼</span>
                    </div>
                    <div class="chapter-content">
                        <div class="cheat-section">
                            <h4>Claude Code Slash Commands</h4>
                            <div class="command-grid">
                                <div class="command-item">
                                    <code class="command-code">/help</code>
                                    <span class="command-desc">Show available commands</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">/compact</code>
                                    <span class="command-desc">Summarize and reduce context</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">/clear</code>
                                    <span class="command-desc">Clear conversation history</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">/context</code>
                                    <span class="command-desc">Show context usage</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">/permissions</code>
                                    <span class="command-desc">Manage permissions</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">/worktree</code>
                                    <span class="command-desc">Manage git worktrees</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">/loop</code>
                                    <span class="command-desc">Schedule recurring tasks</span>
                                </div>
                            </div>
                        </div>
                        <div class="cheat-section">
                            <h4>Cursor Keyboard Shortcuts</h4>
                            <div class="command-grid">
                                <div class="command-item">
                                    <code class="command-code">Tab</code>
                                    <span class="command-desc">Accept completion</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">Esc</code>
                                    <span class="command-desc">Dismiss completion</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">Cmd+L</code>
                                    <span class="command-desc">Open Chat</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">Cmd+I</code>
                                    <span class="command-desc">Open Composer</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">Cmd+K</code>
                                    <span class="command-desc">Inline edit</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">Cmd+Shift+I</code>
                                    <span class="command-desc">Composer + Agent</span>
                                </div>
                                <div class="command-item">
                                    <code class="command-code">Shift+Tab</code>
                                    <span class="command-desc">Toggle Plan Mode</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </main>

    <!-- Print Button -->
    <button class="print-btn" @click="printPage">
        🖨️ Print Cheat Sheet
    </button>
</template>

<script setup>
import { reactive, onMounted, onUnmounted } from 'vue'

const openChapters = reactive(new Set(['ch1', 'ref-files']))

function toggleChapter(id) {
    if (openChapters.has(id)) {
        openChapters.delete(id)
    } else {
        openChapters.add(id)
    }
}

function printPage() {
    window.print()
}

function handleBeforePrint() {
    const allIds = [
        'ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6', 'ch7', 'ch8', 'ch9', 'ch10',
        'ch11', 'ch12', 'ch13', 'ch14', 'ch15',
        'ch16', 'ch17', 'ch18', 'ch19', 'ch20',
        'ch21', 'ch23', 'ch25',
        'ch26', 'ch28',
        'ref-files', 'ref-commands'
    ]
    allIds.forEach(id => openChapters.add(id))
}

onMounted(() => {
    window.addEventListener('beforeprint', handleBeforePrint)
})

onUnmounted(() => {
    window.removeEventListener('beforeprint', handleBeforePrint)
})
</script>

<style scoped>
.cheatsheet-hero {
    padding: 160px 0 40px;
    background: linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
}

.cheatsheet-hero h1 {
    margin-bottom: var(--space-md);
}

.cheatsheet-nav {
    background: var(--color-bg-elevated);
    border-bottom: 1px solid var(--color-border);
    padding: var(--space-lg) 0;
    position: sticky;
    top: 60px;
    z-index: 100;
    overflow-x: auto;
}

.cheatsheet-nav-inner {
    display: flex;
    gap: var(--space-sm);
    padding: 0 var(--space-lg);
    min-width: max-content;
}

.cheatsheet-nav a {
    padding: var(--space-sm) var(--space-md);
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    font-size: 0.875rem;
    color: var(--color-text-muted);
    white-space: nowrap;
    transition: all var(--transition-fast);
}

.cheatsheet-nav a:hover {
    border-color: var(--color-primary);
    color: var(--color-text);
}

.cheatsheet-content {
    padding: var(--space-3xl) 0;
}

.part-section {
    margin-bottom: var(--space-4xl);
}

.part-header {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    margin-bottom: var(--space-2xl);
    padding-bottom: var(--space-lg);
    border-bottom: 2px solid var(--color-border);
}

.part-icon {
    font-size: 2rem;
}

.part-header h2 {
    font-size: 1.5rem;
}

.chapter-card {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    margin-bottom: var(--space-xl);
    overflow: hidden;
}

.chapter-header {
    padding: var(--space-lg);
    background: var(--color-bg-elevated);
    border-bottom: 1px solid var(--color-border);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.chapter-header:hover {
    background: var(--color-bg-hover);
}

.chapter-header h3 {
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    gap: var(--space-md);
}

.chapter-num {
    color: var(--color-primary-light);
    font-weight: 400;
}

.chapter-toggle {
    font-size: 1.25rem;
    color: var(--color-text-muted);
    transition: transform var(--transition-fast);
}

.chapter-card.open .chapter-toggle {
    transform: rotate(180deg);
}

.chapter-content {
    padding: var(--space-xl);
    display: none;
}

.chapter-card.open .chapter-content {
    display: block;
}

.cheat-section {
    margin-bottom: var(--space-xl);
}

.cheat-section:last-child {
    margin-bottom: 0;
}

.cheat-section h4 {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-primary-light);
    margin-bottom: var(--space-md);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.command-grid {
    display: grid;
    gap: var(--space-sm);
}

.command-item {
    display: flex;
    gap: var(--space-md);
    padding: var(--space-md);
    background: var(--color-bg-elevated);
    border-radius: var(--radius-md);
    align-items: flex-start;
}

.command-code {
    font-family: var(--font-mono);
    font-size: 0.875rem;
    color: var(--color-secondary);
    background: var(--color-bg);
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-sm);
    white-space: nowrap;
    flex-shrink: 0;
}

.command-desc {
    font-size: 0.875rem;
    color: var(--color-text-muted);
}

.tip-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
}

.tip-item {
    display: flex;
    gap: var(--space-md);
    padding: var(--space-md);
    background: var(--color-bg-elevated);
    border-radius: var(--radius-md);
    border-left: 3px solid var(--color-accent);
}

.tip-icon {
    flex-shrink: 0;
}

.tip-text {
    font-size: 0.875rem;
    color: var(--color-text-muted);
}

.tip-text strong {
    color: var(--color-text);
}

.key-point {
    display: flex;
    gap: var(--space-md);
    padding: var(--space-md);
    background: var(--color-bg-elevated);
    border-radius: var(--radius-md);
}

.key-point-icon {
    color: var(--color-primary-light);
    flex-shrink: 0;
}

.key-point-text {
    font-size: 0.875rem;
    color: var(--color-text-muted);
}

.file-ref {
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    color: var(--color-primary-light);
    background: var(--color-bg);
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-sm);
}

.quick-ref-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.875rem;
}

.quick-ref-table th {
    text-align: left;
    padding: var(--space-md);
    background: var(--color-bg-elevated);
    color: var(--color-text);
    font-weight: 600;
    border-bottom: 1px solid var(--color-border);
}

.quick-ref-table td {
    padding: var(--space-md);
    border-bottom: 1px solid var(--color-border);
    color: var(--color-text-muted);
}

.quick-ref-table code {
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    color: var(--color-secondary);
    background: var(--color-bg);
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-sm);
}

.print-btn {
    position: fixed;
    bottom: var(--space-xl);
    right: var(--space-xl);
    padding: var(--space-md) var(--space-xl);
    background: var(--gradient-primary);
    color: white;
    border: none;
    border-radius: var(--radius-lg);
    font-weight: 600;
    cursor: pointer;
    box-shadow: var(--shadow-lg);
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.print-btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
}

@media print {
    .cheatsheet-nav, .print-btn {
        display: none !important;
    }

    .cheatsheet-hero {
        padding-top: 0;
    }

    .chapter-card {
        break-inside: avoid;
    }

    .chapter-content {
        display: block !important;
    }

    .chapter-toggle {
        display: none;
    }
}

@media (max-width: 768px) {
    .command-item {
        flex-direction: column;
    }

    .print-btn {
        bottom: var(--space-md);
        right: var(--space-md);
        padding: var(--space-sm) var(--space-md);
        font-size: 0.875rem;
    }
}
</style>
