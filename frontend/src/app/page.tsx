import Image from "next/image";
import { BackgroundBeams } from "./components/aceternity-ui/BackgroundBeams";
import HomeHero from "./pages/home/HomeHero";
import HomeAbout from "./pages/home/HomeAbout";

export enum HomeElementEnum{
  ABOUT = 'about',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background">
      <HomeHero />
      
      <HomeAbout />

    </main>
  );
}
