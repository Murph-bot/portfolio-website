"use client";

import { siteConfig } from "@/data/site";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -left-32 bottom-1/4 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,169,98,0.08),transparent_45%)]" />
      </div>

      <div className="section-container relative z-10 py-20">
        <AnimatedReveal>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Supply Chain &amp; Logistics Analytics
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <h1 className="display-heading max-w-4xl text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            {siteConfig.name}
          </h1>
        </AnimatedReveal>

        <AnimatedReveal delay={0.2}>
          <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">
            <span className="text-foreground">{siteConfig.role}</span>
            <span className="mx-3 text-border">—</span>
            {siteConfig.tagline}
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#experience">View Experience</Button>
            <Button href={siteConfig.resumePath} variant="secondary">
              Download Resume
            </Button>
            <Button href="#contact" variant="ghost">
              Get in Touch
            </Button>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.45}>
          <motion.div
            className="mt-20 flex items-center gap-3 text-sm text-muted-foreground"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>Scroll to explore</span>
            <span className="text-accent">↓</span>
          </motion.div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
