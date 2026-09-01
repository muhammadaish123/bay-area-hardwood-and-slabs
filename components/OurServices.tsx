import Link from "next/link";
import Reveal from "./Reveal";
import { SERVICES } from "@/lib/services";

export default function OurServices() {
  return (
    <section className="border-b border-line bg-cream py-14 md:py-20">
      <div className="container">
        <Reveal>
          <span className="eyebrow uppercase tracking-[0.2em] text-[oklab(0.5_0.118727_0.0741887_/_0.8)]">
            WHAT WE DO
          </span>

          <h2 className="mt-3 max-w-xl text-3xl sm:text-4xl">
            Six things,{" "}
            <span className="text-[oklab(0.5_0.118727_0.0741887_/_0.8)]">
              one shop
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted font-sans normal-case">
            Everything below is sourced, milled and finished in San Leandro —
            nothing is farmed out.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group -mx-4 -mb-4 block rounded-card border-t border-ink/15 px-4 pb-7 pt-8 transition-all duration-200 ease-smooth hover:-translate-y-1 hover:border-t-[oklab(0.5_0.118727_0.0741887_/_0.8)] hover:shadow-card"
            >
              <h3 className="text-lg transition-colors duration-200 ease-smooth group-hover:text-[oklab(0.5_0.118727_0.0741887_/_0.8)]">
                {service.title}
              </h3>

              <p className="mt-2 text-[15px] leading-relaxed text-muted font-sans normal-case">
                {service.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}