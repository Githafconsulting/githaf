
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className, icon, iconPosition = 'left', ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-primary text-primary-foreground hover:brightness-110 active:brightness-90 shadow-sm",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground"
    };
    
    const sizes = {
      sm: "text-xs px-3 py-1.5 h-8",
      md: "text-sm px-4 py-2 h-10",
      lg: "text-base px-5 py-2.5 h-12"
    };

    const iconStyles = icon ? (iconPosition === 'left' ? 'mr-2' : 'ml-2') : '';
    
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {icon && iconPosition === 'left' && <span className={iconStyles}>{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className={iconStyles}>{icon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
