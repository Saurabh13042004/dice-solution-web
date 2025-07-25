'use client';

import { ArrowRight, Star, Zap, Rocket, Clock, DollarSign, Users } from 'lucide-react';

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
        <div className="text-center space-y-8">
          
          {/* Badge - First Element */}
          <div className="flex justify-center mb-8">
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-full px-6 py-3 flex items-center gap-3 hover:bg-white/15 transition-all duration-300">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">
                🤖 AI-powered product engineering agency built by ex-startup engineers
              </span>
            </div>
          </div>

          {/* Main Headline - Second Element */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Launch Faster.{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Build Smarter.
              </span>{' '}
              Scale Effortlessly.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              AI-powered product engineering agency built by ex-startup engineers — your MVP launch partner, 
              innovation lab, and growth ally.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto">
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Rocket className="w-8 h-8 text-purple-400" />
                <div className="text-3xl font-bold text-white">50+</div>
              </div>
              <div className="text-gray-300">Startups Launched</div>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Clock className="w-8 h-8 text-blue-400" />
                <div className="text-3xl font-bold text-white">4 Weeks</div>
              </div>
              <div className="text-gray-300">MVP Delivery</div>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center justify-center gap-3 mb-3">
                <DollarSign className="w-8 h-8 text-green-400" />
                <div className="text-3xl font-bold text-white">5x</div>
              </div>
              <div className="text-gray-300">Cheaper than Dev Team</div>
            </div>
          </div>

          {/* CTA Buttons - Third Element */}
          <div className="flex flex-col items-center gap-6 pt-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a href={`https://calendly.com/d/cv6x-6ts-rqy/schedule-a-meeting-now`} target='_blank'>
                <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2">
                  Book Your Free Strategy Call
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </a>
              
              <a href='/DICE.pdf' target='_blank' download>
                <button className="group backdrop-blur-sm bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2">
                  Download Free MVP Guide
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </a>
            </div>
            
            {/* Small text below buttons */}
            <p className="text-gray-400 text-sm max-w-md">
              No pressure, expert advice tailored to founders & startups
            </p>
          </div>

          {/* Trusted by section */}
          <div className="pt-16">
            <p className="text-gray-400 text-sm mb-8">Trusted by Leading Startups & Innovators</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-semibold text-lg">Maccam</div>
              <div className="text-white font-semibold text-lg">Parlux</div>
              <div className="text-white font-semibold text-lg">United Saloon Supplies</div>
              <div className="text-white font-semibold text-lg">Instruct</div>
              <div className="text-white font-semibold text-lg">PodReel</div>
              <div className="text-white font-semibold text-lg">DocuQuery</div>
              <div className="text-white font-semibold text-lg">Shopitomall</div>
            </div>
          </div>

          {/* Client Success Story */}
          <div className="pt-12 max-w-2xl mx-auto">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white text-lg italic mb-4">
                "Dice not only built our MVP, but their AI-powered insights helped us pivot successfully and launch in record time."
              </p>
              <p className="text-gray-400 text-sm">— Founder, PodReel</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}