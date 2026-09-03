import Reveal from "./Reveal";

export default function OurStory() {
    return (
        <section className="border-b border-line bg-paper py-14 md:py-20">
            <div className="container">
                <Reveal>
                    <span className="eyebrow uppercase tracking-[0.2em] text-[oklab(0.5_0.118727_0.0741887_/_0.8)]">
                        OUR STORY
                    </span>

                    <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
                        Started on the shop floor,{" "}
                        <span className="text-[oklab(0.5_0.118727_0.0741887_/_0.8)]">
                            still there today
                        </span>
                    </h2>

                    <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted font-sans normal-case md:text-lg">
                        Bebewoodwork&amp;sawmills started as a small San Leandro lumberyard
                        and grew into a full milling shop because customers kept asking for
                        more than just boards. Today we source, mill, build and finish
                        everything ourselves — from a single live-edge dining table to a
                        full house of decking, siding, flooring and trim — so nothing gets
                        handed off to someone who didn&apos;t cut the wood.
                    </p>

                    <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted font-sans normal-case md:text-lg">
                        25+ years in, the yard is still stocked by hand, the knives are
                        still set in-house, and every board that leaves the shop has been
                        through our hands more than once.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}