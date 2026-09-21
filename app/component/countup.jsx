// components/CountUp.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";

export default function CountUp({ value, duration = 2000, suffix = "" }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  // Extract numeric part from value like "500+", "$2B+", "98%"
  const numericMatch = value.match(/[\d.]+/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const prefix = value.split(numericMatch?.[0] || "")[0] || "";
  const restSuffix = value.split(numericMatch?.[0] || "").slice(1).join("") || "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const increment = numericValue / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= numericValue) {
              setDisplayValue(numericValue);
              clearInterval(timer);
            } else {
              setDisplayValue(start);
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericValue, duration]);

  const formatted = Number.isInteger(numericValue)
    ? Math.floor(displayValue)
    : displayValue.toFixed(1);

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {restSuffix}
    </span>
  );
}