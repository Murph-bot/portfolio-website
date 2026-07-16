"use client";

import { siteConfig } from "@/data/site";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(107,79,46,0.06)_0%,transparent_48%)]"
      />

      <div className="section-container relative z-10 py-24 md:py-28">
        <AnimatedReveal>
          <div className="mb-8 flex items-center gap-4">
            <span className="accent-line" />
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
              {siteConfig.role}
            </p>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.08}>
          <h1 className="display-heading max-w-4xl text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            {siteConfig.name}
          </h1>
        </AnimatedReveal>

        <AnimatedReveal delay={0.16}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            {siteConfig.tagline}
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.24}>
          <div className="mt-12 flex flex-wrap gap-3">
            <Button href="#projects">View Projects</Button>
            <Button href={siteConfig.resumePath} variant="secondary">
              Download Resume
            </Button>
            <Button href="#contact" variant="ghost">
              Get in Touch
            </Button>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.36}>
          <motion.div
            className="mt-24 flex items-center gap-3 text-sm text-muted-foreground"
            animate={shouldReduceMotion ? undefined : { y: [0, 5, 0] }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <span className="h-px w-8 bg-border" />
            <span>Scroll</span>
          </motion.div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
