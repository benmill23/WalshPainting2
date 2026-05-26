"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

// FormSubmit.co endpoint. After Nick verifies the form on first submission,
// swap NEXT_PUBLIC_FORMSUBMIT_ENDPOINT to the hashed URL FormSubmit emails him
// (looks like https://formsubmit.co/ajax/abc123hash) so the raw email isn't
// visible in the page source.
const ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSUBMIT_ENDPOINT ||
  `https://formsubmit.co/ajax/${site.email}`;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = (await res.json().catch(() => ({}))) as {
        success?: string | boolean;
        message?: string;
      };
      if (res.ok && (json.success === "true" || json.success === true)) {
        setStatus("success");
        form.reset();
      } else {
        setErrorMessage(
          json.message ||
            "We couldn't send your message. Please try again or give us a call.",
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please try again or call us.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-gray-200 bg-cream p-8 text-center">
        <h3 className="font-sans text-xl font-semibold text-gray-900">Thanks — we got it.</h3>
        <p className="mt-2 text-sm text-gray-500">
          Nicholas will reach out within one business day. For anything urgent, call us at the
          number on this page.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-gray-200 bg-cream p-7"
      noValidate
    >
      <h3 className="mb-5 font-sans text-xl font-semibold text-gray-900">Get Your Free Estimate</h3>

      <div className="space-y-4">
        <Field id="name" label="Name" required />
        <Field id="phone" label="Phone" type="tel" required autoComplete="tel" />
        <Field id="email" label="Email" type="email" autoComplete="email" />

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">
            Service Type
          </label>
          <select
            id="service"
            name="service"
            className="w-full rounded-md border border-gray-200 bg-white px-3.5 py-2.5 text-sm transition-colors focus:border-navy focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service…
            </option>
            <option value="interior">Interior Painting</option>
            <option value="exterior">Exterior Painting</option>
            <option value="cabinets">Cabinet Refinishing</option>
            <option value="commercial">Commercial Painting</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your project — rooms, square footage, timeline, etc."
            className="w-full resize-y rounded-md border border-gray-200 bg-white px-3.5 py-2.5 text-sm transition-colors focus:border-navy focus:outline-none"
          />
        </div>

        {/* FormSubmit control fields */}
        <input type="hidden" name="_subject" value="New Walsh Painting estimate request" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="text"
          name="_honey"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
        />
      </div>

      {status === "error" && (
        <p className="mt-3 text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit Request"}
      </button>

      <p className="mt-3 text-center text-xs text-gray-500">
        Or call us directly at{" "}
        <a href="tel:+16154035516" className="font-semibold text-navy hover:underline">
          (615) 403-5516
        </a>
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-md border border-gray-200 bg-white px-3.5 py-2.5 text-sm transition-colors focus:border-navy focus:outline-none"
      />
    </div>
  );
}
