'use client';

import { 
  Brain, 
  Eye, 
  Palette, 
  TrendingUp,
  Zap,
  ArrowRight
} from 'lucide-react';

export function WhyDiceSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: Brain,
      iconColor: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30',
      title: 'AI-First Innovation',
      description: 'Delivering autonomous, proactive AI that evolves with your product and provides intelligent insights.'
    },
    {
      icon: Eye,
      iconColor: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      title: 'Transparent Partnership',
      description: 'Live dashboards, real-time insights, and no surprises. You see exactly what we\'re building, when.'
    },
    {
      icon: Palette,
      iconColor: 'text-pink-400',
      bgColor: 'bg-pink-500/20',
      borderColor: 'border-pink-500/30',
      title: 'Zero Templates, Full Customization',
      description: 'Your product, your architecture—future-ready and scalable, built specifically for your vision.'
    },
    {
      icon: TrendingUp,
      iconColor: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30',
      title: 'Continuous Growth Support',
      description: 'We don\'t just build, we grow with you through AI-powered feedback and iterative improvements.'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">Why Choose Dice?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Built Different for{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Modern Founders
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just another dev agency. We're your strategic technology partner, 
            combining startup speed with enterprise-grade AI innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                {/* Icon with colored background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${benefit.bgColor} border ${benefit.borderColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${benefit.iconColor}`} />
                </div>
                
                <h3 className="text-white font-bold text-2xl mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="backdrop-blur-sm bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-8 md:p-12 border border-purple-500/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Experience the Difference?
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join 50+ successful startups who chose Dice Solutions as their technology partner. 
              Let's discuss how AI-powered development can accelerate your vision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={`https://calendly.com/d/cv6x-6ts-rqy/schedule-a-meeting-now`} target='_blank'>
                <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2">
                  Book Your Strategy Call
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </a>
              
              <button 
                onClick={() => scrollToSection('process')}
                className="group backdrop-blur-sm bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2"
              >
                See How We Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}