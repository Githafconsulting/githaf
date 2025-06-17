
import React, { useEffect, useState, useRef } from 'react';
import DonutChart from './ai-adoption/DonutChart';
import BulletPointsSection from './ai-adoption/BulletPointsSection';
import CentralStatistic from './ai-adoption/CentralStatistic';
import { chartData } from './ai-adoption/chartData';

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

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced Background with dark navy/charcoal color */}
      <div className="absolute inset-0 -z-10 rounded-t-3xl">
        <div className="w-full h-full bg-gradient-to-b from-slate-900 via-gray-900 to-slate-800 rounded-t-3xl"></div>
        <div className="absolute inset-0 bg-[#1a1a2e] opacity-80 rounded-t-3xl"></div>
        <div 
          className="absolute inset-0 opacity-20 rounded-t-3xl"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(139,92,246,0.1) 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Content wrapper with rounded background layer */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-white/1 backdrop-blur-sm border border-white/5 rounded-3xl mx-4 md:mx-6"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-8 md:py-12">
          {/* Enhanced Title with gradient effect */}
          <div className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
            <h2 className="mb-8 text-4xl md:text-5xl lg:text-6xl font-sans">
              <span className="text-white">AI adoption - </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent font-bold">
                Explosive Growth Ahead
              </span>
            </h2>
          </div>

          <BulletPointsSection isVisible={isVisible} />
          <CentralStatistic isVisible={isVisible} />

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
                  bottomText={chart.bottomText}
                  isVisible={showCharts}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAdoptionSection;
