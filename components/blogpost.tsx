import Link from 'next/link';
import { ReactNode } from 'react';

interface BlogPostMeta {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  author?: string;
  readTime?: string;
}

interface BlogPostNavigation {
  previous?: {
    title: string;
    slug: string;
  };
  next?: {
    title: string;
    slug: string;
  };
}

interface BlogPostTemplateProps {
  meta: BlogPostMeta;
  navigation?: BlogPostNavigation;
  children: ReactNode;
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ 
  meta, 
  navigation, 
  children 
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Top navigation bar */}
      <nav className="navbar bg-base-200 shadow-md">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost text-xl font-bold">
            ← Home
          </Link>
        </div>
        <div className="navbar-center">
          <Link href="/blog" className="btn btn-ghost text-lg">
            Blog
          </Link>
        </div>
        <div className="navbar-end">
          {/* Mobile menu button */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blog">All Posts</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumb */}
        <div className="breadcrumbs text-sm mb-6">
          <ul>
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
            <li className="text-base-content/60">{meta.title}</li>
          </ul>
        </div>

        {/* Article header */}
        <header className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-base-content mb-4">
            {meta.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-base-content/70 mb-4">
            <time className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(meta.date)}
            </time>
            
            {meta.readTime && (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {meta.readTime}
              </span>
            )}
            
            {meta.author && (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                by {meta.author}
              </span>
            )}
          </div>

          {meta.tags && meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {meta.tags.map(tag => (
                <span key={tag} className="badge badge-outline">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="text-lg text-base-content/80 italic">
            {meta.excerpt}
          </p>
        </header>

        {/* Article content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-base-200 rounded-lg p-6 lg:p-8">
            {children}
          </div>
        </article>

        {/* Post navigation */}
        {navigation && (navigation.previous || navigation.next) && (
          <nav className="mt-12 pt-8 border-t border-base-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {navigation.previous && (
                <Link 
                  href={`/blog/${navigation.previous.slug}`}
                  className="card bg-base-200 hover:bg-base-300 transition-colors"
                >
                  <div className="card-body">
                    <div className="flex items-center gap-2 text-sm text-base-content/60 mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Previous Post
                    </div>
                    <h3 className="font-semibold text-base-content hover:text-primary transition-colors">
                      {navigation.previous.title}
                    </h3>
                  </div>
                </Link>
              )}
              
              {navigation.next && (
                <Link 
                  href={`/blog/${navigation.next.slug}`}
                  className="card bg-base-200 hover:bg-base-300 transition-colors lg:text-right"
                >
                  <div className="card-body">
                    <div className="flex items-center justify-end gap-2 text-sm text-base-content/60 mb-2">
                      Next Post
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-base-content hover:text-primary transition-colors">
                      {navigation.next.title}
                    </h3>
                  </div>
                </Link>
              )}
            </div>
          </nav>
        )}

        {/* Back to blog link */}
        <div className="mt-12 text-center">
          <Link href="/blog" className="btn btn-outline btn-lg">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Posts
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content mt-6">
        <div>
          <p className="mt-4 text-base-content/70">
            © 2024 Riley Fletcher. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPostTemplate;