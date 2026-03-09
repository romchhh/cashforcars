'use client';

import { useState } from "react";
import type { FormEvent } from "react";
import modelsData from "../../models.json";

const YEARS = Array.from({ length: 46 }, (_, i) => 2026 - i);

type CarModel = { value: string; title: string };
type CarMake = { value: string; title: string; models: CarModel[] };

const MAKES = modelsData as CarMake[];

const ODOMETER_RANGES = [
  "0 - 25,000 KM",
  "25,001 - 50,000 KM",
  "50,001 - 75,000 KM",
  "75,001 - 100,000 KM",
  "100,001 - 150,000 KM",
  "150,001 - 200,000 KM",
  "200,001 - 250,000 KM",
  "250,001 - 300,000 KM",
  "300,001+ KM",
];

const DRIVABILITY = [
  "Starts and drives",
  "Starts but does not drive",
  "Does not start",
];

const COUNTRY_CODES = ["+1"];

interface GetQuoteFormProps {
  showHeading?: boolean;
}

export default function GetQuoteForm({ showHeading = true }: GetQuoteFormProps) {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [odometer, setOdometer] = useState("");
  const [drivability, setDrivability] = useState("");
  const [firstName, setFirstName] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [postal, setPostal] = useState("");
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const selectedMake = MAKES.find((m) => m.value === make);
  const models: CarModel[] = selectedMake?.models ?? [];

  const validateVehicle = () => {
    const e: Record<string, boolean> = {};
    if (!year) e.year = true;
    if (!make) e.make = true;
    if (!model) e.model = true;
    if (!odometer) e.odometer = true;
    if (!drivability) e.drivability = true;
    return e;
  };

  const validateContact = () => {
    const e: Record<string, boolean> = {};
    if (!firstName.trim()) e.firstName = true;
    if (!phone.trim()) e.phone = true;
    if (!postal.trim()) e.postal = true;
    return e;
  };

  const handleNext = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const vehicleErrors = validateVehicle();
    setErrors(vehicleErrors);
    if (Object.keys(vehicleErrors).length === 0) {
      setShowContact(true);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const vehicleErrors = validateVehicle();
    const contactErrors = validateContact();
    const mergedErrors = { ...vehicleErrors, ...contactErrors };
    setErrors(mergedErrors);
    if (Object.keys(mergedErrors).length > 0) {
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError(null);

      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          year,
          make,
          model,
          odometer,
          drivability,
          firstName,
          countryCode,
          phone,
          postal,
          sourcePath: window.location.pathname,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Failed to submit quote");
      }

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to submit quote";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    "w-full px-4 py-3.5 rounded-lg border text-sm md:text-base bg-white/90 text-[#222221] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-all";

  const errorBorder = "border-red-500";
  const normalBorder = "border-[#E5E7EB]";

  const handlePhoneChange = (value: string) => {
    setPhone(value);
  };

  const cardClasses = showHeading
    ? "bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-[0_24px_80px_rgba(15,23,42,0.35)] border border-[#10B981]/60 ring-1 ring-[#10B981]/25 p-6 md:p-10"
    : "bg-white rounded-[2rem] shadow-2xl border border-[#E5E7EB] p-6 md:p-10";

  return (
    <section className="max-w-[1100px] mx-auto px-4 md:px-0">
      <div className={cardClasses}>
        {showHeading && (
          <header className="mb-8 text-center">
            <h2
              className="text-3xl md:text-[2.5rem] font-bold text-[#222221] mb-2"
              style={{ fontFamily: "Corbel, sans-serif" }}
            >
              Get Your Cash Offer in Under 60 Seconds
            </h2>
            <p
              className="text-sm md:text-base text-[#6F6F6E] max-w-2xl mx-auto"
              style={{ fontFamily: "Corbel, sans-serif" }}
            >
              Tell us about your vehicle in the GTA or Northern Ontario and we&apos;ll send you a
              free, no‑obligation cash offer with pickup time options.
            </p>
          </header>
        )}

        <form
          onSubmit={showContact ? handleSubmit : handleNext}
          className="space-y-10"
        >
          {/* Vehicle details */}
          <div>
            <h3
              className="text-xl md:text-2xl font-bold text-[#222221] mb-2"
              style={{ fontFamily: "Corbel, sans-serif" }}
            >
              Vehicle Details
            </h3>
            <p
              className="text-sm text-[#6F6F6E] mb-6"
              style={{ fontFamily: "Corbel, sans-serif" }}
            >
              Get Your Cash Offer in Under 60 Seconds. Tell us about your vehicle in the GTA or
              Northern Ontario and we&apos;ll send you a free, no‑obligation cash offer with pickup
              time options.
            </p>

            {/* Year / Make / Model */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div>
                <label
                  className="block text-xs font-semibold text-[#6F6F6E] mb-2 uppercase tracking-[0.16em]"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  Vehicle Year
                </label>
                <select
                  value={year}
                  onChange={(ev) => {
                    setYear(ev.target.value);
                    setModel("");
                  }}
                  className={`${inputBase} ${
                    errors.year ? errorBorder : normalBorder
                  }`}
                >
                  <option value="">Select Year</option>
                  {YEARS.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
                {errors.year && (
                  <p className="text-xs text-red-500 mt-1">Required</p>
                )}
              </div>

              <div>
                <label
                  className="block text-xs font-semibold text-[#6F6F6E] mb-2 uppercase tracking-[0.16em]"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  Vehicle Make
                </label>
                <select
                  value={make}
                  onChange={(ev) => {
                    setMake(ev.target.value);
                    setModel("");
                  }}
                  className={`${inputBase} ${
                    errors.make ? errorBorder : normalBorder
                  }`}
                >
                  <option value="">Select Make</option>
                  {MAKES.map((m) => (
                    <option key={m.value} value={m.value}>
                      {m.title}
                    </option>
                  ))}
                </select>
                {errors.make && (
                  <p className="text-xs text-red-500 mt-1">Required</p>
                )}
              </div>

              <div>
                <label
                  className="block text-xs font-semibold text-[#6F6F6E] mb-2 uppercase tracking-[0.16em]"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  Vehicle Model
                </label>
                <select
                  value={model}
                  onChange={(ev) => setModel(ev.target.value)}
                  disabled={!make}
                  className={`${inputBase} ${
                    errors.model ? errorBorder : normalBorder
                  } ${!make ? "bg-gray-50 text-gray-400" : ""}`}
                >
                  <option value="">Select Model</option>
                  {models.map((m) => (
                    <option key={m.value} value={m.value}>
                      {m.title}
                    </option>
                  ))}
                </select>
                {errors.model && (
                  <p className="text-xs text-red-500 mt-1">Required</p>
                )}
              </div>
            </div>

            {/* Odometer / Drivability */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4">
              <div>
                <label
                  className="block text-xs font-semibold text-[#6F6F6E] mb-2 uppercase tracking-[0.16em]"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  Odometer
                </label>
                <select
                  value={odometer}
                  onChange={(ev) => setOdometer(ev.target.value)}
                  className={`${inputBase} ${
                    errors.odometer ? errorBorder : normalBorder
                  }`}
                >
                  <option value="">
                    Select Odometer Reading range (in Km)
                  </option>
                  {ODOMETER_RANGES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                {errors.odometer && (
                  <p className="text-xs text-red-500 mt-1">Required</p>
                )}
              </div>

              <div>
                <label
                  className="block text-xs font-semibold text-[#6F6F6E] mb-2 uppercase tracking-[0.16em]"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  Drivability
                </label>
                <select
                  value={drivability}
                  onChange={(ev) => setDrivability(ev.target.value)}
                  className={`${inputBase} ${
                    errors.drivability ? errorBorder : normalBorder
                  }`}
                >
                  <option value="">Select Drivability</option>
                  {DRIVABILITY.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                {errors.drivability && (
                  <p className="text-xs text-red-500 mt-1">Required</p>
                )}
              </div>
            </div>
          </div>

          {showContact && (
            <>
              <div className="border-t border-[#E5E7EB]/80" />

              {/* Personal details */}
              <div>
                <h3
                  className="text-xl md:text-2xl font-bold text-[#222221] mb-2"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  Your Contact Details
                </h3>
                <p
                  className="text-sm text-[#6F6F6E] mb-6"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  We&apos;ll use this information to send your quote and clarify
                  any details about your car.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label
                      className="block text-xs font-semibold text-[#6F6F6E] mb-2 uppercase tracking-[0.16em]"
                      style={{ fontFamily: "Corbel, sans-serif" }}
                    >
                      Your First Name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(ev) => setFirstName(ev.target.value)}
                      placeholder="Enter First Name"
                      className={`${inputBase} ${
                        errors.firstName ? errorBorder : normalBorder
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-xs text-red-500 mt-1">Required</p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold text-[#6F6F6E] mb-2 uppercase tracking-[0.16em]"
                      style={{ fontFamily: "Corbel, sans-serif" }}
                    >
                      Your Phone Number
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={countryCode}
                        onChange={(ev) => setCountryCode(ev.target.value)}
                        className={`${inputBase} ${normalBorder} w-16 md:w-20 flex-none text-xs md:text-sm px-3`}
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={phone}
                        onChange={(ev) => handlePhoneChange(ev.target.value)}
                        placeholder="50 000 0000"
                        className={`${inputBase} flex-1 ${
                          errors.phone ? errorBorder : normalBorder
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1">Required</p>
                    )}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label
                      className="block text-xs font-semibold text-[#6F6F6E] mb-2 uppercase tracking-[0.16em]"
                      style={{ fontFamily: "Corbel, sans-serif" }}
                    >
                      Your Postal Code
                    </label>
                    <input
                      type="text"
                      value={postal}
                      onChange={(ev) => setPostal(ev.target.value)}
                      placeholder="Enter Postal Code"
                      className={`${inputBase} ${
                        errors.postal ? errorBorder : normalBorder
                      }`}
                    />
                    {errors.postal && (
                      <p className="text-xs text-red-500 mt-1">Required</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <p
                  className="text-xs text-[#9CA3AF] max-w-xl"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  By submitting this form, you agree to be contacted by Cash4Cars GTA with
                  information about your cash offer and to arrange vehicle pickup.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center px-10 py-3.5 rounded-lg bg-[#059669] hover:bg-[#047857] disabled:bg-[#6EE7B7] disabled:cursor-not-allowed text-white text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  {isSubmitting ? "Sending..." : "Get Quote Now"}
                </button>
              </div>
            </>
          )}

          {!showContact && (
            <div className="pt-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p
                className="text-xs text-[#9CA3AF] max-w-xl"
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                Start with your vehicle details. Next, we&apos;ll ask for your contact info so we
                can confirm your cash offer and schedule pickup.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-10 py-3.5 rounded-lg bg-[#059669] hover:bg-[#047857] text-white text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                Continue
              </button>
            </div>
          )}

          {submitError && (
            <div className="mt-4 rounded-lg border border-red-500/40 bg-red-50 px-4 py-3 text-sm text-red-800">
              {submitError}
            </div>
          )}

          {submitted && !submitError && (
            <div className="mt-4 rounded-lg border border-emerald-500/40 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              Thank you! We&apos;ve received your details and will contact you shortly with a cash
              offer and available pickup times.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

