'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { APP_CONFIG } from '@/config/constants';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: '', // Honeypot field invisível
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setStatus({
          type: 'success',
          message: data.message || 'Mensagem enviada com sucesso! Em breve entraremos em contato.',
        });
        setFormData({ name: '', email: '', subject: '', message: '', _gotcha: '' });
      } else {
        setStatus({
          type: 'error',
          message:
            data?.error ||
            'Erro ao enviar mensagem. Por favor, verifique os dados e tente novamente.',
        });
      }
    } catch (error) {
      console.error('Erro de requisição:', error);
      setStatus({
        type: 'error',
        message: 'Falha na conexão ao enviar a mensagem. Verifique sua internet e tente novamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <h1>Fale Conosco</h1>
          <div className="breadcrumb">
            <Link href="/">Início</Link> / Contato
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info reveal-left">
              <span className="section-title">Canais de Atendimento</span>
              <h2>Entre em contato com nossa equipe</h2>
              <p style={{ marginBottom: '40px' }}>
                Estamos prontos para atender suas dúvidas e solicitações. Escolha o canal de sua
                preferência.
              </p>

              <div className="contact-info-item">
                <MapPin
                  size={22}
                  style={{ color: 'var(--primary-color)', flexShrink: 0 }}
                  aria-hidden="true"
                />
                <div>
                  <h4>Endereço</h4>
                  <p>Av. Santos Dumont, 130 - Uberaba, MG</p>
                </div>
              </div>

              <div className="contact-info-item">
                <Phone
                  size={22}
                  style={{ color: 'var(--primary-color)', flexShrink: 0 }}
                  aria-hidden="true"
                />
                <div>
                  <h4>Telefone</h4>
                  <p>{APP_CONFIG.company.phoneDisplay}</p>
                </div>
              </div>

              <div className="contact-info-item">
                <Mail
                  size={22}
                  style={{ color: 'var(--primary-color)', flexShrink: 0 }}
                  aria-hidden="true"
                />
                <div>
                  <h4>E-mail</h4>
                  <p>{APP_CONFIG.company.email}</p>
                </div>
              </div>

              <div className="contact-info-item">
                <Clock
                  size={22}
                  style={{ color: 'var(--primary-color)', flexShrink: 0 }}
                  aria-hidden="true"
                />
                <div>
                  <h4>Horário</h4>
                  <p>{APP_CONFIG.company.workingHours}</p>
                </div>
              </div>
            </div>

            <div className="contact-form reveal-right">
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot field para bloqueio de spam e bots */}
                <div
                  style={{
                    opacity: 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: 0,
                    width: 0,
                    zIndex: -1,
                    overflow: 'hidden',
                  }}
                  aria-hidden="true"
                >
                  <label htmlFor="_gotcha">Não preencha este campo se você for humano:</label>
                  <input
                    type="text"
                    id="_gotcha"
                    name="_gotcha"
                    value={formData._gotcha}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name">Seu Nome *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ex: João Silva"
                    value={formData.name}
                    onChange={handleChange}
                    maxLength={100}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Seu E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ex: joao@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    maxLength={150}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Assunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Ex: Orçamento de Insumos"
                    value={formData.subject}
                    onChange={handleChange}
                    maxLength={150}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Digite sua mensagem aqui..."
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={3000}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'wait' : 'pointer',
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando mensagem...' : 'Enviar Mensagem'}
                </button>

                {status && (
                  <div
                    role="alert"
                    style={{
                      marginTop: '18px',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      fontWeight: '500',
                      backgroundColor: status.type === 'success' ? '#f0fdf4' : '#fef2f2',
                      color: status.type === 'success' ? '#166534' : '#991b1b',
                      border: `1px solid ${status.type === 'success' ? '#bbf7d0' : '#fecaca'}`,
                    }}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="map-container reveal">
            <iframe
              title="Localização da sede da Hortsoy em Uberaba MG"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.155458038758!2d-47.9351239!3d-19.7481239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bad03816666667%3A0x6666666666666666!2sAv.%20Santos%20Dumont%2C%20130%20-%20Uberaba%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
