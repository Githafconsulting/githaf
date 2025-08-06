
import React from 'react';
import { Handshake, FileText, Lightbulb, BarChart3, ArrowRight, Zap, Settings } from 'lucide-react';

const OurApproachSection: React.FC = () => {
  const approaches = [
    {
      id: 1,
      title: 'Align',
      icon: Handshake,
      bgColor: 'bg-purple-600',
      description: "Goal: Align on scope of engagement, AI opportunities for your organization."
    },
    {
      id: 2,
      title: 'Assess',
      icon: FileText,
      secondaryIcon: Settings,
      bgColor: 'bg-pink-600',
      description: "Goal: Understand your organization landscape: Business, Industry, State across people, processes, data, tech & pain points."
    },
    {
      id: 3,
      title: 'Recommend',
      icon: Lightbulb,
      secondaryIcon: Zap,
      bgColor: 'bg-blue-700',
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
    <section id="approach" className="py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced Background with dark navy/charcoal color - matching AI adoption section */}
      <div className="absolute inset-0 -z-10 rounded-t-3xl">
        <div className="w-full h-full bg-gradient-to-b from-slate-900 via-gray-900 to-slate-800 rounded-t-3xl"></div>
        <div className="absolute inset-0 bg-[#1a1a2e] opacity-80 rounded-t-3xl"></div>
        <div 
          className="absolute inset-0 opacity-20 rounded-t-3xl"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(139,92,246,0.1) 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Content wrapper with rounded background layer */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-white/1 backdrop-blur-sm border border-white/5 rounded-3xl mx-4 md:mx-6"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-8 md:py-12">
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
                <div key={approach.id} className="flex items-center">
                  {/* Approach Item */}
                  <div className="flex flex-col items-center text-center max-w-xs">
                    {/* Circular Icon - Made bigger */}
                    <div className={`w-32 h-32 ${approach.bgColor} rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                      <div className="relative">
                        <approach.icon size={48} className="text-white" />
                        {approach.secondaryIcon && (
                          <approach.secondaryIcon size={20} className="text-white absolute -top-1 -right-1" />
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
                      <ArrowRight size={28} className="text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden space-y-8">
              {approaches.map((approach, index) => (
                <div key={approach.id}>
                  <div className="flex items-start space-x-6">
                    {/* Circular Icon - Made bigger for mobile too */}
                    <div className={`w-24 h-24 md:w-28 md:h-28 ${approach.bgColor} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <div className="relative">
                        <approach.icon size={32} className="text-white md:hidden" />
                        <approach.icon size={36} className="text-white hidden md:block" />
                        {approach.secondaryIcon && (
                          <>
                            <approach.secondaryIcon size={14} className="text-white absolute -top-1 -right-1 md:hidden" />
                            <approach.secondaryIcon size={16} className="text-white absolute -top-1 -right-1 hidden md:block" />
                          </>
                        )}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg md:text-xl mb-3">{approach.title}</h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">{approach.description}</p>
                    </div>
                  </div>

                  {/* Arrow (except after last item) */}
                  {index < approaches.length - 1 && (
                    <div className="flex justify-center">
                      <ArrowRight size={24} className="text-gray-400 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproachSection;
