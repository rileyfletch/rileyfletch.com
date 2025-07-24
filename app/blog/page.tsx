'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';
import Link from 'next/link';

// Mock data structure - replace with your actual data source
const mockBlogPosts = [
  {
    slug: "optimizing-database-queries",
    title: "Optimizing Database Queries with Strategic Indexing",
    description: "Deep dive into index strategies that reduced query times by 90% in production. Learn about composite indexes, query planning, and performance monitoring techniques.",
    date: "2024-03-15"
  },
  {
    slug: "microservices-communication-patterns",
    title: "Essential Microservices Communication Patterns",
    description: "Comparing synchronous vs asynchronous patterns in distributed systems. Explore event-driven architectures, message queues, and service mesh implementations.",
    date: "2024-02-28"
  },
  {
    slug: "linux-kernel-debugging",
    title: "Debugging Linux Kernel Modules in Production",
    description: "Practical techniques for troubleshooting kernel issues without bringing down production systems. Tools, techniques, and real-world examples.",
    date: "2024-02-10"
  },
  {
    slug: "container-security-best-practices",
    title: "Container Security: Beyond the Basics",
    description: "Advanced security practices for containerized applications. Runtime protection, image scanning, and network policies that actually work in production.",
    date: "2024-01-22"
  },
  {
    slug: "go-performance-optimization",
    title: "Go Performance Optimization Techniques",
    description: "Profiling, memory management, and concurrency patterns that improved our API response times by 300%. Practical examples with benchmarks.",
    date: "2024-01-08"
  },
  {
    slug: "infrastructure-as-code-lessons",
    title: "Infrastructure as Code: Lessons from the Trenches",
    description: "Hard-learned lessons from managing infrastructure across multiple environments. State management, drift detection, and team collaboration strategies.",
    date: "2023-12-18"
  }
];

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading posts - replace with actual data fetching
    const loadPosts = async () => {
      setLoading(true);
      // In a real implementation, you'd fetch from your MDX files or API here
      // const posts = await fetchBlogPosts();
      
      // Sort by date (newest first)
      const sortedPosts = mockBlogPosts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
      setPosts(sortedPosts);
      setLoading(false);
    };
    
    loadPosts();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <main className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex justify-center items-center h-64">
            <div className="text-gray-500">Loading posts...</div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Posts</h1>
        </section>

        <div className="space-y-8">
          {posts.map((post) => (
            <article 
              key={post.slug} 
              className="border-l-4 border-gray-200 pl-8 hover:border-blue-300 transition-colors group"
            >
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(post.date)}
              </div>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                <a href={`/blog/${post.slug}`}>
                  {post.title}
                </a>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {post.description}
              </p>
            </article>
          ))}
        </div>
      </main>

      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-gray-500 text-center">
            © 2025 Riley Fletcher // Austin, Texas
          </p>
        </div>
      </footer>
    </div>
  );
}