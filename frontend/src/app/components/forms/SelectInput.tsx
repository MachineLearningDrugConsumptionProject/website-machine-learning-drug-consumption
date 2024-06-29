import { cn } from "@/utils/cn";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLSelectElement> {
    icon?: React.ReactNode;
    label: string;
    desc?: string;
    options: string[];
    width?: string
    error?: string | undefined;
    className?: string;
}

const SelectInput = React.forwardRef<HTMLSelectElement, InputProps>(
    ({ icon, label, desc, options, className, error, ...props }, ref) => {
        return (
            <div
                className={`relative flex w-full flex-col justify-end min-w-80 ${error || label ? "gap-y-2" : ""}`}
            >
                <div className={`flex flex-col   ${desc ? "gap-y-1" : ""} `}>
                    <div className="flex items-center gap-x-2">
                        {icon}
                        <label className="text-base font-medium text-dark-accent" htmlFor={label}>{label}</label>
                    </div>
                    <p className="text-xs font-medium text-dark-primary break-words">{desc}</p>
                </div>

                <select name={label} id=""
                    className={cn(
                        `w-full rounded-lg border border-light-background-300 px-4 py-3 text-base focus:border-light-primary-100 focus:ring-light-primary-100 ${className}`,
                        className,
                    )}
                    {...props}
                    ref={ref}
                >
                    {options.map((item, idx) => (
                        <option value={item} key={item}>{item}</option>
                    ))}
                </select>

                {/* <input
                    

                /> */}
                {error && (
                    <p className="absolute bottom-0 translate-y-full text-sm text-light-accent-100">
                        {error}
                    </p>
                )}
            </div>
        );
    },
);

SelectInput.displayName = "SelectInput";

export default SelectInput;