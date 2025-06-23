
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "5 Ways AI Can Transform Your Business Operations",
    excerpt: "Discover how artificial intelligence is revolutionizing business processes and driving unprecedented efficiency gains across industries.",
    author: "Githaf Team",
    date: "December 15, 2024",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&q=80",
    category: "AI Strategy"
  },
  {
    id: 2,
    title: "The Future of Digital Transformation in 2025",
    excerpt: "Explore the latest trends and technologies that will shape digital transformation strategies in the coming year.",
    author: "Githaf Team",
    date: "December 10, 2024",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop&q=80",
    category: "Digital Innovation"
  },
  {
    id: 3,
    title: "Building Scalable AI Solutions: A Complete Guide",
    excerpt: "Learn the essential steps and best practices for implementing AI solutions that grow with your business needs.",
    author: "Githaf Team",
    date: "December 5, 2024",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&q=80",
    category: "Implementation"
  }
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background matching AI adoption section */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-b from-slate-900 via-gray-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[#1a1a2e] opacity-80"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(139,92,246,0.1) 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Container with Rounded Background */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-3xl"></div>
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto mb-16 reveal">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 mb-8">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-purple-300">Latest Insights</span>
              </div>
              
              <h2 className="mb-6">
                From Our <span className="text-purple-400">Blog</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Stay ahead with expert insights on AI, digital transformation, and business innovation
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {blogPosts.map((post, index) => (
                <article 
                  key={post.id}
                  className="reveal group cursor-pointer"
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() => window.open('#', '_blank')}
                >
                  <div className="bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-semibold text-white rounded-full" style={{ backgroundColor: '#9b87f5' }}>
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      
                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User size={12} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Read More */}
                      <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">
                        <span>Read More</span>
                        <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center reveal">
              <a href="#contact">
                <button 
                  className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  style={{ backgroundColor: '#9b87f5' }}
                >
                  Contact Us for More Insights
                  <ArrowRight size={20} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
