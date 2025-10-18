import { SectionContainer } from "@/components/section-container";
import { StatCard } from "@/components/stat-card";

export function StatsSection() {
  return (
    <SectionContainer className="bg-gradient-to-b from-slate-50 to-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our platform delivers reliable, high-performance charging management
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <StatCard value="99.9%" label="Platform Uptime" />
        <StatCard value="<2s" label="Average Unlock Time" />
        <StatCard value="50%+" label="Utilization Increase" />
        <StatCard value="24/7" label="Support Available" />
      </div>
    </SectionContainer>
  );
}
