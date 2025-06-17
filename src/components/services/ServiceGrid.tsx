
import React from 'react';
import ServiceCard from './ServiceCard';
import { ServiceItem } from './services-types';

interface ServiceGridProps {
  services: ServiceItem[];
  onServiceClick: (service: ServiceItem) => void;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ services, onServiceClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 auto-rows-fr">
      {services.map((service, index) => {
        // Create a dynamic layout pattern
        let gridClass = "";
        
        // First 3 services get special layouts
        if (index === 0) {
          gridClass = "lg:col-span-2 lg:row-span-2"; // Large card
        } else if (index === 1) {
          gridClass = "lg:col-span-2 lg:row-span-1"; // Wide card
        } else if (index === 2) {
          gridClass = "lg:col-span-2 lg:row-span-1"; // Wide card
        } else if (index === 3) {
          gridClass = "lg:col-span-2 lg:row-span-1"; // Wide card
        } else if (index === 4) {
          gridClass = "lg:col-span-2 lg:row-span-1"; // Wide card
        } else if (index === 5) {
          gridClass = "lg:col-span-2 lg:row-span-1"; // Wide card
        } else {
          gridClass = "lg:col-span-2 lg:row-span-1"; // Default wide card
        }

        return (
          <div
            key={service.id}
            className={`reveal ${gridClass}`}
            style={{
              animationDelay: `${index * 150}ms`
            }}
          >
            <ServiceCard 
              service={service} 
              onClick={onServiceClick}
              isLarge={index === 0}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ServiceGrid;
