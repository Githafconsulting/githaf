
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Check } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, isMobile ? 50 : 100);
    return () => clearTimeout(timer);
  }, [isMobile]);

  const services = [
    'AI Consulting',
    'AI SaaS Products',
    'AI Agents',
    'Mobile App Development',
    'Web Development',
    'Digital Marketing'
  ];

  return (
    <section id="home" className="relative pt-16 pb-8 md:pt-20 md:pb-12 overflow-hidden min-h-[60vh] md:min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="/lovable-uploads/eb57cce0-361d-48a6-8739-b1206472d9cb.png" 
          alt="AI Digital Transformation Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Enhanced Darker Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>

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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left side - Main content */}
          <div className="text-center lg:text-left">
            {/* Main heading */}
            <h1 className={`mb-4 md:mb-6 text-white opacity-0 transform translate-y-8 transition-all duration-1000 delay-200 ease-out text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
              Transform Your Business
              <span className="block mt-1 md:mt-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                with AI Solutions
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className={`text-sm sm:text-base md:text-lg text-slate-300 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-0 transform translate-y-8 transition-all duration-1000 delay-400 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
              Strategic AI consulting and digital transformation to help your business scale and compete in the modern market.
            </p>
            
            {/* CTA Button */}
            <div className={`flex justify-center lg:justify-start opacity-0 transform translate-y-8 transition-all duration-1000 delay-600 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
              <a href="#services" className="group">
                <Button variant="primary" size={isMobile ? "default" : "lg"} className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold">
                  Explore Our Services
                </Button>
              </a>
            </div>
          </div>

          {/* Right side - Services grid */}
          <div className={`opacity-0 transform translate-y-8 transition-all duration-1000 delay-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
            <div className="glass rounded-xl p-4 md:p-6">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4 md:mb-6 text-center lg:text-left">Our Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 md:p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex-shrink-0">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-green-400 stroke-2" />
                    </div>
                    <span className="text-white font-medium text-xs sm:text-sm md:text-base leading-tight">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
