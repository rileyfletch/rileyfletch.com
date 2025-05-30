"use client";

import Link from 'next/link';
import { useState } from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  tags?: string[];
}

// Sample blog posts - replace with your actual data
const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js and TypeScript',
    excerpt: 'Learn how to set up a modern web application with Next.js and TypeScript for better development experience.',
    date: '2024-03-15',
    slug: 'getting-started-nextjs-typescript',
    tags: ['Next.js', 'TypeScript', 'React']
  },
  {
    id: '2',
    title: 'Building Responsive UIs with Tailwind CSS',
    excerpt: 'Explore the power of utility-first CSS framework and how to create beautiful, responsive designs.',
    date: '2024-03-10',
    slug: 'responsive-ui-tailwind-css',
    tags: ['CSS', 'Tailwind', 'Design']
  },
  {
    id: '3',
    title: 'State Management in React Applications',
    excerpt: 'Compare different state management solutions and when to use each approach in your React apps.',
    date: '2024-03-05',
    slug: 'state-management-react',
    tags: ['React', 'State Management', 'JavaScript']
  }
];

const BlogPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get unique tags from all posts
  const allTags = Array.from(
    new Set(samplePosts.flatMap(post => post.tags || []))
  );

  // Filter posts by selected tag
  const filteredPosts = selectedTag
    ? samplePosts.filter(post => post.tags?.includes(selectedTag))
    : samplePosts;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-base-100">
      <div className="drawer lg:drawer-open">
        <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
        
        {/* Main content */}
        <div className="drawer-content flex flex-col">
          {/* Navbar for mobile */}
          <div className="navbar bg-base-300 lg:hidden">
            <div className="flex-none">
              <label htmlFor="drawer-toggle" className="btn btn-square btn-ghost">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold">My Blog</h1>
            </div>
          </div>

          {/* Blog content */}
          <main className="flex-1 p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-base-content mb-4">Blog Posts</h1>
                <p className="text-base-content/70 text-lg">
                  Yapping about whatever technical or lifestyle topic is on my mind
                </p>
              </div>

              {/* Tag filter */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedTag(null)}
                    className={`btn btn-sm ${!selectedTag ? 'btn-primary' : 'btn-outline'}`}
                  >
                    All Posts
                  </button>
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`btn btn-sm ${selectedTag === tag ? 'btn-primary' : 'btn-outline'}`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Blog posts list */}
              <div className="space-y-6">
                {filteredPosts.map(post => (
                  <article key={post.id} className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow">
                    <div className="card-body">
                      <div className="flex justify-between items-start mb-2">
                        <time className="text-sm text-base-content/60">
                          {formatDate(post.date)}
                        </time>
                        {post.tags && (
                          <div className="flex flex-wrap gap-1">
                            {post.tags.map(tag => (
                              <span key={tag} className="badge badge-outline badge-sm">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <h2 className="card-title text-2xl mb-3">
                        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      
                      <p className="text-base-content/80 mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="card-actions">
                        <Link href={`/blog/${post.slug}`} className="btn btn-primary btn-sm">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-base-content/60 text-lg">
                    No posts found for the selected tag.
                  </p>
                </div>
              )}
            </div>
          </main>
        </div>

        {/* Sidebar */}
        <div className="drawer-side">
          <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
          <aside className="w-64 min-h-full bg-base-200">
            <div className="p-6">
              <Link href="/" className="btn btn-ghost btn-block justify-start text-xl font-bold">
                ← Homepage
              </Link>

              <div className="divider"></div>

              <div className="menu">
                <li className="menu-title">Recent Posts</li>
                {samplePosts.slice(0, 3).map(post => (
                  <li key={post.id}>
                    <Link href={`/blog/${post.slug}`} className="text-sm hover:bg-base-300">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </div>

              <div className="divider"></div>

              <div className="menu">
                <li className="menu-title">Tags</li>
                {allTags.slice(0, 5).map(tag => (
                  <li key={tag}>
                    <button 
                      onClick={() => setSelectedTag(tag)}
                      className="text-sm hover:bg-base-300 justify-start"
                    >
                      {tag}
                    </button>
                  </li>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;