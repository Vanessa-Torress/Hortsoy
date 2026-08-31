import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { getRecentPosts } from '@/data/posts';

interface BlogSidebarProps {
  currentSlug?: string;
}

export default function BlogSidebar({ currentSlug }: BlogSidebarProps) {
  const recentPosts = getRecentPosts(5, currentSlug);

  return (
    <div className="blog-sidebar-column">
      <div className="sidebar-widget">
        <h3>Últimas Postagens</h3>
        <ul className="sidebar-recent-posts">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <ChevronRight
                  size={14}
                  style={{ color: 'var(--secondary-color)', flexShrink: 0 }}
                  aria-hidden="true"
                />
                <span>{post.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
