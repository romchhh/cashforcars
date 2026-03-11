import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cash4cars-gta.example.com"),
  title: {
    default: "Cash4Cars GTA — Sell Your Car for Cash Today",
    template: "%s | Cash4Cars GTA",
  },
  description:
    "Cash4Cars GTA buys used, damaged and scrap vehicles across the Greater Toronto Area and Northern Ontario. Instant cash offers, free towing and no‑stress paperwork.",
  keywords: [
    "Cash4Cars GTA",
    "cash for cars Toronto",
    "sell my car GTA",
    "scrap car removal Toronto",
    "sell junk car Ontario",
    "we buy cars GTA",
    "sell damaged car for cash",
  ],
  authors: [{ name: "Cash4Cars GTA" }],
  openGraph: {
    type: "website",
    url: "/",
    title: "Cash4Cars GTA — Sell Your Car for Cash Today",
    description:
      "Get an instant cash offer for your car anywhere in the GTA. We buy used, damaged, non‑running and scrap vehicles with free towing and on‑the‑spot payment.",
    siteName: "Cash4Cars GTA",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Cash4Cars GTA — tow truck loading a car at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cash4Cars GTA — Cash for Cars in Toronto & Ontario",
    description:
      "Sell your car fast for cash in the GTA and Northern Ontario. Free towing, no hidden fees and guaranteed payment on pickup.",
    images: [
      "/hero-bg.jpg",
    ],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
