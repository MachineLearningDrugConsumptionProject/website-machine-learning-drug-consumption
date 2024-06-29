import HomeHero from "./components/pages/home/HomeHero";
import HomeAbout from "./components/pages/home/HomeAbout";
import HomeDataset from "./components/pages/home/dataset/HomeDataset";
import HomeTeam from "./components/pages/home/team/HomeTeam";
import ParallaxCircleExpansion from "./components/transitions/ParallaxCircleExpansion";
import HomeModel from "./components/pages/home/HomeModel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-dark-background">

      <HomeHero />
      <HomeAbout />
      <HomeModel />
      <ParallaxCircleExpansion />
      <HomeDataset />
      <HomeTeam />

    </main>
  );
}
