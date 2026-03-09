import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#222221] rounded-b-[2rem] text-white">
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left Column - Branding */}
          <div>
            <Link href="#home" className="inline-block mb-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white">
                  <Image
                    src="/logo.png"
                    alt="Cash4Cars GTA logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </span>
                <div className="flex flex-col leading-tight">
                  <span
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: 'Corbel, sans-serif' }}
                  >
                    Cash4Cars GTA
                  </span>
                  <span
                    className="text-[11px] tracking-[0.18em] uppercase text-[#9CA3AF]"
                    style={{ fontFamily: 'Corbel, sans-serif' }}
                  >
                    Cash for Cars
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-sm text-[#6F6F6E] mb-1" style={{ fontFamily: 'Corbel, sans-serif' }}>Sell</p>
            <p className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Corbel, sans-serif' }}>Your Car for Cash</p>
            <p className="text-xl font-bold text-white" style={{ fontFamily: 'Corbel, sans-serif' }}>Across the GTA & Ontario</p>

            {/* Footer Navigation */}
            <div className="mt-6 space-y-2 text-sm">
              <p className="text-[#6F6F6E] font-semibold uppercase tracking-[0.18em]" style={{ fontFamily: 'Corbel, sans-serif' }}>
                Menu
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/get-offer" className="text-white/80 hover:text-[#10B981] transition-colors" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  Get Offer
                </Link>
                <Link href="/about" className="text-white/80 hover:text-[#10B981] transition-colors" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  About Us
                </Link>
                <Link href="/locations" className="text-white/80 hover:text-[#10B981] transition-colors" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  Locations
                </Link>
                <Link href="/how-it-works" className="text-white/80 hover:text-[#10B981] transition-colors" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  How it Works
                </Link>
                <Link href="/blog" className="text-white/80 hover:text-[#10B981] transition-colors" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  Blog
                </Link>
              </div>
            </div>
          </div>

          {/* Middle Column - Service Area */}
          <div>
            <p className="text-xs uppercase tracking-wider mb-4 text-[#6F6F6E] font-bold" style={{ fontFamily: 'Corbel, sans-serif' }}>SERVICE AREA</p>
            <p className="text-sm text-white/90 leading-relaxed mb-6" style={{ fontFamily: 'Corbel, sans-serif' }}>
              Cash4Cars GTA buys cars, SUVs, vans and trucks across the Greater Toronto Area and key cities in Northern Ontario with free towing and on‑the‑spot payment.
            </p>
          </div>

          {/* Right Column - Contact */}
          <div>
            <p className="text-xs uppercase tracking-wider mb-4 text-[#6F6F6E] font-bold" style={{ fontFamily: 'Corbel, sans-serif' }}>SAY HELLO</p>
            <a
              href="tel:+1437778210"
              className="text-2xl font-bold text-white inline-block hover:text-[#F9DC0A] transition-colors"
              style={{ fontFamily: 'Corbel, sans-serif' }}
            >
              +1 (437) 778‑210
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-[#6F6F6E]/50 pt-8 text-center">
          <p className="text-xs text-[#6F6F6E]" style={{ fontFamily: 'Corbel, sans-serif' }}>
            Cash4Cars GTA © All rights reserved. Proudly Designed & Developed by{' '}
            <Link 
              href="https://new.telebots.site/en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-[#10B981] transition-colors text-white/80"
            >
              TeleBots
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
