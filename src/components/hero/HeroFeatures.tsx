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
    <div className={`mt-8 lg:mt-12 opacity-0 transform translate-y-8 transition-all duration-1000 delay-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div 
              key={index}
              className="enhanced-card p-4 lg:p-6 text-center hover:scale-105 transition-all duration-300 group"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-3 lg:mb-4 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center group-hover:from-slate-500 group-hover:to-slate-600 transition-all duration-300">
                <IconComponent className="w-5 h-5 lg:w-6 lg:h-6 text-foreground" />
              </div>
              <h3 className="text-foreground font-semibold text-base lg:text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm lg:text-base">
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