
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { services } from '../services/services-constants';

interface FooterServicesProps {
  scrollToSection: (sectionId: string, event: React.MouseEvent) => void;
}

const FooterServices: React.FC<FooterServicesProps> = ({ scrollToSection }) => {
  return (
    <div className="text-center lg:text-left">
      <h4 className="text-xl font-semibold mb-6 text-white">Our Services</h4>
      <div className="flex flex-wrap justify-center lg:justify-start gap-3">
        {services.slice(0, 6).map((service) => (
          <a 
            key={service.id}
            href="/#services"
            onClick={(e) => scrollToSection('services', e)}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 border border-white/10 group text-sm"
          >
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
            <span>{service.title}</span>
          </a>
        ))}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-3 py-2 text-purple-300 border border-purple-400/30 text-sm">
          <span>+{services.length - 6} more</span>
        </div>
      </div>
    </div>
  );
};

export default FooterServices;
