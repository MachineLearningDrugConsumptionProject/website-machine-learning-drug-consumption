'use client'

import SlideUpComponent from "@/app/components/animations/SlideUpComponent";
import { FrontendRoutesEnum } from "@/utils/routes";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";


export default function HomeModel() {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'end start']
    })
    const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 })

    const opacity = useTransform(smoothProgress, [0, 1], [1, 0])
    const scale = useTransform(smoothProgress, [0.5, 1], [1, 0.8])
    const translateY = useTransform(smoothProgress, [0, 1], [0, 700])

    return (
        <motion.div ref={ref} className="container flex w-full relative min-h-screen justify-center items-center text-dark-primary"
            style={{
                opacity: opacity,
                scale: scale,
                translateY: translateY
            }}
        >

            <div className=" flex flex-row justify-center items-centerg gap-x-24 h-full w-3/4">

                <SlideUpComponent className="text-9xl w-5/12 text-dark-background" >
                    <h3 style={{ WebkitTextStroke: '1px #CDD2B9' }}>MODEL</h3>
                </SlideUpComponent>


                <div className="flex flex-col w-7/12 gap-y-8 text-xl tracking-wider leading-relaxed">
                    <p className="indent-8">For our model, we decided to use <b className="text-dark-accent">XGB Regressor</b>. <b className="text-dark-accent">XGBoost Regressor</b> is an excellent choice for this drug consumption prediction model because of its ability to handle complex data with many features and non-linear interactions.</p>
                    <Link href={FrontendRoutesEnum.MODEL_DETAILS} >
                        <button className="relative w-fit px-6 py-2 text-xl rounded-full border border-dark-primary font-semibold backdrop-blur overflow-hidden group">
                            <span className="absolute inset-0 bg-dark-primary w-0 transition-all duration-500 origin-left group-hover:w-full"></span>
                            <span className="relative z-10 transition-all duration-500 group-hover:text-dark-background">
                                See Model Details
                            </span>

                        </button>
                    </Link>
                </div>

            </div >
        </motion.div>

    )
}