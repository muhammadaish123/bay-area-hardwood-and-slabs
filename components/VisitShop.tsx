import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

const PHONE = "510-813-4952";
const ADDRESS = "653 143rd Ave, San Leandro, CA 94578";

const DETAILS = [
  {
    label: "Address",
    value: ADDRESS,
  },
  {
    label: "Phone",
    value: PHONE,
    href: `tel:${PHONE}`,
  },
  {
    label: "Hours",
    value: "Mon – Sat, 8am – 5pm",
  },
];

export default function VisitShop() {
  return (
    <section id="visit" className="bg-paper py-14 md:py-20">
      <div className="container">
        <Reveal>
          <span className="eyebrow">
            VISIT THE SHOP
          </span>

          <h2 className="mt-3 max-w-xl text-3xl sm:text-4xl">
            Come see the{" "}
            <span
              style={{
                color: "var(--accent-oklab)",
              }}
            >
              slabs in person
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <dl className="space-y-6">
              {DETAILS.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-sm text-ink/50">
                    {detail.label}
                  </dt>

                  <dd className="mt-1 text-lg font-sans normal-case">
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-ink hover:underline"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-card border border-line bg-cream p-6 sm:p-8">
            <h3 className="text-lg text-ink">
              Send an inquiry
            </h3>

            <p className="mt-1.5 text-sm text-ink/60">
              Prefer email? Tell us about the project and we&apos;ll
              follow up.
            </p>

            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}