
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
    <section id="home" className="relative pt-16 pb-6 md:pt-20 md:pb-8 overflow-hidden min-h-screen flex items-center">
      <HeroBackground />
      <ParticleEffect />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Main content */}
          <div className="order-2 lg:order-1 py-6 lg:py-0">
            <HeroContent isVisible={isVisible} />
          </div>

          {/* Right side - Tilted Window Project Showcase */}
          <div className="order-1 lg:order-2">
            <ProjectShowcase isVisible={isVisible} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
