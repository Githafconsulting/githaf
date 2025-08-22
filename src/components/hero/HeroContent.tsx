import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
interface HeroContentProps {
  isVisible: boolean;
}
const HeroContent: React.FC<HeroContentProps> = ({
  isVisible
}) => {
  const isMobile = useIsMobile();
  return <div className="text-center lg:text-left">
      {/* Main heading - with line break and colored text */}
      <h1 className={`text-white mb-6 md:mb-8 opacity-0 transform translate-y-8 transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
        Digitally Transform your <br />Business with <span className="text-purple-400">AI</span>
      </h1>
      
      {/* Subtitle */}
      <p className={`text-slate-200 text-lg md:text-xl leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0 opacity-0 transform translate-y-8 transition-all duration-1000 delay-400 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>We help businesses harness AI to grow. From strategy to implementation, we consult, design, and deploy tailored AI solutions that automate and optimize operations. Helping you focus on what matters.</p>
      
      {/* CTA Button */}
      <div className={`flex justify-center lg:justify-start mb-8 lg:mb-12 opacity-0 transform translate-y-8 transition-all duration-1000 delay-600 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
        <a href="#contact" className="group">
          <button className="px-4 py-2 text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 rounded-lg transition-all duration-300">
            Get a Free Consultation
          </button>
        </a>
      </div>
    </div>;
};
export default HeroContent;