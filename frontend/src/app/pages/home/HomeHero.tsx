import { Highlight } from "@/app/components/aceternity-ui/HeroHightlight";
import { MemoizedStars } from "@/app/components/aceternity-ui/TextReveal";

export default function HomeHero() {

    return (
        <div className="flex flex-col relative min-h-screen w-full justify-center items-center gap-y-8 text-dark-primary">

            <MemoizedStars />

            <h3 className="text-5xl font-medium flex flex-col text-center items-center gap-y-4">

                Gain more insights with our
                <Highlight className="text-dark-background">
                    drug consumption prediction model.
                </Highlight>

            </h3>

            <button className="relative w-fit px-6 py-2 text-xl rounded-full border border-primary font-semibold backdrop-blur overflow-hidden group">
                <span className="absolute inset-0 bg-dark-primary w-0 transition-all duration-500 origin-left group-hover:w-full"></span>
                <span className="relative z-10 transition-all duration-500 group-hover:text-dark-background">
                    Try it now
                </span>
                
            </button>


        </div>
    )
}