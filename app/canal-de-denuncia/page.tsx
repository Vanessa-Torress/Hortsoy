import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Canal de Denúncia',
  description:
    'Canal de denúncia e atendimento da Hortsoy para comunicação segura, dúvidas e reportes relacionados a condutas e práticas da empresa.',
};

export default function CanalDeDenunciaPage() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <h1>Canal de Denúncia e Atendimento</h1>
          <div className="breadcrumb">
            <Link href="/">Início</Link> / Canal de Denúncia
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="content-box reveal">
            <p>
              A Hortsoy mantém um canal de atendimento e comunicação para receber dúvidas,
              sugestões, solicitações e reportes de forma segura e respeitosa.
            </p>

            <h2>Como entrar em contato</h2>
            <p>
              Para solicitar informações, esclarecer dúvidas ou formalizar comunicação
              institucional, utilize a página de <Link href="/contato">contato</Link> da empresa.
            </p>

            <h2>Compromisso</h2>
            <p>
              Todas as mensagens serão tratadas com seriedade, confidencialidade e atenção às regras
              internas de atendimento e compliance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
