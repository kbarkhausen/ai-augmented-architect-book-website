<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/images/book-logo.png" alt="Logo" class="logo-img">
            <span class="logo-text">AI Augmented Architect</span>
          </div>
          <p>The definitive guide to AI-augmented development.</p>
        </div>

        <div class="footer-links">
          <div class="footer-column">
            <h4>Book</h4>
            <router-link to="/features">What's Inside</router-link>
            <router-link to="/journey">Your Journey</router-link>
            <router-link to="/buy">Buy Now</router-link>
          </div>
          <div class="footer-column">
            <h4>Resources</h4>
            <router-link to="/snippets">Code Snippets</router-link>
            <router-link to="/cheatsheet">Cheat Sheet</router-link>
            <router-link to="/resources">Videos &amp; Changelog</router-link>
            <a href="https://github.com/kbarkhausen/augmented-architect-book" target="_blank">GitHub Repo</a>
            <router-link to="/errata">Errata</router-link>
          </div>
          <div class="footer-column">
            <h4>Connect</h4>
            <a href="https://5starstechnology.com" target="_blank" rel="noopener">5 Stars Technology</a>
            <a href="mailto:klaus@barkhausen.us">Contact</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ year }} Klaus Barkhausen. All rights reserved.</p>
        <p>Published by 5 Stars Technology</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
