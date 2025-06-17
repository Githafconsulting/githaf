
import React from 'react';
import { Mouse } from 'lucide-react';

interface ScrollIndicatorProps {
  isVisible: boolean;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ isVisible }) => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div className={`opacity-0 transition-all duration-1000 delay-1000 ease-out ${isVisible ? 'opacity-100' : ''}`}>
        <div className="flex flex-col items-center animate-bounce">
          <Mouse className="w-6 h-6 text-white/70 mb-2" />
          <div className="text-white/50 text-sm">Scroll down</div>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
