import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HORTSOY | Agronegócio',
  description:
    'Entenda como a Hortsoy coleta, usa, protege e preserva informações pessoais em seu site e canais digitais.',
};

export default function PoliticaPrivacidadePage() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <h1>Política de Privacidade</h1>
          <div className="breadcrumb">
            <Link href="/">Início</Link> / Política de Privacidade
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="content-box reveal">
            <p>
              A Hortsoy respeita a privacidade dos dados compartilhados por clientes, parceiros,
              fornecedores e usuários do site. A coleta é feita apenas quando necessária para fornecer
              informações, atendimento e suporte ao relacionamento comercial.
            </p>

            <h2>Informações coletadas</h2>
            <p>
              Podem ser coletados dados como nome, e-mail, telefone, mensagem enviada por contato,
              informações de navegação e dados necessários para melhorar a experiência de uso do site.
            </p>

            <h2>Finalidade do uso</h2>
            <p>
              Os dados são utilizados para responder solicitações, fornecer informações sobre produtos
              e serviços, melhorar comunicação, suporte e garantir atendimento adequado e eficiente.
            </p>

            <h2>Proteção e armazenamento</h2>
            <p>
              As informações são tratadas com medidas de segurança adequadas, acessadas somente por
              pessoas autorizadas e mantidas pelo tempo mínimo necessário para as finalidades do atendimento.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
