'use client';

import { Check, ArrowRight, Zap, Gift } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-purple-900/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Value Comparison */}
        <div className="text-center mb-16">
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Before & After</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-red-400 text-4xl mb-4">❌</div>
                <h4 className="text-xl font-semibold text-white mb-2">Hiring 3 Devs</h4>
                <p className="text-gray-300 mb-4">₹2.5L+ per month</p>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• 3+ months to build</li>
                  <li>• Recruitment hassle</li>
                  <li>• Management overhead</li>
                  <li>• No guarantee of quality</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-green-400 text-4xl mb-4">✅</div>
                <h4 className="text-xl font-semibold text-white mb-2">Working with Dice</h4>
                <p className="text-green-400 mb-4">₹99K + 4-week MVP</p>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Launch-ready in 4 weeks</li>
                  <li>• Experienced startup team</li>
                  <li>• Proven tech stack</li>
                  <li>• Ongoing support included</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Launch Plan
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From idea validation to full-scale MVP — we've got the right plan for your startup journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Idea Kickstart Plan */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">Idea Kickstart</h3>
            </div>
            <div className="mb-6">
              <span className="text-3xl font-bold text-white">₹39,000</span>
              <p className="text-gray-400 mt-2">Perfect for idea validation</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">1-page landing site</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Lead capture & waitlist</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Feedback form</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">1 core feature</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">1-week delivery</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 mb-3">
              Start Validation
            </button>
            <p className="text-xs text-gray-400 text-center">EMI options available</p>
          </div>

          {/* Starter MVP */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              <h3 className="text-xl font-bold text-white">Starter MVP</h3>
            </div>
            <div className="mb-6">
              <span className="text-3xl font-bold text-white">₹99,000</span>
              <p className="text-gray-400 mt-2">Launch-ready MVP</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Full-stack web app</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">User authentication</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Database setup</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">3-5 core features</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">4-week delivery</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 mb-3">
              Build My MVP
            </button>
            <p className="text-xs text-gray-400 text-center">EMI or phased payment options available</p>
          </div>

          {/* Pro Plan */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-purple-500/50 hover:border-purple-400 transition-all duration-300 hover:scale-105 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></div>
              <h3 className="text-xl font-bold text-white">Pro Scale</h3>
            </div>
            <div className="mb-6">
              <span className="text-3xl font-bold text-white">₹1,49,000</span>
              <p className="text-gray-400 mt-2">Production-ready platform</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Everything in Starter</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Advanced features</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Payment integration</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Admin dashboard</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">6-week delivery</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 mb-3">
              Scale My Startup
            </button>
            <p className="text-xs text-gray-400 text-center">EMI or phased payment options available</p>
          </div>

          {/* Custom Plan */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full"></div>
              <h3 className="text-xl font-bold text-white">Custom Build</h3>
            </div>
            <div className="mb-6">
              <span className="text-3xl font-bold text-white">Let's Talk</span>
              <p className="text-gray-400 mt-2">Tailored to your needs</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Complex integrations</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">AI/ML features</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Enterprise features</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Dedicated support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Timeline: TBD</span>
              </li>
            </ul>
            <button className="w-full backdrop-blur-sm bg-white/10 text-white py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 mb-3">
              Discuss Project
            </button>
            <p className="text-xs text-gray-400 text-center">Flexible payment terms</p>
          </div>
        </div>

        {/* Why These Prices Section */}
        <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 mb-12">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Why These Prices?</h3>
          <p className="text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto mb-8">
            We don't just build code. We deliver launch-ready, scalable products using the same tools top startups use. 
            Hiring a full-time team costs 5x more — we help you validate your idea for a fraction of that cost.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">5x Cheaper</div>
              <p className="text-gray-300">Than hiring a full dev team</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">4 Weeks</div>
              <p className="text-gray-300">Average MVP delivery time</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">Production Ready</div>
              <p className="text-gray-300">Not just prototypes</p>
            </div>
          </div>
        </div>

        {/* Lead Magnet CTA */}
        <div className="text-center">
          <div className="backdrop-blur-sm bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20 max-w-2xl mx-auto">
            <Gift className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Not Ready to Build Yet?</h3>
            <p className="text-gray-300 mb-6">
              Download our Free MVP Planning Guide (PDF) — and we'll include a discount code inside 😉
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href='/DICE.pdf' target='_blank' download>
              <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center">
                Download Free Guide
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              </a>
              <a href={`https://calendly.com/d/cv6x-6ts-rqy/schedule-a-meeting-now`} target='_blank'>
              <button className="group backdrop-blur-sm bg-white/10 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2 justify-center">
                Book Strategy Call
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}