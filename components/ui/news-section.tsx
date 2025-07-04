'use client';

import { ArrowRight, Calendar, User } from 'lucide-react';

export function NewsSection() {
  const articles = [
    {
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Discover the latest trends shaping the future of web development and how they impact business growth.',
      author: 'John Smith',
      date: 'Dec 15, 2024',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Technology'
    },
    {
      title: 'Building Scalable SaaS Applications: Best Practices',
      excerpt: 'Learn the essential strategies for building SaaS applications that can scale with your business needs.',
      author: 'Jane Doe',
      date: 'Dec 12, 2024',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Development'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-800 rounded-full px-4 py-2 mb-6">
            <span className="text-green-400 text-sm font-medium">INSIGHTS AND UPDATES</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            News Updates And{' '}
            <span className="text-green-400">Expert Advice</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                </div>
                
                <div className="text-green-400 text-sm font-medium mb-2">{article.category}</div>
                <h3 className="text-white font-bold text-xl mb-3">{article.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{article.excerpt}</p>
                
                <button className="group/btn bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
                  Read More
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 mx-auto">
            View All Articles
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}