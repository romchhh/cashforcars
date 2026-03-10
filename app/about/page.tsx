import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import GetQuoteForm from "../components/GetQuoteForm";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "About Cash4Cars GTA — Local Car Buyers You Can Trust",
  description:
    "Learn how Cash4Cars GTA helps drivers across the Greater Toronto Area and Northern Ontario sell used, damaged and scrap vehicles quickly, safely and for a fair price.",
  openGraph: {
    title: "About Cash4Cars GTA — Local Car Buyers You Can Trust",
    description:
      "Toronto-based cash-for-cars service providing fast cash offers, free towing and safe paperwork for used, damaged and scrap vehicles.",
    type: "website",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />

      <main className="pt-28 md:pt-40 pb-16">
        {/* Hero / Intro */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-0 mb-10 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#222221] mb-3 leading-tight"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            Local Car Buyers
            <br />
            You Can Trust
          </h1>
          <p
            className="text-sm md:text-base text-[#6F6F6E] max-w-2xl mx-auto"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            Cash4Cars GTA is a Toronto‑based cash‑for‑cars service helping drivers across the GTA
            and Northern Ontario sell used, damaged and scrap vehicles quickly, safely and for a
            fair price.
          </p>
        </section>

        {/* Main about content block (reuses site About section) */}
        <About />

        {/* Inline quote form on about page */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-0">
          <GetQuoteForm />
        </section>

        {/* Contact CTA */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
