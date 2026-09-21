// app/component/ScrolltoTop.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState("down"); // "up" = top par jao, "down" = bottom par jao

  const scrollingRef = useRef(false); // kya hamari smooth scroll abhi chal rahi hai?

  useEffect(() => {
    const handleScroll = () => {
      // Jab smooth scroll chal rahi ho to direction mat badlo
      // (warna beech me arrow flip hota hai aur click kharab hota hai)
      if (scrollingRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setIsVisible(scrollY > 300);

      // Bottom ke 200px ke andar ho to arrow "up" (wapis top), warna "down" (bottom)
      const distanceFromBottom = docHeight - (scrollY + windowHeight);
      setDirection(distanceFromBottom < 200 ? "up" : "down");
    };

    const handleScrollEnd = () => {
      scrollingRef.current = false;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scrollend", handleScrollEnd);
    handleScroll(); // initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  }, []);

  const handleClick = () => {
    const target =
      direction === "up" ? 0 : document.documentElement.scrollHeight;

    scrollingRef.current = true; // scroll khatam hone tak scroll events ignore karo

    // Safety: agar browser "scrollend" support na kare to 1.5s baad lock unlock
    setTimeout(() => {
      scrollingRef.current = false;
    }, 1500);

    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      aria-label={direction === "up" ? "Scroll to top" : "Scroll to bottom"}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#A000DF] hover:bg-[#a000dfdf] text-white flex items-center justify-center shadow-lg transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg
        className={`w-5 h-5 transition-transform duration-300 ${
          direction === "up" ? "" : "rotate-180"
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
