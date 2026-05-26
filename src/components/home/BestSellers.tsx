"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { ArrowRight, ArrowLeft } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";

const PRODUCTS = [
  { id: 1, name: "Midnight Blue Silk Saree", price: "₹18,500", image: "/images/collection_sarees.png" },
  { id: 2, name: "Pearl Kundan Choker", price: "₹45,000", image: "/images/collection_jewellery.png" },
  { id: 3, name: "Ivory Hand-Embroidered Kurti", price: "₹12,000", image: "/images/collection_kurtis.png" },
  { id: 4, name: "Rose Gold Salwar Suit", price: "₹24,500", image: "/images/collection_salwars.png" },
  { id: 5, name: "Emerald Silk Saree", price: "₹21,000", image: "/images/collection_sarees.png" },
  { id: 6, name: "Gold Plated Bangles", price: "₹8,500", image: "/images/collection_jewellery.png" },
];

export default function BestSellers() {
  return (
    <section className="w-full py-16 sm:py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs tracking-[0.3em] uppercase text-foreground/60 mb-2">Most Loved</h2>
            <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground font-light">Best Sellers</h3>
          </motion.div>

          {/* Nav arrows — desktop only */}
          <div className="hidden md:flex gap-3">
            <button className="swiper-button-prev-custom w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all">
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button className="swiper-button-next-custom w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all">
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, FreeMode]}
            spaceBetween={16}
            slidesPerView={1.4}
            freeMode={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              480: { slidesPerView: 2.1, spaceBetween: 16 },
              768: { slidesPerView: 2.5, spaceBetween: 20 },
              1024: { slidesPerView: 3.2, spaceBetween: 24 },
              1280: { slidesPerView: 4.1, spaceBetween: 24 },
            }}
            className="!pb-8"
          >
            {PRODUCTS.map((product, i) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} priority={i < 3} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* View All — mobile */}
        <div className="mt-8 sm:mt-10 flex justify-center md:hidden">
          <Link
            href="/best-seller"
            className="border border-neutral-300 text-neutral-700 px-8 py-3 text-xs tracking-widest uppercase hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
