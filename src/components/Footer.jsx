import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <img loading="lazy" src="/assets/img/logo-branco.png" alt="Hortsoy" className="footer-logo" />
                        <p>Inovação, tecnologia e sustentabilidade para o agronegócio de ponta a ponta.</p>
                        <div className="footer-social">
                            <a href="https://www.facebook.com/Hortsoy/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Hortsoy"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/hortsoy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Hortsoy"><i className="fab fa-instagram"></i></a>
                            <a href="https://br.linkedin.com/company/grupo-hortsoy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Grupo Hortsoy"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Links Rápidos</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Início</Link></li>
                            <li><Link to="/sobre">Sobre Nós</Link></li>
                            <li><Link to="/servicos">Serviços</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contato</h4>
                        <ul className="footer-links">
                            <li><i className="fas fa-location-dot"></i> Av. Santos Dumont, 130 - Uberaba, MG</li>
                            <li><i className="fas fa-phone"></i> (34) 99732-3304</li>
                            <li><i className="fas fa-envelope"></i> atendimento@hortsoy.com.br</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Hortsoy. Todos os direitos reservados.</p>
                    <p className="footer-signature">Desenvolvido por Vanessa Torres</p>
                </div>
            </div>
        </footer>
    );
}
