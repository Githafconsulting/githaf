
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-[#ea33f7] text-white hover:bg-[#ea33f7]/90 shadow-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-6 text-base",
        icon: "h-10 w-10",
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
        {...props}
      >
        {icon && iconPosition === "left" && <span className="inline-flex">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className="inline-flex">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
export { buttonVariants };
