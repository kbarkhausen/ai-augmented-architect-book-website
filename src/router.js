import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import FeaturesPage from './pages/FeaturesPage.vue'
import JourneyPage from './pages/JourneyPage.vue'
import SnippetsPage from './pages/SnippetsPage.vue'
import CheatsheetPage from './pages/CheatsheetPage.vue'
import ResourcesPage from './pages/ResourcesPage.vue'
import AuthorPage from './pages/AuthorPage.vue'
import BuyPage from './pages/BuyPage.vue'
import ErrataPage from './pages/ErrataPage.vue'

const SITE_URL = 'https://augmented-architect.ai'
const DEFAULT_TITLE = 'The AI-Augmented Architect | Companion site for architecture, modernization, and AI delivery'
const DEFAULT_DESCRIPTION = 'The AI-Augmented Architect is a book and companion site for architects, technology leaders, and program managers working on AI-augmented delivery, legacy modernization, governance, and enterprise software design.'

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: {
      title: 'The AI-Augmented Architect | Book companion, worksheets, examples, and labs',
      description:
        'Explore The AI-Augmented Architect, a practical architecture book and companion site with examples, worksheets, forms, labs, and guidance for AI-augmented delivery.',
    },
  },
  {
    path: '/book',
    alias: '/features',
    component: FeaturesPage,
    meta: {
      title: 'The Book | The AI-Augmented Architect',
      description:
        'See the structure, promise, and six-part table of contents for The AI-Augmented Architect, covering delegation, verification, legacy modernization, governance, and economics.',
    },
  },
  {
    path: '/companion',
    alias: '/journey',
    component: JourneyPage,
    meta: {
      title: 'The Companion | The AI-Augmented Architect',
      description:
        'Use the companion map for The AI-Augmented Architect to connect chapters to examples, worksheets, forms, labs, and practical team exercises.',
    },
  },
  {
    path: '/examples',
    alias: '/snippets',
    component: SnippetsPage,
    meta: {
      title: 'Examples | The AI-Augmented Architect',
      description:
        'Review architecture examples aligned to The AI-Augmented Architect, including delegation scorecards, boundary packs, observability maps, and modernization artifacts.',
    },
  },
  {
    path: '/worksheets',
    alias: '/cheatsheet',
    component: CheatsheetPage,
    meta: {
      title: 'Worksheets and Forms | The AI-Augmented Architect',
      description:
        'Copy practical worksheets and forms for AI mandates, delegation decisions, system legibility, contracts, observability, governance, and build-buy-modernize decisions.',
    },
  },
  {
    path: '/labs',
    alias: '/resources',
    component: ResourcesPage,
    meta: {
      title: 'Labs | The AI-Augmented Architect',
      description:
        'Run team labs from The AI-Augmented Architect for modernization planning, operability reviews, delegation decisions, governance, and economics discussions.',
    },
  },
  {
    path: '/author',
    component: AuthorPage,
    meta: {
      title: 'About Klaus Barkhausen | The AI-Augmented Architect',
      description:
        'Learn about Klaus Barkhausen, the author of The AI-Augmented Architect, and his work in enterprise architecture, modernization, AI transformation, and software delivery.',
    },
  },
  {
    path: '/buy',
    component: BuyPage,
    meta: {
      title: 'Get the Book | The AI-Augmented Architect',
      description:
        'Learn how The AI-Augmented Architect is positioned for its June 2026 release, why it stands out, and how to request launch updates, review copies, or workshop information.',
    },
  },
  {
    path: '/errata',
    component: ErrataPage,
    meta: {
      title: 'Errata | The AI-Augmented Architect',
      description:
        'Track corrections, clarifications, and edition notes for The AI-Augmented Architect.',
    },
  },
]

function upsertMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, selector.match(/"([^"]+)"/)?.[1] ?? '')
    document.head.appendChild(element)
  }
  element.setAttribute('content', value)
}

function upsertCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]')
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }
  element.setAttribute('href', url)
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = to.meta?.title ?? DEFAULT_TITLE
  const description = to.meta?.description ?? DEFAULT_DESCRIPTION
  const canonicalUrl = new URL(to.fullPath, SITE_URL).toString()

  document.title = title
  upsertMeta('meta[name="description"]', 'name', description)
  upsertMeta('meta[name="twitter:title"]', 'name', title)
  upsertMeta('meta[name="twitter:description"]', 'name', description)
  upsertMeta('meta[property="og:title"]', 'property', title)
  upsertMeta('meta[property="og:description"]', 'property', description)
  upsertMeta('meta[property="og:url"]', 'property', canonicalUrl)
  upsertCanonical(canonicalUrl)
})

export default router
