import { experience } from "@/data/experience";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Section } from "@/components/ui/Section";

export function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Work history"
      description="Roles spanning pricing analytics, ERP operations, commercial reporting and customer operations."
    >
      <div className="divide-y divide-border-subtle border-y border-border-subtle">
        {experience.map((role, index) => (
          <AnimatedReveal key={`${role.company}-${role.title}`} delay={index * 0.06}>
            <article className="py-8 md:py-10">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-8">
                <div className="min-w-0">
                  <h3 className="display-heading text-2xl text-foreground md:text-3xl">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted md:text-base">
                    {role.company}
                    <span className="mx-2 text-border">·</span>
                    {role.location}
                  </p>
                </div>
                <p className="shrink-0 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {role.period}
                </p>
              </div>

              <ul className="mt-5 max-w-3xl space-y-2.5">
                {role.highlights.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-muted md:text-base"
                  >
                    <span className="mr-3 text-accent">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}
