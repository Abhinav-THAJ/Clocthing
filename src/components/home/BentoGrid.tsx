"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FABRICS = [
  {
    name: "Silk Collection",
    image: "/images/fabric_silk.png",
    href: "/collections/sarees",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1 md:row-span-2",
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
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1",
  },
];

export default function BentoGrid() {
  return (
    <section className="w-full py-24 md:py-32 bg-background px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6"
        >
          <div>
            <h2 className="text-sm md:text-base tracking-[0.3em] uppercase text-foreground/60 mb-4">
              Curated Selection
            </h2>
            <h3 className="font-heading text-4xl md:text-6xl text-foreground font-light tracking-tight">
              Shop by Fabric
            </h3>
          </div>
          <Link
            href="/collections/fabrics"
            className="group flex items-center gap-4 text-sm uppercase tracking-widest font-medium pb-2 border-b border-foreground/30 hover:border-foreground transition-colors"
          >
            View All Fabrics
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {FABRICS.map((fabric, i) => (
            <motion.div
              key={fabric.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative overflow-hidden group rounded-sm ${fabric.colSpan} ${fabric.rowSpan}`}
            >
              {/* Wrap the entire card in a Link */}
              <Link href={fabric.href} className="absolute inset-0 z-20" aria-label={`Explore ${fabric.name}`} />

              <Image
                src={fabric.image}
                alt={fabric.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-10">
                <h4 className="text-white font-heading text-3xl md:text-4xl font-light tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {fabric.name}
                </h4>
                <div className="overflow-hidden mt-4">
                  <span className="block text-white/90 text-sm tracking-widest uppercase font-medium translate-y-[200%] group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    Explore Collection →
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
