import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroContentProps {
  isVisible: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ isVisible }) => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      {/* Trust badge */}
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 opacity-0 transform translate-y-6 transition-all duration-700 delay-100 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-sm text-slate-300 tracking-wide">Trusted by enterprises across Finance, Healthcare & Technology</span>
      </div>

      {/* Main heading */}
      <h1 className={`text-white mb-6 md:mb-8 opacity-0 transform translate-y-8 transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
        <span className="block">AI Solutions That</span>
        <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Drive Real Results
        </span>
      </h1>

      {/* Subtitle */}
      <p className={`text-slate-300 text-lg md:text-xl leading-relaxed mb-10 md:mb-12 max-w-2xl mx-auto opacity-0 transform translate-y-8 transition-all duration-1000 delay-400 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
        From strategy to deployment, we architect and implement AI systems that automate operations, unlock insights, and accelerate growth — so you can focus on what matters most.
      </p>

      {/* Dual CTA */}
      <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 lg:mb-16 opacity-0 transform translate-y-8 transition-all duration-1000 delay-600 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
        <a href="#contact" className="group">
          <button className="flex items-center gap-2 px-8 py-3.5 text-base font-semibold bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-500 hover:to-purple-400 rounded-lg transition-all duration-300 shadow-lg shadow-purple-600/25 hover:shadow-purple-500/40 hover:-translate-y-0.5">
            Get a Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </a>
        <a href="#services" className="group">
          <button className="flex items-center gap-2 px-8 py-3.5 text-base font-medium text-white border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-lg transition-all duration-300">
            <Play className="w-4 h-4" />
            Explore Our Services
          </button>
        </a>
      </div>

    </div>
  );
};

export default HeroContent;
