
import React, { useEffect, useState, useRef } from 'react';
import { ChartContainer } from '@/components/ui/chart';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface DonutChartProps {
  percentage: number;
  title: string;
  subtitle: string;
  source: string;
  delay?: number;
  specialText?: string;
  isVisible?: boolean;
}

const DonutChart: React.FC<DonutChartProps> = ({ 
  percentage, 
  title, 
  subtitle, 
  source, 
  delay = 0,
  specialText,
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
    <div className={`flex flex-col items-center text-center space-y-4 transition-all duration-700 ${
      isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
    }`}>
      {specialText && (
        <p className="text-gray-400 text-sm mb-1 animate-fade-in">{specialText}</p>
      )}
      
      {/* Enhanced Donut Chart */}
      <div className="relative w-36 h-36 md:w-40 md:h-40">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              startAngle={90}
              endAngle={450}
              dataKey="value"
            >
              <Cell fill="url(#purpleGradient)" />
              <Cell fill="rgba(255,255,255,0.08)" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        {/* Enhanced Percentage Text in Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-white font-bold text-3xl md:text-4xl tracking-tight">
              {animatedPercentage}%
            </span>
          </div>
        </div>
        
        {/* Enhanced SVG Gradients */}
        <svg width="0" height="0">
          <defs>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
      
      {/* Enhanced Description */}
      <div className="max-w-xs px-2">
        <p className="text-white text-sm md:text-base leading-relaxed mb-3 font-medium">{title}</p>
        {subtitle && (
          <p className="text-gray-300 text-sm leading-relaxed mb-3">{subtitle}</p>
        )}
        <p className="text-gray-400 text-xs md:text-sm font-medium border-b border-purple-400/30 inline-block pb-1">
          {source}
        </p>
      </div>
    </div>
  );
};

const AIAdoptionSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCharts, setShowCharts] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay chart animations slightly after section becomes visible
          setTimeout(() => setShowCharts(true), 300);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced Background with animated particles */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(139,92,246,0.15) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            animation: 'float 20s ease-in-out infinite'
          }}
        ></div>
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Enhanced Title with staggered animation */}
        <div className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <h2 className="mb-8 text-4xl md:text-5xl lg:text-6xl">
            AI adoption - <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Explosive Growth Ahead
            </span>
          </h2>
        </div>

        {/* Enhanced Bullet Points Section */}
        <div className={`max-w-5xl mx-auto mb-16 md:mb-20 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-start space-x-4 md:space-x-6 group">
              <span className="text-purple-400 text-2xl md:text-3xl mt-1 transition-transform duration-300 group-hover:scale-110">▶</span>
              <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
                <span className="text-purple-300 font-semibold">9 out of 10</span> early adopters have seen more than <span className="text-pink-300 font-semibold">41% ROI</span> in their Generative AI initiatives <span className="text-gray-400">(ESG, 2025)</span>
              </p>
            </div>
            <div className="flex items-start space-x-4 md:space-x-6 group">
              <span className="text-purple-400 text-2xl md:text-3xl mt-1 transition-transform duration-300 group-hover:scale-110">▶</span>
              <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
                <span className="text-purple-300 font-semibold">BCG</span> delivered <span className="text-pink-300 font-semibold">300+ AI Agents</span> to 100+ clients - Saw <span className="text-green-400 font-semibold">90% cost reduction, 75% faster execution, 40% productivity uplift</span> <span className="text-gray-400">(BCG, 2025)</span>
              </p>
            </div>
            <div className="flex items-start space-x-4 md:space-x-6 group">
              <span className="text-purple-400 text-2xl md:text-3xl mt-1 transition-transform duration-300 group-hover:scale-110">▶</span>
              <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
                <span className="text-purple-300 font-semibold">Agentic AI</span> is enabling <span className="text-pink-300 font-semibold">full task delegation</span> and transforming business operations <span className="text-gray-400">(IBM, 2025)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Central Statistic with glow effect */}
        <div className={`text-center mb-20 md:mb-24 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <p className="text-gray-400 text-lg md:text-xl mb-6 font-medium">AI is growing at <span className="text-purple-300 font-semibold">1% daily compounding</span></p>
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

        {/* Enhanced Four Animated Donut Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-7xl mx-auto">
          {chartData.map((chart, index) => (
            <div
              key={index}
              className="transform transition-all duration-700 hover:scale-105"
              style={{ 
                transitionDelay: showCharts ? `${index * 150}ms` : '0ms'
              }}
            >
              <DonutChart
                percentage={chart.percentage}
                title={chart.title}
                subtitle={chart.subtitle}
                source={chart.source}
                delay={chart.delay}
                specialText={chart.specialText}
                isVisible={showCharts}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAdoptionSection;
