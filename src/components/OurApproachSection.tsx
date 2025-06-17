
import React from 'react';
import { Handshake, FileText, Lightbulb, BarChart3, ArrowRight, Zap, Settings } from 'lucide-react';

const OurApproachSection: React.FC = () => {
  const approaches = [
    {
      id: 1,
      title: 'Align',
      icon: Handshake,
      bgColor: 'bg-purple-600',
      description: "Goal: Align on scope of engagement, AI opportunities for Aventus' Goals & Strategy, GitHat overall approach."
    },
    {
      id: 2,
      title: 'Assess',
      icon: FileText,
      secondaryIcon: Settings,
      bgColor: 'bg-pink-600',
      description: "Goal: Understand Aventus' landscape: Business, Industry, State across people, processes, data, Tech & Pain points."
    },
    {
      id: 3,
      title: 'Recommend',
      icon: Lightbulb,
      secondaryIcon: Zap,
      bgColor: 'bg-blue-600',
      description: "Goal: Identify and recommend opportunities where AI can drive measurable business outcomes"
    },
    {
      id: 4,
      title: 'Implement',
      icon: BarChart3,
      secondaryIcon: ArrowRight,
      bgColor: 'bg-green-700',
      description: "Goal: Deliver scalable, ethical and business strategy-aligned AI solutions & measure impact"
    }
  ];

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Background with white dots pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-black"></div>
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.25) 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Container with Rounded Background */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            {/* Title */}
            <div className="text-center mb-16">
              <h2 className="mb-4">
                Our <span className="text-purple-400">Approach</span>
              </h2>
            </div>

            {/* Approach Flow */}
            <div className="max-w-7xl mx-auto">
              {/* Desktop Layout */}
              <div className="hidden lg:flex items-center justify-between">
                {approaches.map((approach, index) => (
                  <React.Fragment key={approach.id}>
                    {/* Approach Item */}
                    <div className="flex flex-col items-center text-center max-w-xs">
                      {/* Circular Icon */}
                      <div className={`w-24 h-24 ${approach.bgColor} rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                        <div className="relative">
                          <approach.icon size={32} className="text-white" />
                          {approach.secondaryIcon && (
                            <approach.secondaryIcon size={16} className="text-white absolute -top-1 -right-1" />
                          )}
                        </div>
                      </div>
                      
                      {/* Label */}
                      <h3 className="text-white font-semibold text-xl mb-4">{approach.title}</h3>
                      
                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed">{approach.description}</p>
                    </div>

                    {/* Arrow (except after last item) */}
                    {index < approaches.length - 1 && (
                      <div className="flex items-center justify-center mx-4">
                        <ArrowRight size={24} className="text-gray-400" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Mobile/Tablet Layout */}
              <div className="lg:hidden space-y-8">
                {approaches.map((approach, index) => (
                  <React.Fragment key={approach.id}>
                    <div className="flex items-start space-x-4">
                      {/* Circular Icon */}
                      <div className={`w-16 h-16 ${approach.bgColor} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <div className="relative">
                          <approach.icon size={24} className="text-white" />
                          {approach.secondaryIcon && (
                            <approach.secondaryIcon size={12} className="text-white absolute -top-1 -right-1" />
                          )}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg mb-2">{approach.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{approach.description}</p>
                      </div>
                    </div>

                    {/* Arrow (except after last item) */}
                    {index < approaches.length - 1 && (
                      <div className="flex justify-center">
                        <ArrowRight size={20} className="text-gray-400 rotate-90" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproachSection;
