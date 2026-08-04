/* 
  Hortsoy Website Scripts
*/

document.addEventListener('DOMContentLoaded', () => {
    // Premium Smooth Scroll com Lenis JS
    const lenisScript = document.createElement('script');
    lenisScript.src = 'https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js';
    lenisScript.onload = () => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
            smoothTouch: false, // Dispositivos touch já têm rolagem suave nativamente
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Atualizando o Smooth Scroll para Links de Âncora para usar Lenis
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const hrefVal = this.getAttribute('href');
                if (hrefVal === '#') return;

                const target = document.querySelector(hrefVal);
                if (target) {
                    e.preventDefault();
                    const nav = document.querySelector('.main-nav');
                    const headerOffset = nav ? nav.offsetHeight : 80;
                    
                    lenis.scrollTo(target, {
                        offset: -headerOffset,
                        duration: 1.2
                    });
                }
            });
        });
    };
    document.head.appendChild(lenisScript);

    // Highly Performant CSS Bounded Scroll-Driven Animations using IntersectionObserver
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve once triggered for optimal run-time performance
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null,
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters fully
    });

    // Bind animatable items to observer
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(item => {
        revealObserver.observe(item);
    });

    // Animated Counter Stats
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
        const startCounter = (counter) => {
            const target = +counter.getAttribute('data-target');
            const speed = 120; // Lower number is faster
            const increment = target / speed;

            let current = 0;
            const updateCount = () => {
                if (current < target) {
                    current += increment;
                    counter.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        };

        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    // Automated premium crossfade Ken Burns slideshow for about-image
    const sliders = document.querySelectorAll('.about-slider');
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        if (slides.length <= 1) return;

        let currentIndex = 0;
        let slideInterval;

        let isVisible = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isVisible = entry.isIntersecting;
            });
        }, { threshold: 0.1 });
        observer.observe(slider);

        const nextSlide = () => {
            if (!isVisible || document.hidden) return;
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        };

        slideInterval = setInterval(nextSlide, 4500);
    });
});
