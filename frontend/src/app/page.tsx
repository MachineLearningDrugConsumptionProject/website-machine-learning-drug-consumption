import HomeHero from "./pages/home/HomeHero";
import HomeAbout from "./pages/home/HomeAbout";
import HomeDataset from "./pages/home/dataset/HomeDataset";
import HomeTeam from "./pages/home/team/HomeTeam";
import ParallaxCircleExpansion from "./components/transitions/ParallaxCircleExpansion";
import Footer from "./components/footers/Footer";
import HomeEDA from "./pages/home/HomeEDA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-dark-background">

      <HomeHero />
      <HomeAbout />
      <ParallaxCircleExpansion />
      <HomeDataset />
      <HomeTeam />

    </main>
  );
}
