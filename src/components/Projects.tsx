import { projects } from "@/data/projects";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

export function Projects() {
  return (
    <Section
      id="projects"
      label="Projects"
      title="Selected work"
      description="Selected work from commercial analytics at Saracakis Group and personal technical projects."
    >
      <div className="divide-y divide-border-subtle border-y border-border-subtle">
        {projects.map((project, index) => (
          <AnimatedReveal key={project.title} delay={index * 0.06}>
            <article className="group py-8 md:py-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-10">
                <div className="min-w-0 flex-1">
                  {project.featured ? (
                    <div className="mb-3 flex items-center gap-3">
                      <span className="h-px w-6 bg-accent" />
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                        Featured
                      </span>
                    </div>
                  ) : null}

                  <h3 className="display-heading text-2xl text-foreground transition-colors group-hover:text-accent md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                    {project.description}
                  </p>

                  <p className="mt-4 text-xs tracking-wide text-muted-foreground">
                    {project.tags.join(" · ")}
                  </p>
                </div>

                <div className="flex shrink-0 gap-5 md:pt-1">
                  {project.github ? (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      GitHub ↗
                    </Link>
                  ) : null}
                  {project.demo ? (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      Live ↗
                    </Link>
                  ) : null}
                </div>
              </div>
            </article>
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}
