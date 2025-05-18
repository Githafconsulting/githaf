
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '', showText = true }) => {
  // Size mapping
  const sizeMap = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10',
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${sizeMap[size]}`}>
        <img 
          src="/lovable-uploads/00193268-045d-4cdc-9111-0a727978cd49.png" 
          alt="Githaf Consulting Logo" 
          className="h-full w-full object-contain"
        />
      </div>
      {showText && (
        <span style={{ color: '#ea33f7' }} className="font-bold text-3xl">
          Githaf Consulting
        </span>
      )}
    </div>
  );
};

export default Logo;
