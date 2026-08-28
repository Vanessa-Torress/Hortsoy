'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export default function AnimationManager() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
    });

    (window as any).lenis = lenis;

    let reqId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      reqId = requestAnimationFrame(raf);
    };

    reqId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(reqId);
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0, { immediate: true });
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const revealCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    });

    const revealTimer = setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((item) => {
        revealObserver.observe(item);
      });
    }, 100);

    const sliderObservers: IntersectionObserver[] = [];
    const sliderIntervals: NodeJS.Timeout[] = [];

    const sliders = document.querySelectorAll('.about-slider');
    sliders.forEach((slider) => {
      const slides = slider.querySelectorAll('.slide');
      if (slides.length <= 1) return;

      let currentIndex = 0;
      let isVisible = false;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isVisible = entry.isIntersecting;
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(slider);
      sliderObservers.push(observer);

      const slideInterval = setInterval(() => {
        if (!isVisible || document.hidden) return;
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
      }, 4500);

      sliderIntervals.push(slideInterval);
    });

    let counterObserver: IntersectionObserver | undefined;
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
      const startCounter = (counter: HTMLElement) => {
        const target = +(counter.getAttribute('data-target') || 0);
        const speed = 120;
        const increment = target / speed;

        let current = 0;
        const updateCount = () => {
          if (current < target) {
            current += increment;
            counter.innerText = Math.ceil(current).toString();
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target.toString();
          }
        };

        updateCount();
      };

      counterObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startCounter(entry.target as HTMLElement);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      counters.forEach((counter) => counterObserver?.observe(counter));
    }

    return () => {
      clearTimeout(revealTimer);
      revealObserver.disconnect();
      sliderObservers.forEach((obs) => obs.disconnect());
      sliderIntervals.forEach((interval) => clearInterval(interval));
      if (counterObserver) {
        counterObserver.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
