"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import GetQuoteForm from "../components/GetQuoteForm";
import Steps from "../components/Steps";
import Contact from "../components/Contact";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />

      <main className="pt-28 md:pt-40 pb-16">
        {/* Hero / Intro */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-0 mb-10 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#222221] mb-3"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            About AutoDrive Motors
          </h1>
          <p
            className="text-sm md:text-base text-[#6F6F6E] max-w-2xl mx-auto"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            We are a full‑service automotive hub helping drivers sell their
            current car and discover their next one with confidence — from
            valuation to keys in hand.
          </p>
        </section>

        {/* Main about content block (reuses site About section) */}
        <About />

        {/* 3‑step process block */}
        <Steps />

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
