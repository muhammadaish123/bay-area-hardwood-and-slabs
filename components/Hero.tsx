import ImagePlaceholder from "./ImagePlaceholder";

const PHONE = "510-813-4952";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden md:h-screen md:min-h-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImagePlaceholder
          src="/images/hero-dining-table.jpg"
          alt="Clients seated at a custom live-edge walnut dining table"
          label="Hero image — clients at live-edge walnut dining table"
          aspect="h-full w-full"
          className="h-full w-full rounded-none object-cover object-center md:object-top"
          priority
        />

        {/* Dark overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/55 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 md:top-1/2">
        <div className="container px-5 sm:px-6 md:px-0">

          {/* Location */}
          <span className="inline-flex items-center gap-2 rounded-full bg-paper px-3.5 py-1.5 text-xs font-medium tracking-wide text-ink sm:px-4">
            San Leandro, California
          </span>

          {/* Heading */}
          <h1 className="mt-4 max-w-2xl text-3xl leading-[1.08] text-paper sm:mt-5 sm:text-5xl md:text-6xl">
            Hardwood, milled and made by hand
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-lg text-[15px] font-sans leading-relaxed normal-case text-paper/85 sm:mt-5 sm:text-base md:text-lg">
            Custom slab tables, decking, siding, flooring and trim — plus
            hardwood lumber straight from our shop floor.
          </p>

          {/* Buttons */}
          <div className="mt-5 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3">

            {/* Request a quote */}
            <a
              href={`tel:${PHONE}`}
              className="
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-paper
                px-6
                py-3
                text-sm
                font-medium
                text-ink
                transition-all
                duration-200
                ease-smooth
                hover:bg-[var(--accent-oklab)]
                hover:text-white
                sm:w-auto
              "
            >
              Request a quote
            </a>

            {/* See our work */}
            <a
              href="/about#work"
              className="
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-paper/40
                bg-transparent
                px-6
                py-3
                text-sm
                font-medium
                text-paper
                transition-all
                duration-200
                ease-smooth
                hover:border-[var(--accent-oklab)]
                hover:bg-[var(--accent-oklab)]
                hover:text-white
                sm:w-auto
              "
            >
              See our work
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}