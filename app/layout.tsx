import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1474383090911022');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1474383090911022&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
