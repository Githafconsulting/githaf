
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
      {/* Background Design */}
      <div className="absolute inset-0 -z-10">
        {/* Primary gradient background */}
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-800"></div>
        
        {/* Geometric pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(147,51,234,0.1) 25%, transparent 25%), 
              linear-gradient(-45deg, rgba(147,51,234,0.1) 25%, transparent 25%), 
              linear-gradient(45deg, transparent 75%, rgba(147,51,234,0.1) 75%), 
              linear-gradient(-45deg, transparent 75%, rgba(147,51,234,0.1) 75%)
            `,
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px'
          }}
        ></div>
        
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/15 to-purple-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 mb-8">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-purple-300">Our Services</span>
          </div>
          
          <h2 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent leading-tight">
              What We
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Deliver
            </span>
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
            <div className="relative bg-gradient-to-r from-purple-900/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Vision?
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
    </section>
  );
};

export default ServicesSection;
