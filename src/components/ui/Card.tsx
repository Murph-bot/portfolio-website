import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
};

export function Card({ children, className = "", as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={`group rounded-2xl border border-border-subtle bg-surface p-6 transition-all duration-300 hover:border-border hover:bg-surface-elevated md:p-8 ${className}`}
    >
      {children}
    </Tag>
  );
}
