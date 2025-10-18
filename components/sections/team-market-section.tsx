import { SectionContainer } from "@/components/section-container";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Stefan Kaiser",
    role: "Platform Operations",
    country: "🇩🇪",
    linkedin: "#",
  },
  {
    name: "Žilvinas Kazlauskas",
    role: "GTM & Partnerships",
    country: "🇱🇹",
    linkedin: "#",
  },
  {
    name: "Mark Mikula",
    role: "Security & Cloud",
    country: "🇺🇦",
    linkedin: "#",
  },
];

export function TeamMarketSection() {
  return (
    <SectionContainer className="bg-slate-900 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left: Team */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Battle-Tested Team
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Experienced founders from mobility, SaaS, and security sectors.
          </p>

          <div className="space-y-4 mb-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-slate-800 rounded-lg p-4 flex items-center justify-between border border-slate-700 hover:border-slate-600 transition-colors"
              >
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
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            ))}
          </div>

          {/* Advisor */}
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg p-4 border border-slate-700">
            <p className="text-sm text-slate-400 mb-1">Board Advisor</p>
            <p className="font-semibold text-white">Dr. Andreas von Eichhorn 🇩🇪</p>
            <p className="text-sm text-slate-300">BMW Group R&D • Strategy & Technology</p>
          </div>
        </div>

        {/* Right: Market */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Market Convergence
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Three hypergrowth markets converging into one category: <strong className="text-white">Access Orchestration</strong>
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🔑</span>
                <span className="text-2xl font-bold text-blue-400">€9-15B</span>
              </div>
              <h3 className="font-semibold text-white mb-1">Digital Key Software</h3>
              <p className="text-sm text-slate-400">by 2030 • 22-26% CAGR</p>
            </div>

            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">⚡</span>
                <span className="text-2xl font-bold text-green-400">€8-28B</span>
              </div>
              <h3 className="font-semibold text-white mb-1">EV Charging Software</h3>
              <p className="text-sm text-slate-400">by 2030 • 23-34% CAGR</p>
            </div>

            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🚪</span>
                <span className="text-2xl font-bold text-orange-400">~€15B</span>
              </div>
              <h3 className="font-semibold text-white mb-1">Cloud Access Control</h3>
              <p className="text-sm text-slate-400">by 2030</p>
            </div>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-800/50 rounded-lg p-3 text-center border border-slate-700">
              <div className="text-xl font-bold text-white">OCPP/OCPI</div>
              <div className="text-xs text-slate-400">Open Standards</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-3 text-center border border-slate-700">
              <div className="text-xl font-bold text-white">23+ moat</div>
              <div className="text-xs text-slate-400">Network Effects</div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
