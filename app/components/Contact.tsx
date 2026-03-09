'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-3 md:px-8 pt-4 pb-12">
        <div className="relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
          {/* Background Image */}
          <div className="relative h-[420px] md:h-[360px] z-0">
            <Image
              src="/services-3.jpg"
              alt="Customer handing over keys to Cash4Cars GTA"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/20" />
          </div>

          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-[900px] mx-auto px-6 md:px-12">
              <div className="max-w-xl">
                <p
                  className="text-white/80 text-xs font-semibold mb-3 tracking-[0.2em] uppercase"
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                >
                  Contact
                </p>
                <h2
                  className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4"
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                >
                  Ready to Sell Your Car for Cash?
                </h2>
                <p
                  className="text-white/90 text-sm md:text-base mb-6"
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                >
                  Have questions about your vehicle, documents or pickup? Use the quote form above to share your
                  details, or call us and we&apos;ll walk you through the fastest way to get a cash offer.
                </p>
                <p
                  className="text-white/90 text-sm md:text-base mb-4"
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                >
                  Call or text:{' '}
                  <a href="tel:+1437778210" className="font-semibold underline underline-offset-4">
                    +1 (437) 778‑210
                  </a>
                </p>
                <Link
                  href="/get-offer"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#059669] hover:bg-[#047857] text-white font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all"
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                >
                  Go to Get a Cash Offer Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
