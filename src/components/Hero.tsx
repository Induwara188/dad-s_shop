"use client";

import React from "react";
import { CheckCircle2, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
          
          {/* Main Heading */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
              <Star size={14} className="fill-blue-700" />
              <span>Premium Authorized Dealer</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Your Trusted Home for <br className="hidden md:block" />
              <span className="text-blue-700">Electronics</span> &{" "}
              <span className="text-red-600">Bicycles</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Experience the best in home appliances and cycling with genuine products, official warranties, and exceptional aftermarket service.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 w-full pt-4">
            {/* Singer Badge */}
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 w-full sm:w-auto min-w-[240px]">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                <span className="text-red-600 font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Authorized Dealer</span>
                <span className="text-lg font-bold text-slate-900">SINGER</span>
              </div>
              <CheckCircle2 className="ml-auto text-green-500" size={20} />
            </div>

            {/* Tomahawk Badge */}
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 w-full sm:w-auto min-w-[240px]">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <span className="text-blue-700 font-bold text-lg">T</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Official Dealer</span>
                <span className="text-lg font-bold text-slate-900">TOMAHAWK</span>
              </div>
              <CheckCircle2 className="ml-auto text-green-500" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
