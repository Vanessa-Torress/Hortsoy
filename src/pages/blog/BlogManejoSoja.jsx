import { Link } from 'react-router-dom';

export default function BlogManejoSoja() {
    return (
        <main>

    <section className="page-banner">
        <div className="container">
            <h1>HortSoy e Vittia Realizam Evento Técnico sobre Manejo de Soja com Nutrição</h1>
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
                            <span><i className="fas fa-calendar-alt"></i> 14 Fev 2025</span>
                            <span><i className="fas fa-user"></i> Grupo Hortsoy</span>
                        </div>
                        <h2 className="blog-detail-title">HortSoy e Vittia Realizam Evento Técnico sobre Manejo de Soja com Nutrição</h2>
                    </div>
                    
        <div className="blog-detail-featured">
            <img loading="lazy" src="/assets/img/blog-manejo-soja.jpg" alt="HortSoy e Vittia Realizam Evento Técnico sobre Manejo de Soja com Nutrição" className="featured-img" />
        </div>
        <div className="blog-detail-content-inner">
    
            <div className="blog-inner-img"><img loading="lazy" src="/assets/img/blog-manejo-soja-1.jpg" alt="HortSoy e Vittia Realizam Evento Técnico sobre Manejo de Soja com Nutrição imagem interna" /></div>
            <h2 className="blog-inner-heading">HortSoy e Vittia Realizam Evento Técnico sobre Manejo de Soja com Nutrição</h2>
            <p>No dia 29 de janeiro de 2025, a <strong>HortSoy</strong>, em parceria com a <strong>Vittia</strong>, promoveu um evento técnico na Fazenda Cantão, de Rubéns Rezende, em Piumhí/MG. Com foco nas melhores práticas para o manejo de soja aliado à nutrição, o encontro reuniu clientes e parceiros, proporcionando uma excelente oportunidade para fortalecer conexões e explorar novas oportunidades no agronegócio.</p>
            <div className="blog-inner-img"><img loading="lazy" src="/assets/img/blog-manejo-soja-2.jpg" alt="HortSoy e Vittia Realizam Evento Técnico sobre Manejo de Soja com Nutrição imagem interna" /></div>
            <h2 className="blog-inner-heading">Conectando conhecimento e oportunidades no agronegócio.</h2>
            <p>O principal objetivo do evento foi disseminar conhecimento relevante, compartilhar boas práticas e fornecer informações estratégicas para melhorar a produtividade e a eficiência no cultivo da soja.</p>
            <h2 className="blog-inner-heading">Fortalecendo parcerias, cultivando resultados.</h2>
            <p>A iniciativa foi um sucesso, sendo amplamente reconhecida pelos participantes, que destacaram a qualidade do conteúdo apresentado e a aplicabilidade das soluções discutidas. Como resultado, houve um aumento na demanda pelo portfólio de soluções oferecido pela <strong>HortSoy</strong> e <strong>Vittia</strong>, reforçando o compromisso de ambas as empresas com a inovação e o desenvolvimento do setor agrícola.</p>
            
            <h2 className="blog-inner-heading">Juntos, elevamos a produtividade no campo.</h2>
            <p>Seguiremos promovendo encontros técnicos e capacitações para continuar impulsionando a excelência no campo!</p>

        </div>
                </div>

                
                <div className="blog-sidebar-column">
                    <div className="sidebar-widget">
                        <h3>Últimas Postagens</h3>
                        <ul className="sidebar-recent-posts">
                            
            <li>
                <Link to="/blog/plantando-ideias">
                    <i className="fas fa-chevron-right"></i> Plantando Ideias – Um Encontro Inspirador no Grupo Hortsoy
                </Link>
            </li>
        
            <li>
                <Link to="/blog/expo2025">
                    <i className="fas fa-chevron-right"></i> Hortsoy — Conectando o Campo ao Futuro.
                </Link>
            </li>
        
            <li>
                <Link to="/blog/novo-centro">
                    <i className="fas fa-chevron-right"></i> Inauguração do Novo Centro Administrativo da HortSoy
                </Link>
            </li>
        
            <li>
                <Link to="/blog/barter-cafe">
                    <i className="fas fa-chevron-right"></i> HortSoy Marca Presença no Evento Barter Café 25/26 da Bayer
                </Link>
            </li>
        
            <li>
                <Link to="/blog/produtividade-bayer">
                    <i className="fas fa-chevron-right"></i> Descubra como a HortSoy e a Bayer Impulsionam sua Produtividade Agrícola
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
