import { Link } from 'react-router-dom';

export default function Servicos() {
    return (
        <main>
            {/* Page Banner */}
            <section className="page-banner">
                <div className="container">
                    <h1>Nossos Serviços</h1>
                    <div className="breadcrumb">
                        <Link to="/">Início</Link> / Serviços
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="produtos" className="section-padding">
                <div className="container">
                    <div className="section-header-centered">
                        <span className="section-title">O que oferecemos</span>
                        <h2>Nosso Portfólio de Soluções</h2>
                    </div>
                    <div className="services-grid">
                        <div className="service-card reveal">
                            <div className="service-icon"><i className="fas fa-seedling"></i></div>
                            <h3>Sementes</h3>
                            <p>Genética de ponta para garantir a melhor germinação e vigor da sua lavoura.</p>
                        </div>
                        <div className="service-card reveal">
                            <div className="service-icon"><i className="fas fa-flask"></i></div>
                            <h3>Fertilizantes</h3>
                            <p>Nutrição equilibrada para que sua planta expresse todo o seu potencial produtivo.</p>
                        </div>
                        <div className="service-card reveal">
                            <div className="service-icon"><i className="fas fa-shield-halved"></i></div>
                            <h3>Defensivos</h3>
                            <p>Proteção eficiente contra pragas e doenças, mantendo a saúde da sua plantação.</p>
                        </div>
                        <div className="service-card reveal">
                            <div className="service-icon"><i className="fas fa-leaf"></i></div>
                            <h3>Biológicos</h3>
                            <p>Manejo sustentável e controle biológico para otimizar os resultados das safras de forma natural.</p>
                        </div>
                        <div className="service-card reveal">
                            <div className="service-icon"><i className="fas fa-vial"></i></div>
                            <h3>Análise de Solo</h3>
                            <p>Diagnóstico preciso para correção e adubação exata da sua área de plantio.</p>
                        </div>
                        <div className="service-card reveal">
                            <div className="service-icon"><i className="fas fa-tractor"></i></div>
                            <h3>Agricultura de Precisão</h3>
                            <p>Tecnologia e dados aplicados para maximizar cada metro quadrado da sua fazenda.</p>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}
