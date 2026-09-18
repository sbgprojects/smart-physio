"use client";

import WhatsAppIcon from "./WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={24} />
      <span className="hidden sm:inline text-sm font-medium">WhatsApp Us</span>
    </a>
  );
}
