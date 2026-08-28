import type { Metadata } from 'next';
import Link from 'next/link';
import CompanyIntro from '@/features/company/CompanyIntro';
import MapComponent from '@/components/features/map/MapComponent';

export const metadata: Metadata = {
  title: 'HORTSOY | Agronegócio',
  description:
    'Conheça a história da Hortsoy, nossa missão, visão, valores e encontre a unidade mais próxima de você em Minas Gerais.',
};

export default function SobrePage() {
  return (
    <>
      <CompanyIntro />

      <section className="section-padding" style={{ background: '#f9fafb' }}>
        <div className="container">
          <MapComponent />
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--light-bg)' }}>
        <div className="container">
          <div className="section-header-centered">
            <h2>Radar HortSoy: Atualizações do Campo</h2>
            <p style={{ maxWidth: '600px', margin: '15px auto 0', color: 'var(--light-text)' }}>
              Acompanhe nossos eventos, parcerias tecnológicas e os principais marcos do
              agronegócio.
            </p>
          </div>
          <div className="blog-grid">
            <Link href="/blog/plantando-ideias" className="blog-card reveal">
              <div className="blog-image-wrapper">
                <img loading="lazy" src="/assets/img/blog-plantando-ideias.png" alt="Plantando Ideias Hortsoy" />
              </div>
              <div className="blog-content">
                <span className="blog-date">16 Jun 2025</span>
                <h3 className="blog-title">Plantando Ideias – Um Encontro Inspirador no Grupo Hortsoy</h3>
                <p className="blog-excerpt">
                  Encontro focado no engajamento, bem-estar e no compartilhamento de conhecimento
                  essencial para impulsionar a inovação no dia a dia da equipe Hortsoy.
                </p>
                <span className="blog-btn">
                  Ler Post Completo <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </Link>

            <Link href="/blog/expo2025" className="blog-card reveal">
              <div className="blog-image-wrapper">
                <img loading="lazy" src="/assets/img/blog-expo2025.png" alt="Hortsoy Conectando o Campo ao Futuro" />
              </div>
              <div className="blog-content">
                <span className="blog-date">23 Mai 2025</span>
                <h3 className="blog-title">Hortsoy — Conectando o Campo ao Futuro.</h3>
                <p className="blog-excerpt">
                  A Hortsoy marcou presença com soluções tecnológicas inovadoras de bioestimulantes,
                  nutrição de plantas e controle biológico para otimizar os resultados das safras.
                </p>
                <span className="blog-btn">
                  Ler Post Completo <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </Link>

            <Link href="/blog/novo-centro" className="blog-card reveal">
              <div className="blog-image-wrapper">
                <img loading="lazy" src="/assets/img/blog-novo-centro.jpg" alt="Novo Centro Administrativo Hortsoy" />
              </div>
              <div className="blog-content">
                <span className="blog-date">14 Fev 2025</span>
                <h3 className="blog-title">Inauguração do Novo Centro Administrativo da HortSoy</h3>
                <p className="blog-excerpt">
                  Celebramos a inauguração oficial de nossa nova sede administrativa em Uberaba-MG.
                  Um espaço moderno planejado para promover integração, colaboração e suporte de alta
                  eficiência.
                </p>
                <span className="blog-btn">
                  Ler Post Completo <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </Link>

            <Link href="/blog/barter-cafe" className="blog-card reveal">
              <div className="blog-image-wrapper">
                <img loading="lazy" src="/assets/img/blog-barter-cafe.jpg" alt="Barter Café Bayer e Hortsoy" />
              </div>
              <div className="blog-content">
                <span className="blog-date">14 Fev 2025</span>
                <h3 className="blog-title">HortSoy Marca Presença no Evento Barter Café 25/26 da Bayer</h3>
                <p className="blog-excerpt">
                  Nossos consultores estiveram presentes no Barter Café da Bayer em Ribeirão
                  Preto-SP, fortalecendo a parceria comercial e as inovações no manejo e mercado
                  cafeeiro.
                </p>
                <span className="blog-btn">
                  Ler Post Completo <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </Link>

            <Link href="/blog/manejo-soja" className="blog-card reveal">
              <div className="blog-image-wrapper">
                <img loading="lazy" src="/assets/img/blog-manejo-soja.jpg" alt="Manejo de Soja Hortsoy e Vittia" />
              </div>
              <div className="blog-content">
                <span className="blog-date">14 Fev 2025</span>
                <h3 className="blog-title">
                  HortSoy e Vittia Realizam Evento Técnico sobre Manejo de Soja com Nutrição
                </h3>
                <p className="blog-excerpt">
                  Um encontro de campo focado na transferência de novas tecnologias de nutrição
                  avançada e manejo de solo para alavancar a produtividade da cultura da soja.
                </p>
                <span className="blog-btn">
                  Ler Post Completo <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </Link>

            <Link href="/blog/produtividade-bayer" className="blog-card reveal">
              <div className="blog-image-wrapper">
                <img
                  loading="lazy"
                  src="/assets/img/blog-produtividade-bayer.jpg"
                  alt="Produtividade Agrícola Hortsoy e Bayer"
                />
              </div>
              <div className="blog-content">
                <span className="blog-date">11 Fev 2025</span>
                <h3 className="blog-title">
                  Descubra como a HortSoy e a Bayer Impulsionam sua Produtividade Agrícola
                </h3>
                <p className="blog-excerpt">
                  Uma parceria sólida que une biotecnologia de ponta, defensivos e suporte
                  especializado para reduzir o estresse de gestão e otimizar cada safra no campo.
                </p>
                <span className="blog-btn">
                  Ler Post Completo <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
