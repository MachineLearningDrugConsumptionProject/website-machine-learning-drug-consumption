'use client'

import { ToolTip } from "@/app/components/animations/ToolTip";
import { useInView } from "framer-motion";
import { BetweenHorizontalStart, BrainCircuit, MapPinned, Pill } from "lucide-react";
import { useRef } from "react";
import CountUp from "react-countup";



export default function HomeDatasetData() {

    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 'some', once: true })

    const data = [
        { icon: MapPinned, number: 5, text: "demographic characteristics", cols: ['Age', 'Gender', 'Education', 'Country', 'Ethnicity'] },
        { icon: BrainCircuit, number: 7, text: "psychological traits", cols: ['Nscore', 'Escore', 'Oscore', 'Ascore', 'Cscore', 'Impulsive', 'SS'] },
        { icon: Pill, number: 19, text: "substances", cols: ['Alcohol', 'Amphet', 'Amyl', 'Benzos', 'Caff', 'Cannabis', 'Choc', 'Coke', 'Crack', 'Ecstasy', 'Heroin', 'Ketamine', 'Legalh', 'LSD', 'Meth', 'Mushrooms', 'Nicotine', 'Semer', 'VSA'] },
        { icon: BetweenHorizontalStart, number: 1800, text: "data rows" }
    ];

    const formatNumberFn = (number: number) => {
        if (number >= 1000) {
            return (number / 1000).toFixed(1) + 'k+';
        }
        return number.toString();
    };

    return (
        <div ref={ref} className="flex flex-row w-full justify-center gap-x-24 relative">
            {data.map((item, index) => (
                <div key={index} className="flex flex-row gap-x-24">

                    <div className="flex flex-col items-center justify-start h-full w-min relative">
                        <div className="w-28 h-28 mb-8 group">
                            <item.icon className="w-full h-full text-light-primary  hover:scale-110 transition-all ease-out duration-300" />
                            <ToolTip data={item?.cols ?? null} className="group-hover:scale-y-100" />

                        </div>
                        <div className="text-center text-light-primary w-full min-w-36">
                            <h3 className="text-5xl font-bold">
                                <CountUp end={item.number} duration={4} formattingFn={formatNumberFn} startOnMount={isInView} />
                            </h3>
                            <h3 className="text-2xl mt-2 font-medium">{item.text}</h3>
                        </div>

                    </div>
                    {index < data.length - 1 && (
                        <div className="h-5/6 my-auto w-0.5 border border-light-accent border-opacity-20"></div>
                    )}
                </div>
            ))}
        </div>
    )
}