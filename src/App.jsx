import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Lenis from 'lenis';

import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';

import BlogBarterCafe from './pages/blog/BlogBarterCafe';
import BlogExpo2025 from './pages/blog/BlogExpo2025';
import BlogManejoSoja from './pages/blog/BlogManejoSoja';
import BlogNovoCentro from './pages/blog/BlogNovoCentro';
import BlogPlantandoIdeias from './pages/blog/BlogPlantandoIdeias';
import BlogProdutividadeBayer from './pages/blog/BlogProdutividadeBayer';

// Scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        
        window.scrollTo(0, 0);
        
        // Wait for React to render the new route, then tell Lenis to scroll
        setTimeout(() => {
            window.scrollTo(0, 0);
            if (window.lenis) {
                window.lenis.scrollTo(0, { immediate: true });
            }
        }, 50);
    }, [pathname]);

    return null;
}

// Animations and Lenis setup
function AnimationManager() {
    const { pathname } = useLocation();

    // Initialize Lenis ONCE
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
            smoothTouch: false,
        });
        window.lenis = lenis;

        let reqId;
        function raf(time) {
            lenis.raf(time);
            reqId = requestAnimationFrame(raf);
        }
        reqId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(reqId);
            lenis.destroy();
            window.lenis = null;
        };
    }, []);

    // Intersection Observers (re-run on route change)
    useEffect(() => {
        // Intersection Observer for Reveal Animations
        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        };

        const revealObserver = new IntersectionObserver(revealCallback, {
            root: null,
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        setTimeout(() => {
            document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(item => {
                revealObserver.observe(item);
            });
        }, 100);

        // Automated premium crossfade Ken Burns slideshow
        const sliders = document.querySelectorAll('.about-slider');
        sliders.forEach(slider => {
            const slides = slider.querySelectorAll('.slide');
            if (slides.length <= 1) return;

            let currentIndex = 0;
            let isVisible = false;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    isVisible = entry.isIntersecting;
                });
            }, { threshold: 0.1 });
            observer.observe(slider);

            const slideInterval = setInterval(() => {
                if (!isVisible || document.hidden) return;
                slides[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % slides.length;
                slides[currentIndex].classList.add('active');
            }, 4500);
            
            // cleanup function specific to the slider if needed
        });

        // Animated Counter Stats
        const counters = document.querySelectorAll('.counter');
        if (counters.length > 0) {
            const startCounter = (counter) => {
                const target = +counter.getAttribute('data-target');
                const speed = 120; 
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

        return () => {
            // Clean up observers on unmount or route change
            revealObserver.disconnect();
            if (typeof counterObserver !== 'undefined') {
                counterObserver.disconnect();
            }
        };
    }, [pathname]); // Re-run on route change to rebind elements

    return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimationManager />
      
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contato" element={<Contato />} />
        
        {/* Rotas do Blog */}
        <Route path="/blog/barter-cafe" element={<BlogBarterCafe />} />
        <Route path="/blog/expo2025" element={<BlogExpo2025 />} />
        <Route path="/blog/manejo-soja" element={<BlogManejoSoja />} />
        <Route path="/blog/novo-centro" element={<BlogNovoCentro />} />
        <Route path="/blog/plantando-ideias" element={<BlogPlantandoIdeias />} />
        <Route path="/blog/produtividade-bayer" element={<BlogProdutividadeBayer />} />
      </Routes>

      <Footer />
      <WhatsAppFloat />
    </Router>
  )
}

export default App;
