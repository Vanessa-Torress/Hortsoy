import Link from 'next/link';

export default function BlogSidebar() {
  return (
    <div className="blog-sidebar-column">
      <div className="sidebar-widget">
        <h3>Últimas Postagens</h3>
        <ul className="sidebar-recent-posts">
          <li>
            <Link href="/blog/expo2025">
              <i className="fas fa-chevron-right"></i> Hortsoy — Conectando o Campo ao Futuro.
            </Link>
          </li>

          <li>
            <Link href="/blog/novo-centro">
              <i className="fas fa-chevron-right"></i> Inauguração do Novo Centro Administrativo da HortSoy
            </Link>
          </li>

          <li>
            <Link href="/blog/barter-cafe">
              <i className="fas fa-chevron-right"></i> HortSoy Marca Presença no Evento Barter Café 25/26 da Bayer
            </Link>
          </li>

          <li>
            <Link href="/blog/manejo-soja">
              <i className="fas fa-chevron-right"></i> HortSoy e Vittia Realizam Evento Técnico sobre Manejo de Soja com Nutrição
            </Link>
          </li>

          <li>
            <Link href="/blog/produtividade-bayer">
              <i className="fas fa-chevron-right"></i> Descubra como a HortSoy e a Bayer Impulsionam sua Produtividade Agrícola
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
