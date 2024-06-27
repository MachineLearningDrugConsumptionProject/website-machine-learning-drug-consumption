import Image from "next/image";
import { BackgroundBeams } from "./components/aceternity-ui/BackgroundBeams";
import HomeHero from "./pages/home/HomeHero";
import HomeAbout from "./pages/home/HomeAbout";
import HomeDataset from "./pages/home/HomeDataset";
import PageTransition from "./components/transitions/PageTransition";

export enum HomeElementEnum {
  ABOUT = 'about',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-dark-background">

      <HomeHero />
      <HomeAbout />
      <PageTransition />
      <HomeDataset />

    </main>
  );
}
