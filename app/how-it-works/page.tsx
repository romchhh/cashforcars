import type { Metadata } from "next";
import { CarFront, FileCheck, Truck, Wallet } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const iconClass = "w-8 h-8 md:w-10 md:h-10 text-emerald-600";

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
            {/* Arrow icon components */}
            <svg className="hidden" aria-hidden>
              <defs>
                <symbol id="arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </symbol>
                <symbol id="arrow-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </symbol>
              </defs>
            </svg>

            <div className="flex flex-col gap-6 md:gap-8 items-stretch max-w-2xl mx-auto">
              {/* Step 1 */}
              <div className="relative bg-white/90 backdrop-blur rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8 flex flex-col">
                <div className="flex flex-col mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl md:text-4xl font-bold text-emerald-600" style={{ fontFamily: "Corbel, sans-serif" }}>
                      1
                    </span>
                    <CarFront className={iconClass} strokeWidth={1.8} />
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700"
                      style={{ fontFamily: "Corbel, sans-serif" }}
                    >
                      Start here
                    </span>
                  </div>
                  <div className="h-1 w-16 bg-emerald-500 rounded-full mt-3" />
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

              {/* Arrow down */}
              <div className="flex justify-center py-2 text-emerald-500" aria-hidden>
                <svg className="w-6 h-6 md:w-8 md:h-8" aria-hidden><use href="#arrow-down" /></svg>
              </div>

              {/* Step 2 */}
              <div className="relative bg-white/90 backdrop-blur rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8 flex flex-col">
                <div className="flex flex-col mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl md:text-4xl font-bold text-emerald-600" style={{ fontFamily: "Corbel, sans-serif" }}>
                      2
                    </span>
                    <FileCheck className={iconClass} strokeWidth={1.8} />

                  </div>
                  <div className="h-1 w-16 bg-emerald-500 rounded-full mt-3" />
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

              {/* Arrow down */}
              <div className="flex justify-center py-2 text-emerald-500" aria-hidden>
                <svg className="w-6 h-6 md:w-8 md:h-8" aria-hidden><use href="#arrow-down" /></svg>
              </div>

              {/* Step 3 */}
              <div className="relative bg-white/90 backdrop-blur rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8 flex flex-col">
                <div className="flex flex-col mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl md:text-4xl font-bold text-emerald-600" style={{ fontFamily: "Corbel, sans-serif" }}>
                      3
                    </span>
                    <Truck className={iconClass} strokeWidth={1.8} />

                  </div>
                  <div className="h-1 w-16 bg-emerald-500 rounded-full mt-3" />
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

              {/* Arrow down */}
              <div className="flex justify-center py-2 text-emerald-500" aria-hidden>
                <svg className="w-6 h-6 md:w-8 md:h-8" aria-hidden><use href="#arrow-down" /></svg>
              </div>

              {/* Step 4 */}
              <div className="relative bg-white/90 backdrop-blur rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8 flex flex-col">
                <div className="flex flex-col mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl md:text-4xl font-bold text-emerald-600" style={{ fontFamily: "Corbel, sans-serif" }}>
                      4
                    </span>
                    <Wallet className={iconClass} strokeWidth={1.8} />
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700"
                      style={{ fontFamily: "Corbel, sans-serif" }}
                    >
                      Get paid
                    </span>
                  </div>
                  <div className="h-1 w-16 bg-emerald-500 rounded-full mt-3" />
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
