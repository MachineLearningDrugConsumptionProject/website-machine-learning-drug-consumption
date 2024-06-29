import { cn } from "@/utils/cn";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  label?: string;
  desc?: string;
  error?: string | undefined;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, label, desc, className, error, ...props }, ref) => {
    return (
      <div
        className={`relative flex w-full flex-col max-w-96 ${error || label ? "gap-y-2" : ""}`}
      >
        <div className={`flex flex-col  ${desc ? "gap-y-1" : ""} `}>
          <div className="flex items-center gap-x-2">
            {icon}
            <p className="text-base font-medium text-dark-accent">{label}</p>
          </div>
          <p className="text-xs font-medium text-dark-primary">{desc}</p>
        </div>

        <input
          className={cn(
            `w-full rounded-lg border border-light-background-300 px-4 py-3 text-base focus:border-light-primary-100 focus:ring-light-primary-100 ${className}`,
            className,
          )}
          {...props}
          ref={ref}
        />
        {error && (
          <p className="absolute bottom-0 translate-y-full text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;