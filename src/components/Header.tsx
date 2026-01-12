"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Shop Name / Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">
            Desandu Electronics
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Call Button - Primary Action */}
          <a
            href="tel:+94718262256"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-medium transition-all transform active:scale-95 shadow-lg shadow-red-600/20"
          >
            <Phone size={18} />
            <span className="hidden sm:inline">Call Now</span>
          </a>

          {/* WhatsApp Button - Icon only on mobile, text on desktop */}
          <a
            href="https://wa.me/94718262256"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white p-2 sm:px-4 sm:py-2 rounded-full font-medium transition-all transform active:scale-95 shadow-lg shadow-green-500/20"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={20} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
