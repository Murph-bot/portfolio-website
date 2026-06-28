import { courses } from "@/data/courses";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

export function Courses() {
  return (
    <Section
      id="courses"
      label="Courses"
      title="Continuous learning"
      description="Certifications and courses that have shaped my skills and expertise."
    >
      <div className="divide-y divide-border-subtle rounded-2xl border border-border-subtle bg-surface">
        {courses.map((course, index) => (
          <AnimatedReveal key={course.title} delay={index * 0.06}>
            <div className="flex flex-col gap-4 p-6 transition-colors hover:bg-surface-elevated md:flex-row md:items-center md:justify-between md:p-8">
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-border px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {course.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {course.completedAt}
                  </span>
                </div>
                <h3 className="display-heading text-xl text-foreground md:text-2xl">
                  {course.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{course.provider}</p>
              </div>

              {course.credentialUrl ? (
                <Link
                  href={course.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-sm text-accent transition-opacity hover:opacity-80"
                >
                  View credential →
                </Link>
              ) : (
                <span className="shrink-0 text-sm text-muted-foreground">
                  Completed
                </span>
              )}
            </div>
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}
