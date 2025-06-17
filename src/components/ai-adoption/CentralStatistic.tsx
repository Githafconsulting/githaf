
import React from 'react';

interface CentralStatisticProps {
  isVisible: boolean;
}

const CentralStatistic: React.FC<CentralStatisticProps> = ({ isVisible }) => {
  return (
    <div className={`text-center mb-20 md:mb-24 transition-all duration-1000 delay-400 ${
      isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
    }`}>
      <p className="text-gray-400 text-lg md:text-xl mb-6 font-medium">
        AI is growing at <span className="text-purple-300 font-semibold">1% daily compounding</span>
      </p>
      <div className="mb-6 relative">
        <span className="text-white font-bold text-6xl md:text-8xl lg:text-9xl tracking-tight relative inline-block">
          $4.4 Trillion
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-purple-400/20 blur-3xl -z-10"></div>
        </span>
      </div>
      <p className="text-gray-300 text-xl md:text-2xl mb-4 font-medium">Long-term AI opportunity size</p>
      <div className="inline-block">
        <p className="text-purple-400 border-b-2 border-purple-400 pb-1 font-semibold tracking-wide">
          Source: McKinsey, 2025
        </p>
      </div>
    </div>
  );
};

export default CentralStatistic;
