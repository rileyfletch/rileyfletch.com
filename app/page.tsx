import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900">Your Name</h1>
            <div className="flex space-x-8">
              <a href="/bio" className="text-gray-600 hover:text-gray-900 transition-colors">Bio</a>
              <a href="/experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</a>
              <a href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
              <a href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Backend Developer</h2>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Building scalable systems and robust APIs. Passionate about clean code, 
            performance optimization, and solving complex technical challenges.
          </p>
        </section>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="md:col-span-2 space-y-12">
            {/* Recent Projects */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Recent Projects</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-gray-200 pl-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Distributed Task Queue System</h4>
                  <p className="text-gray-600 mb-3">
                    High-performance task processing system handling 1M+ jobs daily with Redis and Go.
                  </p>
                  <a href="/projects/task-queue" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
                <div className="border-l-4 border-gray-200 pl-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">API Gateway Service</h4>
                  <p className="text-gray-600 mb-3">
                    Microservices gateway with rate limiting, authentication, and real-time monitoring.
                  </p>
                  <a href="/projects/api-gateway" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </section>

            {/* Recent Blog Posts */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Recent Posts</h3>
              <div className="space-y-4">
                <article>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">
                    <a href="/blog/database-indexing" className="hover:text-blue-600">
                      Optimizing Database Queries with Strategic Indexing
                    </a>
                  </h4>
                  <p className="text-gray-500 text-sm mb-2">March 15, 2024</p>
                  <p className="text-gray-600">
                    Deep dive into index strategies that reduced query times by 90% in production.
                  </p>
                </article>
                <article>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">
                    <a href="/blog/microservices-patterns" className="hover:text-blue-600">
                      Essential Microservices Communication Patterns
                    </a>
                  </h4>
                  <p className="text-gray-500 text-sm mb-2">February 28, 2024</p>
                  <p className="text-gray-600">
                    Comparing synchronous vs asynchronous patterns in distributed systems.
                  </p>
                </article>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Contact */}
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

            {/* Quick Links */}
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="/resume.pdf" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  Resume (PDF)
                </a>
                <a href="/projects" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  All Projects
                </a>
                <a href="/tech-stack" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  Tech Stack
                </a>
              </div>
            </section>

            {/* Current Status */}
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Status</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-green-800 font-medium">Available for opportunities</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-gray-500 text-center">
            © 2024 Your Name. Built with Next.js and TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
}