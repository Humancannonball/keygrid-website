import { SectionContainer } from "@/components/section-container";
import { AlertCircle, Sparkles } from "lucide-react";

const problems = [
  "Charging cables locked to single vehicles",
  "Inefficient station utilization",
  "Complex access management",
  "Lost productivity in fleet operations",
];

const solutions = [
  "Digital keys unlock any charging cable",
  "Transfer cables between vehicles instantly",
  "Centralized fleet charging control",
  "Real-time management dashboard",
];

export function ProblemSolutionSection() {
  return (
    <SectionContainer className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Problem Column */}
        <div className="rounded-2xl border-2 border-red-100 bg-red-50/50 p-8 md:p-10">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-100 mb-4">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Traditional Charging Challenges
            </h2>
          </div>
          <ul className="space-y-4">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 leading-relaxed">{problem}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Solution Column */}
        <div className="rounded-2xl border-2 border-green-100 bg-gradient-to-br from-green-50/50 to-blue-50/50 p-8 md:p-10">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              KeyGrid Innovation
            </h2>
          </div>
          <ul className="space-y-4">
            {solutions.map((solution, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 leading-relaxed">{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}
