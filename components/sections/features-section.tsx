import { SectionContainer } from "@/components/section-container";
import { FeatureCard } from "@/components/feature-card";
import { Key, Zap, BarChart3, Shield } from "lucide-react";

export function FeaturesSection() {
  return (
    <SectionContainer id="features" className="bg-gradient-to-b from-blue-50 via-purple-50/30 to-slate-50">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Platform Capabilities
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          How digital access orchestrator works
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <FeatureCard
          icon={Key}
          title="Smart Digital Keys"
          description="Secure digital car keys compatible with modern EV systems. Works with vehicles from leading manufacturers."
          technicalNote="NFC, Bluetooth Low Energy, Cloud-based authentication"
        />
        <FeatureCard
          icon={Zap}
          title="Unlock & Transfer Cables"
          description="Move charging cables between vehicles with a tap. Maximize station efficiency and reduce downtime."
          technicalNote="IoT-enabled smart locks, instant authorization"
        />
        <FeatureCard
          icon={BarChart3}
          title="Centralized Control"
          description="Manage your entire fleet, charging stations, and access permissions from one intuitive dashboard."
          technicalNote="Real-time monitoring, usage analytics, reporting"
        />
        <FeatureCard
          icon={Shield}
          title="Bank-Level Security"
          description="End-to-end encryption, role-based access control, and audit logs keep your fleet secure."
          technicalNote="ISO 27001 compliant, SOC 2 Type II ready"
        />
      </div>
    </SectionContainer>
  );
}
