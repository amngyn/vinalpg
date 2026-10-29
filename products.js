document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.card-carousel').forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const segmentsContainer = carousel.querySelector('.carousel-segments');
        const seeMoreBtn = carousel.querySelector('.carousel-see-more');

        if (!slides.length || !segmentsContainer) return;

        let currentIndex = 0;

        slides.forEach((_, i) => {
            const seg = document.createElement('div');
            seg.classList.add('carousel-segment');
            if (i === 0) seg.classList.add('active');
            segmentsContainer.appendChild(seg);
        });

        const segments = segmentsContainer.querySelectorAll('.carousel-segment');

        function goToSlide(index) {
            slides[currentIndex].classList.remove('active');
            segments[currentIndex].classList.remove('active');
            currentIndex = index;
            slides[currentIndex].classList.add('active');
            segments[currentIndex].classList.add('active');
        }

        if (seeMoreBtn) {
            seeMoreBtn.addEventListener('click', e => {
                e.preventDefault();
                e.stopPropagation();
                goToSlide((currentIndex + 1) % slides.length);
            });
        }
    });
});
