import { SectionContainer } from "@/components/section-container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <SectionContainer id="contact" className="bg-gradient-to-br from-primary via-accent to-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 !text-white">
          Let's Connect
        </h2>
        <p className="text-xl md:text-2xl mb-12 !text-white">
          Ready to modernize your fleet infrastructure?
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="!bg-white !text-primary hover:!bg-white/90 text-lg px-8 py-6 h-auto group"
            asChild
          >
            <a href="mailto:contact@keygrid.cloud" className="!text-primary">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="!border-2 !border-white !text-white hover:!bg-white/10 hover:!text-white !bg-transparent text-lg px-8 py-6 h-auto shadow-none"
            asChild
          >
            <a href="https://linkedin.com/company/keygrid" target="_blank" rel="noopener noreferrer" className="!text-white">
              Connect on LinkedIn
            </a>
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-white/30">
          <p className="!text-white mb-2">
            <strong className="!text-white font-bold">Email:</strong>{" "}
            <a href="mailto:contact@keygrid.cloud" className="hover:underline !text-white">
              contact@keygrid.cloud
            </a>
          </p>
          <p className="!text-white">
            <strong className="!text-white font-bold">Support:</strong>{" "}
            <a href="mailto:support@keygrid.cloud" className="hover:underline !text-white">
              support@keygrid.cloud
            </a>
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
