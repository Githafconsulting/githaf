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
import Button from './Button';

// Updated colors for categories
const categoryColors = {
  'all': 'white',
  'tech': '#D7707E',
  'transformation': '#25A385',
  'ai': '#4682B4',
  'marketing': '#E86EAD',
};

const serviceColors = {
  1: 'bg-[#D3E4FD]/80', // Mobile App Dev - Soft Blue
  2: 'bg-[#D3E4FD]/50', // Website Dev - Lighter Blue
  3: 'bg-[#D3E4FD]/70', // Payments - Medium Blue
  4: 'bg-[#FDE1D3]/70', // Business Analysis - Medium Peach
  5: 'bg-[#FDE1D3]/50', // Enterprise Agility - Lighter Peach
  6: 'bg-[#E5DEFF]/80', // AI Agents - Deeper Purple
  7: 'bg-[#E5DEFF]/60', // Automated Workflow - Medium Purple
  8: 'bg-[#F2FCE2]/70', // Facebook Marketing - Medium Green
  9: 'bg-[#F2FCE2]/50', // Google Marketing - Lighter Green
  10: 'bg-[#FDE1D3]/60', // Training - Different Peach
};

const categories = [
  { id: 'all', name: 'All Services', color: 'bg-[#F7F9FC]' }, // Light gray background like Make.com
  { id: 'ai', name: 'AI Services', color: 'bg-[#E5DEFF]/30' }, // Soft Purple
  { id: 'tech', name: 'Tech Services', color: 'bg-[#D3E4FD]/30' }, // Soft Blue
  { id: 'transformation', name: 'Transformation Services', color: 'bg-[#FDE1D3]/30' }, // Soft Peach
  { id: 'marketing', name: 'Digital Marketing', color: 'bg-[#F2FCE2]/30' }, // Soft Green
];

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

  const currentCategoryColor = categories.find(cat => cat.id === activeCategory)?.color || 'bg-[#F7F9FC]';
  const currentBorderColor = categoryColors[activeCategory as keyof typeof categoryColors] || 'white';

  return (
    <section id="services" className={cn("py-20 md:py-32", currentCategoryColor)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">Our Services</h2>
        </div>

        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-secondary/50 p-1 rounded-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap
                  ${activeCategory === category.id 
                    ? 'bg-white text-foreground shadow-sm' 
                    : 'text-foreground/80 hover:text-foreground'}`}
                style={{
                  borderColor: activeCategory === category.id ? categoryColors[category.id as keyof typeof categoryColors] : 'transparent',
                  borderWidth: activeCategory === category.id ? '2px' : '0px'
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const serviceColor = serviceColors[service.id] || 'bg-background';
            
            return (
              <div key={service.id} className="reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                <AnimatedCard 
                  className={cn("h-full rounded-xl shadow-sm hover:shadow-md transition-shadow p-6", 
                    serviceColor)}
                  intensity={5}
                  customStyle={{
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderColor: currentBorderColor
                  }}
                >
                  <div className="flex flex-col h-full">
                    <div className="p-2 rounded-lg bg-white/70 w-fit mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground flex-grow">{service.description}</p>
                    <div className="mt-4 pt-4 border-t" style={{ borderColor: currentBorderColor }}>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-primary font-medium px-0 hover:bg-transparent hover:underline"
                        icon={<ArrowRight className="w-4 h-4" />}
                        iconPosition="right"
                      >
                        Learn more
                      </Button>
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
