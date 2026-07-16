import { courses } from "@/data/courses";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

function getCourseStatusLabel(completedAt: string): string {
  if (completedAt === "In progress") {
    return "In progress";
  }

  if (completedAt === "Certified") {
    return "Certified";
  }

  return "Completed";
}

export function Courses() {
  return (
    <Section
      id="courses"
      label="Courses"
      title="Education & certifications"
      description="Formal study, professional certificates, and skills currently in progress."
    >
      <div className="divide-y divide-border-subtle border-y border-border-subtle">
        {courses.map((course, index) => (
          <AnimatedReveal key={course.title} delay={index * 0.06}>
            <div className="flex flex-col gap-4 py-6 transition-colors md:flex-row md:items-center md:justify-between md:py-8">
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="rounded-sm border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
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
                  {getCourseStatusLabel(course.completedAt)}
                </span>
              )}
            </div>
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}
