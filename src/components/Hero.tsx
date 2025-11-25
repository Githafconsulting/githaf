
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
        {/* Centered Layout for all screen sizes */}
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <HeroContent isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
