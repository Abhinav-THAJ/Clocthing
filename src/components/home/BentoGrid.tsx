"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FABRICS = [
  {
    name: "Silk Collection",
    image: "/images/fabric_silk.png",
    href: "/collections/sarees",
    colSpan: "col-span-2 md:col-span-2",
    rowSpan: "row-span-2",
  },
  {
    name: "Pure Cotton",
    image: "/images/fabric_cotton.png",
    href: "/collections/kurtis",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    name: "Breathable Linen",
    image: "/images/fabric_linen.png",
    href: "/new-arrival",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    name: "Premium Velvet",
    image: "/images/fabric_velvet.png",
    href: "/collections/fabrics",
    colSpan: "col-span-2 md:col-span-2",
    rowSpan: "row-span-1",
  },
];

export default function BentoGrid() {
  return (
    <section className="w-full py-16 sm:py-24 md:py-32 bg-background px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 md:mb-20 gap-4 sm:gap-6"
        >
          <div>
            <h2 className="text-xs sm:text-sm tracking-[0.3em] uppercase text-foreground/60 mb-3">
              Curated Selection
            </h2>
            <h3 className="font-heading text-3xl sm:text-4xl md:text-6xl text-foreground font-light tracking-tight">
              Shop by Fabric
            </h3>
          </div>
          <Link
            href="/collections/fabrics"
            className="group flex items-center gap-3 text-xs uppercase tracking-widest font-medium pb-2 border-b border-foreground/30 hover:border-foreground transition-colors whitespace-nowrap shrink-0"
          >
            View All
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </motion.div>

        {/* Bento grid: 2-col mobile, 4-col desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 auto-rows-[200px] sm:auto-rows-[280px] md:auto-rows-[380px]">
          {FABRICS.map((fabric, i) => (
            <motion.div
              key={fabric.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`relative overflow-hidden group rounded-sm ${fabric.colSpan} ${fabric.rowSpan}`}
            >
              <Link href={fabric.href} className="absolute inset-0 z-20" aria-label={`Explore ${fabric.name}`} />
              <Image
                src={fabric.image}
                alt={fabric.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-colors duration-500" />
              <div className="absolute inset-0 p-4 sm:p-6 md:p-10 flex flex-col justify-end z-10">
                <h4 className="text-white font-heading text-lg sm:text-2xl md:text-4xl font-light tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {fabric.name}
                </h4>
                <div className="overflow-hidden mt-2 md:mt-4">
                  <span className="block text-white/90 text-[10px] sm:text-xs tracking-widest uppercase font-medium translate-y-[200%] group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    Explore →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
