// Products Data
const products = [
    { name: "Elegant Summer Dress", category: "Women's Fashion", price: 89.99, originalPrice: 129.99, rating: 5, reviews: 128, badge: "New", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop&q=80" },
    { name: "Classic Leather Jacket", category: "Men's Outerwear", price: 149.99, originalPrice: 249.99, rating: 4, reviews: 89, badge: "Sale", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&q=80" },
    { name: "Designer Sunglasses", category: "Accessories", price: 79.99, rating: 5, reviews: 203, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop&q=80" },
    { name: "Premium Sneakers", category: "Footwear", price: 119.99, rating: 5, reviews: 156, badge: "Hot", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop&q=80" },
    { name: "Luxury Watch", category: "Accessories", price: 299.99, rating: 4, reviews: 67, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop&q=80" },
    { name: "Silk Scarf", category: "Accessories", price: 45.99, originalPrice: 69.99, rating: 5, reviews: 92, badge: "Sale", image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop&q=80" },
    { name: "Wool Coat", category: "Women's Fashion", price: 199.99, rating: 5, reviews: 145, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop&q=80" },
    { name: "Denim Jeans", category: "Men's Fashion", price: 79.99, originalPrice: 99.99, rating: 4, reviews: 234, image: "https://images.unsplash.com/photo-1542272454315-7f6c6d3e3a85?w=400&h=500&fit=crop&q=80" },
    { name: "Leather Handbag", category: "Accessories", price: 159.99, rating: 5, reviews: 187, badge: "New", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop&q=80" },
    { name: "Cotton T-Shirt", category: "Men's Fashion", price: 29.99, rating: 5, reviews: 312, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&q=80" }
];

// Testimonials Data
const testimonials = [
    { text: "Absolutely love my purchase! The quality is outstanding and the delivery was super fast. Will definitely shop here again.", author: "Sarah Johnson", role: "Verified Buyer", rating: 5 },
    { text: "Best online shopping experience I've had. The customer service is exceptional and the products are exactly as described.", author: "Michael Chen", role: "Verified Buyer", rating: 5 },
    { text: "I'm impressed with the attention to detail and the beautiful packaging. Makes every purchase feel special!", author: "Emma Williams", role: "Verified Buyer", rating: 5 },
    { text: "The quality exceeded my expectations. I've recommended this store to all my friends and family!", author: "David Martinez", role: "Verified Buyer", rating: 5 },
    { text: "Fast shipping, great prices, and amazing customer support. What more could you ask for?", author: "Lisa Anderson", role: "Verified Buyer", rating: 5 },
    { text: "Every item I've purchased has been perfect. The attention to quality is evident in everything they sell.", author: "James Taylor", role: "Verified Buyer", rating: 5 },
    { text: "I love how easy it is to navigate the website and find exactly what I'm looking for. Great user experience!", author: "Rachel Kim", role: "Verified Buyer", rating: 5 },
    { text: "The returns process is hassle-free and the customer service team is always helpful and friendly.", author: "Thomas Brown", role: "Verified Buyer", rating: 5 },
    { text: "I've been a customer for over a year now and I've never been disappointed. Consistent quality every time!", author: "Amanda White", role: "Verified Buyer", rating: 5 },
    { text: "The product descriptions are accurate and the photos represent the items perfectly. No surprises!", author: "Christopher Lee", role: "Verified Buyer", rating: 5 }
];

// Generate Products
function generateProducts() {
    const productsTrack = document.getElementById('productsTrack');
    products.forEach(product => {
        const stars = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
        const badgeHTML = product.badge ? `<div class="product-badge ${product.badge.toLowerCase()}">${product.badge}</div>` : '';
        const originalPriceHTML = product.originalPrice ? `<span class="price-original">$${product.originalPrice}</span>` : '';
        
        const productCard = `
            <div class="product-card">
                ${badgeHTML}
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <button class="wishlist-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                    <div class="quick-view">
                        <button class="btn btn-secondary btn-small">Quick View</button>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-rating">
                        <span class="stars">${stars}</span>
                        <span class="rating-count">(${product.reviews})</span>
                    </div>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-category">${product.category}</p>
                    <div class="product-price">
                        <span class="price-current">$${product.price}</span>
                        ${originalPriceHTML}
                    </div>
                    <button class="btn btn-primary btn-block add-to-cart">Add to Cart</button>
                </div>
            </div>
        `;
        productsTrack.innerHTML += productCard;
    });
}

// Generate Testimonials with Infinite Scroll
function generateTestimonials() {
    const testimonialsTrack = document.getElementById('testimonialsTrack');
    
    // Create testimonials 3 times for seamless infinite scroll
    for (let i = 0; i < 3; i++) {
        testimonials.forEach(testimonial => {
            const stars = '★'.repeat(testimonial.rating);
            const testimonialCard = `
                <div class="testimonial-card">
                    <div class="testimonial-rating">${stars}</div>
                    <p class="testimonial-text">"${testimonial.text}"</p>
                    <div class="testimonial-author">
                        <div class="author-avatar"></div>
                        <div class="author-info">
                            <h4>${testimonial.author}</h4>
                            <p>${testimonial.role}</p>
                        </div>
                    </div>
                </div>
            `;
            testimonialsTrack.innerHTML += testimonialCard;
        });
    }
}

// Initialize Products and Testimonials
document.addEventListener('DOMContentLoaded', function() {
    generateProducts();
    generateTestimonials();
    initializeCarousels();
    initializeNavigation();
    initializeInteractions();
});

// Hero Carousel
let currentHeroSlide = 0;
const heroTrack = document.getElementById('heroTrack');
const heroSlides = document.querySelectorAll('.carousel-slide');
const heroDotsContainer = document.getElementById('heroDots');

function initializeCarousels() {
    // Create dots for hero carousel
    heroSlides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToHeroSlide(index));
        heroDotsContainer.appendChild(dot);
    });
    
    // Auto-play hero carousel
    setInterval(() => {
        moveHeroSlide(1);
    }, 5000);
    
    // Initialize products carousel drag
    initializeProductsDrag();
}

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

// Products Carousel with Drag
function initializeProductsDrag() {
    const productsCarousel = document.getElementById('productsCarousel');
    const productsTrack = document.getElementById('productsTrack');
    let isDown = false;
    let startX;
    let scrollLeft;

    productsTrack.addEventListener('mousedown', (e) => {
        isDown = true;
        productsTrack.style.cursor = 'grabbing';
        startX = e.pageX - productsCarousel.offsetLeft;
        scrollLeft = productsCarousel.scrollLeft;
    });

    productsTrack.addEventListener('mouseleave', () => {
        isDown = false;
        productsTrack.style.cursor = 'grab';
    });

    productsTrack.addEventListener('mouseup', () => {
        isDown = false;
        productsTrack.style.cursor = 'grab';
    });

    productsTrack.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - productsCarousel.offsetLeft;
        const walk = (x - startX) * 2;
        productsCarousel.scrollLeft = scrollLeft - walk;
    });
}

function scrollProducts(direction) {
    const productsCarousel = document.getElementById('productsCarousel');
    const scrollAmount = 350;
    
    if (direction === 'left') {
        productsCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        productsCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

// Navigation
function initializeNavigation() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Smooth scroll and active link handling
    navLinkItems.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinkItems.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Close mobile menu if open
                navLinks.classList.remove('active');
                
                // Smooth scroll to section
                const headerOffset = 80;
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Interactive Features
function initializeInteractions() {
    // Search Modal
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    
    searchBtn.addEventListener('click', () => {
        searchModal.classList.add('active');
        setTimeout(() => searchInput.focus(), 100);
    });
    
    searchClose.addEventListener('click', () => {
        searchModal.classList.remove('active');
    });
    
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
        }
    });
    
    // Escape key to close search
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
            searchModal.classList.remove('active');
        }
    });
    
    // Wishlist functionality
    document.addEventListener('click', (e) => {
        if (e.target.closest('.wishlist-icon')) {
            const btn = e.target.closest('.wishlist-icon');
            btn.classList.toggle('active');
            
            const wishlistBadge = document.querySelector('.wishlist-btn .badge');
            const currentCount = parseInt(wishlistBadge.textContent);
            
            if (btn.classList.contains('active')) {
                wishlistBadge.textContent = currentCount + 1;
                btn.style.background = '#ff6b6b';
                btn.style.color = '#fff';
            } else {
                wishlistBadge.textContent = Math.max(0, currentCount - 1);
                btn.style.background = '';
                btn.style.color = '';
            }
        }
    });
    
    // Add to cart functionality
    document.addEventListener('click', (e) => {
        if (e.target.closest('.add-to-cart')) {
            const btn = e.target.closest('.add-to-cart');
            const originalText = btn.textContent;
            
            btn.textContent = 'Added! ✓';
            btn.style.background = '#4ecdc4';
            
            // Update cart badge
            const cartBadge = document.querySelector('.cart-btn .badge');
            const currentCount = parseInt(cartBadge.textContent);
            cartBadge.textContent = currentCount + 1;
            
            // Animate cart icon
            const cartBtn = document.querySelector('.cart-btn');
            cartBtn.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartBtn.style.transform = 'scale(1)';
            }, 200);
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
            }, 2000);
        }
    });
    
    // Newsletter subscription
    const subscribeBtn = document.getElementById('subscribeBtn');
    const newsletterEmail = document.getElementById('newsletterEmail');
    
    subscribeBtn.addEventListener('click', () => {
        const email = newsletterEmail.value.trim();
        if (email && email.includes('@')) {
            alert(`Thank you for subscribing with ${email}!`);
            newsletterEmail.value = '';
        } else {
            alert('Please enter a valid email address');
        }
    });
    
    // Smooth reveal animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe category cards
    document.querySelectorAll('.category-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Keyboard navigation for hero carousel
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        moveHeroSlide(-1);
    } else if (e.key === 'ArrowRight') {
        moveHeroSlide(1);
    }
});

// Make window functions accessible
window.moveHeroSlide = moveHeroSlide;
window.scrollProducts = scrollProducts;

console.log('🛍️ LUXE E-Commerce Website Loaded Successfully!');