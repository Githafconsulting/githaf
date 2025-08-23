
import { Brain, Zap, Shield, Users } from 'lucide-react';

const AIPillarsSection: React.FC = () => {
  const pillars = [
    {
      icon: Brain,
      title: 'Intelligent Automation',
      description: 'Streamline operations with AI-powered workflows that adapt and learn',
      bgColor: 'bg-blue-600',
      examples: [
        {
          title: 'Invoice Processing',
          description: 'Automatically extract, validate, and process invoices with 99% accuracy'
        },
        {
          title: 'Document Classification',
          description: 'Intelligently categorize and route documents based on content and context'
        },
        {
          title: 'Quality Control Systems',
          description: 'Real-time defect detection and quality assurance in manufacturing'
        }
      ]
    },
    {
      icon: Users,
      title: 'Agentic AI',
      description: 'Autonomous AI agents that take actions and make decisions independently',
      bgColor: 'bg-purple-600',
      examples: [
        {
          title: 'Customer Service Agents',
          description: 'Handle complex inquiries, escalate when needed, and learn from interactions'
        },
        {
          title: 'Sales Qualification Bots',
          description: 'Engage prospects, qualify leads, and schedule meetings autonomously'
        },
        {
          title: 'IT Support Agents',
          description: 'Diagnose issues, execute fixes, and manage system maintenance tasks'
        }
      ]
    },
    {
      icon: Zap,
      title: 'Generative AI',
      description: 'Create original content, designs, and solutions tailored to your needs',
      bgColor: 'bg-orange-600',
      examples: [
        {
          title: 'Content Creation',
          description: 'Generate marketing copy, blogs, and social media content at scale'
        },
        {
          title: 'Code Generation',
          description: 'Automatically write, test, and optimize code for faster development'
        },
        {
          title: 'Design Automation',
          description: 'Create custom graphics, layouts, and visual assets on demand'
        }
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:border-gray-700"
              >
                <div className="flex flex-col">
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
                    <div className="text-yellow-400 font-bold text-sm mb-6 tracking-wider">
                      REAL-WORLD EXAMPLES
                    </div>
                    
                    <div className="space-y-4">
                      {pillar.examples.map((example, exampleIndex) => (
                        <div 
                          key={exampleIndex}
                          className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                            <div>
                              <h4 className="text-white font-semibold mb-2">
                                {example.title}
                              </h4>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                {example.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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
