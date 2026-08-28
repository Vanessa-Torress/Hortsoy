import Link from 'next/link';

export default function CompanyIntro() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <h1>Sobre Nós</h1>
          <div className="breadcrumb">
            <Link href="/">Início</Link> / Sobre Nós
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="about">
            <div className="about-image reveal-left">
              <div className="about-slider">
                <img loading="lazy" src="/assets/img/about.png" alt="Sobre a Hortsoy" className="slide active" />
                <img loading="lazy" src="/assets/img/about2.png" alt="Sobre a Hortsoy 2" className="slide" />
                <img loading="lazy" src="/assets/img/about3.png" alt="Sobre a Hortsoy 3" className="slide" />
              </div>
            </div>
            <div className="about-content reveal-right">
              <span className="section-title">Nossa História</span>
              <h2>Inovação Real para o Produtor Rural</h2>
              <p>
                A Hortsoy é movida pela inovação e pelo compromisso com o sucesso do produtor rural.
                Localizada em Uberaba, MG, nossa empresa se destaca no fornecimento de insumos de
                alta qualidade e assistência técnica especializada.
              </p>
              <p>
                Acreditamos que a agricultura do futuro une{' '}
                <strong>rentabilidade, sustentabilidade e tecnologia</strong>. Por isso, investimos
                nas melhores soluções para aumentar a sua eficiência de forma consciente.
              </p>

              <div className="about-features">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <p>
                    <strong>Missão:</strong> Potencializar a produtividade agrícola com
                    sustentabilidade.
                  </p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <p>
                    <strong>Visão:</strong> Ser referência nacional em tecnologia e inovação para o
                    campo.
                  </p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <p>
                    <strong>Valores:</strong> Ética, Transparência, Inovação e Respeito à Terra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
