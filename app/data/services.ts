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
    title: "Buy Verified Used Cars",
    subtitle: "Curated Inventory",
    description:
      "Browse a hand‑picked selection of inspected used cars with full history, transparent pricing and no hidden fees.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "left",
    Icon: CarFront,
    icon: "🚗",
  },
  {
    title: "Sell Your Car Fast",
    subtitle: "Instant Offer",
    description:
      "Get an online estimate, confirm it with a quick inspection and receive payment securely without dealing with classifieds.",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "left",
    Icon: Gauge,
    icon: "⚡️",
  },
  {
    title: "Trade‑In & Upgrade",
    subtitle: "Smart Switch",
    description:
      "Use your current car as part of the payment for your next one, keeping monthly instalments under control.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "right",
    Icon: Sparkles,
    icon: "🔄",
  },
  {
    title: "Car Financing Assistance",
    subtitle: "Flexible Payments",
    description:
      "Compare bank and in‑house financing options, choose a plan that suits your budget and sign everything in one visit.",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "right",
    Icon: CreditCard,
    icon: "💳",
  },
  {
    title: "Registration & Insurance",
    subtitle: "Paperwork Done Right",
    description:
      "We help you choose insurance, handle registration, plates and ownership transfer so you only worry about the drive.",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "left",
    Icon: ShieldCheck,
    icon: "🛡️",
  },
  {
    title: "Fuel‑Efficient & Electric Options",
    subtitle: "Future Ready",
    description:
      "Explore fuel‑efficient and electric cars with guidance on range, charging and total cost of ownership.",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "left",
    Icon: Fuel,
    icon: "🔋",
  },
  {
    title: "City‑Friendly Compacts",
    subtitle: "Urban Driving",
    description:
      "Perfect city cars with easy parking, low running costs and agile handling for everyday drives.",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "right",
    Icon: MapPin,
    icon: "📍",
  },
  {
    title: "Performance & Luxury",
    subtitle: "For Enthusiasts",
    description:
      "Sports cars and premium sedans for drivers who care about power, comfort and design.",
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "right",
    Icon: Gauge,
    icon: "🏁",
  },
  {
    title: "Online Concierge Support",
    subtitle: "From Screen to Keys",
    description:
      "Ask questions, reserve a car, book test drives and complete steps online with the help of our team.",
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "left",
    Icon: FileText,
    icon: "📲",
  },
];

// Hero section uses first 5 services
export const heroServices = services.slice(0, 5);
