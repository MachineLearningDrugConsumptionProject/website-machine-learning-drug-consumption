
import SlideUpTitle from "@/app/components/title/SlideUpTitle";

export default function HomeAbout() {

    return (
        <div className="container flex relative min-h-screen justify-center items-center">

            <div className="flex flex-row justify-center items-center gap-x-24 h-full w-3/4">

                <SlideUpTitle className="text-9xl w-5/12 text-background" >
                    <h3 style={{WebkitTextStroke: '1px #CDD2B9'}}>ABOUT</h3>
                </SlideUpTitle>


                <div className="flex flex-col w-7/12 gap-y-8 text-xl tracking-wider leading-relaxed">
                    <p className="indent-8">We uses an advanced method that combines psychological and demographic characteristics to predict usage trends of <b className="text-accent">19 substances. </b> 
                        It considers <b className="text-accent">psychological traits</b>, <b>demographic features</b>, and <b>individual variations</b> in drug-use habits,
                        improving accuracy and providing insights into the intricate interactions.</p>

                    <p className="indent-8"><b className="text-accent">Our goal is to</b> provide a powerful tool to understand and
                        anticipate drug consumption behaviors. By uncovering underlying patterns and trends, our AI model offers actionable insights
                        for developing targeted interventions and
                        policies aimed at <b className="text-accent">promoting healthier behaviors and reducing substance misuse.</b></p>
                </div>

            </div>

        </div>
    )
}