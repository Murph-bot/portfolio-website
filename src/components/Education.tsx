import { certifications, education } from "@/data/education";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Section } from "@/components/ui/Section";

export function Education() {
  return (
    <Section
      id="education"
      label="Education & Certifications"
      title="Continuous learning"
      description="Academic foundations and certifications that shape my analytical toolkit."
    >
      <div className="space-y-10">
        <div>
          <AnimatedReveal>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Education
            </h3>
          </AnimatedReveal>
          {education.map((item) => (
            <AnimatedReveal key={item.degree} delay={0.06}>
              <div className="rounded-2xl border border-border-subtle bg-surface p-6 transition-colors hover:bg-surface-elevated md:p-8">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-border px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-accent">
                    {item.status}
                  </span>
                </div>
                <h4 className="display-heading text-xl text-foreground md:text-2xl">
                  {item.degree}
                </h4>
                <p className="mt-1 text-sm text-muted">{item.institution}</p>
                {item.note ? (
                  <p className="mt-3 text-sm text-muted-foreground">{item.note}</p>
                ) : null}
              </div>
            </AnimatedReveal>
          ))}
        </div>

        <div>
          <AnimatedReveal>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Certifications
            </h3>
          </AnimatedReveal>
          <div className="divide-y divide-border-subtle rounded-2xl border border-border-subtle bg-surface">
            {certifications.map((cert, index) => (
              <AnimatedReveal key={cert.title} delay={index * 0.06}>
                <div className="flex flex-col gap-2 p-6 transition-colors hover:bg-surface-elevated md:flex-row md:items-center md:justify-between md:p-8">
                  <div className="min-w-0 flex-1">
                    <h4 className="display-heading text-xl text-foreground md:text-2xl">
                      {cert.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                  </div>
                  <span className="shrink-0 text-sm text-muted-foreground">
                    {cert.date ?? "Completed"}
                  </span>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
