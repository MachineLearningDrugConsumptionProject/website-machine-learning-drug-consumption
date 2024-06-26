import NavbarScrollIndicator from "./NavbarScrollIndicator";

export default function Navbar() {

    return (
        <div className="flex flex-col w-full fixed z-50 items-center backdrop-blur-sm"> 

            <div className="flex w-full h-full py-8 font-medium text-primary container">
                <h3 className="text-4xl text-transparent" style={{WebkitTextStroke: '1px #CDD2B9'}}>
                    Dep
                </h3>
            </div>

            <NavbarScrollIndicator />
        </div>
    )
}