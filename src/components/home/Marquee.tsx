"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const words = [
  "CLOTHING",
  "•",
  "LUXURY",
  "•",
  "ELEGANCE",
  "•",
  "FASHION",
  "•",
  "FESTIVE",
  "•",
  "HERITAGE",
  "•",
];

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    
    // Duplicate content for seamless loop
    const tl = gsap.timeline({ repeat: -1 });
    
    tl.to(marqueeRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 20, // Adjust speed here
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="w-full bg-primary text-primary-foreground py-4 overflow-hidden border-y border-border/20">
      <div className="w-[200%] flex whitespace-nowrap" ref={marqueeRef}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex-1 flex justify-around items-center space-x-8 px-4">
            {words.map((word, j) => (
              <span 
                key={`${i}-${j}`} 
                className={`font-heading tracking-widest text-xl md:text-2xl ${word === "•" ? "text-primary-foreground/50 opacity-50 text-sm" : ""}`}
              >
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
