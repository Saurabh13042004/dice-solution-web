'use client';

import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our{' '}
            <span className="text-green-400">Clients Say</span>
            <br />
            Results from Clients
          </h2>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-800/50 rounded-2xl p-8 md:p-12 border border-gray-700">
            <div className="flex items-start gap-6">
              <img 
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150" 
                alt="Client testimonial"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-green-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-300 mb-6 italic">
                  "Working with Dice Solutions was a game-changer for our business. They delivered a world-class platform that exceeded our expectations and helped us scale rapidly."
                </blockquote>
                <div>
                  <div className="text-white font-semibold">Sarah Johnson</div>
                  <div className="text-gray-400">CEO, TechStart Inc.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <button className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 hover:border-green-500/50 transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-400" />
          </button>
          <button className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 hover:border-green-500/50 transition-colors">
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
}