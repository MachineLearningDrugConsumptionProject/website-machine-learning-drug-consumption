import { SlideDownToolTip } from "@/app/components/animations/SlideDownToolTip";
import SlideUpComponent from "@/app/components/animations/SlideUpComponent";
import { BetweenHorizontalStart, BrainCircuit, MapPinned, Pill } from "lucide-react";

export default function HomeDataset() {

    const data = [
        { icon: MapPinned, number: "5", text: "demographic characteristics", cols: ['Age', 'Gender', 'Education', 'Country', 'Ethnicity'] },
        { icon: BrainCircuit, number: "7", text: "psychological traits", cols: ['Nscore', 'Escore', 'Oscore', 'Ascore', 'Cscore', 'Impulsive', 'SS'] },
        { icon: Pill, number: "19", text: "substances", cols: ['Alcohol', 'Amphet', 'Amyl', 'Benzos', 'Caff', 'Cannabis', 'Choc', 'Coke', 'Crack', 'Ecstasy', 'Heroin', 'Ketamine', 'Legalh', 'LSD', 'Meth', 'Mushrooms', 'Nicotine', 'Semer', 'VSA'] },
        { icon: BetweenHorizontalStart, number: "1.8k+", text: "data rows" }
    ];

    const demographicCols = [
        'Age', 'Gender', 'Education', 'Country', 'Ethnicity'
    ]

    return (
        <div className="flex w-full min-h-screen justify-center items-center bg-light-background ">
            <div className="container flex flex-col justify-center items-center h-full gap-y-20">
                <SlideUpComponent blockColor="bg-light-background" className="text-6xl font-semibold text-light-accent" >
                    <h3>Our dataset consists of</h3>
                </SlideUpComponent>

                <div className="flex flex-row w-full justify-center gap-x-24 relative">
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-row gap-x-24">

                            <div className="flex flex-col items-center justify-start h-full w-min relative">
                                <div className="w-28 h-28 mb-8 group">
                                    <item.icon className="w-full h-full text-light-primary  hover:scale-110 transition-all ease-out duration-300" />
                                    <SlideDownToolTip data={item?.cols ?? null} className="group-hover:scale-y-100"/>

                                </div>
                                <div className="text-center text-light-primary">
                                    <h3 className="text-5xl font-bold text-shadow-custom">{item.number}</h3>
                                    <h3 className="text-xl mt-4 font-medium">{item.text}</h3>
                                </div>

                            </div>
                            {index < data.length - 1 && (
                                <div className="h-5/6 my-auto w-0.5 border border-light-accent border-opacity-20"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}