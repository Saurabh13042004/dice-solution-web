'use client';

import { 
  Code, 
  ShoppingCart, 
  Zap, 
  Globe, 
  ArrowRight,
  Smartphone,
  Bot,
  FileText
} from 'lucide-react';

export function ServicesSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Code,
      iconColor: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-500/30',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love'
    },
    {
      icon: Globe,
      iconColor: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      title: 'Development',
      description: 'Full-stack solutions built for performance'
    },
    {
      icon: Smartphone,
      iconColor: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30',
      title: 'Graphic Design',
      description: 'Visual identity that makes you stand out'
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We Seek For{' '}
            <span className="text-orange-400">Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our team delivers exceptional results across design and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group backdrop-blur-sm bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 text-center"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.bgColor} border ${service.borderColor} mb-6`}>
                  <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                
                <h3 className="text-white font-bold text-xl mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 flex items-center gap-2 mx-auto"
          >
            View Our Work
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}