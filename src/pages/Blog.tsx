
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User, ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';
import { blogPosts } from '@/components/BlogSection';
import Button from '@/components/Button';

const Blog: React.FC = () => {
  return (
    <Layout 
      title="Blog - Githaf Consulting | AI and Digital Transformation Insights"
      description="Explore our latest insights on AI implementation, digital transformation, and business innovation strategies."
    >
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Back Button */}
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft size={16} />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 mb-8">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-purple-300">Expert Insights</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-purple-400">Blog</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Stay ahead with expert insights on AI, digital transformation, and business innovation
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="group cursor-pointer"
              >
                <Link to={`/blog/${post.id}`}>
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
                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                        {post.title}
                      </h2>
                      
                      <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      
                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                        <div className="flex items-center gap-1">
                          <User size={12} />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      
                      {/* Read More */}
                      <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">
                        <span>Read More</span>
                        <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Expert Guidance?
              </h3>
              <p className="text-slate-300 mb-6">
                Ready to implement these strategies in your business? Get personalized consultation from our experts.
              </p>
              <Link to="/#contact">
                <Button variant="primary" size="lg">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
