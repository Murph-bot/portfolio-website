import { siteConfig } from "@/data/site";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section
      id="about"
      label="About"
      title="Business intelligence for after-sales supply chains"
      description="Pricing, ERP data and commercial reporting across a large industrial parts catalogue."
    >
      <div className="max-w-3xl space-y-6">
        {siteConfig.about.map((paragraph, index) => (
          <AnimatedReveal key={paragraph} delay={index * 0.08}>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {paragraph}
            </p>
          </AnimatedReveal>
        ))}

        <AnimatedReveal delay={0.24}>
          <div className="mt-10 flex flex-wrap gap-10 border-t border-accent/40 pt-8">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Location
              </p>
              <p className="mt-2 text-foreground">{siteConfig.location}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Email
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block text-foreground transition-colors hover:text-accent"
              >
                {siteConfig.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Focus
              </p>
              <p className="mt-2 text-foreground">
                Supply chain · Pricing · BI
              </p>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </Section>
  );
}
