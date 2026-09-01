"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const PHONE = "510-813-4952";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

type NavbarProps = {
  overlay?: boolean;
};

export default function Navbar({ overlay = true }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!overlay) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [overlay]);

  const transparent = overlay && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth ${
        transparent
          ? "border-b-0 bg-transparent"
          : "border-b-0 bg-paper/95 backdrop-blur-md md:border-b md:border-line"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`font-display uppercase tracking-wide text-lg leading-tight transition-colors duration-300 ${
            transparent
              ? "font-semibold text-white"
              : "font-semibold text-ink"
          }`}
        >
          Bay Area

          <span
            className={`block text-sm font-sans normal-case font-medium tracking-wide transition-colors duration-300 ${
              transparent ? "text-paper/85" : "text-muted"
            }`}
          >
            Hardwood &amp; Slabs
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium transition-colors duration-200 ${
                transparent
                  ? "text-white/95 hover:text-[var(--accent-oklab)]"
                  : "text-ink/70 hover:text-[var(--accent-oklab)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone */}
        <div className="hidden md:block">
          <a
            href={`tel:${PHONE}`}
            className={`btn-primary transition-all duration-300 ${
              transparent
                ? "bg-paper text-ink hover:bg-[var(--accent-oklab)] hover:text-white"
                : "hover:bg-[var(--accent-oklab)] hover:text-white"
            }`}
          >
            {PHONE}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 md:hidden ${
            transparent
              ? "border-paper/40"
              : "border-ink/15"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-4 transition-all duration-200 ${
                transparent ? "bg-paper" : "bg-ink"
              } ${
                open
                  ? "translate-y-[5px] rotate-45"
                  : ""
              }`}
            />

            <span
              className={`absolute bottom-0 left-0 h-[1.5px] w-4 transition-all duration-200 ${
                transparent ? "bg-paper" : "bg-ink"
              } ${
                open
                  ? "-translate-y-[5px] -rotate-45"
                  : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-paper transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="container flex flex-col gap-1 px-5 py-4 sm:px-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="
                rounded-md
                px-2
                py-2.5
                text-sm
                font-medium
                text-ink/80
                transition-colors
                duration-200
                hover:bg-ink/[0.04]
                hover:text-[var(--accent-oklab)]
              "
            >
              {link.label}
            </Link>
          ))}

          <a
            href={`tel:${PHONE}`}
            className="
              btn-primary
              mt-2
              w-full
              hover:bg-[var(--accent-oklab)]
              hover:text-white
            "
          >
            {PHONE}
          </a>
        </nav>
      </div>
    </header>
  );
}