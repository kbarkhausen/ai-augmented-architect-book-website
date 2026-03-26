<template>
    <!-- Hero -->
    <header class="snippets-hero">
        <div class="container">
            <h1>📝 Code Snippets</h1>
            <p>All 333 code examples from the book — searchable, copyable, and downloadable.</p>
        </div>
    </header>

    <!-- Search -->
    <section class="search-section">
        <div class="container">
            <div class="search-container">
                <input
                    type="text"
                    class="search-input"
                    v-model="searchQuery"
                    placeholder="Search snippets (e.g., CLAUDE.md, hooks, Agent Teams...)"
                >
                <select class="filter-select" v-model="chapterFilter">
                    <option value="">All Chapters</option>
                    <option v-for="ch in chapters" :key="ch" :value="ch">
                        {{ formatChapterOption(ch) }}
                    </option>
                </select>
                <select class="filter-select" v-model="langFilter">
                    <option value="">All Languages</option>
                    <option v-for="lang in languages" :key="lang" :value="lang">
                        {{ lang }}
                    </option>
                </select>
            </div>
        </div>
    </section>

    <!-- Snippets -->
    <section class="snippets-grid">
        <div class="container">
            <div class="github-banner">
                <div class="github-banner-text">
                    <h3>📦 Download All Snippets</h3>
                    <p>Get all code organized by chapter in our public GitHub repository.</p>
                </div>
                <a href="https://github.com/kbarkhausen/augmented-architect-book" target="_blank" class="btn btn-primary">
                    View on GitHub
                </a>
            </div>

            <p class="snippets-count">
                <template v-if="loading">Loading snippets...</template>
                <template v-else>Showing {{ filteredSnippets.length }} of {{ snippets.length }} snippets</template>
            </p>

            <div v-if="loading" class="loading">
                <div class="loading-spinner"></div>
                <p>Loading code snippets...</p>
            </div>

            <div v-else-if="loadError" class="no-results">
                <h3>Unable to load snippets</h3>
                <p>Please visit the <a href="https://github.com/kbarkhausen/augmented-architect-book">GitHub repository</a> directly.</p>
            </div>

            <div v-else-if="filteredSnippets.length === 0" class="no-results">
                <h3>No snippets found</h3>
                <p>Try adjusting your search or filters.</p>
            </div>

            <div v-else>
                <div
                    v-for="(snippet, index) in filteredSnippets"
                    :key="index"
                    class="snippet-card"
                >
                    <div class="snippet-header">
                        <div class="snippet-meta">
                            <span class="snippet-chapter">{{ formatChapter(snippet.chapter) }}</span>
                            <span class="snippet-section">{{ snippet.section }}</span>
                            <span class="snippet-lang">{{ snippet.language || 'text' }}</span>
                        </div>
                        <div class="snippet-actions">
                            <button class="copy-btn" @click="copySnippet(index, $event)">
                                📋 Copy
                            </button>
                            <button class="download-btn" @click="downloadSnippet(index)">
                                ⬇️ Download
                            </button>
                        </div>
                    </div>
                    <div class="snippet-content">
                        <pre><code>{{ snippet.content }}</code></pre>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const snippets = ref([])
const searchQuery = ref('')
const chapterFilter = ref('')
const langFilter = ref('')
const loading = ref(true)
const loadError = ref(false)

const chapters = computed(() => {
    return [...new Set(snippets.value.map(s => s.chapter))].sort()
})

const languages = computed(() => {
    return [...new Set(snippets.value.map(s => s.language))].filter(Boolean).sort()
})

const filteredSnippets = computed(() => {
    const search = searchQuery.value.toLowerCase()
    const chapter = chapterFilter.value
    const lang = langFilter.value

    return snippets.value.filter(s => {
        const matchesSearch = !search ||
            s.content.toLowerCase().includes(search) ||
            s.section.toLowerCase().includes(search) ||
            s.chapter.toLowerCase().includes(search)
        const matchesChapter = !chapter || s.chapter === chapter
        const matchesLang = !lang || s.language === lang
        return matchesSearch && matchesChapter && matchesLang
    })
})

function formatChapter(ch) {
    return ch.replace(/-/g, ' ').replace(/^\d+\s*/, 'Chapter ')
}

function formatChapterOption(ch) {
    return ch.replace(/-/g, ' ').replace(/^\d+ /, '')
}

