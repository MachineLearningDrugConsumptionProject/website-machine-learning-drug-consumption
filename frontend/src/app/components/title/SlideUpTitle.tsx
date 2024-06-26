'use client'

import useOnReveal from "@/hooks/useOnReveal"
import { cn } from "@/utils/cn"

interface SlideUpTitleProps {
    children: React.ReactNode,
    className?: string,
}


export default function SlideUpTitle({ children, className }: SlideUpTitleProps) {

    const { ref, isVisible } = useOnReveal()

    console.log(isVisible);
    

    return (
        <div ref={ref} className="relative flex h-full w-max text-end">
            <div className={cn('text-4xl text-primary translate-y-full transition-all duration-1000',
                {
                    'translate-y-0 translate-x-0 opacity-100': isVisible,
                },
                className
            )}>
                {children}
            </div>
            <div className="absolute bg-background z-10 w-full h-full top-0  translate-y-full"></div>
        </div>
    )

}