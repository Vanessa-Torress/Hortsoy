import { Link } from 'react-router-dom';

export default function BlogPlantandoIdeias() {
    return (
        <main>

    <section className="page-banner">
        <div className="container">
            <h1>Plantando Ideias – Um Encontro Inspirador no Grupo Hortsoy</h1>
            <div className="breadcrumb">
                <Link to="/">Início</Link> / <Link to="/sobre">Sobre Nós</Link> / Blog
            </div>
        </div>
    </section>

    
    <section className="section-padding blog-detail-section">
        <div className="container">
            <div className="blog-detail-grid">

                
                <div className="blog-main-column">
                    <div className="blog-detail-header">
                        <div className="blog-meta">
                            <span><i className="fas fa-calendar-alt"></i> 16 Jun 2025</span>
                            <span><i className="fas fa-user"></i> Grupo Hortsoy </span>
                        </div>
                        <h2 className="blog-detail-title">Plantando Ideias – Um Encontro Inspirador no Grupo Hortsoy</h2>
                    </div>

                    <div className="blog-detail-featured">
                        <img loading="lazy" src="/assets/img/blog-plantando-ideias.png"
                            alt="Plantando Ideias – Um Encontro Inspirador no Grupo Hortsoy" className="featured-img" />
                    </div>
                    <div className="blog-detail-content-inner">

                        <div className="blog-inner-img"><img loading="lazy" src="/assets/img/blog-plantando-ideias-1.jpg"
                                alt="Plantando Ideias – Um Encontro Inspirador no Grupo Hortsoy imagem interna" /></div>
                        <h2 className="blog-inner-heading">🌱 Plantando Ideias – Um Encontro Inspirador no Grupo HortSoy 🌱
                        </h2>
                        <h2 className="blog-inner-heading">Cultivando ideias, fortalecendo lideranças.</h2>
                        <p>No dia 5 de junho de 2025, vivemos um momento especial em nosso Escritório de Treinamento.
                            Nesta data, realizamos a primeira edição da Roda de Conversa Plantando Ideias, um encontro
                            organizado pela nossa psicóloga corporativa, Camila Matos, voltado especialmente ao time de
                            gestores e lideranças do <strong>Grupo HortSoy</strong>.</p>
                        <p>Semeando inspiração com histórias reais 🚜💚</p>
                        <h2 className="blog-inner-heading">Conectando conhecimento e oportunidades no agronegócio.</h2>
                        <div className="blog-inner-img"><img loading="lazy" src="/assets/img/blog-plantando-ideias-2.jpg"
                                alt="Plantando Ideias – Um Encontro Inspirador no Grupo Hortsoy imagem interna" /></div>
                        <p>Foi uma oportunidade única de troca e aprendizado, na qual tivemos o privilégio de receber
                            convidados muito especiais:</p>
                        <p>Eliesio Carlos Rodrigues, produtor rural da <strong>Mult Culturas</strong> e grande parceiro
                            do <strong>Grupo HortSoy</strong>, compartilhou conosco sua inspiradora trajetória de
                            empreendedorismo no campo. Daniel Amaral, diretor da empresa <strong>UPL</strong>, trouxe
                            uma visão estratégica sobre inovação e parcerias de valor no agronegócio. João Luis de
                            Souza, nosso CEO no <strong>Grupo HortSoy</strong>, dividiu conosco histórias de superação,
                            crescimento e os pilares que sustentam a cultura da nossa empresa.</p>

                        <p>Cada relato foi uma verdadeira semente de inspiração. 🌾</p>
                        <p>Nosso time teve a oportunidade de interagir com os convidados, fazer perguntas, trocar ideias
                            e, principalmente, aprender com exemplos reais de coragem, visão e liderança.</p>
                        <h2 className="blog-inner-heading">Fortalecendo parcerias, cultivando resultados.</h2>
                        <h2 className="blog-inner-heading">Juntos, elevamos a produtividade no campo.</h2>
                        <p>Seguiremos promovendo encontros técnicos e capacitações para continuar impulsionando a
                            excelência no campo!</p>



                    </div>
                </div>

                
                <div className="blog-sidebar-column">
                    <div className="sidebar-widget">
                        <h3>Últimas Postagens</h3>
                        <ul className="sidebar-recent-posts">

                            <li>
                                <Link to="/blog/expo2025">
                                    <i className="fas fa-chevron-right"></i> Hortsoy — Conectando o Campo ao Futuro.
                                </Link>
                            </li>

                            <li>
                                <Link to="/blog/novo-centro">
                                    <i className="fas fa-chevron-right"></i> Inauguração do Novo Centro Administrativo da
                                    HortSoy
                                </Link>
                            </li>

                            <li>
                                <Link to="/blog/barter-cafe">
                                    <i className="fas fa-chevron-right"></i> HortSoy Marca Presença no Evento Barter Café
                                    25/26 da Bayer
                                </Link>
                            </li>

                            <li>
                                <Link to="/blog/manejo-soja">
                                    <i className="fas fa-chevron-right"></i> HortSoy e Vittia Realizam Evento Técnico sobre
                                    Manejo de Soja com Nutrição
                                </Link>
                            </li>

                            <li>
                                <Link to="/blog/produtividade-bayer">
                                    <i className="fas fa-chevron-right"></i> Descubra como a HortSoy e a Bayer Impulsionam
                                    sua Produtividade Agrícola
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
