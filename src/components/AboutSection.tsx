
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
    icon: <Users size={16} className="text-[#8B5CF6]" />
  },
  {
    text: 'Proven track record of successful transformations',
    icon: <CheckSquare size={16} className="text-[#F97316]" />
  },
  {
    text: 'Tailored solutions for businesses of all sizes',
    icon: <AlignJustify size={16} className="text-[#D946EF]" />
  },
  {
    text: 'Ongoing support and optimization services',
    icon: <Headphones size={16} className="text-[#ea384c]" />
  },
];

const AboutSection: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="about" className="py-4 md:py-8 relative bg-[#D3E4FD]/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <h2 className="mb-2 sm:mb-3">
              About <span className="text-[#ea33f7]">Githaf Consulting</span>
            </h2>
            
            <p className="text-base text-muted-foreground mb-2 sm:mb-3">
              We're a team of experienced Business Transformation and Technology consultants specializing in building AI-powered solutions for businesses looking to scale their operations and growth. Our goal is to help them thrive and remain competitive.
            </p>
            
            <p className="text-base text-muted-foreground mb-3 sm:mb-4">
              By combining smart strategies with practical solutions, we ensure our clients not only plan for the future but also achieve real, measurable results in today's fast-paced market.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 sm:mb-4">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-2 mt-0.5 flex-shrink-0">
                    {point.icon}
                  </div>
                  <p className="text-sm text-muted-foreground">{point.text}</p>
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
