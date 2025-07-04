'use client';

import { Search, Code, Rocket, CheckCircle } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project roadmap.'
    },
    {
      number: '02',
      icon: Code,
      title: 'Development & Design',
      description: 'Our team builds your solution using cutting-edge technologies.'
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Testing & Launch',
      description: 'Rigorous testing ensures quality before we launch your product.'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Process{' '}
            <span className="text-green-400">Your Solution</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology that delivers exceptional results every time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 text-center">
                  <div className="text-green-400 text-6xl font-bold mb-4 opacity-20">{step.number}</div>
                  
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-green-500/20 border border-green-500/30 mb-6">
                    <IconComponent className="w-8 h-8 text-green-400" />
                  </div>
                  
                  <h3 className="text-white font-bold text-xl mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-green-500/30 transform -translate-y-1/2 z-10">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}