
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

  // Get visible cards for the stack effect
  const getVisibleProjects = () => {
    const visibleCount = isMobile ? 3 : 5;
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentProject + i) % projects.length;
      visible.push({ ...projects[index], stackIndex: i });
    }
    return visible;
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
            {/* Main heading - kept on two lines */}
            <h1 className={`mb-4 md:mb-6 opacity-0 transform translate-y-8 transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
              Transform Your Business<br />with AI Solutions
            </h1>
            
            {/* Subtitle */}
            <p className={`mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 opacity-0 transform translate-y-8 transition-all duration-1000 delay-400 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
              Strategic AI consulting and digital transformation to help your business scale and compete in the modern market.
            </p>
            
            {/* CTA Button with purple gradient */}
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

          {/* Right side - Tilted Card Carousel */}
          <div className={`opacity-0 transform translate-y-8 transition-all duration-1000 delay-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
            <div className="relative h-96 md:h-[28rem]">
              
              {/* Stack of project cards */}
              <div className="relative w-full h-full flex items-center justify-center">
                {getVisibleProjects().map((project, index) => {
                  const isActive = index === 0;
                  const zIndex = getVisibleProjects().length - index;
                  const rotation = isActive ? 0 : (index % 2 === 0 ? -5 : 5) * (index + 1);
                  const scale = 1 - (index * 0.05);
                  const translateY = index * 8;
                  const translateX = isActive ? 0 : (index % 2 === 0 ? -10 : 10) * index;
                  const opacity = index < 3 ? 1 - (index * 0.2) : 0;

                  return (
                    <div
                      key={`${project.id}-${currentProject}`}
                      className="absolute transition-all duration-700 ease-in-out"
                      style={{
                        zIndex,
                        transform: `
                          translateX(${translateX}px) 
                          translateY(${translateY}px) 
                          rotate(${rotation}deg) 
                          scale(${scale})
                        `,
                        opacity,
                      }}
                    >
                      <div className="w-72 md:w-80 h-48 md:h-56 rounded-2xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10">
                        <div className="relative w-full h-full">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Project Info Overlay - only show on active card */}
                          {isActive && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                              <h4 className="text-white font-semibold text-lg mb-1">{project.title}</h4>
                              <p className="text-gray-300 text-sm">{project.category}</p>
                            </div>
                          )}
                          
                          {/* Shine effect on active card */}
                          {isActive && (
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Controls */}
              <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                <button 
                  onClick={prevProject}
                  className="pointer-events-auto ml-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm z-50"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                
                <button 
                  onClick={nextProject}
                  className="pointer-events-auto mr-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm z-50"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Project Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
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
