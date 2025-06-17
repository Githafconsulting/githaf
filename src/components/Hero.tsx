
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Mouse, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, isMobile ? 50 : 100);
    return () => clearTimeout(timer);
  }, [isMobile]);

  const projects = [
    {
      id: 1,
      image: '/lovable-uploads/95c0b58a-299d-4749-bf37-535f705baa55.png',
      title: 'Sonique Entertainment',
      category: 'Event Management Platform'
    },
    {
      id: 2,
      image: '/lovable-uploads/707b6497-f40c-4fdb-89b1-f97452893fd8.png',
      title: 'PSK Services',
      category: 'Event Solutions Website'
    },
    {
      id: 3,
      image: '/lovable-uploads/01ecc33f-6209-44b5-ba0d-96f196827673.png',
      title: 'Crypto Dashboard',
      category: 'Financial Analytics Platform'
    },
    {
      id: 4,
      image: '/lovable-uploads/3702ad0e-6b99-4327-966f-bdb71cad69e8.png',
      title: 'Currency Circle',
      category: 'Digital Currency Platform'
    },
    {
      id: 5,
      image: '/lovable-uploads/e7cfce29-ae85-4532-94e7-f12401eb962a.png',
      title: 'Coihues Guide',
      category: 'Travel & Tourism Platform'
    },
    {
      id: 6,
      image: '/lovable-uploads/e67c1669-69e5-4ef0-8182-12f0439e2e59.png',
      title: 'AI Presentations',
      category: 'AI-Powered Design Tool'
    },
    {
      id: 7,
      image: '/lovable-uploads/3cb4d59c-52f9-4794-a4d6-0e6b4a612bc8.png',
      title: 'Banking Dashboard',
      category: 'Financial Management System'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="home" className="relative pt-16 pb-12 md:pt-20 md:pb-16 overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
      {/* Enhanced Background with dark navy/charcoal color - matching AI adoption section */}
      <div className="absolute inset-0 -z-20">
        <div className="w-full h-full bg-gradient-to-b from-slate-900 via-gray-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[#1a1a2e] opacity-80"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(139,92,246,0.1) 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Enhanced Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/20"></div>

      {/* Gradient Flare */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"></div>

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Main content */}
          <div className="text-center lg:text-left">
            {/* Main heading */}
            <h1 className={`mb-4 md:mb-6 opacity-0 transform translate-y-8 transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
              Transform Your Business<br />with AI Solutions
            </h1>
            
            {/* Subtitle */}
            <p className={`mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 opacity-0 transform translate-y-8 transition-all duration-1000 delay-400 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
              Strategic AI consulting and digital transformation to help your business scale and compete in the modern market.
            </p>
            
            {/* CTA Button */}
            <div className={`flex justify-center lg:justify-start opacity-0 transform translate-y-8 transition-all duration-1000 delay-600 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
              <a href="#services" className="group">
                <button className={`inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg ${isMobile ? "h-12" : "h-14"}`}
                  style={{
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #9333ea 100%)'
                  }}
                >
                  Explore Our Services
                </button>
              </a>
            </div>
          </div>

          {/* Right side - Tilted Window Project Showcase */}
          <div className={`opacity-0 transform translate-y-8 transition-all duration-1000 delay-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
            <div className="relative perspective-1000">
              {/* Main Tilted Window Display */}
              <div className="relative w-full h-80 md:h-96">
                <div 
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 ease-in-out"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'rotateY(-15deg) rotateX(5deg)',
                    clipPath: 'polygon(0 0, 85% 0, 70% 100%, 0 100%)',
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 100%)'
                  }}
                >
                  <img 
                    src={projects[currentProject].image} 
                    alt={projects[currentProject].title}
                    className="w-full h-full object-cover"
                    style={{
                      transform: 'scale(1.2) translateX(-10%)',
                      filter: 'brightness(0.9)'
                    }}
                  />
                  
                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                    <h4 className="text-white font-semibold text-xl mb-2">{projects[currentProject].title}</h4>
                    <p className="text-gray-300 text-sm">{projects[currentProject].category}</p>
                  </div>
                </div>
                
                {/* Navigation Controls */}
                <button 
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm z-20"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                
                <button 
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm z-20"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Project Thumbnails */}
              <div className="flex justify-center mt-8 space-x-3 overflow-x-auto pb-2">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => setCurrentProject(index)}
                    className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentProject 
                        ? 'ring-2 ring-purple-400 scale-110' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentProject 
                        ? 'bg-purple-400 w-6' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mouse scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className={`opacity-0 transition-all duration-1000 delay-1000 ease-out ${isVisible ? 'opacity-100' : ''}`}>
          <div className="flex flex-col items-center animate-bounce">
            <Mouse className="w-6 h-6 text-white/70 mb-2" />
            <div className="text-white/50 text-sm">Scroll down</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
