import { websites } from "@/data/websites";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import Image from "next/image";
import Link from "next/link";

export function Websites() {
  return (
    <Section
      id="websites"
      label="Websites"
      title="Sites I've built"
      description="Live websites and landing pages crafted for clients and personal brands."
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {websites.map((website, index) => (
          <AnimatedReveal key={website.title} delay={index * 0.08}>
            <Link
              href={website.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-border-subtle bg-surface transition-all duration-300 hover:border-border hover:bg-surface-elevated"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={website.image}
                  alt={website.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="display-heading text-2xl text-foreground transition-colors group-hover:text-accent">
                  {website.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {website.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {website.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
                <p className="mt-5 text-sm text-accent">Visit site →</p>
              </div>
            </Link>
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}
