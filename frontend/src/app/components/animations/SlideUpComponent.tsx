'use client'

import { cn } from "@/utils/cn";
import { Variants, motion } from "framer-motion";
import { useState } from "react";

interface SlideUpComponentProps {
    children: React.ReactNode,
    className?: string,
    blockColor?: string,
    delay?: number,
}

export default function SlideUpComponent({ children, className, blockColor = 'bg-dark-background', delay = 0 }: SlideUpComponentProps) {

    const variants: Variants = {
        offscreen: {
            y: '100%'
        },
        onscreen: {
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.5,
                duration: 1,
                delay: delay,
            },
        }
    };

    const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);

    return (
        <motion.div className="relative flex h-full w-max text-end" >
            <motion.div className={cn('text-4xl text-primary',
                className
            )} variants={variants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                onAnimationComplete={() => setIsAnimationCompleted(true)}
            >
                {children}
            </motion.div>
            {
                !isAnimationCompleted &&
                <div className={`absolute ${blockColor} z-10 w-full h-full top-0 translate-y-full`}></div>
            }
        </motion.div>
    );

}
