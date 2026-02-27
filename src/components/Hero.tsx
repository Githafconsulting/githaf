import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import ParticleEffect from './hero/ParticleEffect';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), isMobile ? 50 : 100);
    return () => clearTimeout(timer);
  }, [isMobile]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />
      <ParticleEffect />
      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-24 md:py-32">
        <HeroContent isVisible={isVisible} />
      </div>
    </section>
  );
};

export default Hero;
