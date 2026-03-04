'use client';

import { CarFront, Truck, Wallet } from "lucide-react";

export default function Steps() {
  const steps = [
    {
      num: "1",
      title: "Get an Offer",
      text: "Call us or fill out the form to find out what your car is worth.",
      Icon: CarFront,
    },
    {
      num: "2",
      title: "Schedule Pick Up",
      text: "Accept the offer and we’ll schedule a pick‑up time that is convenient for you.",
      Icon: Truck,
    },
    {
      num: "3",
      title: "Get Paid",
      text: "Collect your payment & we tow away your car for free. It’s that simple!",
      Icon: Wallet,
    },
  ];

  return (
    <section className="max-w-[1100px] mx-auto px-4 md:px-0 py-12 md:py-16">
      <div className="mb-10 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#022C22]"
          style={{ fontFamily: "Corbel, sans-serif" }}
        >
          Sell your car in three easy steps
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 text-center">
        {steps.map((step) => (
          <div key={step.num} className="flex flex-col items-center">
            <div className="mb-3 flex flex-col items-center">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-4xl md:text-5xl font-extrabold text-[#059669] leading-none"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  {step.num}
                </span>
                <step.Icon
                  className="w-10 h-10 md:w-12 md:h-12 text-[#047857]"
                  strokeWidth={1.8}
                />
              </div>
              <div className="h-1 w-16 bg-[#10B981] rounded-full" />
            </div>

            <h3
              className="text-lg md:text-xl font-bold text-[#022C22] mb-2"
              style={{ fontFamily: "Corbel, sans-serif" }}
            >
              {step.title}
            </h3>
            <p
              className="text-sm md:text-base text-[#4B5563] max-w-xs"
              style={{ fontFamily: "Corbel, sans-serif" }}
            >
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}


