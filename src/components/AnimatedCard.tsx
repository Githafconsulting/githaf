
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  shine?: boolean;
  border?: boolean;
  animate?: boolean;
  customStyle?: React.CSSProperties;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className,
  intensity = 10,
  shine = false,
  border = false,
  animate = true,
  customStyle,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Set initial position to avoid jarring effect on hover
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!animate || !cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Scale mouse position to percentage of card size
    const x = mouseX / (rect.width / 2);
    const y = mouseY / (rect.height / 2);
    
    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const transformStyle = animate && isHovered
    ? {
        transform: `perspective(1000px) rotateY(${position.x * intensity}deg) rotateX(${-position.y * intensity}deg)`,
        transition: 'transform 0.2s ease-out',
      }
    : {
        transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
        transition: 'transform 0.5s ease-out',
      };

  const shineStyle = shine && isHovered ? {
    background: `radial-gradient(circle at ${(position.x + 1) * 50}% ${(position.y + 1) * 50}%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 60%)`,
  } : {};

  const borderStyle = border ? 'border border-white/10' : '';

  return (
    <div
      ref={cardRef}
      className={cn(
        'relative overflow-hidden rounded-xl w-full h-full',
        borderStyle,
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{...transformStyle, ...customStyle}}
    >
      {children}
      {shine && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            ...shineStyle,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}
    </div>
  );
};

export default AnimatedCard;
