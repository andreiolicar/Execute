function mobileHeader() {
    const hamburger = document.querySelector('.hamburger');
    const itensMobile = document.querySelector('.itens-mobile');

    if (itensMobile.classList.contains('open')) {
        itensMobile.classList.remove('open');

        void itensMobile.offsetWidth;

        itensMobile.classList.add('closing');

        const AnimationEnd = () => {
            itensMobile.classList.remove('closing');
            itensMobile.style.display = 'none';
            itensMobile.removeEventListener('animationend', AnimationEnd);
        };

        itensMobile.addEventListener('animationend', AnimationEnd);
    } else {
        itensMobile.style.display = 'flex';
        void itensMobile.offsetWidth;
        itensMobile.classList.add('open');
    }

    hamburger.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-container')
    const dots = document.querySelectorAll('.dot')

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
        });

        slides[index].classList.add('active');
        dots[index].classList.add('active');

    }

    function startCarousel() {
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length
            showSlide(currentSlide);
        }, 5000);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentSlide = i;
            showSlide(currentSlide);
        });
    });

    showSlide(currentSlide);
    startCarousel();
});