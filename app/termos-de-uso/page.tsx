import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description:
    'Termos e condições de uso do site e das soluções digitais e institucionais da Hortsoy.',
};

export default function TermosDeUsoPage() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <h1>Termos de Uso</h1>
          <div className="breadcrumb">
            <Link href="/">Início</Link> / Termos de Uso
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="content-box reveal">
            <p>
              O uso do site da Hortsoy deve seguir as boas práticas de navegação, respeito às
              informações disponibilizadas e uso responsável dos conteúdos e serviços oferecidos.
            </p>

            <h2>Acesso ao conteúdo</h2>
            <p>
              Todo conteúdo publicado no site tem finalidade informativa, institucional e comercial.
              O acesso e uso devem respeitar a legislação vigente, boas práticas digitais e a boa-fé
              na interação com o portal.
            </p>

            <h2>Responsabilidades</h2>
            <p>
              A Hortsoy se esforça para manter as informações atualizadas e corretas, mas não
              garante ausência total de erros, interrupções ou falhas técnicas em qualquer
              circunstância.
            </p>

            <h2>Modificações</h2>
            <p>
              Estes termos podem ser revisados periodicamente para refletir melhorias operacionais,
              legais ou de segurança. O uso contínuo do site após alterações implica aceitação das
              novas condições.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
