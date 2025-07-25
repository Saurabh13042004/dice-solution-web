'use client';

import { 
  Code, 
  Bot, 
  Smartphone, 
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  Zap,
  Database,
  Globe,
  Settings
} from 'lucide-react';

export function WhatWeBuildSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Code,
      iconColor: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      title: 'SaaS Platforms & MVPs',
      description: 'Full-stack apps built for growth, billing, analytics & seamless user experience.',
      features: ['User Management', 'Payment Integration', 'Real-time Analytics', 'Scalable Architecture']
    },
    {
      icon: Bot,
      iconColor: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30',
      title: 'AI-Powered Assistants & Automation',
      description: 'Intelligent bots & autonomous agents that optimize, engage, and elevate your product.',
      features: ['Natural Language Processing', 'Workflow Automation', 'AI Feedback Loops', 'Custom Training']
    },
    {
      icon: Smartphone,
      iconColor: 'text-pink-400',
      bgColor: 'bg-pink-500/20',
      borderColor: 'border-pink-500/30',
      title: 'Mobile & Web Applications',
      description: 'Responsive, high-performance apps designed for every screen and use case.',
      features: ['Cross-platform Development', 'Progressive Web Apps', 'Offline Support', 'App Store Optimization']
    }
  ];

  return (
    <section id="what-we-build" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-white font-medium">What We Build</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Products That{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Scale & Evolve
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From AI-integrated MVPs to enterprise solutions, we build products that grow intelligently with your business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                {/* Icon with colored background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.bgColor} border ${service.borderColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                
                <h3 className="text-white font-bold text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button 
            onClick={() => scrollToSection('pricing')}
            className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 mx-auto"
          >
            <Settings className="w-5 h-5" />
            See Our Pricing Plans
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}