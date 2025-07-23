import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function About() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About</h1>
          <div className="w-24 h-1 bg-gray-200"></div>
        </section>

        {/* Content */}
        <div className="max-w-3xl space-y-8">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;m a backend engineer passionate about infrastructure, Linux systems, and security. 
              Currently working at <a href="https://ibm.com" className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 transition-colors">IBM</a> 
              where I focus on Linux-based solutions and system optimization.
            </p>
          </div>

          <div className="border-l-4 border-gray-100 pl-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              My work centers around building reliable, scalable systems that can handle real-world complexity. 
              I&apos;m particularly interested in distributed systems, container orchestration, and the intersection 
              of security and performance in modern infrastructure.
            </p>
          </div>

          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I&apos;m not working, you&apos;ll find me contributing to open-source projects, experimenting with 
              new technologies, or diving deep into <a href="https://kernel.org" className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 transition-colors">kernel development</a>. 
              I believe in the power of open collaboration and try to give back to the community whenever possible.
            </p>
          </div>

          <div className="border-l-4 border-gray-100 pl-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Based in Austin, Texas, I enjoy the vibrant tech scene here while staying connected to 
              the global open-source community. Always happy to chat about systems architecture, 
              Linux internals, or interesting technical challenges.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-gray-500 text-center">
            © 2025 Riley Fletcher - Austin, Texas
          </p>
        </div>
      </footer>
    </div>
  );
}