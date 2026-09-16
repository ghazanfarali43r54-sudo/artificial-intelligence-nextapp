"use client";

import React, { useEffect, useRef, useState } from "react";
import { trackRecordBg } from "../assets";

const stats = [
  { number: 5, suffix: "+", label: "Years Experience" },
  { number: 1860, suffix: "+", label: "Projects Delivered" },
  { number: 75, suffix: "+", label: "Awards Won" },
  { number: 3500, suffix: "+", label: "Happy Clients" },
];

// Custom hook: ek number ko 0 se target tak animate karta hai
function useCountUp(target, shouldStart, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime = null;
    let rafId;

    const step = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // easeOutExpo — shuru mein tez, end mein smooth ho kar rukta hai
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.floor(eased * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setValue(target); // exact final value guarantee karta hai
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [shouldStart, target, duration]);

  return value;
}

function StatItem({ stat }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // sirf ek dafa animate ho, baar baar nahi
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(stat.number, inView);

  return (
    <div ref={ref} className="flex flex-col">
      <span className="flex items-baseline">
        <span
          className="relative top-[8px] lg:top-[18px] text-[44px] leading-[50px] sm:text-[56px] sm:leading-[64px] lg:text-[72px] lg:leading-[81px] text-[#333333]"
          style={{
            fontFamily: "Garamond, serif",
            fontWeight: 400,
          }}
        >
          {count}
        </span>
        <span
          className="text-[26px] leading-[32px] sm:text-[34px] sm:leading-[42px] lg:text-[42px] lg:leading-[50px] text-[#333333]"
          style={{
            fontFamily: "Urbanist, sans-serif",
            fontWeight: 300,
          }}
        >
          {stat.suffix}
        </span>
      </span>
      <span className="text-xs sm:text-sm text-gray-500 mt-3">{stat.label}</span>
    </div>
  );
}

export default function ProvenTrackRecord() {
  return (
    <section id="proven-track" className="relative w-full max-w-[1728px] mx-auto bg-white overflow-hidden px-6 py-16 lg:py-24">
      {/* Background watermark box */}
      <div
        className="hidden lg:block absolute pointer-events-none select-none"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "78px",
          width: "97.11vw",
          height: "147px",
          zIndex: 0,
        }}
      >
        <img src={trackRecordBg} alt="" className="w-full h-full object-fit" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <h3
          className="relative w-full mb-8 lg:mb-15 text-2xl sm:text-3xl font-bold text-[#333333] lg:w-[115%] lg:left-[45%] lg:-translate-x-1/2"
          style={{
            fontFamily: "Garamond, serif",
          }}
        >
          Our Services Have{" "}
          <span className="italic font-normal text-[#AF00E8]">
            A Proven Track Record.
          </span>
        </h3>

        {/* Divider line */}
        <div className="border-t border-gray-900 mb-8 lg:mb-10 relative w-full lg:w-[125%] lg:left-1/2 lg:-translate-x-1/2" />

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 sm:gap-x-12 lg:gap-x-36 relative w-full lg:w-[125%] lg:left-1/2 lg:ml-7 lg:-translate-x-1/2">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}