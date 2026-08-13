/* ============================================
   FINISHER – Premium Watch Accessories
   JavaScript
   ============================================ */

/**
 * Newsletter form submission handler
 * This is a prototype – in production, this would submit to a backend service
 */
function handleNewsletterSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value;

    // Simple email validation
    if (!email || !email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    // Prototype feedback
    const button = form.querySelector('button');
    const originalText = button.textContent;

    button.textContent = '✓ Subscribed';
    button.disabled = true;
    button.style.opacity = '0.7';

    // Reset after 3 seconds
    setTimeout(() => {
        emailInput.value = '';
        button.textContent = originalText;
        button.disabled = false;
        button.style.opacity = '1';
    }, 3000);

    console.log('Newsletter signup (prototype):', email);
}

/**
 * Smooth scroll enhancement
 * The browser's native smooth-scroll CSS handles most of this,
 * but we can add additional polish here if needed.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu smoothing (if we had a hamburger menu)
    // This is left here for future enhancement

    // Intersection Observer for lazy animations (optional enhancement)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply observer to product cards for subtle fade-in on scroll
    const cards = document.querySelectorAll('.product-card, .category-card, .trust-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

/**
 * Analytics placeholder
 * In production, integrate with your analytics service here
 */
function trackEvent(eventName, eventData) {
    console.log('Event:', eventName, eventData);
    // Send to analytics service
}

// Track navigation clicks (prototype)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function() {
        const target = this.getAttribute('href');
        trackEvent('navigation_click', { target: target });
    });
});
