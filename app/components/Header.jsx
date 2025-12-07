"use client";

import React from "react";

export default function Header() {
  return (
    <section id="home" className="min-h-screen container w-full bg-[#0A0A1A] bg-gradient-to-b from-[#0A0A1A] to-[#1a0f2e] flex flex-col justify-center items-center text-center px-4 relative">

      {/* Purple Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,76,255,0.6),rgba(0,0,0,0.1))] blur-3xl opacity-70"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-6 inline-block rounded-full px-4 py-1 bg-white/10 text-sm text-gray-200 backdrop-blur-md border border-white/20">
          API Studio is now in beta →
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          The API Security Framework
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Our landing page template works on all devices, so you only have to set it up once, 
          and get beautiful results forever.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition">
            Get Started →
          </button>

          <button className="px-8 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full hover:bg-white/20 transition">
            Read the docs
          </button>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="absolute bottom-8 w-full flex justify-center">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 opacity-60 text-gray-300 text-sm md:text-base">
          <span>Amazon</span>
          <span>Facebook</span>
          <span>Tinder</span>
          <span>Airbnb</span>
          <span>Cadbury</span>
          <span>Canon</span>
          <span>Spotify</span>
        </div>
      </div>
    </section>
  );
}
