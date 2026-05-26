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
      // Parallax only on desktop (avoids jank on mobile)
      const mm = gsap.matchMedia();
      mm.add("(min-width: 640px)", () => {
        gsap.to(".hero-bg-desktop", {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power4.out",
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "100svh", minHeight: "620px" }}
    >
      {/* ────── Mobile image (portrait, < sm) ────── */}
      <div className="sm:hidden absolute inset-0 w-full h-full">
        <Image
          src="/images/hero_mobile.png"
          alt="Clothing Festive Fusion"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Light gradient — let image show through */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
      </div>

      {/* ────── Desktop image (landscape, ≥ sm) ────── */}
      <div className="hero-bg-desktop hidden sm:block absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image
          src="/images/hero_banner.png"
          alt="Clothing Festive Fusion"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/70" />
      </div>

      {/* ────── Text content ────── */}
      {/* Mobile: text sits at the bottom over the image */}
      {/* Desktop: text is centered */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end sm:justify-center text-center px-6 pb-14 sm:pb-0">
        <p className="hero-text text-white/80 text-[9px] sm:text-xs md:text-sm tracking-[0.4em] uppercase mb-3 sm:mb-5 font-medium">
          Special Collections
        </p>

        <h1 className="hero-text font-heading text-[2.8rem] leading-[1] sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[11rem] text-white font-light tracking-tight mb-6 sm:mb-8">
          festive
          <br />
          fusion
        </h1>

        <Link
          href="/collections/festive"
          className="hero-text group relative inline-flex items-center gap-2 px-6 sm:px-10 py-3 sm:py-3.5 overflow-hidden border border-white/70 text-white uppercase tracking-[0.2em] text-[9px] sm:text-xs hover:border-white transition-colors duration-300"
        >
          <span className="relative z-10">Shop Now</span>
          <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>
          <div className="absolute inset-0 w-0 bg-white/15 transition-all duration-300 ease-out group-hover:w-full" />
        </Link>
      </div>

      {/* ────── Scroll indicator (desktop only) ────── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center opacity-50">
        <div className="w-[1px] h-14 bg-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
