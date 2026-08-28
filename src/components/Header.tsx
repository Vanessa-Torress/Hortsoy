'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar o menu ao mudar de rota
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const handleLinkClick = () => {
    if (typeof window !== 'undefined' && (window as any).lenis) {
      (window as any).lenis.scrollTo(0, { duration: 1.2 });
    } else if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <header className="top-header">
        <div className="container">
          <div className="top-header-info">
            <span>
              <i className="fas fa-phone"></i> (34) 99732-3304
            </span>
            <span>
              <i className="fas fa-envelope"></i> atendimento@hortsoy.com.br
            </span>
          </div>
          <div className="top-header-links">
            <a
              href="https://www.facebook.com/Hortsoy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Hortsoy"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/hortsoy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Hortsoy"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://br.linkedin.com/company/grupo-hortsoy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Grupo Hortsoy"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://hortsoy.com.br/wp-login.php"
              className="btn-portal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portal do Colaborador
            </a>
          </div>
        </div>
      </header>

      <nav className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link href="/" className="logo" onClick={handleLinkClick}>
            <img loading="lazy" src="/assets/img/novo-logo.png" alt="Hortsoy Logo" />
          </Link>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li>
              <Link
                href="/"
                className={pathname === '/' ? 'active' : ''}
                onClick={handleLinkClick}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className={pathname === '/sobre' ? 'active' : ''}
                onClick={handleLinkClick}
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                href="/servicos"
                className={pathname === '/servicos' ? 'active' : ''}
                onClick={handleLinkClick}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className={pathname === '/contato' ? 'active' : ''}
                onClick={handleLinkClick}
              >
                Contato
              </Link>
            </li>
          </ul>

          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            aria-label="Abrir Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </>
  );
}
