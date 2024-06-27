import HomeHero from "./pages/home/HomeHero";
import HomeAbout from "./pages/home/HomeAbout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background">
      <HomeHero />
      
      <HomeAbout />

    </main>
  );
}
