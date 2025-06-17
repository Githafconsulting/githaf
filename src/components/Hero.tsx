
import React, { useState, useEffect } from 'react';
import Button from './Button';
import AnimatedCard from './AnimatedCard';
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
    <section id="home" className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-[10%] translate-x-[30%] w-[50rem] h-[50rem] rounded-full bg-gradient-to-br from-slate-800/20 to-slate-700/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 translate-y-[20%] -translate-x-[10%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-slate-900/30 to-slate-800/20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Subtle particle effect */}
      <div className="particles">
        {[...Array(8)].map((_, i) => (
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <h1 className={`mb-6 text-white opacity-0 transform translate-y-8 transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
              Transform Your Business 
              <span className="gradient-text font-bold block mt-2">with AI Solutions</span>
            </h1>
            
            <p className={`text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed opacity-0 transform translate-y-8 transition-all duration-1000 delay-400 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
              We help businesses harness AI to scale and compete through strategic consulting, digital transformation, and custom AI solutions.
            </p>
            
            <div className={`flex justify-center lg:justify-start mb-8 opacity-0 transform translate-y-8 transition-all duration-1000 delay-600 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
              <a href="#services" className="group">
                <Button variant="primary" size="lg" className="px-8 py-4 text-lg font-semibold">
                  Explore Our Services
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 opacity-0 transform translate-y-8 transition-all duration-1000 delay-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
              <div className="text-center glass rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-xs md:text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center glass rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">5+</div>
                <div className="text-xs md:text-sm text-gray-400">Years</div>
              </div>
              <div className="text-center glass rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-xs md:text-sm text-gray-400">Success</div>
              </div>
            </div>
          </div>
          
          {/* Visual element */}
          <div className={`opacity-0 transition-all duration-1200 delay-400 ${isVisible ? 'opacity-100' : ''}`}>
            <AnimatedCard 
              className="relative w-full max-w-[600px] mx-auto enhanced-card overflow-hidden aspect-[4/3]"
              intensity={4}
              shine={true}
              animate={true}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              <img 
                src="/lovable-uploads/eb57cce0-361d-48a6-8739-b1206472d9cb.png" 
                alt="AI Digital Transformation" 
                className="w-full h-full object-cover" 
              />
              
              {/* Overlay content */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="glass rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">AI-Powered Solutions</h3>
                  <p className="text-gray-300 text-sm">Transforming businesses with cutting-edge technology</p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
