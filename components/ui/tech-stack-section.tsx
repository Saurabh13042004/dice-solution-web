'use client';

import { Code, Database, Cloud, Smartphone } from 'lucide-react';

export function TechStackSection() {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'TypeScript', category: 'Language' }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Deep Expertise In{' '}
            <span className="text-green-400">Cutting Edge</span>
            <br />
            Software Solutions
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We leverage the latest technologies to build scalable, secure, and high-performance applications
          </p>
        </div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-green-500/20 border border-green-500/30 mb-4">
              <Code className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Frontend</h3>
            <p className="text-gray-400 text-sm">Modern UI frameworks</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-green-500/20 border border-green-500/30 mb-4">
              <Database className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Backend</h3>
            <p className="text-gray-400 text-sm">Scalable server solutions</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-green-500/20 border border-green-500/30 mb-4">
              <Cloud className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Cloud</h3>
            <p className="text-gray-400 text-sm">Enterprise cloud platforms</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-green-500/20 border border-green-500/30 mb-4">
              <Smartphone className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Mobile</h3>
            <p className="text-gray-400 text-sm">Cross-platform development</p>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-green-500/50 transition-all duration-300 text-center"
            >
              <div className="text-white font-medium text-sm mb-1">{tech.name}</div>
              <div className="text-gray-400 text-xs">{tech.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}