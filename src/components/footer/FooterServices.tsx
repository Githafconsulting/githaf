
import React from 'react';
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
            className="block text-gray-300 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm">{service.title}</span>
          </a>
        ))}
        <div className="text-purple-300 mt-4">
          <span className="text-sm">+{services.length - 4} more services</span>
        </div>
      </div>
    </div>
  );
};

export default FooterServices;
