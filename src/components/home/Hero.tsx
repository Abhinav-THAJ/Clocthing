"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on the background image
      gsap.to(".hero-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text reveal animation
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div className="hero-bg absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image
          src="/images/hero_banner.png"
          alt="Clothing Festive Fusion"
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        {/* Subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div 
        ref={textRef}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <p className="hero-text text-white/90 text-sm md:text-base tracking-[0.3em] uppercase mb-4 md:mb-6">
          Special Collections
        </p>
        <h2 className="hero-text font-heading text-6xl md:text-8xl lg:text-9xl text-white font-light tracking-tight mb-8">
          festive fusion
        </h2>
        <Link 
          href="/collections/festive"
          className="hero-text group relative px-8 py-3 overflow-hidden border border-white/50 bg-transparent text-white uppercase tracking-widest text-sm hover:border-white transition-colors duration-300"
        >
          <span className="relative z-10">Shop Now</span>
          <div className="absolute inset-0 h-full w-0 bg-white/10 transition-all duration-300 ease-out group-hover:w-full" />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-70">
        <div className="w-[1px] h-16 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
