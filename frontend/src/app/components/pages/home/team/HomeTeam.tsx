'use client'

import SlideUpComponent from "@/app/components/animations/SlideUpComponent";
import HomeTeamImages from "./HomeTeamImages";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function HomeTeam() {


    const scrollRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start end', 'end start']
    })

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const translateY = useTransform(smoothProgress, [0.4, 1], ['0%', '200%'])

    return (
        <section className="flex flex-col w-full min-h-screen items-center bg-dark-background relative mt-[75vh] pb-16">
            <div ref={scrollRef} className="container flex gap-x-16 ">
                <SlideUpComponent className="text-9xl w-full text-dark-background h-full relative" >
                    <motion.div className="text-end" style={{ WebkitTextStroke: '1px #CDD2B9', translateY: translateY }}>MEET THE TEAM</motion.div >
                </SlideUpComponent>
                <HomeTeamImages />
            </div>
        </section >
    )
}