import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of the BebeWoodWork & SawMills website and the services we provide.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar overlay={false} />

      <main className="pt-32 pb-24">
        <div className="container max-w-3xl">
          <span className="eyebrow">Legal</span>
          <h1 className="text-4xl sm:text-5xl">Terms of Service</h1>

          <p className="mt-6 text-sm text-ink/50">
            Last updated: {new Date().getFullYear()}
          </p>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-ink/70">
            <section>
              <h2 className="text-xl">1. Acceptance of Terms</h2>
              <p className="mt-3">
                By using this website, you agree to these Terms of Service.
                If you do not agree, please do not use the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl">2. Use of This Website</h2>
              <p className="mt-3">
                This website is provided for informational purposes,
                including learning about our products and services and
                requesting a quote. You agree not to misuse the site,
                interfere with its operation, or use it for any unlawful
                purpose.
              </p>
            </section>

            <section>
              <h2 className="text-xl">3. Quotes &amp; Estimates</h2>
              <p className="mt-3">
                Any pricing, dimensions, or availability referenced on this
                website are estimates only and are not a binding offer.
                Final pricing, materials, and timelines are confirmed
                directly with you before work begins or a purchase is made.
              </p>
            </section>

            <section>
              <h2 className="text-xl">4. Intellectual Property</h2>
              <p className="mt-3">
                The text, photos, and design of this website belong to Bay
                Area Hardwood &amp; Slabs and may not be copied or reused
                without our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl">5. No Warranty</h2>
              <p className="mt-3">
                This website and its content are provided &quot;as is&quot;
                without warranties of any kind. We do our best to keep
                information accurate and current but do not guarantee that
                every detail on the site is complete or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-xl">6. Limitation of Liability</h2>
              <p className="mt-3">
                To the fullest extent permitted by law, BebeWoodWork
                &amp; SawMills is not liable for any indirect or consequential
                damages arising from your use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl">7. Governing Law</h2>
              <p className="mt-3">
                These terms are governed by the laws of the State of
                California, without regard to conflict-of-law principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl">8. Changes to These Terms</h2>
              <p className="mt-3">
                We may update these terms from time to time. Continued use
                of the site after changes are posted means you accept the
                revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl">9. Contact Us</h2>
              <p className="mt-3">
                Questions about these terms can be sent to us by phone at{" "}
                <a
                  href="tel:510-813-4952"
                  className="underline underline-offset-4"
                >
                  510-813-4952
                </a>{" "}
                or by visiting us at 653 143rd Ave, San Leandro, CA 94578.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}