import ImagePlaceholder from "./ImagePlaceholder";

const PHONE = "510-813-4952";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      <ImagePlaceholder
        src="/images/work-deck-stairs.jpg"
        alt="Finished hardwood deck and stairs"
        label="Finished hardwood deck & stairs"
        aspect="aspect-[4/5] sm:aspect-[16/9] md:aspect-[3/1]"
        className="w-full rounded-none"
      />

      <div className="pointer-events-none absolute inset-0 bg-ink/65" />

      <div className="absolute inset-0 flex items-center">
        <div className="container px-5 sm:px-6 md:px-0">
          {/* READY WHEN YOU ARE */}
          <span className="eyebrow text-[oklab(0.5_0.118727_0.0741887_/_0.8)]">
            READY WHEN YOU ARE
          </span>

          <h2 className="mt-3 max-w-xl text-3xl leading-tight text-paper sm:text-4xl">
            Send us your plans{" "}
            <span className="text-[oklab(0.5_0.118727_0.0741887_/_0.8)]">
              and we&apos;ll price the wood
            </span>
          </h2>

          <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3">
            {/* CALL BUTTON */}
            <a
              href={`tel:${PHONE}`}
              className="
                btn-primary
                min-h-12
                w-full
                bg-paper
                text-ink
                transition-all
                duration-300
                ease-smooth
                hover:bg-[oklab(0.5_0.118727_0.0741887_/_0.8)]
                hover:text-white
                sm:w-auto
              "
            >
              Call {PHONE}
            </a>

            {/* SERVICES BUTTON */}
            <a
              href="/services"
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
                duration-300
                ease-smooth
                hover:border-[oklab(0.5_0.118727_0.0741887_/_0.8)]
                hover:bg-[oklab(0.5_0.118727_0.0741887_/_0.8)]
                hover:text-white
                sm:w-auto
              "
            >
              Browse services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}