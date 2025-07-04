'use client';

import { ArrowRight, Rocket } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-purple-500/20 to-pink-500/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Start{' '}
              <span className="text-orange-400">Your Project</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            </p>

            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 flex items-center gap-2">
              Get Started
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Quick Launch</div>
                    <div className="text-gray-400 text-sm">Get started in 24 hours</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg"></div>
                  <div className="h-20 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-lg"></div>
                </div>
                
                <div className="h-16 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-lg"></div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-3xl blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}