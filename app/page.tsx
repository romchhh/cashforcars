'use client';

import Hero from "./components/Hero";
import GetQuoteForm from "./components/GetQuoteForm";
import Services from "./components/Services";
import About from "./components/About";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ValueProps from "./components/ValueProps";

export default function Home() {
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Cash4Cars GTA",
    url: "https://cash4cars-gta.example.com",
    description:
      "Cash4Cars GTA buys used, damaged and scrap vehicles across the Greater Toronto Area and Northern Ontario with free towing and on-the-spot cash payment.",
    areaServed: [
      "Toronto",
      "Mississauga",
      "Brampton",
      "Vaughan",
      "Markham",
      "Richmond Hill",
      "Scarborough",
      "North Bay",
      "Sudbury",
      "Thunder Bay",
    ],
    serviceType: [
      "Cash for cars",
      "Scrap car removal",
      "Junk car removal",
      "Damaged car buying",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <Header />

        <Hero />
        <div className="relative z-50 mt-6 md:-mt-32 mb-16">
          <GetQuoteForm />
        </div>
        <ValueProps />
        <About />
        <FAQs />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}