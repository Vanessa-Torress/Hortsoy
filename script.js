/* 
  Hortsoy Website Scripts
*/

document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll for Hash Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hrefVal = this.getAttribute('href');
            if (hrefVal === '#') return;

            e.preventDefault();
            const target = document.querySelector(hrefVal);
            if (target) {
                const nav = document.querySelector('.main-nav');
                const headerOffset = nav ? nav.offsetHeight : 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

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

        const nextSlide = () => {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        };

        slideInterval = setInterval(nextSlide, 4500);

        // Optimize CPU by pausing when the tab is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                clearInterval(slideInterval);
            } else {
                clearInterval(slideInterval); // prevent duplicates
                slideInterval = setInterval(nextSlide, 4500);
            }
        });
    });
});
