// Hero Carousel
let currentHeroSlide = 0;
const heroTrack = document.getElementById('heroTrack');
const heroSlides = document.querySelectorAll('.carousel-slide');
const heroDotsContainer = document.getElementById('heroDots');

// Create dots for hero carousel
heroSlides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToHeroSlide(index));
    heroDotsContainer.appendChild(dot);
});

function moveHeroSlide(direction) {
    currentHeroSlide += direction;
    if (currentHeroSlide < 0) {
        currentHeroSlide = heroSlides.length - 1;
    } else if (currentHeroSlide >= heroSlides.length) {
        currentHeroSlide = 0;
    }
    updateHeroCarousel();
}

function goToHeroSlide(index) {
    currentHeroSlide = index;
    updateHeroCarousel();
}

function updateHeroCarousel() {
    // Update slides
    heroSlides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentHeroSlide) {
            slide.classList.add('active');
        }
    });
    
    // Update dots
    const dots = heroDotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentHeroSlide) {
            dot.classList.add('active');
        }
    });
    
    // Move track
    heroTrack.style.transform = `translateX(-${currentHeroSlide * 100}%)`;
}

// Auto-play hero carousel
let heroAutoPlay = setInterval(() => {
    moveHeroSlide(1);
}, 5000);

// Pause on hover
heroTrack.addEventListener('mouseenter', () => {
    clearInterval(heroAutoPlay);
});

heroTrack.addEventListener('mouseleave', () => {
    heroAutoPlay = setInterval(() => {
        moveHeroSlide(1);
    }, 5000);
});

// Products Carousel
let currentProductSlide = 0;
const productsTrack = document.getElementById('productsTrack');
const productCards = document.querySelectorAll('.product-card');

function moveProductSlide(direction) {
    const cardsToShow = getCardsToShow();
    const maxSlide = Math.ceil(productCards.length / cardsToShow) - 1;
    
    currentProductSlide += direction;
    
    if (currentProductSlide < 0) {
        currentProductSlide = maxSlide;
    } else if (currentProductSlide > maxSlide) {
        currentProductSlide = 0;
    }
    
    updateProductsCarousel();
}

function getCardsToShow() {
    if (window.innerWidth >= 1200) return 4;
    if (window.innerWidth >= 992) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
}

function updateProductsCarousel() {
    const cardWidth = productCards[0].offsetWidth;
    const gap = 30;
    const cardsToShow = getCardsToShow();
    const offset = currentProductSlide * (cardWidth + gap) * cardsToShow;
    
    productsTrack.style.transform = `translateX(-${offset}px)`;
}

// Testimonials Carousel
let currentTestimonialSlide = 0;
const testimonialsTrack = document.getElementById('testimonialsTrack');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialDotsContainer = document.getElementById('testimonialDots');

// Create dots for testimonials
testimonialCards.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToTestimonialSlide(index));
    testimonialDotsContainer.appendChild(dot);
});

function goToTestimonialSlide(index) {
    currentTestimonialSlide = index;
    updateTestimonialsCarousel();
}

function updateTestimonialsCarousel() {
    const cardWidth = testimonialCards[0].offsetWidth;
    const gap = 30;
    const offset = currentTestimonialSlide * (cardWidth + gap);
    
    testimonialsTrack.style.transform = `translateX(-${offset}px)`;
    
    // Update dots
    const dots = testimonialDotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentTestimonialSlide) {
            dot.classList.add('active');
        }
    });
}

// Auto-scroll testimonials
setInterval(() => {
    currentTestimonialSlide = (currentTestimonialSlide + 1) % testimonialCards.length;
    updateTestimonialsCarousel();
}, 6000);

// Smooth scroll for testimonials
testimonialsTrack.addEventListener('scroll', () => {
    const scrollLeft = testimonialsTrack.scrollLeft;
    const cardWidth = testimonialCards[0].offsetWidth + 30;
    const newIndex = Math.round(scrollLeft / cardWidth);
    
    if (newIndex !== currentTestimonialSlide) {
        currentTestimonialSlide = newIndex;
        const dots = testimonialDotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentTestimonialSlide) {
                dot.classList.add('active');
            }
        });
    }
});

// Wishlist functionality
const wishlistButtons = document.querySelectorAll('.wishlist-icon');
wishlistButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        btn.classList.toggle('active');
        
        // Add animation
        btn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 200);
    });
});

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.btn-block');
addToCartButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Change button text temporarily
        const originalText = btn.textContent;
        btn.textContent = 'Added! ✓';
        btn.style.background = '#4ecdc4';
        
        // Update cart badge
        const cartBadge = document.querySelector('.cart-btn .badge');
        const currentCount = parseInt(cartBadge.textContent);
        cartBadge.textContent = currentCount + 1;
        
        // Add animation to cart icon
        const cartBtn = document.querySelector('.cart-btn');
        cartBtn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartBtn.style.transform = 'scale(1)';
        }, 200);
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    });
});

// Search functionality
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', () => {
    // In a real application, this would open a search modal or redirect to search page
    alert('Search functionality would open here!');
});

// Category cards hover effect enhancement
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease';
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all product cards
productCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('.newsletter-input');
        const email = input.value;
        
        if (email) {
            alert(`Thank you for subscribing with ${email}!`);
            input.value = '';
        }
    });
}

// Responsive handling
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        updateProductsCarousel();
    }, 250);
});

// Prevent default behavior for demo links
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// Keyboard navigation for carousels
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        moveHeroSlide(-1);
    } else if (e.key === 'ArrowRight') {
        moveHeroSlide(1);
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate elements on page load
    const animateOnLoad = document.querySelectorAll('.category-card, .product-card');
    animateOnLoad.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroCarousel = document.querySelector('.hero-carousel');
    if (heroCarousel) {
        heroCarousel.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

console.log('🛍️ LUXE E-Commerce Website Loaded Successfully!');
