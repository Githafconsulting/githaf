
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import ProjectShowcase from './hero/ProjectShowcase';
import ScrollIndicator from './hero/ScrollIndicator';
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
    <section id="home" className="relative pt-16 pb-12 md:pt-20 md:pb-16 overflow-hidden min-h-[100vh] md:min-h-[100vh] flex items-center">
      <HeroBackground />
      <ParticleEffect />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:items-center">
          {/* Left side - Main content */}
          <div className="order-1 lg:order-1">
            <HeroContent isVisible={isVisible} />
          </div>

          {/* Right side - Tilted Window Project Showcase */}
          <div className="order-2 lg:order-2">
            <ProjectShowcase isVisible={isVisible} />
          </div>
        </div>
      </div>

      <ScrollIndicator isVisible={isVisible} />
    </section>
  );
};

export default Hero;
