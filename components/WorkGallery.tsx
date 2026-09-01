import ImagePlaceholder from "./ImagePlaceholder";
import Reveal from "./Reveal";

const PHONE = "510-813-4952";

const WORK_IMAGES = [
  {
    alt: "Live-edge walnut dining table with matching bench",
    label: "Live-edge walnut table & bench",
    aspect: "aspect-[4/5]",
    span: "sm:row-span-2",
    src: "/images/work-table-bench.jpg",
  },
  {
    alt: "Hardwood deck stairs with black steel railing",
    label: "Deck stairs, black steel railing",
    aspect: "aspect-[4/3]",
    span: "",
    src: "/images/work-deck-stairs.jpg",
  },
  {
    alt: "Pair of long hardwood dining tables with benches",
    label: "Pair of long dining tables",
    aspect: "aspect-[4/3]",
    span: "",
    src: "/images/service-lumber.jpg",
  },
  {
    alt: "Vertical hardwood siding around a black-framed window",
    label: "Vertical siding, black-framed window",
    aspect: "aspect-[4/3]",
    span: "",
    src: "/images/service-siding.jpg",
  },
  {
    alt: "Tongue-and-groove hardwood flooring milled in the shop",
    label: "Tongue-and-groove flooring",
    aspect: "aspect-[4/3]",
    span: "",
    src: "/images/flooring-detail.jpg",
  },
];

export default function WorkGallery() {
  return (
<section id="work" className="border-b border-line bg-cream py-14 md:py-20">
        <div className="container">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="mt-3 max-w-xl text-3xl sm:text-4xl">
              From slab to installed
            </h2>
          </div>
          <a href={`tel:${PHONE}`} className="btn-secondary shrink-0">
            Start a project
          </a>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {WORK_IMAGES.map((image) => (
            <div key={image.label} className={image.span}>
              <ImagePlaceholder
                src={image.src}
                alt={image.alt}
                label={image.label}
                aspect={image.aspect}
                className="h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
