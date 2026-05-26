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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-bg", {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".hero-text", {
        y: 60,
        opacity: 0,
        duration: 1.4,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100svh] overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="hero-bg absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image
          src="/images/hero_banner.png"
          alt="Clothing Festive Fusion"
          fill
          priority
          className="object-cover object-center opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 sm:px-8">
        <p className="hero-text text-white/80 text-[10px] sm:text-xs md:text-sm tracking-[0.35em] uppercase mb-4 md:mb-6 font-medium">
          Special Collections
        </p>
        <h1 className="hero-text font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] text-white font-light tracking-tight leading-none mb-8 md:mb-10">
          festive
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          fusion
        </h1>
        <Link
          href="/collections/festive"
          className="hero-text group relative px-7 sm:px-10 py-3.5 overflow-hidden border border-white/60 bg-transparent text-white uppercase tracking-[0.2em] text-xs sm:text-sm hover:border-white transition-colors duration-300"
        >
          <span className="relative z-10">Shop Now</span>
          <div className="absolute inset-0 h-full w-0 bg-white/15 transition-all duration-300 ease-out group-hover:w-full" />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-60">
        <div className="w-[1px] h-12 md:h-16 bg-white/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
