
import React, { useState, useEffect } from 'react';
import BulletPoint from './BulletPoint';

interface BulletPointsSectionProps {
  isVisible: boolean;
}

const BulletPointsSection: React.FC<BulletPointsSectionProps> = ({ isVisible }) => {
  const [currentBulletIndex, setCurrentBulletIndex] = useState(0);
  const [showBullet, setShowBullet] = useState(false);

  const bulletPoints = [
    {
      content: (
        <>
          <span className="text-purple-300 font-semibold">AI adoption</span> reached <span className="text-pink-300 font-semibold">39%</span> in 2 years compared to <span className="text-purple-300 font-semibold">20%</span> internet adoption
        </>
      )
    },
    {
      content: (
        <>
          <span className="text-purple-300 font-semibold">AI is growing</span> at <span className="text-pink-300 font-semibold">1% daily compounding</span>
        </>
      )
    },
    {
      content: (
        <>
          <span className="text-purple-300 font-semibold">9 out of 10</span> early AI adopters have seen more than <span className="text-pink-500 font-bold text-xl">41% ROI</span> in their Generative AI initiatives <span className="text-gray-400">(ESG, 2025)</span>
        </>
      )
    },
    {
      content: (
        <>
          <span className="text-purple-300 font-semibold">Agentic AI</span> is enabling <span className="text-pink-300 font-semibold">full task delegation</span> and transforming business operations <span className="text-gray-400">(IBM, 2025)</span>
        </>
      )
    }
  ];

  useEffect(() => {
    if (!isVisible) return;

    const startCycle = () => {
      // Show current bullet
      setShowBullet(true);
      
      setTimeout(() => {
        // Hide current bullet
        setShowBullet(false);
        
        setTimeout(() => {
          // Move to next bullet
          setCurrentBulletIndex((prev) => (prev + 1) % bulletPoints.length);
        }, 500); // Wait for slide out animation
      }, 3000); // Show each bullet for 3 seconds
    };

    // Start the first bullet immediately
    startCycle();

    // Set up interval for cycling
    const interval = setInterval(startCycle, 3500); // Total cycle time: 3s show + 0.5s transition

    return () => clearInterval(interval);
  }, [isVisible, bulletPoints.length]);

  return (
    <div className={`max-w-5xl mx-auto mb-8 md:mb-12 transition-all duration-1000 delay-200 ${
      isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
    }`}>
      <div className="min-h-[60px] flex items-center justify-center">
        <div
          className={`transition-all duration-500 ease-in-out ${
            showBullet && isVisible
              ? 'opacity-100 transform translate-x-0' 
              : 'opacity-0 transform -translate-x-8'
          }`}
        >
          <BulletPoint>
            {bulletPoints[currentBulletIndex].content}
          </BulletPoint>
        </div>
      </div>
    </div>
  );
};

export default BulletPointsSection;
