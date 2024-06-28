import Footer from "../footers/Footer";
import Navbar from "../navigation/Navbar";

export default function Layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="flex flex-col">
            <Navbar />
            {children}
            <Footer />
        </div>
    )

}