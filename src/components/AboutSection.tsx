
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
    <section id="about" className="py-8 md:py-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="reveal enhanced-card p-8 md:p-12">
            <h2 className="mb-6 text-white">
              About <span className="gradient-text">Githaf Consulting</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We're a team of experienced Business Transformation and Technology consultants specializing in building AI-powered solutions for businesses looking to scale their operations and growth. Our goal is to help them thrive and remain competitive.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              By combining smart strategies with practical solutions, we ensure our clients not only plan for the future but also achieve real, measurable results in today's fast-paced market.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start glass rounded-lg p-4 hover:bg-white/5 transition-all duration-300 group">
                  <div className="mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {point.icon}
                  </div>
                  <p className="text-gray-300 leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
