import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function About() {
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

        <section className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About</h1>
          <div className="w-26 h-1 bg-gray-200"></div>
        </section>

        <div className="max-w-3xl space-y-8">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;m a backend engineer passionate about infrastructure, Linux systems, and security. 
              Currently working at <a href="https://ibm.com" className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 transition-colors">IBM</a> 
               where I focus on Linux-based solutions and system optimization.
            </p>
          </div>

          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I&apos;m not working, you&apos;ll find me contributing to open-source projects, experimenting with 
              new technologies, or diving deep into <a href="https://kernel.org" className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 transition-colors">kernel development</a>. 
              I believe in the power of open collaboration and try to give back to the community whenever possible.
            </p>
          </div>

          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I&apos;m not working, you&apos;ll find me contributing to open-source projects, experimenting with 
              new technologies, or diving deep into <a href="https://kernel.org" className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 transition-colors">kernel development</a>. 
              I believe in the power of open collaboration and try to give back to the community whenever possible.
            </p>
          </div>

          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I&apos;m not working, you&apos;ll find me contributing to open-source projects, experimenting with 
              new technologies, or diving deep into <a href="https://kernel.org" className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 transition-colors">kernel development</a>. 
              I believe in the power of open collaboration and try to give back to the community whenever possible.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 mt-10">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-gray-500 text-center">
            © 2025 Riley Fletcher // Austin, Texas
          </p>
        </div>
      </footer>
    </div>
  );
}