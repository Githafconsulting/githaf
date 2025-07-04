
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeroContentProps {
  isVisible: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ isVisible }) => {
  const isMobile = useIsMobile();

  return (
    <div className="text-center lg:text-left">
      {/* Main heading - with line break and colored text */}
      <h1 className={`mb-4 md:mb-6 opacity-0 transform translate-y-8 transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
        Transform your <br />business into <span className="text-purple-400">the AI Age</span>
      </h1>
      
      {/* Subtitle */}
      <p className={`mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 opacity-0 transform translate-y-8 transition-all duration-1000 delay-400 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
        We help businesses harness AI to scale and compete. From strategy and implementation to fully built solutions, we consult, design, and deploy tailored AI systems that automate and optimize operations. Access ready-to-use AI tools or partner with us to build bespoke solutions that scale.
      </p>
      
      {/* CTA Button */}
      <div className={`flex justify-center lg:justify-start opacity-0 transform translate-y-8 transition-all duration-1000 delay-600 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
        <a href="#services" className="group">
          <button className={`inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg ${isMobile ? "h-12" : "h-14"}`}
            style={{
              background: '#9b87f5'
            }}
          >
            Get Free Consultation
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
