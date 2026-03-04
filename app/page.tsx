'use client';

import Hero from "./components/Hero";
import GetQuoteForm from "./components/GetQuoteForm";
import Steps from "./components/Steps";
import Services from "./components/Services";
import About from "./components/About";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />

      <Hero />
      <div className="relative z-50 mt-6 md:-mt-32 mb-16">
        <GetQuoteForm />
      </div>
      <Steps />
      <About />
      <FAQs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}