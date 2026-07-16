import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

const variants = {
  primary:
    "bg-accent text-background hover:bg-accent-hover border border-accent",
  secondary:
    "bg-transparent text-foreground border border-border hover:border-accent hover:text-accent",
  ghost: "bg-transparent text-muted hover:text-accent border border-transparent",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
