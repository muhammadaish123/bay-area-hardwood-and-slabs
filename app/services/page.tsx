import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/ServicesGrid";
import SpeciesStock from "@/components/SpeciesStock";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom live-edge tables, milled decking, siding, flooring, trim, and hardwood lumber & slabs — six things done properly in San Leandro, CA.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar overlay />

      <main>
        <PageHero
          image="/images/flooring-detail.jpg"
          alt="Close-up of hardwood flooring grain"
          label="Hero image — hardwood flooring detail"
          eyebrow="WHAT WE DO"
          heading="Services"
          description="Custom live-edge tables, milled decking, siding, flooring and trim — plus hardwood lumber and slabs, all done under one roof in San Leandro."
        />

        <ServicesGrid />
        <SpeciesStock />
        <FAQ />
        <CTABanner />
      </main>

      <Footer />
    </>
  );
}