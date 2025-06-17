
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { services } from '../services/services-constants';

interface FooterServicesProps {
  scrollToSection: (sectionId: string, event: React.MouseEvent) => void;
}

const FooterServices: React.FC<FooterServicesProps> = ({ scrollToSection }) => {
  return (
    <div className="enhanced-card p-6">
      <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
      <div className="max-h-64 overflow-y-auto pr-2 custom-scrollbar">
        <ul className="space-y-2">
          {services.map((service) => (
            <li key={service.id}>
              <a 
                href="/#services"
                onClick={(e) => scrollToSection('services', e)}
                className="glass rounded-lg p-3 text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 flex items-center group text-sm"
              >
                <ArrowRight size={12} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                <span>{service.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterServices;
