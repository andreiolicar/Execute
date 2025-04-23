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
    const depo1 = document.querySelector('#depo1');
    const depo2 = document.querySelector('#depo2');
    const depo3 = document.querySelector('#depo3');

    function carouselDepo() {
        depo1.classList.toggle('active');
        setTimeout(function () {
            depo1.classList.remove('active');
            depo2.classList.toggle('active');
        }, 5000);

        setTimeout(function () {
            depo2.classList.remove('active');
            depo3.classList.toggle('active');
        }, 10000);

        setTimeout(function () {
            depo3.classList.remove('active');
            depo1.classList.toggle('active');
        }, 15000);
    }

    carouselDepo();
})