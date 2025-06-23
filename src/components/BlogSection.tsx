import React from 'react';
import { User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "5 Ways AI Can Transform Your Business Operations",
    excerpt: "Discover how artificial intelligence is revolutionizing business processes and driving unprecedented efficiency gains across industries.",
    author: "Githaf Team",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&q=80",
    category: "AI Strategy",
    content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence is no longer a futuristic concept—it's a present-day reality that's transforming how businesses operate across every industry. From automating routine tasks to providing deep insights through data analysis, AI is helping companies achieve unprecedented levels of efficiency and innovation.</p>
      
      <h2>1. Automated Customer Service</h2>
      <p>AI-powered chatbots and virtual assistants can handle customer inquiries 24/7, providing instant responses and freeing up your human agents to focus on complex issues that require empathy and creative problem-solving.</p>
      
      <h2>2. Predictive Analytics for Better Decision Making</h2>
      <p>Machine learning algorithms can analyze vast amounts of historical data to predict future trends, customer behavior, and market changes, enabling you to make data-driven decisions with confidence.</p>
      
      <h2>3. Supply Chain Optimization</h2>
      <p>AI can optimize your supply chain by predicting demand, identifying potential disruptions, and automatically adjusting inventory levels to minimize costs while ensuring product availability.</p>
      
      <h2>4. Intelligent Process Automation</h2>
      <p>Beyond simple task automation, AI can handle complex workflows that require decision-making, learning from patterns and continuously improving processes over time.</p>
      
      <h2>5. Enhanced Cybersecurity</h2>
      <p>AI systems can detect and respond to security threats in real-time, identifying unusual patterns and potential breaches before they cause significant damage to your business.</p>
      
      <h2>Getting Started</h2>
      <p>The key to successful AI implementation is starting small and scaling gradually. Identify one specific business process that could benefit from automation or enhanced analytics, and build from there.</p>
    `
  },
  {
    id: 2,
    title: "The Future of Digital Transformation in 2025",
    excerpt: "Explore the latest trends and technologies that will shape digital transformation strategies in the coming year.",
    author: "Githaf Team",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&q=80",
    category: "Digital Innovation",
    content: `
      <h2>The Digital Transformation Landscape</h2>
      <p>As we move into 2025, digital transformation continues to evolve at breakneck speed. Organizations that fail to adapt risk being left behind in an increasingly competitive marketplace.</p>
      
      <h2>Key Trends Shaping 2025</h2>
      <h3>1. Hyper-Personalization</h3>
      <p>AI-driven personalization will reach new heights, with businesses delivering individualized experiences across every customer touchpoint.</p>
      
      <h3>2. Edge Computing Adoption</h3>
      <p>As IoT devices proliferate, edge computing will become essential for processing data closer to its source, reducing latency and improving real-time decision making.</p>
      
      <h3>3. Sustainable Technology</h3>
      <p>Green IT initiatives will drive the adoption of energy-efficient technologies and sustainable business practices.</p>
      
      <h2>Implementation Strategies</h2>
      <p>Successful digital transformation requires a holistic approach that encompasses technology, people, and processes. Organizations must invest in employee training, robust cybersecurity measures, and scalable infrastructure.</p>
      
      <h2>Preparing for the Future</h2>
      <p>The key to thriving in 2025 is agility. Build flexible systems that can adapt to change, foster a culture of continuous learning, and partner with technology experts who understand your industry's unique challenges.</p>
    `
  },
  {
    id: 3,
    title: "Building Scalable AI Solutions: A Complete Guide",
    excerpt: "Learn the essential steps and best practices for implementing AI solutions that grow with your business needs.",
    author: "Githaf Team",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&q=80",
    category: "Implementation",
    content: `
      <h2>Understanding Scalable AI</h2>
      <p>Building AI solutions that can grow with your business requires careful planning, robust architecture, and a deep understanding of both current needs and future requirements.</p>
      
      <h2>Phase 1: Assessment and Planning</h2>
      <h3>Business Objectives Alignment</h3>
      <p>Start by clearly defining how AI will support your business goals. Identify specific use cases where AI can provide measurable value.</p>
      
      <h3>Data Readiness Evaluation</h3>
      <p>Assess the quality, quantity, and accessibility of your data. Clean, well-organized data is the foundation of any successful AI implementation.</p>
      
      <h2>Phase 2: Architecture Design</h2>
      <h3>Modular Approach</h3>
      <p>Design your AI system with modular components that can be independently updated, scaled, or replaced as your needs evolve.</p>
      
      <h3>Cloud-Native Solutions</h3>
      <p>Leverage cloud platforms for their scalability, managed services, and global infrastructure capabilities.</p>
      
      <h2>Phase 3: Implementation Best Practices</h2>
      <h3>Start Small, Scale Fast</h3>
      <p>Begin with a pilot project to prove value and learn, then rapidly scale successful implementations across your organization.</p>
      
      <h3>Continuous Monitoring</h3>
      <p>Implement robust monitoring and feedback loops to ensure your AI systems continue to perform optimally as they scale.</p>
      
      <h2>Common Pitfalls to Avoid</h2>
      <p>Avoid these common mistakes: neglecting data governance, underestimating infrastructure requirements, and failing to plan for model retraining and updates.</p>
    `
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
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                          {post.title}
                        </h3>
                        
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

            {/* View All Button */}
            <div className="text-center reveal">
              <Link to="/blog">
                <button 
                  className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  style={{ backgroundColor: '#9b87f5' }}
                >
                  See More
                  <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
export { blogPosts };
