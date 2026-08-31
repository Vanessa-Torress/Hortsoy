import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import CompanyIntro from '@/features/company/CompanyIntro';
import MapComponent from '@/components/features/map/MapComponent';
import { getAllPosts } from '@/data/posts';

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description:
    'Conheça a história da Hortsoy, nossa missão, visão, valores e encontre a unidade mais próxima de você em Minas Gerais.',
};

export default function SobrePage() {
  const posts = getAllPosts();

  return (
    <main>
      <CompanyIntro />

      <section className="section-padding" style={{ background: '#f9fafb' }}>
        <div className="container">
          <MapComponent />
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--light-bg)' }}>
        <div className="container">
          <div className="section-header-centered">
            <span className="section-title">Atualizações do Campo</span>
            <h2>Radar HortSoy</h2>
            <p style={{ maxWidth: '600px', margin: '15px auto 0', color: 'var(--light-text)' }}>
              Acompanhe nossos eventos, parcerias tecnológicas e os principais marcos do
              agronegócio.
            </p>
          </div>
          <div className="blog-grid" style={{ marginTop: '35px' }}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-card reveal"
                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <div className="blog-image-wrapper">
                  <img loading="lazy" src={post.featuredImage} alt={post.title} />
                </div>
                <div
                  className="blog-content"
                  style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                    }}
                  >
                    <span
                      className="blog-date"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                      <Calendar size={13} aria-hidden="true" /> {post.date}
                    </span>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        color: 'var(--secondary-color)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Tag size={12} aria-hidden="true" /> {post.category}
                    </span>
                  </div>

                  <h3 className="blog-title" style={{ flexGrow: 1 }}>
                    {post.title}
                  </h3>

                  <p className="blog-excerpt">{post.excerpt}</p>

                  <span
                    className="blog-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginTop: 'auto',
                    }}
                  >
                    Ler Post Completo <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
