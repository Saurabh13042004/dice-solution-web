'use client';

import { 
  Code, 
  ShoppingCart, 
  Zap, 
  Globe, 
  ArrowRight,
  CheckCircle,
  Smartphone,
  Database,
  Bot,
  FileText,
  Palette,
  Shield
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
      iconColor: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      title: 'SaaS Development',
      description: 'Full-stack SaaS platforms with user management, billing, analytics, and scalable architecture.',
      features: ['User Authentication', 'Payment Integration', 'Real-time Analytics', 'API Development']
    },
    {
      icon: ShoppingCart,
      iconColor: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30',
      title: 'E-commerce Solutions',
      description: 'Custom online stores with payment processing, inventory management, and seamless user experience.',
      features: ['Payment Gateways', 'Inventory Management', 'Order Tracking', 'Mobile Responsive']
    },
    {
      icon: Bot,
      iconColor: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30',
      title: 'AI Assistants',
      description: 'Intelligent chatbots and AI-powered tools that enhance user engagement and automate workflows.',
      features: ['Natural Language Processing', 'Custom Training', 'API Integration', 'Multi-platform Support']
    },
    {
      icon: FileText,
      iconColor: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-500/30',
      title: 'CMS Platforms',
      description: 'Content management systems with intuitive interfaces, SEO optimization, and flexible publishing.',
      features: ['Content Editor', 'SEO Tools', 'Media Management', 'Multi-user Access']
    },
    {
      icon: Smartphone,
      iconColor: 'text-pink-400',
      bgColor: 'bg-pink-500/20',
      borderColor: 'border-pink-500/30',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications with smooth performance and modern design.',
      features: ['Cross-platform', 'Push Notifications', 'Offline Support', 'App Store Optimization']
    },
    {
      icon: Globe,
      iconColor: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-500/30',
      title: 'Web Applications',
      description: 'Custom web apps with responsive design, fast loading times, and exceptional user experience.',
      features: ['Responsive Design', 'Performance Optimization', 'Progressive Web App', 'Cross-browser Support']
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-white font-medium">What We Build</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Services That{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Scale
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From MVPs to enterprise solutions, we build products that grow with your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                {/* Icon with colored background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.bgColor} border ${service.borderColor} mb-6`}>
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
            <Palette className="w-5 h-5" />
            See Our Pricing
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}