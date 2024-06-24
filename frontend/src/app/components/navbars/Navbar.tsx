import NavbarScrollIndicator from "./NavbarScrollIndicator";

export default function Navbar() {

    return (
        <div className="flex flex-col w-full fixed z-50 backdrop-blur-sm"> 

            <div className="flex w-full h-full px-20 py-8 font-medium text-primary">
                <h3 className="text-4xl">
                    Dep
                </h3>
            </div>

            <NavbarScrollIndicator />
        </div>
    )
}