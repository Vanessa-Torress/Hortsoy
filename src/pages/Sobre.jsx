import { Link } from 'react-router-dom';
import { useState } from 'react';
import MapComponent from '../components/MapComponent';

export default function Sobre() {
    return (
        <main>
            {/* Page Banner */}
            <section className="page-banner">
                <div className="container">
                    <h1>Sobre Nós</h1>
                    <div className="breadcrumb">
                        <Link to="/">Início</Link> / Sobre Nós
                    </div>
                </div>
            </section>

            {/* Content Section */}
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
                            <p>A Hortsoy é movida pela inovação e pelo compromisso com o sucesso do produtor rural. Localizada em Uberaba, MG, nossa empresa se destaca no fornecimento de insumos de alta qualidade e assistência técnica especializada.</p>
                            <p>Acreditamos que a agricultura do futuro une <strong>rentabilidade, sustentabilidade e tecnologia</strong>. Por isso, investimos nas melhores soluções para aumentar a sua eficiência de forma consciente.</p>

                            <div className="about-features">
                                <div className="feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <p><strong>Missão:</strong> Potencializar a produtividade agrícola com sustentabilidade.</p>
                                </div>
                                <div className="feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <p><strong>Visão:</strong> Ser referência nacional em tecnologia e inovação para o campo.</p>
                                </div>
                                <div className="feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <p><strong>Valores:</strong> Ética, Transparência, Inovação e Respeito à Terra.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Branches Map Section */}
            <section className="section-padding" style={{ background: '#f9fafb' }}>
                <div className="container">
                    <MapComponent />
                </div>
            </section>

            {/* Blog Section */}
            <section className="section-padding" style={{ background: 'var(--light-bg)' }}>
                <div className="container">
                    <div className="section-header-centered">
                        <h2>Radar HortSoy: Atualizações do Campo</h2>
                        <p style={{ maxWidth: '600px', margin: '15px auto 0', color: 'var(--light-text)' }}>Acompanhe nossos eventos, parcerias tecnológicas e os principais marcos do agronegócio.</p>
                    </div>
                    <div className="blog-grid">
                        <Link to="/blog/plantando-ideias" className="blog-card reveal">
                            <div className="blog-image-wrapper">
                                <img loading="lazy" src="/assets/img/blog-plantando-ideias.png" alt="Plantando Ideias Hortsoy" />
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">16 Jun 2025</span>
                                <h3 className="blog-title">Plantando Ideias – Um Encontro Inspirador no Grupo Hortsoy</h3>
                                <p className="blog-excerpt">Encontro focado no engajamento, bem-estar e no compartilhamento de conhecimento essencial para impulsionar a inovação no dia a dia da equipe Hortsoy.</p>
                                <span className="blog-btn">
                                    Ler Post Completo <i className="fas fa-arrow-right"></i>
                                </span>
                            </div>
                        </Link>

                        <Link to="/blog/expo2025" className="blog-card reveal">
                            <div className="blog-image-wrapper">
                                <img loading="lazy" src="/assets/img/blog-expo2025.png" alt="Hortsoy Conectando o Campo ao Futuro" />
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">23 Mai 2025</span>
                                <h3 className="blog-title">Hortsoy — Conectando o Campo ao Futuro.</h3>
                                <p className="blog-excerpt">A Hortsoy marcou presença com soluções tecnológicas inovadoras de bioestimulantes, nutrição de plantas e controle biológico para otimizar os resultados das safras.</p>
                                <span className="blog-btn">
                                    Ler Post Completo <i className="fas fa-arrow-right"></i>
                                </span>
                            </div>
                        </Link>

                        <Link to="/blog/novo-centro" className="blog-card reveal">
                            <div className="blog-image-wrapper">
                                <img loading="lazy" src="/assets/img/blog-novo-centro.jpg" alt="Novo Centro Administrativo Hortsoy" />
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">14 Fev 2025</span>
                                <h3 className="blog-title">Inauguração do Novo Centro Administrativo da HortSoy</h3>
                                <p className="blog-excerpt">Celebramos a inaugururação oficial de nossa nova sede administrativa em Uberaba-MG. Um espaço moderno planejado para promover integração, colaboração e suporte de alta eficiência.</p>
                                <span className="blog-btn">
                                    Ler Post Completo <i className="fas fa-arrow-right"></i>
                                </span>
                            </div>
                        </Link>

                        <Link to="/blog/barter-cafe" className="blog-card reveal">
                            <div className="blog-image-wrapper">
                                <img loading="lazy" src="/assets/img/blog-barter-cafe.jpg" alt="Barter Café Bayer e Hortsoy" />
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">14 Fev 2025</span>
                                <h3 className="blog-title">HortSoy Marca Presença no Evento Barter Café 25/26 da Bayer</h3>
                                <p className="blog-excerpt">Nossos consultores estiveram presentes no Barter Café da Bayer em Ribeirão Preto-SP, fortalecendo a parceria comercial e as inovações no manejo e mercado cafeeiro.</p>
                                <span className="blog-btn">
                                    Ler Post Completo <i className="fas fa-arrow-right"></i>
                                </span>
                            </div>
                        </Link>

                        <Link to="/blog/manejo-soja" className="blog-card reveal">
                            <div className="blog-image-wrapper">
                                <img loading="lazy" src="/assets/img/blog-manejo-soja.jpg" alt="Manejo de Soja Hortsoy e Vittia" />
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">14 Fev 2025</span>
                                <h3 className="blog-title">HortSoy e Vittia Realizam Evento Técnico sobre Manejo de Soja com Nutrição</h3>
                                <p className="blog-excerpt">Um encontro de campo focado na transferência de novas tecnologias de nutrição avançada e manejo de solo para alavancar a produtividade da cultura da soja.</p>
                                <span className="blog-btn">
                                    Ler Post Completo <i className="fas fa-arrow-right"></i>
                                </span>
                            </div>
                        </Link>

                        <Link to="/blog/produtividade-bayer" className="blog-card reveal">
                            <div className="blog-image-wrapper">
                                <img loading="lazy" src="/assets/img/blog-produtividade-bayer.jpg" alt="Produtividade Agrícola Hortsoy e Bayer" />
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">11 Fev 2025</span>
                                <h3 className="blog-title">Descubra como a HortSoy e a Bayer Impulsionam sua Produtividade Agrícola</h3>
                                <p className="blog-excerpt">Uma parceria sólida que une biotecnologia de ponta, defensivos e suporte especializado para reduzir o estresse de gestão e otimizar cada safra no campo.</p>
                                <span className="blog-btn">
                                    Ler Post Completo <i className="fas fa-arrow-right"></i>
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
