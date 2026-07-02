import { experience } from "@/data/experience";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";

export function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Where I've worked"
      description="From logistics operations to after-sales supply chain analytics — the roles that shaped how I work with data."
    >
      <div className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:hidden before:h-[calc(100%-2rem)] before:w-px before:bg-border md:before:block">
        {experience.map((item, index) => (
          <AnimatedReveal key={`${item.role}-${item.company}`} delay={index * 0.08}>
            <article className="relative md:pl-12">
              <span className="absolute left-0 top-2 hidden h-[15px] w-[15px] rounded-full border-2 border-accent bg-background md:block" />

              <div className="group rounded-2xl border border-border-subtle bg-surface p-6 transition-all duration-300 hover:border-border hover:bg-surface-elevated md:p-8">
                <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="display-heading text-2xl text-foreground md:text-3xl">
                    {item.role}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {item.period}
                    {item.current ? (
                      <span className="ml-3 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-background">
                        Current
                      </span>
                    ) : null}
                  </p>
                </div>

                <p className="mb-5 text-sm text-accent">
                  {item.company}
                  <span className="mx-2 text-border">·</span>
                  <span className="text-muted">{item.location}</span>
                </p>

                <ul className="space-y-3">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-relaxed text-muted md:text-base"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {item.tags && item.tags.length > 0 ? (
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-border-subtle pt-5">
                    {item.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}
