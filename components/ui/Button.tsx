"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-gradient-to-r from-accent-blue to-accent-purple text-background hover:opacity-90 shadow-lg shadow-accent-blue/25":
              variant === "primary",
            "bg-white/10 text-foreground hover:bg-white/20": variant === "secondary",
            "border border-border text-foreground hover:border-accent-blue/50 hover:bg-accent-blue/5":
              variant === "outline",
            "text-foreground hover:bg-white/5": variant === "ghost",
            "px-3 py-1.5 text-sm": size === "sm",
            "px-5 py-2.5 text-sm": size === "md",
            "px-8 py-3.5 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
