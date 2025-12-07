"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container px-6 md:px-12 lg:px-20 py-3 lg:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#18529E]">
         Md. Ibrahim Hossain
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="#home" to="home" className="hover:text-[#18529E] transition">
            Home
          </Link>
          <Link href="#about" to="about" className="hover:text-[#18529E] transition">
            About
          </Link>
          <Link href="#projects" to="projects" className="hover:text-[#18529E] transition">
            Projects
          </Link>
          <Link href="#contact" to="contact" className="hover:text-[#18529E] transition">
            Contact
          </Link>
          <Link
            href="#hire"
            className="px-4 py-2 bg-[#18529E] text-white rounded-xl hover:bg-[#15467F] transition"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-6">
          <nav className="flex flex-col gap-4 text-gray-700 font-medium">
            <Link href="#home" className="hover:text-[#18529E]">
              Home
            </Link>
            <Link href="#about" className="hover:text-[#18529E]">
              About
            </Link>
            <Link href="#projects" className="hover:text-[#18529E]">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-[#18529E]">
              Contact
            </Link>
            <Link
              href="#hire"
              className="w-fit mt-2 px-4 py-2 bg-[#18529E] text-white rounded-xl hover:bg-[#15467F]"
            >
              Hire Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
