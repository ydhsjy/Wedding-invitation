"use client";

import { CalendarHeart, Gift, Heart, Images, MessageCircle } from "lucide-react";

const items = [
  { href: "#couple", label: "Couple", icon: Heart },
  { href: "#event", label: "Event", icon: CalendarHeart },
  { href: "#gallery", label: "Gallery", icon: Images },
  { href: "#gift", label: "Gift", icon: Gift },
  { href: "#rsvp", label: "RSVP", icon: MessageCircle }
];

export function MobileNav() {
  return (
    <nav className="fixed inset-x-4 bottom-4 z-30 rounded-full border border-gold/30 bg-ivory/88 px-3 py-2 shadow-premium backdrop-blur md:hidden" aria-label="Navigasi undangan">
      <div className="flex items-center justify-between">
        {items.map(({ href, label, icon: Icon }) => (
          <a key={href} href={href} className="grid min-w-12 justify-items-center gap-1 rounded-full bg-gray-500 px-2 py-1 font-nav text-[6px] font-normal leading-[0.9] text-white shadow-sm">
            <Icon className="h-4 w-4" aria-hidden="true" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
