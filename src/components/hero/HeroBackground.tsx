
import React from 'react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0 -z-20">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBackground})`
          }}
        ></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
      </div>

      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(139,92,246,0.3) 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Gradient Flare */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
    </>
  );
};

export default HeroBackground;
