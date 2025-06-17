
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
    <section id="services" className="relative py-8 md:py-16 overflow-hidden">
      {/* Enhanced Background with Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-purple-900/20 via-slate-900/30 to-black/40"></div>
        {/* Dot Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(147,51,234,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 reveal">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 mb-6">
            <span className="px-4 py-2 text-sm font-semibold text-purple-300 bg-black/20 rounded-full">
              Our Expertise
            </span>
          </div>
          <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-slate-300 bg-clip-text text-transparent leading-tight">
            Transformative Services
          </h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Cutting-edge solutions designed to elevate your business through AI innovation and digital transformation
          </p>
        </div>

        {/* Enhanced Category Selector */}
        <div className="mb-12">
          <CategorySelector 
            activeCategory={activeCategory} 
            onCategoryChange={handleCategoryChange} 
          />
        </div>

        {/* Enhanced Services Grid Container */}
        <div ref={servicesGridRef} className="relative">
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent rounded-3xl blur-xl"></div>
          
          <div className="relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8">
            <ServiceGrid 
              services={filteredServices} 
              onServiceClick={handleServiceClick} 
            />
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 reveal">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-purple-900/30 to-slate-900/30 backdrop-blur-sm border border-purple-500/20">
            <div className="text-center sm:text-left">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                Ready to Transform Your Business?
              </h3>
              <p className="text-slate-300">
                Let's discuss how our services can drive your success
              </p>
            </div>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 whitespace-nowrap"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
