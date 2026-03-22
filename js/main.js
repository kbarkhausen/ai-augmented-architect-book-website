/**
 * The AI-Augmented Architect - Website JavaScript
 */

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close mobile nav when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Newsletter form handling
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        const button = newsletterForm.querySelector('button');
        
        button.textContent = 'Subscribing...';
        button.disabled = true;
        
        // Simulate API call (replace with actual endpoint)
        setTimeout(() => {
            button.textContent = 'Subscribed! ✓';
            button.style.background = '#10b981';
            newsletterForm.querySelector('input').value = '';
            
            setTimeout(() => {
                button.textContent = 'Subscribe';
                button.style.background = '';
                button.disabled = false;
            }, 3000);
        }, 1000);
    });
}

// Buy button click tracking
document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Track click event (add your analytics here)
        const type = btn.id.includes('kindle') ? 'kindle' : 'paperback';
        console.log(`Buy button clicked: ${type}`);
        
        // If button says "Coming soon", show message
        if (btn.closest('.buy-card').querySelector('.buy-note')?.textContent.includes('Coming')) {
            e.preventDefault();
            alert('This edition will be available soon! Check back in a few days.');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.feature-card, .stage, .proof-card, .audience-card, .toc-part, .resource-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
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
`;
document.head.appendChild(style);

// Console message for developers
console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🏗️ The AI-Augmented Architect                          ║
║                                                           ║
║   Looking for the code samples from the book?             ║
║   Visit: augmented-architect.ai/resources                 ║
║                                                           ║
║   Built by developers, for developers.                    ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`);
