<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/images/site-logo.jpg" alt="The AI-Augmented Architect logo" class="logo-img">
            <span class="logo-text">The AI-Augmented Architect</span>
          </div>
          <p>The official website for the book, with launch details, book information, and release updates.</p>
        </div>

        <div class="footer-links">
          <div class="footer-column">
            <h4>Book</h4>
            <router-link to="/book">Book overview</router-link>
            <router-link to="/buy">Get the book</router-link>
            <router-link to="/errata">Errata</router-link>
          </div>
          <div class="footer-column">
            <h4>Explore</h4>
            <router-link to="/">Home</router-link>
            <router-link to="/author">About Klaus</router-link>
            <router-link to="/buy">June 2026 release</router-link>
          </div>
          <div class="footer-column">
            <h4>Connect</h4>
            <router-link to="/author">About Klaus</router-link>
            <a href="mailto:klaus@barkhausen.us?subject=The%20AI-Augmented%20Architect">Contact</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ year }} Klaus Barkhausen. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
