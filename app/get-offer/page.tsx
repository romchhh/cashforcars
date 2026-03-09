import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetQuoteForm from "../components/GetQuoteForm";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "Get a Cash Offer for Your Car in Under 60 Seconds",
  description:
    "Tell us about your vehicle in the GTA or Northern Ontario and receive a fast, free, no-obligation cash offer with pickup time options.",
  openGraph: {
    title: "Get Your Cash Offer — Free, No Obligation",
    description:
      "Submit quick details about your car and Cash4Cars GTA will send you a same-day cash offer with free towing included.",
    type: "website",
    url: "/get-offer",
  },
  alternates: {
    canonical: "/get-offer",
  },
};

export default function GetOfferPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />

      <main className="pt-28 md:pt-40 pb-16">
        <section className="max-w-[1100px] mx-auto px-4 md:px-0 mb-10 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#222221] mb-3"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            Get Your Cash Offer in Under 60 Seconds
          </h1>
          <p
            className="text-sm md:text-base text-[#6F6F6E] max-w-2xl mx-auto"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            Tell us about your vehicle in the GTA or Northern Ontario and we&apos;ll send you a
            free, no‑obligation cash offer with pickup time options.
          </p>
        </section>

        <GetQuoteForm showHeading={false} />

        {/* Contact CTA */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

