import Reveal from "./Reveal";

const STEPS = [
  {
    number: "01",
    title: "Pick the wood",
    description:
      "Walk the racks with us and choose the slab or species for the job.",
  },
  {
    number: "02",
    title: "Drawings & profile",
    description:
      "We take your dimensions and detail, then set the knives.",
  },
  {
    number: "03",
    title: "Mill & finish",
    description:
      "Cut, joined, sanded and finished on our shop floor.",
  },
  {
    number: "04",
    title: "Deliver & install",
    description:
      "Delivered across the Bay Area, installed when you need it.",
  },
];

export default function ProcessSteps() {
  return (
    <section
      id="process"
      className="border-b border-line bg-paper py-12 text-ink sm:py-14 md:py-20"
    >
      <div className="container px-5 sm:px-6 md:px-0">
        <Reveal>
          <span
            className="eyebrow"
            style={{
              color: "oklab(0.5 0.118727 0.0741887 / 0.8)",
            }}
          >
            HOW IT WORKS
          </span>

          <h2 className="mt-3 max-w-xl text-3xl leading-tight text-ink sm:text-4xl">
            Four steps{" "}
            <span
              style={{
                color: "oklab(0.5 0.118727 0.0741887 / 0.8)",
              }}
            >
              to done
            </span>
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="
                group
                relative
                min-h-[280px]
                w-full
                rounded-card
                border
                border-ink
                bg-ink
                p-6
                transition-all
                duration-300
                ease-smooth
                hover:-translate-y-2
                hover:bg-[oklab(0.5_0.118727_0.0741887_/_0.8)]
                hover:border-[oklab(0.5_0.118727_0.0741887_/_0.8)]
                hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                sm:min-h-[320px]
                sm:p-8
              "
            >
              {/* Number */}
              <div
                className="
                  font-display
                  uppercase
                  tracking-wide
                  text-3xl
                  text-[oklab(0.5_0.118727_0.0741887_/_0.8)]
                  transition-colors
                  duration-300
                  group-hover:text-paper
                "
              >
                {step.number}
              </div>

              {/* Title */}
              <h3
                className="
                  mt-7
                  text-xl
                  text-paper
                  transition-colors
                  duration-300
                  group-hover:text-paper
                  sm:mt-8
                "
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-3
                  max-w-[300px]
                  text-[15px]
                  leading-relaxed
                  text-paper/60
                  font-sans
                  normal-case
                  transition-colors
                  duration-300
                  group-hover:text-paper
                  sm:mt-4
                "
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}