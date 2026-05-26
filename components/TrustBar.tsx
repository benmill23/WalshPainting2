import { ShieldIcon, CheckCircleIcon, GroupIcon, StarIcon } from "./Icons";

const items = [
  { Icon: ShieldIcon, label: "Licensed & Insured" },
  { Icon: CheckCircleIcon, label: "Free Estimates" },
  { Icon: GroupIcon, label: "Locally Owned" },
  { Icon: StarIcon, label: "Quality Guaranteed" },
];

export function TrustBar() {
  return (
    <section className="border-y border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-6">
        {items.map(({ Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-sm text-gray-500">
            <Icon className="h-5 w-5 fill-cyan" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
