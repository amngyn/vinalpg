console.log('aboutus.js loaded');

document.addEventListener('DOMContentLoaded', function() {
    if (window.matchMedia('(hover: hover) and (min-width: 1025px)').matches) {
        const navbar = document.querySelector('.navbar');
        const hero = document.querySelector('.about-hero');
        
        if (!hero || !navbar) return;
        
        function inHeroZone() {
            return window.scrollY < hero.offsetHeight - 80;
        }
        
        // Initial state
        if (inHeroZone()) {
            navbar.classList.add('navbar-transparent');
        }
        
        // Scroll handler only (no mouseenter/mouseleave)
        window.addEventListener('scroll', () => {
            if (inHeroZone()) {
                navbar.classList.add('navbar-transparent');
            } else {
                navbar.classList.remove('navbar-transparent');
            }
        });
    }
});

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

});
