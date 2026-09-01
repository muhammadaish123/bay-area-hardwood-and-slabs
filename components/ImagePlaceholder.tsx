import Image from "next/image";

type ImagePlaceholderProps = {
  /** Path under /public, e.g. "/images/hero.jpg". Leave undefined to render an empty placeholder. */
  src?: string;

  alt: string;

  label: string;

  className?: string;

  /** Tailwind aspect-ratio utility. */
  aspect?: string;

  priority?: boolean;

  sizes?: string;

  /** CSS object-position value, e.g. "center", "center 80%", "bottom". */
  objectPosition?: string;
};

export default function ImagePlaceholder({
  src,
  alt,
  label,
  className = "",
  aspect,
  priority = false,
  sizes = "100vw",
  objectPosition = "center",
}: ImagePlaceholderProps) {
  if (!src) {
    return (
      <div
        className={`img-placeholder ${
          aspect ?? "aspect-[4/3]"
        } ${className}`}
        data-label={label}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-card ${
        aspect ?? ""
      } ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
        style={{
          objectPosition,
        }}
      />
    </div>
  );
}