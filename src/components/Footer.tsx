import { siteConfig } from "@/data/site";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle py-12">
      <div className="section-container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="display-heading text-2xl text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          {siteConfig.socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
