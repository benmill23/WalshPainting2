import { site } from "@/lib/site";
import { PhoneIcon, MailIcon, MapPinIcon, UserIcon } from "./Icons";

export function ContactInfo() {
  const items = [
    {
      Icon: PhoneIcon,
      label: "Phone",
      value: site.phone,
      href: `tel:${site.phoneRaw}`,
    },
    {
      Icon: MailIcon,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      Icon: MapPinIcon,
      label: "Service Area",
      value: `Serving Greater ${site.address.city}`,
    },
    {
      Icon: UserIcon,
      label: "Owner",
      value: site.owner,
    },
  ];

  return (
    <div className="space-y-5">
      {items.map(({ Icon, label, value, href }) => (
        <div key={label} className="flex items-start gap-4">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100">
            <Icon className="h-5 w-5 fill-navy" />
          </div>
          <div>
            <strong className="block text-sm font-semibold text-gray-900">{label}</strong>
            {href ? (
              <a
                href={href}
                className="text-sm text-gray-500 transition-colors hover:text-navy"
              >
                {value}
              </a>
            ) : (
              <span className="text-sm text-gray-500">{value}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
