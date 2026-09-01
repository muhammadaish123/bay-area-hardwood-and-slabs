import Reveal from "./Reveal";

const SPECIES = [
  "Black Walnut",
  "White Oak",
  "Red Oak",
  "Mahogany",
  "Sapele",
  "Maple",
  "Cherry",
  "Ipe",
  "Redwood",
  "Western Red Cedar",
  "Douglas Fir",
  "Ash",
];

export default function SpeciesStock() {
  return (
<section id="species" className="border-b border-line bg-cream py-14 md:py-20">
        <div className="container">
        <Reveal>
          <span className="eyebrow">In the racks</span>
          <h2 className="mt-3 max-w-xl text-3xl sm:text-4xl">
            Species we stock
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted font-sans normal-case">
            Rough or surfaced, board or slab. If we don&apos;t have it, we can
            usually source it within the week.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3">
          {SPECIES.map((species) => (
            <span
              key={species}
              className="rounded-full border border-ink/15 bg-paper px-4 py-2 text-sm text-ink/75 font-sans normal-case"
            >
              {species}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
