// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Remove active state from all links
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                // Add active state to clicked link
                if (this.classList.contains('nav-link')) {
                    this.classList.add('active');
                }
            }
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// CTA Button Click Handler
document.querySelectorAll('.cta-button, .btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        console.log('CTA clicked - Navigate to contact/demo page');
        // You can add a modal or navigate to a contact page
        showConnectModal();
    });
});

// Contact Modal
function showConnectModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <h2>Let's Connect</h2>
            <p>Get in touch with our team to discuss how CogniverseAI can transform your business.</p>
            <form class="contact-form">
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <input type="tel" placeholder="Phone Number">
                <textarea placeholder="Tell us about your AI needs..." rows="4"></textarea>
                <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal
    modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
    
    // Form submission
    modal.querySelector('.contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your interest! Our team will be in touch soon.');
        modal.remove();
    });
}

// Add modal styles dynamically
const style = document.createElement('style');
style.textContent = `
    .modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .modal-content {
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        padding: 2rem;
        max-width: 500px;
        width: 90%;
        position: relative;
        animation: slideUp 0.3s ease-out;
    }

    @keyframes slideUp {
        from {
            transform: translateY(40px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .modal-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        color: var(--text-secondary);
        font-size: 2rem;
        cursor: pointer;
        transition: color 0.3s ease;
    }

    .modal-close:hover {
        color: var(--primary-color);
    }

    .modal-content h2 {
        color: var(--primary-color);
        margin-bottom: 0.5rem;
    }

    .modal-content p {
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
    }

    .contact-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .contact-form input,
    .contact-form textarea {
        padding: 0.75rem;
        background: var(--bg-dark);
        border: 1px solid var(--border-color);
        border-radius: 6px;
        color: var(--text-primary);
        font-family: inherit;
        transition: border-color 0.3s ease;
    }

    .contact-form input:focus,
    .contact-form textarea:focus {
        outline: none;
        border-color: var(--primary-color);
    }

    .contact-form button {
        margin-top: 0.5rem;
    }

    .nav-link.active {
        color: var(--primary-color);
    }
`;
document.head.appendChild(style);

// Intersection Observer for fade-in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards
document.querySelectorAll('.service-card, .solution-card, .industry-card, .success-card, .resource-card').forEach(card => {
    card.style.opacity = '0';
    card.style.animationDelay = `${Math.random() * 0.3}s`;
    observer.observe(card);
});

// Handle resource buttons
document.querySelectorAll('.resource-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const resourceType = this.parentElement.querySelector('.resource-type').textContent;
        const resourceTitle = this.parentElement.querySelector('h3').textContent;
        alert(`Downloading/Opening: ${resourceTitle}\n\n${resourceType}`);
    });
});

// Dynamic year in footer
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-bottom p');
    if (footerText) {
        footerText.textContent = `© ${currentYear} CogniverseAI. All rights reserved.`;
    }
});

// Add scroll indicator
window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.style.width = scrollPercent + '%';
    }
});

// Log analytics (placeholder for tracking)
function logEvent(eventName, eventData = {}) {
    console.log(`Event: ${eventName}`, eventData);
    // In production, this would send to analytics service
}

// Track button clicks
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        logEvent('button_click', {
            buttonText: btn.textContent,
            timestamp: new Date().toISOString()
        });
    });
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down - hide navbar
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up - show navbar
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Add transition to navbar
navbar.style.transition = 'transform 0.3s ease-out';

console.log('CogniverseAI website initialized successfully!');
