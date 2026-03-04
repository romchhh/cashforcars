import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white z-10 md:z-auto">
      <div className="max-w-[1400px] mx-auto px-0 md:px-8">
        <div className="relative flex items-center min-h-[800px]">
          {/* Left Side - About Card with overlap */}
          <div className="relative z-20 w-full lg:w-[55%] lg:pr-8 flex items-center">
            <div className="bg-white rounded-none md:rounded-3xl p-8 md:p-12 shadow-2xl w-full border border-[#E5E7EB]/70">
              {/* Header */}
              <div className="mb-8">
                <p className="text-[#6F6F6E] text-xs font-semibold mb-2 tracking-[0.2em] uppercase" style={{ fontFamily: 'Corbel, sans-serif' }}>About Us</p>
                <h2 className="text-5xl font-bold text-[#222221] leading-tight mb-3" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  AutoDrive Motors
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-5 mb-8 text-[#222221] max-w-[640px]">
                <p className="text-lg font-medium leading-relaxed text-justify md:text-left" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  Step into a new era of car buying and selling, where <span className="font-bold">AutoDrive Motors</span> blends showroom experience with the comfort of a fully digital journey.
                </p>
                <p className="text-lg font-medium leading-relaxed text-justify md:text-left" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  We are more than a dealership — we are your long‑term automotive partner. From the first online search to the moment you start the engine, our team stays with you at every step.
                </p>
                <p className="text-lg font-medium leading-relaxed text-justify md:text-left" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  Whether you are looking to <span className="font-bold">sell your current car</span>, <span className="font-bold">upgrade to something new</span>, or <span className="font-bold">find a budget‑friendly daily driver</span>, we take care of inspection, paperwork, registration and finance so you can simply enjoy the drive.
                </p>
                <p className="text-lg font-medium leading-relaxed text-justify md:text-left" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  Based in Canada, our team of expert car buyers helps people sell vehicles in almost any condition — from daily drivers to high‑mileage workhorses and everything in between. Over the years we&apos;ve streamlined the process so you can experience one of the easiest and most transparent ways to sell a car.
                </p>
                <p className="text-lg font-medium leading-relaxed text-justify md:text-left" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  We focus on reducing your effort: no listings, no strangers at your door, no guesswork. Instead, you receive a clear offer, safe and friendly service, and support from a Canadian team known for its customer care and fair prices for used, damaged and even non‑running vehicles.
                </p>
                
                {/* Key Values */}
                <div className="bg-white/80 rounded-xl p-4 md:p-5 mt-6">
                  <p className="text-base md:text-lg font-bold text-[#222221] mb-3" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    What Drives Us
                  </p>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 text-[#222221] text-sm md:text-base font-bold" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    <span className="flex items-center gap-1.5">
                      <span className="text-[#F9DC0A] text-lg">✓</span>
                      <span>Transparency</span>
                    </span>
                    <span className="text-[#6F6F6E] hidden md:inline">|</span>
                    <span className="flex items-center gap-1.5">
                      <span className="text-[#F9DC0A] text-lg">✓</span>
                      <span>Comfort</span>
                    </span>
                    <span className="text-[#6F6F6E] hidden md:inline">|</span>
                    <span className="flex items-center gap-1.5">
                      <span className="text-[#F9DC0A] text-lg">✓</span>
                      <span>Long‑term care</span>
                    </span>
                  </div>
                  <div className="mt-4 text-sm md:text-base text-[#6F6F6E]" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    Sell your car in 3 easy steps:
                    <br />
                    <span className="font-semibold">1. Get an offer.</span> Tell us about your vehicle or submit it through our online form to see what it&apos;s worth.
                    <br />
                    <span className="font-semibold">2. Schedule pick‑up.</span> Accept the offer and choose a time that works for you — we handle the logistics.
                    <br />
                    <span className="font-semibold">3. Get paid.</span> Hand over the keys, collect your payment and let us take care of the rest.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Professional Image with overlap */}
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] -z-10 lg:z-0">
            <div className="relative h-full min-h-[800px] rounded-3xl overflow-hidden bg-white">
              <Image
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
                alt="Sport car parked on a road"
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