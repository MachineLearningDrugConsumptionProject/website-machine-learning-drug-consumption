import SlideUpTitle from "@/app/components/title/SlideUpTitle";
import { BetweenHorizontalStart, BrainCircuit, MapPinned, Pill } from "lucide-react";

export default function HomeDataset() {

    const data = [
        { icon: MapPinned, number: "5", text: "demographic characteristics" },
        { icon: BrainCircuit, number: "7", text: "psychological traits" },
        { icon: Pill, number: "19", text: "substances" },
        { icon: BetweenHorizontalStart, number: "1.8k+", text: "data rows" }
    ];

    return (
        <div className="flex w-full min-h-screen justify-center items-center bg-dark-primary text-dark-background">
            <div className="container flex flex-col justify-center items-center h-full gap-y-16">
                <SlideUpTitle blockColor="bg-primary" className="text-5xl font-semibold text-dark-background" >
                    <h3>Our dataset consists of</h3>
                </SlideUpTitle>

                <div className="flex flex-row w-full justify-center gap-x-24 relative">
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-row gap-x-24">

                            <div className="flex flex-col items-center justify-start h-full w-min relative">
                                <div className="w-24 h-24 mb-6">
                                    <item.icon className="w-full h-full" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-4xl font-bold">{item.number}</h3>
                                    <h3 className="text-xl mt-2">{item.text}</h3>
                                </div>

                            </div>
                            {index < data.length - 1 && (
                                <div className="h-5/6 my-auto border border-background border-opacity-30"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}