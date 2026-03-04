'use client';

import { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: 'What kind of cars does AutoDrive Motors offer?',
      answer: 'AutoDrive Motors offers a curated mix of inspected used cars, city compacts, SUVs, performance models and selected new cars from trusted partners. Every car is checked for condition, mileage and history before it goes on sale.',
    },
    {
      question: 'How do I get an offer for my car?',
      answer: 'You can request an offer online via the Get Offer page by sharing basic details about your car. We will send a preliminary estimate and then confirm the final offer after a quick on‑site or in‑store inspection.',
    },
    {
      question: 'Do you help with car financing?',
      answer: 'Yes. We work with several banking and finance partners to help you compare rates, choose a monthly payment that works for you and complete all paperwork in one place.',
    },
    {
      question: 'Are the cars inspected before purchase?',
      answer: 'Every car goes through a multi‑point technical and cosmetic inspection. We verify documents, check for major accidents where possible and share the key findings with you before you sign anything.',
    },
    {
      question: 'What makes AutoDrive Motors different from other dealerships?',
      answer: 'We focus on transparency and simplicity: clear pricing, detailed car information, guided financing, and support from the moment you request an offer until long after you drive away.',
    },
    {
      question: 'Can I reserve a car online?',
      answer: 'Yes, you can reserve a car online for a limited time while you arrange a test drive or documents. Our team will contact you to confirm the details and next steps.',
    },
    {
      question: 'How long does the full process usually take?',
      answer: 'If you already know which car you want and have documents ready, you can often complete everything in a single visit. With financing and insurance, the full process usually takes from a few hours to a couple of days.',
    },
    {
      question: 'Do you offer support after I buy the car?',
      answer: 'We stay in touch after purchase to help with service reminders, warranty questions and possible future trade‑in options when you are ready for your next car.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-24 bg-gradient-to-br from-white via-[#F6F6F6] to-white">
      <div className="max-w-[1200px] mx-auto px-0 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 px-8 md:px-0">
          <h2 className="text-5xl md:text-6xl font-bold text-[#222221] leading-tight mb-4" style={{ fontFamily: 'Corbel, sans-serif' }}>
            Questions & Answers
          </h2>
        </div>

        {/* FAQ Accordion - Single Block */}
        <div className="bg-white rounded-none md:rounded-3xl p-8 md:p-12 shadow-xl border border-[#6F6F6E]/10">
          <div className="space-y-0">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`border-b border-[#E0E0D8] last:border-b-0 ${index === 0 ? 'pt-0' : 'pt-0'}`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-6 text-left hover:bg-[#F6F6F6]/50 transition-colors rounded-lg px-2 -mx-2"
                >
                  <span className="text-[#222221] font-bold text-lg pr-4 flex-1 leading-snug" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    {item.question}
                  </span>
                  <span className={`text-[#6F6F6E] text-base flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                  }`}
                >
                  <div className="px-2 text-[#222221] text-base font-medium leading-relaxed text-justify md:text-left" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
