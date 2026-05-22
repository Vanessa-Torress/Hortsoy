/* 
  Hortsoy Website Scripts
  Maintained by Antigravity (Senior Design & Engineering Specialist)
*/

document.addEventListener('DOMContentLoaded', () => {
    // Sticky Header backdrop & heights
    const nav = document.querySelector('.main-nav');
    if (nav) {
        const toggleStickyHeader = () => {
            if (window.scrollY > 30) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', toggleStickyHeader, { passive: true });
        toggleStickyHeader(); // Run initial state check
    }

    // Mobile Hamburger Menu Drawer Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside of the drawer
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // Smooth Scroll for Hash Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hrefVal = this.getAttribute('href');
            if (hrefVal === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(hrefVal);
            if (target) {
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
        const nextSlide = () => {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        };
        
        // Cycle slides every 4.5 seconds for elegant, relaxed visual pacing
        setInterval(nextSlide, 4500);
    });
});
