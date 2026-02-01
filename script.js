// Products Data
const products = [
    { id: 1, name: "Elegant Summer Dress", category: "Women's Fashion", price: 89.99, originalPrice: 129.99, rating: 5, reviews: 128, badge: "New", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop&q=80" },
    { id: 2, name: "Classic Leather Jacket", category: "Men's Outerwear", price: 149.99, originalPrice: 249.99, rating: 4, reviews: 89, badge: "Sale", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&q=80" },
    { id: 3, name: "Designer Sunglasses", category: "Accessories", price: 79.99, rating: 5, reviews: 203, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop&q=80" },
    { id: 4, name: "Premium Sneakers", category: "Footwear", price: 119.99, rating: 5, reviews: 156, badge: "Hot", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop&q=80" },
    { id: 5, name: "Luxury Watch", category: "Accessories", price: 299.99, rating: 4, reviews: 67, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop&q=80" },
    { id: 6, name: "Silk Scarf", category: "Accessories", price: 45.99, originalPrice: 69.99, rating: 5, reviews: 92, badge: "Sale", image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop&q=80" },
    { id: 7, name: "Wool Coat", category: "Women's Fashion", price: 199.99, rating: 5, reviews: 145, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop&q=80" },
    { id: 8, name: "Denim Jeans", category: "Men's Fashion", price: 79.99, originalPrice: 99.99, rating: 4, reviews: 234, image: "https://images.unsplash.com/photo-1542272454315-7f6c6d3e3a85?w=400&h=500&fit=crop&q=80" },
    { id: 9, name: "Leather Handbag", category: "Accessories", price: 159.99, rating: 5, reviews: 187, badge: "New", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop&q=80" },
    { id: 10, name: "Cotton T-Shirt", category: "Men's Fashion", price: 29.99, rating: 5, reviews: 312, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&q=80" }
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

// LocalStorage utilities
const storage = {
    get: (key) => JSON.parse(localStorage.getItem(key)) || [],
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value))
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    generateProducts();
    generateTestimonials();
    initializeCarousels();
    initializeNavigation();
    initializeInteractions();
    updateBadges();
});

// Generate Products
function generateProducts() {
    const productsTrack = document.getElementById('productsTrack');
    products.forEach(product => {
        const stars = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
        const badgeHTML = product.badge ? `<div class="product-badge ${product.badge.toLowerCase()}">${product.badge}</div>` : '';
        const originalPriceHTML = product.originalPrice ? `<span class="price-original">$${product.originalPrice}</span>` : '';
        
        const wishlist = storage.get('wishlist');
        const isLiked = wishlist.some(item => item.id === product.id);
        
        const productCard = `
            <div class="product-card" data-id="${product.id}">
                ${badgeHTML}
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <button class="wishlist-icon ${isLiked ? 'liked' : ''}" data-id="${product.id}">
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
                    <button class="btn btn-primary btn-block add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        productsTrack.innerHTML += productCard;
    });
}

// Generate Testimonials
function generateTestimonials() {
    const testimonialsTrack = document.getElementById('testimonialsTrack');
    
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

// Hero Carousel
let currentHeroSlide = 0;
let heroAutoPlayInterval;
let isUserInteracting = false;
const heroTrack = document.getElementById('heroTrack');
const heroSlides = document.querySelectorAll('.carousel-slide');
const heroDotsContainer = document.getElementById('heroDots');

function initializeCarousels() {
    // Create dots
    heroSlides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            stopHeroAutoPlay();
            goToHeroSlide(index);
            resumeHeroAutoPlay();
        });
        heroDotsContainer.appendChild(dot);
    });
    
    // Start auto-play
    startHeroAutoPlay();
}

function startHeroAutoPlay() {
    heroAutoPlayInterval = setInterval(() => {
        if (!isUserInteracting) {
            moveHeroSlide(1);
        }
    }, 5000);
}

function stopHeroAutoPlay() {
    clearInterval(heroAutoPlayInterval);
    isUserInteracting = true;
}

function resumeHeroAutoPlay() {
    setTimeout(() => {
        isUserInteracting = false;
        startHeroAutoPlay();
    }, 10000); // Resume after 10 seconds of no interaction
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
    heroSlides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentHeroSlide) {
            slide.classList.add('active');
        }
    });
    
    const dots = heroDotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentHeroSlide) {
            dot.classList.add('active');
        }
    });
    
    heroTrack.style.transform = `translateX(-${currentHeroSlide * 100}%)`;
}

// Add click event to carousel buttons
document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
    stopHeroAutoPlay();
    moveHeroSlide(-1);
    resumeHeroAutoPlay();
});

document.querySelector('.carousel-btn.next').addEventListener('click', () => {
    stopHeroAutoPlay();
    moveHeroSlide(1);
    resumeHeroAutoPlay();
});

// Products Carousel Scroll
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
    
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    navLinkItems.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinkItems.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                navLinks.classList.remove('active');
                
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
    const searchResults = document.getElementById('searchResults');
    
    searchBtn.addEventListener('click', () => {
        searchModal.classList.add('active');
        setTimeout(() => searchInput.focus(), 100);
    });
    
    searchClose.addEventListener('click', () => {
        searchModal.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    });
    
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
            searchInput.value = '';
            searchResults.innerHTML = '';
        }
    });
    
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length > 0) {
            const results = products.filter(product => 
                product.name.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
            
            if (results.length > 0) {
                searchResults.innerHTML = results.map(product => `
                    <div class="search-result-item" onclick="window.location.href='#shop'">
                        <strong>${product.name}</strong><br>
                        <small>${product.category} - $${product.price}</small>
                    </div>
                `).join('');
            } else {
                searchResults.innerHTML = '<div class="search-result-item">No products found</div>';
            }
        } else {
            searchResults.innerHTML = '';
        }
    });
    
    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
            searchModal.classList.remove('active');
            searchInput.value = '';
            searchResults.innerHTML = '';
        }
    });
    
    // Wishlist functionality
    document.addEventListener('click', (e) => {
        if (e.target.closest('.wishlist-icon')) {
            e.stopPropagation();
            const btn = e.target.closest('.wishlist-icon');
            const productId = parseInt(btn.dataset.id);
            const product = products.find(p => p.id === productId);
            
            let wishlist = storage.get('wishlist');
            const index = wishlist.findIndex(item => item.id === productId);
            
            if (index > -1) {
                wishlist.splice(index, 1);
                btn.classList.remove('liked');
                showToast('Removed from wishlist');
            } else {
                wishlist.push(product);
                btn.classList.add('liked');
                showToast('Added to wishlist', 'success');
            }
            
            storage.set('wishlist', wishlist);
            updateBadges();
        }
    });
    
    // Add to cart functionality
    document.addEventListener('click', (e) => {
        if (e.target.closest('.add-to-cart')) {
            const btn = e.target.closest('.add-to-cart');
            const productId = parseInt(btn.dataset.id);
            const product = products.find(p => p.id === productId);
            
            let cart = storage.get('cart');
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            storage.set('cart', cart);
            updateBadges();
            
            const originalText = btn.textContent;
            btn.textContent = 'Added! ✓';
            btn.style.background = '#4ecdc4';
            
            showToast('Added to cart', 'success');
            
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
            showToast('Thank you for subscribing!', 'success');
            newsletterEmail.value = '';
        } else {
            showToast('Please enter a valid email address', 'error');
        }
    });
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Message sent successfully!', 'success');
            contactForm.reset();
        });
    }
}

// Update badge counts
function updateBadges() {
    const wishlist = storage.get('wishlist');
    const cart = storage.get('cart');
    
    document.getElementById('wishlistCount').textContent = wishlist.length;
    document.getElementById('cartCount').textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

// Toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        stopHeroAutoPlay();
        moveHeroSlide(-1);
        resumeHeroAutoPlay();
    } else if (e.key === 'ArrowRight') {
        stopHeroAutoPlay();
        moveHeroSlide(1);
        resumeHeroAutoPlay();
    }
});

// Make functions global
window.moveHeroSlide = moveHeroSlide;
window.scrollProducts = scrollProducts;

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

console.log('🛍️ LUXE E-Commerce Website Loaded Successfully!');
