import { projects } from "@/data/projects";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import Link from "next/link";

export function Projects() {
  return (
    <Section
      id="projects"
      label="Projects"
      title="Selected work"
      description="Analytical tools and data explorations I've built — from internal reporting tools to AI-assisted analysis."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <AnimatedReveal key={project.title} delay={index * 0.08}>
            <Card as="article" className="flex h-full flex-col">
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="display-heading text-2xl text-foreground md:text-3xl">
                  {project.title}
                </h3>
                {project.featured ? (
                  <span className="shrink-0 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-background">
                    Featured
                  </span>
                ) : null}
              </div>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted md:text-base">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>

              <div className="flex gap-4 border-t border-border-subtle pt-5">
                {project.github ? (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    GitHub →
                  </Link>
                ) : null}
                {project.demo ? (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    Live Demo →
                  </Link>
                ) : null}
              </div>
            </Card>
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}
