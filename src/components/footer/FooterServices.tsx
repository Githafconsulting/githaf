
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { services } from '../services/services-constants';

interface FooterServicesProps {
  scrollToSection: (sectionId: string, event: React.MouseEvent) => void;
}

const FooterServices: React.FC<FooterServicesProps> = ({ scrollToSection }) => {
  return (
    <div>
      <h4 className="text-xl font-semibold mb-6 text-white">Our Services</h4>
      <div className="space-y-3">
        {services.slice(0, 4).map((service) => (
          <a 
            key={service.id}
            href="/#services"
            onClick={(e) => scrollToSection('services', e)}
            className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
          >
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            <span className="text-sm">{service.title}</span>
          </a>
        ))}
        <div className="flex items-center gap-3 text-purple-300 mt-4">
          <span className="text-sm">+{services.length - 4} more services</span>
        </div>
      </div>
    </div>
  );
};

export default FooterServices;
