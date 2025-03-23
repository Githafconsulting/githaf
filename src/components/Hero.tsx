
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import AnimatedCard from './AnimatedCard';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Trigger animations on component mount with shorter delay on mobile
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, isMobile ? 50 : 100);

    return () => clearTimeout(timer);
  }, [isMobile]);

  return (
    <section 
      id="home"
      className="relative pt-16 pb-8 md:pt-24 md:pb-16 overflow-hidden bg-[#1A1F2C]"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-[10%] translate-x-[30%] w-[40rem] h-[40rem] rounded-full bg-[#6f42c1]/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-[20%] -translate-x-[10%] w-[30rem] h-[30rem] rounded-full bg-[#4e2799]/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Text content */}
          <div>
            <div 
              className={`opacity-0 transform translate-y-8 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : ''
              }`}
            >
              <span className="inline-block px-3 py-1 mb-3 text-xs sm:text-sm font-medium bg-white/10 text-white rounded-full">
                AI and Digital Transformation
              </span>
            </div>
            
            <h1 
              className={`mb-4 text-white opacity-0 transform translate-y-8 transition-all duration-700 delay-100 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : ''
              }`}
            >
              Transform Your Business 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] to-[#e1d5ff]"> Into the Digital Age</span>
            </h1>
            
            <p 
              className={`text-base md:text-lg text-white/80 mb-6 max-w-xl opacity-0 transform translate-y-8 transition-all duration-700 delay-200 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : ''
              }`}
            >
              We help businesses navigate the complexities of digital transformation with strategic consulting, innovative AI technologies, and data-driven solutions.
            </p>
            
            <div 
              className={`flex flex-col sm:flex-row gap-3 opacity-0 transform translate-y-8 transition-all duration-700 delay-300 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : ''
              }`}
            >
              <a href="#services">
                <Button 
                  variant="primary" 
                  size={isMobile ? "sm" : "lg"}
                  className="bg-[#ea33f7] text-white hover:bg-[#ea33f7]/90 w-full sm:w-auto"
                  icon={<ArrowRight size={isMobile ? 16 : 18} />}
                  iconPosition="right"
                >
                  Explore Our Services
                </Button>
              </a>
            </div>
          </div>
          
          {/* Visual element */}
          <div 
            className={`opacity-0 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100' : ''
            }`}
          >
            <div className="relative w-full max-w-[600px] mx-auto rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C] via-transparent to-transparent z-10"></div>
              <img 
                src="/lovable-uploads/eb57cce0-361d-48a6-8739-b1206472d9cb.png" 
                alt="Digital Transformation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
