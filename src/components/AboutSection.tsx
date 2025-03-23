
import React from 'react';
import { Check } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const keyPoints = [
  'Over 18 years of industry experience',
  'Team of certified consultants and specialists',
  'Proven track record of successful transformations',
  'Tailored solutions for businesses of all sizes',
  'Data-driven approach to digital strategy',
  'Ongoing support and optimization services',
];

const AboutSection: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="about" className="py-4 md:py-8 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-primary/5 rounded-l-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-center">
          {/* Image column */}
          <div className="order-2 lg:order-1 reveal">
            <div className="relative">
              {!isMobile && (
                <>
                  <div className="absolute -top-4 -left-4 w-20 sm:w-32 h-20 sm:h-32 bg-primary/10 rounded-xl -z-10"></div>
                  <div className="absolute -bottom-4 -right-4 w-20 sm:w-32 h-20 sm:h-32 bg-accent/10 rounded-xl -z-10"></div>
                </>
              )}
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/313bdaca-fadf-4d22-9181-d3f6de4259f6.png" 
                  alt="Diverse team of professionals collaborating around a table with laptops" 
                  className="w-full h-auto object-cover aspect-[4/3] lazy-image"
                />
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="order-1 lg:order-2 reveal">
            <h2 className="mb-2 sm:mb-3">
              About <span className="text-[#ea33f7]">Githaf Consulting</span>
            </h2>
            
            <p className="text-base text-muted-foreground mb-2 sm:mb-3">
              We're a team of experienced consultants specializing in technology, business strategy, and digital marketing. Our goal is to help SMEs and large businesses thrive in the digital world, increase revenue, and stay competitive.
            </p>
            
            <p className="text-base text-muted-foreground mb-3 sm:mb-4">
              By combining smart strategies with practical solutions, we ensure our clients not only plan for the future but also achieve real, measurable results in today's fast-paced market.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 sm:mb-4">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-2 mt-0.5 text-primary flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <p className="text-sm text-foreground">{point}</p>
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
