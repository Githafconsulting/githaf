
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  // Size mapping
  const sizeMap = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10',
  };

  return (
    <div className={`${sizeMap[size]} ${className}`}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <circle cx="24" cy="24" r="20" fill="#ea33f7" />
        <path 
          d="M16 18L24 14L32 18L32 30L24 34L16 30L16 18Z" 
          fill="white"
          stroke="white"
          strokeWidth="1.5"
        />
        <path 
          d="M24 14V34" 
          stroke="#ea33f7" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        <path 
          d="M16 18L32 30" 
          stroke="#ea33f7" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        <path 
          d="M32 18L16 30" 
          stroke="#ea33f7" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Logo;
