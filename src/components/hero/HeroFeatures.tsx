import React from 'react';
import { TrendingUp, Zap, Sparkles } from 'lucide-react';

interface HeroFeaturesProps {
  isVisible: boolean;
}

const HeroFeatures: React.FC<HeroFeaturesProps> = ({ isVisible }) => {
  const features = [
    {
      icon: TrendingUp,
      title: "Global Reach",
      description: "Solutions deployed worldwide"
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Quick deployment and results"
    },
    {
      icon: Sparkles,
      title: "AI-Powered",
      description: "Advanced AI technology"
    }
  ];

  return (
    <div className={`opacity-0 transform translate-y-8 transition-all duration-1000 delay-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 lg:p-6 text-center hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 group"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center group-hover:from-blue-400/30 group-hover:to-purple-500/30 transition-all duration-300 border border-white/10">
                <IconComponent className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <h3 className="text-white font-semibold text-base lg:text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-300 text-sm lg:text-base">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroFeatures;