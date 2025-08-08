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
    <div className={`mt-12 opacity-0 transform translate-y-8 transition-all duration-1000 delay-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div 
              key={index}
              className="bg-card/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-card/20 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
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