
import React from 'react';
import { BarChart3, Globe, Zap, TrendingUp, RefreshCw, LineChart } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const services = [
  {
    id: 1,
    title: 'Digital Strategy',
    description: 'Develop comprehensive digital transformation roadmaps tailored to your business objectives and market position.',
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
  },
  {
    id: 2,
    title: 'Technology Implementation',
    description: 'Expert guidance on selecting, implementing, and optimizing the right technologies for your business needs.',
    icon: <Zap className="w-8 h-8 text-primary" />,
  },
  {
    id: 3,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights that drive decision-making and business growth.',
    icon: <LineChart className="w-8 h-8 text-primary" />,
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Create and execute data-driven marketing strategies that increase visibility and generate qualified leads.',
    icon: <Globe className="w-8 h-8 text-primary" />,
  },
  {
    id: 5,
    title: 'Business Process Optimization',
    description: 'Streamline and automate business processes to increase efficiency and reduce operational costs.',
    icon: <RefreshCw className="w-8 h-8 text-primary" />,
  },
  {
    id: 6,
    title: 'Growth Strategy',
    description: 'Identify and capitalize on opportunities for sustainable business growth in the digital landscape.',
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions to drive your digital transformation journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <AnimatedCard 
                className="h-full bg-background border rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
                intensity={5}
              >
                <div className="flex flex-col h-full">
                  <div className="p-2 rounded-lg bg-primary/10 w-fit mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground flex-grow">{service.description}</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <a 
                      href="#contact" 
                      className="text-primary font-medium inline-flex items-center hover:underline"
                    >
                      Learn more
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Import ArrowRight at the top of the file
import { ArrowRight } from 'lucide-react';

export default ServicesSection;
