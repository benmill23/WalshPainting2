import type { Faq as FaqType } from "@/lib/site";

export function Faq({
  faqs,
  title = "Frequently asked questions",
  intro,
}: {
  faqs: FaqType[];
  title?: string;
  intro?: string;
}) {
  if (!faqs.length) return null;

  return (
    <section className="border-t border-gray-200 bg-white py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl text-gray-900 md:text-4xl">{title}</h2>
          {intro && <p className="mt-3 text-gray-500">{intro}</p>}
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group rounded-lg border border-gray-200 bg-cream p-5 open:bg-white"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-sans text-base font-semibold text-gray-900">
                <span>{f.q}</span>
                <span
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy transition-transform group-open:rotate-45"
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
