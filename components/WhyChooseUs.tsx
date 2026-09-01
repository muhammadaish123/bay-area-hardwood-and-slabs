import Reveal from "./Reveal";

const REASONS = [
  {
    title: "Shop-direct pricing",
    description:
      "No lumberyard markup — you're buying and building straight from the mill floor.",
  },
  {
    title: "One shop, start to finish",
    description:
      "Milling, building, finishing and delivery all happen under our roof, not farmed out.",
  },
  {
    title: "25+ years of hardwood",
    description:
      "We know grain, grade and moisture content well enough to steer you right the first time.",
  },
  {
    title: "We deliver & install",
    description:
      "Our own crew handles delivery and install across the Bay Area — never a subcontractor.",
  },
];

export default function WhyChooseUs() {
  return (
<section className="border-b border-line bg-paper py-14 md:py-20">
        <div className="container">
        <Reveal>
          <span
            className="eyebrow"
            style={{ color: "oklab(0.5 0.118727 0.0741887 / 0.8)" }}
          >
            WHY CHOOSE US
          </span>

          <h2 className="mt-3 max-w-xl text-3xl sm:text-4xl">
            Built our way,{" "}
            <span style={{ color: "oklab(0.5 0.118727 0.0741887 / 0.8)" }}>
              not the easy way
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted font-sans normal-case">
            Every board that leaves the shop has been through our hands twice
            — once to mill it, once to check it.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="group -mx-4 -mb-4 rounded-card border-t border-ink/15 px-4 pb-7 pt-8 transition-all duration-200 ease-smooth hover:-translate-y-1 hover:border-t-[oklab(0.5_0.118727_0.0741887_/_0.8)] hover:shadow-card"
            >
              <div className="absolute" />

              <h3
                className="text-lg"
                style={{ color: "oklab(0.5 0.118727 0.0741887 / 0.8)" }}
              >
                {reason.title}
              </h3>

              <p className="mt-2 text-[15px] leading-relaxed text-muted font-sans normal-case">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}