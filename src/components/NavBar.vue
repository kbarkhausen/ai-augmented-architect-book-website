<template>
  <nav class="nav" :class="{ scrolled }">
    <div class="nav-container">
      <router-link to="/" class="nav-logo">
        <img src="/images/book-logo.png" alt="Logo" class="logo-img">
        <span class="logo-text">AI Augmented Architect</span>
      </router-link>
      <div class="nav-links" :class="{ active: menuOpen }">
        <router-link to="/features" @click="closeMenu">What's Inside</router-link>
        <router-link to="/journey" @click="closeMenu">Your Journey</router-link>
        <router-link to="/snippets" @click="closeMenu">Code Snippets</router-link>
        <router-link to="/cheatsheet" @click="closeMenu">Cheat Sheet</router-link>
        <router-link to="/resources" @click="closeMenu">Resources</router-link>
        <router-link to="/author" @click="closeMenu">About the Author</router-link>
        <router-link to="/buy" class="nav-cta" @click="closeMenu">Get the Book</router-link>
      </div>
      <button class="nav-toggle" :class="{ active: menuOpen }" aria-label="Toggle menu" @click="menuOpen = !menuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const scrolled = ref(false)

function closeMenu() {
  menuOpen.value = false
}

function onScroll() {
  scrolled.value = window.pageYOffset > 100
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
