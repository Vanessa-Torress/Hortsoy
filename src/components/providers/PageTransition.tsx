'use client';

import React, { useEffect, useState, useRef, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import './PageTransition.css';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [transitionStage, setTransitionStage] = useState<
    'is-entering' | 'is-active' | 'is-exiting'
  >('is-entering');
  const isNavigatingRef = useRef(false);
  const [, startTransition] = useTransition();

  // Aciona a entrada suave quando a rota atual é montada/atualizada
  useEffect(() => {
    isNavigatingRef.current = false;
    setTransitionStage('is-entering');

    // Scroll instantâneo para o topo ao montar nova rota
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0, { immediate: true });
      }
    }

    const rafId = requestAnimationFrame(() => {
      setTransitionStage('is-active');
    });

    return () => cancelAnimationFrame(rafId);
  }, [pathname]);

  // Interceptador elegante de cliques em links internos para criar o fade-out cinematográfico
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      // Ignora se tecla modificadora (Ctrl/Cmd/Shift/Alt) estiver pressionada
      if (
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        e.defaultPrevented ||
        e.button !== 0
      ) {
        return;
      }

      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      const targetAttr = target.getAttribute('target');

      // Ignora links externos, links com target="_blank", links de download ou âncoras na mesma página (#)
      if (
        !href ||
        targetAttr === '_blank' ||
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:') ||
        href.startsWith('#') ||
        target.hasAttribute('download')
      ) {
        return;
      }

      // Converte URL relativa para pathname
      const currentUrl = new URL(window.location.href);
      const destinationUrl = new URL(href, window.location.origin);

      // Se o link apontar para a mesma página exata (inclusive com hash), não força recarregamento com transição
      if (
        destinationUrl.pathname === currentUrl.pathname &&
        destinationUrl.search === currentUrl.search
      ) {
        return;
      }

      // Se for apenas uma navegação para a mesma página com âncora hash
      if (destinationUrl.pathname === currentUrl.pathname && destinationUrl.hash) {
        return;
      }

      // Inicia o Fade-Out Cinematográfico
      e.preventDefault();
      if (isNavigatingRef.current) return;
      isNavigatingRef.current = true;

      setTransitionStage('is-exiting');

      // Tempo de saída coordenado antes do router.push
      setTimeout(() => {
        startTransition(() => {
          router.push(destinationUrl.pathname + destinationUrl.search + destinationUrl.hash);
        });
      }, 300);
    };

    document.addEventListener('click', handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleDocumentClick, { capture: true });
    };
  }, [router]);

  return (
    <div className="page-transition-root">
      <div className={`page-transition-wrapper ${transitionStage}`}>{children}</div>
    </div>
  );
}
