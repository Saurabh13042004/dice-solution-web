'use client';

import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { Logo } from '@/components/ui/logo';
import { 
  Users, 
  Target, 
  Code, 
  Rocket, 
  ArrowRight, 
  Zap, 
  CheckCircle, 
  Globe, 
  Clock,
  TrendingUp,
  Star,
  Timer,
  Phone,
  Briefcase,
  Brain,
  Settings,
  Award
} from 'lucide-react';

export default function AboutPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-black font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="pt-40 pb-32 relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-gradient-to-br bg-black"></div> */}
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* <div className="flex justify-center mb-12">
            <Logo variant="white" size="xl" />
          </div> */}
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Brain className="w-5 h-5 text-purple-400" />
            <span className="text-white font-medium">Built by ex-startup engineers who move fast and build lean</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Meet the Team Behind{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dice Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            We're not just a dev agency — we're a startup-building powerhouse 
            with the experience, speed, and mindset to turn bold ideas into real, scalable products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Book a Free Strategy Call
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            
            <button 
              onClick={() => scrollToSection('products')}
              className="group backdrop-blur-sm bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2"
            >
              <Briefcase className="w-5 h-5" />
              See What We Can Build
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
          
          <p className="text-gray-400 text-sm">
            No pressure, just expert advice on how to bring your idea to life
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Target className="w-16 h-16 text-purple-400 mb-8" />
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-10">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                At Dice Solutions, our mission is to help founders, startups, and businesses 
                launch faster, grow smarter, and scale seamlessly.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-10">
                We believe in lean development, rapid iteration, and staying ahead of the tech curve. 
                Every product we ship is designed to create real value — not vanity features.
              </p>
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30">
                <Zap className="w-6 h-6 text-purple-400" />
                <span className="text-white font-semibold text-lg">"We don't just write code — we build products that solve real problems."</span>
              </div>
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-10 border border-white/10">
              <div className="flex items-center gap-3 mb-10">
                <TrendingUp className="w-8 h-8 text-blue-400" />
                <h3 className="text-3xl font-bold text-white">By the Numbers</h3>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Rocket className="w-6 h-6 text-purple-400" />
                    <div className="text-4xl font-bold text-white">50+</div>
                  </div>
                  <div className="text-gray-300 font-medium">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Star className="w-6 h-6 text-yellow-400" />
                    <div className="text-4xl font-bold text-white">98%</div>
                  </div>
                  <div className="text-gray-300 font-medium">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Timer className="w-6 h-6 text-green-400" />
                    <div className="text-4xl font-bold text-white">4</div>
                  </div>
                  <div className="text-gray-300 font-medium">Weeks Avg. MVP</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Phone className="w-6 h-6 text-blue-400" />
                    <div className="text-4xl font-bold text-white">24/7</div>
                  </div>
                  <div className="text-gray-300 font-medium">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Startup DNA Section */}
      <section id="team" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-10 border border-white/10">
              <Users className="w-16 h-16 text-blue-400 mb-8" />
              <h3 className="text-4xl font-bold text-white mb-8">Startup DNA</h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our team comes from fast-paced startups — where multitasking is the norm and speed is survival.
              </p>
              <div className="space-y-6 text-gray-300">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg">Engineers who move fast and think product</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg">Experience across frontend, backend, AI, and DevOps</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg">Obsessed with user feedback and product-market fit</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg">Built MVPs and scaled products to serve millions</span>
                </div>
              </div>
            </div>
            
            <div>
              <Brain className="w-16 h-16 text-purple-400 mb-8" />
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-10">
                Who We Are
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                We're a small, focused team of builders. We've worn many hats — founders, engineers, 
                product leads — and we bring that same agility to every project we touch.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-10">
                Whether it's an MVP or a complex SaaS platform, we know how to build smart and scale fast.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-3 border-white"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full border-3 border-white"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full border-3 border-white"></div>
                </div>
                <span className="text-white font-semibold text-lg">Product-first engineers ready to build</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-gray-900"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Code className="w-16 h-16 text-purple-400 mx-auto mb-8" />
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Our Stack & Style
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              We leverage a wide range of modern, battle-tested technologies — not limited to any single stack — 
              to build maintainable, scalable, and high-performance products tailored to your needs.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Some of our core tools include:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { name: 'Next.js', desc: 'for scalable, SEO-friendly web apps', icon: Code },
              { name: 'Tailwind CSS + Shadcn UI', desc: 'for fast, modern, and responsive UI development', icon: Settings },
              { name: 'PostgreSQL + Supabase', desc: 'powering real-time, scalable backends', icon: Globe },
              { name: 'Docker + AWS', desc: 'enabling reliable, cloud-native deployments and DevOps', icon: Rocket },
              { name: 'OpenAI', desc: 'integrating AI features that enhance product value', icon: Brain },
              { name: 'TypeScript', desc: 'ensuring type safety and maintainability across codebases', icon: CheckCircle }
            ].map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                >
                  <IconComponent className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-white font-semibold text-xl mb-3">{tech.name}</h3>
                  <p className="text-gray-400">{tech.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-4 px-10 py-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30">
              <Zap className="w-6 h-6 text-blue-400" />
              <span className="text-white font-semibold text-xl">
                But we're not limited to these — our team adapts quickly and uses the best technology fit for your project's unique challenges and goals.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* In-House Products Section */}
      <section id="products" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900/30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Rocket className="w-16 h-16 text-pink-400 mx-auto mb-8" />
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              We Build Our Own Products Too
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don't just build for clients — we build for ourselves.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto backdrop-blur-sm bg-white/5 rounded-3xl p-12 md:p-16 border border-white/10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <Globe className="w-10 h-10 text-blue-400" />
                <h3 className="text-4xl font-bold text-white">Monitorly</h3>
              </div>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                A powerful uptime monitoring platform with real-time alerts via Slack, email, and webhooks.
              </p>
              <p className="text-lg text-purple-300 mb-12">
                We use it internally — and so do many of our clients.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
                  <Award className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <div className="text-green-400 font-bold text-2xl mb-1">99.9%</div>
                  <div className="text-gray-400">Uptime SLA</div>
                </div>
                <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
                  <Globe className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-blue-400 font-bold text-2xl mb-1">Global</div>
                  <div className="text-gray-400">Monitoring</div>
                </div>
                <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
                  <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <div className="text-yellow-400 font-bold text-2xl mb-1">Real-Time</div>
                  <div className="text-gray-400">Alerts</div>
                </div>
                <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
                  <Clock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-purple-400 font-bold text-2xl mb-1">24/7</div>
                  <div className="text-gray-400">Monitoring</div>
                </div>
              </div>
              
              <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30">
                <Clock className="w-6 h-6 text-blue-400" />
                <span className="text-gray-300 italic text-lg">
                  "Building our own products helps us stay sharp and empathetic to our clients' challenges."
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Zap className="w-12 h-12 text-purple-400" />
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Want to work with{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                product-first engineers?
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
            Let's turn your vision into a real, working product — fast.
          </p>
          <a href={`https://calendly.com/d/cv6x-6ts-rqy/schedule-a-meeting-now`} target='_blank'>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center gap-3">
              <Phone className="w-6 h-6" />
              
                Book a Free Strategy Call
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </button>
          </div>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}