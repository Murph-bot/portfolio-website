export function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border bg-accent-muted px-3 py-1 text-xs font-medium text-accent">
      {label}
    </span>
  );
}
