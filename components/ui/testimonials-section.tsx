'use client';

import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Dice Solutions transformed our vision into reality. Their attention to detail and technical expertise is unmatched.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, InnovateLab',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Working with Dice was a game-changer. They delivered beyond our expectations and on time.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'CTO, FutureApp',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The team at Dice Solutions is incredibly talented. They built our platform with precision and creativity.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            WHAT DO{' '}
            <span className="text-orange-400">CLIENTS</span> SAY.
          </h2>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="backdrop-blur-sm bg-gray-800/50 rounded-2xl p-8 md:p-12 border border-gray-700">
            <div className="flex items-start gap-6">
              <img 
                src={testimonials[0].image} 
                alt={testimonials[0].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonials[0].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-300 mb-6 italic">
                  "{testimonials[0].content}"
                </blockquote>
                <div>
                  <div className="text-white font-semibold">{testimonials[0].name}</div>
                  <div className="text-gray-400">{testimonials[0].role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <button className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 hover:border-orange-500/50 transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-400" />
          </button>
          <button className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 hover:border-orange-500/50 transition-colors">
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
}