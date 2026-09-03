import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import VisitShop from "@/components/VisitShop";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Visit Bebewoodwork&sawmills at 653 143rd Ave, San Leandro, CA. Mon–Sat, 8am–5pm. Call 510-813-4952 or send an inquiry.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar overlay />

      <main>
        <PageHero
          image="/images/service-lumber.jpg"
          alt="Kiln-dried hardwood lumber stacked in the yard"
          label="Hero image — hardwood lumber yard"
          eyebrow="GET IN TOUCH"
          heading="Contact Us"
          description="Visit the shop, call ahead, or send us your plans — we're at 653 143rd Ave, San Leandro, Mon–Sat 8am–5pm."
        />

        <VisitShop />

        <FAQ />
      </main>

      <Footer />
    </>
  );
}