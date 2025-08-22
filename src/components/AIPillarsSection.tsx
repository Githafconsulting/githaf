
import { Brain, Zap, Shield, Users } from 'lucide-react';

const AIPillarsSection: React.FC = () => {
  const pillars = [
    {
      icon: Brain,
      title: 'Digital Transformation & AI',
      description: 'Helping organisations embrace digital innovation and harness AI to create smarter, scalable, and future-proof operations.',
      bgColor: 'bg-purple-600',
      features: [
        'AI Strategy Development',
        'Digital Innovation',
        'Scalable Operations',
        'Future-proof Solutions'
      ]
    },
    {
      icon: Zap,
      title: 'Strategy & Change Management',
      description: 'Designing actionable strategies and guiding businesses through change with clarity, alignment, and measurable impact.',
      bgColor: 'bg-pink-600',
      features: [
        'Strategic Planning',
        'Change Leadership',
        'Process Alignment',
        'Impact Measurement'
      ]
    },
    {
      icon: Shield,
      title: 'Technology Implementation',
      description: 'Deploying the right tools and systems to streamline operations, boost efficiency, and drive sustainable growth.',
      bgColor: 'bg-blue-700',
      features: [
        'System Integration',
        'Efficiency Optimization',
        'Sustainable Growth',
        'Performance Monitoring'
      ]
    },
    {
      icon: Users,
      title: 'Executive Coaching & Training',
      description: 'Empowering leaders and teams with the skills, mindset, and confidence to lead transformation and deliver results.',
      bgColor: 'bg-green-700',
      features: [
        'Leadership Development',
        'Team Training',
        'Change Mindset',
        'Results Delivery'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Key Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div 
                key={index}
                className="enhanced-card p-8 transition-all duration-300 group hover:-translate-y-2 hover:bg-white/10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${pillar.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {pillar.description}
                  </p>
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
