import { SectionContainer } from "@/components/section-container";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Stefan Kaiser",
    role: "Head of Platform Operations",
    country: "Germany",
    highlights: [
      "Former Senior Manager at thyssenkrupp (2018–2025)",
      "Led SAP/MES platforms across 7 countries",
      "50% cost reduction, +20% performance, −40% incidents",
    ],
    linkedin: "#", // Replace with actual LinkedIn
  },
  {
    name: "Žilvinas Kazlauskas",
    role: "Go-to-Market & Partnerships",
    country: "Lithuania",
    highlights: [
      "Ex-CEO, DocLogix (2023–2025)",
      "Led international GTM, M&A, enterprise SaaS growth",
      "Proven revenue turnarounds in regulated industries",
    ],
    linkedin: "#", // Replace with actual LinkedIn
  },
  {
    name: "Mark Mikula",
    role: "Security & Cloud Infrastructure",
    country: "Ukraine",
    highlights: [
      "Information Security Analyst, Nasdaq",
      "Cloud & infra expert: Kubernetes, Terraform, Azure, AWS",
      "Ex-Alter Domus, fintech-grade cloud resilience",
    ],
    linkedin: "#", // Replace with actual LinkedIn
  },
];

const advisor = {
  name: "Dr. Andreas von Eichhorn",
  role: "Board Advisor",
  company: "BMW Group R&D",
  title: "Strategy & Technology Advisor",
  country: "Germany",
};

export function TeamSection() {
  return (
    <SectionContainer className="bg-gradient-to-b from-slate-50 to-white">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Meet the Team
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Battle-tested leaders from mobility, enterprise SaaS, and fintech security
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
        {teamMembers.map((member) => (
          <Card key={member.name} className="text-center transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-8 pb-6">
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-3xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">{member.role}</p>
              <p className="text-xs text-muted-foreground mb-4">📍 {member.country}</p>

              {/* Highlights */}
              <ul className="text-left space-y-2 mb-6">
                {member.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">▪</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* LinkedIn Link */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Board Advisor */}
      <div className="max-w-2xl mx-auto">
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-6 md:p-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
              <span className="text-xl font-bold text-white">🧠</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Board Advisor</h3>
            <p className="text-lg font-semibold text-primary mb-1">{advisor.name}</p>
            <p className="text-sm text-muted-foreground mb-2">
              {advisor.company} • {advisor.title}
            </p>
            <p className="text-xs text-muted-foreground">📍 {advisor.country}</p>
          </CardContent>
        </Card>
      </div>

      {/* Team Value Prop */}
      <div className="mt-12 text-center">
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          <strong className="text-foreground">10+ years each</strong> in e-mobility, enterprise SaaS, IoT security, and cloud infrastructure. 
          From <strong className="text-foreground">thyssenkrupp</strong> to <strong className="text-foreground">Nasdaq</strong>, 
          we've built systems that scale.
        </p>
      </div>
    </SectionContainer>
  );
}
