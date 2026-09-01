import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import OurStory from "@/components/OurStory";
import OurServices from "@/components/OurServices";
import ProcessSteps from "@/components/ProcessSteps";
import OurValues from "@/components/OurValues";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "25+ years milling hardwood in San Leandro, CA — our approach, selected work, and what clients say about Bay Area Hardwood & Slabs.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar overlay />

      <main>
        <PageHero
          image="/images/work-deck-stairs.jpg"
          alt="Finished hardwood deck and stairs built by Bay Area Hardwood & Slabs"
          label="Hero image — finished deck and stairs"
          eyebrow="Our Story"
          heading="About Us"
          description="25+ years milling hardwood in San Leandro — here's how we work, what we've built, and what clients say about it."
        />

        <OurStory />
        <OurServices />
        <ProcessSteps />
        <OurValues />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}