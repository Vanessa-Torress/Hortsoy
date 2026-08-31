import Link from 'next/link';
import { APP_CONFIG } from '@/config/constants';

function InstagramIcon({ className = 'footer-svg-icon' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ className = 'footer-svg-icon' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ className = 'footer-svg-icon' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function parseSloganParts(raw: string) {
  if (!raw) return [];

  return raw.split('|').map((text, index) => ({
    text,
    highlighted: index % 2 !== 0,
  }));
}

const INSTITUTIONAL_LINKS = [
  { label: 'Política de Segurança', href: '/politica-de-seguranca' },
  { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
  { label: 'Termos de Uso', href: '/termos-de-uso' },
  { label: 'Canal de Denúncia', href: '/canal-de-denuncia' },
];

export default function Footer() {
  const { name: brandName, logoWhite, address, sloganRaw } = APP_CONFIG.company;
  const { instagram, linkedin, facebook } = APP_CONFIG.social;
  const sloganParts = parseSloganParts(sloganRaw);

  return (
    <footer className="footer-standard" aria-label="Rodapé do site" role="contentinfo">
      <div className="footer-glow" aria-hidden="true"></div>

      <div className="container">
        <div className="footer-top-brand">
          <Link
            href="/"
            aria-label={`Ir para a página inicial da ${brandName}`}
            className="footer-logo-link"
          >
            <img
              loading="lazy"
              src={logoWhite}
              alt={`${brandName} Logo`}
              width="220"
              height="70"
              className="footer-logo-standard"
            />
          </Link>
        </div>

        <div className="footer-canonical-grid">
          <div className="footer-col-brand">
            <h2 className="footer-slogan">
              {sloganParts.map((part, i) =>
                part.highlighted ? (
                  <span key={i} className="footer-slogan-highlight">
                    {part.text}
                  </span>
                ) : (
                  <span key={i}>{part.text}</span>
                )
              )}
            </h2>

            <address className="footer-address">{address}</address>
          </div>

          <nav className="footer-col-links" aria-label="Links institucionais">
            {INSTITUTIONAL_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="footer-nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="footer-col-social">
            <span className="footer-social-title">Siga nossas redes</span>
            <div className="footer-social-icons" role="list">
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Siga a Hortsoy no Instagram"
                  role="listitem"
                  className="footer-social-link"
                >
                  <InstagramIcon />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Siga a Hortsoy no LinkedIn"
                  role="listitem"
                  className="footer-social-link"
                >
                  <LinkedInIcon />
                </a>
              )}
              {facebook && (
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Siga a Hortsoy no Facebook"
                  role="listitem"
                  className="footer-social-link"
                >
                  <FacebookIcon />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
