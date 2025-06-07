'use client';

import { Rocket, Monitor, Zap, Brain, Database, Settings, ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';

export function ProductsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Rocket className="w-16 h-16 text-purple-400" />
            <Zap className="w-12 h-12 text-pink-400 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            We Build SaaS Products —{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              For You and For Ourselves
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At Dice Solutions, we don't just ship code for clients — we build and use our own SaaS products too. 
            This gives us a deep understanding of the entire product lifecycle: ideation, MVP, scale, and beyond.
          </p>
        </div>

        {/* Featured Product - Monitorly */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 hover:border-purple-500/30 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Monitor className="w-12 h-12 text-blue-400" />
                  <div>
                    <h3 className="text-3xl font-bold text-white">Monitorly</h3>
                    <span className="text-green-400 text-sm font-semibold flex items-center gap-1">
                      <CheckCircle size={16} />
                      Live & Operational
                    </span>
                  </div>
                </div>
                
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  A powerful uptime monitoring tool with real-time alerts via Slack, email, and webhooks. 
                  Trusted for keeping services reliable — including our own.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-green-400">99.9%</div>
                    <div className="text-gray-400 text-sm">Uptime</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-blue-400">45ms</div>
                    <div className="text-gray-400 text-sm">Avg Response</div>
                  </div>
                </div>
                
                <button className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2">
                  Request Access
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>Real-time status checks</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>Slack + Webhook integrations</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>Custom alert thresholds</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>Blazing fast response time</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>Multi-region monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Pipeline */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Brain className="w-12 h-12 text-pink-400" />
            <Clock className="w-10 h-10 text-purple-400 animate-spin" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            More Products in the{' '}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Innovation Pipeline
            </span>
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We're actively developing a suite of internal tools and micro-SaaS products — 
            each one teaching us something new about building scalable, user-friendly software.
          </p>
        </div>

        {/* Pipeline Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Database,
              title: 'CMS Platforms',
              description: 'Headless content management for modern apps',
              status: 'In Development',
              color: 'from-blue-400 to-cyan-400'
            },
            {
              icon: Brain,
              title: 'AI Assistants',
              description: 'Custom AI tools for business automation',
              status: 'Beta Testing',
              color: 'from-purple-400 to-pink-400'
            },
            {
              icon: Zap,
              title: 'Automation Tools',
              description: 'Workflow automation for repetitive tasks',
              status: 'Planning',
              color: 'from-yellow-400 to-orange-400'
            },
            {
              icon: Settings,
              title: 'Developer Utilities',
              description: 'Tools that make development faster',
              status: 'Prototyping',
              color: 'from-green-400 to-teal-400'
            },
            {
              icon: Users,
              title: 'Client Onboarding',
              description: 'Streamlined project kickoff platform',
              status: 'Coming Soon',
              color: 'from-indigo-400 to-purple-400'
            },
            {
              icon: Monitor,
              title: 'Analytics Suite',
              description: 'Privacy-first web analytics',
              status: 'Research',
              color: 'from-pink-400 to-red-400'
            }
          ].map((product, index) => (
            <div
              key={index}
              className="group backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <product.icon className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{product.title}</h4>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{product.description}</p>
              <span className="inline-block px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs font-medium">
                {product.status}
              </span>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-sm bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-8 md:p-12 border border-purple-500/20">
            <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Battle-Tested by Real Use
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              By building for ourselves first, we ensure everything we deliver to you is 
              battle-tested, scalable, and actually works in the wild. We don't just write code — 
              we ship products that real users depend on.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2">
                Join Our Waitlist
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button className="group backdrop-blur-sm bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2">
                Request a Demo
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}