'use client';

import { Code, Palette, Smartphone } from 'lucide-react';

export function SkillsSection() {
  const skills = [
    { name: 'Web Development', percentage: 95 },
    { name: 'UI/UX Design', percentage: 90 },
    { name: 'Mobile Development', percentage: 85 }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Visualize{' '}
              <span className="text-orange-400">Our Skills</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Our expertise spans across multiple domains, delivering comprehensive solutions for your business needs.
            </p>

            {/* Skills List */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-orange-400 font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Device Mockups */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 shadow-xl border border-gray-700">
                  <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg h-32"></div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 shadow-xl border border-gray-700">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg h-24"></div>
                </div>
              </div>
              
              <div className="space-y-6 mt-8">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 shadow-xl border border-gray-700">
                  <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-lg h-28"></div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 shadow-xl border border-gray-700">
                  <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg h-20"></div>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg animate-bounce flex items-center justify-center">
              <Code className="w-8 h-8 text-white" />
            </div>
            
            <div className="absolute bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg animate-pulse flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}