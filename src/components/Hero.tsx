
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import ProjectShowcase from './hero/ProjectShowcase';
import ParticleEffect from './hero/ParticleEffect';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, isMobile ? 50 : 100);
    return () => clearTimeout(timer);
  }, [isMobile]);

  return (
    <section id="home" className="relative pt-16 pb-2 md:pt-16 md:pb-2 lg:pt-0 lg:pb-0 overflow-hidden min-h-screen flex items-center">
      <HeroBackground />
      <ParticleEffect />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto">
          {/* Left side - Main content - Takes up 7 columns */}
          <div className="col-span-7 pr-8">
            <HeroContent isVisible={isVisible} />
          </div>

          {/* Right side - Tilted Window Project Showcase - Takes up 5 columns */}
          {/* <div className="col-span-5">
            <ProjectShowcase isVisible={isVisible} />
          </div> */}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-8">
          {/* Main heading - with line break and colored text */}
          <h1 className={`text-white mb-6 md:mb-8 opacity-0 transform translate-y-8 transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
            Transform your <br />Business with <span className="text-purple-400">AI</span>
          </h1>
          
          {/* Subtitle */}
          <p className={`text-slate-200 text-lg md:text-xl leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto opacity-0 transform translate-y-8 transition-all duration-1000 delay-400 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
            We help businesses harness AI to grow. From strategy to implementation, we consult, design, and deploy tailored AI solutions that automate and optimize operations. Helping you focus on what matters.
          </p>
          
          {/* CTA Button */}
          <div className={`flex justify-center mb-8 opacity-0 transform translate-y-8 transition-all duration-1000 delay-600 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
            <a href="#contact" className="group">
              <button className="px-4 py-2 text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 rounded-lg transition-all duration-300">
                Get a Free Consultation
              </button>
            </a>
          </div>

          {/* Project Showcase - After button on mobile */}
          {/* <div>
            <ProjectShowcase isVisible={isVisible} />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
