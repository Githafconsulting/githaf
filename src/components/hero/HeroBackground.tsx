
import React from 'react';

const HeroBackground: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default HeroBackground;
