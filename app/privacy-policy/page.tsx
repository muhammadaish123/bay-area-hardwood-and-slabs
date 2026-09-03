import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How BebeWoodWork & SawMills collects, uses, and protects information submitted through our website.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar overlay={false} />

      <main className="pt-32 pb-24">
        <div className="container max-w-3xl">
          <span className="eyebrow">Legal</span>
          <h1 className="text-4xl sm:text-5xl">Privacy Policy</h1>

          <p className="mt-6 text-sm text-ink/50">
            Last updated: {new Date().getFullYear()}
          </p>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-ink/70">
            <section>
              <h2 className="text-xl">1. Introduction</h2>
              <p className="mt-3">
                BebeWoodWork &amp; SawMills (&quot;we,&quot; &quot;us,&quot;
                or &quot;our&quot;) respects your privacy. This policy
                explains what information we collect through this website,
                how we use it, and the choices you have.
              </p>
            </section>

            <section>
              <h2 className="text-xl">2. Information We Collect</h2>
              <p className="mt-3">
                When you use our contact form, call us, or otherwise reach
                out, we may collect your name, phone number, email address,
                mailing address, and any project details you choose to
                share. We may also collect basic technical information, such
                as browser type and pages visited, through standard website
                analytics.
              </p>
            </section>

            <section>
              <h2 className="text-xl">3. How We Use Information</h2>
              <p className="mt-3">We use the information we collect to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Respond to inquiries and prepare quotes</li>
                <li>Schedule visits, deliveries, and project work</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-3">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl">4. Sharing of Information</h2>
              <p className="mt-3">
                We may share information with service providers who help us
                operate our business (such as email or hosting providers),
                or when required to do so by law. These providers are only
                permitted to use your information to perform services on
                our behalf.
              </p>
            </section>

            <section>
              <h2 className="text-xl">5. Data Retention</h2>
              <p className="mt-3">
                We retain information for as long as reasonably necessary to
                fulfill the purposes described in this policy, unless a
                longer retention period is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl">6. Your Choices</h2>
              <p className="mt-3">
                You may contact us at any time to ask what information we
                hold about you, request a correction, or request that we
                delete it, subject to any legal or business record-keeping
                requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl">7. Changes to This Policy</h2>
              <p className="mt-3">
                We may update this policy from time to time. The
                &quot;last updated&quot; date above reflects the most recent
                revision.
              </p>
            </section>

            <section>
              <h2 className="text-xl">8. Contact Us</h2>
              <p className="mt-3">
                Questions about this policy can be sent to us by phone at{" "}
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
