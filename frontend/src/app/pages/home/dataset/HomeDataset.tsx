'use client'

import SlideUpComponent from "@/app/components/animations/SlideUpComponent";
import HomeDatasetData from "./HomeDatasetData";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";
import HomeEDA from "../HomeEDA";
import { FrontendRoutesEnum } from "@/utils/routes";
import Link from "next/link";

export default function HomeDataset() {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'end start']
    })
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })
    const scale = useTransform(smoothProgress, [0, .6], [1, 0.9])
    const translateY = useTransform(smoothProgress, [0.2, .6], [0, 400])

    return (
        <motion.div ref={ref} className="flex flex-col w-full min-h-screen justify-center items-center bg-light-background rounded-2xl border-none gap-y-12 z-10"
            style={{ scale, translateY }}>
            <motion.div className="container flex flex-col justify-center items-center h-full gap-y-20">
                <SlideUpComponent blockColor="bg-light-background" className="text-5xl font-semibold text-light-accent" >
                    <h3>Our dataset consists of</h3>
                </SlideUpComponent>

                <HomeDatasetData />
            </motion.div>

            <Link href={FrontendRoutesEnum.EDA} >
                <button className="relative w-fit px-6 py-3 text-2xl rounded-full border border-dark-primary font-semibold backdrop-blur overflow-hidden group">
                    <span className="absolute inset-0 bg-light-accent w-0 transition-all duration-500 origin-left group-hover:w-full"></span>
                    <span className="relative z-10 transition-all duration-500 text-light-accent group-hover:text-dark-background">
                        Check our EDA
                    </span>
                </button>
            </Link>
        </motion.div>
    )
}