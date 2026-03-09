import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "Service Areas — Cash4Cars GTA Locations in the GTA & Northern Ontario",
  description:
    "See where Cash4Cars GTA buys vehicles across the Greater Toronto Area and Northern Ontario, including Toronto, Mississauga, Brampton, Vaughan, North Bay, Sudbury and more.",
  openGraph: {
    title: "Areas We Serve — Cash4Cars GTA Coverage Map",
    description:
      "Check Cash4Cars GTA service coverage across the GTA and Northern Ontario and request a free, no-obligation cash offer for your car.",
    type: "website",
    url: "/locations",
  },
  alternates: {
    canonical: "/locations",
  },
};

export default function LocationsPage() {
  const locations = [
    {
      city: "GTA Core",
      name: "Toronto & North York",
      address: "Cash4Cars GTA coverage across Toronto and North York",
      details: "Fast cash offers, free towing and same‑day pickup available in many neighbourhoods.",
    },
    {
      city: "GTA West",
      name: "Mississauga & Brampton",
      address: "On‑site pickup in Mississauga and Brampton",
      details: "We buy used, damaged and scrap vehicles across the west GTA suburbs.",
    },
    {
      city: "GTA North & East",
      name: "Vaughan, Richmond Hill & Markham",
      address: "Cash‑for‑cars service in York Region",
      details: "Serving Vaughan, Richmond Hill, Markham and surrounding areas with free towing.",
    },
    {
      city: "GTA East",
      name: "Scarborough & Durham",
      address: "Pickup options in Scarborough and nearby communities",
      details: "Sell your car without listings or viewings — we come to you.",
    },
    {
      city: "Northern Ontario",
      name: "North Bay & Sudbury",
      address: "Coverage in North Bay, Sudbury and nearby towns",
      details: "Cash offers and coordinated towing for vehicles in key Northern Ontario cities.",
    },
    {
      city: "Northern Ontario",
      name: "Sault Ste. Marie & Timmins",
      address: "Pickup available in Sault Ste. Marie and Timmins",
      details: "We help you sell non‑running, high‑mileage and scrap cars safely.",
    },
    {
      city: "Northern Ontario",
      name: "Thunder Bay & Area",
      address: "Cash‑for‑cars in Thunder Bay",
      details: "Trusted local buyers and partners coordinate pickup and payment on the spot.",
    },
    {
      city: "Northern Ontario",
      name: "Kapuskasing, Kirkland Lake & Hearst",
      address: "Extended Northern Ontario coverage",
      details: "Tell us where your vehicle is located and we&apos;ll confirm towing options and timing.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="pt-28 md:pt-40 pb-16">
        <section className="max-w-[1100px] mx-auto px-4 md:px-0">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#222221] mb-3 text-center"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            Areas We Serve
          </h1>
          <p
            className="text-base md:text-lg text-center text-[#6F6F6E] max-w-2xl mx-auto mb-10"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            Cash4Cars GTA buys vehicles across the Greater Toronto Area and key cities in Northern
            Ontario. Find your area below and request a free, no‑obligation cash offer.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col"
              >
                <p
                  className="text-xs uppercase tracking-[0.18em] text-[#6F6F6E] mb-2 font-semibold"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  {loc.city}
                </p>
                <h2
                  className="text-xl font-bold text-[#222221] mb-2"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  {loc.name}
                </h2>
                <p
                  className="text-sm text-[#6F6F6E] mb-3"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  {loc.address}
                </p>
                <p
                  className="text-sm text-[#222221]"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  {loc.details}
                </p>
                <div className="mt-5">
                  <Link
                    href="/get-offer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#059669] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#047857] transition-colors"
                    style={{ fontFamily: "Corbel, sans-serif" }}
                  >
                    Get your cash offer
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

