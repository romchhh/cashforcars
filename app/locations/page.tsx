'use client';

import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function LocationsPage() {
  const locations = [
    {
      city: "Alberta",
      name: "All Alberta Locations",
      address: "AutoDrive Motors locations across Alberta",
      details: "We buy vehicles in Calgary, Edmonton and surrounding areas.",
    },
    {
      city: "Nova Scotia",
      name: "All Nova Scotia Locations",
      address: "AutoDrive Motors locations across Nova Scotia",
      details: "Sell your car quickly around Halifax and nearby communities.",
    },
    {
      city: "New Brunswick",
      name: "All New Brunswick Locations",
      address: "AutoDrive Motors locations across New Brunswick",
      details: "Convenient drop‑off and pick‑up options across the province.",
    },
    {
      city: "Ontario",
      name: "All Ontario Locations",
      address: "AutoDrive Motors locations across Ontario",
      details: "From the GTA to regional cities, we buy vehicles nationwide.",
    },
    {
      city: "Quebec",
      name: "All Quebec Locations",
      address: "AutoDrive Motors locations across Quebec",
      details: "Service available in major urban centres and surrounding areas.",
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
            AutoDrive Motors Locations
          </h1>
          <p
            className="text-base md:text-lg text-center text-[#6F6F6E] max-w-2xl mx-auto mb-10"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            We buy vehicles nationwide across Canada. Explore locations by
            province and find the nearest AutoDrive Motors team ready to make
            you an offer.
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

