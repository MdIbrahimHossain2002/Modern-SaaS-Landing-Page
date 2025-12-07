"use client";

import Link from "next/link";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 py-12">
      <div className="container px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Ibrahim.dev</h2>
          <p className="text-gray-400">
            A creative developer crafting clean and modern user experiences.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            <Link href="#" className="hover:text-white transition">
              <Github size={22} />
            </Link>
            <Link href="#" className="hover:text-white transition">
              <Linkedin size={22} />
            </Link>
            <Link href="#" className="hover:text-white transition">
              <Facebook size={22} />
            </Link>
            <Link href="#" className="hover:text-white transition">
              <Twitter size={22} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link href="#home" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-white transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="hover:text-white transition">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                App Development
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                SEO Optimization
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">
            Stay updated with new projects and updates.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg bg-gray-800 text-gray-200 focus:outline-none"
            />
            <button className="px-4 py-2 bg-[#18529E] text-white rounded-r-lg hover:bg-[#15467F] transition">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} Ibrahim — All rights reserved.
      </div>
    </footer>
  );
}
