console.log('aboutus.js loaded');

document.addEventListener('DOMContentLoaded', function() {
    const aboutMedia = document.querySelector('.about-media');
    const aboutContent = document.querySelector('.about-content');

    function syncAboutMediaHeight() {
        if (!aboutMedia || !aboutContent) return;

        if (window.matchMedia('(max-width: 1024px)').matches) {
            aboutMedia.style.height = '';
            aboutMedia.style.maxHeight = '';
            return;
        }

        const contentHeight = Math.ceil(aboutContent.getBoundingClientRect().height);
        aboutMedia.style.height = `${contentHeight}px`;
        aboutMedia.style.maxHeight = `${contentHeight}px`;
    }

    syncAboutMediaHeight();
    window.addEventListener('resize', syncAboutMediaHeight);

    if ('ResizeObserver' in window && aboutContent) {
        const aboutResizeObserver = new ResizeObserver(syncAboutMediaHeight);
        aboutResizeObserver.observe(aboutContent);
    }

    if (aboutMedia) {
        aboutMedia.querySelectorAll('img').forEach((img) => {
            if (!img.complete) {
                img.addEventListener('load', syncAboutMediaHeight, { once: true });
            }
        });
    }

    const revealCards = document.querySelectorAll('.reveal-card');
    if ('IntersectionObserver' in window && revealCards.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.18 });

        revealCards.forEach((card) => observer.observe(card));
    } else {
        revealCards.forEach((card) => card.classList.add('is-visible'));
    }

    document.body.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG' ||
            e.target.getAttribute('style')?.includes('background-image')) {
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
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    });
});
