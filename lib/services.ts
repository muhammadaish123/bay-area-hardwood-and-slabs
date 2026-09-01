export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  heroLabel: string;
  heroImage: string;
  intro: string;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "custom-tables",
    title: "Custom Tables",
    shortDescription:
      "Live-edge walnut slabs on steel or timber bases, finished for a lifetime of dinners.",
    heroLabel: "Custom Tables",
    heroImage: "/images/service-tables.jpg",
    intro:
      "Every table starts with a slab we've hand-picked from our own yard. We match grain and figure across the piece, then build a base — steel, timber, or a hybrid — sized to the room it's going into. The result is a one-of-a-kind dining or conference table finished to hold up to decades of daily use.",
    features: [
      "Live-edge walnut, oak, and other domestic hardwood slabs",
      "Steel, timber, or hybrid bases built to your space",
      "Matching benches and occasional pieces on request",
      "Food-safe, low-sheen finishes built for daily use",
    ],
  },
  {
    slug: "milled-decking",
    title: "Milled Decking",
    shortDescription:
      "Hardwood decking milled to profile, from hidden fastener systems to stair treads.",
    heroLabel: "Milled Decking",
    heroImage: "/images/service-decking.jpg",
    intro:
      "We mill decking to the exact profile your project calls for — face-fastened or hidden-fastener, square edge or eased. Stair treads, fascia, and railing components are run to match, so the whole structure comes off the same batch of lumber with consistent color and grain.",
    features: [
      "Decking milled to custom widths and profiles",
      "Hidden-fastener and grooved-edge options",
      "Matching stair treads, fascia, and railing stock",
      "Weather-ready hardwood species for exterior use",
    ],
  },
  {
    slug: "milled-siding",
    title: "Milled Siding",
    shortDescription:
      "Rain screen, shiplap and tongue-and-groove siding run to your architect's detail.",
    heroLabel: "Milled Siding",
    heroImage: "/images/service-siding.jpg",
    intro:
      "From rain screen to shiplap to tongue-and-groove, we run siding to the exact detail your plans call for. Boards are milled from the same lot of lumber for even color, then packaged to keep grain orientation consistent when it goes up on the wall or ceiling.",
    features: [
      "Rain screen, shiplap, and tongue-and-groove profiles",
      "Vertical or horizontal orientation, run to your spec",
      "Interior ceiling and wall paneling in the same profiles",
      "Milled to your architect's detail drawings",
    ],
  },
  {
    slug: "milled-flooring",
    title: "Milled Flooring",
    shortDescription:
      "Solid and engineered flooring, tongue-and-groove machined in our San Leandro shop.",
    heroLabel: "Milled Flooring",
    heroImage: "/images/service-flooring.jpg",
    intro:
      "Solid and engineered flooring, machined tongue-and-groove in our San Leandro shop. We mill to the width and species you need and can match existing floors for additions and repairs, so new runs blend in rather than stand out.",
    features: [
      "Solid and engineered hardwood flooring",
      "Tongue-and-groove milling in-house",
      "Species and width matching for additions & repairs",
      "Site-finished or prefinished on request",
    ],
  },
  {
    slug: "all-trim-work",
    title: "All Trim Work",
    shortDescription:
      "Casings, jambs, soffits and custom mouldings matched to your species and grain.",
    heroLabel: "All Trim Work",
    heroImage: "/images/service-trim.jpg",
    intro:
      "Casings, jambs, soffits, and custom mouldings, run to match the species and grain of the rest of your project. Because it comes off the same lumber as your flooring, siding, or table, the trim reads as one continuous piece of work rather than an afterthought.",
    features: [
      "Casings, base, and jamb stock milled to order",
      "Custom mouldings run to a profile you supply",
      "Soffit and exterior trim in weather-ready species",
      "Species and grain matched to the rest of the project",
    ],
  },
  {
    slug: "lumber-slabs",
    title: "Lumber & Slabs",
    shortDescription:
      "Kiln-dried hardwood lumber and a standing inventory of wide slabs, sold by the board.",
    heroLabel: "Lumber & Slabs",
    heroImage: "/images/service-lumber.jpg",
    intro:
      "We keep a standing inventory of kiln-dried hardwood lumber and wide slabs, sold by the board to makers, builders, and homeowners. Walk the yard and pick your own board, or tell us what you're building and we'll pull a match.",
    features: [
      "Kiln-dried hardwood lumber, sold by the board foot",
      "Wide live-edge slabs for tables and countertops",
      "Walk-in yard visits by appointment",
      "New loads brought in regularly — call for current stock",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}