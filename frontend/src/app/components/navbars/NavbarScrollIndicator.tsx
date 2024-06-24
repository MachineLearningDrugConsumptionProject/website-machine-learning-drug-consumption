'use client'

import { useScroll, useSpring, motion } from 'framer-motion';

export default function NavbarScrollIndicator() {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 500,
        damping: 90,
    });

    console.log(scrollYProgress);

    return (
        <div style={{ 
            width: '100%', 
            height: '.2rem', 
            borderRadius: '16px', 
        }}>
            <motion.div
                style={{
                    scaleX: scaleX,
                    height: '100%',
                    background: 'linear-gradient(90deg, #0f1220, #8cdad8)', 
                    transformOrigin: 'left center',
                    borderRadius: 'inherit' 
                }}
            />
        </div>
    );
}
