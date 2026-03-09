import {
  CheckCircle2,
  CarFront,
  AlertTriangle,
  ShieldOff,
  Wrench,
  Gauge,
  ShieldCheck,
  FileCheck,
  DollarSign,
} from "lucide-react";

const VALUE_ITEMS = [
  {
    icon: CheckCircle2,
    title: "Skip the hassle of private sales",
    description:
      "No listings, no viewings, no negotiations — just a simple quote and fast pickup.",
  },
  {
    icon: DollarSign,
    title: "Fair offers for almost any condition",
    description:
      "Used, damaged, non‑running and scrap vehicles — we price based on true market value.",
  },
  {
    icon: CarFront,
    title: "Free towing across the GTA",
    description:
      "We come to your driveway, parking spot or repair shop — pickup is always included.",
  },
  {
    icon: FileCheck,
    title: "Same‑day payment, paperwork handled",
    description:
      "We bring the documents, you bring the keys — you get paid on the spot and we file the paperwork.",
  },
];

const TRUST_ITEMS = [
  "Transparent, no‑pressure offers",
  "Licensed & insured buyers",
  "Clear pricing, no hidden fees",
  "Local GTA team, real support",
];

const CAR_TYPES = [
  { icon: CarFront, label: "Used cars" },
  { icon: AlertTriangle, label: "Accident vehicles" },
  { icon: ShieldOff, label: "Scrap cars" },
  { icon: Wrench, label: "Non‑running vehicles" },
  { icon: Wrench, label: "Engine problems" },
  { icon: Gauge, label: "High‑mileage cars" },
];

export default function ValueProps() {
  return (
    <section className="max-w-[1100px] mx-auto px-4 md:px-0 py-16 md:py-20">
      {/* Main heading */}
      <header className="text-center mb-12 md:mb-16">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#222221] mb-3"
          style={{ fontFamily: "Corbel, sans-serif" }}
        >
          Why Drivers Choose Cash4Cars GTA
        </h2>
        <p
          className="text-base md:text-lg text-[#6F6F6E] max-w-2xl mx-auto"
          style={{ fontFamily: "Corbel, sans-serif" }}
        >
          A straightforward way to sell your car for cash — no hassle, no hidden fees.
        </p>
      </header>

      {/* Value proposition cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-14 md:mb-16">
        {VALUE_ITEMS.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex gap-4 p-5 md:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-200"
          >
            <div className="flex-shrink-0 text-emerald-600">
              <Icon className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <h3
                className="text-base md:text-lg font-semibold text-[#222221] mb-1.5"
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                {title}
              </h3>
              <p
                className="text-sm text-[#6F6F6E] leading-relaxed"
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Trust badges */}
      <div className="mb-14 md:mb-16">
        <p
          className="text-[#6F6F6E] text-xs font-semibold mb-4 tracking-[0.2em] uppercase text-center"
          style={{ fontFamily: "Corbel, sans-serif" }}
        >
          Why people trust us
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-4 py-2.5 text-emerald-800"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span
                className="text-sm font-medium"
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
          className="text-[#6F6F6E] text-xs font-semibold mb-4 tracking-[0.2em] uppercase text-center"
          style={{ fontFamily: "Corbel, sans-serif" }}
        >
          Types of Cars We Buy
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {CAR_TYPES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl bg-gray-50 border border-gray-100 px-4 py-3.5 hover:bg-emerald-50/50 hover:border-emerald-100 transition-colors"
            >
              <Icon className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span
                className="text-sm font-semibold text-[#222221]"
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
