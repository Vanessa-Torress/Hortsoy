import { Link } from 'react-router-dom';

export default function BlogBarterCafe() {
    return (
        <main>

    <section className="page-banner">
        <div className="container">
            <h1>HortSoy Marca Presença no Evento Barter Café 25/26 da Bayer</h1>
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
                        <h2 className="blog-detail-title">HortSoy Marca Presença no Evento Barter Café 25/26 da Bayer</h2>
                    </div>
                    
        <div className="blog-detail-featured">
            <img loading="lazy" src="/assets/img/blog-barter-cafe.jpg" alt="HortSoy Marca Presença no Evento Barter Café 25/26 da Bayer" className="featured-img" />
        </div>
        <div className="blog-detail-content-inner">

            <h2 className="blog-inner-heading">HortSoy Fortalece Estratégia no Barter Café 25/26</h2>
            <p>No dia 20 de janeiro de 2025, Ribeirão Preto/SP foi palco de um evento exclusivo promovido pela <strong>Bayer</strong>: o Barter Café 25/26. A iniciativa reuniu os times da Cultura do Café de diversos canais para uma imersão estratégica voltada para o novo ciclo.</p>
            <div className="blog-inner-img"><img loading="lazy" src="/assets/img/blog-barter-cafe-2.jpg" alt="HortSoy Marca Presença no Evento Barter Café 25/26 da Bayer imagem interna" /></div>

            <h2 className="blog-inner-heading">Com presença forte e compromisso estratégico, a HortSoy impulsiona o futuro da cultura do café!</h2>
            <p>A <strong>HortSoy</strong> se destacou pela presença maciça de todos os seus consultores e lideranças, demonstrando o forte compromisso da empresa com este segmento tão relevante para o agronegócio. A expectativa em torno do evento era grande, pois representava um marco significativo no planejamento e execução das estratégias para o novo ciclo cafeeiro.</p>
            <div className="blog-inner-img"><img loading="lazy" src="/assets/img/blog-barter-cafe-3.jpg" alt="HortSoy Marca Presença no Evento Barter Café 25/26 da Bayer imagem interna" /></div>
            <h2 className="blog-inner-heading">Fortalecendo nossa estratégia, alinhamos equipes e traçamos ações assertivas para impulsionar a cultura do café no campo!</h2>
            <p>O principal objetivo do encontro foi impulsionar a orientação estratégica para a cultura do café, garantindo que todos os envolvidos estivessem completamente alinhados e preparados para atuar de maneira assertiva no campo. O evento proporcionou insights valiosos, promovendo discussões aprofundadas e alinhamentos essenciais para a implementação das iniciativas previstas.</p>
            <h2 className="blog-inner-heading">Acompanharemos de perto os desdobramentos e inovações que este ciclo trará para a cultura do café, sempre buscando a melhor performance para nossos parceiros e clientes.</h2>
            <p>O saldo do evento foi extremamente positivo. A equipe <strong>HortSoy</strong> saiu motivada e confiante na execução das estratégias traçadas, reforçando o compromisso da empresa em atender com excelência os produtores de café. O foco claro no cliente e nas necessidades do mercado continua sendo a diretriz principal da <strong>HortSoy</strong> para o sucesso nesta jornada.</p>

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
                <Link to="/blog/manejo-soja">
                    <i className="fas fa-chevron-right"></i> HortSoy e Vittia Realizam Evento Técnico sobre Manejo de Soja com Nutrição
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
