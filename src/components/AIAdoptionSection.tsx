
import React, { useEffect, useState } from 'react';
import { ChartContainer } from '@/components/ui/chart';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface DonutChartProps {
  percentage: number;
  title: string;
  subtitle: string;
  source: string;
  delay?: number;
  specialText?: string;
}

const DonutChart: React.FC<DonutChartProps> = ({ 
  percentage, 
  title, 
  subtitle, 
  source, 
  delay = 0,
  specialText 
}) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimatedPercentage(prev => {
          if (prev >= percentage) {
            clearInterval(interval);
            return percentage;
          }
          return prev + 1;
        });
      }, 20);
      
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  const data = [
    { value: animatedPercentage, name: 'filled' },
    { value: 100 - animatedPercentage, name: 'remaining' }
  ];

  return (
    <div className="flex flex-col items-center text-center space-y-4">
      {specialText && (
        <p className="text-gray-400 text-sm mb-1">{specialText}</p>
      )}
      
      {/* Donut Chart */}
      <div className="relative w-32 h-32">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={60}
              startAngle={90}
              endAngle={450}
              dataKey="value"
            >
              <Cell fill="url(#purpleGradient)" />
              <Cell fill="rgba(255,255,255,0.1)" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        {/* Percentage Text in Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-2xl">{animatedPercentage}%</span>
        </div>
        
        {/* SVG Gradients */}
        <svg width="0" height="0">
          <defs>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Description */}
      <div className="max-w-xs">
        <p className="text-white text-sm leading-relaxed mb-2">{title}</p>
        {subtitle && (
          <p className="text-white text-sm leading-relaxed mb-2">{subtitle}</p>
        )}
        <p className="text-gray-400 text-xs">{source}</p>
      </div>
    </div>
  );
};

const AIAdoptionSection: React.FC = () => {
  const chartData = [
    {
      percentage: 78,
      title: "of companies say they use AI in at least one Business function",
      subtitle: "",
      source: "McKinsey, 2025",
      delay: 200
    },
    {
      percentage: 1,
      title: "of leaders say their companies are at full AI deployment maturity",
      subtitle: "",
      source: "McKinsey, 2025",
      delay: 400,
      specialText: "however....."
    },
    {
      percentage: 92,
      title: "of companies plan to increase their AI investments over the next 3 years.",
      subtitle: "",
      source: "McKinsey, 2025",
      delay: 600
    },
    {
      percentage: 73,
      title: "of Middle East CEOs believe Generative AI will transform how value is created and delivered over the next 3 years.",
      subtitle: "",
      source: "PWC, 2025",
      delay: 800
    }
  ];

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-slate-900"></div>
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="mb-8">
            AI adoption - <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Explosive Growth Ahead</span>
          </h2>
        </div>

        {/* Bullet Points Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <span className="text-purple-400 text-xl mt-1">▶</span>
              <p className="text-white text-lg leading-relaxed">
                9 out of 10 early adopters have seen more than 41% ROI in their Generative AI initiatives (ESG, 2025)
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-purple-400 text-xl mt-1">▶</span>
              <p className="text-white text-lg leading-relaxed">
                BCG delivered 300+ AI Agents to 100+ clients - Saw 90% cost reduction, 75% faster execution, 40% productivity uplift (BCG, 2025)
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-purple-400 text-xl mt-1">▶</span>
              <p className="text-white text-lg leading-relaxed">
                Agentic AI is enabling full task delegation and transforming business operations (IBM, 2025)
              </p>
            </div>
          </div>
        </div>

        {/* Central Statistic */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg mb-4">AI is growing at 1% daily compounding</p>
          <div className="mb-4">
            <span className="text-white font-bold text-6xl md:text-8xl">$4.4 Trillion</span>
          </div>
          <p className="text-gray-300 text-xl mb-2">Long-term AI opportunity size</p>
          <p className="text-purple-400 border-b border-purple-400 inline-block">Source: McKinsey, 2025</p>
        </div>

        {/* Four Animated Donut Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {chartData.map((chart, index) => (
            <DonutChart
              key={index}
              percentage={chart.percentage}
              title={chart.title}
              subtitle={chart.subtitle}
              source={chart.source}
              delay={chart.delay}
              specialText={chart.specialText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAdoptionSection;
