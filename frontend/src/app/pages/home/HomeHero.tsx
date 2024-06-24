import { BackgroundBeams } from "@/app/components/aceternity-ui/BackgroundBeams";

export default function HomeHero() {
    
    return (<div className="flex relative min-h-screen w-full justify-center items-center">

        <BackgroundBeams />

        <h3 className="text-5xl font-medium">
            Drug Consumption Prediction
        </h3>
    </div>
    )
}