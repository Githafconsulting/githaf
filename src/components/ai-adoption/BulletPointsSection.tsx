
import React from 'react';
import BulletPoint from './BulletPoint';

interface BulletPointsSectionProps {
  isVisible: boolean;
}

const BulletPointsSection: React.FC<BulletPointsSectionProps> = ({ isVisible }) => {
  return (
    <div className={`max-w-5xl mx-auto mb-16 md:mb-20 transition-all duration-1000 delay-200 ${
      isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
    }`}>
      <div className="space-y-6 md:space-y-8">
        <BulletPoint>
          <span className="text-purple-300 font-semibold">AI adoption</span> reached <span className="text-pink-300 font-semibold">39%</span> in 2 years compared to <span className="text-purple-300 font-semibold">20%</span> internet adoption
        </BulletPoint>
        <BulletPoint>
          <span className="text-purple-300 font-semibold">AI is growing</span> at <span className="text-pink-300 font-semibold">1% daily compounding</span>
        </BulletPoint>
        <BulletPoint>
          <span className="text-purple-300 font-semibold">9 out of 10</span> early AI adopters have seen more than <span className="text-pink-500 font-bold text-xl">41% ROI</span> in their Generative AI initiatives <span className="text-gray-400">(ESG, 2025)</span>
        </BulletPoint>
        <BulletPoint>
          <span className="text-purple-300 font-semibold">Agentic AI</span> is enabling <span className="text-pink-300 font-semibold">full task delegation</span> and transforming business operations <span className="text-gray-400">(IBM, 2025)</span>
        </BulletPoint>
      </div>
    </div>
  );
};

export default BulletPointsSection;
