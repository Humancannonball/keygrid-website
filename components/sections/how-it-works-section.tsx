import { SectionContainer } from "@/components/section-container";
import { StepCard } from "@/components/step-card";
import { Smartphone, Key, Zap } from "lucide-react";

export function HowItWorksSection() {
  return (
    <SectionContainer id="how-it-works" className="bg-white">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How It Works
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get started with KeyGrid in three simple steps
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 max-w-6xl mx-auto">
        <StepCard
          number="01"
          icon={Smartphone}
          title="Connect Your Fleet"
          description="Integrate your electric vehicles and charging stations with KeyGrid's platform in minutes."
          showConnector
        />
        <StepCard
          number="02"
          icon={Key}
          title="Issue Digital Keys"
          description="Create and distribute secure digital keys to drivers, fleet managers, and authorized personnel."
          showConnector
        />
        <StepCard
          number="03"
          icon={Zap}
          title="Smart Charging"
          description="Unlock cables, transfer between vehicles, and monitor charging status in real-time from anywhere."
        />
      </div>
    </SectionContainer>
  );
}
