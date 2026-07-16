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
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const honeypot = String(formData.get("_honey") ?? "").trim();

    if (honeypot) {
      setStatus("success");
      form.reset();
      return;
    }

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.email)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _subject: `Portfolio contact from ${name}`,
            _replyto: email,
            _template: "table",
            _captcha: "false",
          }),
        },
      );

      const data = (await response.json()) as {
        success?: boolean | string;
        message?: string;
      };

      const ok =
        response.ok &&
        (data.success === true || data.success === "true");

      if (ok) {
        setStatus("success");
        form.reset();
        return;
      }

      setStatus("error");
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
            onSubmit={handleSubmit}
            className="rounded-lg border border-border-subtle bg-surface p-6 md:p-8"
          >
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

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
                Thank you! Your message has been sent to {siteConfig.email}.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="mt-4 text-sm text-red-400">
                Something went wrong. Please try again or email{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="underline hover:text-accent"
                >
                  {siteConfig.email}
                </a>{" "}
                directly.
              </p>
            ) : null}
          </form>
        </AnimatedReveal>
      </div>
    </Section>
  );
}
