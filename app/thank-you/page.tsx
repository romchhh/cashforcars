import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Script
        id="meta-pixel-lead"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof fbq === 'function') {
              fbq('track', 'Lead');
            }
          `,
        }}
      />
      <Header />

      <main className="pt-28 md:pt-40 pb-16">
        <section className="max-w-[1100px] mx-auto px-4 md:px-0">
          <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl border border-emerald-100 px-8 py-10 text-center">
            <h1
              className="text-3xl md:text-4xl font-bold text-[#022C22] mb-4"
              style={{ fontFamily: "Corbel, sans-serif" }}
            >
              Thank You!
            </h1>
            <p
              className="text-base md:text-lg text-[#4B5563] mb-4"
              style={{ fontFamily: "Corbel, sans-serif" }}
            >
              We&apos;ve received your details and will contact you shortly with a
              cash offer for your vehicle and available pickup times.
            </p>
            <p
              className="text-sm text-[#6B7280] mb-8"
              style={{ fontFamily: "Corbel, sans-serif" }}
            >
              If you need to update any information, simply submit the form again
              on our homepage.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[#059669] hover:bg-[#047857] text-white text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-all no-underline"
              style={{ fontFamily: "Corbel, sans-serif" }}
            >
              Back to Home
            </a>
          </div>
        </section>
      </main>

      <Footer simple />
    </div>
  );
}
