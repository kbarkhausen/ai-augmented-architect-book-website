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

const routes = [
  { path: '/', component: HomePage },
  { path: '/book', alias: '/features', component: FeaturesPage },
  { path: '/companion', alias: '/journey', component: JourneyPage },
  { path: '/examples', alias: '/snippets', component: SnippetsPage },
  { path: '/worksheets', alias: '/cheatsheet', component: CheatsheetPage },
  { path: '/labs', alias: '/resources', component: ResourcesPage },
  { path: '/author', component: AuthorPage },
  { path: '/buy', component: BuyPage },
  { path: '/errata', component: ErrataPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