function getExtension(lang) {
    const map = {
        'bash': 'sh', 'shell': 'sh', 'javascript': 'js', 'typescript': 'ts',
        'tsx': 'tsx', 'jsx': 'jsx', 'python': 'py', 'json': 'json',
        'yaml': 'yaml', 'yml': 'yml', 'markdown': 'md', 'md': 'md',
        'html': 'html', 'css': 'css', 'sql': 'sql'
    }
    return map[lang] || lang || 'txt'
}

function copySnippet(index, event) {
    const snippet = filteredSnippets.value[index]
    const btn = event.currentTarget
    navigator.clipboard.writeText(snippet.content).then(() => {
        btn.textContent = '✓ Copied!'
        setTimeout(() => { btn.innerHTML = '📋 Copy' }, 2000)
    })
}

function downloadSnippet(index) {
    const snippet = filteredSnippets.value[index]
    const ext = getExtension(snippet.language)
    const filename = `${snippet.section.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.${ext}`

    const blob = new Blob([snippet.content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
}

async function loadSnippets() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/kbarkhausen/augmented-architect-book/master/snippets.json')
        snippets.value = await response.json()
    } catch (error) {
        console.error('Error loading snippets:', error)
        loadError.value = true
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    loadSnippets()
})
</script>

<style scoped>
.snippets-hero {
    padding: 160px 0 40px;
    background: linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
}

.snippets-hero h1 {
    margin-bottom: var(--space-md);
}

.search-section {
    padding: var(--space-xl) 0;
    background: var(--color-bg-elevated);
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 60px;
    z-index: 100;
}

.search-container {
    display: flex;
    gap: var(--space-md);
    max-width: 800px;
    margin: 0 auto;
}

.search-input {
    flex: 1;
    padding: var(--space-md) var(--space-lg);
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    color: var(--color-text);
    font-size: 1rem;
}

.search-input:focus {
    outline: none;
    border-color: var(--color-primary);
}

.filter-select {
    padding: var(--space-md) var(--space-lg);
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    color: var(--color-text);
    font-size: 1rem;
    cursor: pointer;
}

.snippets-grid {
    padding: var(--space-3xl) 0;
}

.snippets-count {
    text-align: center;
    margin-bottom: var(--space-2xl);
    color: var(--color-text-muted);
}

.snippet-card {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    margin-bottom: var(--space-lg);
    overflow: hidden;
    transition: all var(--transition-base);
}

.snippet-card:hover {
    border-color: var(--color-primary);
}

.snippet-header {
    padding: var(--space-lg);
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-md);
}

.snippet-meta {
    display: flex;
    align-items: center;
    gap: var(--space-md);
}

.snippet-chapter {
    font-size: 0.875rem;
    color: var(--color-primary-light);
}

.snippet-section {
    font-size: 0.875rem;
    color: var(--color-text-muted);
}

.snippet-lang {
    padding: var(--space-xs) var(--space-sm);
    background: var(--color-bg-hover);
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    font-family: var(--font-mono);
    color: var(--color-text-muted);
}

.snippet-actions {
    display: flex;
    gap: var(--space-sm);
}

.copy-btn, .download-btn {
    padding: var(--space-sm) var(--space-md);
    background: var(--color-bg-hover);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    color: var(--color-text-muted);
    font-size: 0.875rem;
    cursor: pointer;
    transition: all var(--transition-fast);
    display: flex;
    align-items: center;
    gap: var(--space-xs);
}

.copy-btn:hover, .download-btn:hover {
    background: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
}

.snippet-content {
    padding: var(--space-lg);
    overflow-x: auto;
    max-height: 400px;
    overflow-y: auto;
}

.snippet-content pre {
    font-family: var(--font-mono);
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--color-text-muted);
    margin: 0;
    white-space: pre-wrap;
    word-break: break-word;
}

.no-results {
    text-align: center;
    padding: var(--space-4xl);
    color: var(--color-text-muted);
}

.no-results h3 {
    margin-bottom: var(--space-md);
}

.github-banner {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    padding: var(--space-xl);
    margin-bottom: var(--space-3xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--space-lg);
}

.github-banner-text h3 {
    margin-bottom: var(--space-sm);
}

.github-banner-text p {
    font-size: 0.875rem;
}

.loading {
    text-align: center;
    padding: var(--space-4xl);
}

.loading-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid var(--color-border);
    border-top-color: var(--color-primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto var(--space-lg);
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
    .search-container {
        flex-direction: column;
    }

    .snippet-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .github-banner {
        flex-direction: column;
        text-align: center;
    }
}
</style>
