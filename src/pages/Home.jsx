import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <section id="inicio" className="hero">
                <div className="container">
                    <div className="hero-content reveal">
                        <span className="section-title" style={{ color: 'var(--accent-color)' }}>Inovação no Campo</span>
                        <h1>O Futuro da Sua Lavoura Começa Aqui</h1>
                        <p>Soluções de ponta em genética e nutrição para maximizar sua colheita com sustentabilidade.</p>
                        <div className="hero-btns">
                            <a href="#produtos" className="btn btn-accent">Ver Soluções</a>
                            <a href="#empresa" className="btn btn-outline" style={{ marginLeft: '15px' }}>Nossa História</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="empresa" className="section-padding">
                <div className="container">
                    <div className="about">
                        <div className="about-image reveal-left">
                            <div className="about-slider">
                                <img loading="lazy" src="/assets/img/about.png" alt="Tecnologia Agrícola" className="slide active" />
                                <img loading="lazy" src="/assets/img/about2.png" alt="Tecnologia Agrícola 2" className="slide" />
                                <img loading="lazy" src="/assets/img/about3.png" alt="Tecnologia Agrícola 3" className="slide" />
                            </div>
                        </div>
                        <div className="about-content reveal-right">
                            <span className="section-title">A HortSoy</span>
                            <h2>Sua Parceira Estratégica no Agronegócio</h2>
                            <p>Conectamos o campo às tecnologias mais avançadas do mundo. Nossa missão é elevar a produtividade da sua lavoura, garantindo <strong>rentabilidade máxima</strong> e total respeito ao meio ambiente.</p>
                            <p>Com décadas de mercado, somos a escolha número um em genética e proteção de cultivos.</p>
                            <Link to="/sobre" className="btn btn-primary" style={{ marginTop: '20px' }}>Nossa Empresa</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="produtos" className="section-padding" style={{ background: 'var(--light-bg)' }}>
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
                    </div>
                </div>
            </section>

            {/* Specialties Section */}
            <section id="especialidades" className="section-padding" style={{ background: 'var(--light-bg)' }}>
                <div className="container">
                    <div className="section-header-centered">
                        <span className="section-title">Por que escolher a Hortsoy?</span>
                        <h2>Nossas Especialidades</h2>
                    </div>
                    <div className="services-grid">
                        <div className="service-card reveal">
                            <div className="service-icon"><i className="fas fa-award"></i></div>
                            <h3>Insumos de Qualidade</h3>
                            <p>Trabalhamos apenas com as melhores marcas de sementes e defensivos do mercado global.</p>
                        </div>
                        <div className="service-card reveal">
                            <div className="service-icon"><i className="fas fa-handshake"></i></div>
                            <h3>Crédito Flexível</h3>
                            <p>Programas de barter e financiamento adaptados ao ciclo da sua cultura.</p>
                        </div>
                        <div className="service-card reveal">
                            <div className="service-icon"><i className="fas fa-user-doctor"></i></div>
                            <h3>Manejo Especializado</h3>
                            <p>Agrônomos dedicados que acompanham sua lavoura do plantio à colheita.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Details */}
            <section className="section-padding" style={{ background: '#ffffff' }}>
                <div className="container">
                    <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div className="section-header-centered">
                            <h2 style={{ color: 'var(--primary-color)' }}>Mais do que insumos, entregamos soluções completas para o agronegócio</h2>
                            <p style={{ fontSize: '1.1rem', marginTop: '20px', color: 'var(--text-color)' }}>Com tecnologia, crédito e suporte especializado para impulsionar os resultados da sua lavoura.</p>
                        </div>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                            <div style={{ background: 'var(--light-bg)', padding: '25px', borderRadius: '10px', borderLeft: '4px solid var(--secondary-color)' }}>
                                <h4 style={{ marginBottom: '10px', color: 'var(--primary-color)' }}><i className="fas fa-seedling" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i>Insumos Agrícolas de Qualidade</h4>
                                <p style={{ fontSize: '0.95rem' }}>Trabalhamos com sementes, fertilizantes e defensivos das principais marcas do mercado, garantindo segurança, produtividade e alto desempenho no campo.</p>
                            </div>
                            <div style={{ background: 'var(--light-bg)', padding: '25px', borderRadius: '10px', borderLeft: '4px solid var(--secondary-color)' }}>
                                <h4 style={{ marginBottom: '10px', color: 'var(--primary-color)' }}><i className="fas fa-coins" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i>Crédito e Operações Barter</h4>
                                <p style={{ fontSize: '0.95rem' }}>Oferecemos soluções financeiras flexíveis, incluindo operações de barter, facilitando o acesso aos insumos necessários para cada etapa da safra.</p>
                            </div>
                            <div style={{ background: 'var(--light-bg)', padding: '25px', borderRadius: '10px', borderLeft: '4px solid var(--secondary-color)' }}>
                                <h4 style={{ marginBottom: '10px', color: 'var(--primary-color)' }}><i className="fas fa-users" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i>Equipe Técnica Especializada</h4>
                                <p style={{ fontSize: '0.95rem' }}>Contamos com agrônomos e consultores preparados para oferecer orientações personalizadas, auxiliando na tomada de decisões e no manejo eficiente da lavoura.</p>
                            </div>
                            <div style={{ background: 'var(--light-bg)', padding: '25px', borderRadius: '10px', borderLeft: '4px solid var(--secondary-color)' }}>
                                <h4 style={{ marginBottom: '10px', color: 'var(--primary-color)' }}><i className="fas fa-laptop-code" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i>Tecnologia e Inovação no Campo</h4>
                                <p style={{ fontSize: '0.95rem' }}>Utilizamos ferramentas e soluções tecnológicas que ajudam o produtor a monitorar, planejar e otimizar suas operações com mais precisão.</p>
                            </div>
                            <div style={{ background: 'var(--light-bg)', padding: '25px', borderRadius: '10px', borderLeft: '4px solid var(--secondary-color)' }}>
                                <h4 style={{ marginBottom: '10px', color: 'var(--primary-color)' }}><i className="fas fa-comments" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i>Atendimento Próximo e Personalizado</h4>
                                <p style={{ fontSize: '0.95rem' }}>Valorizamos o relacionamento com nossos clientes, oferecendo suporte ágil e acompanhamento contínuo durante toda a jornada produtiva.</p>
                            </div>
                            <div style={{ background: 'var(--light-bg)', padding: '25px', borderRadius: '10px', borderLeft: '4px solid var(--secondary-color)' }}>
                                <h4 style={{ marginBottom: '10px', color: 'var(--primary-color)' }}><i className="fas fa-map-marked-alt" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i>Presença Regional e Conhecimento Local</h4>
                                <p style={{ fontSize: '0.95rem' }}>Conhecemos a realidade do produtor rural da região e oferecemos soluções adequadas às características de cada propriedade e cultura.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item reveal">
                            <div className="stat-icon"><i className="fas fa-leaf"></i></div>
                            <h3 className="counter" data-target="10">0</h3>
                            <p>Culturas</p>
                        </div>
                        <div className="stat-item reveal">
                            <div className="stat-icon"><i className="fas fa-users-gear"></i></div>
                            <h3 className="counter" data-target="179">0</h3>
                            <p>Equipe Especializada</p>
                        </div>
                        <div className="stat-item reveal">
                            <div className="stat-icon"><i className="fas fa-wheat-awn"></i></div>
                            <h3 className="counter" data-target="3155">0</h3>
                            <p>Colheitas Sucedidas</p>
                        </div>
                        <div className="stat-item reveal">
                            <div className="stat-icon"><i className="fas fa-house-chimney-window"></i></div>
                            <h3 className="counter" data-target="501">0</h3>
                            <p>Fazendas Atendidas</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
