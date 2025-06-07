'use client';

import { Code, Zap, Cloud, Cpu, ArrowRight, CheckCircle } from 'lucide-react';

export function TechStackSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-purple-900/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Code className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Modern, Flexible{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We use industry-proven technologies and our internal library of templates to build MVPs, 
            dashboards, and SaaS platforms — fast, scalable, and beautifully.
          </p>
        </div>

        {/* Core Technologies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Frontend & UI */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <Zap className="w-12 h-12 text-blue-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Frontend & UI</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">React & Next.js – High-performance, SEO-friendly apps</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Tailwind CSS & Shadcn UI – Clean, responsive design systems</span>
              </div>
            </div>
          </div>

          {/* Backend & APIs */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <Cpu className="w-12 h-12 text-green-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Backend & APIs</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">PostgreSQL & Supabase – Scalable, secure data handling</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Node.js, Python, Django – Custom APIs & workflows</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">OpenAI, Langchain, Gemini – Intelligent AI features</span>
              </div>
            </div>
          </div>

          {/* DevOps & Cloud */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <Cloud className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">DevOps & Cloud</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Docker, AWS, Vercel – Production-grade deployment</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">GitHub Actions, Railway – CI/CD & staging pipelines</span>
              </div>
            </div>
          </div>
        </div>

        {/* Flexibility Section */}
        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-sm bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-8 md:p-12 border border-purple-500/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                🔄 Adaptable & Project-Specific
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Every project is different. We choose the best tools based on your goals — whether it's 
                Jamstack, monolith, microservices, or serverless.
              </p>
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
              <blockquote className="text-lg text-gray-300 italic text-center">
                "Our developers are comfortable across multiple stacks — from Python to TypeScript, 
                from Firebase to Supabase. We build what's best for your product, not just what's trending."
              </blockquote>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-purple-300 font-semibold text-lg mb-6">
                <span>Have a preferred tech stack?</span>
                <span className="text-2xl">😎</span>
              </div>
              <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 mx-auto">
                Let's Talk — We've Probably Used It
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            <span className="text-purple-400 font-semibold">Core tools optimized for speed & scalability</span> — 
            but we're not limited to just these. We adapt to what your project needs.
          </p>
        </div>
      </div>
    </section>
  );
}