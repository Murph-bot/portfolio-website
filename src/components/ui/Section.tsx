import type { ReactNode } from "react";
import { AnimatedReveal } from "./AnimatedReveal";

type SectionProps = {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  label,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="section-container">
        <AnimatedReveal className="mb-14 md:mb-16">
          <div className="accent-line mb-6" />
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {label}
          </p>
          <h2 className="display-heading text-4xl text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {description}
            </p>
          ) : null}
        </AnimatedReveal>
        {children}
      </div>
    </section>
  );
}
