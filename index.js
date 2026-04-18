// Carousel
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.carousel-dots');
const autoCarouselMedia = window.matchMedia('(max-width: 1024px)');

let currentIndex = 0;
let interval;

// Create dots
slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
}

function nextSlide() {
    let newIndex = currentIndex + 1;
    if (newIndex >= slides.length) newIndex = 0;
    goToSlide(newIndex);
}

function prevSlide() {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = slides.length - 1;
    goToSlide(newIndex);
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });
}
function startInterval() {
    if (!autoCarouselMedia.matches) return;
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
}

function resetInterval() {
    clearInterval(interval);
    if (autoCarouselMedia.matches) {
        startInterval();
    }
}
startInterval();

autoCarouselMedia.addEventListener('change', () => {
    clearInterval(interval);
    if (autoCarouselMedia.matches) {
        startInterval();
    }
});



// After creating dots, force the first slide to be active
function initCarousel() {
    // Make sure first slide is active
    slides.forEach((slide, idx) => {
        if (idx === 0) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    
    // Update dots
    if (dots.length > 0) {
        dots.forEach((dot, idx) => {
            if (idx === 0) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    currentIndex = 0;
}


initCarousel();



// Block every image (img tags + background images) 
document.addEventListener('DOMContentLoaded', function() {
    // Block dragstart on everything
    document.body.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG' || 
            e.target.getAttribute('style')?.includes('background-image') ||
            e.target.classList.contains('carousel-slide')) {
            e.preventDefault();
            return false;
        }
    });
    
    // Block context menu (right-click) 
    document.body.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'IMG' || 
            e.target.getAttribute('style')?.includes('background-image')) {
            e.preventDefault();
            return false;
        }
    });
    
    // Block mousedown + click combination 
    document.body.addEventListener('click', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    });


    // Block stats 
    const statsSection = document.querySelector('.section');
    if (statsSection) {
    statsSection.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    statsSection.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });
}

    // Also block on .section for stats background
    document.querySelectorAll('.section, [class*="bg-"], [class*="background"]').forEach(el => {
        el.addEventListener('contextmenu', (e) => e.preventDefault());
        el.addEventListener('dragstart', (e) => e.preventDefault());
    });

});


function toggleCard(card) {
    const isOpen = card.classList.contains('open');
    document.querySelectorAll('.card.open').forEach(c => c.classList.remove('open'));
    if (!isOpen) {
        card.classList.add('open');
        setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}
