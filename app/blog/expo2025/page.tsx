import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HORTSOY | Agronegócio',
  description:
    'Hortsoy marca presença na feira do Cerrado Mineiro em Patrocínio, celebrando a força da cafeicultura com tecnologias inovadoras.',
  openGraph: {
    title: 'Hortsoy — Conectando o Campo ao Futuro',
    description: 'Soluções em bioestimulantes, nutrição de plantas e controle biológico no Cerrado Mineiro.',
    images: ['/assets/img/blog-expo2025.png'],
  },
};

export default function BlogExpo2025Page() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <h1>Hortsoy — Conectando o Campo ao Futuro.</h1>
          <div className="breadcrumb">
            <Link href="/">Início</Link> / <Link href="/sobre">Sobre Nós</Link> / Blog
          </div>
        </div>
      </section>

      <section className="section-padding blog-detail-section">
        <div className="container">
          <div className="blog-detail-grid">
            <div className="blog-main-column">
              <div className="blog-detail-header">
                <div className="blog-meta">
                  <span>
                    <i className="fas fa-calendar-alt"></i> 23 Mai 2025
                  </span>
                  <span>
                    <i className="fas fa-user"></i> Grupo Hortsoy
                  </span>
                </div>
                <h2 className="blog-detail-title">Hortsoy — Conectando o Campo ao Futuro.</h2>
              </div>

              <div className="blog-detail-featured">
                <img
                  loading="lazy"
                  src="/assets/img/blog-expo2025.png"
                  alt="Hortsoy — Conectando o Campo ao Futuro."
                  className="featured-img"
                />
              </div>
              <div className="blog-detail-content-inner">
                <div className="blog-inner-img">
                  <img
                    loading="lazy"
                    src="/assets/img/blog-expo2025-1.jpg"
                    alt="Hortsoy — Conectando o Campo ao Futuro. imagem interna"
                  />
                </div>
                <h2 className="blog-inner-heading">
                  HortSoy marca presença em uma das maiores feiras do Cerrado Mineiro, realizada em
                  Patrocínio.
                </h2>
                <p>
                  Participar de uma das maiores feiras do Cerrado Mineiro, realizada na cidade de
                  Patrocínio e promovida pela Expoccacer e Andav, foi um verdadeiro marco para a{' '}
                  <strong>Hortsoy</strong>.
                </p>
                <p>
                  Com orgulho, estivemos presentes com nosso stand, em um evento que celebrou a
                  força e a tradição da cafeicultura. Mais do que expor nossos produtos e soluções,
                  tivemos a honra de recepcionar nossos clientes – as verdadeiras estrelas da nossa
                  corporação – e de fortalecer os laços com nossos parceiros, peças fundamentais em
                  nossas estratégias.
                </p>
                <p>
                  Foram dias intensos de trocas, aprendizado e negociações de excelência,
                  reafirmando nosso compromisso com a inovação, o desenvolvimento e o sucesso de
                  todos que fazem parte do universo <strong>Hortsoy</strong>.
                </p>
                <p>Seguimos juntos, cultivando resultados e colhendo grandes conquistas.</p>
                <p>Juntos somos mais fortes. 🚜💚</p>
                <h2 className="blog-inner-heading">
                  Conectando conhecimento e oportunidades no agronegócio.
                </h2>
                <div className="blog-inner-img">
                  <img
                    loading="lazy"
                    src="/assets/img/blog-expo2025-2.jpg"
                    alt="Hortsoy — Conectando o Campo ao Futuro. imagem interna"
                  />
                </div>
                <p>
                  Nosso objetivo foi promover dias absolutos de negociações oportunas,
                  compartilhamento de conteúdos relevantes e estratégicos, com foco em timing,
                  atualizações tendências e mercadologia aplicada ao universo da cafeicultura.
                </p>
                <h2 className="blog-inner-heading">
                  Fortalecendo parcerias, cultivando resultados.
                </h2>
                <p>
                  Ser Patrocinador deste evento, sempre resulta em avanços magnéticos, pois é um
                  movimento amplamente reconhecido por toda região. Como resultado, houve um aumento
                  significativo em nossa demanda, onde a <strong>HortSoy</strong> com seus Parceiros
                  estratégicos, têm o compromisso e garante as melhores soluções em seu plantio,
                  reforçando o compromisso com a inovação e o desenvolvimento do setor agrícola.
                </p>
                <div className="blog-inner-img">
                  <img
                    loading="lazy"
                    src="/assets/img/blog-expo2025-3.jpg"
                    alt="Hortsoy — Conectando o Campo ao Futuro. imagem interna"
                  />
                </div>
                <h2 className="blog-inner-heading">Juntos, elevamos a produtividade no campo.</h2>
                <p>
                  Seguiremos promovendo encontros técnicos e capacitações para continuar
                  impulsionando a excelência no campo!
                </p>
              </div>
            </div>

            <div className="blog-sidebar-column">
              <div className="sidebar-widget">
                <h3>Últimas Postagens</h3>
                <ul className="sidebar-recent-posts">
                  <li>
                    <Link href="/blog/plantando-ideias">
                      <i className="fas fa-chevron-right"></i> Plantando Ideias – Um Encontro
                      Inspirador no Grupo Hortsoy
                    </Link>
                  </li>

                  <li>
                    <Link href="/blog/novo-centro">
                      <i className="fas fa-chevron-right"></i> Inauguração do Novo Centro
                      Administrativo da HortSoy
                    </Link>
                  </li>

                  <li>
                    <Link href="/blog/barter-cafe">
                      <i className="fas fa-chevron-right"></i> HortSoy Marca Presença no Evento
                      Barter Café 25/26 da Bayer
                    </Link>
                  </li>

                  <li>
                    <Link href="/blog/manejo-soja">
                      <i className="fas fa-chevron-right"></i> HortSoy e Vittia Realizam Evento
                      Técnico sobre Manejo de Soja com Nutrição
                    </Link>
                  </li>

                  <li>
                    <Link href="/blog/produtividade-bayer">
                      <i className="fas fa-chevron-right"></i> Descubra como a HortSoy e a Bayer
                      Impulsionam sua Produtividade Agrícola
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
