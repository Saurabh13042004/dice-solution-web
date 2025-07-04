'use client';

import { ArrowRight, ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Full Stack Development',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'SaaS Dashboard',
      category: 'UI/UX Design',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Mobile App',
      category: 'Mobile Development',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'AI Platform',
      category: 'AI Integration',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Our{' '}
            <span className="text-orange-400">Projects</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our latest work and see how we bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <div className="text-orange-400 text-sm font-medium mb-2">{project.category}</div>
                <h3 className="text-white font-bold text-xl mb-4">{project.title}</h3>
                
                <button className="group/btn flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors">
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 flex items-center gap-2 mx-auto">
            View All Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}