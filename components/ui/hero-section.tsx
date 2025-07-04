'use client';

import { ArrowRight, Star, Play, CheckCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden min-h-screen flex items-center">
      {/* Background with dark theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Rating Badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-300 text-sm">Rated 4.9/5 by 50+ clients</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Best Software Solution To{' '}
                <span className="text-green-400">
                  The Drive Business Forward
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                We build world-class software solutions that combine stunning design with powerful functionality to drive your business forward.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25 flex items-center gap-2">
                Get Started Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button className="group flex items-center gap-3 text-white hover:text-green-400 transition-colors">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 group-hover:border-green-400/50 transition-colors">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                <span className="font-medium">Watch Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Visual - Team Photo */}
          <div className="relative">
            {/* Main Team Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Our development team"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-green-500 rounded-xl p-4 shadow-lg">
              <div className="text-white font-bold">98%</div>
              <div className="text-white text-sm">Success Rate</div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-3xl -z-10"></div>
          </div>

        </div>

        {/* Client Logos */}
        <div className="mt-20 pt-12 border-t border-gray-800">
          <p className="text-gray-400 text-center mb-8">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-white font-semibold text-lg">Maccam</div>
            <div className="text-white font-semibold text-lg">Parlux</div>
            <div className="text-white font-semibold text-lg">United Saloon</div>
            <div className="text-white font-semibold text-lg">Instruct</div>
            <div className="text-white font-semibold text-lg">PodReel</div>
          </div>
        </div>
      </div>
    </section>
  );
}