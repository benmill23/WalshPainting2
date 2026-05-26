import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon } from "./Icons";
import { CallButton } from "./CallButton";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/service-area", label: "Areas" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <Image
            src="/walshlogo-transparent-copy.png"
            alt={site.name}
            width={200}
            height={50}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-700">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-navy transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <CallButton variant="header" className="px-4 py-2.5">
          <PhoneIcon className="h-4 w-4 fill-current" />
          <span className="hidden sm:inline">Call {site.phone}</span>
          <span className="sm:hidden">Call Now</span>
        </CallButton>
      </nav>
    </header>
  );
}
