'use client';

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/get-offer", label: "Get Offer" },
    { href: "/about", label: "About Us" },
    { href: "/locations", label: "Locations" },
    { href: "/how-it-works", label: "How it Works" },
  ];

  return (
    <>
      <header className="backdrop-blur-xl bg-white/95 border border-[#E5E5E5] rounded-[2rem] fixed top-6 md:top-4 left-1/2 transform -translate-x-1/2 z-[80] shadow-lg w-[94%] md:w-[80%]">
        <div className="px-4 md:px-6 py-4 md:py-6 flex items-center justify-between relative">
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <span
              className="inline-flex items-center justify-center w-9 h-9 rounded-2xl bg-[#222221] text-[#F9DC0A] text-sm font-bold"
              style={{ fontFamily: "Corbel, sans-serif" }}
            >
              AD
            </span>
            <div className="flex flex-col leading-tight">
              <span
                className="text-base md:text-lg font-bold text-[#222221]"
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                AutoDrive Motors
              </span>
              <span
                className="hidden md:inline text-[11px] tracking-[0.18em] uppercase text-[#6F6F6E]"
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                We Buy Cars
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#222221] hover:text-[#6F6F6E] font-bold transition-colors"
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+15551234567"
              className="text-sm font-semibold text-[#222221] hover:text-[#6F6F6E] transition-colors"
              style={{ fontFamily: "Corbel, sans-serif" }}
            >
              +1 (555) 123‑4567
            </a>
            <Link
              href="/get-offer"
              onClick={closeMenu}
              className="inline-block bg-[#222221] hover:bg-[#6F6F6E] text-white font-semibold px-6 py-2.5 rounded-lg transition-all shadow-lg hover:shadow-xl"
              style={{ fontFamily: "Corbel, sans-serif" }}
            >
              Get Car Offer
            </Link>
          </div>

          {/* Mobile Burger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2 z-[60] relative"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-[#222221] transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#222221] transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#222221] transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      {isMenuOpen && (
        <>
          {/* Dark Overlay Background */}
          <div
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] transition-opacity duration-300"
            onClick={closeMenu}
          />

          {/* Mobile Menu */}
          <div className="md:hidden fixed inset-0 z-[60] flex items-center justify-center">
            <div className="w-full h-full bg-white flex flex-col">
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={closeMenu}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#F6F6F6] transition-colors"
                  aria-label="Close menu"
                >
                  <span className="text-3xl text-[#222221]">×</span>
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex flex-col flex-1 justify-center px-8 pb-20">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[#222221] hover:text-[#6F6F6E] font-bold py-4 text-2xl transition-colors border-b border-[#E0E0D8]"
                    style={{ fontFamily: "Corbel, sans-serif" }}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="tel:+15551234567"
                  className="mt-8 text-[#222221] font-semibold text-xl text-center"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  +1 (555) 123‑4567
                </a>
                <Link
                  href="/get-offer"
                  onClick={closeMenu}
                  className="mt-8 bg-[#222221] hover:bg-[#6F6F6E] text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg text-center text-xl"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  Get Car Offer
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}

