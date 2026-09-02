import ImagePlaceholder from "./ImagePlaceholder";
import Reveal from "./Reveal";

type FeaturedImage = {
  alt: string;
  label: string;
  src: string;
  objectPosition?: string;
};

const FEATURED_IMAGES: FeaturedImage[] = [
  {
    alt: "Live-edge walnut dining table with matching bench",
    label: "Live-edge walnut table & bench",
    src: "/images/work-table-bench.jpg",
  },
  {
    alt: "Hardwood deck stairs with black steel railing",
    label: "Deck stairs, black steel railing",
    src: "/images/work-deck-stairs.jpg",
  },
  {
    alt: "Custom live-edge walnut slab dining table",
    label: "Custom slab dining table",
    src: "/images/service-tables.jpg",
    objectPosition: "center 85%",
  },
  {
    alt: "Cedar siding installed around a window",
    label: "Cedar siding around window",
    src: "/images/service-siding.jpg",
  },
  {
    alt: "Close-up of finished white oak flooring boards",
    label: "White oak flooring detail",
    src: "/images/service-flooring.jpg",
  },
];

export default function FeaturedWork() {
  return (
    <section className="border-b border-line bg-cream py-14 md:py-20">
      <div className="container">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span
              className="eyebrow"
              style={{
                color: "oklab(0.5 0.118727 0.0741887 / 0.8)",
              }}
            >
              RECENT PROJECTS
            </span>

            <h2 className="mt-3 max-w-xl text-3xl sm:text-4xl">
              A few{" "}
              <span
                style={{
                  color: "oklab(0.5 0.118727 0.0741887 / 0.8)",
                }}
              >
                favorites
              </span>
            </h2>
          </div>

          <a
            href="/about#work"
            className="btn-secondary shrink-0 transition-colors duration-300 hover:bg-[oklab(0.5_0.118727_0.0741887_/_0.8)] hover:text-white"
          >
            View Services
          </a>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:grid-rows-[198px_198px]">
          {FEATURED_IMAGES.map((image, index) => (
            <div
              key={image.label}
              className={`min-w-0 overflow-hidden ${
                index === 0
                  ? "h-[280px] sm:h-auto sm:row-span-2"
                  : "h-[220px] sm:h-auto"
              }`}
            >
              <ImagePlaceholder
                src={image.src}
                alt={image.alt}
                label={image.label}
                objectPosition={image.objectPosition}
                className="h-full w-full rounded-none object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}