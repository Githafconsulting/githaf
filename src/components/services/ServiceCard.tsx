
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedCard from '../AnimatedCard';
import { serviceColors } from './services-constants';
import { ServiceItem } from './services-types';
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowRight } from 'lucide-react';

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
      className="group" 
      onClick={() => onClick(service)}
    >
      <AnimatedCard 
        className={cn(
          "h-full rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-white/10 backdrop-blur-sm relative overflow-hidden group",
          "bg-gradient-to-br from-white/5 to-white/2 hover:from-white/10 hover:to-white/5",
          service.path ? "cursor-pointer hover:scale-[1.02] hover:-translate-y-1" : ""
        )}
        intensity={isMobile ? 0 : 3}
        animate={false}
      >
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Content */}
        <div className="flex flex-col h-full relative z-10">
          {/* Icon Container */}
          <div className="mb-4 relative">
            <div className={cn(
              "p-3 rounded-xl w-fit relative overflow-hidden",
              "bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30"
            )}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all duration-300"></div>
              <div className="relative z-10">
                {service.icon}
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-purple-200 transition-colors duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm md:text-base text-slate-300 leading-relaxed flex-grow group-hover:text-slate-200 transition-colors duration-300">
            {service.description}
          </p>

          {/* CTA */}
          {service.path && (
            <div className="mt-4 flex items-center text-sm font-semibold text-purple-400 group-hover:text-purple-300 transition-all duration-300">
              <span>Explore Service</span>
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          )}

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 via-transparent to-pink-600/0 group-hover:from-purple-600/5 group-hover:to-pink-600/5 transition-all duration-500 pointer-events-none"></div>
        </div>
      </AnimatedCard>
    </div>
  );
};

export default ServiceCard;
