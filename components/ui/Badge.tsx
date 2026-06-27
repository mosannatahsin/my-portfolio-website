import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        {
          "bg-accent-blue/10 text-accent-blue border border-accent-blue/20": variant === "default",
          "bg-status-success/10 text-status-success border border-status-success/20": variant === "success",
          "bg-status-warning/10 text-status-warning border border-status-warning/20": variant === "warning",
          "bg-status-error/10 text-status-error border border-status-error/20": variant === "error",
          "bg-status-info/10 text-status-info border border-status-info/20": variant === "info",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
