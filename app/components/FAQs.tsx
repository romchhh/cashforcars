'use client';

import { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: 'What types of vehicles does Cash4Cars GTA buy?',
      answer: 'We buy most passenger vehicles in almost any condition — cars, SUVs, vans and light trucks. That includes used daily drivers, high‑mileage work vehicles, accident‑damaged cars, non‑running vehicles and scrap cars.',
    },
    {
      question: 'How do I get an offer for my car?',
      answer: 'You can request a cash offer online via the Get Offer page or by calling us directly. Share your year, make, model, mileage, condition and location — we will review the details and send you a free, no‑obligation quote.',
    },
    {
      question: 'Which areas do you serve?',
      answer: 'We serve the Greater Toronto Area (including Toronto, North York, Mississauga, Brampton, Vaughan, Richmond Hill, Markham and Scarborough) as well as key Northern Ontario cities like North Bay, Sudbury, Sault Ste. Marie, Timmins, Thunder Bay, Kapuskasing, Kirkland Lake and Hearst.',
    },
    {
      question: 'How fast can I sell my car?',
      answer: 'In many cases, you can receive a quote the same day you contact us and schedule pickup within 24–48 hours, depending on your area and availability. For urgent cases in the GTA, same‑day towing is often possible.',
    },
    {
      question: 'Do you charge any fees or take a commission?',
      answer: 'No. Our service is simple: we make you a direct cash offer for your vehicle. There are no listing fees, no commissions and no towing charges when we pick up the car.',
    },
    {
      question: 'Can I sell a car without ownership in Ontario?',
      answer: 'In most cases, Ontario requires a valid vehicle ownership (permit) to complete a legal sale. If you do not have ownership, contact us anyway — we can review your situation, explain what is possible and what documents you may need to obtain.',
    },
    {
      question: 'How is my offer calculated?',
      answer: 'We look at your car’s year, make, model, mileage, overall condition, current market demand and scrap value when relevant. Being honest about damage and mechanical issues helps us give you a realistic quote from the start.',
    },
    {
      question: 'How do I get paid?',
      answer: 'You get paid at pickup after a quick visual check of the vehicle and documents. We confirm payment details with you in advance so you know exactly how and when you will receive your money.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-24 bg-gradient-to-br from-white via-[#F6F6F6] to-white overflow-hidden">
      {/* decorative blur blobs */}
      <div className="pointer-events-none absolute -top-20 -right-24 h-56 w-56 rounded-full bg-[#F9DC0A]/40 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#111827]/5 blur-3xl" />

      <div className="relative max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] gap-10 lg:gap-16 items-start mb-10 md:mb-16">
          <div className="text-left">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#222221] leading-tight mb-3"
              style={{ fontFamily: 'Corbel, sans-serif' }}
            >
              Questions & Answers
            </h2>
            <p
              className="text-sm md:text-base text-[#6F6F6E] max-w-md"
              style={{ fontFamily: 'Corbel, sans-serif' }}
            >
              Everything you need to know about selling your car for cash in the GTA and Northern Ontario — clear, honest answers in one place.
            </p>
          </div>

          {/* FAQ Accordion - Single Block */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.12)] border border-[#E5E7EB]">
            <div className="space-y-0">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`border-b border-[#E0E0D8] last:border-b-0 ${index === 0 ? 'pt-1' : 'pt-1'}`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-5 md:py-6 text-left hover:bg-[#F6F6F6]/70 transition-colors rounded-xl px-3 -mx-3"
                >
                  <span className="flex items-start gap-3 md:gap-4 flex-1 pr-4">
                    <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#F9DC0A]/20 text-xs font-semibold text-[#6F6F6E]">
                      Q{index + 1}
                    </span>
                    <span
                      className="text-[#222221] font-bold text-base md:text-lg leading-snug"
                      style={{ fontFamily: 'Corbel, sans-serif' }}
                    >
                      {item.question}
                    </span>
                  </span>
                  <span
                    className={`ml-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#E0E0D8] text-sm text-[#4B5563] bg-white transition-all duration-300 ${
                      openIndex === index ? 'bg-[#111827] text-white rotate-90' : ''
                    }`}
                  >
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-4 md:pb-5' : 'max-h-0'
                  }`}
                >
                  <div className="px-3 pb-2 md:pb-3">
                    <p
                      className="text-[#222221] text-sm md:text-base font-medium leading-relaxed text-justify md:text-left"
                      style={{ fontFamily: 'Corbel, sans-serif' }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
