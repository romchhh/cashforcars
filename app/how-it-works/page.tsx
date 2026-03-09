import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "How It Works — 4 Simple Steps to Sell Your Car for Cash",
  description:
    "See how Cash4Cars GTA works in four simple steps: request an offer, receive your quote, schedule pickup and get paid on the spot.",
  openGraph: {
    title: "How Cash4Cars GTA Works — From Offer to Pickup",
    description:
      "Understand the full Cash4Cars GTA process, from sharing your vehicle details to same-day pickup and instant cash payment.",
    type: "website",
    url: "/how-it-works",
  },
  alternates: {
    canonical: "/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="pt-28 md:pt-40 pb-16">
        <section className="max-w-[1000px] mx-auto px-4 md:px-0">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#222221] mb-4 text-center"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            How It Works
          </h1>

          <p
            className="text-base md:text-lg text-center text-[#6F6F6E] mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            This page is simple: four clear steps from request to payment.
          </p>

          <div className="relative">
            {/* vertical connector line on desktop */}
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 pointer-events-none">
              <div className="w-0.5 h-full bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-200 rounded-full" />
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              {/* Step 1 */}
              <div className="relative bg-white/90 backdrop-blur rounded-3xl shadow-lg border border-emerald-50 p-6 md:p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="h-11 w-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-lg font-bold shadow-[0_10px_25px_rgba(4,120,87,0.35)]">
                      1
                    </div>
                    <div className="absolute inset-0 rounded-2xl border border-white/60" />
                  </div>
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700"
                    style={{ fontFamily: "Corbel, sans-serif" }}
                  >
                    Start here
                  </span>
                </div>
                <h2
                  className="text-xl md:text-2xl font-bold text-[#222221] mb-2"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  Step 1 – Request an Offer
                </h2>
                <p
                  className="text-sm md:text-base text-[#6F6F6E] mb-3"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  Submit your vehicle information online — it takes less than a minute.
                </p>
                <p
                  className="text-xs md:text-sm text-[#9CA3AF]"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  Tell us your make, model, year, mileage and overall condition so we can prepare an accurate offer.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative bg-white/90 backdrop-blur rounded-3xl shadow-lg border border-emerald-50 p-6 md:p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="h-11 w-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-lg font-bold shadow-[0_10px_25px_rgba(4,120,87,0.35)]">
                      2
                    </div>
                    <div className="absolute inset-0 rounded-2xl border border-white/60" />
                  </div>
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700"
                    style={{ fontFamily: "Corbel, sans-serif" }}
                  >
                    Get your quote
                  </span>
                </div>
                <h2
                  className="text-xl md:text-2xl font-bold text-[#222221] mb-2"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  Step 2 – Receive a Quote
                </h2>
                <p
                  className="text-sm md:text-base text-[#6F6F6E] mb-3"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  Our team reviews the details and sends you a no-obligation cash offer.
                </p>
                <p
                  className="text-xs md:text-sm text-[#9CA3AF]"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  You&apos;ll see exactly how much you can get for your vehicle — no hidden fees or last‑minute changes.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative bg-white/90 backdrop-blur rounded-3xl shadow-lg border border-emerald-50 p-6 md:p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="h-11 w-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-lg font-bold shadow-[0_10px_25px_rgba(4,120,87,0.35)]">
                      3
                    </div>
                    <div className="absolute inset-0 rounded-2xl border border-white/60" />
                  </div>
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700"
                    style={{ fontFamily: "Corbel, sans-serif" }}
                  >
                    Schedule pickup
                  </span>
                </div>
                <h2
                  className="text-xl md:text-2xl font-bold text-[#222221] mb-2"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  Step 3 – Schedule Pickup
                </h2>
                <p
                  className="text-sm md:text-base text-[#6F6F6E] mb-3"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  Choose a pickup time and location that works best for you.
                </p>
                <p
                  className="text-xs md:text-sm text-[#9CA3AF]"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  We come to your home, workplace or storage lot anywhere within our service area.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative bg-white/90 backdrop-blur rounded-3xl shadow-lg border border-emerald-50 p-6 md:p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="h-11 w-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-lg font-bold shadow-[0_10px_25px_rgba(4,120,87,0.35)]">
                      4
                    </div>
                    <div className="absolute inset-0 rounded-2xl border border-white/60" />
                  </div>
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700"
                    style={{ fontFamily: "Corbel, sans-serif" }}
                  >
                    Get paid
                  </span>
                </div>
                <h2
                  className="text-xl md:text-2xl font-bold text-[#222221] mb-2"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  Step 4 – Get Paid
                </h2>
                <p
                  className="text-sm md:text-base text-[#6F6F6E] mb-3"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  We pick up your vehicle and pay you on the spot.
                </p>
                <p
                  className="text-xs md:text-sm text-[#9CA3AF]"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  You hand over the keys and paperwork — we handle the towing and you&apos;re done.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
