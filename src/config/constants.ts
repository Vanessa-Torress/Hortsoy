/**
 * Configurações institucionais e constantes do projeto Hortsoy (Next.js)
 * Variáveis de ambiente públicas devem ter o prefixo NEXT_PUBLIC_
 */

export const APP_CONFIG = {
  company: {
    name: 'Hortsoy',
    logoWhite: '/assets/img/logo-branco.png',
    logoColor: '/assets/img/logo.png',
    phoneDisplay: '(34) 99732-3304',
    email: 'atendimento@hortsoy.com.br',
    address:
      process.env.NEXT_PUBLIC_FOOTER_ADDRESS ||
      'Avenida Santos Dumont, 130\nUberaba - MG | CEP: 38050-400',
    workingHours: 'Seg - Sex: 07:00 - 17:30',
    sloganRaw:
      process.env.NEXT_PUBLIC_FOOTER_SLOGAN ||
      'Inovação e sustentabilidade|para o futuro|do seu agronegócio',
  },
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/hortsoy/',
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://br.linkedin.com/company/grupo-hortsoy',
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/Hortsoy/',
  },
  whatsapp: {
    phone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '5534997323304',
    defaultMessage:
      process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE ||
      'Olá! Gostaria de saber mais sobre as soluções da Hortsoy.',
    getLink(customMessage?: string): string {
      const msg = customMessage || this.defaultMessage;
      return `https://wa.me/${this.phone}?text=${encodeURIComponent(msg)}`;
    },
  },
} as const;

export type AppConfig = typeof APP_CONFIG;
