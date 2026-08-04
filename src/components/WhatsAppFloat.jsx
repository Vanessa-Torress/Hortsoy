export default function WhatsAppFloat() {
    return (
        <div className="whatsapp-float-container">
            <div className="whatsapp-card">
                <div className="whatsapp-card-header">
                    <div className="whatsapp-avatar">
                        <div className="whatsapp-avatar-img">
                            <i className="fas fa-headset"></i>
                        </div>
                        <span className="whatsapp-avatar-status"></span>
                    </div>
                    <div className="whatsapp-card-info">
                        <h4>Suporte Hortsoy</h4>
                        <span>Online</span>
                    </div>
                </div>
                <div className="whatsapp-card-body">
                    <p>Olá! Como podemos ajudar sua lavoura hoje? Fale com nosso especialista.</p>
                    <a href="https://wa.me/5534997323304?text=Olá!+Gostaria+de+saber+mais+sobre+as+soluções+da+Hortsoy." 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="whatsapp-card-btn">
                        <i className="fab fa-whatsapp"></i> Iniciar Conversa
                    </a>
                </div>
            </div>
            <a href="https://wa.me/5534997323304?text=Olá!+Gostaria+de+saber+mais+sobre+as+soluções+da+Hortsoy." 
               className="whatsapp-badge-button" 
               target="_blank" 
               rel="noopener noreferrer" 
               aria-label="Fale Conosco no WhatsApp">
                <span className="whatsapp-status-dot"></span>
                <i className="fab fa-whatsapp"></i>
            </a>
        </div>
    );
}
