'use client';

import { ArrowRight, ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-800 rounded-full px-4 py-2 mb-6">
            <span className="text-green-400 text-sm font-medium">OUR RECENT WORK</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Our Recent Work
          </h2>
          
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 mx-auto">
            View All Projects
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Featured Project */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700">
            <div className="aspect-video">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Featured project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-2xl mb-2">E-commerce Platform</h3>
                  <p className="text-gray-300">Full-stack development with modern UI/UX</p>
                </div>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  View Case Study
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'SaaS Dashboard',
              category: 'Web Application',
              image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600'
            },
            {
              title: 'Mobile Banking App',
              category: 'Mobile Development',
              image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
            },
            {
              title: 'AI Analytics Platform',
              category: 'AI Integration',
              image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600'
            }
          ].map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="text-green-400 text-sm font-medium mb-2">{project.category}</div>
                <h3 className="text-white font-bold text-lg mb-4">{project.title}</h3>
                
                <button className="group/btn flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors">
                  <span>View Details</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}