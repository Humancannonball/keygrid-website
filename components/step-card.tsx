import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepCardProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  showConnector?: boolean;
}

export function StepCard({ 
  number, 
  icon: Icon, 
  title, 
  description,
  className,
  showConnector = false
}: StepCardProps) {
  return (
    <div className={cn("relative flex-1", className)}>
      <div className="text-center">
        {/* Step number */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary font-bold text-2xl mb-6">
          {number}
        </div>
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
      
      {/* Connector arrow */}
      {showConnector && (
        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-primary/50" />
        </div>
      )}
    </div>
  );
}
