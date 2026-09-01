import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "The team helped us find exactly the right slab and the finished table came out incredible. The craftsmanship was excellent from start to finish.",
    name: "Homeowner",
    project: "Custom live-edge table",
  },
  {
    quote:
      "Great selection of hardwood and very knowledgeable people. They took the time to understand what we needed and helped us choose the right material.",
    name: "Contractor",
    project: "Custom millwork",
  },
  {
    quote:
      "The quality of the wood and the attention to detail were both outstanding. Everything arrived exactly when promised.",
    name: "Designer",
    project: "Residential project",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-line bg-paper py-16 md:py-24">
      <div className="container">
        <Reveal>
          <span
            className="eyebrow"
            style={{
              color: "oklab(0.5 0.118727 0.0741887 / 0.8)",
            }}
          >
            CLIENT TESTIMONIALS
          </span>

          <h2 className="mt-3 max-w-2xl text-3xl text-ink sm:text-4xl">
            What our{" "}
            <span
              style={{
                color: "oklab(0.5 0.118727 0.0741887 / 0.8)",
              }}
            >
              clients say
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <Reveal key={testimonial.name}>
              <article
                className="
                  group
                  relative
                  rounded-card
                  border
                  border-line
                  bg-paper
                  p-6
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-2
                  hover:scale-[1.02]
                  hover:shadow-[0_14px_30px_rgba(0,0,0,0.14)]
                  hover:z-10
                "
              >
                <div
                  className="
                    text-4xl
                    leading-none
                    text-[oklab(0.5_0.118727_0.0741887_/_0.8)]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    group-hover:-translate-y-1
                  "
                >
                  “
                </div>

                <p
                  className="
                    mt-5
                    text-base
                    leading-relaxed
                    text-ink/70
                    font-sans
                    normal-case
                    transition-colors
                    duration-300
                    group-hover:text-ink
                  "
                >
                  {testimonial.quote}
                </p>

                <div className="mt-8 border-t border-line pt-5">
                  <p className="font-medium text-ink">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-sm text-ink/50 font-sans normal-case">
                    {testimonial.project}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}