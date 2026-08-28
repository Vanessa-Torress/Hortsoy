import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HORTSOY | Agronegócio',
  description:
    'Parceria HortSoy e Bayer: biotecnologia de ponta, defensivos e suporte especializado para reduzir o estresse de gestão e otimizar cada safra.',
  openGraph: {
    title: 'Descubra como a HortSoy e a Bayer Impulsionam sua Produtividade Agrícola',
    description:
      'Soluções completas que vão além do básico: genética avançada, proteção de cultivos e tecnologia digital integrados.',
    images: ['/assets/img/blog-produtividade-bayer.jpg'],
  },
};

export default function BlogProdutividadeBayerPage() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <h1>Descubra como a HortSoy e a Bayer Impulsionam sua Produtividade Agrícola</h1>
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
                    <i className="fas fa-calendar-alt"></i> 11 Fev 2025
                  </span>
                  <span>
                    <i className="fas fa-user"></i> Grupo Hortsoy
                  </span>
                </div>
                <h2 className="blog-detail-title">
                  Descubra como a HortSoy e a Bayer Impulsionam sua Produtividade Agrícola
                </h2>
              </div>

              <div className="blog-detail-featured">
                <img
                  loading="lazy"
                  src="/assets/img/blog-produtividade-bayer.jpg"
                  alt="Descubra como a HortSoy e a Bayer Impulsionam sua Produtividade Agrícola"
                  className="featured-img"
                />
              </div>
              <div className="blog-detail-content-inner">
                <h2 className="blog-inner-heading">
                  Descubra como a HortSoy e a Bayer Impulsionam sua Produtividade Agrícola
                </h2>
                <p>
                  Na <strong>HortSoy</strong>, entendemos os desafios diários do agricultor. Por
                  isso, em parceria com a <strong>Bayer</strong>, trazemos soluções inovadoras que
                  vão além do básico. Nossos insumos, combinados com a expertise{' '}
                  <strong>Bayer</strong>, são projetados para otimizar cada etapa do seu plantio,
                  desde a preparação do solo até a colheita. Queremos que você não apenas produza,
                  mas que alcance o máximo potencial da sua lavoura. Explore nossas dicas e produtos
                  e veja a diferença que a parceria <strong>HortSoy</strong> e{' '}
                  <strong>Bayer</strong> pode fazer no seu campo!
                </p>
                <div className="blog-inner-img">
                  <img
                    loading="lazy"
                    src="/assets/img/blog-produtividade-bayer-2.jpg"
                    alt="HortSoy e Bayer – Produtividade Agrícola imagem interna"
                  />
                </div>
                <h2 className="blog-inner-heading">Benefícios da Parceria HortSoy e Bayer</h2>
                <p>
                  A parceria <strong>HortSoy</strong> e <strong>Bayer</strong> oferece um pacote
                  completo para o agricultor, desde sementes de alta performance até soluções de
                  proteção de cultivos de última geração. Isso significa maior resistência a pragas
                  e doenças, plantas mais vigorosas e, consequentemente, colheitas mais abundantes.
                </p>
                <h2 className="blog-inner-heading">
                  Produtos e Soluções que Transformam sua Produção
                </h2>
                <p>
                  Descubra as sementes <strong>HortSoy</strong>, geneticamente melhoradas para se
                  adaptarem às diversas condições climáticas e de solo, e que, combinadas com os
                  defensivos agrícolas <strong>Bayer</strong>, garantem a sanidade da sua lavoura
                  durante todo o ciclo.
                </p>
                <p>
                  Explore as soluções digitais <strong>Bayer</strong>, como o Climate FieldView™,
                  que, integradas aos nossos insumos, oferecem um monitoramento preciso da sua
                  lavoura, permitindo decisões mais assertivas e otimização de recursos.
                </p>
                <h2 className="blog-inner-heading">Como Maximizar sua Produtividade?</h2>
                <p>
                  Visite nosso site ou entre em contato com um de nossos consultores para saber mais
                  sobre as soluções <strong>HortSoy</strong> e <strong>Bayer</strong> e como podemos
                  impulsionar a produtividade da sua lavoura. Não perca tempo, comece hoje mesmo a
                  transformar seus resultados!
                </p>
                <p>
                  Participe dos nossos workshops e treinamentos em parceria com a{' '}
                  <strong>Bayer</strong> e aprenda as melhores práticas para maximizar o potencial
                  da sua produção agrícola.
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
