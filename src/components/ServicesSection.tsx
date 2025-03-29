
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  Smartphone, 
  Code, 
  CreditCard, 
  PieChart, 
  Briefcase, 
  Bot, 
  Workflow,
  Search,
  Globe,
  GraduationCap,
  ClipboardList
} from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const categoryColors = {
  'all': '#9b87f5',
  'tech': '#D7707E',
  'transformation': '#25A385',
  'ai': '#4682B4',
  'marketing': '#E86EAD',
};

const serviceColors = {
  1: 'bg-[#E5DEFF]/80', // AI Agents
  2: 'bg-[#E5DEFF]/60', // Automated Workflows
  3: 'bg-[#D3E4FD]/80', // Website Development
  4: 'bg-[#D3E4FD]/70', // Mobile App Development
  5: 'bg-[#D3E4FD]/50', // Payments & Fintech
  6: 'bg-[#F2FCE2]/70', // Facebook Marketing
  7: 'bg-[#F2FCE2]/50', // Google Marketing
  8: 'bg-[#FFDEE2]/40', // Enterprise Agility
  9: 'bg-[#FFDEE2]/30', // Programme Governance
  10: 'bg-[#FFDEE2]/20', // Training & Courses
};

const categories = [
  { id: 'all', name: 'All Services', color: 'bg-[#9b87f5]/30' },
  { id: 'ai', name: 'AI Services', color: 'bg-[#E5DEFF]/30' },
  { id: 'tech', name: 'Technology Services', color: 'bg-[#D3E4FD]/30' },
  { id: 'transformation', name: 'Transformation Services', color: 'bg-[#FDE1D3]/30' },
  { id: 'marketing', name: 'Digital Marketing', color: 'bg-[#F2FCE2]/30' },
];

// Reordered services
const services = [
  {
    id: 1,
    title: 'AI Agents',
    description: 'We Implement AI agents to automate repetitive tasks, streamline your business processes and keep your business running 247; such as chatbots, lead generation, customer service and voice AI agents, personal assistants, data analytics, social media manager and much more.',
    icon: <Bot className="w-8 h-8 text-primary" />,
    category: 'ai',
  },
  {
    id: 2,
    title: 'Automated Workflows',
    description: 'Leverage AI to automate workflows, reduce manual tasks, and improve business process efficiency, freeing up resources for growth.',
    icon: <Workflow className="w-8 h-8 text-primary" />,
    category: 'ai',
  },
  {
    id: 3,
    title: 'Website Development',
    description: 'Powered with AI - High-performance, responsive websites designed to enhance your online presence, engage customers, and drive business growth.',
    icon: <Code className="w-8 h-8 text-primary" />,
    category: 'tech',
  },
  {
    id: 4,
    title: 'Mobile App Development',
    description: 'Powered with AI - Custom mobile apps tailored to your business needs, ensuring efficiency, engagement, and seamless user experiences across platforms.',
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    category: 'tech',
  },
  {
    id: 5,
    title: 'Payments & Fintech Solutions',
    description: 'Secure, scalable payment systems and fintech solutions to streamline transactions, improve user experience, and foster financial innovation.',
    icon: <CreditCard className="w-8 h-8 text-primary" />,
    category: 'tech',
  },
  {
    id: 6,
    title: 'Facebook Marketing',
    description: 'Targeted Facebook marketing strategies to engage your audience, increase conversions, and grow your business\'s online presence.',
    icon: <Globe className="w-8 h-8 text-primary" />,
    category: 'marketing',
  },
  {
    id: 7,
    title: 'Google Marketing',
    description: 'Data-driven Google Ads strategies to reach the right audience, drive traffic, and maximize ROI for your business.',
    icon: <Search className="w-8 h-8 text-primary" />,
    category: 'marketing',
  },
  {
    id: 8,
    title: 'Enterprise Agility',
    description: 'Agile methodologies and effective program management to drive faster decision-making and business adaptation in rapidly changing environments.',
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    category: 'transformation',
  },
  {
    id: 9,
    title: 'Programme Governance & Management',
    description: 'Expert governance and management for complex programs, ensuring alignment with business objectives, risk mitigation, and successful delivery.',
    icon: <ClipboardList className="w-8 h-8 text-primary" />,
    category: 'transformation',
  },
  {
    id: 10,
    title: 'Training & Courses',
    description: 'Courses on Enterprise Agility, Programme Management and Governance, Software Engineering, Data Engineering, and Leveraging AI for Automation.',
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    category: 'transformation',
  },
];

const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const servicesGridRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const filteredServices = useMemo(() => {
    if (activeCategory === 'all') {
      return services;
    } else {
      return services.filter(service => service.category === activeCategory);
    }
  }, [activeCategory]);

  const currentCategoryColor = useMemo(() => 
    categories.find(cat => cat.id === activeCategory)?.color || 'bg-[#9b87f5]/30',
    [activeCategory]
  );

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    
    // Immediately scroll to services grid when category is changed
    if (servicesGridRef.current) {
      servicesGridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className={cn("py-4 md:py-8", currentCategoryColor)}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-4 reveal">
          <h2 className="mb-3 text-3xl md:text-4xl font-semibold">Our Services</h2>
        </div>

        <div className="flex justify-center mb-6 overflow-x-auto pb-2">
          <div className="inline-flex bg-secondary/50 p-1 rounded-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-2 py-1 md:px-3 md:py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all whitespace-nowrap
                  ${activeCategory === category.id 
                    ? 'bg-white text-foreground shadow-sm' 
                    : 'text-foreground/80 hover:text-foreground'}`}
                style={{
                  backgroundColor: activeCategory === category.id ? 'white' : 'transparent'
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div 
          ref={servicesGridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 services-grid"
        >
          {filteredServices.map((service, index) => {
            const serviceColor = serviceColors[service.id] || 'bg-background';
            
            return (
              <div 
                key={service.id} 
                id={`service-${service.id}`}
                className="reveal" 
                style={{ transitionDelay: `${index * 20}ms` }}
              >
                <AnimatedCard 
                  className={cn("h-full rounded-xl shadow-sm hover:shadow-md transition-shadow p-3 sm:p-4", 
                    serviceColor)}
                  intensity={isMobile ? 0 : 2}
                  animate={false}
                >
                  <div className="flex flex-col h-full">
                    <div className={cn("p-2 rounded-lg w-fit mb-3", serviceColor)}>
                      {service.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
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
