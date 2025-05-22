
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { services } from '../services/services-constants';

interface FooterServicesProps {
  scrollToSection: (sectionId: string, event: React.MouseEvent) => void;
}

const FooterServices: React.FC<FooterServicesProps> = ({ scrollToSection }) => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
      <ul className="space-y-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
        {services.map((service) => (
          <li key={service.id}>
            <a 
              href="/#services"
              onClick={(e) => scrollToSection('services', e)}
              className="text-white/70 hover:text-white transition-colors flex items-center"
            >
              <ArrowRight size={14} className="mr-2" />
              {service.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterServices;
