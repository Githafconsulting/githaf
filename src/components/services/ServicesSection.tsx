
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
    <section id="services" className="relative py-16 md:py-24 overflow-hidden">
      {/* Base background - matching the black theme with dotted pattern */}
      <div className="absolute inset-0 -z-10">
        {/* Base black background */}
        <div className="w-full h-full bg-black"></div>
        
        {/* White dotted pattern overlay with increased visibility */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.25) 1.5px, transparent 1.5px)`,
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 mb-8">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-purple-300">Our Services</span>
              </div>
              
              <h2 className="mb-6">
                What We <span className="text-purple-400">Deliver</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Transformative solutions that drive innovation and accelerate your digital evolution
              </p>
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

            {/* Call to Action */}
            <div className="text-center mt-20 reveal">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Ready to Transform Your <span className="text-purple-400">Vision?</span>
                  </h3>
                  <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                    Let's collaborate to bring your ideas to life with cutting-edge technology and strategic innovation
                  </p>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    Start Your Journey
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
