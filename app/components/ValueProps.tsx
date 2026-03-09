import {
  CheckCircle2,
  CarFront,
  AlertTriangle,
  ShieldOff,
  Wrench,
  Gauge,
} from "lucide-react";

export default function ValueProps() {
  return (
    <section className="max-w-[1100px] mx-auto px-4 md:px-0 py-12 md:py-16">
      <div>
        {/* Value proposition */}
        <div className="mb-10 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#022C22]"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            Why Drivers Choose Cash4Cars GTA
          </h2>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#059669] mt-1" />
              <div>
                <p
                  className="text-sm md:text-base font-semibold text-[#222221]"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  Skip the hassle of private sales
                </p>
                <p
                  className="text-xs md:text-sm text-[#6F6F6E] mt-1"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  No listings, no viewings, no negotiations — just a simple quote and fast pickup.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CarFront className="w-6 h-6 text-[#059669] mt-1" />
              <div>
                <p
                  className="text-sm md:text-base font-semibold text-[#222221]"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  Fair offers for almost any condition
                </p>
                <p
                  className="text-xs md:text-sm text-[#6F6F6E] mt-1"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  Used, damaged, non‑running and scrap vehicles — we price based on true market value.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Wrench className="w-6 h-6 text-[#059669] mt-1" />
              <div>
                <p
                  className="text-sm md:text-base font-semibold text-[#222221]"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  Free towing across the GTA
                </p>
                <p
                  className="text-xs md:text-sm text-[#6F6F6E] mt-1"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  We come to your driveway, parking spot or repair shop — pickup is always included.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Gauge className="w-6 h-6 text-[#059669] mt-1" />
              <div>
                <p
                  className="text-sm md:text-base font-semibold text-[#222221]"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  Same‑day payment, paperwork handled
                </p>
                <p
                  className="text-xs md:text-sm text-[#6F6F6E] mt-1"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  We bring the documents, you bring the keys — you get paid on the spot and we file the paperwork.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust section */}
        <div className="mt-4 mb-12">
          <p
            className="text-[#6F6F6E] text-xs font-semibold mb-3 tracking-[0.2em] uppercase text-center"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            Why people trust us
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              "Transparent, no‑pressure offers",
              "Licensed & insured buyers",
              "Clear pricing, no hidden fees",
              "Local GTA team, real support",
            ].map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-[#D1FAE5] bg-[#ECFDF5] px-4 py-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                <span
                  className="text-xs md:text-sm font-semibold text-[#065F46]"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Types of cars we buy */}
        <div>
          <p
            className="text-[#6F6F6E] text-xs font-semibold mb-2 tracking-[0.2em] uppercase"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            Types of Cars We Buy
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="flex items-center gap-3 bg-[#ECFDF5] rounded-2xl px-4 py-3">
              <CarFront className="w-6 h-6 text-[#047857]" />
              <span
                className="text-sm font-semibold text-[#222221]"
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                Used cars
              </span>
            </div>
            <div className="flex items-center gap-3 bg-[#FEF2F2] rounded-2xl px-4 py-3">
              <AlertTriangle className="w-6 h-6 text-[#B91C1C]" />
              <span
                className="text-sm font-semibold text-[#222221]"
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                Accident vehicles
              </span>
            </div>
            <div className="flex items-center gap-3 bg-[#ECFDF5] rounded-2xl px-4 py-3">
              <ShieldOff className="w-6 h-6 text-[#047857]" />
              <span
                className="text-sm font-semibold text-[#222221]"
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                Scrap cars
              </span>
            </div>
            <div className="flex items-center gap-3 bg-[#ECFDF5] rounded-2xl px-4 py-3">
              <Wrench className="w-6 h-6 text-[#047857]" />
              <span
                className="text-sm font-semibold text-[#222221]"
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                Non‑running vehicles
              </span>
            </div>
            <div className="flex items-center gap-3 bg-[#ECFDF5] rounded-2xl px-4 py-3">
              <Wrench className="w-6 h-6 text-[#047857]" />
              <span
                className="text-sm font-semibold text-[#222221]"
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                Engine problems
              </span>
            </div>
            <div className="flex items-center gap-3 bg-[#ECFDF5] rounded-2xl px-4 py-3">
              <Gauge className="w-6 h-6 text-[#047857]" />
              <span
                className="text-sm font-semibold text-[#222221]"
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                High‑mileage cars
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

