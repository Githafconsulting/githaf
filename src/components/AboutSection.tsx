
import React from 'react';
import { 
  Users, 
  CheckSquare, 
  AlignJustify, 
  Headphones 
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const keyPoints = [
  {
    text: 'Team of consultants and specialists',
    icon: <Users size={16} className="text-slate-300" />
  },
  {
    text: 'Proven track record of successful transformations',
    icon: <CheckSquare size={16} className="text-slate-300" />
  },
  {
    text: 'Tailored solutions for businesses of all sizes',
    icon: <AlignJustify size={16} className="text-slate-300" />
  },
  {
    text: 'Ongoing support and optimization services',
    icon: <Headphones size={16} className="text-slate-300" />
  },
];

const AboutSection: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="about" className="py-16 md:py-24 relative">
      {/* Base background that blends with services section */}
      <div className="absolute inset-0 -z-10">
        {/* Base black background */}
        <div className="w-full h-full bg-black"></div>
        
        {/* White dotted pattern overlay - matching services section */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Container with Rounded Background */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Section Background with rounded corners */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              {/* Header */}
              <div className="text-center mb-16 reveal">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 mb-8">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-purple-300">About Us</span>
                </div>
                
                <h2 className="mb-6">
                  About Githaf Consulting
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Image Section */}
                <div className="reveal order-2 lg:order-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img 
                      src="/lovable-uploads/e4d86e3b-a5ee-45a1-95fa-b2999ae75a73.png"
                      alt="Githaf Consulting Team - Professional consultants and specialists"
                      className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="reveal order-1 lg:order-2 space-y-8">
                  <div>
                    <p className="mb-8">
                      We're a team of experienced Business Transformation and Technology consultants specializing in building AI-powered solutions for businesses looking to scale their operations and growth.
                    </p>
                    
                    <p className="mb-10">
                      By combining smart strategies with practical solutions, we ensure our clients not only plan for the future but also achieve real, measurable results in today's fast-paced market.
                    </p>
                  </div>

                  {/* Key Points Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {keyPoints.map((point, index) => (
                      <div key={index} className="flex items-start glass rounded-xl p-4 hover:bg-white/5 transition-all duration-300 group">
                        <div className="mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          {point.icon}
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">{point.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Call to Action */}
                  <div className="pt-8">
                    <div className="glass rounded-xl p-6 bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20">
                      <p className="text-white font-medium text-xl mb-2">Ready to transform your business?</p>
                      <p className="text-gray-300">Our goal is to help you thrive and remain competitive in today's market.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
