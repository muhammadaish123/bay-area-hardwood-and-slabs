import ImagePlaceholder from "./ImagePlaceholder";
import Reveal from "./Reveal";

const PHONE = "510-813-4952";

const FEATURES = [
  "Kiln-dried hardwood",
  "Wide live-edge slabs",
  "Custom profiles & knives",
  "Decking & siding packages",
  "Flooring runs",
  "Trim & mouldings",
];

export default function LumberYard() {
  return (
        <section id="lumber" className="border-b border-line bg-paper py-14 md:py-20">
        <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Lumber yard</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Buy the wood, or let us mill it
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted font-sans normal-case">
            Walnut, white oak, mahogany, sapele and more — rough or surfaced,
            board or slab. Bring your drawings and we will run the profile in
            house.
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5 text-sm text-ink/80 font-sans normal-case">
                <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                {feature}
              </li>
            ))}
          </ul>

          <a href={`tel:${PHONE}`} className="btn-primary mt-8">
            Check availability
          </a>
        </Reveal>

        <ImagePlaceholder
          src="/images/service-lumber.jpg"
          alt="Lumber and slabs stacked in the yard"
          label="Lumber & slabs"
          aspect="aspect-[4/3] lg:aspect-square"
        />
      </div>
    </section>
  );
}
