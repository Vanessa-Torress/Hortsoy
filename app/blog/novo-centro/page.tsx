import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HORTSOY | Agronegócio',
  description:
    'A Hortsoy celebra a inauguração do seu moderno Centro Administrativo em Uberaba - MG, reforçando o compromisso com inovação e pessoas.',
  openGraph: {
    title: 'Inauguração do Novo Centro Administrativo da HortSoy',
    description:
      'Espaço moderno planejado para promover integração, colaboração e suporte de alta eficiência ao agronegócio.',
    images: ['/assets/img/blog-novo-centro.jpg'],
  },
};

export default function BlogNovoCentroPage() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <h1>Inauguração do Novo Centro Administrativo da HortSoy</h1>
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
                    <i className="fas fa-calendar-alt"></i> 14 Fev 2025
                  </span>
                  <span>
                    <i className="fas fa-user"></i> Grupo Hortsoy
                  </span>
                </div>
                <h2 className="blog-detail-title">
                  Inauguração do Novo Centro Administrativo da HortSoy
                </h2>
              </div>

              <div className="blog-detail-featured">
                <img
                  loading="lazy"
                  src="/assets/img/blog-novo-centro.jpg"
                  alt="Inauguração do Novo Centro Administrativo da HortSoy"
                  className="featured-img"
                />
              </div>
              <div className="blog-detail-content-inner">
                <h2 className="blog-inner-heading">Novo Centro Administrativo da HortSoy</h2>
                <p>
                  A <strong>Hortsoy</strong> celebra um novo capítulo em sua jornada com a
                  inauguração do maior e mais moderno Centro Administrativo da empresa, localizado
                  em Uberaba &#8211; MG. Esse espaço não é apenas um ambiente de trabalho; ele
                  representa um compromisso profundo com o cuidado de pessoas e negócios, alinhando
                  nossa missão de promover o crescimento sustentável do agronegócio.
                </p>
                <div className="blog-inner-img">
                  <img
                    loading="lazy"
                    src="/assets/img/blog-novo-centro-2.jpg"
                    alt="Inauguração do Novo Centro Administrativo da HortSoy imagem interna"
                  />
                </div>
                <h2 className="blog-inner-heading">
                  Construímos o futuro do agronegócio com inovação e compromisso.
                </h2>
                <p>
                  Pensado para fortalecer a colaboração e a inovação, o novo centro foi planejado
                  com ambientes integrados que priorizam o bem-estar de nossos colaboradores.
                  Espaços arejados, áreas de convivência, e estruturas que favorecem o diálogo
                  refletem nossa crença de que cuidar das pessoas é fundamental para o sucesso dos
                  negócios. Queremos que nossa equipe se sinta acolhida e inspirada, pois
                  acreditamos que colaboradores motivados e valorizados são a base de um atendimento
                  de excelência e de relações duradouras com nossos parceiros e clientes.
                </p>
                <h2 className="blog-inner-heading">
                  Nosso espaço inspira colaboração e bem-estar todos os dias.
                </h2>
                <p>
                  Além disso, o centro administrativo foi equipado com tecnologias de última
                  geração, facilitando uma gestão mais eficiente e ágil dos processos, sempre com
                  foco na transparência e na entrega de resultados concretos para o agronegócio
                  brasileiro. Esse ambiente foi projetado para nos ajudar a atender as demandas do
                  setor com maior rapidez, permitindo que continuemos a crescer e oferecer soluções
                  inovadoras que façam a diferença na vida de nossos parceiros.
                </p>
                <div className="blog-inner-img">
                  <img
                    loading="lazy"
                    src="/assets/img/blog-novo-centro-3.jpg"
                    alt="Inauguração do Novo Centro Administrativo da HortSoy imagem interna"
                  />
                </div>
                <h2 className="blog-inner-heading">
                  Valorizamos pessoas para fortalecer negócios.
                </h2>
                <p>
                  Acreditamos que essa nova fase da <strong>Hortsoy</strong> representa não só um
                  marco em nossa trajetória, mas também um compromisso renovado com o cuidado das
                  pessoas e o avanço dos negócios, lado a lado. Estamos prontos para essa nova
                  jornada e orgulhosos por poder compartilhar cada conquista com todos que fazem
                  parte da nossa história.
                </p>
                <h2 className="blog-inner-heading">Hortsoy: Crescendo com você, sempre.</h2>
                <p>
                  Estamos prontos para essa nova jornada e orgulhosos por poder compartilhar cada
                  conquista com todos que fazem parte da nossa história.
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
                    <Link href="/blog/expo2025">
                      <i className="fas fa-chevron-right"></i> Hortsoy — Conectando o Campo ao
                      Futuro.
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
