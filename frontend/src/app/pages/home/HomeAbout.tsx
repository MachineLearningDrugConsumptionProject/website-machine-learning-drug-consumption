'use client'

import SlideUpComponent from "@/app/components/animations/SlideUpComponent";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";


export default function HomeAbout() {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'end start']
    })

    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
    const scale = useTransform(scrollYProgress, [0.2, 0.6], [1, 0.8])
    const translateY = useTransform(scrollYProgress, [0, 1], [0, 700])

    return (
        <motion.div ref={ref} className="container flex w-full relative min-h-screen justify-center items-center text-dark-primary"
            style={{
                opacity: opacity,
                scale: scale,
                translateY: translateY
            }}
        >

            <div className=" flex flex-row justify-center items-center gap-x-24 h-full w-3/4">

                <SlideUpComponent className="text-9xl w-5/12 text-dark-background" >
                    <h3 style={{ WebkitTextStroke: '1px #CDD2B9' }}>ABOUT</h3>
                </SlideUpComponent>


                <div className="flex flex-col w-7/12 gap-y-8 text-xl tracking-wider leading-relaxed">
                    <p className="indent-8">We uses an advanced method that combines psychological and demographic characteristics to predict usage trends of <b className="text-dark-accent">19 substances. </b>
                        It considers <b className="text-dark-accent">psychological traits</b>, <b className="text-dark-accent">demographic features</b>, and <b>individual variations</b> in drug-use habits,
                        improving accuracy and providing insights into the intricate interactions.</p>

                    <p className="indent-8"><b className="text-dark-accent">Our goal is to</b> provide a powerful tool to understand and
                        anticipate drug consumption behaviors. By uncovering underlying patterns and trends, our AI model offers actionable insights
                        for developing targeted interventions and
                        policies aimed at <b className="text-dark-accent">promoting healthier behaviors and reducing substance misuse.</b></p>
                </div>

            </div >
        </motion.div>

    )
}