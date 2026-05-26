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
    <section className="w-full py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-heading text-3xl md:text-5xl text-center text-foreground font-light mb-16 md:mb-24 tracking-wide"
        >
          What are you shopping for today?
        </motion.h3>

        <div className="flex overflow-x-auto md:justify-center gap-6 md:gap-12 pb-8 snap-x hide-scrollbar">
          {COLLECTIONS.map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="snap-center shrink-0 flex flex-col items-center group"
            >
              <Link href={collection.href} className="flex flex-col items-center outline-none">
                <div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] rounded-full overflow-hidden mb-6 border border-border/50 bg-secondary/20 relative">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 120px, 180px"
                  />
                </div>
                <span className="font-sans text-sm md:text-base font-medium tracking-widest uppercase text-foreground/80 group-hover:text-foreground transition-colors">
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
