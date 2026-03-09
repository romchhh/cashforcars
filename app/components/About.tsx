import Image from 'next/image';

function ExperienceStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-4 border-t border-[#E5E7EB]">
      <div>
        <p
          className="text-xs font-semibold tracking-[0.18em] text-[#6F6F6E] uppercase mb-1.5"
          style={{ fontFamily: 'Corbel, sans-serif' }}
        >
          Years of experience
        </p>
        <p
          className="text-sm md:text-base font-bold text-[#222221]"
          style={{ fontFamily: 'Corbel, sans-serif' }}
        >
          Local Ontario market knowledge you can rely on.
        </p>
      </div>
      <div>
        <p
          className="text-xs font-semibold tracking-[0.18em] text-[#6F6F6E] uppercase mb-1.5"
          style={{ fontFamily: 'Corbel, sans-serif' }}
        >
          Vehicles purchased
        </p>
        <p
          className="text-sm md:text-base font-bold text-[#222221]"
          style={{ fontFamily: 'Corbel, sans-serif' }}
        >
          A proven process built from buying all kinds of cars.
        </p>
      </div>
      <div>
        <p
          className="text-xs font-semibold tracking-[0.18em] text-[#6F6F6E] uppercase mb-1.5"
          style={{ fontFamily: 'Corbel, sans-serif' }}
        >
          Customer testimonials
        </p>
        <p
          className="text-sm md:text-base font-bold text-[#222221]"
          style={{ fontFamily: 'Corbel, sans-serif' }}
        >
          Drivers who recommend us for being fast, fair and honest.
        </p>
      </div>
    </div>
  );
}

function WhatDrivesUs() {
  return (
    <div className="bg-white/80 rounded-xl p-4 md:p-5 mt-6">
      <p
        className="text-base md:text-lg font-bold text-[#222221] mb-3"
        style={{ fontFamily: 'Corbel, sans-serif' }}
      >
        What Drives Us
      </p>
      <div
        className="flex flex-wrap items-center gap-2 md:gap-3 text-[#222221] text-sm md:text-base font-bold"
        style={{ fontFamily: 'Corbel, sans-serif' }}
      >
        <span className="flex items-center gap-1.5">
          <span className="text-[#F9DC0A] text-lg">✓</span>
          <span>Honest offers</span>
        </span>
        <span className="text-[#6F6F6E] hidden md:inline">|</span>
        <span className="flex items-center gap-1.5">
          <span className="text-[#F9DC0A] text-lg">✓</span>
          <span>Convenience</span>
        </span>
        <span className="text-[#6F6F6E] hidden md:inline">|</span>
        <span className="flex items-center gap-1.5">
          <span className="text-[#F9DC0A] text-lg">✓</span>
          <span>Reliable pickup</span>
        </span>
      </div>
    </div>
  );
}

function SellInThreeSteps() {
  return (
    <div
      className="mt-4 text-sm md:text-base text-[#6F6F6E]"
      style={{ fontFamily: 'Corbel, sans-serif' }}
    >
      Sell your car in 3 easy steps:
      <br />
      <span className="font-semibold">1. Get an offer.</span> Tell us about your vehicle through our
      online form or by phone to see what it&apos;s worth.
      <br />
      <span className="font-semibold">2. Schedule pick‑up.</span> Accept the offer and choose a time
      that works for you — we arrange free towing.
      <br />
      <span className="font-semibold">3. Get paid.</span> Hand over the keys, collect your payment
      and let us take care of the rest.
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white z-10 md:z-auto">
      <div className="max-w-[1400px] mx-auto px-0 md:px-8">
        <div className="relative flex flex-col lg:flex-row items-start lg:items-stretch min-h-[300px] lg:min-h-[720px]">
          {/* Left Side - About Card with overlap */}
          <div className="relative z-20 w-full lg:w-[60%] lg:pr-10 flex items-center">
            <div className="bg-white rounded-none md:rounded-3xl p-8 md:p-12 shadow-2xl w-full border border-[#E5E7EB]/70">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-[#222221] leading-tight mb-3" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  Local Car Buyers You Can Trust
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-5 mb-8 text-[#222221] max-w-[760px]">
                <p className="text-lg font-medium leading-relaxed text-justify md:text-left" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  <span className="font-bold">Cash4Cars GTA</span> is a Toronto (North York) based car‑buying service focused on one simple promise: turn unwanted vehicles into fast, fair cash offers without the stress of private sales.
                </p>
                <p className="text-lg font-medium leading-relaxed text-justify md:text-left" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  We specialize in purchasing used, unwanted and damaged cars, SUVs, vans and trucks in almost any condition — running, high‑mileage, non‑running and scrap. Our team helps drivers across the GTA and Northern Ontario get paid and move on from vehicles they no longer need.
                </p>
                <p className="text-lg font-medium leading-relaxed text-justify md:text-left" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  Instead of fixing, photographing and listing your vehicle online, you simply tell us about it once. We handle pricing, paperwork and towing so you don&apos;t have to deal with tire‑kickers, time‑wasters or unsafe meet‑ups.
                </p>
                <p
                  className="text-lg font-medium leading-relaxed text-justify md:text-left"
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                >
                  With years of experience in the Ontario automotive and recycling market, we know
                  what vehicles are worth and how to close deals quickly while staying transparent.
                  You get a clear cash amount, free pickup and payment on the spot.
                </p>

                <ExperienceStats />

                <p
                  className="text-lg font-medium leading-relaxed text-justify md:text-left pt-4"
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                >
                  Our goal is to earn your trust: show up on time, do exactly what we promised in the quote, and leave your driveway empty and your wallet heavier.
                </p>

                <WhatDrivesUs />
                <SellInThreeSteps />
              </div>
            </div>
          </div>

          {/* Right Side - Professional Image with overlap */}
          <div className="w-full lg:w-[40%] mt-8 lg:mt-0 flex items-center justify-center">
            <div className="relative w-full max-w-[620px] h-[260px] md:h-[320px] lg:h-[720px] rounded-3xl overflow-hidden bg-white mx-auto">
              <Image
                src="/about/about-photo.jpg"
                alt="Cash4Cars GTA team discussing car offers"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}