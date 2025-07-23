import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">

      <main className="max-w-4xl mx-auto px-2 py-12">

        <section className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Riley Fletcher</h2>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mb-4">
            Infrastructure, Linux, security, open-source enthusiast. 
          </p>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Currently @ IBM doing some Linux stuff.
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Recent Projects</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-gray-200 pl-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Distributed Task Queue System</h4>
                  <p className="text-gray-600 mb-3">
                    High-performance task processing system handling 1M+ jobs daily with Redis and Go.
                  </p>
                  <a href="/projects/task-queue" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                    GitHub <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
                <div className="border-l-4 border-gray-200 pl-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">API Gateway Service</h4>
                  <p className="text-gray-600 mb-3">
                    Microservices gateway with rate limiting, authentication, and real-time monitoring.
                  </p>
                  <a href="/projects/api-gateway" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                    GitHub <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Recent Posts</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-gray-200 pl-6 hover:border-blue-300 transition-colors group">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    <a href="/blog/database-indexing" className="hover:text-blue-600 transition-colors">
                      Optimizing Database Queries with Strategic Indexing
                    </a>
                  </h4>
                  <p className="text-gray-500 text-sm mb-2">March 15, 2024</p>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    Deep dive into index strategies that reduced query times by 90% in production.
                  </p>
                </div>
                <div className="border-l-4 border-gray-200 pl-6 hover:border-blue-300 transition-colors group">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    <a href="/blog/microservices-patterns" className="hover:text-blue-600 transition-colors">
                      Essential Microservices Communication Patterns
                    </a>
                  </h4>
                  <p className="text-gray-500 text-sm mb-2">February 28, 2024</p>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    Comparing synchronous vs asynchronous patterns in distributed systems.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:your.email@example.com" 
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Email
                </a>
                <a 
                  href="https://github.com/yourusername" 
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Github className="w-5 h-5 mr-3" />
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  LinkedIn
                </a>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Links</h3>
              <div className="space-y-2">
                <a href="/blog" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  Blog
                </a>
                <a href="/about" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </a>
                <a href="/projects" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  Projects
                </a>
                <a href="/resume.PDF" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  Resume
                </a>
              </div>
            </section>
            
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 mt-4">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-gray-500 text-center">
            © 2025 Riley Fletcher  //  Austin, Texas
          </p>
        </div>
      </footer>
    </div>
  );
}