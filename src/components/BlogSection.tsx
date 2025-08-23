import React from 'react';
import { User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import relevant AI/business consulting images
import aiBusinessOperationsImg from '@/assets/blog-ai-business-operations.jpg';
import digitalTransformation2025Img from '@/assets/blog-digital-transformation-2025.jpg';
import scalableAiSolutionsImg from '@/assets/blog-scalable-ai-solutions.jpg';
import aiConsultingSmallBusinessImg from '@/assets/blog-ai-consulting-small-business.jpg';
import machineLearningEnterpriseImg from '@/assets/blog-machine-learning-enterprise.jpg';
import aiAutomationImg from '@/assets/blog-ai-automation.jpg';
import nlpCustomerExperienceImg from '@/assets/blog-nlp-customer-experience.jpg';
import computerVisionImg from '@/assets/blog-computer-vision.jpg';
import aiStrategyImg from '@/assets/blog-ai-strategy.jpg';
import dataScienceImg from '@/assets/blog-data-science.jpg';
import digitalMarketingAiImg from '@/assets/blog-digital-marketing-ai.jpg';
import cloudAiImg from '@/assets/blog-cloud-ai.jpg';
import aiEthicsImg from '@/assets/blog-ai-ethics.jpg';

const blogPosts = [
  {
    id: 1,
    title: "5 Ways AI Can Transform Your Business Operations",
    excerpt: "Discover how artificial intelligence is revolutionizing business processes and driving unprecedented efficiency gains across industries.",
    author: "Githaf Team",
    image: aiBusinessOperationsImg,
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
    image: digitalTransformation2025Img,
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
    image: scalableAiSolutionsImg,
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
  },
  {
    id: 4,
    title: "AI Consulting for Small Business: ROI-Driven Implementation Strategies",
    excerpt: "Discover cost-effective AI consulting approaches that deliver measurable ROI for small businesses and startups in competitive markets.",
    author: "Githaf Team",
    image: aiConsultingSmallBusinessImg,
    category: "AI Consulting",
    content: `
      <h2>AI for Small Business Success</h2>
      <p>Small businesses can leverage AI consulting to compete with larger enterprises through strategic implementation and focused ROI optimization.</p>
      
      <h2>Cost-Effective AI Solutions</h2>
      <p>Learn how to implement AI without breaking the budget, focusing on high-impact, low-cost solutions that drive immediate business value.</p>
      
      <h2>Measuring AI ROI</h2>
      <p>Establish clear metrics and KPIs to track your AI investment returns and optimize performance over time.</p>
    `
  },
  {
    id: 5,
    title: "Machine Learning Implementation: Enterprise-Grade AI Solutions",
    excerpt: "Master enterprise machine learning deployment with proven frameworks, scalable architectures, and production-ready AI systems.",
    author: "Githaf Team",
    image: machineLearningEnterpriseImg,
    category: "Machine Learning",
    content: `
      <h2>Enterprise ML Architecture</h2>
      <p>Build robust machine learning systems that scale with your enterprise needs and integrate seamlessly with existing infrastructure.</p>
      
      <h2>Production Deployment</h2>
      <p>Learn best practices for deploying ML models in production environments with monitoring, versioning, and automated retraining.</p>
      
      <h2>Data Pipeline Optimization</h2>
      <p>Optimize your data pipelines for maximum ML performance and reliability in enterprise environments.</p>
    `
  },
  {
    id: 6,
    title: "AI-Powered Automation: Streamlining Business Process Management",
    excerpt: "Transform your business operations with intelligent automation solutions that reduce costs, improve accuracy, and accelerate growth.",
    author: "Githaf Team",
    image: aiAutomationImg,
    category: "Automation",
    content: `
      <h2>Intelligent Process Automation</h2>
      <p>Discover how AI-powered automation can transform routine business processes into efficient, intelligent workflows.</p>
      
      <h2>RPA vs. AI Automation</h2>
      <p>Understand the differences between traditional RPA and AI-driven automation to choose the right solution for your business.</p>
      
      <h2>Implementation Roadmap</h2>
      <p>Follow a structured approach to implementing business process automation that delivers measurable results.</p>
    `
  },
  {
    id: 7,
    title: "Natural Language Processing for Customer Experience Enhancement",
    excerpt: "Leverage NLP technologies to revolutionize customer interactions, sentiment analysis, and automated support systems.",
    author: "Githaf Team",
    image: nlpCustomerExperienceImg,
    category: "NLP",
    content: `
      <h2>NLP in Customer Service</h2>
      <p>Transform customer experience with advanced natural language processing technologies that understand and respond to human communication.</p>
      
      <h2>Sentiment Analysis Applications</h2>
      <p>Implement sentiment analysis to monitor customer satisfaction, brand perception, and market trends in real-time.</p>
      
      <h2>Conversational AI Design</h2>
      <p>Build intelligent conversational interfaces that provide natural, helpful interactions with your customers.</p>
    `
  },
  {
    id: 8,
    title: "Computer Vision Applications: Visual AI for Modern Businesses",
    excerpt: "Explore computer vision solutions for quality control, security, retail analytics, and automated visual inspection systems.",
    author: "Githaf Team",
    image: computerVisionImg,
    category: "Computer Vision",
    content: `
      <h2>Computer Vision in Industry</h2>
      <p>Discover how computer vision technology is transforming manufacturing, retail, healthcare, and security industries.</p>
      
      <h2>Quality Control Automation</h2>
      <p>Implement automated visual inspection systems that ensure product quality while reducing manual inspection costs.</p>
      
      <h2>Real-time Analytics</h2>
      <p>Deploy computer vision solutions for real-time monitoring, analytics, and decision-making in business operations.</p>
    `
  },
  {
    id: 9,
    title: "AI Strategy Development: Creating Competitive Advantage Through Technology",
    excerpt: "Develop comprehensive AI strategies that align with business objectives and create sustainable competitive advantages in digital markets.",
    author: "Githaf Team",
    image: aiStrategyImg,
    category: "AI Strategy",
    content: `
      <h2>Strategic AI Planning</h2>
      <p>Develop AI strategies that align with your business goals and create long-term competitive advantages in your industry.</p>
      
      <h2>Technology Roadmapping</h2>
      <p>Create detailed technology roadmaps that guide your AI adoption journey and ensure successful implementation.</p>
      
      <h2>Change Management</h2>
      <p>Manage organizational change effectively during AI transformation to ensure employee buy-in and successful adoption.</p>
    `
  },
  {
    id: 10,
    title: "Data Science Consulting: Turning Data Into Actionable Business Intelligence",
    excerpt: "Unlock the power of your data with advanced analytics, predictive modeling, and AI-driven insights for strategic decision-making.",
    author: "Githaf Team",
    image: dataScienceImg,
    category: "Data Science",
    content: `
      <h2>Data-Driven Decision Making</h2>
      <p>Transform raw data into actionable business intelligence that drives strategic decisions and operational improvements.</p>
      
      <h2>Predictive Analytics</h2>
      <p>Implement predictive models that forecast trends, customer behavior, and business outcomes with high accuracy.</p>
      
      <h2>Advanced Analytics</h2>
      <p>Leverage advanced statistical methods and machine learning algorithms to uncover hidden patterns in your data.</p>
    `
  },
  {
    id: 11,
    title: "Digital Marketing AI: Personalization and Customer Acquisition Strategies",
    excerpt: "Revolutionize your digital marketing with AI-powered personalization, predictive analytics, and automated customer acquisition systems.",
    author: "Githaf Team",
    image: digitalMarketingAiImg,
    category: "Digital Marketing",
    content: `
      <h2>AI-Powered Marketing</h2>
      <p>Leverage artificial intelligence to create personalized marketing campaigns that drive higher engagement and conversion rates.</p>
      
      <h2>Customer Segmentation</h2>
      <p>Use machine learning to identify and target customer segments with precision, maximizing marketing ROI and effectiveness.</p>
      
      <h2>Automated Lead Generation</h2>
      <p>Implement AI-driven lead generation systems that identify and nurture prospects automatically across digital channels.</p>
    `
  },
  {
    id: 12,
    title: "Cloud AI Solutions: Scalable Infrastructure for AI Deployment",
    excerpt: "Build robust cloud-based AI infrastructure that scales with your business needs while optimizing costs and performance.",
    author: "Githaf Team",
    image: cloudAiImg,
    category: "Cloud AI",
    content: `
      <h2>Cloud AI Architecture</h2>
      <p>Design and implement scalable cloud infrastructure that supports enterprise-grade AI applications and services.</p>
      
      <h2>Cost Optimization</h2>
      <p>Optimize cloud AI costs through efficient resource management, auto-scaling, and intelligent workload distribution.</p>
      
      <h2>Security & Compliance</h2>
      <p>Ensure your cloud AI solutions meet industry security standards and regulatory compliance requirements.</p>
    `
  },
  {
    id: 13,
    title: "AI Ethics and Governance: Responsible AI Implementation Framework",
    excerpt: "Establish ethical AI practices and governance frameworks that ensure responsible AI development and deployment in your organization.",
    author: "Githaf Team",
    image: aiEthicsImg,
    category: "AI Ethics",
    content: `
      <h2>Responsible AI Development</h2>
      <p>Implement ethical AI practices that ensure fairness, transparency, and accountability in your AI systems and processes.</p>
      
      <h2>Bias Detection and Mitigation</h2>
      <p>Identify and address algorithmic bias to create fair and inclusive AI solutions that serve all users equitably.</p>
      
      <h2>AI Governance Framework</h2>
      <p>Establish comprehensive governance frameworks that guide ethical AI development and deployment across your organization.</p>
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
              <h2 className="mb-6">
                From Our <span className="text-purple-400">Blog</span>
              </h2>
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
