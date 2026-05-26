"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, User, Heart, ShoppingBag, Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";

const NAV_LINKS = [
  { label: "NEW ARRIVAL", href: "/new-arrival" },
  { label: "SAREES", href: "/sarees" },
  { label: "BEST SELLER", href: "/best-seller" },
  { label: "SALE", href: "/sale" },
];

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const announcementRef = useRef<HTMLDivElement>(null);
  
  const cartItems = useCartStore((state) => state.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (announcementRef.current) observer.observe(announcementRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ─── Announcement Bar ─────────────────────────────────── */}
      <div
        ref={announcementRef}
        className="w-full bg-[#1a1a1a] text-white/80 h-10 flex items-center justify-center gap-6 text-[11px] tracking-wider px-4"
      >
        <a
          href="tel:+917994441066"
          className="flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <Phone className="w-3 h-3" strokeWidth={1.5} />
          +91 7994441066
        </a>
        <span className="w-px h-3 bg-white/20" />
        <a
          href="mailto:support@clothing.in"
          className="flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <Mail className="w-3 h-3" strokeWidth={1.5} />
          support@clothing.in
        </a>
      </div>

      {/* ─── Main Navbar ──────────────────────────────────────── */}
      <header
        className={cn(
          "w-full z-50 bg-white border-b border-neutral-100 transition-shadow duration-300",
          isSticky ? "sticky top-0 shadow-sm" : "relative"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">

          {/* ── LEFT: Logo + Nav ──────────────────────────── */}
          <div className="flex items-center gap-10 lg:gap-14 min-w-0">

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-1 text-neutral-800 shrink-0"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>

            {/* Logo */}
            <Link href="/" className="shrink-0">
              <span className="font-heading text-[1.75rem] lg:text-[2rem] tracking-widest text-neutral-900 leading-none whitespace-nowrap">
                CLOTHING
              </span>
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[12.5px] font-medium tracking-[0.18em] text-neutral-700 hover:text-neutral-400 transition-colors whitespace-nowrap relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-700 group-hover:w-full transition-all duration-300 ease-out" />
                </Link>
              ))}

              {/* Sparkle — special styling with icon */}
              <Link
                href="/sparkle"
                className="flex items-center gap-1.5 text-[12.5px] font-medium tracking-[0.18em] text-rose-600 hover:text-rose-500 transition-colors whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-rose-600 inline-block animate-pulse" />
                Sparkle
              </Link>
            </nav>
          </div>

          {/* ── RIGHT: Utility Icons ───────────────────────── */}
          <div className="flex items-center gap-5 lg:gap-6 shrink-0">
            <button className="text-neutral-700 hover:text-neutral-400 transition-colors" aria-label="Search">
              <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>

            <Link href="/account" className="hidden lg:block text-neutral-700 hover:text-neutral-400 transition-colors" aria-label="Account">
              <User className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </Link>

            <Link href="/wishlist" className="relative text-neutral-700 hover:text-neutral-400 transition-colors" aria-label="Wishlist">
              <Heart className="w-[18px] h-[18px]" strokeWidth={1.5} />
              <span className="absolute -top-2 -right-2 min-w-[16px] h-4 rounded-full bg-neutral-900 text-white text-[9px] font-semibold flex items-center justify-center px-0.5">
                0
              </span>
            </Link>

            <Link href="/cart" className="relative text-neutral-700 hover:text-neutral-400 transition-colors" aria-label="Cart">
              <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
              {mounted && cartCount > 0 && (
                <span className="absolute -top-2 -right-2 min-w-[16px] h-4 rounded-full bg-neutral-900 text-white text-[9px] font-semibold flex items-center justify-center px-0.5 animate-in zoom-in">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

        </div>
      </header>

      {/* ─── Mobile Menu ─────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/40 z-[90] lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 left-0 h-full w-[300px] bg-white z-[100] lg:hidden flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="h-16 px-6 flex items-center justify-between border-b border-neutral-100">
                <span className="font-heading text-xl tracking-widest text-neutral-900">CLOTHING</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1 text-neutral-600 hover:text-neutral-900"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-3.5 text-[13px] font-medium tracking-[0.18em] text-neutral-700 border-b border-neutral-100 hover:text-neutral-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/sparkle"
                  onClick={() => setMobileOpen(false)}
                  className="py-3.5 text-[13px] font-medium tracking-[0.18em] text-rose-600 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 inline-block" />
                  Sparkle
                </Link>
              </nav>

              {/* Footer */}
              <div className="border-t border-neutral-100 p-6 bg-neutral-50">
                <a href="tel:+917994441066" className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                  <Phone className="w-3 h-3" /> +91 7994441066
                </a>
                <a href="mailto:support@clothing.in" className="flex items-center gap-2 text-xs text-neutral-500">
                  <Mail className="w-3 h-3" /> support@clothing.in
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
