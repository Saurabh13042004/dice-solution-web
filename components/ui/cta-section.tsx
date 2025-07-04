'use client';

import { ArrowRight, Rocket, CheckCircle } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              LET US BUILD TOGETHER
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Start Building{' '}
              <span className="text-green-400">Your Project</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your ideas into reality? Let's discuss your project and create something extraordinary together.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Free consultation and project analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Dedicated project manager</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">24/7 support and maintenance</span>
              </div>
            </div>

            <button className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25 flex items-center gap-2">
              Start Your Project
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Quick Launch</div>
                    <div className="text-gray-400 text-sm">Get started in 24 hours</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-gradient-to-br from-green-500/30 to-blue-500/30 rounded-lg"></div>
                  <div className="h-20 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-lg"></div>
                </div>
                
                <div className="h-16 bg-gradient-to-r from-green-500/30 to-teal-500/30 rounded-lg"></div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}