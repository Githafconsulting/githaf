
import React from 'react';

interface BulletPointProps {
  children: React.ReactNode;
}

const BulletPoint: React.FC<BulletPointProps> = ({ children }) => {
  return (
    <div className="flex items-start space-x-3 md:space-x-4 group">
      <span className="text-purple-400 text-2xl md:text-3xl mt-1 transition-transform duration-300 group-hover:scale-110">▶</span>
      <p className="text-white text-lg md:text-xl leading-snug font-medium">
        {children}
      </p>
    </div>
  );
};

export default BulletPoint;
