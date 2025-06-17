
import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface DonutChartProps {
  percentage: number;
  title: string;
  subtitle: string;
  source: string;
  delay?: number;
  bottomText?: string;
  isVisible?: boolean;
}

const DonutChart: React.FC<DonutChartProps> = ({ 
  percentage, 
  title, 
  subtitle, 
  source, 
  delay = 0,
  bottomText,
  isVisible = false
}) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setAnimatedPercentage(0);
      return;
    }

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimatedPercentage(prev => {
          if (prev >= percentage) {
            clearInterval(interval);
            return percentage;
          }
          return prev + 1;
        });
      }, 15);
      
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay, isVisible]);

  const data = [
    { value: animatedPercentage, name: 'filled' },
    { value: 100 - animatedPercentage, name: 'remaining' }
  ];

  return (
    <div className={`flex flex-col items-center text-center space-y-4 transition-all duration-700 relative ${
      isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
    }`}>
      {/* Donut Chart */}
      <div className="relative w-36 h-36 md:w-40 md:h-40">
        {/* Inner circle background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full" style={{ backgroundColor: '#9b87f5' }}></div>
        </div>
        
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={48}
              outerRadius={70}
              startAngle={90}
              endAngle={450}
              dataKey="value"
              stroke="none"
              cornerRadius={8}
            >
              <Cell fill="#ea33f7" />
              <Cell fill="transparent" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        {/* Percentage Text in Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-white font-bold text-3xl md:text-4xl tracking-tight">
              {animatedPercentage}%
            </span>
          </div>
        </div>
      </div>
      
      {/* Description */}
      <div className="max-w-xs px-2">
        <p className="text-white text-sm md:text-base leading-relaxed mb-3 font-medium">{title}</p>
        {subtitle && (
          <p className="text-gray-300 text-sm leading-relaxed mb-3">{subtitle}</p>
        )}
        <p className="text-gray-400 text-xs md:text-sm font-medium border-b border-purple-400/30 inline-block pb-1">
          {source}
        </p>
      </div>
      
      {/* Bottom text positioned in bottom right */}
      {bottomText && (
        <div className="absolute bottom-0 right-0 text-gray-400 text-xs">
          {bottomText}
        </div>
      )}
    </div>
  );
};

export default DonutChart;
