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

(function() {
    const track = document.getElementById('carouselTrack');
    if (!track) return;

    const items = Array.from(track.querySelectorAll('.carousel-item'));
    const total = items.length;
    let current = Math.floor(total / 2);

    const positions = [
        { x: -480, scale: 0.72, z: 2, opacity: 0.75, ry: 20 },
        { x:    0, scale: 1.00, z: 5, opacity: 1.0,  ry:  0 },
        { x:  480, scale: 0.72, z: 2, opacity: 0.75, ry: -20 },
    ];

    function render() {
        items.forEach((item, i) => {
            let offset = i - current;
            if (offset > Math.floor(total / 2)) offset -= total;
            if (offset < -Math.floor(total / 2)) offset += total;

            const posIdx = offset + 1;
            if (posIdx < 0 || posIdx > 2) {
                item.style.opacity = 0;
                item.style.pointerEvents = 'none';
                item.style.zIndex = 0;
                item.style.transform = `translateX(${offset > 0 ? 9999 : -9999}px)`;
                return;
            }
            const p = positions[posIdx];
            item.style.opacity = p.opacity;
            item.style.zIndex = p.z;
            item.style.pointerEvents = 'none';
            item.style.transform = `translateX(${p.x}px) scale(${p.scale}) rotateY(${p.ry}deg)`;
        });
    }

    document.getElementById('carouselPrev').addEventListener('click', () => {
        current = (current - 1 + total) % total;
        render();
    });

    document.getElementById('carouselNext').addEventListener('click', () => {
        current = (current + 1) % total;
        render();
    });

    render();
})();