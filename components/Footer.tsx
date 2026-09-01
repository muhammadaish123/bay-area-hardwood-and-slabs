import Link from "next/link";

const PHONE = "510-813-4952";
const ADDRESS = "653 143rd Ave, San Leandro, CA 94578";

const SERVICES_LINKS = [
  { label: "Custom Tables", href: "/services" },
  { label: "Milled Decking", href: "/services" },
  { label: "Milled Siding", href: "/services" },
  { label: "Milled Flooring", href: "/services" },
  { label: "Trim Work", href: "/services" },
  { label: "Lumber & Slabs", href: "/services#lumber" },
];

const COMPANY_LINKS = [
  { label: "Our Work", href: "/about#work" },
  { label: "How It Works", href: "/services#process" },
  { label: "Species We Stock", href: "/services#species" },
  { label: "Visit the Shop", href: "/contact#visit" },
  { label: "Request a Quote", href: `tel:${PHONE}` },
];

const SOCIALS = [
  { label: "Instagram", initial: "I", href: "https://instagram.com" },
  { label: "Facebook", initial: "F", href: "https://facebook.com" },
  { label: "Houzz", initial: "H", href: "https://houzz.com" },
];

const ACCENT = "oklab(0.5 0.118727 0.0741887 / 0.8)";

export default function Footer() {
  return (
    <footer className="bg-[#e5e5e5] text-ink">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">

          {/* BRAND */}
          <div>
            <div className="font-display uppercase tracking-wide text-lg text-ink">
              Bay Area

              <span className="block text-sm font-sans normal-case font-medium tracking-wide text-ink/60">
                Hardwood &amp; Slabs
              </span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/60">
              Custom live-edge tables, milled decking, siding, flooring and
              trim — plus hardwood lumber and slabs in San Leandro, CA.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h4
              className="text-sm font-medium normal-case"
              style={{ color: ACCENT }}
            >
              Services
            </h4>

            <ul className="mt-4 space-y-2.5">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="
                      text-sm text-ink/70
                      transition-colors duration-200
                      hover:text-[oklab(0.5_0.118727_0.0741887_/_0.8)]
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4
              className="text-sm font-medium normal-case"
              style={{ color: ACCENT }}
            >
              Company
            </h4>

            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((link) =>
                link.href.startsWith("tel:") ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="
                        text-sm text-ink/70
                        transition-colors duration-200
                        hover:text-[oklab(0.5_0.118727_0.0741887_/_0.8)]
                      "
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="
                        text-sm text-ink/70
                        transition-colors duration-200
                        hover:text-[oklab(0.5_0.118727_0.0741887_/_0.8)]
                      "
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4
              className="text-sm font-medium normal-case"
              style={{ color: ACCENT }}
            >
              Contact
            </h4>

            <dl className="mt-4 space-y-3 text-sm text-ink/70">
              <div>
                <dt className="text-ink/40">Address</dt>
                <dd>{ADDRESS}</dd>
              </div>

              <div>
                <dt className="text-ink/40">Phone</dt>
                <dd>
                  <a
                    href={`tel:${PHONE}`}
                    className="
                      transition-colors duration-200
                      hover:text-[oklab(0.5_0.118727_0.0741887_/_0.8)]
                    "
                  >
                    {PHONE}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-ink/40">Hours</dt>
                <dd>Mon – Sat, 8am – 5pm</dd>
              </div>
            </dl>

            {/* SOCIALS */}
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full
                    border border-ink/20
                    text-sm text-ink/70
                    transition-all duration-200
                    hover:border-[oklab(0.5_0.118727_0.0741887_/_0.8)]
                    hover:bg-[oklab(0.5_0.118727_0.0741887_/_0.8)]
                    hover:text-black
                  "
                >
                  {social.initial}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT / BOTTOM SECTION */}
      <div className="border-t border-ink/20">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">

          {/* COPYRIGHT — ALWAYS OKLAB */}
          <p
            className="text-sm"
            style={{ color: ACCENT }}
          >
            © {new Date().getFullYear()} Bay Area Hardwood &amp; Slabs. All
            rights reserved.
          </p>

          {/* BOTTOM LINKS — ALWAYS OKLAB */}
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="
                transition-colors duration-200
                text-[oklab(0.5_0.118727_0.0741887_/_0.8)]
                hover:text-black
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                transition-colors duration-200
                text-[oklab(0.5_0.118727_0.0741887_/_0.8)]
                hover:text-black
              "
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="
                transition-colors duration-200
                text-[oklab(0.5_0.118727_0.0741887_/_0.8)]
                hover:text-black
              "
            >
              Sitemap
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
