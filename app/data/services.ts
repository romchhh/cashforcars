import {
  CarFront,
  Gauge,
  Fuel,
  ShieldCheck,
  CreditCard,
  MapPin,
  Sparkles,
  FileText,
} from "lucide-react";

export interface Service {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imagePosition?: 'left' | 'right';
  Icon?: typeof FileText;
  icon?: string; // emoji for Hero section
}

export const services: Service[] = [
  {
    title: "Cash for Used Cars",
    subtitle: "Running or High Mileage",
    description:
      "Turn your everyday car into instant cash. We buy used vehicles in almost any condition, including high‑mileage workhorses, family SUVs and daily drivers across the GTA.",
    image: "/services/service-hero-1.jpg",
    imagePosition: "left",
    Icon: CarFront,
    icon: "🚗",
  },
  {
    title: "Scrap & Non‑Running Vehicles",
    subtitle: "Tow Included",
    description:
      "Have a scrap, parked or non‑running car taking space? We offer cash for scrap vehicles and arrange free towing from driveways, underground parking and repair shops.",
    image: "/services/service-hero-2.jpg",
    imagePosition: "left",
    Icon: Gauge,
    icon: "⚡️",
  },
  {
    title: "Accident & Damaged Cars",
    subtitle: "Any Condition",
    description:
      "Front‑end, rear‑end or flood damage — we still make offers. Skip body‑shop bills and get a guaranteed cash amount for your damaged vehicle.",
    image: "/services-3.jpg",
    imagePosition: "right",
    Icon: Sparkles,
    icon: "🔧",
  },
  {
    title: "Same‑Day Offers & Pickup",
    subtitle: "Fast Process",
    description:
      "Share your vehicle details online, receive a cash offer in minutes and schedule same‑day pickup in many GTA areas — no viewings, no classifieds, no wasted time.",
    image: "/services-4.jpg",
    imagePosition: "right",
    Icon: CreditCard,
    icon: "⏱️",
  },
  {
    title: "Paperwork & Ownership Transfer",
    subtitle: "Stress‑Free",
    description:
      "We guide you through Ontario ownership transfer requirements and bring the right paperwork so the sale is simple, legal and fully documented.",
    image: "/about-bg.jpg",
    imagePosition: "left",
    Icon: ShieldCheck,
    icon: "📝",
  },
  {
    title: "GTA & Northern Ontario Coverage",
    subtitle: "We Come to You",
    description:
      "From Toronto, Mississauga and Brampton to North Bay, Sudbury, Timmins and Thunder Bay — our buyers and tow partners operate across key Ontario cities.",
    image: "/services/hands-exchange-money-car-keys_iStock-1505225919.webp",
    imagePosition: "left",
    Icon: MapPin,
    icon: "📍",
  },
];

// Hero section uses first 5 services
export const heroServices = services.slice(0, 5);
