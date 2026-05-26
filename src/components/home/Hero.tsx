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
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".hero-text", {
        y: 50,
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
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "100svh", minHeight: "600px" }}
    >
      {/* ── Desktop image (landscape) ── */}
      <div className="hero-bg hidden sm:block absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image
          src="/images/hero_banner.png"
          alt="Clothing Festive Fusion"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/75" />
      </div>

      {/* ── Mobile image (portrait) ── */}
      <div className="hero-bg sm:hidden absolute inset-0 w-full h-full">
        <Image
          src="/images/hero_mobile.png"
          alt="Clothing Festive Fusion"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        {/* Stronger gradient on mobile so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end sm:justify-center text-center px-5 pb-16 sm:pb-0">
        <p className="hero-text text-white/80 text-[10px] sm:text-xs md:text-sm tracking-[0.35em] uppercase mb-3 sm:mb-5 font-medium">
          Special Collections
        </p>
        <h1 className="hero-text font-heading text-[3.25rem] leading-none sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[11rem] text-white font-light tracking-tight mb-7 sm:mb-9">
          festive
          <br />
          fusion
        </h1>
        <Link
          href="/collections/festive"
          className="hero-text group relative inline-flex items-center gap-3 px-7 sm:px-10 py-3.5 overflow-hidden border border-white/60 bg-transparent text-white uppercase tracking-[0.2em] text-[10px] sm:text-xs hover:border-white transition-colors duration-300"
        >
          <span className="relative z-10">Shop Now</span>
          <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>
          <div className="absolute inset-0 h-full w-0 bg-white/15 transition-all duration-300 ease-out group-hover:w-full" />
        </Link>
      </div>

      {/* ── Scroll indicator (desktop only) ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex-col items-center opacity-50 hidden sm:flex">
        <div className="w-[1px] h-12 md:h-16 bg-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
