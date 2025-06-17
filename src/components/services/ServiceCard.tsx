
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedCard from '../AnimatedCard';
import { ServiceItem } from './services-types';
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onClick: (service: ServiceItem) => void;
  isLarge?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick, isLarge = false }) => {
  const isMobile = useIsMobile();
  
  return (
    <div 
      id={`service-${service.id}`}
      className="group h-full" 
      onClick={() => onClick(service)}
    >
      <AnimatedCard 
        className={cn(
          "h-full rounded-3xl border border-white/10 backdrop-blur-xl relative overflow-hidden transition-all duration-500",
          "bg-gradient-to-br from-white/5 to-white/2 hover:from-white/10 hover:to-white/5",
          service.path ? "cursor-pointer hover:scale-[1.02] hover:-translate-y-2" : "",
          "shadow-lg hover:shadow-2xl hover:shadow-purple-500/10",
          isLarge ? "min-h-[400px]" : "min-h-[280px] md:min-h-[320px]"
        )}
        intensity={isMobile ? 0 : 4}
        animate={!isMobile}
      >
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
        
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '1px' }}>
          <div className="w-full h-full rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-800/90"></div>
        </div>

        {/* Content Container */}
        <div className={cn(
          "relative z-10 h-full flex flex-col",
          isLarge ? "p-8 md:p-10" : "p-6 md:p-8"
        )}>
          {/* Icon Section */}
          <div className="mb-6">
            <div className="relative">
              <div className={cn(
                "rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                isLarge ? "w-20 h-20 md:w-24 md:h-24" : "w-16 h-16 md:w-20 md:h-20"
              )}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all duration-300"></div>
                <div className={cn(
                  "relative [&>svg]:text-white",
                  isLarge ? "[&>svg]:w-10 [&>svg]:h-10 md:[&>svg]:w-12 md:[&>svg]:h-12" : "[&>svg]:w-8 [&>svg]:h-8 md:[&>svg]:w-10 md:[&>svg]:h-10"
                )}>
                  {service.icon}
                </div>
              </div>
              
              {/* Floating sparkle effect */}
              <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow flex flex-col">
            <h3 className={cn(
              "font-bold mb-4 text-white group-hover:text-purple-200 transition-colors duration-300 leading-tight",
              isLarge ? "text-2xl md:text-3xl lg:text-4xl" : "text-xl md:text-2xl"
            )}>
              {service.title}
            </h3>

            <p className={cn(
              "text-slate-300 leading-relaxed flex-grow group-hover:text-slate-200 transition-colors duration-300",
              isLarge ? "text-base md:text-lg line-clamp-6" : "text-sm md:text-base line-clamp-4"
            )}>
              {service.description}
            </p>

            {/* Action Indicator */}
            {service.path && (
              <div className="mt-6 flex items-center justify-between">
                <span className={cn(
                  "font-medium text-purple-400 group-hover:text-purple-300 transition-colors duration-300",
                  isLarge ? "text-base" : "text-sm"
                )}>
                  Explore
                </span>
                <div className={cn(
                  "rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-600/30 group-hover:scale-110 transition-all duration-300",
                  isLarge ? "w-10 h-10" : "w-8 h-8"
                )}>
                  <ArrowUpRight className={cn(
                    "text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300",
                    isLarge ? "w-5 h-5" : "w-4 h-4"
                  )} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/0 via-transparent to-pink-600/0 group-hover:from-purple-600/5 group-hover:to-pink-600/5 transition-all duration-700 pointer-events-none"></div>
        
        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </AnimatedCard>
    </div>
  );
};

export default ServiceCard;
