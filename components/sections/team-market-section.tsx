import { SectionContainer } from "@/components/section-container";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Stefan Kaiser",
    role: "Platform Operations",
    country: "🇩🇪",
    linkedin: "https://www.linkedin.com/in/kaiserstefan/",
    email: "sk@stefankaiser.net",
  },
  {
    name: "Žilvinas Kazlauskas",
    role: "GTM & Partnerships",
    country: "🇱🇹",
    linkedin: "https://www.linkedin.com/in/zilvinaskazlauskas/",
    email: "zilvinui@kazlauskui.lt",
  },
  {
    name: "Mark Mikula",
    role: "Security & Cloud",
    country: "🇺🇦",
    linkedin: "https://www.linkedin.com/in/mark2005/",
    email: "Mark20.Mikula05@gmail.com",
  },
];

export function TeamMarketSection() {
  return (
    <SectionContainer className="bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Battle-Tested Team
        </h2>
        <p className="text-lg text-slate-300 mb-8 text-center">
          Experienced founders from mobility, SaaS, and security sectors.
        </p>

        <div className="space-y-4 mb-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        {member.name} {member.country}
                      </h3>
                      <p className="text-sm text-slate-400">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 pl-16">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{member.email}</span>
                  </a>
                </div>
              </div>
            ))}
        </div>

        {/* Advisor */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg p-4 border border-slate-700 max-w-2xl mx-auto">
          <p className="text-sm text-slate-400 mb-1">Board Advisor</p>
          <p className="font-semibold text-white">Dr. Andreas von Eichhorn 🇩🇪</p>
          <p className="text-sm text-slate-300">BMW Group R&D • Strategy & Technology</p>
        </div>
      </div>
    </SectionContainer>
  );
}
