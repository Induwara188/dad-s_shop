"use client";

import React from "react";
import { MapPin, Clock, MessageCircle, Map, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16">
          
          {/* Section 1: Address & Info */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-2xl font-bold text-white mb-2">Visit Our Shop</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gray-800 text-blue-400 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-gray-200 font-medium mb-1">Our Location</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Gallida-Maththaka,<br />
                    Pitigala Road, Maththaka,<br />
                    Sri Lanka.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gray-800 text-blue-400 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-gray-200 font-medium mb-1">Opening Hours</h3>
                  <p className="text-gray-400">
                    Open: 9:00 AM - 7:30 PM<br />
                    <span className="text-gray-500 text-sm">Closed on Saturdays & Poya Days</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Actions */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-2xl font-bold text-white mb-2">Contact Us</h2>
            
            <div className="flex flex-col gap-4">
              <a 
                href="https://wa.me/94718262256"
                className="group flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-xl transition-all transform active:scale-[0.98] shadow-lg shadow-green-900/20"
              >
                <MessageCircle size={24} className="group-hover:animate-pulse" />
                <span className="text-lg">Message on WhatsApp</span>
              </a>

              <a 
                href="https://maps.app.goo.gl/4Ad5sPStF2N131FPA"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all active:scale-[0.98]"
              >
                <Map size={22} className="text-blue-400" />
                <span>View on Google Maps</span>
              </a>

              <a 
                href="tel:+94718262256"
                className="md:hidden flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all active:scale-[0.98]"
              >
                <Phone size={22} />
                <span>Call Shop Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col items-center text-center gap-4">
           {/* Trust Statement */}
           <div className="flex flex-col sm:flex-row items-center gap-2 text-sm sm:text-base font-medium text-gray-400">
            <span>Authorized Dealer for</span>
            <div className="flex items-center gap-3">
              <span className="text-white bg-red-600/10 px-2 py-0.5 rounded border border-red-600/20">SINGER</span>
              <span className="text-gray-600">&</span>
              <span className="text-white bg-blue-600/10 px-2 py-0.5 rounded border border-blue-600/20">TOMAHAWK</span>
            </div>
           </div>
           
           <p className="text-xs text-gray-500 mt-2">
            © {new Date().getFullYear()} Desandu Electronics. All rights reserved.
           </p>
        </div>
      </div>
    </footer>
  );
}
