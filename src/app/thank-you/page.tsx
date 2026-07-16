import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="accent-line mx-auto mb-6" />
        <h1 className="display-heading text-4xl text-foreground md:text-5xl">
          Message sent
        </h1>
        <p className="mt-4 text-muted">
          Thank you for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-sm border border-accent px-6 py-3 text-sm text-accent transition-colors hover:bg-accent hover:text-background"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
