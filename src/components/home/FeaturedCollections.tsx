"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const COLLECTIONS = [
  { name: "Jewellery", image: "/images/collection_jewellery.png", href: "/collections/jewellery" },
  { name: "Kurtis", image: "/images/collection_kurtis.png", href: "/collections/kurtis" },
  { name: "Sarees", image: "/images/collection_sarees.png", href: "/collections/sarees" },
  { name: "Skirts & Tops", image: "/images/collection_kurtis.png", href: "/collections/skirts" },
  { name: "Salwar Suits", image: "/images/collection_salwars.png", href: "/collections/salwars" },
];

export default function FeaturedCollections() {
  return (
    <section className="w-full py-16 sm:py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-heading text-2xl sm:text-3xl md:text-5xl text-center text-foreground font-light mb-10 sm:mb-16 md:mb-24 tracking-wide px-4"
        >
          What are you shopping for today?
        </motion.h2>

        {/* Mobile: 2-column grid. Tablet+: horizontal scroll */}
        <div className="grid grid-cols-2 sm:hidden gap-6">
          {COLLECTIONS.map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="flex flex-col items-center group"
            >
              <Link href={collection.href} className="flex flex-col items-center outline-none w-full">
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden mb-3 bg-neutral-100 relative">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="100px"
                  />
                </div>
                <span className="font-sans text-xs font-medium tracking-widest uppercase text-foreground/80 text-center">
                  {collection.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Tablet+ horizontal scroll row */}
        <div className="hidden sm:flex overflow-x-auto justify-start md:justify-center gap-8 lg:gap-12 pb-4 snap-x hide-scrollbar">
          {COLLECTIONS.map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="snap-center shrink-0 flex flex-col items-center group"
            >
              <Link href={collection.href} className="flex flex-col items-center outline-none">
                <div className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] rounded-full overflow-hidden mb-5 border border-neutral-100 bg-neutral-50 relative">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 1024px) 160px, 180px"
                  />
                </div>
                <span className="font-sans text-sm font-medium tracking-widest uppercase text-foreground/80 group-hover:text-foreground transition-colors">
                  {collection.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
