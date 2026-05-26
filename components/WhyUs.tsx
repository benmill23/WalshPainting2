import { CheckCircleIcon, ClockIcon, ShieldSimpleIcon, MapPinIcon } from "./Icons";

const items = [
  { Icon: CheckCircleIcon, title: "Quality Work", body: "Premium paints and meticulous attention to detail." },
  { Icon: ClockIcon, title: "On Time", body: "Projects completed on schedule, every time." },
  { Icon: ShieldSimpleIcon, title: "Fully Insured", body: "Licensed, bonded, and insured for your protection." },
  { Icon: MapPinIcon, title: "Local", body: "Proudly serving Greater Nashville." },
];

export function WhyUs() {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl text-white md:text-4xl">Why Choose Walsh Painting</h2>
          <p className="mt-3 text-lg text-white/70">
            Committed to delivering exceptional results on every project.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ Icon, title, body }) => (
            <div key={title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                <Icon className="h-7 w-7 fill-cyan" />
              </div>
              <h3 className="font-sans text-base font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-white">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
