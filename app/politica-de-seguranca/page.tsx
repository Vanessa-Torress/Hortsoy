import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HORTSOY | Agronegócio',
  description:
    'Conheça a política de segurança da Hortsoy, com diretrizes sobre proteção de dados, navegação segura e cuidado com informações de clientes e parceiros.',
};

export default function PoliticaSegurancaPage() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <h1>Política de Segurança</h1>
          <div className="breadcrumb">
            <Link href="/">Início</Link> / Política de Segurança
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="content-box reveal">
            <p>
              A Hortsoy valoriza a segurança das informações compartilhadas por clientes,
              parceiros, colaboradores e usuários do site. Todas as práticas digitais e operacionais
              são conduzidas com foco na proteção, integridade e confidencialidade dos dados.
            </p>

            <h2>Compromisso da empresa</h2>
            <p>
              Empregamos medidas técnicas, organizacionais e administrativas para reduzir riscos,
              prevenir acessos não autorizados e garantir o uso responsável das informações em
              conformidade com as melhores práticas do mercado e legislação aplicável.
            </p>

            <h2>Práticas adotadas</h2>
            <ul>
              <li>Proteção do acesso ao site por canais seguros e monitoramento contínuo.</li>
              <li>Uso de boas práticas para evitar vazamento, alteração indevida ou uso não autorizado de dados.</li>
              <li>Controle interno de acesso, com restrição de privilégios por perfil e necessidade.</li>
              <li>Respostas rápidas a incidentes e atenção constante à melhoria dos processos.</li>
            </ul>

            <h2>Responsabilidade do usuário</h2>
            <p>
              O usuário deve manter seus dispositivos e credenciais em ambiente seguro, evitando
              compartilhamento indevido de informações e reportando qualquer sinal de acesso suspeito.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
