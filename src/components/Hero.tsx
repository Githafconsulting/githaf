
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { useIsMobile } from '@/hooks/use-mobile';

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
    <section id="home" className="relative pt-16 pb-8 md:pt-20 md:pb-12 overflow-hidden h-[70vh] md:h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="/lovable-uploads/eb57cce0-361d-48a6-8739-b1206472d9cb.png" 
          alt="AI Digital Transformation Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/85 via-slate-800/80 to-slate-900/85"></div>

      {/* Subtle particle effect */}
      <div className="particles">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main heading */}
          <h1 className={`mb-4 md:mb-6 text-white opacity-0 transform translate-y-8 transition-all duration-1000 delay-200 ease-out text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
            Transform Your Business
            <span className="block mt-1 md:mt-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              with AI Solutions
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className={`text-base md:text-lg text-slate-300 mb-6 md:mb-8 max-w-xl mx-auto leading-relaxed opacity-0 transform translate-y-8 transition-all duration-1000 delay-400 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
            Strategic AI consulting and digital transformation to help your business scale and compete.
          </p>
          
          {/* CTA Button */}
          <div className={`flex justify-center opacity-0 transform translate-y-8 transition-all duration-1000 delay-600 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
            <a href="#services" className="group">
              <Button variant="primary" size="lg" className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold">
                Explore Our Services
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
