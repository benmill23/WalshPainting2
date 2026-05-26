import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan">404</p>
        <h1 className="mt-3 text-4xl text-gray-900">Page not found</h1>
        <p className="mt-4 text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist. Head back to the homepage or
          contact us directly.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light"
          >
            Go home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border-2 border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
