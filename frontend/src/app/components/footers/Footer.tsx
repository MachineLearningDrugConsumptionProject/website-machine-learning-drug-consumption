import HovertText from "../animations/HoverText"

export default function Footer() {

    const peoples = [
        'Jessica Ryan',
        'Dave Andrew Nathaniel',
        'Anthonio Obert Lais',
        'Teresa Stefanie Sheryl'
    ]

    return (
        <div className="flex w-full h-full items-center justify-center border-opacity-30 border-t border-light-accent bg-dark-background text-dark-primary z-50">
            <div className="flex flex-col gap-y-2 py-8 justify-center items-center">
                <h3 className="text-xl font-medium">Dep</h3>
                <p className="text-sm font-light">Copyright © 2024 Dep</p>

                <div className="flex w-full mt-2">
                    {peoples.map((name, index) => (
                        <div key={index} className="flex items-center">
                            <HovertText text={name} className={`text-dark-accent font-light text-sm`} />
                            {
                                index < (peoples.length - 1)
                                &&
                                <div className="h-5/6 my-auto mx-4 border border-light-accent border-opacity-20"></div>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}