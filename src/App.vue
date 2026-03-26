<template>
  <NavBar />
  <router-view />
  <SiteFooter />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<style>
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.nav-links.active {
  display: flex !important;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  flex-direction: column;
  padding: 1rem;
  background: rgba(15, 15, 19, 0.98);
  border-bottom: 1px solid #27272a;
}

.nav-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.nav-toggle.active span:nth-child(2) {
  opacity: 0;
}

.nav-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.nav.scrolled {
  background: rgba(15, 15, 19, 0.95);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
}
</style>
