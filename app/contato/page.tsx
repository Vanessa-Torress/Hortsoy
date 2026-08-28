import type { Metadata } from 'next';
import ContactForm from '@/features/contact/ContactForm';

export const metadata: Metadata = {
  title: 'HORTSOY | Agronegócio',
  description:
    'Entre em contato com a equipe da Hortsoy. Tire dúvidas técnicas, solicite cotação de insumos e saiba mais sobre nossos serviços em Uberaba e região.',
};

export default function ContatoPage() {
  return <ContactForm />;
}
