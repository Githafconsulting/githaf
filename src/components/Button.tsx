
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden",
  {
    variants: {
      variant: {
        primary: "text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1",
        secondary: "glass text-white hover:bg-white/10 border border-white/10",
        outline: "border-2 border-slate-400 bg-transparent text-slate-300 hover:bg-slate-700 hover:text-white",
        ghost: "text-white hover:bg-white/5 rounded-lg",
        link: "underline-offset-4 hover:underline text-slate-300 font-medium",
      },
      size: {
        default: "h-12 py-3 px-6",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-8 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, icon, iconPosition = "left", children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        style={variant === "primary" ? { 
          background: 'linear-gradient(135deg, #9b87f5 0%, #8b5cf6 100%)'
        } : undefined}
        {...props}
      >
        {icon && iconPosition === "left" && <span className="inline-flex">{icon}</span>}
        <span className="relative z-10">{children}</span>
        {icon && iconPosition === "right" && <span className="inline-flex">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
export { buttonVariants };
