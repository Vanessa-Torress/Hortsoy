'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail } from 'lucide-react';
import { APP_CONFIG } from '@/config/constants';

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="top-header">
        <div className="container">
          <div className="top-header-info">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Phone size={14} aria-hidden="true" /> {APP_CONFIG.company.phoneDisplay}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Mail size={14} aria-hidden="true" /> {APP_CONFIG.company.email}
            </span>
          </div>
          <div className="top-header-links">
            {APP_CONFIG.social.facebook && (
              <a
                href={APP_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Hortsoy"
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <FacebookIcon size={15} />
              </a>
            )}
            {APP_CONFIG.social.instagram && (
              <a
                href={APP_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Hortsoy"
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <InstagramIcon size={15} />
              </a>
            )}
            {APP_CONFIG.social.linkedin && (
              <a
                href={APP_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Grupo Hortsoy"
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <LinkedInIcon size={15} />
              </a>
            )}
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
              <Link href="/" className={pathname === '/' ? 'active' : ''} onClick={handleLinkClick}>
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
            onClick={() => setMenuOpen((current) => !current)}
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
