// Carousel
const slides = Array.from(document.querySelectorAll('.carousel-slide')).filter(s => !s.closest('.card-carousel'));
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.carousel-dots');
const autoCarouselMedia = window.matchMedia('(max-width: 1024px)');

let currentIndex = 0;
let interval;

if (slides.length && dotsContainer) {
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });
}

const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
    if (!slides.length || !dots.length) return;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
}

function nextSlide() {
    if (!slides.length) return;
    let newIndex = currentIndex + 1;
    if (newIndex >= slides.length) newIndex = 0;
    goToSlide(newIndex);
}

function prevSlide() {
    if (!slides.length) return;
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
    if (!autoCarouselMedia.matches || !slides.length) return;
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

function initCarousel() {
    slides.forEach((slide, idx) => {
        if (idx === 0) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });

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
    document.body.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG' ||
            e.target.getAttribute('style')?.includes('background-image') ||
            e.target.classList.contains('carousel-slide')) {
            e.preventDefault();
            return false;
        }
    });

    document.body.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'IMG' ||
            e.target.getAttribute('style')?.includes('background-image')) {
            e.preventDefault();
            return false;
        }
    });

    document.body.addEventListener('click', function(e) {
        if (e.target.tagName === 'IMG' && !e.target.closest('.card-carousel')) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    });

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

function toggleProject(card) {
    const isOpen = card.classList.contains('open');

    document.querySelectorAll('.project-card.open').forEach(function(item) {
        item.classList.remove('open');
    });

    if (!isOpen) {
        card.classList.add('open');
    }
}

document.querySelectorAll('a[href="aboutus.html"]').forEach(link => {
    link.addEventListener('click', () => {
        sessionStorage.setItem('fromHome', '1');
    });
});

// Card carousel — bar + See more button
document.querySelectorAll('.card-carousel').forEach(function(carousel) {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const segmentsContainer = carousel.querySelector('.carousel-segments');
    const seeMoreBtn = carousel.querySelector('.carousel-see-more');

    if (!slides.length || !segmentsContainer) return;

    let cardIndex = 0;

    slides.forEach(function(_, i) {
        const seg = document.createElement('div');
        seg.classList.add('carousel-segment');
        if (i === 0) seg.classList.add('active');
        segmentsContainer.appendChild(seg);
    });

    const segments = segmentsContainer.querySelectorAll('.carousel-segment');

    function goToCardSlide(index) {
        slides[cardIndex].classList.remove('active');
        segments[cardIndex].classList.remove('active');
        cardIndex = index;
        slides[cardIndex].classList.add('active');
        segments[cardIndex].classList.add('active');
    }

    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            goToCardSlide((cardIndex + 1) % slides.length);
        });
    }
});