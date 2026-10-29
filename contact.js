console.log('contact.js loaded');

// Block every image (img tags + background images)
document.addEventListener('DOMContentLoaded', function() {
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