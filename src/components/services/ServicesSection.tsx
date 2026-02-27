
import React, { useState, useMemo, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { categories, services } from './services-constants';
import { ServiceCategory, ServiceItem } from './services-types';
import CategorySelector from './CategorySelector';
import ServiceGrid from './ServiceGrid';

const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const servicesGridRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const filteredServices = useMemo(() => {
    if (activeCategory === 'all') {
      return services;
    } else {
      return services.filter(service => service.category === activeCategory);
    }
  }, [activeCategory]);

  const handleCategoryChange = (categoryId: ServiceCategory) => {
    setActiveCategory(categoryId);
    
    if (servicesGridRef.current) {
      servicesGridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleServiceClick = (service: ServiceItem) => {
    if (service.path) {
      navigate(service.path);
    }
  };

  return (
    <section id="what-we-deliver" className="relative py-16 md:py-24 overflow-hidden">
      {/* Enhanced Background with dark navy/charcoal color - matching AI adoption section */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-b from-slate-900 via-gray-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[#1a1a2e] opacity-80"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(139,92,246,0.1) 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Container with Rounded Background */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Section Background with rounded corners */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto mb-16 reveal">
              <h2 className="mb-6">
                What We <span className="text-purple-400">Deliver</span>
              </h2>
            </div>

            {/* Category Selector */}
            <div className="mb-16">
              <CategorySelector 
                activeCategory={activeCategory} 
                onCategoryChange={handleCategoryChange} 
              />
            </div>

            {/* Services Grid */}
            <div ref={servicesGridRef} className="relative">
              <ServiceGrid 
                services={filteredServices} 
                onServiceClick={handleServiceClick} 
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
