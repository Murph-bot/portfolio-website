"use client";

import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border-subtle bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container flex h-20 items-center justify-between">
        <Link
          href="#"
          className="display-heading text-xl tracking-wide text-foreground transition-colors hover:text-accent md:text-2xl"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={siteConfig.resumePath}
            className="rounded-sm border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Resume
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {menuOpen ? (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="display-heading text-3xl text-foreground transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteConfig.resumePath}
              onClick={() => setMenuOpen(false)}
              className="rounded-sm border border-accent px-6 py-3 text-sm text-accent"
            >
              Download Resume
            </Link>
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}
