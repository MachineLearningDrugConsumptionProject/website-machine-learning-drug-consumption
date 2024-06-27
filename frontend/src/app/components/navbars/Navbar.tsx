import NavbarScrollIndicator from "./NavbarScrollIndicator";

export default function Navbar() {

    return (
        <div className="flex flex-col w-full fixed z-50 items-center backdrop-blur-sm "> 

            <div className="flex w-full h-full py-8  text-accent container font-bold">
                <h3 className="text-4xl drop-shadow text-transparent"  style={{WebkitTextStroke: '1px #F7E6C8'}}>
                    Dep
                </h3>
            </div>

            <NavbarScrollIndicator />
        </div>
    )
}