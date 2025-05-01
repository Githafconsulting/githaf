
import React from 'react';
import ServiceCard from './ServiceCard';
import { ServiceItem } from './services-types';

interface ServiceGridProps {
  services: ServiceItem[];
  onServiceClick: (service: ServiceItem) => void;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ services, onServiceClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 services-grid">
      {services.map((service, index) => (
        <ServiceCard 
          key={service.id} 
          service={service} 
          onClick={onServiceClick} 
        />
      ))}
    </div>
  );
};

export default ServiceGrid;
