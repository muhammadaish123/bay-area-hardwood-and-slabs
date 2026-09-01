import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsMarquee from "@/components/StatsMarquee";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedWork from "@/components/FeaturedWork";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar overlay />

      <main>
        <Hero />
        <StatsMarquee />
        <WhyChooseUs />
        <FeaturedWork />
        <ProcessSteps />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>

      <Footer />
    </>
  );
}