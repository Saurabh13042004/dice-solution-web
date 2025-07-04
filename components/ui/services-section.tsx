'use client';

import { 
  Code, 
  Smartphone, 
  Globe, 
  ArrowRight,
  Palette,
  Database,
  Shield
} from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
      features: ['React & Next.js', 'Node.js Backend', 'Database Design', 'API Integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed to engage users and drive conversions for your business.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Scalable server-side solutions with robust APIs and secure data management systems.',
      features: ['API Development', 'Database Design', 'Cloud Integration', 'Performance Optimization']
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Smart Services For{' '}
            <span className="text-green-400">Digital Growth</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive software development services to help your business thrive in the digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-green-500/20 border border-green-500/30 mb-6">
                  <IconComponent className="w-8 h-8 text-green-400" />
                </div>
                
                <h3 className="text-white font-bold text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="group/btn bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
                  Learn More
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}