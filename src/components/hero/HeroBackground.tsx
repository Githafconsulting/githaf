import React from 'react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroBackground}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay matching site branding */}
        <div className="absolute inset-0 bg-[#0f172a]/70" />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/50 via-transparent to-[#1a202c]/90" />
      </div>

      {/* Accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-cyan-600/8 rounded-full blur-[100px] -z-10" />
    </>
  );
};

export default HeroBackground;
