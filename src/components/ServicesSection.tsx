
import React, { useState } from 'react';
import { 
  BarChart3, 
  Globe, 
  Zap, 
  TrendingUp, 
  RefreshCw, 
  LineChart, 
  Code, 
  Smartphone, 
  CreditCard, 
  Brain, 
  PieChart, 
  Briefcase, 
  Bot, 
  Workflow,
  Search,
  BadgeDollarSign,
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import { cn } from '@/lib/utils';

// Define service categories with colors
const categories = [
  { id: 'all', name: 'All Services', color: 'bg-secondary/30' },
  { id: 'tech', name: 'Tech Services', color: 'bg-[#D3E4FD]/50' }, // Soft Blue
  { id: 'transformation', name: 'Transformation Services', color: 'bg-[#FDE1D3]/50' }, // Soft Peach
  { id: 'ai', name: 'AI Services', color: 'bg-[#E5DEFF]/50' }, // Soft Purple
  { id: 'marketing', name: 'Digital Marketing', color: 'bg-[#F2FCE2]/50' }, // Soft Green
];

// Define services with categories
const services = [
  {
    id: 1,
    title: 'Mobile App Development',
    description: 'Custom mobile apps tailored to your business needs, ensuring efficiency, engagement, and seamless user experiences across platforms.',
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    category: 'tech',
  },
  {
    id: 2,
    title: 'Website Development',
    description: 'High-performance, responsive websites designed to enhance your online presence, engage customers, and drive business growth.',
    icon: <Code className="w-8 h-8 text-primary" />,
    category: 'tech',
  },
  {
    id: 3,
    title: 'Payments & Fintech Solutions',
    description: 'Secure, scalable payment systems and fintech solutions to streamline transactions, improve user experience, and foster financial innovation.',
    icon: <CreditCard className="w-8 h-8 text-primary" />,
    category: 'tech',
  },
  {
    id: 4,
    title: 'Business Analysis',
    description: 'Comprehensive business analysis to identify inefficiencies, optimize processes, and implement actionable strategies for improved performance.',
    icon: <PieChart className="w-8 h-8 text-primary" />,
    category: 'transformation',
  },
  {
    id: 5,
    title: 'Enterprise Agility',
    description: 'Agile methodologies and effective program management to drive faster decision-making and business adaptation in rapidly changing environments.',
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    category: 'transformation',
  },
  {
    id: 6,
    title: 'AI Agents',
    description: 'Implement AI agents to automate repetitive tasks, enhance customer experience, and streamline business operations for optimal performance.',
    icon: <Bot className="w-8 h-8 text-primary" />,
    category: 'ai',
  },
  {
    id: 7,
    title: 'Automated Workflow',
    description: 'Leverage AI to automate workflows, reduce manual tasks, and improve business process efficiency, freeing up resources for growth.',
    icon: <Workflow className="w-8 h-8 text-primary" />,
    category: 'ai',
  },
  {
    id: 8,
    title: 'Facebook Marketing',
    description: 'Targeted Facebook marketing strategies to engage your audience, increase conversions, and grow your business\'s online presence.',
    icon: <Globe className="w-8 h-8 text-primary" />,
    category: 'marketing',
  },
  {
    id: 9,
    title: 'Google Marketing',
    description: 'Data-driven Google Ads strategies to reach the right audience, drive traffic, and maximize ROI for your business.',
    icon: <Search className="w-8 h-8 text-primary" />,
    category: 'marketing',
  },
  {
    id: 10,
    title: 'Training & Courses',
    description: 'Courses on transformation, enterprise agility, software engineering, and data engineering to equip your team with the latest skills.',
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    category: 'transformation',
  },
];

const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  // Find the current category color
  const currentCategoryColor = categories.find(cat => cat.id === activeCategory)?.color || 'bg-secondary/30';

  return (
    <section id="services" className={cn("py-20 md:py-32", currentCategoryColor)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions to drive your digital transformation journey
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all 
                ${activeCategory === category.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-foreground hover:bg-primary/10'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            // Get the category color
            const categoryColor = categories.find(cat => cat.id === service.category)?.color || 'bg-background';
            
            return (
              <div key={service.id} className="reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                <AnimatedCard 
                  className={cn("h-full border rounded-xl shadow-sm hover:shadow-md transition-shadow p-6", 
                    activeCategory === 'all' ? categoryColor : 'bg-background')}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
