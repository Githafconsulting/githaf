
import React from 'react';
import { Brain, Zap, Shield } from 'lucide-react';

const AIPillarsSection: React.FC = () => {
  const pillars = [
    {
      icon: Brain,
      title: 'Intelligent Automation',
      description: 'Transform your business processes with smart AI systems that learn and adapt to your unique workflows, reducing manual work by up to 80%.',
      features: [
        'Custom AI Agents',
        'Process Optimization',
        'Predictive Analytics',
        'Smart Decision Making'
      ]
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Get AI solutions deployed quickly with our proven methodologies, delivering measurable results in weeks, not months.',
      features: [
        'Fast Deployment',
        'Agile Development',
        'Quick ROI',
        'Scalable Solutions'
      ]
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability ensure your AI systems are protected and perform consistently at scale.',
      features: [
        'Data Protection',
        'Compliance Ready',
        'High Availability',
        'Continuous Monitoring'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            The 3 Pillars of AI at Githaf
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven framework for delivering successful AI transformations that drive real business value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div 
                key={index}
                className="enhanced-card p-8 transition-all duration-300 group hover:-translate-y-2 hover:bg-white/10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>
                  
                  <ul className="space-y-2 w-full">
                    {pillar.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <div className="w-2 h-2 bg-slate-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIPillarsSection;
