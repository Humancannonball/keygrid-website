import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { TeamMarketSection } from "@/components/sections/team-market-section";

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-white">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TeamMarketSection />
      </main>

      <Footer />
    </>
  );
}
