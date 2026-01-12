"use client";

import React from "react";
import { Refrigerator, Tv, Bike, Lightbulb, ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Home Appliances",
    description: "Fridges, Washing Machines, Fans & more.",
    icon: Refrigerator,
    themeClasses: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      groupHoverBg: "group-hover:bg-blue-700",
      border: "bg-blue-700",
    },
  },
  {
    id: 2,
    title: "Electronics & Audio",
    description: "LED TVs, Home Theater Systems & Speakers.",
    icon: Tv,
    themeClasses: {
      bg: "bg-cyan-50",
      text: "text-cyan-700",
      groupHoverBg: "group-hover:bg-cyan-700",
      border: "bg-cyan-700",
    },
  },
  {
    id: 3,
    title: "Bicycles",
    description: "Mountain Bikes, Kids Bikes & Accessories.",
    icon: Bike,
    themeClasses: {
      bg: "bg-red-50",
      text: "text-red-600",
      groupHoverBg: "group-hover:bg-red-600",
      border: "bg-red-600",
    },
  },
  {
    id: 4,
    title: "Daily Essentials",
    description: "LED Bulbs, Mobile Reloads & Accessories.",
    icon: Lightbulb,
    themeClasses: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      groupHoverBg: "group-hover:bg-orange-600",
      border: "bg-orange-600",
    },
  },
];

export default function Categories() {
  return (
    <section className="w-full py-16 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Explore Our Categories
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl">
            Find exactly what you need from our wide range of quality products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start h-full overflow-hidden"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:text-white ${category.themeClasses.bg} ${category.themeClasses.text} ${category.themeClasses.groupHoverBg}`}>
                <category.icon size={28} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {category.title}
              </h3>
              <p className="text-slate-500 mb-6 flex-grow">
                {category.description}
              </p>

              {/* Button */}
              <button className="flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors mt-auto">
                Browse Products
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              
              {/* Decorative Border Bottom */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 group-hover:w-full ${category.themeClasses.border}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
