import React from 'react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Back Button */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Projects</h1>
          <div className="w-36 h-1 bg-gray-200"></div>
        </section>

        {/* Projects */}
        <div className="max-w-3xl space-y-12">
          
          {/* Project 1 */}
          <div className="border-l-4 border-gray-200 pl-8 hover:border-blue-300 transition-colors group">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Container Orchestration Platform</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Built a lightweight container orchestration system for managing microservices across distributed nodes. 
              Focuses on simplicity and reliability over feature complexity, with automatic failover and service discovery.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/yourusername/container-platform" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
              <a 
                href="https://demo.example.com" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border-l-4 border-gray-200 pl-8 hover:border-blue-300 transition-colors group">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">System Monitoring Agent</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Low-overhead monitoring agent that collects system metrics and performance data. 
              Designed for minimal resource usage while providing comprehensive insights into system health and performance bottlenecks.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/yourusername/monitoring-agent" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </div>
          </div>

          {/* Template for easy copy-paste */}
          {/*
          <div className="border-l-4 border-gray-200 pl-8 hover:border-blue-300 transition-colors group">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Project Title</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Project description goes here. Keep it concise but informative enough to give readers 
              a clear understanding of what the project does and its key benefits.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/yourusername/project" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
              <a 
                href="https://demo.example.com" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </div>
          </div>
          */}

        </div>
      </main>

      {/* Footer */}
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