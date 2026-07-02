import { skillGroups } from "@/data/skills";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";

export function Skills() {
  return (
    <Section
      id="skills"
      label="Skills"
      title="Tools of the trade"
      description="The languages, platforms and analytical methods I use to turn raw data into decisions."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <AnimatedReveal key={group.category} delay={index * 0.08}>
            <Card className="h-full">
              <h3 className="display-heading mb-5 text-2xl text-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill} label={skill} />
                ))}
              </div>
            </Card>
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}
