function mobileHeader() {
    const hamburger = document.querySelector('.hamburger');
    const itensMobile = document.querySelector('.itens-mobile');

    if (itensMobile.classList.contains('open')) {
        itensMobile.classList.remove('open');

        void itensMobile.offsetWidth;

        itensMobile.classList.add('closing');

        const handleAnimationEnd = () => {
            itensMobile.classList.remove('closing');
            itensMobile.style.display = 'none';
            itensMobile.removeEventListener('animationend', handleAnimationEnd);
        };

        itensMobile.addEventListener('animationend', handleAnimationEnd);
    } else {
        itensMobile.style.display = 'flex';
        void itensMobile.offsetWidth;
        itensMobile.classList.add('open');
    }

    hamburger.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function () {
    const depo1 = document.querySelector('#depo1');

    depo1.classList.toggle('active');
})