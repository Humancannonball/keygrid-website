import { SectionContainer } from "@/components/section-container";

export function MarketSection() {
  return (
    <SectionContainer className="bg-slate-900 text-white">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Market Convergence
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Three hypergrowth markets converge into one new category: <strong className="text-white">Access Orchestration</strong>
        </p>
      </div>

      {/* Three Markets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="text-center p-6 rounded-2xl bg-slate-800 border border-slate-700">
          <div className="text-4xl mb-4">🔑</div>
          <h3 className="text-xl font-bold mb-2">Digital Key Software</h3>
          <p className="text-3xl font-bold text-blue-400 mb-2">€9–15B</p>
          <p className="text-sm text-slate-400">by 2030 • 22–26% CAGR</p>
        </div>

        <div className="text-center p-6 rounded-2xl bg-slate-800 border border-slate-700">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-bold mb-2">EV Charging Software</h3>
          <p className="text-3xl font-bold text-green-400 mb-2">€8–28B</p>
          <p className="text-sm text-slate-400">by 2030 • 23–34% CAGR</p>
        </div>

        <div className="text-center p-6 rounded-2xl bg-slate-800 border border-slate-700">
          <div className="text-4xl mb-4">🚪</div>
          <h3 className="text-xl font-bold mb-2">Cloud Access Control</h3>
          <p className="text-3xl font-bold text-orange-400 mb-2">~€15B</p>
          <p className="text-sm text-slate-400">by 2030</p>
        </div>
      </div>

      {/* Convergence Point */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-900/50 via-green-900/50 to-orange-900/50 rounded-2xl p-8 md:p-12 border border-slate-600 text-center">
          <div className="text-5xl mb-4">✨</div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            A New Category is Born
          </h3>
          <p className="text-xl text-slate-200 mb-6">
            <strong className="text-white">Access Orchestration</strong> — 
            One secure key across cars, chargers, gates, and platforms
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-4 py-2 bg-slate-800 rounded-full">OCPP Standard</span>
            <span className="px-4 py-2 bg-slate-800 rounded-full">OCPI Standard</span>
            <span className="px-4 py-2 bg-slate-800 rounded-full">Universal Wallets</span>
            <span className="px-4 py-2 bg-slate-800 rounded-full">API-First</span>
          </div>
        </div>
      </div>

      {/* Why Now */}
      <div className="mt-12 text-center max-w-3xl mx-auto">
        <p className="text-lg text-slate-300">
          Closed ecosystems serve only themselves. <strong className="text-white">KeyGrid serves the entire mobility landscape.</strong>
        </p>
      </div>
    </SectionContainer>
  );
}
