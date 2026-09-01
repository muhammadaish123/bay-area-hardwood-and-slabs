import type { Metadata } from "next";
import { notFound } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

import { SERVICES, getService } from "@/lib/services";

const PHONE = "510-813-4952";

type ServicePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({
  params,
}: ServicePageProps): Metadata {
  const service = getService(params.slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({
  params,
}: ServicePageProps) {
  const service = getService(params.slug);

  if (!service) {
    notFound();
  }

  const otherServices = SERVICES.filter(
    (s) => s.slug !== service.slug
  );

  return (
    <>
      {/* IMPORTANT:
          overlay={false} keeps the navbar visible on the
          light service-detail page.
      */}
      <Navbar overlay={false} />

      <main>
        {/* =====================================================
            SERVICE INTRO
        ===================================================== */}
        <section className="border-b border-line bg-paper pb-10 pt-28 md:pb-14 md:pt-32">
          <div className="container">

            {/* RETURN TO ALL SERVICES */}
            <Link
              href="/services"
              className="return-services"
            >
              ← Return to all services
            </Link>

            <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

              {/* IMAGE */}
              <Reveal>
                <ImagePlaceholder
                  src={service.heroImage}
                  alt={service.title}
                  label={service.heroLabel}
                  aspect="aspect-[4/3]"
                  priority
                />
              </Reveal>

              {/* CONTENT */}
              <Reveal>
                <span className="eyebrow">
                  What we do
                </span>

                <h1 className="mt-3 text-4xl sm:text-5xl">
                  {service.title
                    .split(" ")
                    .slice(0, -1)
                    .join(" ") ? (
                    <>
                      {service.title
                        .split(" ")
                        .slice(0, -1)
                        .join(" ")}{" "}

                      <span
                        style={{
                          color: "var(--accent-oklab)",
                        }}
                      >
                        {service.title
                          .split(" ")
                          .slice(-1)}
                      </span>
                    </>
                  ) : (
                    service.title
                  )}
                </h1>

                <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted font-sans normal-case md:text-lg">
                  {service.intro}
                </p>

                {/* FEATURES */}
                <ul className="mt-8 space-y-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] text-black"
                        style={{
                          backgroundColor:
                            "var(--accent-oklab)",
                        }}
                        aria-hidden="true"
                      >
                        ✓
                      </span>

                      <span className="text-[15px] leading-relaxed text-ink/80 font-sans normal-case">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* ACTION BUTTONS */}
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="btn-primary"
                  >
                    Book this service
                  </Link>

                  <Link
                    href={`tel:${PHONE}`}
                    className="btn-secondary"
                  >
                    Call {PHONE}
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* =====================================================
            OTHER SERVICES
        ===================================================== */}
        <section className="bg-cream py-14 md:py-20">
          <div className="container">

            <Reveal>
              <span className="eyebrow">
                Also available
              </span>

              <h2 className="mt-3 max-w-xl text-3xl sm:text-4xl">
                The other{" "}
                <span
                  style={{
                    color: "var(--accent-oklab)",
                  }}
                >
                  five things
                </span>
              </h2>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="group flex h-full flex-col"
                >
                  <ImagePlaceholder
                    src={other.heroImage}
                    alt={other.title}
                    label={other.heroLabel}
                    aspect="aspect-[4/3]"
                    className="transition-transform duration-300 ease-smooth group-hover:scale-[1.03]"
                  />

                  <h3 className="mt-5 text-xl transition-colors duration-200 ease-smooth">
                    <span className="transition-colors duration-200 group-hover:text-[var(--accent-oklab)]">
                      {other.title}
                    </span>
                  </h3>

                  <p className="mt-2 text-[15px] leading-relaxed text-muted font-sans normal-case">
                    {other.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
