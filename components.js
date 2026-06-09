class HortsoyHeader extends HTMLElement {
    connectedCallback() {
        const basePath = this.getAttribute('base-path') || './';
        
        this.innerHTML = `
            <header class="top-header">
                <div class="container">
                    <div class="top-header-info">
                        <span><i class="fas fa-phone"></i> (34) 99732-3304</span>
                        <span><i class="fas fa-envelope"></i> atendimento@hortsoy.com.br</span>
                    </div>
                    <div class="top-header-links">
                        <a href="https://www.facebook.com/Hortsoy/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Hortsoy"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/hortsoy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Hortsoy"><i class="fab fa-instagram"></i></a>
                        <a href="https://br.linkedin.com/company/grupo-hortsoy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Grupo Hortsoy"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://hortsoy.com.br/wp-login.php" class="btn-portal" target="_blank" rel="noopener noreferrer">Portal do Colaborador</a>
                    </div>
                </div>
            </header>
            <nav class="main-nav">
                <div class="container">
                    <a href="${basePath}index.html" class="logo">
                        <img loading="lazy" src="${basePath}assets/img/novo-logo.png" alt="Hortsoy Logo">
                    </a>
                    <ul class="nav-links">
                        <li><a href="${basePath}index.html" data-page="index">Início</a></li>
                        <li><a href="${basePath}sobre.html" data-page="sobre">Sobre Nós</a></li>
                        <li><a href="${basePath}servicos.html" data-page="servicos">Serviços</a></li>
                        <li><a href="${basePath}contato.html" data-page="contato">Contato</a></li>
                    </ul>
                    <button class="menu-toggle" aria-label="Abrir Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        `;

        // Active State Logic
        this.setActiveLink();

        // Bind Mobile Menu Logic (since it dynamically injected now)
        this.bindMobileMenu();

        // Bind Scroll Logic for sticky navbar
        this.bindScrollLogic();
    }

    setActiveLink() {
        const path = window.location.pathname.toLowerCase();
        let currentPage = 'index'; // Default
        
        if (path.includes('sobre')) {
            currentPage = 'sobre';
        } else if (path.includes('servico') || path.includes('serviço') || path.includes('services')) {
            currentPage = 'servicos';
        } else if (path.includes('contato')) {
            currentPage = 'contato';
        } else if (path.includes('index') || path === '/' || path.endsWith('/')) {
            currentPage = 'index';
        }

        // Reset all active states to prevent duplicates
        this.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
        });

        const activeLink = this.querySelector(`[data-page="${currentPage}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    bindMobileMenu() {
        const menuToggle = this.querySelector('.menu-toggle');
        const navLinks = this.querySelector('.nav-links');
        
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                menuToggle.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
            
            this.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    menuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });

            this._handleDocumentClick = (e) => {
                if (!this.contains(e.target)) {
                    menuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            };
            document.addEventListener('click', this._handleDocumentClick);
        }
    }

    bindScrollLogic() {
        const mainNav = this.querySelector('.main-nav');
        if (mainNav) {
            this._handleScroll = () => {
                if (window.scrollY > 50) {
                    mainNav.classList.add('scrolled');
                } else {
                    mainNav.classList.remove('scrolled');
                }
            };
            window.addEventListener('scroll', this._handleScroll);
        }
    }

    disconnectedCallback() {
        if (this._handleDocumentClick) {
            document.removeEventListener('click', this._handleDocumentClick);
        }
        if (this._handleScroll) {
            window.removeEventListener('scroll', this._handleScroll);
        }
    }
}

class HortsoyFooter extends HTMLElement {
    connectedCallback() {
        const basePath = this.getAttribute('base-path') || './';
        
        this.innerHTML = `
            <footer>
                <div class="container">
                    <div class="footer-grid">
                        <div class="footer-col">
                            <img loading="lazy" src="${basePath}assets/img/logo-branco.png" alt="Hortsoy" class="footer-logo">
                            <p>Inovação, tecnologia e sustentabilidade para o agronegócio de ponta a ponta.</p>
                            <div class="footer-social">
                                <a href="https://www.facebook.com/Hortsoy/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Hortsoy"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com/hortsoy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Hortsoy"><i class="fab fa-instagram"></i></a>
                                <a href="https://br.linkedin.com/company/grupo-hortsoy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Grupo Hortsoy"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="footer-col">
                            <h4>Links Rápidos</h4>
                            <ul class="footer-links">
                                <li><a href="${basePath}index.html">Início</a></li>
                                <li><a href="${basePath}sobre.html">Sobre Nós</a></li>
                                <li><a href="${basePath}servicos.html">Serviços</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Contato</h4>
                            <ul class="footer-links">
                                <li><i class="fas fa-location-dot"></i> Av. Santos Dumont, 130 - Uberaba, MG</li>
                                <li><i class="fas fa-phone"></i> (34) 99732-3304</li>
                                <li><i class="fas fa-envelope"></i> atendimento@hortsoy.com.br</li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2026 Hortsoy. Todos os direitos reservados.</p>
                        <p class="footer-signature">Desenvolvido por Vanessa Torres</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('hortsoy-header', HortsoyHeader);
customElements.define('hortsoy-footer', HortsoyFooter);
