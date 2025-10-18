import { SectionContainer } from "@/components/section-container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Zap, Car, MapPin } from "lucide-react";

const useCases = [
  {
    icon: Building2,
    title: "Corporate Fleets",
    description: "Manage company EV fleets with centralized charging control and employee access management.",
    partners: ["Enterprise customers"],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Zap,
    title: "Charging Station Operators",
    description: "Increase revenue by enabling cable sharing and reducing station idle time.",
    partners: ["Ignitis", "CPO Networks"],
    color: "from-green-500 to-green-600",
  },
  {
    icon: Car,
    title: "Car Sharing Services",
    description: "Provide seamless charging access to rotating vehicle users without physical key exchanges.",
    partners: ["CityBee", "SPARK"],
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: MapPin,
    title: "Booking Platforms",
    description: "Enable keyless access for rental vehicles and charging infrastructure through unified digital keys.",
    partners: ["Booking.com", "Travel platforms"],
    color: "from-purple-500 to-purple-600",
  },
];

export function UseCasesSection() {
  return (
    <SectionContainer className="bg-white">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Partner Ecosystem
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Connecting mobility providers, charging networks, and booking platforms through one secure access layer
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {useCases.map((useCase) => {
          const Icon = useCase.icon;
          return (
            <Card key={useCase.title} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">
                  {useCase.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {useCase.partners.map((partner) => (
                    <span
                      key={partner}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Value Proposition */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-10 border border-blue-100">
          <h3 className="text-2xl font-bold mb-4">
            Open Standards. Zero Lock-In.
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Built on OCPP and OCPI standards, KeyGrid enables interoperability across the entire mobility ecosystem.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-bold text-primary text-2xl mb-1">1%</div>
              <div className="text-muted-foreground">Lifetime cost vs custom integrations</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-bold text-secondary text-2xl mb-1">€0.03-0.20</div>
              <div className="text-muted-foreground">Per transaction pricing</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-bold text-accent text-2xl mb-1">23+</div>
              <div className="text-muted-foreground">Customers for defensible moat</div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
