'use client';

import { useState } from 'react';
import { APP_CONFIG } from '@/config/constants';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = APP_CONFIG.whatsapp.getLink();

  return (
    <div
      className="whatsapp-float-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={`whatsapp-card ${isOpen ? 'active' : ''}`}>
        <div className="whatsapp-card-header">
          <div className="whatsapp-avatar">
            <div className="whatsapp-avatar-img">
              <i className="fas fa-headset"></i>
            </div>
            <span className="whatsapp-avatar-status"></span>
          </div>
          <div className="whatsapp-card-info">
            <h4>Suporte Hortsoy</h4>
            <span>Online</span>
          </div>
        </div>
        <div className="whatsapp-card-body">
          <p>Olá! Como podemos ajudar sua lavoura hoje? Fale com nosso especialista.</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-card-btn"
          >
            <i className="fab fa-whatsapp"></i> Iniciar Conversa
          </a>
        </div>
      </div>
      <a
        href={whatsappUrl}
        className="whatsapp-badge-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale Conosco no WhatsApp"
        onMouseEnter={() => setIsOpen(true)}
      >
        <span className="whatsapp-status-dot"></span>
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}
