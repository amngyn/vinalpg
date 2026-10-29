console.log('aboutus.js loaded');

document.addEventListener('DOMContentLoaded', function() {
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