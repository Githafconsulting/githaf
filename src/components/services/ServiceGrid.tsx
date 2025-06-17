
import React from 'react';
import ServiceCard from './ServiceCard';
import { ServiceItem } from './services-types';

interface ServiceGridProps {
  services: ServiceItem[];
  onServiceClick: (service: ServiceItem) => void;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ services, onServiceClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
      {services.map((service, index) => {
        return (
          <div
            key={service.id}
            className="reveal"
            style={{
              animationDelay: `${index * 150}ms`
            }}
          >
            <ServiceCard 
              service={service} 
              onClick={onServiceClick}
              isLarge={false}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ServiceGrid;
