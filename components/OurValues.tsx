import Reveal from "./Reveal";

const VALUES = [
  {
    title: "Craft over shortcuts",
    description:
      "We take the extra pass on a slab or the extra day on a finish if that's what the piece needs.",
  },
  {
    title: "Bay Area roots",
    description:
      "Sourced, milled and built in San Leandro — not shipped in from somewhere else.",
  },
  {
    title: "Honest about wood",
    description:
      "We'll tell you what a board can and can't do before you commit to it.",
  },
  {
    title: "Built to outlast us",
    description:
      "Every piece is joined and finished to be handed down, not replaced.",
  },
];

export default function OurValues() {
  return (
    <section className="border-b border-line bg-paper py-14 md:py-20">
      <div className="container">
        <Reveal>
          <span className="eyebrow uppercase tracking-[0.2em] text-[oklab(0.5_0.118727_0.0741887_/_0.8)]">
            WHAT WE STAND FOR
          </span>

          <h2 className="mt-3 max-w-xl text-3xl sm:text-4xl">
            Our{" "}
            <span style={{ color: "oklab(0.5 0.118727 0.0741887 / 0.8)" }}>
              values
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="group -mx-4 -mb-4 rounded-card border-t border-ink/15 px-4 pb-7 pt-8 transition-all duration-200 ease-smooth hover:-translate-y-1 hover:border-t-[oklab(0.5_0.118727_0.0741887_/_0.8)] hover:shadow-card"
            >
              <h3
                className="text-lg"
                style={{ color: "oklab(0.5 0.118727 0.0741887 / 0.8)" }}
              >
                {value.title}
              </h3>

              <p className="mt-2 text-[15px] leading-relaxed text-muted font-sans normal-case">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}