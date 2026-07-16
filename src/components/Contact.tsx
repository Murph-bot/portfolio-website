"use client";

import { siteConfig } from "@/data/site";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section
      id="contact"
      label="Contact"
      title="Let's connect"
      description="Have a project in mind or just want to say hello? Send me a message."
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <AnimatedReveal>
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Email
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block text-lg text-foreground transition-colors hover:text-accent"
              >
                {siteConfig.email}
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Social
              </p>
              <div className="mt-3 flex flex-col gap-3">
                {siteConfig.socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground transition-colors hover:text-accent"
                  >
                    {social.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1} direction="left">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="rounded-lg border border-border-subtle bg-surface p-6 md:p-8"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don&apos;t fill this out:
                <input name="bot-field" />
              </label>
            </p>

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="Tell me about your project..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 w-full rounded-sm bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" ? (
              <p className="mt-4 text-sm text-accent">
                Thank you! Your message has been sent successfully.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="mt-4 text-sm text-red-400">
                Something went wrong. Please try again or email me directly.
              </p>
            ) : null}
          </form>
        </AnimatedReveal>
      </div>
    </Section>
  );
}
