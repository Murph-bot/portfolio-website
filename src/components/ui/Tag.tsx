export function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-sm border border-border px-2.5 py-1 text-xs font-medium text-muted">
      {label}
    </span>
  );
}
