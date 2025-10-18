import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({ 
  children, 
  className,
  id 
}: SectionContainerProps) {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}
