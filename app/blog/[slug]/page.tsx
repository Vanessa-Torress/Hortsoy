import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, Tag } from 'lucide-react';
import BlogSidebar from '@/features/blog/BlogSidebar';
import { getAllPosts, getPostBySlug } from '@/data/posts';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Artigo Não Encontrado',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
      type: 'article',
      publishedTime: post.isoDate,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formatParagraph = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <h1>{post.title}</h1>
          <div className="breadcrumb">
            <Link href="/">Início</Link> / <Link href="/sobre">Sobre Nós</Link> / Blog
          </div>
        </div>
      </section>

      <section className="section-padding blog-detail-section">
        <div className="container">
          <div className="blog-detail-grid">
            <article className="blog-main-column">
              <div className="blog-detail-header">
                <div
                  className="blog-meta"
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', alignItems: 'center' }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={15} aria-hidden="true" /> {post.date}
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <User size={15} aria-hidden="true" /> {post.author}
                  </span>
                  {post.category && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'var(--secondary-color)',
                      }}
                    >
                      <Tag size={14} aria-hidden="true" /> {post.category}
                    </span>
                  )}
                </div>
                <h2 className="blog-detail-title">{post.title}</h2>
              </div>

              <div className="blog-detail-featured">
                <img
                  loading="lazy"
                  src={post.featuredImage}
                  alt={post.title}
                  className="featured-img"
                />
              </div>

              <div className="blog-detail-content-inner">
                {post.sections.map((section, sIndex) => (
                  <div
                    key={sIndex}
                    className="blog-content-section"
                    style={{ marginBottom: '25px' }}
                  >
                    {section.image && (
                      <div className="blog-inner-img">
                        <img
                          loading="lazy"
                          src={section.image}
                          alt={section.imageAlt || post.title}
                        />
                      </div>
                    )}

                    {section.heading && <h2 className="blog-inner-heading">{section.heading}</h2>}

                    {section.paragraphs.map((p, pIndex) => (
                      <p key={pIndex}>{formatParagraph(p)}</p>
                    ))}
                  </div>
                ))}
              </div>
            </article>

            <BlogSidebar currentSlug={post.slug} />
          </div>
        </div>
      </section>
    </main>
  );
}
