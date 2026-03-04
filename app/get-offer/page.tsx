"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import GetQuoteForm from "../components/GetQuoteForm";
import Contact from "../components/Contact";

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
            Get A Quote For Your Car
          </h1>
          <p
            className="text-sm md:text-base text-[#6F6F6E] max-w-2xl mx-auto"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            All fields are required — share a few details about your vehicle and
            we&apos;ll get back with a tailored offer.
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

