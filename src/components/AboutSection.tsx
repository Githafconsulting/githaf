
import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

const keyPoints = [
  'Over 10 years of industry experience',
  'Team of certified consultants and specialists',
  'Proven track record of successful transformations',
  'Tailored solutions for businesses of all sizes',
  'Data-driven approach to digital strategy',
  'Ongoing support and optimization services',
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-primary/5 rounded-l-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <div className="order-2 lg:order-1 reveal">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-xl -z-10"></div>
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  alt="Team collaboration on digital transformation" 
                  className="w-full h-auto object-cover aspect-[4/3] lazy-image"
                />
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="order-1 lg:order-2 reveal">
            <h2 className="mb-6">
              About <span className="text-primary">TechTransform</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              We're a team of seasoned consultants with deep expertise in technology integration, business strategy, and digital marketing. Our mission is to help businesses navigate the complexities of digital transformation with confidence and clarity.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Our proven methodology combines strategic thinking with practical implementation, ensuring that our clients not only envision their digital future but realize it in a way that drives measurable business results.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-2 mt-1 text-primary">
                    <Check size={18} />
                  </div>
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
            </div>
            
            <Button 
              variant="primary"
              className="mt-4"
            >
              Our Approach
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
