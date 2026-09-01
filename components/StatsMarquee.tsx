import { Fragment } from "react";

const STATS = [
  { value: "25+", label: "Years milling" },
  { value: "1,000s", label: "Board feet in stock" },
  { value: "Bay Area", label: "Delivery & install" },
  { value: "Custom", label: "Every profile" },
];

export default function StatsMarquee() {
  return (
    <section
      className="border-b border-line bg-ink py-6 md:py-7"
      aria-label="Company statistics"
    >
      <div className="marquee">
        <div className="marquee__inner">
          {[0, 1].map((pass) => (
            <Fragment key={pass}>
              {STATS.map((stat) => (
                <div
                  key={`${pass}-${stat.label}`}
                  className="marquee__item"
                  aria-hidden={pass === 1 ? "true" : undefined}
                >
                  <span className="font-display uppercase tracking-wide text-xl text-paper sm:text-2xl">
                    {stat.value}
                  </span>
                  <span className="text-sm text-paper/50 font-sans normal-case">
                    {stat.label}
                  </span>
                  <span aria-hidden className="text-paper/20">
                    /
                  </span>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
