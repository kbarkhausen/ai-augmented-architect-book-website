<template>
  <!-- Hero -->
  <header class="buy-hero">
    <div class="container">
      <h1>Get Your Copy</h1>
      <p>The AI Augmented Architect is available in digital and print formats.</p>
    </div>
  </header>

  <!-- Buy Options -->
  <section class="buy-section">
    <div class="container">
      <div class="buy-content">
        <p class="buy-subtitle">Available in digital formats</p>

        <div class="buy-options">
          <div class="buy-card featured">
            <div class="buy-badge">Most Popular</div>
            <div class="buy-icon">📱</div>
            <h3>Kindle Edition</h3>
            <div class="buy-price">
              <span class="price">$29.99</span>
            </div>
            <ul class="buy-features">
              <li>✓ Instant delivery</li>
              <li>✓ Read on any device</li>
              <li>✓ Searchable text</li>
              <li>✓ Free updates</li>
            </ul>
            <a href="#" class="btn btn-primary btn-lg buy-btn">
              Buy on Amazon Kindle
            </a>
            <p class="buy-note">Coming this week</p>
          </div>

          <div class="buy-card">
            <div class="buy-icon">📖</div>
            <h3>Paperback</h3>
            <div class="buy-price">
              <span class="price">$49.99</span>
            </div>
            <ul class="buy-features">
              <li>✓ Physical book</li>
              <li>✓ Premium printing</li>
              <li>✓ Great for reference</li>
              <li>✓ Ships worldwide</li>
            </ul>
            <a href="#" class="btn btn-secondary btn-lg buy-btn">
              Buy Paperback
            </a>
            <p class="buy-note">Coming soon</p>
          </div>
        </div>

        <div class="buy-guarantee">
          <div class="guarantee-icon">🛡️</div>
          <p>
            <strong>100% Satisfaction Guarantee</strong><br>
            Not satisfied? Amazon offers easy returns within 7 days.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.buy-hero {
    padding: 160px 0 40px;
    background: linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
}

.buy-hero h1 {
    margin-bottom: var(--space-md);
}

.buy-section {
    padding: var(--space-3xl) 0;
}

.buy-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.buy-subtitle {
    color: var(--color-text-muted);
    margin-bottom: var(--space-xl);
}

.buy-options {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-xl);
    margin-bottom: var(--space-xl);
}

.buy-card {
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-xl);
    position: relative;
    text-align: center;
}

.buy-card.featured {
    border-color: var(--color-primary);
    box-shadow: 0 0 30px rgba(99, 102, 241, 0.15);
}

.buy-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    color: white;
    padding: var(--space-xs) var(--space-md);
    border-radius: var(--radius-full);
    font-size: 0.8rem;
    font-weight: 600;
    white-space: nowrap;
}

.buy-icon {
    font-size: 3rem;
    margin-bottom: var(--space-md);
}

.buy-card h3 {
    font-size: 1.25rem;
    margin-bottom: var(--space-md);
}

.buy-price {
    margin-bottom: var(--space-lg);
}

.buy-price .price {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.buy-features {
    list-style: none;
    padding: 0;
    margin-bottom: var(--space-lg);
    text-align: left;
}

.buy-features li {
    padding: var(--space-xs) 0;
    color: var(--color-text-secondary);
}

.buy-card .btn {
    display: inline-block;
    width: 100%;
    padding: var(--space-md);
    border-radius: var(--radius-md);
    font-weight: 600;
    text-decoration: none;
    transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.buy-card .btn:hover {
    transform: translateY(-2px);
}

.buy-card .btn-primary {
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    color: white;
}

.buy-card .btn-primary:hover {
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}

.buy-card .btn-secondary {
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    color: var(--color-text);
}

.buy-card .btn-secondary:hover {
    border-color: var(--color-primary);
}

.buy-note {
    margin-top: var(--space-sm);
    font-size: 0.85rem;
    color: var(--color-text-muted);
}

.buy-guarantee {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-md);
    padding: var(--space-lg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    background: var(--color-bg-secondary);
}

.guarantee-icon {
    font-size: 2rem;
    flex-shrink: 0;
}

.buy-guarantee p {
    text-align: left;
    color: var(--color-text-secondary);
    line-height: 1.6;
}

@media (max-width: 768px) {
    .buy-options {
        grid-template-columns: 1fr;
    }
}
</style>
