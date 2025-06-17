
import React from 'react';
import ServiceCard from './ServiceCard';
import { ServiceItem } from './services-types';

interface ServiceGridProps {
  services: ServiceItem[];
  onServiceClick: (service: ServiceItem) => void;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ services, onServiceClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 services-grid">
      {services.map((service, index) => (
        <div
          key={service.id}
          className="reveal"
          style={{
            animationDelay: `${index * 100}ms`
          }}
        >
          <ServiceCard 
            service={service} 
            onClick={onServiceClick} 
          />
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
