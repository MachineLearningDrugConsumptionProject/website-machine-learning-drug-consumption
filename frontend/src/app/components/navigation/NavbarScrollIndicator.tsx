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
            borderRadius: '24px', 
        }}>
            <motion.div className='shadow'
                style={{
                    scaleX: scaleX,
                    height: '100%',
                    background: 'linear-gradient(90deg, #070a09, #F7E6C8)', 
                    transformOrigin: 'left center',
                    borderRadius: 'inherit' 
                }}
            />
        </div>
    );
}
