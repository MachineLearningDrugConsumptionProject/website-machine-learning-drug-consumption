import Navbar from "../navbars/Navbar";

export default function Layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div>
            <Navbar />
            {children}
        </div>
    )

}