import Image from "next/image";
import { BackgroundBeams } from "./components/aceternity-ui/BackgroundBeams";
import HomeHero from "./pages/home/HomeHero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background">
      <HomeHero />
      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>

    </main>
  );
}
