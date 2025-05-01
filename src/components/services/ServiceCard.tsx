
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedCard from '../AnimatedCard';
import { serviceColors } from './services-constants';
import { ServiceItem } from './services-types';
import { useIsMobile } from '@/hooks/use-mobile';

interface ServiceCardProps {
  service: ServiceItem;
  onClick: (service: ServiceItem) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const isMobile = useIsMobile();
  const serviceColor = serviceColors[service.id as keyof typeof serviceColors] || 'bg-background';
  
  return (
    <div 
      id={`service-${service.id}`}
      className="reveal" 
      onClick={() => onClick(service)}
    >
      <AnimatedCard 
        className={cn("h-full rounded-xl shadow-sm hover:shadow-md transition-shadow p-3 sm:p-4", 
          serviceColor, service.path ? "cursor-pointer hover:scale-[1.02] transition-transform" : "")}
        intensity={isMobile ? 0 : 2}
        animate={false}
      >
        <div className="flex flex-col h-full">
          <div className={cn("p-2 rounded-lg w-fit mb-3", serviceColor)}>
            {service.icon}
          </div>
          <h3 className="text-base sm:text-lg font-semibold mb-2">{service.title}</h3>
          <p className="text-sm text-muted-foreground">{service.description}</p>
          {service.path && (
            <div className="mt-3 text-sm font-medium text-primary">
              View Services →
            </div>
          )}
        </div>
      </AnimatedCard>
    </div>
  );
};

export default ServiceCard;
