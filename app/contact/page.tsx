import type { Metadata } from "next";
import { ContactInfo } from "@/components/ContactInfo";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Walsh Painting — Free Nashville Estimate",
  description: `Get a free painting estimate from ${site.name}. Call ${site.phone} or send a message.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div>
          <h1 className="text-4xl text-gray-900 md:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-md text-lg text-gray-500">
            Ready to talk about your project? Send a message or call directly — Nicholas
            typically responds within one business day.
          </p>
          <div className="mt-10">
            <ContactInfo />
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
