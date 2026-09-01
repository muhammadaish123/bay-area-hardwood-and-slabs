import ImagePlaceholder from "./ImagePlaceholder";

type PageHeroProps = {
  image: string;
  alt: string;
  label: string;
  eyebrow: string;
  heading: string;
  description: string;
};

export default function PageHero({
  image,
  alt,
  label,
  eyebrow,
  heading,
  description,
}: PageHeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <ImagePlaceholder
        src={image}
        alt={alt}
        label={label}
        aspect="h-full w-full"
        className="h-full w-full rounded-none object-cover object-center"
        priority
      />

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-ink/60" />

      {/* Top dark gradient behind transparent navbar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/60 to-transparent" />

      {/* Hero content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container flex flex-col items-center text-center">
          <span className="block text-sm font-semibold uppercase tracking-[0.25em] text-[oklab(0.62_0.15_0.09_/_0.98)]">
            {eyebrow}
          </span>

          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] text-paper sm:text-5xl md:text-6xl lg:text-7xl">
            {heading}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper/85 font-sans normal-case md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}