'use client';

import Header from "../components/Header";
import Footer from "../components/Footer";
import Steps from "../components/Steps";
import Contact from "../components/Contact";

export default function HowItWorksPage() {
  const steps = [
    {
      title: "Step 1: Get an Offer",
      text: "Tell us a few details about your vehicle through our online form. You’ll be connected with a buying specialist who will ask simple questions so we can prepare a free, no‑obligation offer.",
    },
    {
      title: "Step 2: Schedule Pick‑Up",
      text: "Take the time you need to decide. Once you accept the offer, we’ll arrange a pick‑up time that works for you and organize towing at no extra cost.",
    },
    {
      title: "Step 3: Get Paid",
      text: "At the scheduled appointment, you hand over the keys and documents, and receive your guaranteed payment. If you can’t be there, we can arrange secure alternatives.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="pt-28 md:pt-40 pb-16">
        {/* How It Works section */}
        <section className="max-w-[900px] mx-auto px-4 md:px-0 mb-16">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#222221] mb-4 text-center"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            How It Works
          </h1>
          <p
            className="text-base md:text-lg text-center text-[#6F6F6E] max-w-2xl mx-auto mb-8"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            If you’re looking to sell your vehicle quickly and easily, you’re in the right place.
            AutoDrive Motors uses a simple 3‑step process so you can get a competitive offer and
            safe, hassle‑free pick‑up across Canada.
          </p>
          <div className="space-y-6 md:space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 flex gap-4 md:gap-6"
              >
                <div className="flex-shrink-0">
                  <span
                    className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#F9DC0A] text-[#222221] flex items-center justify-center font-bold text-base md:text-lg shadow-md"
                    style={{ fontFamily: "Corbel, sans-serif" }}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className="text-left">
                  <h2
                    className="text-xl md:text-2xl font-bold text-[#222221] mb-2"
                    style={{ fontFamily: "Corbel, sans-serif" }}
                  >
                    {step.title}
                  </h2>
                  <p
                    className="text-sm md:text-base text-[#6F6F6E] leading-relaxed"
                    style={{ fontFamily: "Corbel, sans-serif" }}
                  >
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Buying Your Car For Cash section */}
        <section className="max-w-[900px] mx-auto px-4 md:px-0">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#222221] mb-4 text-center"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            Buying Your Car For Cash
          </h2>
          <p
            className="text-sm md:text-base text-[#6F6F6E] max-w-2xl mx-auto mb-8 text-center"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            If you’ve asked yourself where to sell your car, truck or SUV, you&apos;ve come to the
            right place. We focus on making the process fast, easy and secure — from the first quote
            to the final tow‑away.
          </p>

          <div className="space-y-6 md:space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
              <h3
                className="text-xl md:text-2xl font-bold text-[#222221] mb-3"
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                Get an Offer
              </h3>
              <p
                className="text-sm md:text-base text-[#6F6F6E] leading-relaxed"
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                Give us your vehicle details through our online form and you&apos;ll be connected
                with a purchasing specialist. Answer a few quick questions so we can make you the
                best possible offer based on your car&apos;s condition and the current market.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
              <h3
                className="text-xl md:text-2xl font-bold text-[#222221] mb-3"
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                Accept the Offer
              </h3>
              <p
                className="text-sm md:text-base text-[#6F6F6E] leading-relaxed"
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                Our quotes are free and come with zero obligation. We understand that the decision to
                sell your vehicle can be a tough one — when you&apos;re ready, accepting the offer
                locks in your guaranteed amount.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
              <h3
                className="text-xl md:text-2xl font-bold text-[#222221] mb-3"
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                We Tow It Away and You Get Paid
              </h3>
              <p
                className="text-sm md:text-base text-[#6F6F6E] leading-relaxed"
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                As soon as you accept, we schedule free towing from your home, office or repair shop.
                At the appointment, the driver collects the keys and documents and hands you your
                payment. If you can’t be there in person, we can complete the pick‑up and mail your
                cheque to the address you choose.
              </p>
            </div>

            <p
              className="text-sm md:text-base text-[#4B5563] mt-4 text-center"
              style={{ fontFamily: "Corbel, sans-serif" }}
            >
              Trust us — there&apos;s no easier way to get cash for your car than with AutoDrive
              Motors. Share your vehicle details today and let our team do the rest.
            </p>
          </div>
        </section>

        {/* 3-step visual block */}
        <Steps />

        {/* Contact-style CTA like other pages */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
