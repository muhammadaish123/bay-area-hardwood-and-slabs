import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";
import Reveal from "./Reveal";
import { SERVICES } from "@/lib/services";

export default function ServicesGrid() {
  return (
<section id="services" className="border-b border-line bg-paper py-14 md:py-20">
        <div className="container">
        <Reveal>
          <span className="eyebrow">What we do</span>
          <h2 className="mt-3 max-w-xl text-3xl sm:text-4xl">
            Six things,{" "}
            <span style={{ color: "oklab(0.5 0.118727 0.0741887 / 0.8)" }}>
              done properly
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-card">
                <ImagePlaceholder
                  src={service.heroImage}
                  alt={service.title}
                  label={service.heroLabel}
                  aspect="aspect-[4/3]"
                  className="transition-transform duration-300 ease-smooth group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-5 text-xl transition-colors duration-200 ease-smooth group-hover:text-[oklab(0.5_0.118727_0.0741887_/_0.8)]">
                {service.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted font-sans normal-case">
                {service.shortDescription}
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-ink/70 transition-colors duration-200 ease-smooth group-hover:text-[oklab(0.5_0.118727_0.0741887_/_0.8)]">
                View details
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-200 ease-smooth group-hover:translate-x-1"
                >
                  <path
                    d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}