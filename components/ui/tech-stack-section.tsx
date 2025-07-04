'use client';

import { Code, Zap, Cloud, Cpu, ArrowRight, CheckCircle } from 'lucide-react';

export function TechStackSection() {
  const technologies = [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Git', icon: '📝' },
    { name: 'Figma', icon: '🎯' }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We Build With{' '}
            <span className="text-orange-400">Modern Stack</span>
            <br />
            <span className="text-orange-400">&</span> Technologies.
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Using cutting-edge technologies to deliver exceptional results
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group backdrop-blur-sm bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="text-3xl mb-3">{tech.icon}</div>
              <div className="text-gray-300 text-sm font-medium">{tech.name}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 flex items-center gap-2 mx-auto">
            Start Your Project
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}