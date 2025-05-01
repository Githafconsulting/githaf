
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

  const currentCategoryColor = useMemo(() => 
    categories.find(cat => cat.id === activeCategory)?.color || 'bg-[#9b87f5]/30',
    [activeCategory]
  );

  const handleCategoryChange = (categoryId: ServiceCategory) => {
    setActiveCategory(categoryId);
    
    // Immediately scroll to services grid when category is changed
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
    <section id="services" className={cn("py-4 md:py-8", currentCategoryColor)}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-4 reveal">
          <h2 className="mb-3 text-3xl md:text-4xl font-semibold">Our Services</h2>
        </div>

        <CategorySelector 
          activeCategory={activeCategory} 
          onCategoryChange={handleCategoryChange} 
        />

        <div ref={servicesGridRef}>
          <ServiceGrid 
            services={filteredServices} 
            onServiceClick={handleServiceClick} 
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
