"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { site } from "@/lib/site";

type Variant = "primary" | "outline" | "header";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-light",
  outline:
    "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  header:
    "bg-navy text-white hover:bg-navy-light",
};

export function CallButton({
  variant = "outline",
  className = "",
  children,
}: {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold transition-colors ${variantClasses[variant]} ${className}`}
      >
        {children}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-1/2 top-full z-50 mt-2 w-56 -translate-x-1/2 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg"
        >
          <a
            role="menuitem"
            href={`tel:${site.phoneRaw}`}
            onClick={() => setOpen(false)}
            className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-cream"
          >
            <span>Call</span>
            <span className="text-xs text-gray-500">{site.phone}</span>
          </a>
          <div className="h-px bg-gray-100" />
          <a
            role="menuitem"
            href={`sms:${site.phoneRaw}`}
            onClick={() => setOpen(false)}
            className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-cream"
          >
            <span>Text</span>
            <span className="text-xs text-gray-500">{site.phone}</span>
          </a>
        </div>
      )}
    </div>
  );
}
