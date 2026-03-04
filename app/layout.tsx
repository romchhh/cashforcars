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
  metadataBase: new URL("https://autosite.example.com"),
  title: {
    default: "AutoDrive Motors — Premium Car Deals & Services",
    template: "%s | AutoDrive Motors",
  },
  description:
    "AutoDrive Motors helps you buy, sell and finance cars with ease — instant online offers, verified vehicles, transparent pricing and full support from test drive to keys in hand.",
  keywords: [
    "AutoDrive Motors",
    "buy car online",
    "sell my car",
    "car trade in",
    "car financing",
    "used cars marketplace",
    "new cars deals",
  ],
  authors: [{ name: "AutoDrive Motors" }],
  openGraph: {
    type: "website",
    url: "/",
    title: "AutoDrive Motors — Premium Car Deals & Services",
    description:
      "Discover premium cars, instant offers and flexible financing with AutoDrive Motors. Everything you need to buy or sell your next car in one place.",
    siteName: "AutoDrive Motors",
    images: [
      {
        url: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80",
        width: 1200,
        height: 630,
        alt: "AutoDrive Motors — premium cars at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoDrive Motors — Premium Car Deals & Services",
    description:
      "Browse premium cars, request an instant offer and get full support from AutoDrive Motors.",
    images: [
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
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
