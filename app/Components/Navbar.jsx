"use client";

import Link from "next/link";
import { useState } from "react";
import { logo } from "../assets";

const navLinks = [
  "Solutions",
  "Services",
  "Hire Us",
  "Case Studies",
  "FAQS",
  "About Us",
  "Contact Us",
  "Testimonial",
  "Blog",
];

const linkHref = (link) => `#${link.toLowerCase().replace(/\s+/g, "-")}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
<nav className="relative w-full max-w-[1728px] mx-auto min-h-[100px] lg:h-[100px] bg-white overflow-x-hidden">      <div className="flex items-center justify-between px-6 py-6 lg:hidden">
        <Link href="/">
          <img src={logo} alt="Clickmasters logo" className="h-6 w-auto" />
        </Link>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="p-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden flex flex-col items-center gap-4 pb-6 px-6">
          {navLinks.map((link) => (
            <a key={link} href={linkHref(link)} className="text-sm text-gray-800 hover:text-purple-600 transition-colors">
              {link}
            </a>
          ))}
          <a href="#signin" className="flex items-center justify-center w-[145px] h-[48px] px-5 py-3 rounded-md text-white text-sm font-medium bg-[#AF00E8] hover:opacity-90 transition-opacity">
            Sign In
          </a>
        </div>
      )}

      <div className="hidden lg:flex items-center justify-between h-full px-[130px] gap-6">
        <Link href="/" className="shrink-0 w-[177px] h-[24px]">
          <img src={logo} alt="Clickmasters logo" className="h-full w-full object-contain" />
        </Link>

        <ul className="flex flex-row justify-center items-center gap-6 flex-1">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={linkHref(link)} className="text-sm text-gray-800 hover:text-purple-600 transition-colors whitespace-nowrap">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a href="#signin" className="shrink-0 flex flex-row justify-center items-center gap-[10px] px-5 py-[13px] w-[145px] h-[48px] text-white text-sm font-medium bg-[#AF00E8] hover:opacity-90 transition-opacity">
          Sign In
        </a>
      </div>
    </nav>
  );
}