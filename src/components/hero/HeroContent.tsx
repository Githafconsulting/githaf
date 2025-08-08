
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import HeroFeatures from './HeroFeatures';

interface HeroContentProps {
  isVisible: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ isVisible }) => {
  const isMobile = useIsMobile();

  return (
    <div className="text-center lg:text-left">
      {/* Main heading - with line break and colored text */}
      <h1 className={`mb-4 md:mb-6 opacity-0 transform translate-y-8 transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
        Transform your <br />business into <span className="gradient-text">the AI Age</span>
      </h1>
      
      {/* Subtitle */}
      <p className={`mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 opacity-0 transform translate-y-8 transition-all duration-1000 delay-400 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
        We help businesses harness AI to scale and compete. From strategy and implementation to fully built solutions, we consult, design, and deploy tailored AI systems that automate and optimize operations. Access ready-to-use AI tools or partner with us to build bespoke solutions that scale.
      </p>
      
      {/* CTA Button */}
      <div className={`flex justify-center lg:justify-start mb-8 lg:mb-0 opacity-0 transform translate-y-8 transition-all duration-1000 delay-600 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
        <a href="#contact" className="group">
          <button className={`enhanced-button ${isMobile ? "h-12 px-6 py-3 text-sm" : "h-14 px-8 py-4 text-base"} font-semibold`}>
            Get Free Consultation
          </button>
        </a>
      </div>
      
      {/* Feature Cards */}
      <HeroFeatures isVisible={isVisible} />
    </div>
  );
};

export default HeroContent;
