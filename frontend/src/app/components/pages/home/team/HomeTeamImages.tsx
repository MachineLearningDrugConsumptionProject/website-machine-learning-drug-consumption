import { useInView, useScroll, useSpring, useTransform, motion } from "framer-motion";
import HomeTeamCard from "./HomeTeamCard";
import { useRef } from "react";

export default function HomeTeamImages() {
    const image = '/assets/images/team/obert.jpg'

    const cardsRef = useRef(null)
    const firstColumnRef = useRef(null)
    const secondColumnRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: cardsRef,
        offset: ['start end', 'end start']
    })

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const opacity = useTransform(smoothProgress, [0.4, 1], [1, 0.3])
    const translateYFirst = useTransform(smoothProgress, [0.45, 1], [0, -400])
    const translateYSecond = useTransform(smoothProgress, [0.45, 1], [0, 400])
    const scale = useTransform(smoothProgress, [0.4, 1], [1, 0.8])

    return (
            <motion.div ref={cardsRef} className="flex container h-full relative justify-center gap-x-12 z-20 overflow-hidden"
                style={{ scale }}>
                <motion.div
                    ref={firstColumnRef}
                    className="flex flex-col gap-y-8"
                    style={{
                        translateY: translateYFirst,
                        opacity: opacity
                    }}
                >
                    <HomeTeamCard image={image} name="Jessica Ryan" />
                    <HomeTeamCard
                        image={image}
                        name="Dave Andrew Nathaniel"
                    // className={`${isInView ? 'translate-x-0 delay-300' : '-translate-x-full'}`} 
                    />
                </motion.div>
                <motion.div
                    ref={secondColumnRef}
                    className="flex flex-col gap-y-8"
                    style={{
                        translateY: translateYSecond,
                        opacity: opacity
                    }}
                >
                    <HomeTeamCard image={'/assets/images/team/obert.jpg'} name="Anthonio Obert Lais"
                    // className={`${isInView ? 'translate-x-0 delay-300' : 'translate-x-full'}`}
                    />
                    <HomeTeamCard image={'/assets/images/team/sheryl.jpg'} name="Teresa Stefanie Sheryl" />
                </motion.div>
            </motion.div>
    )
}