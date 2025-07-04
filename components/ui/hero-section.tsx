'use client';

import { ArrowRight, Star, Zap, Play } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden min-h-screen flex items-center">
      {/* Background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-orange-500/20 backdrop-blur-sm rounded-full border border-orange-500/30">
              <Zap className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">
                Development that performs
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Designs that{' '}
                <span className="text-orange-400">speaks,</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Development
                </span>
                <br />
                that performs
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                We build world-class software solutions that combine stunning design with powerful functionality.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 flex items-center gap-2">
                Get Started
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button className="group flex items-center gap-3 text-white hover:text-orange-400 transition-colors">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:border-orange-400/50 transition-colors">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                <span className="font-medium">Watch our work</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-gray-400 text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">4 Weeks</div>
                <div className="text-gray-400 text-sm">Avg. Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Device Mockup */}
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700">
                {/* Browser Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-gray-700 rounded ml-4 h-6"></div>
                </div>
                
                {/* Screen Content */}
                <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg p-6 h-64">
                  <div className="space-y-4">
                    <div className="h-4 bg-white/20 rounded w-3/4"></div>
                    <div className="h-4 bg-white/20 rounded w-1/2"></div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="h-16 bg-orange-500/30 rounded-lg"></div>
                      <div className="h-16 bg-purple-500/30 rounded-lg"></div>
                    </div>
                    <div className="h-20 bg-white/10 rounded-lg mt-4"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg animate-bounce delay-300 flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg animate-pulse flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-3xl blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}