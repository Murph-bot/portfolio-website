import { siteConfig } from "@/data/site";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section
      id="about"
      label="About"
      title="Crafting with intention"
      description="A brief introduction to who I am and what drives my work."
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
        <div className="space-y-6">
          {siteConfig.about.map((paragraph, index) => (
            <AnimatedReveal key={paragraph} delay={index * 0.08}>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                {paragraph}
              </p>
            </AnimatedReveal>
          ))}

          <AnimatedReveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-8 border-t border-border-subtle pt-8">
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
            </div>
          </AnimatedReveal>
        </div>

        <AnimatedReveal delay={0.15} direction="left">
          <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-2xl border border-border bg-surface-elevated lg:mx-0">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-surface" />
            <div className="flex h-full items-end p-8">
              <div>
                <p className="display-heading text-3xl text-foreground">
                  {siteConfig.name.split(" ")[0]}
                </p>
                <p className="mt-1 text-sm text-muted">{siteConfig.role}</p>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </Section>
  );
}
