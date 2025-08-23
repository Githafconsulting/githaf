import { Brain, Zap, Shield, Users } from 'lucide-react';
const AIPillarsSection: React.FC = () => {
  const pillars = [{
    icon: Brain,
    title: 'Digital Transformation & AI',
    description: 'Helping organisations embrace digital innovation and harness AI to create smarter, scalable, and future-proof operations.',
    bgColor: 'bg-blue-600',
    features: ['AI Strategy Development', 'Digital Innovation', 'Scalable Operations', 'Future-proof Solutions']
  }, {
    icon: Zap,
    title: 'Strategy & Change Management',
    description: 'Designing actionable strategies and guiding businesses through change with clarity, alignment, and measurable impact.',
    bgColor: 'bg-purple-600',
    features: ['Strategic Planning', 'Change Leadership', 'Process Alignment', 'Impact Measurement']
  }, {
    icon: Shield,
    title: 'Technology Implementation',
    description: 'Deploying the right tools and systems to streamline operations, boost efficiency, and drive sustainable growth.',
    bgColor: 'bg-orange-600',
    features: ['System Integration', 'Efficiency Optimization', 'Sustainable Growth', 'Performance Monitoring']
  }, {
    icon: Users,
    title: 'Coaching and Training',
    description: 'Empowering leaders and teams with the skills, mindset, and confidence to lead transformation and deliver results.',
    bgColor: 'bg-green-700',
    features: ['Leadership Development', 'Team Training', 'Change Mindset', 'Results Delivery']
  }];
  return <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
          const IconComponent = pillar.icon;
          return <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:border-gray-700">
                <div className="flex flex-col h-full">
                  <div className={`w-16 h-16 ${pillar.bgColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-8">
                    {pillar.description}
                  </p>

                  <div className="mt-auto">
                    
                    
                    <div className="space-y-4">
                      {pillar.features.map((feature, featureIndex) => {})}
                    </div>
                  </div>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default AIPillarsSection;